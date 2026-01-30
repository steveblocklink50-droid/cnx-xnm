'use client';

import { motion } from 'framer-motion';

interface NexiumLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  animated?: boolean;
  className?: string;
}

export default function NexiumLogo({ size = 'md', animated = true, className = '' }: NexiumLogoProps) {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-24 h-24',
  };

  const LogoContent = () => (
    <div className={`${sizeClasses[size]} relative ${className}`}>
      {/* Glowing background effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full blur-md opacity-50 animate-pulse-slow"></div>
      
      {/* Main logo container */}
      <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-primary-400 glow-green bg-dark-950 flex items-center justify-center">
        {/* Nexium SVG Logo */}
        <svg
          viewBox="0 0 200 200"
          className="w-4/5 h-4/5"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#22d3ee', stopOpacity: 1 }} />
              <stop offset="50%" style={{ stopColor: '#06b6d4', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#0891b2', stopOpacity: 1 }} />
            </linearGradient>
          </defs>
          {/* N Shape with gradient */}
          <g>
            {/* Left vertical line */}
            <line x1="50" y1="140" x2="50" y2="60" stroke="url(#logoGrad)" strokeWidth="12" strokeLinecap="round"/>
            {/* Right vertical line */}
            <line x1="150" y1="60" x2="150" y2="140" stroke="url(#logoGrad)" strokeWidth="12" strokeLinecap="round"/>
            {/* Diagonal connector */}
            <line x1="50" y1="140" x2="150" y2="60" stroke="url(#logoGrad)" strokeWidth="12" strokeLinecap="round"/>
          </g>
          {/* Corner accent dots */}
          <circle cx="30" cy="30" r="3" fill="#22d3ee" opacity="0.8"/>
          <circle cx="170" cy="35" r="3" fill="#22d3ee" opacity="0.8"/>
          <circle cx="35" cy="170" r="3" fill="#22d3ee" opacity="0.8"/>
          <circle cx="165" cy="165" r="3" fill="#22d3ee" opacity="0.8"/>
        </svg>

        {/* Rotating ring effect */}
        {animated && (
          <div className="absolute inset-0 border-2 border-primary-300 rounded-full opacity-20 animate-rotate"></div>
        )}
      </div>

      {/* Orbiting particles */}
      {animated && (
        <>
          <motion.div
            className="absolute top-0 right-0 w-2 h-2 bg-primary-400 rounded-full"
            animate={{
              x: [0, 10, 0, -10, 0],
              y: [0, -10, 0, 10, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          <motion.div
            className="absolute bottom-0 left-0 w-2 h-2 bg-primary-300 rounded-full"
            animate={{
              x: [0, -10, 0, 10, 0],
              y: [0, 10, 0, -10, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear",
              delay: 2,
            }}
          />
        </>
      )}
    </div>
  );

  if (animated) {
    return (
      <motion.div
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <LogoContent />
      </motion.div>
    );
  }

  return <LogoContent />;
}
