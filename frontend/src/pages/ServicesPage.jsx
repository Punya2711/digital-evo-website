import React, { useEffect, useRef, useState } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Smartphone, Video, MonitorPlay, Palette, Sparkles, ArrowRight, Check } from 'lucide-react';

const servicesData = [
  {
    id: 'social-media',
    icon: Smartphone,
    title: 'Social Media Handling',
    tagline: 'Your brand, everywhere.',
    description: 'Strategic content creation and community management that turns followers into customers.',
    features: [
      { title: 'Strategy', desc: 'Data-driven social media roadmaps tailored to your goals' },
      { title: 'Content', desc: 'High-quality posts, reels, and stories that stop the scroll' },
      { title: 'Growth', desc: 'Organic and paid strategies to scale your audience' },
      { title: 'Analytics', desc: 'Performance tracking and monthly insights reports' }
    ],
    gradient: 'from-[#F5D300]/10 via-[#F5D300]/5 to-transparent'
  },
  {
    id: 'adfilm',
    icon: Video,
    title: 'AdFilm Production',
    tagline: 'Stories that sell.',
    description: 'Cinematic storytelling that captures attention, builds emotion, and drives action.',
    features: [
      { title: 'Concept', desc: 'Creative ideation from script to storyboard' },
      { title: 'Shooting', desc: 'Professional production with cinema-grade equipment' },
      { title: 'Editing', desc: 'Post-production that brings your vision to life' },
      { title: 'Reels', desc: 'Short-form content optimized for social platforms' }
    ],
    gradient: 'from-[#F5D300]/10 via-[#F5D300]/5 to-transparent'
  },
  {
    id: 'billboard',
    icon: MonitorPlay,
    title: 'Digital Billboard',
    tagline: 'Dominate the streets.',
    description: 'High-impact outdoor advertising that commands attention in premium locations.',
    features: [
      { title: 'Outdoor Media Planning', desc: 'Strategic placement in high-traffic areas' },
      { title: 'Placement Strategy', desc: 'Data-backed location selection for maximum ROI' },
      { title: 'Creative Design', desc: 'Bold visuals designed for instant impact' },
      { title: 'Campaign Management', desc: 'End-to-end execution and performance tracking' }
    ],
    gradient: 'from-[#F5D300]/10 via-[#F5D300]/5 to-transparent'
  },
  {
    id: 'web-design',
    icon: Palette,
    title: 'Web Design',
    tagline: 'Websites that convert.',
    description: 'Premium, performance-driven websites that blend stunning aesthetics with flawless UX.',
    features: [
      { title: 'UI/UX', desc: 'User-centered design that guides visitors to action' },
      { title: 'Responsive Design', desc: 'Pixel-perfect across all devices and screen sizes' },
      { title: 'Conversion Optimized', desc: 'Built to turn visitors into customers' },
      { title: 'Performance', desc: 'Lightning-fast load times and seamless interactions' }
    ],
    gradient: 'from-[#F5D300]/10 via-[#F5D300]/5 to-transparent'
  },
  {
    id: 'branding',
    icon: Sparkles,
    title: 'Branding & Identity',
    tagline: 'Brands that resonate.',
    description: 'Comprehensive brand development from strategy to visual identity that creates lasting impressions.',
    features: [
      { title: 'Logo Design', desc: 'Iconic marks that embody your brand essence' },
      { title: 'Brand Systems', desc: 'Complete visual identity guidelines' },
      { title: 'Visual Storytelling', desc: 'Cohesive narratives across all touchpoints' },
      { title: 'Brand Strategy', desc: 'Positioning that sets you apart from competitors' }
    ],
    gradient: 'from-[#F5D300]/10 via-[#F5D300]/5 to-transparent',
    featured: true
  }
];

export const ServicesPage = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const sectionsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('data-id');
            setVisibleSections(prev => [...new Set([...prev, id])]);
          }
        });
      },
      { threshold: 0.2 }
    );

    sectionsRef.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-[#000000] min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-gradient-to-b from-[#0A0F1C] to-[#000000]">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(245, 211, 0, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(245, 211, 0, 0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <div className="inline-block mb-6">
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-[#F5D300] to-transparent mx-auto"></div>
          </div>
          
          <h1 className="font-orbitron text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
            <span className="text-[#F5F5F5]">OUR </span>
            <span className="gradient-text">SERVICES</span>
          </h1>
          
          <p className="font-inter text-xl text-[#F5F5F5]/70 max-w-3xl mx-auto leading-relaxed">
            We don't just market. We engineer growth. Full-spectrum digital solutions designed for ambitious brands.
          </p>
        </div>
      </section>

      {/* Services Detail Sections */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-32">
          {servicesData.map((service, index) => {
            const Icon = service.icon;
            const isVisible = visibleSections.includes(service.id);
            const isReverse = index % 2 !== 0;

            return (
              <div
                key={service.id}
                ref={el => sectionsRef.current[index] = el}
                data-id={service.id}
                className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0'
                }`}
              >
                {/* Content */}
                <div className={`space-y-8 ${isReverse ? 'lg:order-2' : ''}`}>
                  {/* Icon and badge */}
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-[#F5D300]/10 relative overflow-hidden">
                      <div className="absolute inset-0 bg-[#F5D300]/5"></div>
                      <Icon className="w-8 h-8 text-[#F5D300] relative z-10" />
                    </div>
                    {service.featured && (
                      <span className="px-4 py-1 bg-[#F5D300]/20 text-[#F5D300] text-xs font-orbitron font-semibold rounded-full border border-[#F5D300]/30">
                        SIGNATURE
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <div>
                    <h2 className="font-orbitron text-4xl sm:text-5xl font-bold text-[#F5F5F5] mb-3">
                      {service.title}
                    </h2>
                    <p className="font-inter text-xl text-[#F5D300] font-medium">
                      {service.tagline}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="font-inter text-lg text-[#F5F5F5]/70 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features list */}
                  <div className="space-y-4">
                    {service.features.map((feature, idx) => (
                      <div 
                        key={idx}
                        className="flex gap-4 items-start group"
                        style={{ animationDelay: `${idx * 0.1}s` }}
                      >
                        <div className="mt-1 w-5 h-5 rounded-full bg-[#F5D300]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#F5D300]/20 smooth-transition">
                          <Check className="w-3 h-3 text-[#F5D300]" />
                        </div>
                        <div>
                          <h4 className="font-inter text-[#F5F5F5] font-semibold mb-1">
                            {feature.title}
                          </h4>
                          <p className="font-inter text-[#F5F5F5]/60 text-sm">
                            {feature.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Visual Card */}
                <div className={`relative ${isReverse ? 'lg:order-1' : ''}`}>
                  <div className={`glass rounded-3xl p-12 relative overflow-hidden group cursor-pointer hover:border-[#F5D300]/50 smooth-transition`}>
                    {/* Gradient overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-50 group-hover:opacity-100 smooth-transition`}></div>
                    
                    {/* Decorative elements */}
                    <div className="absolute top-0 right-0 w-32 h-32 border-t-2 border-r-2 border-[#F5D300]/0 group-hover:border-[#F5D300]/30 rounded-tr-3xl smooth-transition"></div>
                    <div className="absolute bottom-0 left-0 w-32 h-32 border-b-2 border-l-2 border-[#F5D300]/0 group-hover:border-[#F5D300]/30 rounded-bl-3xl smooth-transition"></div>
                    
                    {/* Icon large display */}
                    <div className="relative z-10 flex items-center justify-center h-64">
                      <Icon className="w-32 h-32 text-[#F5D300]/30 group-hover:text-[#F5D300]/50 smooth-transition group-hover:scale-110" style={{ filter: 'drop-shadow(0 0 20px rgba(245, 211, 0, 0.3))' }} />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#000000] via-[#0A0F1C] to-[#000000]"></div>
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(245, 211, 0, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(245, 211, 0, 0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-12 text-center space-y-8">
          <h2 className="font-orbitron text-4xl sm:text-5xl lg:text-6xl font-bold">
            <span className="text-[#F5F5F5]">Ready to </span>
            <span className="gradient-text">Scale?</span>
          </h2>
          
          <p className="font-inter text-xl text-[#F5F5F5]/70">
            Let's build campaigns that don't just look good—they perform.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
            <a
              href="https://wa.me/919380923767"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-glow relative px-8 py-4 bg-[#F5D300] text-[#000000] font-orbitron font-semibold rounded-full smooth-transition hover:bg-[#FFE55C] hover:shadow-[0_0_30px_rgba(245,211,0,0.5)] flex items-center gap-3"
            >
              <span className="relative z-10">Let's Talk</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};
