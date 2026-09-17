import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Sparkles, Box } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface NavbarProps {
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Innovation', href: '#innovation' },
    { label: 'Projects', href: '#projects' },
    { label: 'Team', href: '#team' },
    { label: 'Achievements', href: '#achievements' },
    { label: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = navItems.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 220;

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#070d18]/95 backdrop-blur-md shadow-lg shadow-black/40 border-b border-blue-900/40 py-3.5'
          : 'bg-[#070d18]/80 backdrop-blur-sm border-b border-blue-950/60 py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#home');
            }}
            id="brand-logo"
            className="flex items-center gap-3 group text-decoration-none"
          >
            {/* Tech Logo Mark */}
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-950 via-blue-900 to-cyan-700 flex items-center justify-center text-white shadow-md shadow-cyan-900/30 ring-1 ring-cyan-500/40 group-hover:scale-105 group-hover:ring-cyan-400 transition-all duration-200">
              <span className="font-mono font-extrabold text-sm tracking-tighter text-cyan-300">
                [IF]
              </span>
              <div className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse ring-2 ring-[#070d18]" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-white text-lg leading-tight tracking-wider group-hover:text-cyan-300 transition-colors font-mono">
                  {COMPANY_INFO.name}
                </span>
                <span className="px-1.5 py-0.2 rounded text-[10px] font-mono font-bold bg-cyan-500/10 text-cyan-400 border border-cyan-400/30">
                  LABS
                </span>
              </div>
              <span className="text-[10px] font-medium text-slate-400 tracking-wider uppercase">
                Applied Technology Systems
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1" aria-label="Main Navigation">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.label}
                  id={`nav-link-${item.label.toLowerCase()}`}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'text-cyan-300 bg-blue-950/80 border border-cyan-500/30 font-semibold shadow-xs'
                      : 'text-slate-300 hover:text-white hover:bg-blue-950/50'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Action CTA & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <button
              id="header-contact-btn"
              onClick={() => {
                const contactEl = document.getElementById('contact');
                if (contactEl) {
                  contactEl.scrollIntoView({ behavior: 'smooth' });
                } else {
                  onOpenContact();
                }
              }}
              className="hidden sm:inline-flex items-center gap-2 px-4.5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white text-sm font-semibold shadow-md shadow-blue-900/30 hover:shadow-cyan-500/20 transition-all duration-200 active:scale-98 cursor-pointer ring-1 ring-cyan-400/30"
            >
              <span>Contact Us</span>
              <ArrowUpRight className="w-4 h-4 text-cyan-100" />
            </button>

            {/* Mobile Hamburger Button */}
            <button
              id="mobile-menu-toggle"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden inline-flex items-center justify-center p-2.5 rounded-lg text-slate-300 hover:text-white hover:bg-blue-950 transition-colors focus:outline-hidden focus:ring-2 focus:ring-cyan-500"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-menu"
          className="lg:hidden border-t border-blue-900/50 bg-[#0a1326]/98 backdrop-blur-xl shadow-2xl transition-all duration-300"
        >
          <div className="max-w-7xl mx-auto px-4 pt-3 pb-6 space-y-1.5">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.label}
                  id={`mobile-nav-${item.label.toLowerCase()}`}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                    isActive
                      ? 'bg-blue-950 text-cyan-300 border border-blue-800/60 font-semibold'
                      : 'text-slate-300 hover:bg-blue-950/60 hover:text-white'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
            <div className="pt-3 border-t border-blue-900/40 mt-2">
              <button
                id="mobile-nav-cta"
                onClick={() => {
                  setMobileMenuOpen(false);
                  const contactEl = document.getElementById('contact');
                  if (contactEl) {
                    contactEl.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold shadow-sm transition-colors cursor-pointer"
              >
                <span>Contact Us</span>
                <ArrowUpRight className="w-4 h-4 text-cyan-100" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
