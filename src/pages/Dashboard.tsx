import { motion } from 'framer-motion';
import { Trophy, Target, TrendingUp, Calendar, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import StatCard from '../components/StatCard';
import { mockLeague } from '../utils/mockData';

export default function Dashboard() {
  const navigate = useNavigate();
  const userTeam = mockLeague.teams[0];
  const upcomingMatches = mockLeague.fixtures
    .filter(m => m.status === 'scheduled')
    .slice(0, 3);

  return (
    <Layout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Welcome Back!</h1>
          <p className="text-gray-400">Here&apos;s what&apos;s happening with {userTeam.name}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard
            icon={Trophy}
            label="League Position"
            value="1st"
            trend="up"
            trendValue="+2 from last week"
            index={0}
          />
          <StatCard
            icon={Target}
            label="Points"
            value={userTeam.points}
            trend="up"
            trendValue="+9 this month"
            index={1}
          />
          <StatCard
            icon={TrendingUp}
            label="Win Rate"
            value={`${((userTeam.wins / (userTeam.wins + userTeam.draws + userTeam.losses)) * 100).toFixed(0)}%`}
            index={2}
          />
          <StatCard
            icon={Calendar}
            label="Games Played"
            value={userTeam.wins + userTeam.draws + userTeam.losses}
            index={3}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="glass-effect rounded-xl p-6 border border-white/10"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-white">Upcoming Fixtures</h2>
              <button
                onClick={() => navigate('/fixtures')}
                className="text-primary-400 hover:text-primary-300 flex items-center text-sm font-medium"
              >
                View All
                <ChevronRight className="w-4 h-4 ml-1" />
              </button>
            </div>

            <div className="space-y-4">
              {upcomingMatches.map((match, idx) => (
                <motion.div
                  key={match.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-4 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-all"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-gray-400">
                      {match.date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                    </span>
                    <span className="text-xs text-primary-400">Matchday {match.matchday}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <img src={match.homeTeam.logo} alt="" className="w-8 h-8" />
                      <span className="text-white font-medium">{match.homeTeam.name}</span>
                    </div>
                    <span className="text-gray-400">vs</span>
                    <div className="flex items-center space-x-3">
                      <span className="text-white font-medium">{match.awayTeam.name}</span>
                      <img src={match.awayTeam.logo} alt="" className="w-8 h-8" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="glass-effect rounded-xl p-6 border border-white/10"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-white">League Standings</h2>
              <button
                onClick={() => navigate('/league')}
                className="text-primary-400 hover:text-primary-300 flex items-center text-sm font-medium"
              >
                View Full Table
                <ChevronRight className="w-4 h-4 ml-1" />
              </button>
            </div>

            <div className="space-y-3">
              {mockLeague.teams.slice(0, 5).map((team, idx) => (
                <motion.div
                  key={team.id}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className={`flex items-center justify-between p-3 rounded-lg ${
                    idx === 0 ? 'bg-primary-500/20 border border-primary-500/50' : 'bg-white/5 border border-white/10'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-gray-400 font-bold w-6">{idx + 1}</span>
                    <img src={team.logo} alt="" className="w-6 h-6" />
                    <span className="text-white font-medium">{team.name}</span>
                  </div>
                  <div className="flex items-center space-x-4 text-sm">
                    <span className="text-gray-400">{team.wins + team.draws + team.losses} GP</span>
                    <span className="text-white font-bold">{team.points} pts</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-effect rounded-xl p-6 border border-white/10"
        >
          <h2 className="text-xl font-bold text-white mb-4">Recent Form</h2>
          <div className="flex items-center space-x-2">
            {['W', 'W', 'D', 'W', 'L'].map((result, idx) => (
              <div
                key={idx}
                className={`w-12 h-12 rounded-lg flex items-center justify-center font-bold ${
                  result === 'W' ? 'bg-green-500 text-white' :
                  result === 'D' ? 'bg-yellow-500 text-white' :
                  'bg-red-500 text-white'
                }`}
              >
                {result}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </Layout>
  );
}
