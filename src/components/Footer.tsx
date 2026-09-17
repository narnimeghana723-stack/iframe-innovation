import React from 'react';
import {
  Linkedin,
  Github,
  Twitter,
  Youtube,
  Instagram,
  Mail,
  Phone,
  MapPin,
  ArrowUp,
  Shield,
  FileText
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface FooterProps {
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
  onOpenCareers: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenPrivacy,
  onOpenTerms,
  onOpenCareers,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="bg-[#050913] text-white pt-20 pb-12 border-t border-blue-950/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-blue-900/50">
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-cyan-600 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-blue-900/40 ring-1 ring-cyan-400/40">
                <span className="font-bold tracking-tight text-lg font-mono text-cyan-100">IF</span>
              </div>
              <span className="font-extrabold text-xl tracking-tight text-white">
                {COMPANY_INFO.name}
              </span>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              An innovation-focused technology company bridging foundational computational research,
              distributed software architectures, and autonomous industrial systems.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={COMPANY_INFO.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-[#091122] hover:bg-blue-600 text-slate-400 hover:text-white flex items-center justify-center transition-colors border border-blue-900/60"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={COMPANY_INFO.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-[#091122] hover:bg-slate-700 text-slate-400 hover:text-white flex items-center justify-center transition-colors border border-blue-900/60"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={COMPANY_INFO.socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-[#091122] hover:bg-cyan-600 text-slate-400 hover:text-white flex items-center justify-center transition-colors border border-blue-900/60"
                aria-label="Twitter / X"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href={COMPANY_INFO.socialLinks.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-[#091122] hover:bg-red-600 text-slate-400 hover:text-white flex items-center justify-center transition-colors border border-blue-900/60"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href={COMPANY_INFO.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-[#091122] hover:bg-pink-600 text-slate-400 hover:text-white flex items-center justify-center transition-colors border border-blue-900/60"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-cyan-400 mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#home" className="text-slate-400 hover:text-cyan-300 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-slate-400 hover:text-cyan-300 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#innovation" className="text-slate-400 hover:text-cyan-300 transition-colors">
                  Innovation
                </a>
              </li>
              <li>
                <a href="#projects" className="text-slate-400 hover:text-cyan-300 transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#team" className="text-slate-400 hover:text-cyan-300 transition-colors">
                  Team
                </a>
              </li>
              <li>
                <a href="#contact" className="text-slate-400 hover:text-cyan-300 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-cyan-400 mb-4">
              Company & Research
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#achievements" className="text-slate-400 hover:text-cyan-300 transition-colors">
                  Achievements & Milestones
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenCareers}
                  className="text-slate-400 hover:text-cyan-300 transition-colors text-left cursor-pointer flex items-center gap-1.5"
                >
                  <span>Careers & Fellowships</span>
                  <span className="px-1.5 py-0.2 rounded text-[10px] bg-blue-500/20 text-cyan-300 font-mono border border-cyan-500/30">
                    Hiring
                  </span>
                </button>
              </li>
              <li>
                <a href="#testimonials" className="text-slate-400 hover:text-cyan-300 transition-colors">
                  Partners & Testimonials
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-slate-400 hover:text-cyan-300 transition-colors">
                  Inside Our Journey
                </a>
              </li>
              <li>
                <a href="#why-choose-us" className="text-slate-400 hover:text-cyan-300 transition-colors">
                  Why Work With Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="lg:col-span-3 space-y-3.5">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-cyan-400 mb-4">
              Headquarters
            </h4>
            <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-400">
              <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
              <span>{COMPANY_INFO.address}, {COMPANY_INFO.cityStateZip}</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-400">
              <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
              <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-cyan-300 transition-colors">
                {COMPANY_INFO.email}
              </a>
            </div>
            <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-400">
              <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
              <a href={`tel:${COMPANY_INFO.phone}`} className="hover:text-cyan-300 transition-colors font-mono">
                {COMPANY_INFO.phone}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© 2026 {COMPANY_INFO.name}. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <button
              onClick={onOpenPrivacy}
              className="hover:text-cyan-300 transition-colors flex items-center gap-1 cursor-pointer"
            >
              <Shield className="w-3.5 h-3.5 text-cyan-400" />
              <span>Privacy Policy</span>
            </button>
            <button
              onClick={onOpenTerms}
              className="hover:text-cyan-300 transition-colors flex items-center gap-1 cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5 text-cyan-400" />
              <span>Terms of Service</span>
            </button>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-[#091122] hover:bg-blue-950 text-slate-400 hover:text-cyan-300 transition-colors cursor-pointer border border-blue-900/60"
              title="Scroll to Top"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
