import React, { useEffect, useState } from 'react';

export const LoadingScreen = ({ onLoadComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const interval = 20;
    const increment = (interval / duration) * 100;

    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsExiting(true);
            setTimeout(() => onLoadComplete(), 500);
          }, 300);
          return 100;
        }
        return prev + increment;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [onLoadComplete]);

  return (
    <div 
      className={`fixed inset-0 z-[100] bg-[#000000] flex items-center justify-center smooth-transition ${
        isExiting ? 'opacity-0' : 'opacity-100'
      }`}
    >
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#F5D300] rounded-full blur-[150px] opacity-20 animate-pulse-glow"></div>
      </div>

      <div className="relative z-10 text-center space-y-8">
        {/* Logo with pulse animation */}
        <div className="relative">
          <div className="w-32 h-32 mx-auto flex items-center justify-center rounded-full border-2 border-[#F5D300]/30 animate-pulse-glow">
            <span className="text-[#F5D300] font-orbitron text-6xl font-black animate-pulse">
              D
            </span>
          </div>
          
          {/* Rotating ring */}
          <div 
            className="absolute inset-0 border-2 border-[#F5D300]/20 rounded-full"
            style={{ animation: 'spin 3s linear infinite' }}
          ></div>
        </div>

        {/* Brand name */}
        <div className="space-y-2">
          <h1 className="font-cinzel text-2xl font-semibold text-[#F5D300] tracking-[0.3em]">
            DIGITALEVO
          </h1>
          <p className="font-inter text-sm text-[#F5F5F5]/50">
            Loading Excellence...
          </p>
        </div>

        {/* Progress bar */}
        <div className="w-64 mx-auto">
          <div className="h-1 bg-[#F5D300]/10 rounded-full overflow-hidden">
            <div 
              className="h-full bg-[#F5D300] rounded-full smooth-transition"
              style={{ 
                width: `${progress}%`,
                boxShadow: '0 0 10px rgba(245, 211, 0, 0.5)'
              }}
            ></div>
          </div>
          <p className="font-orbitron text-xs text-[#F5D300] mt-2">
            {Math.round(progress)}%
          </p>
        </div>
      </div>
    </div>
  );
};
