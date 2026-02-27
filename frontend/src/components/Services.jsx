import React, { useEffect, useRef, useState } from 'react';
import { Smartphone, Video, MonitorPlay, Palette, Sparkles } from 'lucide-react';

const services = [
  {
    icon: Smartphone,
    title: 'Social Media Handling',
    description: 'Strategic content creation and community management across all platforms to build your digital presence.'
  },
  {
    icon: Video,
    title: 'AdFilm Production',
    description: 'Cinematic storytelling that captures attention and drives action through professional video production.'
  },
  {
    icon: MonitorPlay,
    title: 'Digital Billboard',
    description: 'High-impact outdoor advertising solutions that command attention in prime locations.'
  },
  {
    icon: Palette,
    title: 'Web Design',
    description: 'Premium, conversion-focused websites that blend aesthetics with performance and user experience.'
  },
  {
    icon: Sparkles,
    title: 'Branding & Identity',
    description: 'Comprehensive brand development from strategy to visual identity that resonates with your audience.'
  }
];

export const Services = () => {
  const [visibleCards, setVisibleCards] = useState([]);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            services.forEach((_, index) => {
              setTimeout(() => {
                setVisibleCards(prev => [...prev, index]);
              }, index * 150);
            });
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="services" 
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-[#000000] overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0F1C] via-[#000000] to-[#000000] opacity-50"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-orbitron text-4xl sm:text-5xl lg:text-6xl font-bold text-[#F5F5F5]">
            OUR <span className="gradient-text">SERVICES</span>
          </h2>
          <p className="font-inter text-lg text-[#F5F5F5]/70 max-w-2xl mx-auto">
            Comprehensive digital solutions designed to elevate your brand and drive measurable results.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isVisible = visibleCards.includes(index);
            
            return (
              <div
                key={index}
                className={`group glass rounded-2xl p-8 smooth-transition hover:border-[#F5D300] hover:shadow-[0_0_40px_rgba(245,211,0,0.15)] cursor-pointer ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Icon */}
                <div className="mb-6 w-14 h-14 flex items-center justify-center rounded-xl bg-[#F5D300]/10 group-hover:bg-[#F5D300]/20 smooth-transition">
                  <Icon className="w-7 h-7 text-[#F5D300]" />
                </div>

                {/* Title */}
                <h3 className="font-orbitron text-xl sm:text-2xl font-semibold text-[#F5F5F5] mb-4 group-hover:text-[#F5D300] smooth-transition">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="font-inter text-[#F5F5F5]/70 leading-relaxed">
                  {service.description}
                </p>

                {/* Hover glow line */}
                <div className="mt-6 h-0.5 w-0 bg-gradient-to-r from-[#F5D300] to-transparent group-hover:w-full smooth-transition"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
