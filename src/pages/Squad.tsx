import { motion } from 'framer-motion';
import { Users, Star, Award } from 'lucide-react';
import Layout from '../components/Layout';
import { mockLeague } from '../utils/mockData';

export default function Squad() {
  const userTeam = mockLeague.teams[0];
  const positions = ['GK', 'DEF', 'MID', 'FWD'] as const;

  return (
    <Layout>
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Squad Management</h1>
            <p className="text-gray-400">{userTeam.name} • {userTeam.players.length} Players</p>
          </div>
          <div className="glass-effect px-6 py-3 rounded-lg border border-white/10">
            <div className="flex items-center space-x-2">
              <Users className="w-5 h-5 text-primary-400" />
              <span className="text-white font-bold text-xl">{userTeam.players.length}</span>
            </div>
          </div>
        </div>

        {positions.map((position, posIdx) => {
          const players = userTeam.players.filter(p => p.position === position);
          
          return (
            <motion.div
              key={position}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: posIdx * 0.1 }}
              className="space-y-4"
            >
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-lg bg-primary-500/20 flex items-center justify-center">
                  <span className="text-primary-400 font-bold">{position}</span>
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white">
                    {position === 'GK' ? 'Goalkeepers' :
                     position === 'DEF' ? 'Defenders' :
                     position === 'MID' ? 'Midfielders' : 'Forwards'}
                  </h2>
                  <p className="text-gray-400 text-sm">{players.length} Players</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {players.map((player, idx) => (
                  <motion.div
                    key={player.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.05 }}
                    className="glass-effect rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-white font-bold text-lg mb-1">{player.name}</h3>
                        <div className="flex items-center space-x-2 text-sm text-gray-400">
                          <span>{player.nationality}</span>
                          <span>•</span>
                          <span>{player.age} years</span>
                        </div>
                      </div>
                      <div className="flex flex-col items-end">
                        <div className={`text-2xl font-bold ${
                          player.rating >= 85 ? 'text-yellow-400' :
                          player.rating >= 75 ? 'text-green-400' :
                          'text-gray-400'
                        }`}>
                          {player.rating}
                        </div>
                        {player.rating >= 85 && <Star className="w-4 h-4 text-yellow-400" />}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3 mb-3">
                      <div className="bg-white/5 rounded-lg p-2">
                        <p className="text-xs text-gray-400 mb-1">Games</p>
                        <p className="text-white font-bold">{player.gamesPlayed}</p>
                      </div>
                      <div className="bg-white/5 rounded-lg p-2">
                        <p className="text-xs text-gray-400 mb-1">Goals</p>
                        <p className="text-white font-bold">{player.goals}</p>
                      </div>
                      <div className="bg-white/5 rounded-lg p-2">
                        <p className="text-xs text-gray-400 mb-1">Assists</p>
                        <p className="text-white font-bold">{player.assists}</p>
                      </div>
                      <div className="bg-white/5 rounded-lg p-2">
                        <p className="text-xs text-gray-400 mb-1">Form</p>
                        <div className="flex items-center space-x-1">
                          {Array.from({ length: 10 }).map((_, i) => (
                            <div
                              key={i}
                              className={`h-2 w-2 rounded-full ${
                                i < player.form ? 'bg-primary-500' : 'bg-gray-600'
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-3 border-t border-white/10">
                      <div className="flex items-center space-x-2">
                        {player.yellowCards > 0 && (
                          <div className="flex items-center space-x-1">
                            <div className="w-3 h-4 bg-yellow-400 rounded-sm" />
                            <span className="text-xs text-gray-400">{player.yellowCards}</span>
                          </div>
                        )}
                        {player.redCards > 0 && (
                          <div className="flex items-center space-x-1">
                            <div className="w-3 h-4 bg-red-500 rounded-sm" />
                            <span className="text-xs text-gray-400">{player.redCards}</span>
                          </div>
                        )}
                      </div>
                      {player.rating >= 85 && (
                        <div className="flex items-center space-x-1 text-yellow-400">
                          <Award className="w-4 h-4" />
                          <span className="text-xs font-medium">Star Player</span>
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </Layout>
  );
}
