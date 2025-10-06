import { motion } from 'framer-motion';
import { Calendar, Clock, Play, CheckCircle } from 'lucide-react';
import { useState } from 'react';
import Layout from '../components/Layout';
import { mockLeague } from '../utils/mockData';

export default function Fixtures() {
  const [selectedMatchday, setSelectedMatchday] = useState(1);
  const matchdays = Array.from({ length: 5 }, (_, i) => i + 1);

  const fixtures = mockLeague.fixtures.filter(m => m.matchday === selectedMatchday);

  return (
    <Layout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Fixtures & Results</h1>
          <p className="text-gray-400">{mockLeague.name} • Season {mockLeague.season}</p>
        </div>

        <div className="flex items-center space-x-2 overflow-x-auto pb-2">
          {matchdays.map((matchday) => (
            <button
              key={matchday}
              onClick={() => setSelectedMatchday(matchday)}
              className={`px-6 py-3 rounded-lg font-semibold whitespace-nowrap transition-all ${
                selectedMatchday === matchday
                  ? 'bg-primary-600 text-white'
                  : 'glass-effect text-gray-400 hover:bg-white/10'
              }`}
            >
              Matchday {matchday}
            </button>
          ))}
        </div>

        <div className="space-y-4">
          {fixtures.map((match, idx) => (
            <motion.div
              key={match.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              className="glass-effect rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-400 text-sm">
                    {match.date.toLocaleDateString('en-US', { 
                      weekday: 'short', 
                      month: 'short', 
                      day: 'numeric',
                      year: 'numeric'
                    })}
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  {match.status === 'finished' && (
                    <span className="flex items-center space-x-1 px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-xs font-medium">
                      <CheckCircle className="w-3 h-3" />
                      <span>Full Time</span>
                    </span>
                  )}
                  {match.status === 'live' && (
                    <span className="flex items-center space-x-1 px-3 py-1 bg-red-500/20 text-red-400 rounded-full text-xs font-medium animate-pulse">
                      <Play className="w-3 h-3" />
                      <span>Live</span>
                    </span>
                  )}
                  {match.status === 'scheduled' && (
                    <span className="flex items-center space-x-1 px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-xs font-medium">
                      <Clock className="w-3 h-3" />
                      <span>Scheduled</span>
                    </span>
                  )}
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4 flex-1">
                  <img src={match.homeTeam.logo} alt="" className="w-12 h-12" />
                  <span className="text-white font-bold text-lg">{match.homeTeam.name}</span>
                </div>

                <div className="px-8">
                  {match.status === 'finished' ? (
                    <div className="flex items-center space-x-4">
                      <span className="text-4xl font-bold text-white">{match.homeScore}</span>
                      <span className="text-gray-500">-</span>
                      <span className="text-4xl font-bold text-white">{match.awayScore}</span>
                    </div>
                  ) : (
                    <span className="text-2xl text-gray-400">vs</span>
                  )}
                </div>

                <div className="flex items-center space-x-4 flex-1 justify-end">
                  <span className="text-white font-bold text-lg">{match.awayTeam.name}</span>
                  <img src={match.awayTeam.logo} alt="" className="w-12 h-12" />
                </div>
              </div>

              {match.status === 'scheduled' && (
                <div className="mt-4 pt-4 border-t border-white/10">
                  <button className="w-full py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-semibold transition-all">
                    View Match Details
                  </button>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
