'use client';

export default function CoreBusiness() {
  const verticals = [
    {
      title: 'Crypto Mining',
      description: 'Hardware & cloud-based mining',
    },
    {
      title: 'Crypto Staking',
      description: 'Proof-of-stake rewards',
    },
    {
      title: 'Crypto Trading',
      description: 'Arbitrage & low-risk strategies',
    },
    {
      title: 'Platform Tech',
      description: 'Automated ROI & payouts',
    },
  ];

  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 rounded-full border border-primary-600 text-primary-400 text-sm font-semibold mb-4">
            Core
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-primary-300 bg-clip-text text-transparent">
              Core Business Verticales
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {verticals.map((vertical, index) => (
            <div
              key={index}
              className="glass-effect p-8 rounded-2xl hover:bg-primary-950/30 transition-all duration-300 group glow-green"
            >
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary-400 transition-colors">
                {vertical.title}
              </h3>
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                {vertical.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
