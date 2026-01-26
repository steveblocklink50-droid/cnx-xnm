'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { FaBitcoin, FaBars, FaTimes } from 'react-icons/fa';
import { 
  MdDashboard, 
  MdSwapHoriz, 
  MdWater, 
  MdStars,
  MdPerson,
  MdAccountBalanceWallet
} from 'react-icons/md';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: '/dashboard', label: 'Dashboard', icon: MdDashboard },
    { href: '/swap', label: 'Swap', icon: MdSwapHoriz },
    { href: '/liquidity', label: 'Liquidity', icon: MdWater },
    { href: '/staking', label: 'Staking', icon: MdStars },
    { href: '/mining', label: 'Mining', icon: FaBitcoin },
    { href: '/packages', label: 'Packages', icon: MdAccountBalanceWallet },
    { href: '/referral', label: 'Referral', icon: MdPerson },
  ];

  return (
    <nav className="fixed w-full z-50 glass-effect border-b border-primary-800/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative w-10 h-10 flex items-center justify-center bg-gradient-to-br from-primary-500 to-primary-700 rounded-full glow-green">
              <FaBitcoin className="text-white text-xl" />
              <div className="absolute inset-0 bg-primary-500 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300 animate-pulse-slow" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">
              NEXIUM-AI
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex items-center space-x-2 px-4 py-2 rounded-lg text-gray-300 hover:text-primary-400 hover:bg-primary-950/50 transition-all duration-200"
                >
                  <Icon className="text-lg" />
                  <span>{link.label}</span>
                </Link>
              );
            })}
          </div>

          {/* Connect Wallet Button */}
          <div className="hidden lg:block">
            <ConnectButton
              chainStatus="icon"
              showBalance={false}
              accountStatus={{
                smallScreen: 'avatar',
                largeScreen: 'full',
              }}
            />
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-300 hover:text-primary-400 hover:bg-primary-950/50 transition-colors"
          >
            {isOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden glass-effect border-t border-primary-800/30 animate-slideInDown">
          <div className="px-4 py-6 space-y-3">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-300 hover:text-primary-400 hover:bg-primary-950/50 transition-all duration-200"
                >
                  <Icon className="text-xl" />
                  <span className="text-lg">{link.label}</span>
                </Link>
              );
            })}
            <div className="pt-4">
              <ConnectButton
                chainStatus="icon"
                showBalance={false}
              />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
