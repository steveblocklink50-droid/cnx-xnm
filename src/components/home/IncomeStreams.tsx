'use client';

export default function IncomeStreams() {
  const streams = [
    'Daily ROI Income',
    'Direct Referral Bonus',
    'Matching Bonus',
    'Top up Income',
    'Rewards & leadership benefits',
  ];

  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 rounded-full border border-primary-600 text-primary-400 text-sm font-semibold mb-4">
            Income Streams
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-primary-300 bg-clip-text text-transparent">
              Nexium offers performance-based incomes, not guaranteed giveaways.
            </span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto mb-12">
          <div className="glass-effect p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-primary-400 mb-6">Total Income Streams:</h3>
            <div className="space-y-4">
              {streams.map((stream, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary-900/50 rounded-full flex items-center justify-center">
                    <span className="text-primary-400 font-bold text-lg">{index + 1}</span>
                  </div>
                  <p className="text-lg text-gray-300">{stream}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="glass-effect p-6 rounded-xl text-center glow-green">
            <div className="text-primary-400 font-bold text-xl mb-2">Performance-Based</div>
            <div className="text-gray-300">Earnings based on activity and network growth</div>
          </div>
          <div className="glass-effect p-6 rounded-xl text-center glow-green">
            <div className="text-primary-400 font-bold text-xl mb-2">Multiple Streams</div>
            <div className="text-gray-300">5 different ways to earn income</div>
          </div>
          <div className="glass-effect p-6 rounded-xl text-center glow-green">
            <div className="text-primary-400 font-bold text-xl mb-2">Transparent</div>
            <div className="text-gray-300">Clear structure and earning potential</div>
          </div>
        </div>
      </div>
    </section>
  );
}
