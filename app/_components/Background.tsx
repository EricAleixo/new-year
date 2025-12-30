'use client';

import { useState, useEffect, ReactNode } from 'react';

interface BackgroundProps {
  children?: ReactNode;
}

const Background = ({ children }: BackgroundProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="relative w-full h-screen bg-linear-to-b overflow-hidden from-slate-950 via-blue-950 to-indigo-950">
        {children}
      </div>
    );
  }

  // Generate random values
  const rand = (seed: number, multiplier: number) => 
    Math.abs(Math.sin(seed * multiplier) * 10000) % 1;

  const stars = Array.from({ length: 150 }, (_, i) => {
    const seed = i + 1;
    return {
      size: rand(seed, 12.9898) * 2 + 1,
      left: rand(seed, 78.233) * 100,
      top: rand(seed, 43.758) * 100,
      delay: rand(seed, 93.989) * 5,
      duration: rand(seed, 15.731) * 3 + 2,
      opacity: rand(seed, 67.345) * 0.5 + 0.3,
    };
  });

  const particles = Array.from({ length: 40 }, (_, i) => {
    const seed = i + 1;
    return {
      size: rand(seed, 34.567) * 4 + 2,
      left: rand(seed, 89.234) * 100,
      delay: rand(seed, 56.789) * 8,
      duration: rand(seed, 21.456) * 8 + 10,
    };
  });

  const fireworks = Array.from({ length: 8 }, (_, i) => {
    const seed = i + 1;
    const colors = ['purple', 'blue', 'amber', 'pink'];
    return {
      size: rand(seed, 45.123) * 100 + 80,
      left: rand(seed, 67.890) * 80 + 10,
      top: rand(seed, 23.456) * 40 + 10,
      delay: rand(seed, 98.765) * 6,
      color: colors[Math.floor(rand(seed, 54.321) * 4)],
    };
  });

  return (
    <div className="relative w-full min-h-screen bg-linear-to-b overflow-hidden from-slate-950 via-blue-950 to-indigo-950">
      {/* Stars layer */}
      <div className="absolute inset-0">
        {stars.map((star, i) => (
          <div
            key={`star-${i}`}
            className="absolute rounded-full bg-white animate-pulse"
            style={{
              width: `${star.size}px`,
              height: `${star.size}px`,
              left: `${star.left}%`,
              top: `${star.top}%`,
              animationDelay: `${star.delay}s`,
              animationDuration: `${star.duration}s`,
              opacity: star.opacity
            }}
          />
        ))}
      </div>

      {/* Magical particles */}
      <div className="absolute inset-0">
        {particles.map((particle, i) => (
          <div
            key={`particle-${i}`}
            className="absolute rounded-full bg-amber-300 animate-float"
            style={{
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              left: `${particle.left}%`,
              bottom: '-10px',
              animationDelay: `${particle.delay}s`,
              animationDuration: `${particle.duration}s`,
              boxShadow: '0 0 10px rgba(251, 191, 36, 0.8)',
              opacity: 0.7
            }}
          />
        ))}
      </div>

      {/* Ethereal glow spots */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600 rounded-full filter blur-3xl opacity-10" />
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-indigo-500 rounded-full filter blur-3xl opacity-10" />
      
      {/* Distant magical fireworks */}
      <div className="absolute inset-0 pointer-events-none">
        {fireworks.map((firework, i) => (
          <div
            key={`firework-${i}`}
            className={`absolute rounded-full bg-${firework.color}-400 animate-firework`}
            style={{
              width: `${firework.size}px`,
              height: `${firework.size}px`,
              left: `${firework.left}%`,
              top: `${firework.top}%`,
              animationDelay: `${firework.delay}s`,
              filter: 'blur(2px)',
              opacity: 0
            }}
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0) translateX(0);
            opacity: 0;
          }
          10% {
            opacity: 0.7;
          }
          90% {
            opacity: 0.7;
          }
          100% {
            transform: translateY(-100vh) translateX(20px);
            opacity: 0;
          }
        }

        @keyframes firework {
          0% {
            transform: scale(0);
            opacity: 0;
          }
          15% {
            transform: scale(1);
            opacity: 0.3;
          }
          30% {
            transform: scale(1.2);
            opacity: 0.15;
          }
          100% {
            transform: scale(1.5);
            opacity: 0;
          }
        }

        .animate-float {
          animation: float linear infinite;
        }

        .animate-firework {
          animation: firework 8s ease-out infinite;
        }
      `}</style>

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default Background;