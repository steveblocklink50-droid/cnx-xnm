'use client';

import { motion } from 'framer-motion';
import { showcaseUsers, platformStats } from '@/data/showcaseUsers';
import { FaUsers, FaChartLine, FaDollarSign } from 'react-icons/fa';
import { MdTrendingUp } from 'react-icons/md';

export default function ShowcaseUsers() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-400/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Platform Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white via-primary-300 to-white bg-clip-text text-transparent">
              Platform Statistics
            </span>
          </h2>
          <p className="text-gray-400 text-lg mb-8">Real-time performance metrics</p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="glass-effect p-6 rounded-2xl glow-green hover:glow-green-strong transition-all duration-300"
            >
              <FaUsers className="text-4xl text-primary-400 mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-1">
                {platformStats.totalUsers.toLocaleString()}
              </div>
              <div className="text-sm text-gray-400">Total Users</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass-effect p-6 rounded-2xl glow-green hover:glow-green-strong transition-all duration-300"
            >
              <FaDollarSign className="text-4xl text-primary-400 mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-1">
                ${(platformStats.totalInvested / 1000000).toFixed(1)}M
              </div>
              <div className="text-sm text-gray-400">Total Invested</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="glass-effect p-6 rounded-2xl glow-green hover:glow-green-strong transition-all duration-300"
            >
              <MdTrendingUp className="text-4xl text-primary-400 mx-auto mb-3" />
              <div className="text-3xl font-bold text-primary-400 mb-1">
                ${(platformStats.totalPaidOut / 1000000).toFixed(1)}M
              </div>
              <div className="text-sm text-gray-400">Total Paid Out</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="glass-effect p-6 rounded-2xl glow-green hover:glow-green-strong transition-all duration-300"
            >
              <FaChartLine className="text-4xl text-primary-400 mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-1">
                {platformStats.averageROI}%
              </div>
              <div className="text-sm text-gray-400">Average Daily ROI</div>
            </motion.div>
          </div>
        </motion.div>

        {/* Top Earners */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-12"
        >
          <h3 className="text-3xl font-bold text-center mb-8">
            <span className="bg-gradient-to-r from-primary-300 to-primary-500 bg-clip-text text-transparent">
              Top Performers
            </span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {showcaseUsers.slice(0, 6).map((user, index) => (
              <motion.div
                key={user.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass-effect p-6 rounded-2xl glow-green hover:glow-green-strong transition-all duration-300 cursor-pointer group"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="relative">
                    <img
                      src={user.avatar}
                      alt={user.username}
                      className="w-16 h-16 rounded-full border-2 border-primary-400 glow-green"
                    />
                    <div className="absolute -top-1 -right-1 w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center text-xs font-bold border-2 border-dark-950">
                      #{index + 1}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-white group-hover:text-primary-300 transition-colors">
                      {user.username}
                    </h4>
                    <p className="text-sm text-primary-400">{user.rankTitle}</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-400">Total Earned</span>
                    <span className="text-green-400 font-bold">
                      ${user.totalEarned.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-400">Invested</span>
                    <span className="text-white font-semibold">
                      ${user.totalInvested.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-400">Team</span>
                    <span className="text-white font-semibold">
                      {user.activeReferrals} members
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-400">Daily ROI</span>
                    <span className="text-primary-400 font-bold">
                      ${user.dailyROI}/day
                    </span>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-primary-800/30">
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>{user.country}</span>
                    <span>Level {user.level}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-gray-400 mb-6 text-lg">
            Join thousands of users earning daily passive income
          </p>
          <motion.a
            href="/packages"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-bold rounded-xl hover:from-primary-600 hover:to-primary-700 transition-all duration-200 glow-green-strong text-lg"
          >
            Start Earning Today
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
