import React, { useEffect, useRef, useState } from 'react';
import { MapPin, Award, Users, TrendingUp } from 'lucide-react';

export const About = () => {
  const [counters, setCounters] = useState({
    projects: 0,
    brands: 0,
    reach: 0
  });
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            animateCounters();
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateCounters = () => {
    const duration = 2000;
    const targets = { projects: 150, brands: 80, reach: 5 };
    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);

      const easeOutQuart = 1 - Math.pow(1 - progress, 4);

      setCounters({
        projects: Math.floor(easeOutQuart * targets.projects),
        brands: Math.floor(easeOutQuart * targets.brands),
        reach: Math.floor(easeOutQuart * targets.reach)
      });

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    animate();
  };

  return (
    <section 
      id="about"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-gradient-to-b from-[#000000] to-[#0A0F1C] overflow-hidden"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Big statement */}
          <div className="space-y-8">
            <h2 className="font-orbitron text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="block text-[#F5F5F5]">Building</span>
              <span className="block gradient-text">Bold Brands.</span>
            </h2>
            
            <p className="font-inter text-lg text-[#F5F5F5]/80 leading-relaxed max-w-xl">
              We're a performance-driven digital marketing agency specializing in brand strategy, 
              creative content, and data-driven advertising campaigns that deliver measurable results.
            </p>

            {/* Stats counters */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-[#F5D300]" />
                  <span className="font-orbitron text-3xl sm:text-4xl font-bold text-[#F5D300]">
                    {counters.projects}+
                  </span>
                </div>
                <p className="font-inter text-sm text-[#F5F5F5]/60">Projects Completed</p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-[#F5D300]" />
                  <span className="font-orbitron text-3xl sm:text-4xl font-bold text-[#F5D300]">
                    {counters.brands}+
                  </span>
                </div>
                <p className="font-inter text-sm text-[#F5F5F5]/60">Brands Served</p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-[#F5D300]" />
                  <span className="font-orbitron text-3xl sm:text-4xl font-bold text-[#F5D300]">
                    {counters.reach}M+
                  </span>
                </div>
                <p className="font-inter text-sm text-[#F5F5F5]/60">Campaign Reach</p>
              </div>
            </div>
          </div>

          {/* Right - Business info cards */}
          <div className="space-y-6">
            {/* Business name card */}
            <div className="glass rounded-2xl p-8 smooth-transition hover:border-[#F5D300] hover:shadow-[0_0_30px_rgba(245,211,0,0.15)]">
              <h3 className="font-orbitron text-3xl font-bold gradient-text mb-2">
                Digital Evo
              </h3>
              <p className="font-inter text-[#F5F5F5]/70">
                Your partner in digital transformation
              </p>
            </div>

            {/* Locations */}
            <div className="space-y-4">
              <h4 className="font-orbitron text-xl font-semibold text-[#F5F5F5] flex items-center gap-2">
                <MapPin className="w-5 h-5 text-[#F5D300]" />
                Our Locations
              </h4>
              
              <div className="glass rounded-xl p-6 smooth-transition hover:border-[#F5D300]/50">
                <p className="font-inter text-[#F5F5F5] font-medium">Hassan Office</p>
                <p className="font-inter text-[#F5F5F5]/70 text-sm mt-1">
                  Vidyanagar, Hassan – 573202
                </p>
              </div>

              <div className="glass rounded-xl p-6 smooth-transition hover:border-[#F5D300]/50">
                <p className="font-inter text-[#F5F5F5] font-medium">Mysuru Office</p>
                <p className="font-inter text-[#F5F5F5]/70 text-sm mt-1">
                  Vijaynagar 1st Stage, Mysuru – 570017
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-[#F5D300] rounded-full blur-[150px] opacity-5"></div>
    </section>
  );
};
