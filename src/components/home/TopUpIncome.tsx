'use client';

export default function TopUpIncome() {
  const howItWorks = [
    'User buys a package',
    'User earns from all income sources',
    'Total earnings reach 2× of the package',
    'Earnings stop automatically',
    'User tops-up (buys a package again)',
    'New earning cycle starts',
  ];

  const whatYouGet = [
    'Daily ROI',
    'Binary / Pair matching income',
    'Direct referral income (20%)',
    'Top up',
    'Rewards & leadership benefits',
  ];

  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 rounded-full border border-primary-600 text-primary-400 text-sm font-semibold mb-4">
            Top up Income
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-primary-300 bg-clip-text text-transparent">
              Top up Income
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            In Nexium, every user earns up to 2× of their package value. Once this limit is reached, the earning cycle is completed.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* What You Get After Top-Up */}
          <div className="glass-effect p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-primary-400 mb-6">WHAT YOU GET AFTER TOP-UP</h3>
            <p className="text-gray-300 mb-6">After re-activation, the user again earns from:</p>
            <div className="space-y-4">
              {whatYouGet.map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary-400 rounded-full" />
                  <span className="text-gray-300">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* How It Works */}
          <div className="glass-effect p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-primary-400 mb-6">HOW IT WORKS</h3>
            <div className="space-y-4">
              {howItWorks.map((step, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary-900/50 rounded-full flex items-center justify-center">
                    <span className="text-primary-400 font-bold">{index + 1}</span>
                  </div>
                  <p className="text-gray-300 pt-1">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="glass-effect p-6 rounded-xl border-l-4 border-primary-500">
            <p className="text-lg text-gray-300">
              <span className="text-primary-400 font-bold">Each top-up = a new earning opportunity</span>
            </p>
          </div>
          <div className="glass-effect p-6 rounded-xl border-l-4 border-primary-500">
            <p className="text-lg text-gray-300">
              To continue earning and stay active, the user needs to top-up (re-activate) their account.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
