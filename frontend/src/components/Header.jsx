import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Our Work', path: '/work' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 smooth-transition ${
        isScrolled ? 'glass py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="group flex items-center gap-3">
            <div className="relative">
              <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#F5D300]/10 group-hover:bg-[#F5D300]/20 smooth-transition">
                <span className="text-[#F5D300] font-orbitron text-xl font-black">D</span>
              </div>
              <div className="absolute inset-0 bg-[#F5D300] rounded-lg blur-md opacity-0 group-hover:opacity-30 smooth-transition"></div>
            </div>
            <span className="font-cinzel text-xl font-semibold text-[#F5D300] tracking-wider">
              DIGITALEVO
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-inter text-sm font-medium smooth-transition relative group ${
                  location.pathname === link.path
                    ? 'text-[#F5D300]'
                    : 'text-[#F5F5F5]/70 hover:text-[#F5D300]'
                }`}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 h-px bg-[#F5D300] smooth-transition ${
                  location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <a
            href="https://wa.me/919380923767"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:block btn-glow relative px-6 py-3 bg-[#F5D300] text-[#000000] font-orbitron text-sm font-semibold rounded-full smooth-transition hover:bg-[#FFE55C] hover:shadow-[0_0_30px_rgba(245,211,0,0.5)]"
          >
            <span className="relative z-10">Let's Talk</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-[#F5D300]"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-6 pb-6 glass rounded-2xl p-6 space-y-4 animate-fade-in-up">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block font-inter text-base font-medium smooth-transition ${
                  location.pathname === link.path
                    ? 'text-[#F5D300]'
                    : 'text-[#F5F5F5]/70 hover:text-[#F5D300]'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="https://wa.me/919380923767"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center px-6 py-3 bg-[#F5D300] text-[#000000] font-orbitron text-sm font-semibold rounded-full"
            >
              Let's Talk
            </a>
          </div>
        )}
      </div>
    </header>
  );
};
