'use client';

import { MdError, MdAccountBalance, MdTrendingDown, MdLock } from 'react-icons/md';

export default function Problem() {
  const problems = [
    { icon: MdError, text: "Don't understand crypto mining" },
    { icon: MdAccountBalance, text: "Can't manage staking or wallets" },
    { icon: MdTrendingDown, text: "Lose money in risky trading" },
    { icon: MdLock, text: "Have no access to professional strategies" },
  ];

  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-950 to-transparent opacity-50" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 rounded-full border border-primary-600 text-primary-400 text-sm font-semibold mb-4">
            Problem
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-primary-300 bg-clip-text text-transparent">
              THE PROBLEM
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* Problem Image */}
          <div className="glass-effect rounded-2xl p-8 flex items-center justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-red-500/20 blur-3xl rounded-full" />
              <MdError className="relative text-9xl text-red-400" />
            </div>
          </div>

          {/* Problem List */}
          <div className="space-y-4">
            {problems.map((problem, index) => {
              const Icon = problem.icon;
              return (
                <div
                  key={index}
                  className="glass-effect p-6 rounded-xl hover:bg-primary-950/30 transition-all duration-300 group"
                >
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-red-900/30 rounded-lg flex items-center justify-center group-hover:bg-red-900/50 transition-colors">
                      <Icon className="text-2xl text-red-400" />
                    </div>
                    <p className="text-lg text-gray-300 group-hover:text-white transition-colors">
                      {problem.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="text-center">
          <p className="text-xl md:text-2xl text-primary-400 font-semibold max-w-3xl mx-auto">
            Crypto is profitable, but too complex for the public.
          </p>
        </div>
      </div>
    </section>
  );
}
