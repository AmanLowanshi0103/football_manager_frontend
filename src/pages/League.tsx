import { motion } from 'framer-motion';
import { Trophy, TrendingUp, TrendingDown } from 'lucide-react';
import Layout from '../components/Layout';
import { mockLeague } from '../utils/mockData';

export default function League() {
  return (
    <Layout>
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">{mockLeague.name}</h1>
            <p className="text-gray-400">Season {mockLeague.season}</p>
          </div>
          <div className="glass-effect px-6 py-3 rounded-lg border border-white/10">
            <p className="text-gray-400 text-sm">Total Teams</p>
            <p className="text-2xl font-bold text-white">{mockLeague.teams.length}</p>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-effect rounded-xl overflow-hidden border border-white/10"
        >
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-white/5">
                <tr className="text-left">
                  <th className="px-6 py-4 text-gray-400 font-medium">Pos</th>
                  <th className="px-6 py-4 text-gray-400 font-medium">Team</th>
                  <th className="px-6 py-4 text-gray-400 font-medium text-center">P</th>
                  <th className="px-6 py-4 text-gray-400 font-medium text-center">W</th>
                  <th className="px-6 py-4 text-gray-400 font-medium text-center">D</th>
                  <th className="px-6 py-4 text-gray-400 font-medium text-center">L</th>
                  <th className="px-6 py-4 text-gray-400 font-medium text-center">GF</th>
                  <th className="px-6 py-4 text-gray-400 font-medium text-center">GA</th>
                  <th className="px-6 py-4 text-gray-400 font-medium text-center">GD</th>
                  <th className="px-6 py-4 text-gray-400 font-medium text-center">Pts</th>
                  <th className="px-6 py-4 text-gray-400 font-medium text-center">Form</th>
                </tr>
              </thead>
              <tbody>
                {mockLeague.teams.map((team, idx) => (
                  <motion.tr
                    key={team.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    className={`border-t border-white/10 hover:bg-white/5 transition-colors ${
                      idx === 0 ? 'bg-primary-500/10' : ''
                    }`}
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-2">
                        <span className="font-bold text-white">{idx + 1}</span>
                        {idx < 3 && <Trophy className="w-4 h-4 text-yellow-500" />}
                        {idx === 0 && <TrendingUp className="w-4 h-4 text-green-400" />}
                        {idx >= mockLeague.teams.length - 3 && <TrendingDown className="w-4 h-4 text-red-400" />}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-3">
                        <img src={team.logo} alt="" className="w-8 h-8" />
                        <span className="text-white font-medium">{team.name}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center text-gray-300">
                      {team.wins + team.draws + team.losses}
                    </td>
                    <td className="px-6 py-4 text-center text-green-400 font-medium">{team.wins}</td>
                    <td className="px-6 py-4 text-center text-yellow-400 font-medium">{team.draws}</td>
                    <td className="px-6 py-4 text-center text-red-400 font-medium">{team.losses}</td>
                    <td className="px-6 py-4 text-center text-gray-300">{team.goalsFor}</td>
                    <td className="px-6 py-4 text-center text-gray-300">{team.goalsAgainst}</td>
                    <td className={`px-6 py-4 text-center font-medium ${
                      team.goalsFor - team.goalsAgainst > 0 ? 'text-green-400' : 'text-red-400'
                    }`}>
                      {team.goalsFor - team.goalsAgainst > 0 ? '+' : ''}{team.goalsFor - team.goalsAgainst}
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="font-bold text-white text-lg">{team.points}</span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-1 justify-center">
                        {['W', 'W', 'D', 'L', 'W'].slice(0, 5).map((result, i) => (
                          <div
                            key={i}
                            className={`w-6 h-6 rounded flex items-center justify-center text-xs font-bold ${
                              result === 'W' ? 'bg-green-500 text-white' :
                              result === 'D' ? 'bg-yellow-500 text-white' :
                              'bg-red-500 text-white'
                            }`}
                          >
                            {result}
                          </div>
                        ))}
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
}
