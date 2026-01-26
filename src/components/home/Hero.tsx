'use client';

import { FaBitcoin } from 'react-icons/fa';
import { MdTrendingUp, MdSecurity, MdGroups } from 'react-icons/md';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-700 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Logo */}
          <div className="flex justify-center mb-8 animate-fadeIn">
            <div className="relative w-40 h-40 flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full glow-green-strong animate-pulse-slow" />
              <div className="relative w-32 h-32 flex items-center justify-center bg-gradient-to-br from-primary-600 to-primary-800 rounded-full border-4 border-primary-400">
                <FaBitcoin className="text-white text-6xl" />
              </div>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slideInUp">
            <span className="bg-gradient-to-r from-white via-primary-200 to-primary-400 bg-clip-text text-transparent">
              NEXIUM-AI
            </span>
          </h1>

          <p className="text-2xl md:text-3xl text-primary-300 mb-8 font-semibold animate-slideInUp" style={{ animationDelay: '0.1s' }}>
            Revolutionizing the financial world
          </p>

          <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto animate-slideInUp" style={{ animationDelay: '0.2s' }}>
            Next-generation digital asset platform that allows users to earn daily income from crypto mining, staking, and trading, without requiring technical knowledge or active trading experience.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-slideInUp" style={{ animationDelay: '0.3s' }}>
            <Link
              href="/packages"
              className="px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-lg font-semibold text-lg hover:from-primary-600 hover:to-primary-700 transition-all duration-200 glow-green transform hover:scale-105"
            >
              Get Started
            </Link>
            <Link
              href="/swap"
              className="px-8 py-4 glass-effect text-primary-400 rounded-lg font-semibold text-lg hover:bg-primary-950/50 transition-all duration-200 border border-primary-600"
            >
              Launch App
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto animate-slideInUp" style={{ animationDelay: '0.4s' }}>
            <div className="glass-effect p-6 rounded-xl glow-green">
              <MdTrendingUp className="text-4xl text-primary-400 mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-2">Up to 2×</div>
              <div className="text-gray-400">Max Returns</div>
            </div>
            <div className="glass-effect p-6 rounded-xl glow-green">
              <MdSecurity className="text-4xl text-primary-400 mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-2">100%</div>
              <div className="text-gray-400">Secure Platform</div>
            </div>
            <div className="glass-effect p-6 rounded-xl glow-green">
              <MdGroups className="text-4xl text-primary-400 mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-2">Global</div>
              <div className="text-gray-400">Community</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-400 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
}
