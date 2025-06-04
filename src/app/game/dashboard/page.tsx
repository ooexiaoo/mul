'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/auth-context';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { supabase } from '@/lib/supabase/client';
import Link from 'next/link';

type UserStats = {
  total_score: number;
  highest_level_reached: number;
  games_played: number;
};

export default function DashboardPage() {
  const { user, signOut } = useAuth();
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [userStats, setUserStats] = useState<UserStats>({
    total_score: 0,
    highest_level_reached: 0,
    games_played: 0,
  });
  const [recentGames, setRecentGames] = useState<Array<{
    id: string;
    score: number;
    level_reached: number;
    created_at: string;
  }>>([]);

  useEffect(() => {
    // Login check removed to allow anonymous access
    // User-specific data will be fetched only if user is available
    
    const fetchUserData = async () => {
      try {
        setLoading(true);
        
        // In a real implementation, you would fetch this from your Supabase database
        // For now, we'll use mock data
        setUserStats({
          total_score: 12500000,
          highest_level_reached: 8,
          games_played: 12,
        });
        
        setRecentGames([
          { id: '1', score: 12500000, level_reached: 8, created_at: new Date().toISOString() },
          { id: '2', score: 8000000, level_reached: 7, created_at: new Date(Date.now() - 86400000).toISOString() },
          { id: '3', score: 5000000, level_reached: 6, created_at: new Date(Date.now() - 172800000).toISOString() },
        ]);
        
      } catch (error) {
        console.error('Error fetching user data:', error);
      } finally {
        setLoading(false);
      }
    };
    
    if (user) { // Fetch data only if user is logged in
      fetchUserData();
    } else {
      setLoading(false); // Stop loading if no user, show default/empty state
    }
  }, [user, router]); // Keep user in deps to refetch if they log in

  const handleSignOut = async () => {
    try {
      await signOut();
      router.push('/');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
            <p className="text-gray-600 mt-1">Welcome back, {user?.email}!</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" onClick={handleSignOut}>
              Sign Out
            </Button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Total Score */}
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">Total Score</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">₹{userStats.total_score.toLocaleString()}</div>
              <p className="text-xs text-gray-500 mt-1">Your all-time earnings</p>
            </CardContent>
          </Card>

          {/* Highest Level */}
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">Highest Level</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">Level {userStats.highest_level_reached}</div>
              <div className="mt-2">
                <Progress value={(userStats.highest_level_reached / 15) * 100} className="h-2" />
                <p className="text-xs text-gray-500 mt-1">
                  {Math.round((userStats.highest_level_reached / 15) * 100)}% to the top
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Games Played */}
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">Games Played</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{userStats.games_played}</div>
              <p className="text-xs text-gray-500 mt-1">
                {userStats.games_played > 0 
                  ? `Average: ₹${Math.round(userStats.total_score / userStats.games_played).toLocaleString()}`
                  : 'Start playing to see your stats'}
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <Link href="/game/play" className="block">
            <Button className="w-full py-6 text-lg" size="lg">
              Play Now
            </Button>
          </Link>
          <Link href="/game/leaderboard" className="block">
            <Button variant="outline" className="w-full py-6 text-lg" size="lg">
              View Leaderboard
            </Button>
          </Link>
        </div>

        {/* Recent Games */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Games</CardTitle>
          </CardHeader>
          <CardContent>
            {recentGames.length === 0 ? (
              <div className="text-center py-8">
                <p className="text-gray-500">No games played yet</p>
                <Link href="/game/play">
                  <Button className="mt-4">Play Your First Game</Button>
                </Link>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead>
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Date
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Level Reached
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Score
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {recentGames.map((game) => (
                      <tr key={game.id}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {new Date(game.created_at).toLocaleDateString()}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          Level {game.level_reached}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">
                          ₹{game.score.toLocaleString()}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </CardContent>
          {recentGames.length > 0 && (
            <CardFooter className="bg-gray-50 px-6 py-3">
              <Link href="/game/history" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                View all games
              </Link>
            </CardFooter>
          )}
        </Card>
      </div>
    </div>
  );
}
