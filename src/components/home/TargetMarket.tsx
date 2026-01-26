'use client';

import { MdShowChart, MdPeople, MdTrendingUp, MdPublic, MdGroup } from 'react-icons/md';

export default function TargetMarket() {
  const audiences = [
    {
      icon: MdShowChart,
      title: 'Retail investors',
      description: 'Individual investors looking for passive crypto income',
    },
    {
      icon: MdPeople,
      title: 'Crypto beginners',
      description: 'New to crypto but want structured earning opportunities',
    },
    {
      icon: MdTrendingUp,
      title: 'Passive income seekers',
      description: 'Those seeking regular returns without active trading',
    },
    {
      icon: MdGroup,
      title: 'Network builders',
      description: 'Building teams and earning from referral networks',
    },
    {
      icon: MdPublic,
      title: 'Global digital communities',
      description: 'Worldwide participants in the crypto ecosystem',
    },
  ];

  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-950 to-transparent opacity-50" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 rounded-full border border-primary-600 text-primary-400 text-sm font-semibold mb-4">
            Audience
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gray-400 italic">worldwide participation</span>
          </h2>
          <h3 className="text-4xl md:text-6xl font-bold">
            <span className="bg-gradient-to-r from-white to-primary-300 bg-clip-text text-transparent">
              TARGET MARKET
            </span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {audiences.map((audience, index) => {
            const Icon = audience.icon;
            return (
              <div
                key={index}
                className="glass-effect p-8 rounded-2xl hover:bg-primary-950/30 transition-all duration-300 group glow-green"
              >
                <div className="w-16 h-16 bg-primary-900/50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary-800 transition-colors">
                  <Icon className="text-4xl text-primary-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary-400 transition-colors">
                  {audience.title}
                </h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                  {audience.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
