import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Smartphone, Video, MonitorPlay, Palette, Sparkles, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Smartphone,
    title: 'Social Media Handling',
    description: 'Strategic content creation and community management across all platforms to build your digital presence.',
    gradient: 'from-[#F5D300]/20 to-transparent'
  },
  {
    icon: Video,
    title: 'AdFilm Production',
    description: 'Cinematic storytelling that captures attention and drives action through professional video production.',
    gradient: 'from-[#F5D300]/15 to-transparent'
  },
  {
    icon: MonitorPlay,
    title: 'Digital Billboard',
    description: 'High-impact outdoor advertising solutions that command attention in prime locations.',
    gradient: 'from-[#F5D300]/20 to-transparent'
  },
  {
    icon: Palette,
    title: 'Web Design',
    description: 'Premium, conversion-focused websites that blend aesthetics with performance and user experience.',
    gradient: 'from-[#F5D300]/15 to-transparent'
  },
  {
    icon: Sparkles,
    title: 'Branding & Identity',
    description: 'Comprehensive brand development from strategy to visual identity that resonates with your audience.',
    gradient: 'from-[#F5D300]/10 to-transparent',
    featured: true
  }
];

export const Services = () => {
  const [visibleCards, setVisibleCards] = useState([]);
  const [hoveredCard, setHoveredCard] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            services.forEach((_, index) => {
              setTimeout(() => {
                setVisibleCards(prev => [...prev, index]);
              }, index * 200);
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
      className="relative py-32 lg:py-40 bg-[#000000] overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#F5D300] rounded-full blur-[150px] opacity-5 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#F5D300] rounded-full blur-[150px] opacity-5 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-[#F5D300] rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `parallax-float ${8 + Math.random() * 8}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section header */}
        <div className="text-center mb-20 space-y-6">
          <div className="inline-block">
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-[#F5D300] to-transparent mx-auto mb-6"></div>
          </div>
          
          <h2 className="font-orbitron text-5xl sm:text-6xl lg:text-7xl font-bold text-[#F5F5F5]">
            OUR <span className="gradient-text">SERVICES</span>
          </h2>
          
          <p className="font-inter text-xl text-[#F5F5F5]/70 max-w-3xl mx-auto leading-relaxed">
            Comprehensive digital solutions designed to elevate your brand and drive measurable results.
          </p>
          
          <div className="h-px w-32 bg-gradient-to-r from-transparent via-[#F5D300] to-transparent mx-auto mt-8"></div>
        </div>

        {/* Services grid - First 4 cards in 2x2 grid */}
        <div className="max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-2 gap-8 lg:gap-10 mb-8 lg:mb-10">
            {services.slice(0, 4).map((service, index) => {
              const Icon = service.icon;
              const isVisible = visibleCards.includes(index);
              const isHovered = hoveredCard === index;
              
              return (
                <div
                  key={index}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className={`group relative glass rounded-3xl p-10 smooth-transition cursor-pointer ${
                    isVisible ? '' : 'opacity-0'
                  }`}
                  style={{
                    animation: isVisible ? `card-reveal 0.8s ease-out ${index * 0.2}s forwards` : 'none',
                    transformStyle: 'preserve-3d',
                    border: isHovered ? '1px solid rgba(245, 211, 0, 0.5)' : '1px solid rgba(245, 211, 0, 0.1)',
                    boxShadow: isHovered ? '0 0 60px rgba(245, 211, 0, 0.2), inset 0 0 40px rgba(245, 211, 0, 0.05)' : 'none'
                  }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} rounded-3xl opacity-0 group-hover:opacity-100 smooth-transition`}></div>
                  <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-[#F5D300]/0 group-hover:border-[#F5D300]/50 rounded-tr-3xl smooth-transition"></div>
                  <div className="absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 border-[#F5D300]/0 group-hover:border-[#F5D300]/50 rounded-bl-3xl smooth-transition"></div>
                  
                  <div className="relative z-10">
                    <div className="mb-8 w-16 h-16 flex items-center justify-center rounded-2xl bg-[#F5D300]/10 group-hover:bg-[#F5D300]/20 smooth-transition relative overflow-hidden">
                      <div className={`absolute inset-0 bg-[#F5D300]/10 ${isHovered ? 'animate-pulse' : ''}`}></div>
                      <Icon className="w-8 h-8 text-[#F5D300] relative z-10 group-hover:scale-110 smooth-transition" style={{ filter: isHovered ? 'drop-shadow(0 0 8px rgba(245, 211, 0, 0.8))' : 'none' }} />
                    </div>
                    <h3 className="font-orbitron text-2xl sm:text-3xl font-semibold text-[#F5F5F5] mb-5 group-hover:text-[#F5D300] smooth-transition leading-tight">
                      {service.title}
                    </h3>
                    <p className="font-inter text-[#F5F5F5]/70 leading-relaxed text-lg group-hover:text-[#F5F5F5]/90 smooth-transition">
                      {service.description}
                    </p>
                    <div className="mt-8 h-1 w-0 bg-gradient-to-r from-[#F5D300] via-[#FFE55C] to-transparent group-hover:w-full smooth-transition rounded-full"></div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Featured card centered */}
          <div className="flex justify-center">
            <div className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(50%-1.25rem)]">
              {services.slice(4, 5).map((service, index) => {
                const actualIndex = index + 4;
                const Icon = service.icon;
                const isVisible = visibleCards.includes(actualIndex);
                const isHovered = hoveredCard === actualIndex;
                
                return (
                  <div
                    key={actualIndex}
                    onMouseEnter={() => setHoveredCard(actualIndex)}
                    onMouseLeave={() => setHoveredCard(null)}
                    className={`group relative glass rounded-3xl p-10 smooth-transition cursor-pointer ${
                      isVisible ? '' : 'opacity-0'
                    }`}
                    style={{
                      animation: isVisible ? `card-reveal 0.8s ease-out ${actualIndex * 0.2}s forwards` : 'none',
                      transformStyle: 'preserve-3d',
                      border: isHovered ? '1px solid rgba(245, 211, 0, 0.5)' : '1px solid rgba(245, 211, 0, 0.1)',
                      boxShadow: isHovered ? '0 0 60px rgba(245, 211, 0, 0.2), inset 0 0 40px rgba(245, 211, 0, 0.05)' : 'none'
                    }}
                  >
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-6 py-2 bg-[#F5D300] text-[#000000] font-orbitron text-xs font-bold rounded-full">
                      SIGNATURE SERVICE
                    </div>
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} rounded-3xl opacity-0 group-hover:opacity-100 smooth-transition`}></div>
                    <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-[#F5D300]/0 group-hover:border-[#F5D300]/50 rounded-tr-3xl smooth-transition"></div>
                    <div className="absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 border-[#F5D300]/0 group-hover:border-[#F5D300]/50 rounded-bl-3xl smooth-transition"></div>
                    
                    <div className="relative z-10">
                      <div className="mb-8 w-16 h-16 flex items-center justify-center rounded-2xl bg-[#F5D300]/10 group-hover:bg-[#F5D300]/20 smooth-transition relative overflow-hidden">
                        <div className={`absolute inset-0 bg-[#F5D300]/10 ${isHovered ? 'animate-pulse' : ''}`}></div>
                        <Icon className="w-8 h-8 text-[#F5D300] relative z-10 group-hover:scale-110 smooth-transition" style={{ filter: isHovered ? 'drop-shadow(0 0 8px rgba(245, 211, 0, 0.8))' : 'none' }} />
                      </div>
                      <h3 className="font-orbitron text-2xl sm:text-3xl font-semibold text-[#F5F5F5] mb-5 group-hover:text-[#F5D300] smooth-transition leading-tight">
                        {service.title}
                      </h3>
                      <p className="font-inter text-[#F5F5F5]/70 leading-relaxed text-lg group-hover:text-[#F5F5F5]/90 smooth-transition">
                        {service.description}
                      </p>
                      <div className="mt-8 h-1 w-0 bg-gradient-to-r from-[#F5D300] via-[#FFE55C] to-transparent group-hover:w-full smooth-transition rounded-full"></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* View All Services Button */}
          <div className="text-center mt-16">
            <Link
              to="/services"
              className="inline-flex items-center gap-3 btn-glow relative px-8 py-4 bg-transparent border-2 border-[#F5D300] text-[#F5D300] font-orbitron font-semibold rounded-full smooth-transition hover:bg-[#F5D300] hover:text-[#000000] hover:shadow-[0_0_30px_rgba(245,211,0,0.4)]"
            >
              <span className="relative z-10">View All Services</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
