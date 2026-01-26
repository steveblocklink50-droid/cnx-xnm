'use client';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { FaBitcoin } from 'react-icons/fa';
import { MdTrendingUp, MdSpeed, MdPower } from 'react-icons/md';
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function MiningPage() {
  const miningData = [
    { time: '00:00', hashrate: 120, earnings: 0.05 },
    { time: '04:00', hashrate: 125, earnings: 0.06 },
    { time: '08:00', hashrate: 130, earnings: 0.065 },
    { time: '12:00', hashrate: 128, earnings: 0.062 },
    { time: '16:00', hashrate: 135, earnings: 0.07 },
    { time: '20:00', hashrate: 132, earnings: 0.068 },
    { time: '24:00', hashrate: 138, earnings: 0.072 },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-white to-primary-300 bg-clip-text text-transparent">
                Crypto Mining
              </span>
            </h1>
            <p className="text-gray-400 text-lg">Hardware & cloud-based mining infrastructure</p>
          </div>

          {/* Stats Overview */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="glass-effect p-6 rounded-2xl glow-green">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-12 h-12 bg-primary-900/50 rounded-lg flex items-center justify-center">
                  <FaBitcoin className="text-2xl text-primary-400" />
                </div>
                <div className="text-sm text-gray-400">Total Mined</div>
              </div>
              <div className="text-3xl font-bold text-white">0.00 BTC</div>
              <div className="text-sm text-primary-400 mt-1">$0.00</div>
            </div>

            <div className="glass-effect p-6 rounded-2xl glow-green">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-12 h-12 bg-primary-900/50 rounded-lg flex items-center justify-center">
                  <MdSpeed className="text-2xl text-primary-400" />
                </div>
                <div className="text-sm text-gray-400">Hash Rate</div>
              </div>
              <div className="text-3xl font-bold text-white">0 TH/s</div>
              <div className="text-sm text-green-400 mt-1">Active</div>
            </div>

            <div className="glass-effect p-6 rounded-2xl glow-green">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-12 h-12 bg-primary-900/50 rounded-lg flex items-center justify-center">
                  <MdTrendingUp className="text-2xl text-primary-400" />
                </div>
                <div className="text-sm text-gray-400">Daily Earnings</div>
              </div>
              <div className="text-3xl font-bold text-white">$0.00</div>
              <div className="text-sm text-gray-400 mt-1">Estimated</div>
            </div>

            <div className="glass-effect p-6 rounded-2xl glow-green">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-12 h-12 bg-primary-900/50 rounded-lg flex items-center justify-center">
                  <MdPower className="text-2xl text-primary-400" />
                </div>
                <div className="text-sm text-gray-400">Power Status</div>
              </div>
              <div className="text-3xl font-bold text-white">--</div>
              <div className="text-sm text-gray-400 mt-1">Offline</div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Charts */}
            <div className="lg:col-span-2 space-y-6">
              {/* Hashrate Chart */}
              <div className="glass-effect p-6 rounded-2xl">
                <h2 className="text-xl font-bold text-white mb-4">Hashrate (24h)</h2>
                <ResponsiveContainer width="100%" height={250}>
                  <AreaChart data={miningData}>
                    <defs>
                      <linearGradient id="colorHashrate" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#22c55e" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#22c55e" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                    <XAxis dataKey="time" stroke="#888" />
                    <YAxis stroke="#888" />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid #333' }}
                      labelStyle={{ color: '#fff' }}
                    />
                    <Area 
                      type="monotone" 
                      dataKey="hashrate" 
                      stroke="#22c55e" 
                      fillOpacity={1} 
                      fill="url(#colorHashrate)" 
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>

              {/* Earnings Chart */}
              <div className="glass-effect p-6 rounded-2xl">
                <h2 className="text-xl font-bold text-white mb-4">Earnings (24h)</h2>
                <ResponsiveContainer width="100%" height={250}>
                  <LineChart data={miningData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                    <XAxis dataKey="time" stroke="#888" />
                    <YAxis stroke="#888" />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid #333' }}
                      labelStyle={{ color: '#fff' }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="earnings" 
                      stroke="#22c55e" 
                      strokeWidth={3}
                      dot={{ fill: '#22c55e', r: 4 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>

              {/* Mining Pools */}
              <div className="glass-effect p-6 rounded-2xl">
                <h2 className="text-xl font-bold text-white mb-4">Active Mining Pools</h2>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-4 bg-dark-900 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <FaBitcoin className="text-2xl text-orange-400" />
                      <div>
                        <div className="text-white font-semibold">Bitcoin Mining</div>
                        <div className="text-sm text-gray-400">SHA-256 Algorithm</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-white font-semibold">120 TH/s</div>
                      <div className="text-sm text-primary-400">Online</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Mining Info */}
              <div className="glass-effect p-6 rounded-2xl">
                <h3 className="text-xl font-bold text-white mb-4">Mining Info</h3>
                <div className="space-y-4">
                  <div>
                    <div className="text-sm text-gray-400 mb-1">Network Difficulty</div>
                    <div className="text-lg font-bold text-white">42.3T</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-400 mb-1">Block Reward</div>
                    <div className="text-lg font-bold text-white">6.25 BTC</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-400 mb-1">Next Difficulty</div>
                    <div className="text-lg font-bold text-white">in 5 days</div>
                  </div>
                </div>
              </div>

              {/* Start Mining */}
              <div className="glass-effect p-6 rounded-2xl">
                <h3 className="text-xl font-bold text-white mb-4">Start Mining</h3>
                <p className="text-gray-400 text-sm mb-6">
                  Purchase a mining package to start earning crypto mining rewards automatically.
                </p>
                <button className="w-full py-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-lg font-semibold hover:from-primary-600 hover:to-primary-700 transition-all duration-200 glow-green">
                  View Packages
                </button>
              </div>

              {/* Rewards Distribution */}
              <div className="glass-effect p-6 rounded-2xl">
                <h3 className="text-xl font-bold text-white mb-4">Rewards</h3>
                <div className="space-y-3">
                  <div>
                    <div className="text-sm text-gray-400 mb-1">Pending Rewards</div>
                    <div className="text-lg font-bold text-primary-400">0.00 NXM</div>
                  </div>
                  <button className="w-full py-2 bg-primary-900/50 hover:bg-primary-800 rounded-lg text-white font-semibold transition-colors">
                    Claim Rewards
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
