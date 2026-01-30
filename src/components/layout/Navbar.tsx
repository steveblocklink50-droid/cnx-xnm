'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { FaBitcoin, FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
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
    <nav className="fixed w-full z-50 glass-effect border-b border-primary-800/30 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <motion.div 
              className="relative w-12 h-12 flex items-center justify-center"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* Use the Nexium logo */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full blur-md opacity-50 animate-pulse"></div>
              <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-primary-400 glow-green">
                <div className="w-full h-full bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">N</span>
                </div>
              </div>
            </motion.div>
            <motion.span 
              className="text-2xl font-bold bg-gradient-to-r from-primary-300 via-primary-400 to-primary-500 bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
            >
              NEXIUM
            </motion.span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={link.href}
                    className="flex items-center space-x-2 px-4 py-2 rounded-lg text-gray-300 hover:text-primary-400 hover:bg-primary-950/50 transition-all duration-200 hover:glow-green-soft relative group"
                  >
                    <Icon className="text-lg group-hover:scale-110 transition-transform" />
                    <span>{link.label}</span>
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary-400 group-hover:w-3/4 transition-all duration-300"></div>
                  </Link>
                </motion.div>
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
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden glass-effect border-t border-primary-800/30"
          >
            <div className="px-4 py-6 space-y-3">
              {navLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-300 hover:text-primary-400 hover:bg-primary-950/50 transition-all duration-200 hover:glow-green-soft"
                    >
                      <Icon className="text-xl" />
                      <span className="text-lg">{link.label}</span>
                    </Link>
                  </motion.div>
                );
              })}
              <div className="pt-4">
                <ConnectButton
                  chainStatus="icon"
                  showBalance={false}
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
