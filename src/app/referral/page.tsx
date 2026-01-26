'use client';

import { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { MdContentCopy, MdShare, MdPeople, MdGroup } from 'react-icons/md';
import { FaUsers } from 'react-icons/fa';

export default function ReferralPage() {
  const [copied, setCopied] = useState(false);
  const referralLink = 'https://nexium-ai.com/ref/YOUR_CODE';

  const copyToClipboard = () => {
    navigator.clipboard.writeText(referralLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-white to-primary-300 bg-clip-text text-transparent">
                Referral Program
              </span>
            </h1>
            <p className="text-gray-400 text-lg">Earn 10% instant bonus + 5% matching bonus</p>
          </div>

          {/* Stats Overview */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="glass-effect p-6 rounded-2xl glow-green">
              <div className="flex items-center justify-between mb-3">
                <div className="w-12 h-12 bg-primary-900/50 rounded-lg flex items-center justify-center">
                  <MdPeople className="text-2xl text-primary-400" />
                </div>
              </div>
              <div className="text-3xl font-bold text-white mb-1">0</div>
              <div className="text-sm text-gray-400">Direct Referrals</div>
            </div>

            <div className="glass-effect p-6 rounded-2xl glow-green">
              <div className="flex items-center justify-between mb-3">
                <div className="w-12 h-12 bg-primary-900/50 rounded-lg flex items-center justify-center">
                  <MdGroup className="text-2xl text-primary-400" />
                </div>
              </div>
              <div className="text-3xl font-bold text-white mb-1">0</div>
              <div className="text-sm text-gray-400">Total Team</div>
            </div>

            <div className="glass-effect p-6 rounded-2xl glow-green">
              <div className="flex items-center justify-between mb-3">
                <div className="w-12 h-12 bg-primary-900/50 rounded-lg flex items-center justify-center">
                  <FaUsers className="text-2xl text-primary-400" />
                </div>
              </div>
              <div className="text-3xl font-bold text-primary-400 mb-1">$0.00</div>
              <div className="text-sm text-gray-400">Referral Earnings</div>
            </div>

            <div className="glass-effect p-6 rounded-2xl glow-green">
              <div className="flex items-center justify-between mb-3">
                <div className="w-12 h-12 bg-primary-900/50 rounded-lg flex items-center justify-center">
                  <FaUsers className="text-2xl text-primary-400" />
                </div>
              </div>
              <div className="text-3xl font-bold text-primary-400 mb-1">$0.00</div>
              <div className="text-sm text-gray-400">Matching Bonus</div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Referral Link */}
              <div className="glass-effect p-8 rounded-2xl">
                <h2 className="text-2xl font-bold text-white mb-4">Your Referral Link</h2>
                <div className="bg-dark-900 rounded-xl p-4 flex items-center space-x-4">
                  <input
                    type="text"
                    value={referralLink}
                    readOnly
                    className="flex-1 bg-transparent text-white outline-none"
                  />
                  <button
                    onClick={copyToClipboard}
                    className="px-6 py-3 bg-primary-600 hover:bg-primary-700 rounded-lg text-white font-semibold transition-colors flex items-center space-x-2"
                  >
                    <MdContentCopy className="text-lg" />
                    <span>{copied ? 'Copied!' : 'Copy'}</span>
                  </button>
                  <button className="px-6 py-3 bg-primary-900/50 hover:bg-primary-800 rounded-lg text-white font-semibold transition-colors flex items-center space-x-2">
                    <MdShare className="text-lg" />
                    <span>Share</span>
                  </button>
                </div>
              </div>

              {/* Binary Tree Visualization */}
              <div className="glass-effect p-8 rounded-2xl">
                <h2 className="text-2xl font-bold text-white mb-6">Binary Tree Structure</h2>
                <div className="flex flex-col items-center py-8">
                  {/* Root */}
                  <div className="mb-8">
                    <div className="w-20 h-20 bg-gradient-to-br from-primary-600 to-primary-800 rounded-full flex items-center justify-center border-4 border-primary-400 glow-green">
                      <FaUsers className="text-white text-2xl" />
                    </div>
                    <div className="text-center mt-2 text-white font-semibold">You</div>
                  </div>

                  {/* Level 1 */}
                  <div className="flex items-start justify-center space-x-32 mb-8">
                    <div className="relative">
                      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-0.5 h-8 bg-primary-600" />
                      <div className="w-16 h-16 bg-primary-900/50 border-2 border-primary-600 rounded-full flex items-center justify-center">
                        <FaUsers className="text-white text-xl" />
                      </div>
                      <div className="text-center mt-2 text-gray-400 text-sm">Left (0)</div>
                    </div>
                    <div className="relative">
                      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-0.5 h-8 bg-primary-600" />
                      <div className="w-16 h-16 bg-primary-900/50 border-2 border-primary-600 rounded-full flex items-center justify-center">
                        <FaUsers className="text-white text-xl" />
                      </div>
                      <div className="text-center mt-2 text-gray-400 text-sm">Right (0)</div>
                    </div>
                  </div>

                  {/* Level 2 */}
                  <div className="flex items-start justify-center space-x-8">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="relative">
                        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-0.5 h-8 bg-primary-600" />
                        <div className="w-12 h-12 bg-dark-900 border-2 border-primary-800/50 rounded-full flex items-center justify-center">
                          <FaUsers className="text-gray-600 text-sm" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 p-4 bg-primary-950/30 rounded-lg">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Left Leg Volume:</span>
                    <span className="text-white font-semibold">$0</span>
                  </div>
                  <div className="flex justify-between text-sm mt-2">
                    <span className="text-gray-400">Right Leg Volume:</span>
                    <span className="text-white font-semibold">$0</span>
                  </div>
                  <div className="flex justify-between text-sm mt-2">
                    <span className="text-gray-400">Total Pairs:</span>
                    <span className="text-primary-400 font-bold">0</span>
                  </div>
                </div>
              </div>

              {/* Recent Referrals */}
              <div className="glass-effect p-6 rounded-2xl">
                <h2 className="text-2xl font-bold text-white mb-4">Recent Referrals</h2>
                <div className="text-center py-8 text-gray-400">
                  No referrals yet
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* How It Works */}
              <div className="glass-effect p-6 rounded-2xl">
                <h3 className="text-xl font-bold text-white mb-4">How It Works</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-primary-900/50 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-primary-400 font-bold">1</span>
                    </div>
                    <p className="text-gray-300 text-sm">Share your referral link</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-primary-900/50 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-primary-400 font-bold">2</span>
                    </div>
                    <p className="text-gray-300 text-sm">Friends join using your link</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-primary-900/50 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-primary-400 font-bold">3</span>
                    </div>
                    <p className="text-gray-300 text-sm">Earn 10% instant bonus</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-primary-900/50 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-primary-400 font-bold">4</span>
                    </div>
                    <p className="text-gray-300 text-sm">Earn 5% matching bonus on pairs</p>
                  </div>
                </div>
              </div>

              {/* Earning Potential */}
              <div className="glass-effect p-6 rounded-2xl">
                <h3 className="text-xl font-bold text-white mb-4">Earning Potential</h3>
                <div className="space-y-4">
                  <div>
                    <div className="text-sm text-gray-400 mb-1">Direct Bonus</div>
                    <div className="text-2xl font-bold text-primary-400">10%</div>
                    <div className="text-xs text-gray-400">Instant payment</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-400 mb-1">Matching Bonus</div>
                    <div className="text-2xl font-bold text-primary-400">5%</div>
                    <div className="text-xs text-gray-400">Per pair matched</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-400 mb-1">Unlimited</div>
                    <div className="text-2xl font-bold text-white">∞</div>
                    <div className="text-xs text-gray-400">No earning cap</div>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div className="glass-effect p-6 rounded-2xl">
                <h3 className="text-xl font-bold text-white mb-4">Resources</h3>
                <div className="space-y-3">
                  <button className="w-full py-2 bg-primary-900/50 hover:bg-primary-800 rounded-lg text-white text-sm font-semibold transition-colors">
                    Download Materials
                  </button>
                  <button className="w-full py-2 bg-primary-900/50 hover:bg-primary-800 rounded-lg text-white text-sm font-semibold transition-colors">
                    View Training
                  </button>
                  <button className="w-full py-2 bg-primary-900/50 hover:bg-primary-800 rounded-lg text-white text-sm font-semibold transition-colors">
                    Success Stories
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
