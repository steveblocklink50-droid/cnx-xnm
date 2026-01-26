'use client';

import { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { MdAdd, MdRemove } from 'react-icons/md';
import { FaBitcoin, FaEthereum } from 'react-icons/fa';

export default function LiquidityPage() {
  const [mode, setMode] = useState<'add' | 'remove'>('add');
  const [token1Amount, setToken1Amount] = useState('');
  const [token2Amount, setToken2Amount] = useState('');

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24 pb-20">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-white to-primary-300 bg-clip-text text-transparent">
                Liquidity Pools
              </span>
            </h1>
            <p className="text-gray-400">Provide liquidity and earn trading fees</p>
          </div>

          {/* Mode Toggle */}
          <div className="glass-effect p-1 rounded-xl mb-6 flex">
            <button
              onClick={() => setMode('add')}
              className={`flex-1 py-3 rounded-lg font-semibold transition-all duration-200 ${
                mode === 'add'
                  ? 'bg-primary-600 text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <MdAdd className="inline-block mr-2" />
              Add Liquidity
            </button>
            <button
              onClick={() => setMode('remove')}
              className={`flex-1 py-3 rounded-lg font-semibold transition-all duration-200 ${
                mode === 'remove'
                  ? 'bg-primary-600 text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <MdRemove className="inline-block mr-2" />
              Remove Liquidity
            </button>
          </div>

          <div className="glass-effect p-6 rounded-2xl">
            {/* Token 1 */}
            <div className="bg-dark-900 rounded-xl p-4 mb-4">
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm text-gray-400">Token 1</label>
                <span className="text-sm text-gray-400">Balance: 0.00</span>
              </div>
              <div className="flex items-center space-x-3">
                <input
                  type="number"
                  value={token1Amount}
                  onChange={(e) => setToken1Amount(e.target.value)}
                  placeholder="0.0"
                  className="flex-1 bg-transparent text-3xl text-white outline-none"
                />
                <button className="flex items-center space-x-2 bg-primary-900/50 px-4 py-2 rounded-lg">
                  <FaEthereum className="text-xl text-primary-400" />
                  <span className="text-white font-semibold">ETH</span>
                </button>
              </div>
            </div>

            {/* Plus Icon */}
            <div className="flex justify-center my-4">
              <div className="p-2 bg-primary-900/50 rounded-full">
                <MdAdd className="text-xl text-primary-400" />
              </div>
            </div>

            {/* Token 2 */}
            <div className="bg-dark-900 rounded-xl p-4 mb-4">
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm text-gray-400">Token 2</label>
                <span className="text-sm text-gray-400">Balance: 0.00</span>
              </div>
              <div className="flex items-center space-x-3">
                <input
                  type="number"
                  value={token2Amount}
                  onChange={(e) => setToken2Amount(e.target.value)}
                  placeholder="0.0"
                  className="flex-1 bg-transparent text-3xl text-white outline-none"
                />
                <button className="flex items-center space-x-2 bg-primary-900/50 px-4 py-2 rounded-lg">
                  <FaBitcoin className="text-xl text-primary-400" />
                  <span className="text-white font-semibold">NXM</span>
                </button>
              </div>
            </div>

            {/* Pool Info */}
            <div className="bg-primary-950/30 rounded-lg p-4 mb-4">
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-400">Your pool share</span>
                  <span className="text-white font-semibold">0%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Pool rate</span>
                  <span className="text-white font-semibold">1 ETH = 1000 NXM</span>
                </div>
              </div>
            </div>

            {/* Action Button */}
            <button
              disabled={!token1Amount || !token2Amount}
              className="w-full py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-xl font-semibold text-lg hover:from-primary-600 hover:to-primary-700 transition-all duration-200 glow-green disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {mode === 'add' ? 'Add Liquidity' : 'Remove Liquidity'}
            </button>
          </div>

          {/* Your Positions */}
          <div className="mt-8">
            <h2 className="text-2xl font-bold text-white mb-4">Your Liquidity Positions</h2>
            <div className="glass-effect p-6 rounded-xl text-center">
              <p className="text-gray-400">No active liquidity positions</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
