import React, { useEffect, useState } from 'react';
import { CircuitBackground } from './CircuitBackground';
import { ChevronDown } from 'lucide-react';

export const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0A0F1C] via-[#000000] to-[#0A0F1C]">
      <CircuitBackground />
      
      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-[#F5D300] rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Text Content */}
          <div className={`space-y-8 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <h1 className="font-orbitron text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="block text-[#F5F5F5]">DIGITAL</span>
              <span className="block text-[#F5F5F5]">MARKETING</span>
              <span className="block gradient-text">& ADS</span>
            </h1>
            
            <p className="font-inter text-lg sm:text-xl text-[#F5F5F5]/80 max-w-xl leading-relaxed">
              Brand strategy and performance marketing for ambitious businesses.
            </p>

            <button
              onClick={scrollToServices}
              className="group btn-glow relative px-8 py-4 bg-[#F5D300] text-[#000000] font-orbitron font-semibold rounded-full smooth-transition hover:bg-[#FFE55C] hover:shadow-[0_0_30px_rgba(245,211,0,0.5)] overflow-hidden"
            >
              <span className="relative z-10">Explore Services</span>
            </button>
          </div>

          {/* Right - Animated Logo */}
          <div className={`flex justify-center lg:justify-end ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 animate-float">
              {/* Glowing background effect */}
              <div className="absolute inset-0 bg-[#F5D300] rounded-full blur-[100px] opacity-20 animate-pulse-glow"></div>
              
              {/* Logo container */}
              <div className="relative w-full h-full flex items-center justify-center">
                <div className="text-[#F5D300] font-orbitron text-8xl sm:text-9xl font-black smooth-transition hover:scale-110 cursor-pointer">
                  D
                </div>
              </div>

              {/* Rotating ring */}
              <div className="absolute inset-0 border-2 border-[#F5D300]/30 rounded-full" 
                   style={{ animation: 'spin 20s linear infinite' }} />
              <div className="absolute inset-4 border border-[#F5D300]/20 rounded-full" 
                   style={{ animation: 'spin 15s linear infinite reverse' }} />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <button 
          onClick={scrollToServices}
          className="flex flex-col items-center gap-2 smooth-transition hover:gap-4 cursor-pointer"
        >
          <span className="text-[#F5D300] text-sm font-inter uppercase tracking-wider">Scroll</span>
          <ChevronDown className="w-6 h-6 text-[#F5D300] animate-bounce" />
        </button>
      </div>
    </section>
  );
};
