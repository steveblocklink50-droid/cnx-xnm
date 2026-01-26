'use client';

import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

export default function TokenAllocation() {
  const data = [
    { name: 'Ecosystem Rewards', value: 35, color: '#3b82f6' },
    { name: 'Liquidity & Market Support', value: 20, color: '#06b6d4' },
    { name: 'Community & Network Growth', value: 15, color: '#8b5cf6' },
    { name: 'Development & Operations', value: 15, color: '#ec4899' },
    { name: 'Founders & Core Team', value: 10, color: '#ef4444' },
    { name: 'Reserve & Contingency', value: 5, color: '#dc2626' },
  ];

  const allocations = [
    {
      category: 'Ecosystem Rewards',
      allocation: '35%',
      purpose: 'Mining, staking, platform incentives',
      color: '#3b82f6',
    },
    {
      category: 'Liquidity & Market Support',
      allocation: '20%',
      purpose: 'Exchange liquidity & price stability',
      color: '#06b6d4',
    },
    {
      category: 'Community & Network Growth',
      allocation: '15%',
      purpose: 'Referral, leadership & reward programs',
      color: '#8b5cf6',
    },
    {
      category: 'Development & Operations',
      allocation: '15%',
      purpose: 'Platform development, security, infra',
      color: '#ec4899',
    },
    {
      category: 'Founders & Core Team',
      allocation: '10%',
      purpose: 'Locked & vested for long-term alignment',
      color: '#ef4444',
    },
    {
      category: 'Reserve & Contingency',
      allocation: '5%',
      purpose: 'Risk management & future expansion',
      color: '#dc2626',
    },
  ];

  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-950 to-transparent opacity-50" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-primary-300 bg-clip-text text-transparent">
              NXM (Nexium Token) Allocation
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Chart */}
          <div className="glass-effect p-8 rounded-2xl">
            <ResponsiveContainer width="100%" height={400}>
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={120}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Allocation Table */}
          <div className="space-y-4">
            {allocations.map((item, index) => (
              <div
                key={index}
                className="glass-effect p-4 rounded-xl hover:bg-primary-950/30 transition-all duration-300"
              >
                <div className="flex items-center space-x-4">
                  <div
                    className="w-4 h-4 rounded-full flex-shrink-0"
                    style={{ backgroundColor: item.color }}
                  />
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="text-white font-semibold">{item.category}</h3>
                      <span className="text-primary-400 font-bold">{item.allocation}</span>
                    </div>
                    <p className="text-sm text-gray-400">{item.purpose}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="glass-effect p-6 rounded-xl text-center">
            <div className="text-primary-400 font-bold text-2xl mb-2">Ecosystem Rewards</div>
            <div className="text-white text-4xl font-bold mb-2">35%</div>
            <div className="text-gray-400 text-sm">Largest allocation for user rewards</div>
          </div>
          <div className="glass-effect p-6 rounded-xl text-center">
            <div className="text-primary-400 font-bold text-2xl mb-2">Liquidity Support</div>
            <div className="text-white text-4xl font-bold mb-2">20%</div>
            <div className="text-gray-400 text-sm">Market stability & trading</div>
          </div>
          <div className="glass-effect p-6 rounded-xl text-center">
            <div className="text-primary-400 font-bold text-2xl mb-2">Community Growth</div>
            <div className="text-white text-4xl font-bold mb-2">15%</div>
            <div className="text-gray-400 text-sm">Network expansion & rewards</div>
          </div>
        </div>
      </div>
    </section>
  );
}
