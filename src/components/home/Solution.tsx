'use client';

import { MdCheckCircle } from 'react-icons/md';
import { FaBitcoin } from 'react-icons/fa';

export default function Solution() {
  const features = [
    'Managed mining infrastructure',
    'Professional staking strategies',
    'Controlled trading systems',
    'Automated payouts',
    'Fixed earning limits (2× Returns)',
  ];

  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 rounded-full border border-primary-600 text-primary-400 text-sm font-semibold mb-4">
            Solution
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-primary-300 bg-clip-text text-transparent">
              Nexium simplifies crypto income
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image/Icon */}
          <div className="glass-effect rounded-2xl p-12 flex items-center justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-primary-500/30 blur-3xl rounded-full animate-pulse-slow" />
              <div className="relative w-48 h-48 flex items-center justify-center bg-gradient-to-br from-primary-600 to-primary-800 rounded-full border-4 border-primary-400 glow-green-strong">
                <FaBitcoin className="text-white text-8xl" />
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 group"
              >
                <div className="flex-shrink-0 w-8 h-8 bg-primary-900/50 rounded-lg flex items-center justify-center group-hover:bg-primary-800 transition-colors">
                  <MdCheckCircle className="text-xl text-primary-400" />
                </div>
                <p className="text-lg text-gray-300 group-hover:text-white transition-colors pt-1">
                  {feature}
                </p>
              </div>
            ))}

            <div className="mt-8 p-6 glass-effect rounded-xl border-l-4 border-primary-500">
              <p className="text-lg text-gray-300 leading-relaxed">
                We convert capital into working crypto assets and distribute profits transparently until users receive{' '}
                <span className="text-primary-400 font-semibold">2× of their investment</span>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
