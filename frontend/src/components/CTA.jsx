import React from 'react';
import { Instagram, Phone } from 'lucide-react';

export const CTA = () => {
  const handleInstagramClick = () => {
    window.open('https://instagram.com/digitalevo.ads', '_blank');
  };

  const handlePhoneClick = () => {
    window.open('https://wa.me/919380923767', '_blank');
  };

  return (
    <section className="relative py-32 lg:py-40 overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A0F1C] via-[#000000] to-[#0A0F1C]">
        {/* Animated circles */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#F5D300] rounded-full blur-[120px] opacity-10 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#F5D300] rounded-full blur-[120px] opacity-10 animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#000000]/50"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-12 text-center space-y-12">
        {/* Large logo letter in background */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10 opacity-5">
          <span className="font-orbitron text-[20rem] font-black text-[#F5D300]">D</span>
        </div>

        {/* Heading */}
        <h2 className="font-orbitron text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
          <span className="block text-[#F5F5F5]">Let's Build</span>
          <span className="block gradient-text">Something Powerful.</span>
        </h2>

        {/* Subtext */}
        <p className="font-inter text-lg sm:text-xl text-[#F5F5F5]/80 max-w-2xl mx-auto">
          Ready to transform your brand's digital presence? Let's create campaigns that deliver results.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
          {/* Instagram button */}
          <button
            onClick={handleInstagramClick}
            className="group btn-glow relative w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-[#F5D300] text-[#F5D300] font-orbitron font-semibold rounded-full smooth-transition hover:bg-[#F5D300] hover:text-[#000000] hover:shadow-[0_0_30px_rgba(245,211,0,0.4)] flex items-center justify-center gap-3"
          >
            <Instagram className="w-5 h-5" />
            <span className="relative z-10">Explore Our Work</span>
          </button>

          {/* WhatsApp button */}
          <button
            onClick={handlePhoneClick}
            className="group btn-glow relative w-full sm:w-auto px-8 py-4 bg-[#F5D300] text-[#000000] font-orbitron font-semibold rounded-full smooth-transition hover:bg-[#FFE55C] hover:shadow-[0_0_30px_rgba(245,211,0,0.5)] flex items-center justify-center gap-3"
          >
            <Phone className="w-5 h-5" />
            <span className="relative z-10">Let's Talk</span>
          </button>
        </div>

        {/* Contact info */}
        <div className="pt-8 space-y-2">
          <p className="font-inter text-[#F5F5F5]/60 text-sm">
            @digitalevo.ads
          </p>
          <p className="font-inter text-[#F5D300] text-lg font-medium">
            +91 93809 23767
          </p>
        </div>
      </div>
    </section>
  );
};
