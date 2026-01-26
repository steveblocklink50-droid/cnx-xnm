'use client';

import { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { MdLock, MdLockOpen } from 'react-icons/md';
import { FaBitcoin } from 'react-icons/fa';

export default function StakingPage() {
  const [stakeAmount, setStakeAmount] = useState('');
  const [selectedPeriod, setSelectedPeriod] = useState(30);

  const stakingPeriods = [
    { days: 30, apy: '8%', multiplier: '1.0×' },
    { days: 90, apy: '12%', multiplier: '1.2×' },
    { days: 180, apy: '18%', multiplier: '1.5×' },
    { days: 365, apy: '25%', multiplier: '2.0×' },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-white to-primary-300 bg-clip-text text-transparent">
                Stake NXM
              </span>
            </h1>
            <p className="text-gray-400 text-lg">Lock your NXM tokens and earn rewards</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Staking Form */}
            <div className="lg:col-span-2">
              <div className="glass-effect p-8 rounded-2xl mb-8">
                <h2 className="text-2xl font-bold text-white mb-6">Stake Your NXM</h2>
                
                {/* Amount Input */}
                <div className="bg-dark-900 rounded-xl p-6 mb-6">
                  <div className="flex justify-between items-center mb-3">
                    <label className="text-sm text-gray-400">Amount to Stake</label>
                    <span className="text-sm text-gray-400">Balance: 0.00 NXM</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <input
                      type="number"
                      value={stakeAmount}
                      onChange={(e) => setStakeAmount(e.target.value)}
                      placeholder="0.0"
                      className="flex-1 bg-transparent text-3xl text-white outline-none"
                    />
                    <div className="flex items-center space-x-2 bg-primary-900/50 px-4 py-2 rounded-lg">
                      <FaBitcoin className="text-xl text-primary-400" />
                      <span className="text-white font-semibold">NXM</span>
                    </div>
                  </div>
                  <button className="mt-3 text-primary-400 text-sm hover:text-primary-300">
                    MAX
                  </button>
                </div>

                {/* Staking Period Selection */}
                <div className="mb-6">
                  <label className="text-sm text-gray-400 mb-3 block">Select Staking Period</label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {stakingPeriods.map((period) => (
                      <button
                        key={period.days}
                        onClick={() => setSelectedPeriod(period.days)}
                        className={`p-4 rounded-xl transition-all duration-200 ${
                          selectedPeriod === period.days
                            ? 'bg-primary-600 border-2 border-primary-400'
                            : 'bg-dark-900 border-2 border-transparent hover:border-primary-700'
                        }`}
                      >
                        <div className="text-white font-bold text-lg">{period.days} Days</div>
                        <div className="text-primary-400 text-sm">{period.apy} APY</div>
                        <div className="text-gray-400 text-xs">{period.multiplier}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Staking Info */}
                {stakeAmount && (
                  <div className="bg-primary-950/30 rounded-lg p-4 mb-6">
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-400">APY</span>
                        <span className="text-white font-semibold">
                          {stakingPeriods.find(p => p.days === selectedPeriod)?.apy}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Estimated rewards</span>
                        <span className="text-primary-400 font-semibold">
                          {(parseFloat(stakeAmount) * parseFloat(stakingPeriods.find(p => p.days === selectedPeriod)?.apy || '0') / 100).toFixed(2)} NXM
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Lock period</span>
                        <span className="text-white font-semibold">{selectedPeriod} days</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Stake Button */}
                <button
                  disabled={!stakeAmount}
                  className="w-full py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-xl font-semibold text-lg hover:from-primary-600 hover:to-primary-700 transition-all duration-200 glow-green disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                >
                  <MdLock className="text-xl" />
                  <span>Stake NXM</span>
                </button>
              </div>

              {/* Benefits */}
              <div className="glass-effect p-8 rounded-2xl">
                <h3 className="text-xl font-bold text-white mb-4">Staking Benefits</h3>
                <div className="space-y-3">
                  {[
                    'Higher earning eligibility',
                    'Platform benefits and privileges',
                    'Reward multipliers',
                    'Governance voting rights',
                    'Exclusive platform features',
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary-400 rounded-full" />
                      <span className="text-gray-300">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar - Stats */}
            <div className="space-y-6">
              {/* Your Staking Stats */}
              <div className="glass-effect p-6 rounded-2xl">
                <h3 className="text-xl font-bold text-white mb-4">Your Staking</h3>
                <div className="space-y-4">
                  <div>
                    <div className="text-sm text-gray-400 mb-1">Total Staked</div>
                    <div className="text-2xl font-bold text-white">0.00 NXM</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-400 mb-1">Earned Rewards</div>
                    <div className="text-2xl font-bold text-primary-400">0.00 NXM</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-400 mb-1">Current APY</div>
                    <div className="text-2xl font-bold text-white">0%</div>
                  </div>
                </div>
              </div>

              {/* Global Stats */}
              <div className="glass-effect p-6 rounded-2xl">
                <h3 className="text-xl font-bold text-white mb-4">Platform Stats</h3>
                <div className="space-y-4">
                  <div>
                    <div className="text-sm text-gray-400 mb-1">Total Staked</div>
                    <div className="text-xl font-bold text-white">$12.5M</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-400 mb-1">Total Stakers</div>
                    <div className="text-xl font-bold text-white">5,432</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-400 mb-1">Average APY</div>
                    <div className="text-xl font-bold text-primary-400">15.7%</div>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="glass-effect p-6 rounded-2xl">
                <h3 className="text-xl font-bold text-white mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <button className="w-full py-3 bg-primary-900/50 hover:bg-primary-800 rounded-lg text-white font-semibold transition-colors flex items-center justify-center space-x-2">
                    <MdLockOpen className="text-lg" />
                    <span>Unstake</span>
                  </button>
                  <button className="w-full py-3 bg-primary-900/50 hover:bg-primary-800 rounded-lg text-white font-semibold transition-colors">
                    Claim Rewards
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Active Stakes */}
          <div className="mt-8">
            <h2 className="text-2xl font-bold text-white mb-4">Your Active Stakes</h2>
            <div className="glass-effect p-6 rounded-xl text-center">
              <p className="text-gray-400">No active stakes</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
