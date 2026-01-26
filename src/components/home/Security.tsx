'use client';

import { MdSecurity, MdLock, MdAccountBalance, MdSpeed, MdVerifiedUser } from 'react-icons/md';

export default function Security() {
  const features = [
    {
      icon: MdLock,
      title: 'Encrypted wallet systems',
      description: 'Multi-layer encryption for maximum security',
    },
    {
      icon: MdAccountBalance,
      title: 'Cold & hot wallet management',
      description: 'Balanced approach to fund security and accessibility',
    },
    {
      icon: MdSecurity,
      title: 'Risk-controlled fund allocation',
      description: 'Professional risk management strategies',
    },
    {
      icon: MdSpeed,
      title: 'Automated payout engine',
      description: 'Fast and reliable automated distributions',
    },
    {
      icon: MdVerifiedUser,
      title: 'Internal compliance monitoring',
      description: 'Continuous monitoring and compliance checks',
    },
  ];

  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 rounded-full border border-primary-600 text-primary-400 text-sm font-semibold mb-4">
            Secure
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-primary-300 bg-clip-text text-transparent">
              PLATFORM SECURITY
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="glass-effect p-6 rounded-2xl hover:bg-primary-950/30 transition-all duration-300 group text-center glow-green"
              >
                <div className="w-20 h-20 mx-auto bg-primary-900/50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary-800 transition-colors">
                  <Icon className="text-4xl text-primary-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-primary-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="glass-effect p-8 rounded-2xl text-center">
          <MdSecurity className="text-6xl text-primary-400 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-white mb-4">Enterprise-Grade Security</h3>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Your assets are protected with industry-leading security measures including multi-signature wallets, 
            regular security audits, and 24/7 monitoring to ensure the highest level of protection.
          </p>
        </div>
      </div>
    </section>
  );
}
