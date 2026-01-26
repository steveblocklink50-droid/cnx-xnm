'use client';

import { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { MdCheckCircle, MdAccountBalanceWallet } from 'react-icons/md';
import { FaBitcoin } from 'react-icons/fa';

export default function PackagesPage() {
  const [selectedPackage, setSelectedPackage] = useState<number | null>(null);

  const packages = [
    {
      id: 1,
      name: 'Package I',
      amount: 50,
      dailyROI: '0.4%',
      maxReturn: '2×',
      features: [
        '$0.20/day ROI',
        '10% Direct Referral Bonus',
        '5% Matching Bonus',
        'Access to all features',
      ],
    },
    {
      id: 2,
      name: 'Package II',
      amount: 100,
      dailyROI: '0.6%',
      maxReturn: '2×',
      features: [
        '$0.60/day ROI',
        '10% Direct Referral Bonus',
        '5% Matching Bonus',
        'Priority support',
      ],
      popular: true,
    },
    {
      id: 3,
      name: 'Package III',
      amount: 500,
      dailyROI: '0.75%',
      maxReturn: '2×',
      features: [
        '$3.75/day ROI',
        '10% Direct Referral Bonus',
        '5% Matching Bonus',
        'Premium features',
      ],
    },
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
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-white to-primary-300 bg-clip-text text-transparent">
                Investment Packages
              </span>
            </h1>
            <p className="text-gray-400 text-lg">Choose your package and start earning daily rewards</p>
          </div>

          {/* Packages Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {packages.map((pkg) => (
              <div
                key={pkg.id}
                className={`glass-effect p-6 rounded-2xl transition-all duration-300 hover:bg-primary-950/30 ${
                  pkg.popular ? 'ring-2 ring-primary-500 glow-green-strong' : 'glow-green'
                }`}
              >
                {pkg.popular && (
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
                    <span className="text-white font-bold">{pkg.dailyROI}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400 text-sm">Max Return</span>
                    <span className="text-primary-400 font-bold">{pkg.maxReturn}</span>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  {pkg.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <MdCheckCircle className="text-primary-400 text-lg flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => handlePurchase(pkg)}
                  className={`w-full py-3 rounded-lg font-semibold transition-all duration-200 ${
                    pkg.popular
                      ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white hover:from-primary-600 hover:to-primary-700 glow-green'
                      : 'bg-primary-900/50 text-white hover:bg-primary-800'
                  }`}
                >
                  Select Package
                </button>
              </div>
            ))}
          </div>

          {/* Custom Amount */}
          <div className="glass-effect p-8 rounded-2xl max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">Custom Investment Amount</h2>
            <p className="text-gray-400 text-center mb-6">
              For investments of $1000 and above, you can choose a custom amount
            </p>
            <div className="flex items-center space-x-4">
              <div className="flex-1 bg-dark-900 rounded-xl p-4">
                <input
                  type="number"
                  placeholder="Enter amount (min $1000)"
                  className="w-full bg-transparent text-2xl text-white outline-none"
                  min="1000"
                />
              </div>
              <button className="px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-xl font-semibold hover:from-primary-600 hover:to-primary-700 transition-all duration-200 glow-green">
                Invest
              </button>
            </div>
          </div>

          {/* Information Sections */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass-effect p-6 rounded-2xl">
              <FaBitcoin className="text-4xl text-primary-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Daily ROI</h3>
              <p className="text-gray-400">
                Earn daily returns on investment ranging from 0.4% to 1% depending on your package.
              </p>
            </div>

            <div className="glass-effect p-6 rounded-2xl">
              <FaBitcoin className="text-4xl text-primary-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">2× Max Return</h3>
              <p className="text-gray-400">
                Earnings automatically stop after reaching 2× your investment amount.
              </p>
            </div>

            <div className="glass-effect p-6 rounded-2xl">
              <FaBitcoin className="text-4xl text-primary-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Multiple Income Streams</h3>
              <p className="text-gray-400">
                Earn from daily ROI, referrals, matching bonus, and leadership rewards.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
