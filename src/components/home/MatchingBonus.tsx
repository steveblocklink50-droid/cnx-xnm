'use client';

import { FaUsers } from 'react-icons/fa';

export default function MatchingBonus() {
  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-950 to-transparent opacity-50" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 rounded-full border border-primary-600 text-primary-400 text-sm font-semibold mb-4">
            Matching bonus
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-primary-300 bg-clip-text text-transparent">
              Matching Bonus
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Details */}
          <div className="space-y-6">
            <div className="glass-effect p-6 rounded-xl">
              <h3 className="text-xl font-bold text-primary-400 mb-3">Binary type</h3>
              <p className="text-gray-300">American Binary System (1:1)</p>
            </div>

            <div className="glass-effect p-6 rounded-xl">
              <h3 className="text-xl font-bold text-primary-400 mb-3">Matching Bonus</h3>
              <p className="text-gray-300">On every pair match there will be a <span className="text-white font-semibold">5% matching</span> bonus released</p>
            </div>

            <div className="glass-effect p-6 rounded-xl">
              <h3 className="text-xl font-bold text-primary-400 mb-3">No capping</h3>
              <p className="text-gray-300">Unlimited earning potential from matching bonus</p>
            </div>

            <div className="glass-effect p-6 rounded-xl">
              <h3 className="text-xl font-bold text-primary-400 mb-3">Unlimited depth</h3>
              <p className="text-gray-300">Earn from unlimited levels in your binary tree</p>
            </div>
          </div>

          {/* Right - Binary Tree Diagram */}
          <div className="glass-effect p-12 rounded-2xl">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mb-8 glow-green">
                <FaUsers className="text-white text-2xl" />
              </div>
              
              <div className="flex items-start justify-center space-x-12 mb-8">
                <div className="relative">
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-0.5 h-8 bg-primary-600" />
                  <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center glow-green">
                    <FaUsers className="text-white text-xl" />
                  </div>
                </div>
                <div className="relative">
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-0.5 h-8 bg-primary-600" />
                  <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center glow-green">
                    <FaUsers className="text-white text-xl" />
                  </div>
                </div>
              </div>

              <div className="flex items-start justify-center space-x-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="relative">
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-0.5 h-8 bg-primary-600" />
                    <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center glow-green">
                      <FaUsers className="text-white text-sm" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-gray-300 text-sm">American Binary System (1:1)</p>
              <p className="text-primary-400 font-semibold mt-2">5% Matching Bonus per Pair</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
