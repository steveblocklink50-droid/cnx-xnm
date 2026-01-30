'use client';

import { useState, useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { MdCheckCircle, MdAccountBalanceWallet } from 'react-icons/md';
import { FaBitcoin, FaEthereum } from 'react-icons/fa';
import { SiTether, SiBinance } from 'react-icons/si';
import { useAccount } from 'wagmi';
import { PACKAGES } from '@/lib/constants';
import { motion } from 'framer-motion';

export default function PackagesPage() {
  const [selectedPackage, setSelectedPackage] = useState<number | null>(null);
  const [paymentMethod, setPaymentMethod] = useState<'bnb' | 'usdt' | 'busd' | 'nxm'>('bnb');
  const [customAmount, setCustomAmount] = useState<string>('1000');
  const { address, isConnected } = useAccount();

  const paymentMethods = [
    { id: 'bnb', name: 'BNB', icon: <SiBinance className="text-yellow-500" /> },
    { id: 'usdt', name: 'USDT', icon: <SiTether className="text-green-500" /> },
    { id: 'busd', name: 'BUSD', icon: <FaBitcoin className="text-yellow-600" /> },
    { id: 'nxm', name: 'NXM', icon: <MdAccountBalanceWallet className="text-blue-500" /> },
  ];

  const handlePurchase = async (packageId: number, amount: number) => {
    if (!isConnected) {
      alert('Please connect your wallet first');
      return;
    }

    // TODO: Implement contract interaction
    console.log('Purchasing package:', { packageId, amount, paymentMethod, address });
    alert(`Purchase initiated for ${PACKAGES[packageId].name} with ${paymentMethod.toUpperCase()}`);
  };
    {
      id: 4,
      name: 'Package IV',
      amount: 1000,
      dailyROI: '1%',
      maxReturn: '2×',
      features: [
        '$10/day ROI',
        '10% Direct Referral Bonus',
        '5% Matching Bonus',
        'VIP benefits',
      ],
    },
  ];

  const handlePurchase = (pkg: typeof packages[0]) => {
    setSelectedPackage(pkg.id);
    // Purchase logic here
  };

  return (
    <div className="min-h-screen bg-dark-950">
      <Navbar />
      <main className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-white via-primary-300 to-white bg-clip-text text-transparent">
                Investment Packages
              </span>
            </h1>
            <p className="text-gray-400 text-lg">Choose your package and start earning daily rewards</p>
            {!isConnected && (
              <div className="mt-4 inline-block px-6 py-3 bg-yellow-500/10 border border-yellow-500/30 rounded-lg">
                <p className="text-yellow-400 text-sm">⚠️ Connect your wallet to purchase packages</p>
              </div>
            )}
          </motion.div>

          {/* Payment Method Selection */}
          {isConnected && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass-effect p-6 rounded-2xl max-w-2xl mx-auto mb-12"
            >
              <h3 className="text-xl font-bold text-white mb-4 text-center">Select Payment Method</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {paymentMethods.map((method) => (
                  <button
                    key={method.id}
                    onClick={() => setPaymentMethod(method.id as any)}
                    className={`p-4 rounded-xl transition-all duration-200 ${
                      paymentMethod === method.id
                        ? 'bg-primary-500 text-white glow-green'
                        : 'bg-dark-900 text-gray-400 hover:bg-dark-800'
                    }`}
                  >
                    <div className="text-3xl mb-2 flex justify-center">{method.icon}</div>
                    <div className="font-semibold text-sm">{method.name}</div>
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {/* Packages Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {PACKAGES.slice(0, 3).map((pkg, index) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                className={`glass-effect p-6 rounded-2xl transition-all duration-300 hover:bg-primary-950/30 ${
                  pkg.id === 1 ? 'ring-2 ring-primary-500 glow-green-strong' : 'glow-green'
                }`}
              >
                {pkg.id === 1 && (
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-primary-500 text-white text-xs font-bold rounded-full">
                      POPULAR
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <div className="w-16 h-16 mx-auto bg-primary-900/50 rounded-full flex items-center justify-center mb-4">
                    <MdAccountBalanceWallet className="text-3xl text-primary-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                  <div className="text-4xl font-bold text-primary-400 mb-2">
                    ${pkg.amount}
                  </div>
                  <div className="text-sm text-gray-400">Investment Amount</div>
                </div>

                <div className="bg-dark-900 rounded-xl p-4 mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-400 text-sm">Daily ROI</span>
                    <span className="text-white font-bold">{pkg.dailyROI}%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400 text-sm">Max Return</span>
                    <span className="text-primary-400 font-bold">{pkg.maxReturn}×</span>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-2">
                    <MdCheckCircle className="text-primary-400 text-lg flex-shrink-0" />
                    <span className="text-gray-300 text-sm">${(pkg.amount * pkg.dailyROI / 100).toFixed(2)}/day ROI</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MdCheckCircle className="text-primary-400 text-lg flex-shrink-0" />
                    <span className="text-gray-300 text-sm">10% Direct Referral Bonus</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MdCheckCircle className="text-primary-400 text-lg flex-shrink-0" />
                    <span className="text-gray-300 text-sm">5% Binary Matching Bonus</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MdCheckCircle className="text-primary-400 text-lg flex-shrink-0" />
                    <span className="text-gray-300 text-sm">Unlimited depth rewards</span>
                  </div>
                </div>

                <button
                  onClick={() => handlePurchase(pkg.id, pkg.amount)}
                  disabled={!isConnected}
                  className={`w-full py-3 rounded-lg font-semibold transition-all duration-200 ${
                    !isConnected
                      ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
                      : pkg.id === 1
                      ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white hover:from-primary-600 hover:to-primary-700 glow-green'
                      : 'bg-primary-900/50 text-white hover:bg-primary-800'
                  }`}
                >
                  {isConnected ? `Purchase with ${paymentMethod.toUpperCase()}` : 'Connect Wallet'}
                </button>
              </motion.div>
            ))}

            {/* Package IV - Custom Amount */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="glass-effect p-6 rounded-2xl transition-all duration-300 hover:bg-primary-950/30 glow-green"
            >
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-yellow-500 text-dark-950 text-xs font-bold rounded-full">
                  UNLIMITED
                </span>
              </div>

              <div className="text-center mb-6">
                <div className="w-16 h-16 mx-auto bg-primary-900/50 rounded-full flex items-center justify-center mb-4">
                  <MdAccountBalanceWallet className="text-3xl text-primary-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Package IV</h3>
                <div className="text-4xl font-bold text-primary-400 mb-2">
                  ${customAmount}+
                </div>
                <div className="text-sm text-gray-400">Custom Amount</div>
              </div>

              <div className="bg-dark-900 rounded-xl p-4 mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-400 text-sm">Daily ROI</span>
                  <span className="text-white font-bold">1.0%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 text-sm">Max Return</span>
                  <span className="text-primary-400 font-bold">2×</span>
                </div>
              </div>

              <div className="mb-6">
                <input
                  type="number"
                  value={customAmount}
                  onChange={(e) => setCustomAmount(e.target.value)}
                  placeholder="Enter amount (min $1000)"
                  className="w-full bg-dark-900 text-white rounded-lg p-3 outline-none focus:ring-2 focus:ring-primary-500"
                  min="1000"
                />
              </div>

              <button
                onClick={() => handlePurchase(3, parseInt(customAmount))}
                disabled={!isConnected || parseInt(customAmount) < 1000}
                className={`w-full py-3 rounded-lg font-semibold transition-all duration-200 ${
                  !isConnected || parseInt(customAmount) < 1000
                    ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
                    : 'bg-gradient-to-r from-primary-500 to-primary-600 text-white hover:from-primary-600 hover:to-primary-700 glow-green'
                }`}
              >
                {isConnected ? `Purchase with ${paymentMethod.toUpperCase()}` : 'Connect Wallet'}
              </button>
            </motion.div>
          </div>

          {/* Information Sections */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="glass-effect p-6 rounded-2xl"
            >
              <FaBitcoin className="text-4xl text-primary-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Automatic Daily ROI</h3>
              <p className="text-gray-400">
                Earn daily returns on investment ranging from 0.4% to 1% automatically paid to your wallet.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="glass-effect p-6 rounded-2xl"
            >
              <FaEthereum className="text-4xl text-primary-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">2× Max Return</h3>
              <p className="text-gray-400">
                Earnings automatically stop after reaching 2× your investment. Top-up to start a new cycle.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="glass-effect p-6 rounded-2xl"
            >
              <MdAccountBalanceWallet className="text-4xl text-primary-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Multiple Payment Options</h3>
              <p className="text-gray-400">
                Pay with BNB, USDT, BUSD, or NXM tokens. All on BSC network for low fees.
              </p>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
