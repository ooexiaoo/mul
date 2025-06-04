interface QuestionInput {
  question_text: string;
  option_a: string;
  option_b: string;
  option_c: string;
  option_d: string;
  correct_option: number;
  difficulty: number;
  category: string;
  created_by: string | null;
}

// This is the main questions array
export const questions: QuestionInput[] = [
  // Level 1 (Easiest)
  {
    question_text: 'What is the capital of France?',
    option_a: 'London',
    option_b: 'Berlin',
    option_c: 'Paris',
    option_d: 'Madrid',
    correct_option: 2, // Paris is option_c
    difficulty: 1,
    category: 'Geography',
    created_by: null,
  },
  {
    question_text: 'Which planet is known as the Red Planet?',
    option_a: 'Venus',
    option_b: 'Mars',
    option_c: 'Jupiter',
    option_d: 'Saturn',
    correct_option: 1, // Mars is option_b
    difficulty: 1,
    category: 'Science',
    created_by: null,
  },
  {
    question_text: 'What is 2 + 2?',
    option_a: '3',
    option_b: '4',
    option_c: '5',
    option_d: '6',
    correct_option: 1, // 4 is option_b
    difficulty: 1,
    category: 'Math',
    created_by: null,
  },
  {
    question_text: 'Which is the largest mammal on Earth?',
    option_a: 'African Elephant',
    option_b: 'Blue Whale',
    option_c: 'Giraffe',
    option_d: 'Polar Bear',
    correct_option: 1, // Blue Whale is option_b
    difficulty: 1,
    category: 'Animals',
    created_by: null,
  },
  {
    question_text: 'What is the chemical symbol for gold?',
    option_a: 'Go',
    option_b: 'Ag',
    option_c: 'Au',
    option_d: 'Ge',
    correct_option: 2, // Au is option_c
    difficulty: 1,
    category: 'Science',
    created_by: null,
  },
  {
    question_text: 'What is the main gas in Earth\'s atmosphere?',
    option_a: 'Oxygen',
    option_b: 'Carbon Dioxide',
    option_c: 'Nitrogen',
    option_d: 'Hydrogen',
    correct_option: 2, // Nitrogen is option_c
    difficulty: 1,
    category: 'Science',
    created_by: null,
  },
  {
    question_text: 'How many continents are there?',
    option_a: '5',
    option_b: '6',
    option_c: '7',
    option_d: '8',
    correct_option: 2, // 7 is option_c
    difficulty: 1,
    category: 'Geography',
    created_by: null,
  },
  {
    question_text: 'What is the largest big cat?',
    option_a: 'Lion',
    option_b: 'Tiger',
    option_c: 'Leopard',
    option_d: 'Jaguar',
    correct_option: 1, // Tiger is option_b
    difficulty: 1,
    category: 'Animals',
    created_by: null,
  },
  {
    question_text: 'Which of these is a fruit?',
    option_a: 'Carrot',
    option_b: 'Potato',
    option_c: 'Apple',
    option_d: 'Celery',
    correct_option: 2, // Apple is option_c
    difficulty: 1,
    category: 'Science',
    created_by: null,
  },
  {
    question_text: 'What color is the sun?',
    option_a: 'Yellow',
    option_b: 'White',
    option_c: 'Orange',
    option_d: 'Appears yellow but is white',
    correct_option: 3, // Last option is correct
    difficulty: 1,
    category: 'Science',
    created_by: null,
  },

  // Level 2
  {
    question_text: 'Who painted the Mona Lisa?',
    option_a: 'Vincent van Gogh',
    option_b: 'Pablo Picasso',
    option_c: 'Leonardo da Vinci',
    option_d: 'Michelangelo',
    correct_option: 2, // da Vinci is option_c
    difficulty: 2,
    category: 'Art',
    created_by: null,
  },
  {
    question_text: 'What is the largest ocean?',
    option_a: 'Atlantic',
    option_b: 'Indian',
    option_c: 'Arctic',
    option_d: 'Pacific',
    correct_option: 3, // Pacific is option_d
    difficulty: 2,
    category: 'Geography',
    created_by: null,
  },
  {
    question_text: 'Which language has the most native speakers?',
    option_a: 'English',
    option_b: 'Spanish',
    option_c: 'Mandarin Chinese',
    option_d: 'Hindi',
    correct_option: 2, // Mandarin is option_c
    difficulty: 2,
    category: 'Language',
    created_by: null,
  },
  {
    question_text: 'What is the capital of Japan?',
    option_a: 'Beijing',
    option_b: 'Seoul',
    option_c: 'Tokyo',
    option_d: 'Bangkok',
    correct_option: 2, // Tokyo is option_c
    difficulty: 2,
    category: 'Geography',
    created_by: null,
  },
  {
    question_text: 'Which planet is closest to the Sun?',
    option_a: 'Venus',
    option_b: 'Mercury',
    option_c: 'Mars',
    option_d: 'Earth',
    correct_option: 1, // Mercury is option_b
    difficulty: 2,
    category: 'Science',
    created_by: null,
  },
  {
    question_text: 'What is the smallest prime number?',
    option_a: '0',
    option_b: '1',
    option_c: '2',
    option_d: '3',
    correct_option: 2, // 2 is option_c
    difficulty: 2,
    category: 'Math',
    created_by: null,
  },
  {
    question_text: 'Which country is called the Land of the Rising Sun?',
    option_a: 'China',
    option_b: 'Japan',
    option_c: 'South Korea',
    option_d: 'Thailand',
    correct_option: 1, // Japan is option_b
    difficulty: 2,
    category: 'Geography',
    created_by: null,
  },
  {
    question_text: 'Who wrote the Harry Potter series?',
    option_a: 'J.R.R. Tolkien',
    option_b: 'J.K. Rowling',
    option_c: 'George R.R. Martin',
    option_d: 'C.S. Lewis',
    correct_option: 1, // Rowling is option_b
    difficulty: 2,
    category: 'Literature',
    created_by: null,
  },
  {
    question_text: 'What is the hardest natural substance?',
    option_a: 'Gold',
    option_b: 'Iron',
    option_c: 'Diamond',
    option_d: 'Platinum',
    correct_option: 2, // Diamond is option_c
    difficulty: 2,
    category: 'Science',
    created_by: null,
  },
  {
    question_text: 'How many bones are in the adult human body?',
    option_a: '206',
    option_b: '300',
    option_c: '150',
    option_d: '250',
    correct_option: 0, // 206 is option_a
    difficulty: 2,
    category: 'Science',
    created_by: null,
  },

  // Level 3
  {
    question_text: 'What is the chemical formula for table salt?',
    option_a: 'H₂O',
    option_b: 'CO₂',
    option_c: 'NaCl',
    option_d: 'C₆H₁₂O₆',
    correct_option: 2, // NaCl is option_c
    difficulty: 3,
    category: 'Science',
    created_by: null,
  },
  {
    question_text: 'Who wrote "Romeo and Juliet"?',
    option_a: 'Charles Dickens',
    option_b: 'William Shakespeare',
    option_c: 'Jane Austen',
    option_d: 'Mark Twain',
    correct_option: 1, // Shakespeare is option_b
    difficulty: 3,
    category: 'Literature',
    created_by: null,
  },
  {
    question_text: 'What is the capital of Australia?',
    option_a: 'Sydney',
    option_b: 'Melbourne',
    option_c: 'Canberra',
    option_d: 'Brisbane',
    correct_option: 2, // Canberra is option_c
    difficulty: 3,
    category: 'Geography',
    created_by: null,
  },
  {
    question_text: 'Which element has the chemical symbol "O"?',
    option_a: 'Gold',
    option_b: 'Osmium',
    option_c: 'Oxygen',
    option_d: 'Oganesson',
    correct_option: 2, // Oxygen is option_c
    difficulty: 3,
    category: 'Science',
    created_by: null,
  },
  {
    question_text: 'What is the largest planet in our solar system?',
    option_a: 'Earth',
    option_b: 'Saturn',
    option_c: 'Jupiter',
    option_d: 'Neptune',
    correct_option: 2, // Jupiter is option_c
    difficulty: 3,
    category: 'Science',
    created_by: null,
  },
  {
    question_text: 'Which is NOT a primary color of light?',
    option_a: 'Red',
    option_b: 'Green',
    option_c: 'Blue',
    option_d: 'Yellow',
    correct_option: 3, // Yellow is option_d
    difficulty: 3,
    category: 'Science',
    created_by: null,
  },
  {
    question_text: 'What is the capital of Spain?',
    option_a: 'Barcelona',
    option_b: 'Seville',
    option_c: 'Madrid',
    option_d: 'Valencia',
    correct_option: 2, // Madrid is option_c
    difficulty: 3,
    category: 'Geography',
    created_by: null,
  },
  {
    question_text: 'Which element is liquid at room temperature?',
    option_a: 'Bromine',
    option_b: 'Iodine',
    option_c: 'Mercury',
    option_d: 'Both A and C',
    correct_option: 3, // Both A and C is option_d
    difficulty: 3,
    category: 'Science',
    created_by: null,
  },
  {
    question_text: 'Who was the first woman to win a Nobel Prize?',
    option_a: 'Marie Curie',
    option_b: 'Rosalind Franklin',
    option_c: 'Florence Nightingale',
    option_d: 'Jane Addams',
    correct_option: 0, // Marie Curie is option_a
    difficulty: 3,
    category: 'History',
    created_by: null,
  },
  {
    question_text: 'What is the square root of 144?',
    option_a: '11',
    option_b: '12',
    option_c: '13',
    option_d: '14',
    correct_option: 1, // 12 is option_b
    difficulty: 3,
    category: 'Math',
    created_by: null,
  },

  // Level 4
  {
    question_text: 'Who discovered gravity?',
    option_a: 'Albert Einstein',
    option_b: 'Isaac Newton',
    option_c: 'Galileo Galilei',
    option_d: 'Nikola Tesla',
    correct_option: 1, // Newton is option_b
    difficulty: 4,
    category: 'Science',
    created_by: null,
  },
  {
    question_text: 'What is the capital of Canada?',
    option_a: 'Toronto',
    option_b: 'Vancouver',
    option_c: 'Ottawa',
    option_d: 'Montreal',
    correct_option: 2, // Ottawa is option_c
    difficulty: 4,
    category: 'Geography',
    created_by: null,
  },
  {
    question_text: 'What is the primary language of Brazil?',
    option_a: 'Spanish',
    option_b: 'Portuguese',
    option_c: 'English',
    option_d: 'French',
    correct_option: 1, // Portuguese is option_b
    difficulty: 4,
    category: 'Language',
    created_by: null,
  },
  {
    question_text: 'What is the largest desert?',
    option_a: 'Sahara',
    option_b: 'Arabian',
    option_c: 'Gobi',
    option_d: 'Antarctic',
    correct_option: 3, // Antarctic is option_d
    difficulty: 4,
    category: 'Geography',
    created_by: null,
  },
  {
    question_text: 'Who painted "The Starry Night"?',
    option_a: 'Pablo Picasso',
    option_b: 'Vincent van Gogh',
    option_c: 'Claude Monet',
    option_d: 'Salvador Dalí',
    correct_option: 1, // van Gogh is option_b
    difficulty: 4,
    category: 'Art',
    created_by: null,
  },
  {
    question_text: 'Which is the smallest ocean?',
    option_a: 'Atlantic',
    option_b: 'Indian',
    option_c: 'Arctic',
    option_d: 'Southern',
    correct_option: 2, // Arctic is option_c
    difficulty: 4,
    category: 'Geography',
    created_by: null,
  },
  {
    question_text: 'What is Jupiter\'s largest moon?',
    option_a: 'Titan',
    option_b: 'Ganymede',
    option_c: 'Moon',
    option_d: 'Europa',
    correct_option: 1, // Ganymede is option_b
    difficulty: 4,
    category: 'Science',
    created_by: null,
  },
  {
    question_text: 'When did WWII end?',
    option_a: '1943',
    option_b: '1944',
    option_c: '1945',
    option_d: '1946',
    correct_option: 2, // 1945 is option_c
    difficulty: 4,
    category: 'History',
    created_by: null,
  },
  {
    question_text: 'What is the chemical symbol for potassium?',
    option_a: 'K',
    option_b: 'P',
    option_c: 'Po',
    option_d: 'Pt',
    correct_option: 0, // K is option_a
    difficulty: 4,
    category: 'Science',
    created_by: null,
  },
  {
    question_text: 'Which artist cut off his own ear?',
    option_a: 'Pablo Picasso',
    option_b: 'Vincent van Gogh',
    option_c: 'Salvador Dalí',
    option_d: 'Edvard Munch',
    correct_option: 1, // van Gogh is option_b
    difficulty: 4,
    category: 'Art',
    created_by: null,
  },

  // Level 5
  {
    question_text: 'What is the capital of New Zealand?',
    option_a: 'Auckland',
    option_b: 'Wellington',
    option_c: 'Christchurch',
    option_d: 'Queenstown',
    correct_option: 1, // Wellington is option_b
    difficulty: 5,
    category: 'Geography',
    created_by: null,
  },
  {
    question_text: 'Which planet is known as the Morning Star?',
    option_a: 'Mars',
    option_b: 'Jupiter',
    option_c: 'Venus',
    option_d: 'Mercury',
    correct_option: 2, // Venus is option_c
    difficulty: 5,
    category: 'Science',
    created_by: null,
  },
  {
    question_text: 'What is the largest human organ?',
    option_a: 'Liver',
    option_b: 'Brain',
    option_c: 'Skin',
    option_d: 'Lungs',
    correct_option: 2, // Skin is option_c
    difficulty: 5,
    category: 'Science',
    created_by: null,
  },
  {
    question_text: 'Who wrote "The Great Gatsby"?',
    option_a: 'Ernest Hemingway',
    option_b: 'F. Scott Fitzgerald',
    option_c: 'John Steinbeck',
    option_d: 'William Faulkner',
    correct_option: 1, // Fitzgerald is option_b
    difficulty: 5,
    category: 'Literature',
    created_by: null,
  },
  {
    question_text: 'What is the chemical symbol for silver?',
    option_a: 'Si',
    option_b: 'Ag',
    option_c: 'Au',
    option_d: 'Sr',
    correct_option: 1, // Ag is option_b
    difficulty: 5,
    category: 'Science',
    created_by: null,
  },
  {
    question_text: 'What is the capital of South Africa?',
    option_a: 'Cape Town',
    option_b: 'Pretoria',
    option_c: 'Bloemfontein',
    option_d: 'Johannesburg',
    correct_option: 1, // Pretoria is option_b
    difficulty: 5,
    category: 'Geography',
    created_by: null,
  },
  {
    question_text: 'Which is a vector quantity?',
    option_a: 'Speed',
    option_b: 'Mass',
    option_c: 'Time',
    option_d: 'Velocity',
    correct_option: 3, // Velocity is option_d
    difficulty: 5,
    category: 'Science',
    created_by: null,
  },
  {
    question_text: 'Who wrote "To Kill a Mockingbird"?',
    option_a: 'Harper Lee',
    option_b: 'Truman Capote',
    option_c: 'J.D. Salinger',
    option_d: 'John Steinbeck',
    correct_option: 0, // Harper Lee is option_a
    difficulty: 5,
    category: 'Literature',
    created_by: null,
  },
  {
    question_text: 'What is the atomic number of carbon?',
    option_a: '4',
    option_b: '6',
    option_c: '8',
    option_d: '12',
    correct_option: 1, // 6 is option_b
    difficulty: 5,
    category: 'Science',
    created_by: null,
  },
  {
    question_text: 'Which country is landlocked?',
    option_a: 'Brazil',
    option_b: 'Australia',
    option_c: 'Switzerland',
    option_d: 'Philippines',
    correct_option: 2, // Switzerland is option_c
    difficulty: 5,
    category: 'Geography',
    created_by: null,
  },

  // Level 6
  {
    question_text: 'Which is NOT a rock type?',
    option_a: 'Igneous',
    option_b: 'Sedimentary',
    option_c: 'Metamorphic',
    option_d: 'Volcanic',
    correct_option: 3, // Volcanic is option_d
    difficulty: 6,
    category: 'Science',
    created_by: null,
  },
  {
    question_text: 'What is the sun primarily made of?',
    option_a: 'Hydrogen',
    option_b: 'Helium',
    option_c: 'Oxygen',
    option_d: 'Carbon',
    correct_option: 0, // Hydrogen is option_a
    difficulty: 6,
    category: 'Science',
    created_by: null,
  },
  {
    question_text: 'Who was the first US President?',
    option_a: 'Thomas Jefferson',
    option_b: 'John Adams',
    option_c: 'George Washington',
    option_d: 'James Madison',
    correct_option: 2, // Washington is option_c
    difficulty: 6,
    category: 'History',
    created_by: null,
  },
  {
    question_text: 'What is the largest country by area?',
    option_a: 'Canada',
    option_b: 'China',
    option_c: 'United States',
    option_d: 'Russia',
    correct_option: 3, // Russia is option_d
    difficulty: 6,
    category: 'Geography',
    created_by: null,
  },
  {
    question_text: 'Which is a noble gas?',
    option_a: 'Oxygen',
    option_b: 'Nitrogen',
    option_c: 'Helium',
    option_d: 'Chlorine',
    correct_option: 2, // Helium is option_c
    difficulty: 6,
    category: 'Science',
    created_by: null,
  },
  {
    question_text: 'What is the largest internal human organ?',
    option_a: 'Heart',
    option_b: 'Liver',
    option_c: 'Brain',
    option_d: 'Lungs',
    correct_option: 1, // Liver is option_b
    difficulty: 6,
    category: 'Science',
    created_by: null,
  },
  {
    question_text: 'Which element is magnetic?',
    option_a: 'Iron',
    option_b: 'Aluminum',
    option_c: 'Copper',
    option_d: 'Silver',
    correct_option: 0, // Iron is option_a
    difficulty: 6,
    category: 'Science',
    created_by: null,
  },
  {
    question_text: 'Where is the Sahara desert located?',
    option_a: 'Asia',
    option_b: 'Africa',
    option_c: 'Australia',
    option_d: 'South America',
    correct_option: 1, // Africa is option_b
    difficulty: 6,
    category: 'Geography',
    created_by: null,
  },
  {
    question_text: 'What is the longest river?',
    option_a: 'Amazon',
    option_b: 'Nile',
    option_c: 'Yangtze',
    option_d: 'Mississippi',
    correct_option: 1, // Nile is option_b
    difficulty: 6,
    category: 'Geography',
    created_by: null,
  },
  {
    question_text: 'Which planet has the most moons?',
    option_a: 'Jupiter',
    option_b: 'Saturn',
    option_c: 'Uranus',
    option_d: 'Neptune',
    correct_option: 1, // Saturn is option_b
    difficulty: 6,
    category: 'Science',
    created_by: null,
  },

  // Level 7
  {
    question_text: 'What is the speed of light in vacuum?',
    option_a: '300,000 km/s',
    option_b: '150,000 km/s',
    option_c: '225,000 km/s',
    option_d: '299,792 km/s',
    correct_option: 3, // 299,792 is option_d
    difficulty: 7,
    category: 'Science',
    created_by: null,
  },
  {
    question_text: 'Who is called the father of modern physics?',
    option_a: 'Isaac Newton',
    option_b: 'Albert Einstein',
    option_c: 'Galileo Galilei',
    option_d: 'Niels Bohr',
    correct_option: 1, // Einstein is option_b
    difficulty: 7,
    category: 'Science',
    created_by: null,
  },
  {
    question_text: 'Which is a prime number?',
    option_a: '1',
    option_b: '9',
    option_c: '15',
    option_d: '17',
    correct_option: 3, // 17 is option_d
    difficulty: 7,
    category: 'Math',
    created_by: null,
  },
  {
    question_text: 'What is the capital of Turkey?',
    option_a: 'Istanbul',
    option_b: 'Ankara',
    option_c: 'Izmir',
    option_d: 'Antalya',
    correct_option: 1, // Ankara is option_b
    difficulty: 7,
    category: 'Geography',
    created_by: null,
  },
  {
    question_text: 'Which is a renewable energy source?',
    option_a: 'Coal',
    option_b: 'Natural Gas',
    option_c: 'Solar',
    option_d: 'Nuclear',
    correct_option: 2, // Solar is option_c
    difficulty: 7,
    category: 'Science',
    created_by: null,
  },
  {
    question_text: 'Who wrote "1984"?',
    option_a: 'Aldous Huxley',
    option_b: 'George Orwell',
    option_c: 'Ray Bradbury',
    option_d: 'H.G. Wells',
    correct_option: 1, // Orwell is option_b
    difficulty: 7,
    category: 'Literature',
    created_by: null,
  },
  {
    question_text: 'What is H₂SO₄?',
    option_a: 'Sulfurous Acid',
    option_b: 'Sulfuric Acid',
    option_c: 'Hydrochloric Acid',
    option_d: 'Nitric Acid',
    correct_option: 1, // Sulfuric Acid is option_b
    difficulty: 7,
    category: 'Science',
    created_by: null,
  },
  {
    question_text: 'Which animal is a marsupial?',
    option_a: 'Koala',
    option_b: 'Panda',
    option_c: 'Grizzly Bear',
    option_d: 'Wolf',
    correct_option: 0, // Koala is option_a
    difficulty: 7,
    category: 'Animals',
    created_by: null,
  },
  {
    question_text: 'What is the largest island?',
    option_a: 'Australia',
    option_b: 'Greenland',
    option_c: 'New Guinea',
    option_d: 'Madagascar',
    correct_option: 1, // Greenland is option_b
    difficulty: 7,
    category: 'Geography',
    created_by: null,
  },
  {
    question_text: 'Which is NOT a programming language?',
    option_a: 'Java',
    option_b: 'Python',
    option_c: 'C++',
    option_d: 'HTTP',
    correct_option: 3, // HTTP is option_d
    difficulty: 7,
    category: 'Technology',
    created_by: null,
  },

  // Level 8
  {
    question_text: 'What is the derivative of x²?',
    option_a: 'x',
    option_b: '2x',
    option_c: '2',
    option_d: 'x³/3',
    correct_option: 1, // 2x is option_b
    difficulty: 8,
    category: 'Math',
    created_by: null,
  },
  {
    question_text: 'Which is a trigonometric identity?',
    option_a: 'sin²x + cos²x = 1',
    option_b: 'sinx + cosx = 1',
    option_c: 'tanx = sinx/cosx',
    option_d: 'Both A and C',
    correct_option: 3, // Both A and C is option_d
    difficulty: 8,
    category: 'Math',
    created_by: null,
  },
  {
    question_text: 'Who discovered penicillin?',
    option_a: 'Alexander Fleming',
    option_b: 'Louis Pasteur',
    option_c: 'Robert Koch',
    option_d: 'Joseph Lister',
    correct_option: 0, // Fleming is option_a
    difficulty: 8,
    category: 'Science',
    created_by: null,
  },
  {
    question_text: 'What is the largest volcano in the solar system?',
    option_a: 'Mount Everest',
    option_b: 'Mauna Kea',
    option_c: 'Olympus Mons',
    option_d: 'Mount Vesuvius',
    correct_option: 2, // Olympus Mons is option_c
    difficulty: 8,
    category: 'Science',
    created_by: null,
  },
  {
    question_text: 'What is a liver function?',
    option_a: 'Pump blood',
    option_b: 'Filter toxins',
    option_c: 'Digest carbohydrates',
    option_d: 'Produce insulin',
    correct_option: 1, // Filter toxins is option_b
    difficulty: 8,
    category: 'Science',
    created_by: null,
  },
  {
    question_text: 'What is the capital of Iceland?',
    option_a: 'Oslo',
    option_b: 'Reykjavik',
    option_c: 'Helsinki',
    option_d: 'Stockholm',
    correct_option: 1, // Reykjavik is option_b
    difficulty: 8,
    category: 'Geography',
    created_by: null,
  },
  {
    question_text: 'What is the unit of pressure?',
    option_a: 'Newton',
    option_b: 'Joule',
    option_c: 'Pascal',
    option_d: 'Watt',
    correct_option: 2, // Pascal is option_c
    difficulty: 8,
    category: 'Science',
    created_by: null,
  },
  {
    question_text: 'What is Avogadro\'s number?',
    option_a: '6.02 × 10²³',
    option_b: '3.00 × 10⁸',
    option_c: '9.81',
    option_d: '1.67 × 10⁻²⁷',
    correct_option: 0, // 6.02 × 10²³ is option_a
    difficulty: 8,
    category: 'Science',
    created_by: null,
  },
  {
    question_text: 'Who painted the Sistine Chapel ceiling?',
    option_a: 'Leonardo da Vinci',
    option_b: 'Michelangelo',
    option_c: 'Raphael',
    option_d: 'Donatello',
    correct_option: 1, // Michelangelo is option_b
    difficulty: 8,
    category: 'Art',
    created_by: null,
  },
  {
    question_text: 'Which is NOT an atmospheric layer?',
    option_a: 'Troposphere',
    option_b: 'Stratosphere',
    option_c: 'Hydrosphere',
    option_d: 'Thermosphere',
    correct_option: 2, // Hydrosphere is option_c
    difficulty: 8,
    category: 'Science',
    created_by: null,
  },

  // Level 9
  {
    question_text: 'What is ∫(1/x) dx?',
    option_a: 'ln|x| + C',
    option_b: 'x² + C',
    option_c: '1/x² + C',
    option_d: 'eˣ + C',
    correct_option: 0, // ln|x| + C is option_a
    difficulty: 9,
    category: 'Math',
    created_by: null,
  },
  {
    question_text: 'Which is a Lewis acid?',
    option_a: 'NH₃',
    option_b: 'BF₃',
    option_c: 'H₂O',
    option_d: 'OH⁻',
    correct_option: 1, // BF₃ is option_b
    difficulty: 9,
    category: 'Science',
    created_by: null,
  },
  {
    question_text: 'Who wrote "The Republic"?',
    option_a: 'Aristotle',
    option_b: 'Socrates',
    option_c: 'Plato',
    option_d: 'Confucius',
    correct_option: 2, // Plato is option_c
    difficulty: 9,
    category: 'Philosophy',
    created_by: null,
  },
  {
    question_text: 'Which country has the largest population?',
    option_a: 'India',
    option_b: 'United States',
    option_c: 'China',
    option_d: 'Indonesia',
    correct_option: 2, // China is option_c
    difficulty: 9,
    category: 'Geography',
    created_by: null,
  },
  {
    question_text: 'What is the largest penguin species?',
    option_a: 'Emperor Penguin',
    option_b: 'King Penguin',
    option_c: 'Adelie Penguin',
    option_d: 'Gentoo Penguin',
    correct_option: 0, // Emperor is option_a
    difficulty: 9,
    category: 'Animals',
    created_by: null,
  },
  {
    question_text: 'Which is a complex number?',
    option_a: '3 + 4i',
    option_b: '5',
    option_c: '-2.5',
    option_d: '√2',
    correct_option: 0, // 3+4i is option_a
    difficulty: 9,
    category: 'Math',
    created_by: null,
  },
  {
    question_text: 'What is the capital of Argentina?',
    option_a: 'Rio de Janeiro',
    option_b: 'Buenos Aires',
    option_c: 'Santiago',
    option_d: 'Lima',
    correct_option: 1, // Buenos Aires is option_b
    difficulty: 9,
    category: 'Geography',
    created_by: null,
  },
  {
    question_text: 'Which metal has the highest melting point?',
    option_a: 'Tungsten',
    option_b: 'Iron',
    option_c: 'Gold',
    option_d: 'Silver',
    correct_option: 0, // Tungsten is option_a
    difficulty: 9,
    category: 'Science',
    created_by: null,
  },
  {
    question_text: 'What is the largest shark species?',
    option_a: 'Great White',
    option_b: 'Whale Shark',
    option_c: 'Tiger Shark',
    option_d: 'Hammerhead',
    correct_option: 1, // Whale Shark is option_b
    difficulty: 9,
    category: 'Animals',
    created_by: null,
  },
  {
    question_text: 'Which is a measure of central tendency?',
    option_a: 'Mean',
    option_b: 'Variance',
    option_c: 'Standard Deviation',
    option_d: 'Range',
    correct_option: 0, // Mean is option_a
    difficulty: 9,
    category: 'Math',
    created_by: null,
  },

  // Level 10
  {
    question_text: 'What is i²? (imaginary unit)',
    option_a: '-1',
    option_b: '1',
    option_c: '0',
    option_d: 'i',
    correct_option: 0, // -1 is option_a
    difficulty: 10,
    category: 'Math',
    created_by: null,
  },
  {
    question_text: 'Which is a strong acid?',
    option_a: 'Acetic Acid',
    option_b: 'Citric Acid',
    option_c: 'Hydrochloric Acid',
    option_d: 'Carbonic Acid',
    correct_option: 2, // Hydrochloric is option_c
    difficulty: 10,
    category: 'Science',
    created_by: null,
  },
  {
    question_text: 'Who developed relativity theory?',
    option_a: 'Isaac Newton',
    option_b: 'Albert Einstein',
    option_c: 'Stephen Hawking',
    option_d: 'Niels Bohr',
    correct_option: 1, // Einstein is option_b
    difficulty: 10,
    category: 'Science',
    created_by: null,
  },
  {
    question_text: 'Which country produces the most coffee?',
    option_a: 'Colombia',
    option_b: 'Brazil',
    option_c: 'Vietnam',
    option_d: 'Ethiopia',
    correct_option: 1, // Brazil is option_b
    difficulty: 10,
    category: 'Geography',
    created_by: null,
  },
  {
    question_text: 'What is the largest bird?',
    option_a: 'Ostrich',
    option_b: 'Emu',
    option_c: 'Albatross',
    option_d: 'Condor',
    correct_option: 0, // Ostrich is option_a
    difficulty: 10,
    category: 'Animals',
    created_by: null,
  },
  {
    question_text: 'Which is NOT a fundamental force?',
    option_a: 'Gravity',
    option_b: 'Electromagnetism',
    option_c: 'Strong Nuclear',
    option_d: 'Centrifugal',
    correct_option: 3, // Centrifugal is option_d
    difficulty: 10,
    category: 'Science',
    created_by: null,
  },
  {
    question_text: 'What is the capital of Norway?',
    option_a: 'Stockholm',
    option_b: 'Copenhagen',
    option_c: 'Oslo',
    option_d: 'Helsinki',
    correct_option: 2, // Oslo is option_c
    difficulty: 10,
    category: 'Geography',
    created_by: null,
  },
  {
    question_text: 'Which is a greenhouse gas?',
    option_a: 'Oxygen',
    option_b: 'Nitrogen',
    option_c: 'Carbon Dioxide',
    option_d: 'Argon',
    correct_option: 2, // CO₂ is option_c
    difficulty: 10,
    category: 'Science',
    created_by: null,
  },
  {
    question_text: 'Who composed "Moonlight Sonata"?',
    option_a: 'Mozart',
    option_b: 'Beethoven',
    option_c: 'Bach',
    option_d: 'Chopin',
    correct_option: 1, // Beethoven is option_b
    difficulty: 10,
    category: 'Music',
    created_by: null,
  },
  {
    question_text: 'What is the area of a circle?',
    option_a: 'πr²',
    option_b: '2πr',
    option_c: 'πd',
    option_d: '4πr²',
    correct_option: 0, // πr² is option_a
    difficulty: 10,
    category: 'Math',
    created_by: null,
  },

  // Level 11
  {
    question_text: 'What is d/dx(sin x)?',
    option_a: 'cos x',
    option_b: '-cos x',
    option_c: '-sin x',
    option_d: 'tan x',
    correct_option: 0, // cos x is option_a
    difficulty: 11,
    category: 'Math',
    created_by: null,
  },
  {
    question_text: 'Which is a halogen?',
    option_a: 'Sodium',
    option_b: 'Chlorine',
    option_c: 'Argon',
    option_d: 'Potassium',
    correct_option: 1, // Chlorine is option_b
    difficulty: 11,
    category: 'Science',
    created_by: null,
  },
  {
    question_text: 'Who was the first female UK Prime Minister?',
    option_a: 'Theresa May',
    option_b: 'Margaret Thatcher',
    option_c: 'Angela Merkel',
    option_d: 'Indira Gandhi',
    correct_option: 1, // Thatcher is option_b
    difficulty: 11,
    category: 'History',
    created_by: null,
  },
  {
    question_text: 'Which planet has the Great Red Spot?',
    option_a: 'Mars',
    option_b: 'Jupiter',
    option_c: 'Saturn',
    option_d: 'Neptune',
    correct_option: 1, // Jupiter is option_b
    difficulty: 11,
    category: 'Science',
    created_by: null,
  },
  {
    question_text: 'What is the largest bear species?',
    option_a: 'Grizzly',
    option_b: 'Polar Bear',
    option_c: 'Kodiak',
    option_d: 'Black Bear',
    correct_option: 1, // Polar Bear is option_b
    difficulty: 11,
    category: 'Animals',
    created_by: null,
  },
  {
    question_text: 'Which reaction is double displacement?',
    option_a: 'AB + CD → AD + CB',
    option_b: 'A + BC → AC + B',
    option_c: 'AB → A + B',
    option_d: 'A + B → AB',
    correct_option: 0, // AB+CD→AD+CB is option_a
    difficulty: 11,
    category: 'Science',
    created_by: null,
  },
  {
    question_text: 'What is the capital of Switzerland?',
    option_a: 'Zurich',
    option_b: 'Geneva',
    option_c: 'Bern',
    option_d: 'Lausanne',
    correct_option: 2, // Bern is option_c
    difficulty: 11,
    category: 'Geography',
    created_by: null,
  },
  {
    question_text: 'Which is NOT a prime number?',
    option_a: '2',
    option_b: '3',
    option_c: '4',
    option_d: '5',
    correct_option: 2, // 4 is option_c
    difficulty: 11,
    category: 'Math',
    created_by: null,
  },
  {
    question_text: 'Who wrote "Pride and Prejudice"?',
    option_a: 'Emily Brontë',
    option_b: 'Charlotte Brontë',
    option_c: 'Jane Austen',
    option_d: 'Mary Shelley',
    correct_option: 2, // Austen is option_c
    difficulty: 11,
    category: 'Literature',
    created_by: null,
  },
  {
    question_text: 'What is the chemical symbol for lead?',
    option_a: 'Le',
    option_b: 'Ld',
    option_c: 'Pb',
    option_d: 'Pt',
    correct_option: 2, // Pb is option_c
    difficulty: 11,
    category: 'Science',
    created_by: null,
  },

  // Level 12
  {
    question_text: 'What is ∫eˣ dx?',
    option_a: 'eˣ + C',
    option_b: 'x·eˣ + C',
    option_c: 'eˣ⁺¹/(x+1) + C',
    option_d: 'ln|eˣ| + C',
    correct_option: 0, // eˣ + C is option_a
    difficulty: 12,
    category: 'Math',
    created_by: null,
  },
  {
    question_text: 'Which is a transition metal?',
    option_a: 'Sodium',
    option_b: 'Calcium',
    option_c: 'Iron',
    option_d: 'Aluminum',
    correct_option: 2, // Iron is option_c
    difficulty: 12,
    category: 'Science',
    created_by: null,
  },
  {
    question_text: 'Who discovered the electron?',
    option_a: 'Ernest Rutherford',
    option_b: 'J.J. Thomson',
    option_c: 'James Chadwick',
    option_d: 'Niels Bohr',
    correct_option: 1, // Thomson is option_b
    difficulty: 12,
    category: 'Science',
    created_by: null,
  },
  {
    question_text: 'What is the largest human gland?',
    option_a: 'Pancreas',
    option_b: 'Liver',
    option_c: 'Thyroid',
    option_d: 'Pituitary',
    correct_option: 1, // Liver is option_b
    difficulty: 12,
    category: 'Science',
    created_by: null,
  },
  {
    question_text: 'Which country has the most natural lakes?',
    option_a: 'United States',
    option_b: 'Russia',
    option_c: 'Canada',
    option_d: 'China',
    correct_option: 2, // Canada is option_c
    difficulty: 12,
    category: 'Geography',
    created_by: null,
  },
  {
    question_text: 'What is the gravitational constant?',
    option_a: '9.8 m/s²',
    option_b: '6.67430 × 10⁻¹¹ m³·kg⁻¹·s⁻²',
    option_c: '3.00 × 10⁸ m/s',
    option_d: '6.02 × 10²³ mol⁻¹',
    correct_option: 1, // Option_b
    difficulty: 12,
    category: 'Science',
    created_by: null,
  },
  {
    question_text: 'Which base is found in DNA?',
    option_a: 'Uracil',
    option_b: 'Adenine',
    option_c: 'Ribose',
    option_d: 'Phosphate',
    correct_option: 1, // Adenine is option_b
    difficulty: 12,
    category: 'Science',
    created_by: null,
  },
  {
    question_text: 'What is the capital of Peru?',
    option_a: 'Lima',
    option_b: 'Santiago',
    option_c: 'Bogotá',
    option_d: 'Quito',
    correct_option: 0, // Lima is option_a
    difficulty: 12,
    category: 'Geography',
    created_by: null,
  },
  {
    question_text: 'Which is a scalar quantity?',
    option_a: 'Force',
    option_b: 'Velocity',
    option_c: 'Energy',
    option_d: 'Acceleration',
    correct_option: 2, // Energy is option_c
    difficulty: 12,
    category: 'Science',
    created_by: null,
  },
  {
    question_text: 'Who wrote "The Iliad"?',
    option_a: 'Virgil',
    option_b: 'Homer',
    option_c: 'Sophocles',
    option_d: 'Plato',
    correct_option: 1, // Homer is option_b
    difficulty: 12,
    category: 'Literature',
    created_by: null,
  },

  // Level 13
  {
    question_text: 'Solve: 2x² - 8 = 0',
    option_a: 'x = 2',
    option_b: 'x = -2',
    option_c: 'x = ±2',
    option_d: 'x = 4',
    correct_option: 2, // ±2 is option_c
    difficulty: 13,
    category: 'Math',
    created_by: null,
  },
  {
    question_text: 'Which non-metal is liquid at room temperature?',
    option_a: 'Mercury',
    option_b: 'Bromine',
    option_c: 'Chlorine',
    option_d: 'Iodine',
    correct_option: 1, // Bromine is option_b
    difficulty: 13,
    category: 'Science',
    created_by: null,
  },
  {
    question_text: 'Who was the first man on the moon?',
    option_a: 'Yuri Gagarin',
    option_b: 'Neil Armstrong',
    option_c: 'Buzz Aldrin',
    option_d: 'Alan Shepard',
    correct_option: 1, // Armstrong is option_b
    difficulty: 13,
    category: 'History',
    created_by: null,
  },
  {
    question_text: 'Which is the largest star type?',
    option_a: 'Red Dwarf',
    option_b: 'Neutron Star',
    option_c: 'Red Giant',
    option_d: 'Hypergiant',
    correct_option: 3, // Hypergiant is option_d
    difficulty: 13,
    category: 'Science',
    created_by: null,
  },
  {
    question_text: 'What is the smallest country?',
    option_a: 'Monaco',
    option_b: 'Nauru',
    option_c: 'Vatican City',
    option_d: 'San Marino',
    correct_option: 2, // Vatican City is option_c
    difficulty: 13,
    category: 'Geography',
    created_by: null,
  },
  {
    question_text: 'Which is true for a parallelogram?',
    option_a: 'All sides equal',
    option_b: 'Opposite sides parallel',
    option_c: 'Diagonals equal',
    option_d: 'All angles 90°',
    correct_option: 1, // Opposite sides parallel is option_b
    difficulty: 13,
    category: 'Math',
    created_by: null,
  },
  {
    question_text: 'What is the capital of Mongolia?',
    option_a: 'Ulaanbaatar',
    option_b: 'Astana',
    option_c: 'Bishkek',
    option_d: 'Dushanbe',
    correct_option: 0, // Ulaanbaatar is option_a
    difficulty: 13,
    category: 'Geography',
    created_by: null,
  },
  {
    question_text: 'Which is NOT a type of RNA?',
    option_a: 'mRNA',
    option_b: 'tRNA',
    option_c: 'rRNA',
    option_d: 'zRNA',
    correct_option: 3, // zRNA is option_d
    difficulty: 13,
    category: 'Science',
    created_by: null,
  },
  {
    question_text: 'Who discovered X-rays?',
    option_a: 'Marie Curie',
    option_b: 'Wilhelm Röntgen',
    option_c: 'Albert Einstein',
    option_d: 'Niels Bohr',
    correct_option: 1, // Röntgen is option_b
    difficulty: 13,
    category: 'Science',
    created_by: null,
  },
  {
    question_text: 'What is the golden ratio?',
    option_a: '1.414',
    option_b: '3.14',
    option_c: '1.618',
    option_d: '2.718',
    correct_option: 2, // 1.618 is option_c
    difficulty: 13,
    category: 'Math',
    created_by: null,
  },

  // Level 14
  {
    question_text: 'What is d/dx(ln x)?',
    option_a: '1/x',
    option_b: 'x',
    option_c: 'eˣ',
    option_d: 'log x',
    correct_option: 0, // 1/x is option_a
    difficulty: 14,
    category: 'Math',
    created_by: null,
  },
  {
    question_text: 'Which is a rare earth element?',
    option_a: 'Gold',
    option_b: 'Silver',
    option_c: 'Neodymium',
    option_d: 'Uranium',
    correct_option: 2, // Neodymium is option_c
    difficulty: 14,
    category: 'Science',
    created_by: null,
  },
  {
    question_text: 'Who was the first female Physics Nobel laureate?',
    option_a: 'Marie Curie',
    option_b: 'Maria Goeppert-Mayer',
    option_c: 'Donna Strickland',
    option_d: 'Rosalind Franklin',
    correct_option: 0, // Marie Curie is option_a
    difficulty: 14,
    category: 'History',
    created_by: null,
  },
  {
    question_text: 'What is Saturn\'s largest moon?',
    option_a: 'Titan',
    option_b: 'Enceladus',
    option_c: 'Mimas',
    option_d: 'Iapetus',
    correct_option: 0, // Titan is option_a
    difficulty: 14,
    category: 'Science',
    created_by: null,
  },
  {
    question_text: 'Which country has the longest coastline?',
    option_a: 'Russia',
    option_b: 'Canada',
    option_c: 'Australia',
    option_d: 'United States',
    correct_option: 1, // Canada is option_b
    difficulty: 14,
    category: 'Geography',
    created_by: null,
  },
  {
    question_text: 'What is the chemical symbol for tin?',
    option_a: 'Ti',
    option_b: 'Tn',
    option_c: 'Sn',
    option_d: 'Si',
    correct_option: 2, // Sn is option_c
    difficulty: 14,
    category: 'Science',
    created_by: null,
  },
  {
    question_text: 'Which is a trigonometric function?',
    option_a: 'Sine',
    option_b: 'Cosine',
    option_c: 'Tangent',
    option_d: 'All of the above',
    correct_option: 3, // All is option_d
    difficulty: 14,
    category: 'Math',
    created_by: null,
  },
  {
    question_text: 'What is the capital of Ethiopia?',
    option_a: 'Nairobi',
    option_b: 'Addis Ababa',
    option_c: 'Kampala',
    option_d: 'Khartoum',
    correct_option: 1, // Addis Ababa is option_b
    difficulty: 14,
    category: 'Geography',
    created_by: null,
  },
  {
    question_text: 'Which measures data dispersion?',
    option_a: 'Mean',
    option_b: 'Median',
    option_c: 'Standard Deviation',
    option_d: 'Mode',
    correct_option: 2, // Standard Deviation is option_c
    difficulty: 14,
    category: 'Math',
    created_by: null,
  },
  {
    question_text: 'Who wrote "The Divine Comedy"?',
    option_a: 'Dante Alighieri',
    option_b: 'Giovanni Boccaccio',
    option_c: 'Francesco Petrarca',
    option_d: 'Homer',
    correct_option: 0, // Dante is option_a
    difficulty: 14,
    category: 'Literature',
    created_by: null,
  },

  // Level 15 (Hardest)
  {
    question_text: 'lim(x→0) sin(x)/x = ?',
    option_a: '0',
    option_b: '1',
    option_c: '∞',
    option_d: 'Undefined',
    correct_option: 1, // 1 is option_b
    difficulty: 15,
    category: 'Math',
    created_by: null,
  },
  {
    question_text: 'Which is a topological property?',
    option_a: 'Distance',
    option_b: 'Angle',
    option_c: 'Connectedness',
    option_d: 'Area',
    correct_option: 2, // Connectedness is option_c
    difficulty: 15,
    category: 'Math',
    created_by: null,
  },
  {
    question_text: 'Who proved Fermat\'s Last Theorem?',
    option_a: 'Pierre de Fermat',
    option_b: 'Andrew Wiles',
    option_c: 'Leonhard Euler',
    option_d: 'Carl Gauss',
    correct_option: 1, // Wiles is option_b
    difficulty: 15,
    category: 'Math',
    created_by: null,
  },
  {
    question_text: 'What is the most abundant gas in Earth\'s atmosphere?',
    option_a: 'Oxygen',
    option_b: 'Nitrogen',
    option_c: 'Carbon Dioxide',
    option_d: 'Argon',
    correct_option: 1, // Nitrogen is option_b
    difficulty: 15,
    category: 'Science',
    created_by: null,
  },
  {
    question_text: 'Which is NOT a fundamental particle?',
    option_a: 'Electron',
    option_b: 'Proton',
    option_c: 'Quark',
    option_d: 'Neutrino',
    correct_option: 1, // Proton is option_b
    difficulty: 15,
    category: 'Science',
    created_by: null,
  },
  {
    question_text: 'What is the capital of Bhutan?',
    option_a: 'Kathmandu',
    option_b: 'Thimphu',
    option_c: 'Dhaka',
    option_d: 'Colombo',
    correct_option: 1, // Thimphu is option_b
    difficulty: 15,
    category: 'Geography',
    created_by: null,
  },
  {
    question_text: 'Which is a singularity in general relativity?',
    option_a: 'Black Hole',
    option_b: 'White Hole',
    option_c: 'Both',
    option_d: 'Neither',
    correct_option: 0, // Black Hole is option_a
    difficulty: 15,
    category: 'Science',
    created_by: null,
  },
  {
    question_text: 'What is the chemical symbol for tungsten?',
    option_a: 'Tu',
    option_b: 'W',
    option_c: 'Tg',
    option_d: 'Ts',
    correct_option: 1, // W is option_b
    difficulty: 15,
    category: 'Science',
    created_by: null,
  },
  {
    question_text: 'Which is NOT a greenhouse gas?',
    option_a: 'Methane',
    option_b: 'Nitrous Oxide',
    option_c: 'Oxygen',
    option_d: 'Water Vapor',
    correct_option: 2, // Oxygen is option_c
    difficulty: 15,
    category: 'Science',
    created_by: null,
  },
  {
    question_text: 'Who is considered the father of computer science?',
    option_a: 'Alan Turing',
    option_b: 'Charles Babbage',
    option_c: 'Ada Lovelace',
    option_d: 'John von Neumann',
    correct_option: 0, // Turing is option_a
    difficulty: 15,
    category: 'Technology',
    created_by: null,
  }
];

// Log information about the loaded questions
console.log('=== QUESTIONS.TS ===');
console.log(`Loaded ${questions.length} questions`);
const difficulties = [...new Set(questions.map(q => q.difficulty))].sort();
console.log('Available difficulties:', difficulties);

function getQuestionsByDifficulty(difficulty: number, count: number = 1): QuestionInput[] {
  const filtered = questions.filter(q => q.difficulty === difficulty);
  // Shuffle and take 'count' questions
  return filtered.sort(() => 0.5 - Math.random()).slice(0, count);
}

function getAllQuestions(): QuestionInput[] {
  return [...questions];
}

export { questions, getQuestionsByDifficulty, getAllQuestions };