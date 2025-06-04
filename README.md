# 🎮 Mullionaire - The Ultimate Trivia Game

A web-based trivia game inspired by "Who Wants to Be a Millionaire," built with Next.js, TypeScript, Tailwind CSS, and Supabase.

## ✨ Features

- 🎯 Multiple levels of increasing difficulty
- 🎮 Four answer choices per question
- 🛟 Three lifelines: 50:50, Ask the Audience, and Phone a Friend
- 🏆 Score tracking and leaderboards
- 🔐 User authentication with Supabase
- 🌓 Light and dark mode
- 📱 Fully responsive design

## 🚀 Getting Started

### Prerequisites

- Node.js 18 or later
- npm or yarn
- A Supabase account

### Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/mullionaire.git
   cd mullionaire
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn
   ```

3. Set up environment variables:
   - Create a `.env.local` file in the root directory
   - Add your Supabase URL and anon key:
     ```
     NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
     NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
     ```

4. Set up the database:
   - Go to your Supabase dashboard
   - Run the SQL from `supabase/migrations/20230603000000_initial_schema.sql` in the SQL editor

5. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🛠 Tech Stack

- **Frontend**: 
  - Next.js 14 (App Router)
  - TypeScript
  - Tailwind CSS
  - shadcn/ui components
  - Framer Motion (for animations)

- **Backend**:
  - Supabase (Authentication, Database, Storage)
  - PostgreSQL

## 📂 Project Structure

```
.
├── app/                    # App router
│   ├── (auth)/             # Authentication pages
│   │   ├── login/          # Login page
│   │   └── register/       # Registration page
│   ├── (game)/             # Game pages (protected)
│   │   ├── dashboard/      # User dashboard
│   │   ├── play/           # Game play page
│   │   └── leaderboard/    # Leaderboard page
│   └── ...
├── components/            # Reusable components
│   ├── ui/                 # shadcn/ui components
│   ├── game/               # Game-specific components
│   └── layout/             # Layout components
├── lib/
│   └── supabase/          # Supabase client setup
├── public/                 # Static files
├── styles/                 # Global styles
└── types/                  # TypeScript type definitions
```

## 📝 Database Schema

### Tables

1. **profiles** - User profiles (extends auth.users)
   - id (UUID, PK)
   - username (Text)
   - avatar_url (Text)
   - total_score (BigInt)
   - highest_level_reached (Integer)
   - games_played (Integer)
   - created_at (Timestamp)
   - updated_at (Timestamp)

2. **questions** - Trivia questions
   - id (UUID, PK)
   - question_text (Text)
   - option_a, option_b, option_c, option_d (Text)
   - correct_option (Integer)
   - difficulty (Integer)
   - category (Text)
   - is_approved (Boolean)

3. **games** - Game sessions
   - id (UUID, PK)
   - user_id (UUID, FK to auth.users)
   - score (BigInt)
   - level_reached (Integer)
   - questions_answered (Integer)
   - correct_answers (Integer)
   - lifelines_used (JSONB)
   - completed_at (Timestamp)

## 🧪 Testing

To run the test suite:

```bash
npm run test
# or
yarn test
```

## 🚀 Deployment

### Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

1. Push your code to a GitHub repository
2. Import the repository on Vercel
3. Add your environment variables
4. Deploy!

### Supabase

Make sure to set up the following in your Supabase project:

1. Enable Row Level Security (RLS) on all tables
2. Set up the necessary storage buckets if using file uploads
3. Configure CORS settings to allow requests from your domain

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Inspired by "Who Wants to Be a Millionaire"
- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Powered by [Supabase](https://supabase.com/)
