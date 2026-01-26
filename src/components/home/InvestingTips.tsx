'use client';

import { MdSearch, MdPieChart, MdWarning } from 'react-icons/md';

export default function InvestingTips() {
  const tips = [
    {
      icon: MdSearch,
      title: 'Research and Education',
      description: 'Understand the platform, tokenomics, and investment process before participating',
    },
    {
      icon: MdPieChart,
      title: 'Diversify Your Portfolio',
      description: 'Spread your investments across different assets and opportunities',
    },
    {
      icon: MdWarning,
      title: 'Understand the Risks Involved',
      description: 'All investments carry risk. Only invest what you can afford to lose',
    },
  ];

  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-950/20 to-transparent" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 rounded-full border border-primary-600 text-primary-400 text-sm font-semibold mb-4">
            Coin
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-primary-300 bg-clip-text text-transparent">
              Investing in Nexium
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tips.map((tip, index) => {
            const Icon = tip.icon;
            return (
              <div
                key={index}
                className="glass-effect p-8 rounded-2xl hover:bg-primary-950/30 transition-all duration-300 group text-center glow-green"
              >
                <div className="w-24 h-24 mx-auto bg-primary-900/50 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary-800 transition-colors">
                  <Icon className="text-5xl text-primary-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary-400 transition-colors">
                  {tip.title}
                </h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                  {tip.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-12 glass-effect p-8 rounded-2xl border-l-4 border-yellow-500">
          <div className="flex items-start space-x-4">
            <MdWarning className="text-4xl text-yellow-500 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Important Disclaimer</h3>
              <p className="text-gray-300">
                Cryptocurrency investments involve risk. Past performance does not guarantee future results. 
                Always conduct your own research and consult with financial advisors before making investment decisions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
