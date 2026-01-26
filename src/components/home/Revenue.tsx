'use client';

import { MdTrendingUp } from 'react-icons/md';

export default function Revenue() {
  const streams = [
    'Mining profits',
    'Staking yields',
    'Trading margins',
    'Platform service fees',
    'Unclaimed ROI balances',
  ];

  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 rounded-full border border-primary-600 text-primary-400 text-sm font-semibold mb-4">
            Revenue
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-primary-300 bg-clip-text text-transparent">
              COMPANY REVENUE MODEL
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Icon */}
          <div className="glass-effect p-12 rounded-2xl flex items-center justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-primary-500/30 blur-3xl rounded-full animate-pulse-slow" />
              <div className="relative w-48 h-48 flex items-center justify-center bg-gradient-to-br from-primary-600 to-primary-800 rounded-full border-4 border-primary-400 glow-green-strong">
                <MdTrendingUp className="text-white text-8xl" />
              </div>
            </div>
          </div>

          {/* Right - Revenue Streams */}
          <div>
            <div className="space-y-4 mb-8">
              {streams.map((stream, index) => (
                <div
                  key={index}
                  className="glass-effect p-6 rounded-xl hover:bg-primary-950/30 transition-all duration-300 group"
                >
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-primary-900/50 rounded-full flex items-center justify-center group-hover:bg-primary-800 transition-colors">
                      <span className="text-primary-400 font-bold text-lg">•</span>
                    </div>
                    <p className="text-lg text-gray-300 group-hover:text-white transition-colors">
                      {stream}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="glass-effect p-6 rounded-xl border-l-4 border-primary-500">
              <p className="text-lg text-gray-300 leading-relaxed">
                <span className="text-primary-400 font-bold">Sustainable Revenue Model:</span>{' '}
                Multiple income streams ensure platform stability and continuous user rewards distribution.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
