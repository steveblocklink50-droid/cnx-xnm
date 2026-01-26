'use client';

import { FaBitcoin } from 'react-icons/fa';

export default function Mission() {
  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-950 to-transparent" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 rounded-full border border-primary-600 text-primary-400 text-sm font-semibold mb-4">
            Mission
          </span>
        </div>

        <div className="max-w-4xl mx-auto glass-effect p-12 rounded-3xl text-center">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <div className="relative w-32 h-32 flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full glow-green-strong animate-pulse-slow" />
              <div className="relative w-24 h-24 flex items-center justify-center bg-gradient-to-br from-primary-600 to-primary-800 rounded-full border-4 border-primary-400">
                <FaBitcoin className="text-white text-5xl" />
              </div>
            </div>
          </div>

          {/* Mission Statement */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 italic">
            <span className="bg-gradient-to-r from-white via-primary-200 to-primary-400 bg-clip-text text-transparent">
              "Make crypto income accessible, structured, and secure for everyone"
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-gray-300 mb-12">
            Nexium is not just a crypto platform. It is a structured digital economy where performance, 
            leadership, and contribution define income.
          </p>

          {/* Thank You */}
          <div className="mt-16">
            <h3 className="text-6xl md:text-8xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-primary-300 bg-clip-text text-transparent">
                THANK YOU
              </span>
            </h3>
            <div className="h-1 w-32 bg-gradient-to-r from-primary-500 to-primary-700 mx-auto rounded-full mb-6" />
            <p className="text-xl text-gray-400">
              Join us in revolutionizing the financial world
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
