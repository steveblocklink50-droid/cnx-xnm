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
      <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-primary-400 glow-green bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center">
        {/* Nexium 'N' letter */}
        <svg
          viewBox="0 0 100 100"
          className="w-3/4 h-3/4"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Modern "N" design with tech feel */}
          <path
            d="M20 80 L20 20 L35 20 L65 60 L65 20 L80 20 L80 80 L65 80 L35 40 L35 80 Z"
            fill="currentColor"
            className="text-white drop-shadow-lg"
          />
          {/* Circuit pattern overlay */}
          <circle cx="50" cy="20" r="3" fill="currentColor" className="text-primary-200 opacity-50" />
          <circle cx="50" cy="80" r="3" fill="currentColor" className="text-primary-200 opacity-50" />
          <line x1="50" y1="20" x2="50" y2="35" stroke="currentColor" strokeWidth="1" className="text-primary-300 opacity-30" />
          <line x1="50" y1="65" x2="50" y2="80" stroke="currentColor" strokeWidth="1" className="text-primary-300 opacity-30" />
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
