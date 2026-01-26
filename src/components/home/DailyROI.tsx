'use client';

export default function DailyROI() {
  const roiData = [
    { package: '$50', dailyROI: '0.4% daily', maxReturn: '2×' },
    { package: '$100', dailyROI: '0.6% daily', maxReturn: '2×' },
    { package: '$500', dailyROI: '0.75% daily', maxReturn: '2×' },
    { package: '$1000 and above', dailyROI: '1% daily', maxReturn: '2×' },
  ];

  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-950/20 to-transparent" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 rounded-full border border-primary-600 text-primary-400 text-sm font-semibold mb-4">
            Daily ROI
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-primary-300 bg-clip-text text-transparent">
              Daily ROI Income
            </span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="glass-effect rounded-2xl overflow-hidden">
            <div className="grid grid-cols-3 bg-primary-900/30">
              <div className="p-6 text-center border-r border-primary-800/30">
                <h3 className="text-lg font-bold text-white">Package Amount</h3>
              </div>
              <div className="p-6 text-center border-r border-primary-800/30">
                <h3 className="text-lg font-bold text-white">Daily ROI</h3>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-lg font-bold text-white">Max Return</h3>
              </div>
            </div>
            {roiData.map((row, index) => (
              <div
                key={index}
                className={`grid grid-cols-3 hover:bg-primary-950/30 transition-all duration-300 ${
                  index !== roiData.length - 1 ? 'border-b border-primary-800/30' : ''
                }`}
              >
                <div className="p-6 text-center border-r border-primary-800/30">
                  <span className="text-xl font-semibold text-white">{row.package}</span>
                </div>
                <div className="p-6 text-center border-r border-primary-800/30">
                  <span className="text-xl font-bold text-primary-400">{row.dailyROI}</span>
                </div>
                <div className="p-6 text-center">
                  <span className="text-xl font-bold text-primary-400">{row.maxReturn}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-6 glass-effect rounded-xl text-center">
            <p className="text-lg text-gray-300">
              <span className="text-primary-400 font-bold">Earnings stop automatically after 2× | Capital discipline ensured</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
