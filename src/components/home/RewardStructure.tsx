'use client';

export default function RewardStructure() {
  const levels = [
    { level: 1, pairs: '25 Pairs', rank: 'Starter Node', reward: 'Cash + Token', value: '$100 Cash and $50 in NXM Token' },
    { level: 2, pairs: '50 Pairs', rank: 'Growth Node', reward: 'Cash + Token', value: '$250 Cash and $200 in NXM Token' },
    { level: 3, pairs: '100 Pairs', rank: 'Power Node', reward: 'Cash + Token', value: '$500 Cash and $600 in NXM Token and' },
    { level: 4, pairs: '250 Pairs', rank: 'Elite Node', reward: 'Cash + Token', value: '$1000 Cash and $1200 in NXM Token and' },
    { level: 5, pairs: '500 Pairs', rank: 'Pro Node', reward: 'Lifestyle + Crypto', value: '$1500 Cash and MacBook or Travel Voucher' },
    { level: 6, pairs: '1,000 Pairs', rank: 'Prime Node', reward: 'Cash + International summit', value: '$2500 Cash and International Business Summit' },
    { level: 7, pairs: '2,500 Pairs', rank: 'Wealth Node', reward: 'Lifestyle Reward', value: '$15,000 Cash OR Premium Car Down Payment' },
    { level: 8, pairs: '5,000 Pairs', rank: 'Titan Node', reward: 'Long-Term Income', value: '$50,000 Cash + Lifetime 0.20% ROI Boost' },
    { level: 9, pairs: '10,000 Pairs', rank: 'Legend Node', reward: 'Equity-Style Benefit', value: '0.5% Share of Monthly Platform Revenue' },
    { level: 10, pairs: '25,000 Pairs', rank: 'Genesis Node', reward: 'Founder-Class Reward', value: '$100,000 Cash + Advisory Status' },
  ];

  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-950/20 to-transparent" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 rounded-full border border-primary-600 text-primary-400 text-sm font-semibold mb-4">
            Rewards
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-primary-300 bg-clip-text text-transparent">
              Nexium-AI Progressive Reward Structure
            </span>
          </h2>
        </div>

        <div className="glass-effect rounded-2xl overflow-hidden overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-primary-900/30 border-b border-primary-800/30">
                <th className="p-4 text-left text-white font-semibold">Level</th>
                <th className="p-4 text-left text-white font-semibold">Required Pairs</th>
                <th className="p-4 text-left text-white font-semibold">Rank Title</th>
                <th className="p-4 text-left text-white font-semibold">Reward Type</th>
                <th className="p-4 text-left text-white font-semibold">Reward Value / Benefit</th>
              </tr>
            </thead>
            <tbody>
              {levels.map((level, index) => (
                <tr
                  key={index}
                  className={`hover:bg-primary-950/30 transition-all duration-300 ${
                    index !== levels.length - 1 ? 'border-b border-primary-800/30' : ''
                  }`}
                >
                  <td className="p-4 text-primary-400 font-bold">{level.level}</td>
                  <td className="p-4 text-gray-300">{level.pairs}</td>
                  <td className="p-4 text-white font-semibold">{level.rank}</td>
                  <td className="p-4 text-gray-300">{level.reward}</td>
                  <td className="p-4 text-gray-300">{level.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="glass-effect p-6 rounded-xl border-l-4 border-primary-500">
            <p className="text-lg text-gray-300">
              <span className="text-primary-400 font-bold">• Paid from platform activity</span>
            </p>
          </div>
          <div className="glass-effect p-6 rounded-xl border-l-4 border-primary-500">
            <p className="text-lg text-gray-300">
              <span className="text-primary-400 font-bold">• Not dependent on personal investment size</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
