'use client';

import { useEffect, useState } from 'react';
import { useAuth } from '@/context/auth-context';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { supabase } from '@/lib/supabase/client';
import { useRouter } from 'next/navigation';

type LeaderboardEntry = {
  id: string;
  username: string;
  score: number;
  level_reached: number;
  created_at: string;
};

export default function LeaderboardPage() {
  const { user } = useAuth();
  const router = useRouter();
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [timeRange, setTimeRange] = useState<'all' | 'month' | 'week'>('all');

  useEffect(() => {
    // Login check removed to allow anonymous access
    fetchLeaderboard();
  }, [router, timeRange]); // User removed from dependency array, leaderboard is public

  const fetchLeaderboard = async () => {
    try {
      setLoading(true);
      
      // In a real implementation, you would fetch from your Supabase database
      // For now, we'll use mock data
      const mockLeaderboard: LeaderboardEntry[] = [
        {
          id: '1',
          username: 'QuizMaster',
          score: 50000000,
          level_reached: 15,
          created_at: new Date().toISOString(),
        },
        {
          id: '2',
          username: 'TriviaKing',
          score: 25000000,
          level_reached: 14,
          created_at: new Date().toISOString(),
        },
        // Add more mock entries...
      ];
      
      setLeaderboard(mockLeaderboard);
    } catch (error) {
      console.error('Error fetching leaderboard:', error);
    } finally {
      setLoading(false);
    }
  };

  const getUserRank = () => {
    if (!user) return null;
    
    // In a real implementation, you would find the user's rank in the leaderboard
    const userEntry = leaderboard.find(entry => entry.id === user.id);
    if (!userEntry) return null;
    
    return {
      rank: leaderboard.findIndex(entry => entry.id === user.id) + 1,
      ...userEntry
    };
  };

  const userRank = getUserRank();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Leaderboard</h1>
          <Button onClick={() => router.push('/game/dashboard')} variant="outline">
            Back to Dashboard
          </Button>
        </div>

        {/* Time Range Selector */}
        <div className="flex space-x-2 mb-6">
          <Button 
            variant={timeRange === 'all' ? 'default' : 'outline'}
            onClick={() => setTimeRange('all')}
          >
            All Time
          </Button>
          <Button 
            variant={timeRange === 'month' ? 'default' : 'outline'}
            onClick={() => setTimeRange('month')}
          >
            This Month
          </Button>
          <Button 
            variant={timeRange === 'week' ? 'default' : 'outline'}
            onClick={() => setTimeRange('week')}
          >
            This Week
          </Button>
        </div>

        {/* Leaderboard */}
        <Card>
          <CardHeader>
            <CardTitle>Top Players</CardTitle>
          </CardHeader>
          <CardContent>
            {loading ? (
              <div className="flex justify-center py-8">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div>
              </div>
            ) : leaderboard.length === 0 ? (
              <div className="text-center py-8 text-gray-500">
                No leaderboard data available yet.
              </div>
            ) : (
              <div className="overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Rank
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Player
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Level Reached
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Score
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {leaderboard.map((entry, index) => (
                      <tr 
                        key={entry.id} 
                        className={entry.id === user?.id ? 'bg-indigo-50' : ''}
                      >
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {index + 1}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">
                          {entry.username}
                          {entry.id === user?.id && (
                            <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                              You
                            </span>
                          )}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          Level {entry.level_reached}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">
                          ₹{entry.score.toLocaleString()}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </CardContent>
        </Card>

        {/* User's Rank Card */}
        {userRank && (
          <Card className="mt-8 bg-indigo-50 border-indigo-100">
            <CardHeader>
              <CardTitle>Your Ranking</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="text-3xl font-bold text-indigo-600 mr-4">#{userRank.rank}</div>
                  <div>
                    <div className="font-medium">{userRank.username}</div>
                    <div className="text-sm text-gray-500">Level {userRank.level_reached}</div>
                  </div>
                </div>
                <div className="text-xl font-bold">₹{userRank.score.toLocaleString()}</div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Call to Action */}
        <div className="mt-8 text-center">
          <p className="text-gray-600 mb-4">Think you can make it to the top?</p>
          <Button onClick={() => router.push('/game/play')} size="lg">
            Play Now
          </Button>
        </div>
      </div>
    </div>
  );
}
