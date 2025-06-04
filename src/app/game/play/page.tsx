'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/auth-context';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { supabase } from '@/lib/supabase/client';

// Import the questions directly from the module
import { questions as rawQuestions } from '@/lib/questions';

type Question = {
  id: string;
  question_text: string;
  options: string[];
  correct_answer: number; // 0 for A, 1 for B, etc.
  difficulty: number;
  category: string;
};

type GameState = 'loading' | 'playing' | 'won' | 'lost' | 'error';

const PRIZES = [
  '₹1,000', '₹2,000', '₹5,000', '₹10,000',
  '₹20,000', '₹50,000', '₹1,00,000', '₹2,50,000',
  '₹5,00,000', '₹10,00,000', '₹25,00,000', '₹50,00,000',
  '₹1,00,00,000', '₹2,50,00,000', '₹5,00,00,000'
].reverse();

export default function GamePlayPage() {
  const { user } = useAuth();
  const router = useRouter();
  
  const [gameState, setGameState] = useState<GameState>('loading');
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [currentLevel, setCurrentLevel] = useState(0);
  const [lifelines, setLifelines] = useState({
    fiftyFifty: true,
    audience: true,
    phone: true,
  });
  const [hiddenOptions, setHiddenOptions] = useState<number[]>([]);
  const [usedQuestionIds, setUsedQuestionIds] = useState<Set<string>>(new Set());
  const [timer, setTimer] = useState(30);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);

  useEffect(() => {
    // Login check removed to allow anonymous play
    
    // Debug: Log the raw questions import
    console.log('=== DEBUG: Raw questions import ===');
    console.log('Type of rawQuestions:', typeof rawQuestions);
    console.log('Raw questions value:', rawQuestions);
    
    loadGame();
  }, [router]); // User removed from dependency array

  // Timer effect
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    
    const startTimer = () => {
      // Only start timer for the first 5 questions (levels 0-4)
      if (gameState === 'playing' && !isProcessing && currentLevel < 5) {
        // Clear any existing interval first
        if (interval) clearInterval(interval);
        
        // Reset timer to 30 seconds for the first 5 questions
        setTimer(30);
        
        interval = setInterval(() => {
          setTimer(prev => {
            if (prev <= 1) {
              if (interval) clearInterval(interval);
              handleTimeUp();
              return 0;
            }
            return prev - 1;
          });
        }, 1000);
      } else if (currentLevel >= 5) {
        // No timer for questions after level 5
        if (interval) clearInterval(interval);
        setTimer(0);
      }
    };
    
    // Start the timer
    startTimer();
    
    // Cleanup on unmount or when dependencies change
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [gameState, isProcessing, currentLevel]); // Added currentLevel to dependencies

  // Function to get a single question for a specific level
  const getQuestionForLevel = (level: number) => {
    try {
      // Level is 0-based, but difficulty in questions is 1-based
      const targetDifficulty = level + 1;
      
      console.log('=== DEBUG: getQuestionForLevel ===');
      console.log(`Level: ${level}, Target Difficulty: ${targetDifficulty}`);
      
      if (!questions || !Array.isArray(questions)) {
        console.error('Questions is not an array or is undefined:', questions);
        return null;
      }
      
      console.log(`Total questions available: ${questions.length}`);
      
      // Get all questions for this difficulty level that haven't been used yet
      const availableQuestions = questions.filter(q => 
        q.difficulty === targetDifficulty && !usedQuestionIds.has(q.id)
      );
      
      console.log(`Found ${availableQuestions.length} available questions for difficulty ${targetDifficulty}`);
      
      // If no available questions for this difficulty, try to find any unused question
      if (availableQuestions.length === 0) {
        console.warn(`No unused questions found for difficulty ${targetDifficulty}, trying to find any unused question...`);
        
        // Find all unused questions from any difficulty
        const allUnusedQuestions = questions.filter(q => !usedQuestionIds.has(q.id));
        
        if (allUnusedQuestions.length > 0) {
          // If we have unused questions, find the one with closest difficulty
          const sortedByDifficulty = [...allUnusedQuestions].sort((a, b) => 
            Math.abs(a.difficulty - targetDifficulty) - Math.abs(b.difficulty - targetDifficulty)
          );
          
          if (sortedByDifficulty.length > 0) {
            console.warn(`Using question from difficulty ${sortedByDifficulty[0].difficulty} instead`);
            return sortedByDifficulty[0];
          }
        } else {
          // If all questions have been used, reset the used questions set
          console.warn('All questions have been used, resetting used questions');
          setUsedQuestionIds(new Set());
          
          // Return a random question of the target difficulty
          const freshQuestions = questions.filter(q => q.difficulty === targetDifficulty);
          if (freshQuestions.length > 0) {
            const randomIndex = Math.floor(Math.random() * freshQuestions.length);
            return freshQuestions[randomIndex];
          }
        }
        
        console.error('No questions available');
        return null;
      }
      
      // Select a random question from the available ones for this level
      const randomIndex = Math.floor(Math.random() * availableQuestions.length);
      return availableQuestions[randomIndex];
    } catch (error) {
      console.error('Error in getQuestionForLevel:', error);
      return null;
    }
  };

  const transformQuestion = (q: any) => {
    return {
      ...q,
      options: [q.option_a, q.option_b, q.option_c, q.option_d],
      correct_answer: q.correct_option
    };
  };

  const loadGame = async () => {
    try {
      console.log('=== DEBUG: Starting game load ===');
      setGameState('loading');
      
      // Log the raw questions import
      console.log('Raw questions from import (type):', typeof rawQuestions);
      console.log('Raw questions from import (value):', rawQuestions);
      
      // Validate rawQuestions
      if (!rawQuestions) {
        const error = new Error('rawQuestions is null or undefined');
        console.error(error);
        throw error;
      }
      
      if (!Array.isArray(rawQuestions)) {
        const error = new Error('Questions data is not an array');
        console.error(error, { rawQuestions });
        throw error;
      }
      
      if (rawQuestions.length === 0) {
        const error = new Error('No questions found in the questions file');
        console.error(error);
        throw error;
      }
      
      console.log(`Found ${rawQuestions.length} raw questions`);
      
      // Transform all questions to the expected format
      const allQuestions = rawQuestions.map((q, index) => {
        try {
          // Validate required fields
          const requiredFields = ['question_text', 'option_a', 'option_b', 'option_c', 'option_d', 'correct_option', 'difficulty'] as const;
          const missingFields = requiredFields.filter(field => q[field] === undefined || q[field] === null);
          
          if (missingFields.length > 0) {
            throw new Error(`Missing required fields: ${missingFields.join(', ')}`);
          }
          
          // correct_option is already 0-based (0 = A, 1 = B, etc.)
          const correctAnswerIndex = Number(q.correct_option);
          
          // Ensure the correct answer index is valid
          if (correctAnswerIndex < 0 || correctAnswerIndex > 3) {
            console.warn(`Invalid correct_answer index ${correctAnswerIndex} for question:`, q.question_text);
          }
          
          // Transform the question to match the expected format
          const transformedQuestion = {
            id: `q-${index}`,
            question_text: q.question_text,
            options: [q.option_a, q.option_b, q.option_c, q.option_d],
            correct_answer: correctAnswerIndex,
            difficulty: q.difficulty,
            category: q.category || 'General'
          };
          
          // Debug log for the first few questions
          if (index < 5) {
            console.log(`Transformed question ${index}:`, {
              question: transformedQuestion.question_text,
              options: transformedQuestion.options,
              correct_answer: transformedQuestion.correct_answer,
              correct_option: transformedQuestion.options[transformedQuestion.correct_answer]
            });
          }
          
          return transformedQuestion;
        } catch (error) {
          const errorMessage = error instanceof Error ? error.message : 'Unknown error';
          console.error(`Error processing question at index ${index}:`, error, { question: q });
          throw new Error(`Invalid question at index ${index}: ${errorMessage}`);
        }
      });
      
      console.log('Successfully transformed questions:', allQuestions);
      
      // Update state with the transformed questions
      setQuestions(allQuestions);
      
      // Get the first question
      const firstQuestion = allQuestions.find(q => q.difficulty === 1);
      
      if (!firstQuestion) {
        throw new Error('No question found for the first level (difficulty 1)');
      }
      
      console.log('First question loaded:', firstQuestion);
      setCurrentQuestion(firstQuestion);
      setGameState('playing');
      setTimer(30);
      
    } catch (error) {
      console.error('Error loading game:', error);
      setGameState('error');
    }
  };
  
  // Load the next level's question
  const loadNextLevel = (newLevel: number) => {
    console.log(`Loading level ${newLevel + 1}`);
    const nextQuestion = getQuestionForLevel(newLevel);
    
    if (nextQuestion) {
      // Mark this question as used
      setUsedQuestionIds(prev => new Set(prev).add(nextQuestion.id));
      
      // Reset processing state, timer, and hidden options
      setIsProcessing(false);
      setSelectedAnswer(null);
      setShowAnswer(false);
      setHiddenOptions([]); // Reset hidden options for the new question
      
      // Reset the timer before setting the new question
      setTimer(30);
      
      // Set the new question
      setCurrentQuestion(nextQuestion);
      
      console.log(`Loaded question for level ${newLevel + 1} (ID: ${nextQuestion.id})`);
    } else {
      console.log('No more questions, game won!');
      setGameState('won');
    }
  };

  const handleAnswerSelect = async (index: number) => {
    if (selectedAnswer !== null || !currentQuestion || isProcessing) return;
    
    console.log('Answer selected:', {
      selectedIndex: index,
      correctAnswer: currentQuestion.correct_answer,
      options: currentQuestion.options
    });
    
    // Set initial processing state
    setIsProcessing(true);
    setSelectedAnswer(index);
    setShowAnswer(false);
    
    // Show yellow highlight for 1.5 seconds
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Show answer state (green/red)
    setShowAnswer(true);
    
    // Wait 3 seconds to show the answer
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    try {
      // Check if answer is correct
      const isCorrect = index === currentQuestion.correct_answer;
      console.log('Answer check:', { isCorrect, selectedIndex: index, correctIndex: currentQuestion.correct_answer });
      
      if (isCorrect) {
        // Correct answer - move to next level
        const nextLevel = currentLevel + 1;
        
        if (nextLevel < PRIZES.length) {
          // Move to next level
          setCurrentLevel(nextLevel);
          loadNextLevel(nextLevel);
        } else {
          // Player won the game (reached the last level)
          setGameState('won');
        }
      } else {
        // Wrong answer - game over
        setGameState('lost');
      }
    } catch (error) {
      console.error('Error in answer selection:', error);
      // If there's an error, default to wrong answer
      setGameState('lost');
    } finally {
      // Reset states
      setShowAnswer(false);
      setIsProcessing(false);
    }
  };

  const handleTimeUp = () => {
    setGameState('lost');
  };

  const handleQuitGame = () => {
    if (confirm('Are you sure you want to quit the game? You will lose your current progress.')) {
      router.push('/game/dashboard');
    }
  };

  const useFiftyFifty = () => {
    if (!lifelines.fiftyFifty || !currentQuestion) return;
    
    const { correct_answer } = currentQuestion;
    
    // Get all incorrect options (indices)
    const incorrectOptions = [0, 1, 2, 3].filter(i => i !== correct_answer);
    
    // Randomly select two incorrect options to remove
    const optionsToRemove: number[] = [];
    while (optionsToRemove.length < 2 && incorrectOptions.length > 0) {
      const randomIndex = Math.floor(Math.random() * incorrectOptions.length);
      optionsToRemove.push(incorrectOptions.splice(randomIndex, 1)[0]);
    }
    
    // Update state to hide these options
    setHiddenOptions(optionsToRemove);
    setLifelines(prev => ({ ...prev, fiftyFifty: false }));
    
    console.log('50:50 used - hiding options:', optionsToRemove);
  };

  const useAudience = () => {
    if (!lifelines.audience || !currentQuestion) return;
    
    // In a real implementation, you would show audience poll results
    alert('Audience poll: Most people chose option ' + 
          String.fromCharCode(65 + currentQuestion.correct_answer));
    
    setLifelines(prev => ({ ...prev, audience: false }));
  };

  const usePhoneAFriend = () => {
    if (!lifelines.phone || !currentQuestion) return;
    
    // In a real implementation, you would simulate a friend's advice
    const friendAdvice = `I'm not entirely sure, but I think the answer might be ${
      String.fromCharCode(65 + currentQuestion.correct_answer)
    }`;
    
    alert(`Your friend says: ${friendAdvice}`);
    setLifelines(prev => ({ ...prev, phone: false }));
  };

  const restartGame = () => {
    setCurrentLevel(0);
    setGameState('loading');
    setSelectedAnswer(null);
    setShowAnswer(false);
    setHiddenOptions([]);
    setUsedQuestionIds(new Set()); // Reset used questions
    setLifelines({
      fiftyFifty: true,
      audience: true,
      phone: true,
    });
    loadGame();
  };

  if (gameState === 'loading') {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-2xl font-bold mb-4">Loading game...</div>
          <div className="w-64 h-2 bg-gray-200 rounded-full overflow-hidden">
            <div className="h-full bg-indigo-600 animate-pulse"></div>
          </div>
        </div>
      </div>
    );
  }

  if (gameState === 'error') {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-red-600">Error</CardTitle>
            <CardDescription>Failed to load the game. Please try again later.</CardDescription>
          </CardHeader>
          <CardFooter>
            <Button onClick={loadGame} className="w-full">
              Try Again
            </Button>
          </CardFooter>
        </Card>
      </div>
    );
  }

  if (gameState === 'won') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-yellow-400 to-yellow-600">
        <Card className="w-full max-w-2xl">
          <CardHeader className="text-center">
            <div className="text-6xl mb-4">🎉</div>
            <CardTitle className="text-4xl font-bold text-yellow-600">Congratulations!</CardTitle>
            <CardDescription className="text-xl mt-2">You've won the grand prize of</CardDescription>
            <div className="text-5xl font-bold text-yellow-600 my-6">₹5,00,00,000</div>
          </CardHeader>
          <CardFooter className="flex justify-center gap-4">
            <Button size="lg" onClick={restartGame}>
              Play Again
            </Button>
            <Button variant="outline" size="lg" onClick={() => router.push('/game/dashboard')}>
              Back to Dashboard
            </Button>
          </CardFooter>
        </Card>
      </div>
    );
  }

  if (gameState === 'lost') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900">
        <Card className="w-full max-w-2xl">
          <CardHeader className="text-center">
            <div className="text-6xl mb-4">😢</div>
            <CardTitle className="text-4xl font-bold">Game Over</CardTitle>
            <CardDescription className="text-xl mt-2">
              {currentLevel > 0 
                ? `You won ${PRIZES[PRIZES.length - currentLevel - 1]}`
                : 'Better luck next time!'}
            </CardDescription>
          </CardHeader>
          <CardFooter className="flex justify-center gap-4">
            <Button size="lg" onClick={restartGame}>
              Try Again
            </Button>
            <Button variant="outline" size="lg" onClick={() => router.push('/game/dashboard')}>
              Back to Dashboard
            </Button>
          </CardFooter>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-4">
          <div className="text-2xl font-bold text-white">Question {currentLevel + 1}</div>
          <div className="flex items-center gap-4">
            <div className="text-xl font-mono text-white">{timer}s</div>
            <button
              onClick={handleQuitGame}
              className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-md transition-colors"
              title="Quit Game"
            >
              Quit
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Prize Ladder - Moved to left side */}
          <div className="lg:col-span-3">
            <div className="bg-gray-800 rounded-lg p-4 h-full sticky top-4">
              <h3 className="text-center text-lg font-bold mb-4 text-white">Prize Ladder</h3>
              <div className="space-y-2">
                {PRIZES.map((prize, index) => (
                  <div 
                    key={index}
                    className={`p-2 rounded text-white ${
                      PRIZES.length - 1 - currentLevel === index 
                        ? 'bg-indigo-600 font-bold' 
                        : index > PRIZES.length - 1 - currentLevel 
                          ? 'bg-gray-700' 
                          : 'bg-gray-800 text-gray-300'
                    }`}
                  >
                    {PRIZES.length - index}. {prize}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Main Game Area */}
          <div className="lg:col-span-9">
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle className="text-2xl text-white">{currentQuestion?.question_text}</CardTitle>
                  <div className="text-sm text-gray-300">{currentQuestion?.category}</div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  {currentQuestion?.options.map((option, index) => {
                    // Skip rendering if this option is in hiddenOptions (unless it's the selected answer)
                    if (hiddenOptions.includes(index) && selectedAnswer !== index) {
                      return null;
                    }
                    
                    // Determine if this is the first or second item in its row
                    const isFirstInRow = index % 2 === 0;
                    const isLastInRow = index % 2 === 1;
                    
                    return (
                      <div key={index} className={`${isFirstInRow ? 'pr-2' : 'pl-2'}`}>
                        <Button
                          className={`w-full text-left justify-start py-6 text-lg h-full transition-colors duration-300 ${
                            selectedAnswer === index
                              ? showAnswer
                                ? index === currentQuestion.correct_answer
                                  ? 'bg-green-600 text-white'
                                  : 'bg-red-600 text-white'
                                : 'bg-yellow-600 text-white'
                              : showAnswer && index === currentQuestion.correct_answer
                                ? 'bg-green-600 text-white'
                                : 'bg-gray-700 hover:bg-gray-600 text-white'
                          } ${selectedAnswer !== null && selectedAnswer !== index ? 'opacity-50' : ''}`}
                          onClick={() => handleAnswerSelect(index)}
                          disabled={selectedAnswer !== null || isProcessing}
                        >
                          <span className="text-white">{String.fromCharCode(65 + index)}. {option}</span>
                        </Button>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Lifelines */}
            <div className="mt-6 flex justify-center space-x-4">
              <Button
                variant={lifelines.fiftyFifty ? 'default' : 'outline'}
                disabled={!lifelines.fiftyFifty}
                className={`${lifelines.fiftyFifty ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-600 cursor-not-allowed'} text-white`}
                onClick={useFiftyFifty}
              >
                <span className="text-white">50:50</span>
              </Button>
              <Button
                variant={lifelines.audience ? 'default' : 'outline'}
                disabled={!lifelines.audience}
                className={`${lifelines.audience ? 'bg-purple-600 hover:bg-purple-700' : 'bg-gray-600 cursor-not-allowed'} text-white`}
                onClick={useAudience}
              >
                <span className="text-white">Ask Audience</span>
              </Button>
              <Button
                variant={lifelines.phone ? 'default' : 'outline'}
                disabled={!lifelines.phone}
                className={`${lifelines.phone ? 'bg-green-600 hover:bg-green-700' : 'bg-gray-600 cursor-not-allowed'} text-white`}
                onClick={usePhoneAFriend}
              >
                <span className="text-white">Phone a Friend</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
