import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface StatCardProps {
  icon: LucideIcon;
  label: string;
  value: string | number;
  trend?: 'up' | 'down';
  trendValue?: string;
  index?: number;
}

export default function StatCard({ icon: Icon, label, value, trend, trendValue, index = 0 }: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="glass-effect rounded-xl p-6 hover:bg-white/10 transition-all"
    >
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-gray-400 text-sm mb-2">{label}</p>
          <h3 className="text-3xl font-bold text-white mb-2">{value}</h3>
          {trend && trendValue && (
            <div className={`flex items-center text-sm ${trend === 'up' ? 'text-green-400' : 'text-red-400'}`}>
              <span>{trend === 'up' ? '↑' : '↓'}</span>
              <span className="ml-1">{trendValue}</span>
            </div>
          )}
        </div>
        <div className="p-3 rounded-lg bg-primary-500/20">
          <Icon className="w-6 h-6 text-primary-400" />
        </div>
      </div>
    </motion.div>
  );
}
