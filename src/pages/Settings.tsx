import { motion } from 'framer-motion';
import { Settings as SettingsIcon, User, Bell, Shield, Info } from 'lucide-react';
import Layout from '../components/Layout';
import { useAuth } from '../context/AuthContext';

export default function Settings() {
  const { user } = useAuth();

  return (
    <Layout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Settings</h1>
          <p className="text-gray-400">Manage your account and preferences</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-effect rounded-xl p-6 border border-white/10"
          >
            <div className="flex items-center space-x-3 mb-6">
              <User className="w-6 h-6 text-primary-400" />
              <h2 className="text-xl font-bold text-white">Profile</h2>
            </div>
            <div className="space-y-4">
              <div>
                <label className="text-sm text-gray-400 mb-2 block">Username</label>
                <input
                  type="text"
                  defaultValue={user?.username}
                  className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>
              <div>
                <label className="text-sm text-gray-400 mb-2 block">Email</label>
                <input
                  type="email"
                  defaultValue={user?.email}
                  className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>
              <div>
                <label className="text-sm text-gray-400 mb-2 block">Team Name</label>
                <input
                  type="text"
                  defaultValue={user?.teamName}
                  className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>
              <button className="w-full py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-semibold transition-all">
                Save Changes
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="glass-effect rounded-xl p-6 border border-white/10"
          >
            <div className="flex items-center space-x-3 mb-6">
              <Bell className="w-6 h-6 text-primary-400" />
              <h2 className="text-xl font-bold text-white">Notifications</h2>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-300">Match Reminders</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
                </label>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-300">Transfer News</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
                </label>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-300">League Updates</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" />
                  <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
                </label>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="glass-effect rounded-xl p-6 border border-white/10"
          >
            <div className="flex items-center space-x-3 mb-6">
              <Shield className="w-6 h-6 text-primary-400" />
              <h2 className="text-xl font-bold text-white">Security</h2>
            </div>
            <div className="space-y-4">
              <button className="w-full py-2 bg-white/5 hover:bg-white/10 text-white rounded-lg font-semibold transition-all border border-white/10">
                Change Password
              </button>
              <button className="w-full py-2 bg-white/5 hover:bg-white/10 text-white rounded-lg font-semibold transition-all border border-white/10">
                Two-Factor Auth
              </button>
              <button className="w-full py-2 bg-white/5 hover:bg-white/10 text-white rounded-lg font-semibold transition-all border border-white/10">
                Privacy Settings
              </button>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="glass-effect rounded-xl p-6 border border-white/10"
        >
          <div className="flex items-center space-x-3 mb-6">
            <Info className="w-6 h-6 text-primary-400" />
            <h2 className="text-xl font-bold text-white">About</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <p className="text-gray-400 text-sm mb-1">Version</p>
              <p className="text-white font-semibold">1.0.0</p>
            </div>
            <div>
              <p className="text-gray-400 text-sm mb-1">Season</p>
              <p className="text-white font-semibold">2024/2025</p>
            </div>
            <div>
              <p className="text-gray-400 text-sm mb-1">Last Updated</p>
              <p className="text-white font-semibold">January 2025</p>
            </div>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
}
