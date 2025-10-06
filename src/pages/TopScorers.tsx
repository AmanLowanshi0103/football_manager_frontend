import { motion } from 'framer-motion';
import { Trophy, Target, Award } from 'lucide-react';
import Layout from '../components/Layout';
import { mockLeague } from '../utils/mockData';

export default function TopScorers() {
  const allPlayers = mockLeague.teams.flatMap(team => 
    team.players.map(player => ({
      ...player,
      team: team.name,
      teamLogo: team.logo
    }))
  );

  const topScorers = allPlayers
    .sort((a, b) => b.goals - a.goals)
    .slice(0, 20);

  const topAssisters = allPlayers
    .sort((a, b) => b.assists - a.assists)
    .slice(0, 10);

  return (
    <Layout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Top Scorers</h1>
          <p className="text-gray-400">{mockLeague.name} • Season {mockLeague.season}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-3 mb-6">
              <Trophy className="w-6 h-6 text-yellow-400" />
              <h2 className="text-2xl font-bold text-white">Golden Boot Race</h2>
            </div>

            {topScorers.map((player, idx) => (
              <motion.div
                key={player.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.05 }}
                className={`glass-effect rounded-xl p-6 border transition-all ${
                  idx === 0 
                    ? 'border-yellow-500/50 bg-yellow-500/10' 
                    : idx < 3 
                    ? 'border-primary-500/30 bg-primary-500/5'
                    : 'border-white/10 hover:bg-white/5'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 flex-1">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center font-bold text-xl ${
                      idx === 0 ? 'bg-yellow-500 text-white' :
                      idx === 1 ? 'bg-gray-400 text-white' :
                      idx === 2 ? 'bg-orange-600 text-white' :
                      'bg-white/10 text-gray-400'
                    }`}>
                      {idx + 1}
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <h3 className="text-white font-bold text-lg">{player.name}</h3>
                        {idx === 0 && <Trophy className="w-5 h-5 text-yellow-400" />}
                      </div>
                      <div className="flex items-center space-x-3 text-sm">
                        <div className="flex items-center space-x-2">
                          <img src={player.teamLogo} alt="" className="w-5 h-5" />
                          <span className="text-gray-400">{player.team}</span>
                        </div>
                        <span className="text-gray-600">•</span>
                        <span className="text-gray-400">{player.position}</span>
                        <span className="text-gray-600">•</span>
                        <span className="text-gray-400">{player.nationality}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-6">
                    <div className="text-right">
                      <p className="text-gray-400 text-xs mb-1">Goals</p>
                      <p className="text-3xl font-bold text-white">{player.goals}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-gray-400 text-xs mb-1">Games</p>
                      <p className="text-xl font-bold text-gray-300">{player.gamesPlayed}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-gray-400 text-xs mb-1">Ratio</p>
                      <p className="text-xl font-bold text-primary-400">
                        {(player.goals / player.gamesPlayed).toFixed(2)}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="space-y-4">
            <div className="flex items-center space-x-3 mb-6">
              <Target className="w-6 h-6 text-primary-400" />
              <h2 className="text-2xl font-bold text-white">Top Assists</h2>
            </div>

            {topAssisters.map((player, idx) => (
              <motion.div
                key={player.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.05 }}
                className="glass-effect rounded-xl p-4 border border-white/10 hover:bg-white/5 transition-all"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <span className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold ${
                      idx === 0 ? 'bg-primary-500 text-white' : 'bg-white/10 text-gray-400'
                    }`}>
                      {idx + 1}
                    </span>
                    <div>
                      <p className="text-white font-semibold">{player.name}</p>
                      <p className="text-gray-400 text-xs">{player.team}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Award className="w-4 h-4 text-primary-400" />
                    <span className="text-xl font-bold text-white">{player.assists}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
