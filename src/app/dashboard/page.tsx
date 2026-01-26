'use client';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { MdAccountBalanceWallet, MdTrendingUp, MdPeople, MdStars } from 'react-icons/md';
import { FaBitcoin } from 'react-icons/fa';
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function DashboardPage() {
  const earningsData = [
    { date: 'Jan 20', earnings: 120 },
    { date: 'Jan 21', earnings: 150 },
    { date: 'Jan 22', earnings: 180 },
    { date: 'Jan 23', earnings: 165 },
    { date: 'Jan 24', earnings: 200 },
    { date: 'Jan 25', earnings: 220 },
    { date: 'Jan 26', earnings: 250 },
  ];

  const recentTransactions = [
    { id: 1, type: 'Daily ROI', amount: '+$10.00', date: 'Today, 08:00 AM', status: 'completed' },
    { id: 2, type: 'Referral Bonus', amount: '+$50.00', date: 'Yesterday, 03:30 PM', status: 'completed' },
    { id: 3, type: 'Matching Bonus', amount: '+$25.00', date: 'Jan 24, 11:15 AM', status: 'completed' },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Welcome Section */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">
              <span className="bg-gradient-to-r from-white to-primary-300 bg-clip-text text-transparent">
                Welcome Back!
              </span>
            </h1>
            <p className="text-gray-400">Here's what's happening with your account today</p>
          </div>

          {/* Stats Overview */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="glass-effect p-6 rounded-2xl glow-green hover:bg-primary-950/30 transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-primary-900/50 rounded-lg flex items-center justify-center">
                  <MdAccountBalanceWallet className="text-2xl text-primary-400" />
                </div>
                <span className="text-xs text-green-400 font-semibold">+12.5%</span>
              </div>
              <div className="text-sm text-gray-400 mb-1">Total Balance</div>
              <div className="text-3xl font-bold text-white mb-1">$0.00</div>
              <div className="text-xs text-gray-500">0.00 NXM</div>
            </div>

            <div className="glass-effect p-6 rounded-2xl glow-green hover:bg-primary-950/30 transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-primary-900/50 rounded-lg flex items-center justify-center">
                  <MdTrendingUp className="text-2xl text-primary-400" />
                </div>
                <span className="text-xs text-green-400 font-semibold">Today</span>
              </div>
              <div className="text-sm text-gray-400 mb-1">Total Earnings</div>
              <div className="text-3xl font-bold text-primary-400 mb-1">$0.00</div>
              <div className="text-xs text-gray-500">Since joining</div>
            </div>

            <div className="glass-effect p-6 rounded-2xl glow-green hover:bg-primary-950/30 transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-primary-900/50 rounded-lg flex items-center justify-center">
                  <MdPeople className="text-2xl text-primary-400" />
                </div>
              </div>
              <div className="text-sm text-gray-400 mb-1">Team Members</div>
              <div className="text-3xl font-bold text-white mb-1">0</div>
              <div className="text-xs text-gray-500">Direct: 0 | Total: 0</div>
            </div>

            <div className="glass-effect p-6 rounded-2xl glow-green hover:bg-primary-950/30 transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-primary-900/50 rounded-lg flex items-center justify-center">
                  <MdStars className="text-2xl text-primary-400" />
                </div>
              </div>
              <div className="text-sm text-gray-400 mb-1">Current Rank</div>
              <div className="text-3xl font-bold text-white mb-1">--</div>
              <div className="text-xs text-gray-500">0 pairs</div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Earnings Chart */}
              <div className="glass-effect p-6 rounded-2xl">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-white">Earnings Overview</h2>
                  <select className="bg-dark-900 text-white px-4 py-2 rounded-lg outline-none">
                    <option>Last 7 days</option>
                    <option>Last 30 days</option>
                    <option>Last 90 days</option>
                  </select>
                </div>
                <ResponsiveContainer width="100%" height={300}>
                  <AreaChart data={earningsData}>
                    <defs>
                      <linearGradient id="colorEarnings" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#22c55e" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#22c55e" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                    <XAxis dataKey="date" stroke="#888" />
                    <YAxis stroke="#888" />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid #333' }}
                      labelStyle={{ color: '#fff' }}
                    />
                    <Area 
                      type="monotone" 
                      dataKey="earnings" 
                      stroke="#22c55e" 
                      fillOpacity={1} 
                      fill="url(#colorEarnings)" 
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>

              {/* Active Package */}
              <div className="glass-effect p-6 rounded-2xl">
                <h2 className="text-2xl font-bold text-white mb-4">Active Package</h2>
                <div className="bg-dark-900 rounded-xl p-6">
                  <div className="text-center py-8">
                    <FaBitcoin className="text-6xl text-gray-600 mx-auto mb-4" />
                    <p className="text-gray-400 mb-6">No active package</p>
                    <button className="px-8 py-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-lg font-semibold hover:from-primary-600 hover:to-primary-700 transition-all duration-200 glow-green">
                      Select a Package
                    </button>
                  </div>
                </div>
              </div>

              {/* Recent Transactions */}
              <div className="glass-effect p-6 rounded-2xl">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl font-bold text-white">Recent Transactions</h2>
                  <button className="text-primary-400 hover:text-primary-300 text-sm font-semibold">
                    View All
                  </button>
                </div>
                <div className="space-y-3">
                  {recentTransactions.length > 0 ? (
                    recentTransactions.map((tx) => (
                      <div key={tx.id} className="bg-dark-900 rounded-lg p-4 flex items-center justify-between hover:bg-dark-800 transition-colors">
                        <div className="flex items-center space-x-4">
                          <div className="w-10 h-10 bg-primary-900/50 rounded-full flex items-center justify-center">
                            <MdTrendingUp className="text-primary-400" />
                          </div>
                          <div>
                            <div className="text-white font-semibold">{tx.type}</div>
                            <div className="text-sm text-gray-400">{tx.date}</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-green-400 font-bold">{tx.amount}</div>
                          <div className="text-xs text-gray-500 capitalize">{tx.status}</div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="text-center py-8 text-gray-400">
                      No transactions yet
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Actions */}
              <div className="glass-effect p-6 rounded-2xl">
                <h3 className="text-xl font-bold text-white mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <button className="w-full py-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-lg font-semibold hover:from-primary-600 hover:to-primary-700 transition-all duration-200 glow-green">
                    Buy Package
                  </button>
                  <button className="w-full py-3 bg-primary-900/50 hover:bg-primary-800 rounded-lg text-white font-semibold transition-colors">
                    Swap Tokens
                  </button>
                  <button className="w-full py-3 bg-primary-900/50 hover:bg-primary-800 rounded-lg text-white font-semibold transition-colors">
                    Stake NXM
                  </button>
                  <button className="w-full py-3 bg-primary-900/50 hover:bg-primary-800 rounded-lg text-white font-semibold transition-colors">
                    Withdraw
                  </button>
                </div>
              </div>

              {/* Income Breakdown */}
              <div className="glass-effect p-6 rounded-2xl">
                <h3 className="text-xl font-bold text-white mb-4">Income Breakdown</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-400">Daily ROI</span>
                      <span className="text-white font-semibold">$0.00</span>
                    </div>
                    <div className="w-full bg-dark-900 rounded-full h-2">
                      <div className="bg-primary-500 h-2 rounded-full" style={{ width: '0%' }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-400">Referral Bonus</span>
                      <span className="text-white font-semibold">$0.00</span>
                    </div>
                    <div className="w-full bg-dark-900 rounded-full h-2">
                      <div className="bg-primary-500 h-2 rounded-full" style={{ width: '0%' }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-400">Matching Bonus</span>
                      <span className="text-white font-semibold">$0.00</span>
                    </div>
                    <div className="w-full bg-dark-900 rounded-full h-2">
                      <div className="bg-primary-500 h-2 rounded-full" style={{ width: '0%' }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-400">Rewards</span>
                      <span className="text-white font-semibold">$0.00</span>
                    </div>
                    <div className="w-full bg-dark-900 rounded-full h-2">
                      <div className="bg-primary-500 h-2 rounded-full" style={{ width: '0%' }} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Rank Progress */}
              <div className="glass-effect p-6 rounded-2xl">
                <h3 className="text-xl font-bold text-white mb-4">Rank Progress</h3>
                <div className="text-center mb-4">
                  <div className="text-sm text-gray-400 mb-2">Current Rank</div>
                  <div className="text-2xl font-bold text-white mb-4">Not Ranked</div>
                  <div className="w-full bg-dark-900 rounded-full h-3 mb-2">
                    <div className="bg-gradient-to-r from-primary-500 to-primary-600 h-3 rounded-full" style={{ width: '0%' }} />
                  </div>
                  <div className="text-xs text-gray-400">0 / 25 pairs to Starter Node</div>
                </div>
                <button className="w-full py-2 bg-primary-900/50 hover:bg-primary-800 rounded-lg text-white text-sm font-semibold transition-colors">
                  View Rewards
                </button>
              </div>

              {/* Announcements */}
              <div className="glass-effect p-6 rounded-2xl">
                <h3 className="text-xl font-bold text-white mb-4">Announcements</h3>
                <div className="space-y-3">
                  <div className="bg-dark-900 rounded-lg p-3">
                    <div className="text-sm font-semibold text-white mb-1">Welcome to NEXIUM-AI!</div>
                    <div className="text-xs text-gray-400">Get started by purchasing your first package</div>
                  </div>
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
