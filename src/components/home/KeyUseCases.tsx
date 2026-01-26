'use client';

export default function KeyUseCases() {
  const useCases = [
    {
      title: '1. Staking Utility',
      points: [
        'Users can stake NXM within the Nexium platform',
        'Staking unlocks:',
        'Higher earning eligibility',
        'Platform benefits',
        'Reward multipliers',
        'Longer staking periods unlock additional platform privileges',
      ],
    },
    {
      title: '2. Mining Reward Settlement',
      points: [
        'A portion of crypto mining rewards is distributed using NXM',
        'NXM acts as a reward-balancing token within mining operations',
        'Helps maintain predictable internal reward structures',
      ],
    },
    {
      title: '3. Trading & Internal Liquidity',
      points: [
        'NXM is used as a base utility token inside the Nexium ecosystem',
        'Enables internal transfers, conversions, and settlements',
        'Planned future exchange integrations (subject to compliance & market conditions)',
      ],
    },
  ];

  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-primary-300 bg-clip-text text-transparent">
              Key Use Cases of NXM
            </span>
          </h2>
        </div>

        <div className="space-y-8">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className="glass-effect p-8 rounded-2xl hover:bg-primary-950/30 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-primary-400 mb-6">
                {useCase.title}
              </h3>
              <ul className="space-y-3">
                {useCase.points.map((point, pointIndex) => (
                  <li
                    key={pointIndex}
                    className="flex items-start space-x-3 text-gray-300"
                  >
                    <span className="text-primary-400 mt-1">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
