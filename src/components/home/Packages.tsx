'use client';

import Link from 'next/link';

export default function Packages() {
  const packages = [
    { name: 'I', amount: '$50' },
    { name: 'II', amount: '$100' },
    { name: 'III', amount: '$500' },
    { name: 'IV', amount: '$1000 and above' },
  ];

  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 rounded-full border border-primary-600 text-primary-400 text-sm font-semibold mb-4">
            Packages
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-primary-300 bg-clip-text text-transparent">
              Packages
            </span>
          </h2>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="glass-effect rounded-2xl overflow-hidden">
            <div className="grid grid-cols-2 bg-primary-900/30">
              <div className="p-6 text-center border-r border-primary-800/30">
                <h3 className="text-xl font-bold text-white">Package</h3>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-white">Package Amount</h3>
              </div>
            </div>
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`grid grid-cols-2 hover:bg-primary-950/30 transition-all duration-300 ${
                  index !== packages.length - 1 ? 'border-b border-primary-800/30' : ''
                }`}
              >
                <div className="p-6 text-center border-r border-primary-800/30">
                  <span className="text-2xl font-bold text-primary-400">{pkg.name}</span>
                </div>
                <div className="p-6 text-center">
                  <span className="text-2xl font-bold text-white">{pkg.amount}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/packages"
              className="inline-block px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-lg font-semibold text-lg hover:from-primary-600 hover:to-primary-700 transition-all duration-200 glow-green transform hover:scale-105"
            >
              Select Your Package
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
