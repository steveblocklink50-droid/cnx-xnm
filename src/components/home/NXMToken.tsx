'use client';

import { FaBitcoin } from 'react-icons/fa';
import { MdCheckCircle } from 'react-icons/md';

export default function NXMToken() {
  const utilities = [
    'Platform transaction utility',
    'Mining & staking reward settlement',
    'Internal reward and incentive distribution',
    'Fee discounts and membership privileges',
    'Loyalty and ecosystem participation rewards',
  ];

  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-950/20 to-transparent" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-block px-6 py-3 rounded-full border-2 border-primary-600 text-primary-400 text-lg font-semibold mb-6">
              NXM (Nexium Token)
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-primary-300 bg-clip-text text-transparent">
                What is NXM?
              </span>
            </h2>

            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              NXM is the native utility token of the Nexium ecosystem, designed to power internal transactions, rewards, staking benefits, and platform-based incentives. NXM is not positioned as a speculative promise but as a functional ecosystem token that supports platform operations and user engagement.
            </p>

            <h3 className="text-2xl font-bold text-white mb-6">
              Purpose & Utility of NXM
            </h3>

            <p className="text-gray-300 mb-6">
              NXM is created to serve multiple real-use functions within the Nexium platform:
            </p>

            <div className="space-y-4">
              {utilities.map((utility, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <MdCheckCircle className="text-primary-400 text-xl flex-shrink-0 mt-1" />
                  <p className="text-gray-300">{utility}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Icon */}
          <div className="flex items-center justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-primary-500/30 blur-3xl rounded-full animate-pulse-slow" />
              <div className="relative w-64 h-64 flex items-center justify-center bg-gradient-to-br from-primary-600 to-primary-800 rounded-full border-8 border-primary-400/30 glow-green-strong">
                <div className="absolute inset-4 bg-gradient-to-br from-primary-700 to-primary-900 rounded-full" />
                <FaBitcoin className="relative text-white text-9xl drop-shadow-2xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
