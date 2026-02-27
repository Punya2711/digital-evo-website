import React from 'react';
import { Instagram, Phone, Mail } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#000000] border-t border-[#F5D300]/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="font-orbitron text-2xl font-bold gradient-text">
              DIGITAL EVO
            </h3>
            <p className="font-inter text-[#F5F5F5]/70 text-sm">
              Building bold brands through strategic digital marketing and performance-driven campaigns.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-orbitron text-lg font-semibold text-[#F5F5F5]">
              Quick Links
            </h4>
            <div className="space-y-2">
              <button 
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="block font-inter text-[#F5F5F5]/70 hover:text-[#F5D300] smooth-transition text-sm"
              >
                Services
              </button>
              <button 
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="block font-inter text-[#F5F5F5]/70 hover:text-[#F5D300] smooth-transition text-sm"
              >
                About Us
              </button>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-orbitron text-lg font-semibold text-[#F5F5F5]">
              Get in Touch
            </h4>
            <div className="space-y-3">
              <a 
                href="https://instagram.com/digitalevo.ads"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 font-inter text-[#F5F5F5]/70 hover:text-[#F5D300] smooth-transition text-sm group"
              >
                <Instagram className="w-4 h-4 group-hover:scale-110 smooth-transition" />
                @digitalevo.ads
              </a>
              <a 
                href="https://wa.me/919380923767"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 font-inter text-[#F5F5F5]/70 hover:text-[#F5D300] smooth-transition text-sm group"
              >
                <Phone className="w-4 h-4 group-hover:scale-110 smooth-transition" />
                +91 93809 23767
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-[#F5D300]/10 text-center">
          <p className="font-inter text-[#F5F5F5]/60 text-sm">
            © {currentYear} Digital Evo. All rights reserved. Crafted with precision.
          </p>
        </div>
      </div>
    </footer>
  );
};
