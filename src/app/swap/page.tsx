'use client';

import { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { MdSwapVert, MdSettings } from 'react-icons/md';
import { FaBitcoin, FaEthereum } from 'react-icons/fa';

export default function SwapPage() {
  const [fromAmount, setFromAmount] = useState('');
  const [toAmount, setToAmount] = useState('');
  const [fromToken, setFromToken] = useState('ETH');
  const [toToken, setToToken] = useState('NXM');

  const handleSwap = () => {
    // Swap logic here
    console.log('Swapping:', fromAmount, fromToken, 'to', toToken);
  };

  const swapTokens = () => {
    const tempToken = fromToken;
    setFromToken(toToken);
    setToToken(tempToken);
    const tempAmount = fromAmount;
    setFromAmount(toAmount);
    setToAmount(tempAmount);
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24 pb-20">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-white to-primary-300 bg-clip-text text-transparent">
                Swap Tokens
              </span>
            </h1>
            <p className="text-gray-400">Trade tokens instantly with the best rates</p>
          </div>

          <div className="glass-effect p-6 rounded-2xl">
            {/* Settings Button */}
            <div className="flex justify-end mb-4">
              <button className="p-2 hover:bg-primary-950/50 rounded-lg transition-colors">
                <MdSettings className="text-xl text-gray-400" />
              </button>
            </div>

            {/* From Token */}
            <div className="bg-dark-900 rounded-xl p-4 mb-2">
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm text-gray-400">From</label>
                <span className="text-sm text-gray-400">Balance: 0.00</span>
              </div>
              <div className="flex items-center space-x-3">
                <input
                  type="number"
                  value={fromAmount}
                  onChange={(e) => setFromAmount(e.target.value)}
                  placeholder="0.0"
                  className="flex-1 bg-transparent text-3xl text-white outline-none"
                />
                <button className="flex items-center space-x-2 bg-primary-900/50 hover:bg-primary-800 px-4 py-2 rounded-lg transition-colors">
                  <FaEthereum className="text-xl text-primary-400" />
                  <span className="text-white font-semibold">{fromToken}</span>
                </button>
              </div>
            </div>

            {/* Swap Button */}
            <div className="flex justify-center -my-2 relative z-10">
              <button
                onClick={swapTokens}
                className="p-3 bg-dark-900 border-4 border-dark-950 rounded-xl hover:bg-dark-800 transition-colors"
              >
                <MdSwapVert className="text-2xl text-primary-400" />
              </button>
            </div>

            {/* To Token */}
            <div className="bg-dark-900 rounded-xl p-4 mb-4">
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm text-gray-400">To</label>
                <span className="text-sm text-gray-400">Balance: 0.00</span>
              </div>
              <div className="flex items-center space-x-3">
                <input
                  type="number"
                  value={toAmount}
                  onChange={(e) => setToAmount(e.target.value)}
                  placeholder="0.0"
                  className="flex-1 bg-transparent text-3xl text-white outline-none"
                />
                <button className="flex items-center space-x-2 bg-primary-900/50 hover:bg-primary-800 px-4 py-2 rounded-lg transition-colors">
                  <FaBitcoin className="text-xl text-primary-400" />
                  <span className="text-white font-semibold">{toToken}</span>
                </button>
              </div>
            </div>

            {/* Exchange Rate */}
            {fromAmount && toAmount && (
              <div className="bg-primary-950/30 rounded-lg p-3 mb-4">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-400">Rate</span>
                  <span className="text-white">1 {fromToken} = {(parseFloat(toAmount) / parseFloat(fromAmount)).toFixed(4)} {toToken}</span>
                </div>
              </div>
            )}

            {/* Swap Button */}
            <button
              onClick={handleSwap}
              disabled={!fromAmount || !toAmount}
              className="w-full py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-xl font-semibold text-lg hover:from-primary-600 hover:to-primary-700 transition-all duration-200 glow-green disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Swap
            </button>
          </div>

          {/* Info Cards */}
          <div className="grid grid-cols-3 gap-4 mt-6">
            <div className="glass-effect p-4 rounded-xl text-center">
              <div className="text-2xl font-bold text-primary-400 mb-1">0.3%</div>
              <div className="text-xs text-gray-400">Fee</div>
            </div>
            <div className="glass-effect p-4 rounded-xl text-center">
              <div className="text-2xl font-bold text-primary-400 mb-1">$2.1M</div>
              <div className="text-xs text-gray-400">24h Volume</div>
            </div>
            <div className="glass-effect p-4 rounded-xl text-center">
              <div className="text-2xl font-bold text-primary-400 mb-1">$45M</div>
              <div className="text-xs text-gray-400">TVL</div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
