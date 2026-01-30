'use client';

import Link from 'next/link';
import { FaBitcoin, FaTwitter, FaTelegram, FaDiscord, FaGithub } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    product: [
      { label: 'Swap', href: '/swap' },
      { label: 'Liquidity', href: '/liquidity' },
      { label: 'Staking', href: '/staking' },
      { label: 'Mining', href: '/mining' },
    ],
    company: [
      { label: 'About', href: '/about' },
      { label: 'Whitepaper', href: '/whitepaper' },
      { label: 'Tokenomics', href: '/tokenomics' },
      { label: 'Roadmap', href: '/roadmap' },
    ],
    resources: [
      { label: 'Documentation', href: '/docs' },
      { label: 'Help Center', href: '/help' },
      { label: 'Terms of Service', href: '/terms' },
      { label: 'Privacy Policy', href: '/privacy' },
    ],
  };

  const socialLinks = [
    { icon: FaTwitter, href: 'https://twitter.com/nexium-ai', label: 'Twitter' },
    { icon: FaTelegram, href: 'https://t.me/nexium-ai', label: 'Telegram' },
    { icon: FaDiscord, href: 'https://discord.gg/nexium-ai', label: 'Discord' },
    { icon: FaGithub, href: 'https://github.com/nexium-ai', label: 'GitHub' },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-transparent to-dark-950 border-t border-primary-800/30 mt-20">
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 flex items-center justify-center bg-dark-950 border-2 border-primary-400 rounded-full glow-green">
                <svg
                  viewBox="0 0 200 200"
                  className="w-3/4 h-3/4"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient id="footerLogoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style={{ stopColor: '#22d3ee', stopOpacity: 1 }} />
                      <stop offset="100%" style={{ stopColor: '#0891b2', stopOpacity: 1 }} />
                    </linearGradient>
                  </defs>
                  {/* N Shape */}
                  <g>
                    <line x1="50" y1="140" x2="50" y2="60" stroke="url(#footerLogoGrad)" strokeWidth="12" strokeLinecap="round"/>
                    <line x1="150" y1="60" x2="150" y2="140" stroke="url(#footerLogoGrad)" strokeWidth="12" strokeLinecap="round"/>
                    <line x1="50" y1="140" x2="150" y2="60" stroke="url(#footerLogoGrad)" strokeWidth="12" strokeLinecap="round"/>
                  </g>
                </svg>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">
                NEXIUM-AI
              </span>
            </Link>
            <p className="text-gray-400 mb-6 max-w-md">
              Revolutionizing the financial world. Make crypto income accessible, structured, and secure for everyone.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-primary-950/50 text-gray-400 hover:text-primary-400 hover:bg-primary-900/50 transition-all duration-200 glow-green"
                    aria-label={social.label}
                  >
                    <Icon className="text-lg" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-primary-400 transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-primary-400 transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-primary-400 transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-primary-800/30 text-center text-gray-400">
          <p>© {currentYear} NEXIUM-AI. All rights reserved.</p>
          <p className="mt-2 text-sm">
            It is a structured digital economy where performance, leadership, and contribution define income.
          </p>
        </div>
      </div>
    </footer>
  );
}
