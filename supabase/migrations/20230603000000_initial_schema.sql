-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- Users table (extends auth.users)
create table public.profiles (
  id uuid references auth.users on delete cascade not null primary key,
  username text unique not null,
  avatar_url text,
  total_score bigint default 0,
  highest_level_reached integer default 0,
  games_played integer default 0,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null,
  constraint username_length check (char_length(username) >= 3)
);

-- Enable RLS
alter table public.profiles enable row level security;

-- Policies for profiles
create policy "Public profiles are viewable by everyone."
  on profiles for select
  using (true);

create policy "Users can insert their own profile."
  on profiles for insert
  with check (auth.uid() = id);

create policy "Users can update own profile."
  on profiles for update
  using (auth.uid() = id);

-- Questions table
create table public.questions (
  id uuid default uuid_generate_v4() primary key,
  question_text text not null,
  option_a text not null,
  option_b text not null,
  option_c text not null,
  option_d text not null,
  correct_option integer not null check (correct_option between 0 and 3),
  difficulty integer not null check (difficulty between 1 and 15),
  category text not null,
  created_by uuid references auth.users(id),
  is_approved boolean default false,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable RLS
alter table public.questions enable row level security;

-- Games table
create table public.games (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references auth.users(id) not null,
  score bigint default 0,
  level_reached integer default 0,
  questions_answered integer default 0,
  correct_answers integer default 0,
  lifelines_used jsonb default '{"fiftyFifty": false, "audience": false, "phone": false}'::jsonb,
  completed_at timestamp with time zone,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Indexes for better query performance
create index idx_games_user_id on public.games(user_id);
create index idx_games_created_at on public.games(created_at);

-- Leaderboard view
create or replace view public.leaderboard as
select 
  p.id,
  p.username,
  p.avatar_url,
  g.score,
  g.level_reached,
  g.created_at,
  rank() over (order by g.score desc, g.created_at) as rank
from 
  public.games g
  join public.profiles p on g.user_id = p.id
where 
  g.completed_at is not null
order by 
  g.score desc, 
  g.created_at
limit 100;

-- Function to update user stats after game completion
create or replace function public.update_user_stats()
returns trigger as $$
begin
  -- Update user's profile with game stats
  update public.profiles
  set 
    total_score = total_score + new.score,
    highest_level_reached = greatest(highest_level_reached, new.level_reached),
    games_played = games_played + 1,
    updated_at = timezone('utc'::text, now())
  where id = new.user_id;
  
  return new;
end;
$$ language plpgsql security definer;

-- Trigger to update user stats after game completion
create trigger update_user_stats_trigger
after insert on public.games
for each row
when (new.completed_at is not null)
execute function public.update_user_stats();

-- Function to create a profile for new users
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, username, avatar_url)
  values (
    new.id, 
    new.raw_user_meta_data->>'username' or split_part(new.email, '@', 1),
    new.raw_user_meta_data->>'avatar_url'
  );
  return new;
end;
$$ language plpgsql security definer;

-- Trigger to create a profile when a new user signs up
create trigger on_auth_user_created
after insert on auth.users
for each row
execute function public.handle_new_user();

-- Insert some sample questions (for development)
insert into public.questions (
  question_text, 
  option_a, 
  option_b, 
  option_c, 
  option_d, 
  correct_option, 
  difficulty, 
  category,
  is_approved
) values 
('What is the capital of France?', 'London', 'Berlin', 'Paris', 'Madrid', 2, 1, 'Geography', true),
('Which planet is known as the Red Planet?', 'Venus', 'Mars', 'Jupiter', 'Saturn', 1, 1, 'Science', true),
('What is 2 + 2?', '3', '4', '5', '6', 1, 1, 'Math', true),
('Who painted the Mona Lisa?', 'Vincent van Gogh', 'Pablo Picasso', 'Leonardo da Vinci', 'Michelangelo', 2, 2, 'Art', true),
('What is the largest mammal in the world?', 'African Elephant', 'Blue Whale', 'Giraffe', 'Polar Bear', 1, 2, 'Science', true);
