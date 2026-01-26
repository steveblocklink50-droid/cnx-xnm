'use client';

import { MdGroups } from 'react-icons/md';

export default function DirectReferral() {
  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 rounded-full border border-primary-600 text-primary-400 text-sm font-semibold mb-4">
            Direct Referral
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-primary-300 bg-clip-text text-transparent">
              Direct Referral Bonus
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - ROI Example */}
          <div className="glass-effect p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-primary-400 mb-6">ROI EXAMPLE</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-300">Example :</span>
                <span className="text-white font-semibold">$1000 investment</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-300">Daily ROI :</span>
                <span className="text-white font-semibold">1% = $1/day</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-300">Monthly approx :</span>
                <span className="text-white font-semibold">$300</span>
              </div>
              <div className="flex items-center justify-between pt-4 border-t border-primary-800/30">
                <span className="text-gray-300">Total earning cap :</span>
                <span className="text-primary-400 font-bold text-xl">$2000</span>
              </div>
            </div>
          </div>

          {/* Right - Referral Income */}
          <div className="glass-effect p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-primary-400 mb-6">REFERRAL INCOME</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary-900/50 rounded-full flex items-center justify-center flex-shrink-0">
                  <MdGroups className="text-2xl text-primary-400" />
                </div>
                <div>
                  <p className="text-white font-semibold mb-2">Direct Referral Bonus: 10%</p>
                  <p className="text-gray-300">Refer $1,000 → Earn $100 instantly</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary-900/50 rounded-full flex items-center justify-center flex-shrink-0">
                  <MdGroups className="text-2xl text-primary-400" />
                </div>
                <div>
                  <p className="text-white font-semibold mb-2">Unlimited direct referrals</p>
                  <p className="text-gray-300">No cap on referral earnings</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary-900/50 rounded-full flex items-center justify-center flex-shrink-0">
                  <MdGroups className="text-2xl text-primary-400" />
                </div>
                <div>
                  <p className="text-white font-semibold mb-2">Paid immediately</p>
                  <p className="text-gray-300">Instant credit to your account</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
