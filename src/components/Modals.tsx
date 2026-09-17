import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  CheckCircle2,
  ExternalLink,
  Shield,
  FileText,
  MapPin,
  Cpu,
  Layers,
  ArrowRight,
  Briefcase,
  Mail,
  Linkedin,
  Github,
  Sparkles,
  Sliders
} from 'lucide-react';
import { BeamsBackground } from '@/components/ui/beams-background';
import { Project, InnovationDomain, TeamMember, GalleryItem } from '../types';
import { COMPANY_INFO } from '../data/companyData';

interface ModalsProps {
  selectedProject: Project | null;
  onCloseProject: () => void;

  selectedDomain: InnovationDomain | null;
  onCloseDomain: () => void;

  selectedMember: TeamMember | null;
  onCloseMember: () => void;

  selectedGalleryItem: GalleryItem | null;
  onCloseGallery: () => void;

  legalModalType: 'privacy' | 'terms' | 'careers' | null;
  onCloseLegal: () => void;

  showBeamsDemo?: boolean;
  onCloseBeamsDemo?: () => void;

  onOpenContactWithSubject?: (subject: string) => void;
}

export const Modals: React.FC<ModalsProps> = ({
  selectedProject,
  onCloseProject,
  selectedDomain,
  onCloseDomain,
  selectedMember,
  onCloseMember,
  selectedGalleryItem,
  onCloseGallery,
  legalModalType,
  onCloseLegal,
  showBeamsDemo,
  onCloseBeamsDemo,
  onOpenContactWithSubject,
}) => {
  const [beamsIntensity, setBeamsIntensity] = React.useState<'subtle' | 'medium' | 'strong'>('strong');
  return (
    <AnimatePresence>
      {/* 1. PROJECT SPECIFICATION MODAL */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            className="relative w-full max-w-3xl bg-[#0e1935] text-white rounded-2xl shadow-2xl border border-blue-900/70 overflow-hidden my-8"
          >
            {/* Header Image */}
            <div className="relative h-64 sm:h-72 w-full bg-slate-900">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0e1935] via-[#0e1935]/50 to-transparent" />
              <button
                onClick={onCloseProject}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-blue-950/80 hover:bg-blue-900 text-white flex items-center justify-center transition-colors cursor-pointer border border-cyan-400/40"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="absolute bottom-5 left-6 right-6 text-white">
                <span className="px-2.5 py-1 rounded text-xs font-mono font-bold bg-blue-600/90 text-white mb-2 inline-block shadow-sm">
                  {selectedProject.category} DOMAIN
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">
                  {selectedProject.title}
                </h3>
                <p className="text-xs sm:text-sm text-cyan-300 font-mono mt-1">
                  Partner / Scope: {selectedProject.clientOrDomain}
                </p>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 space-y-6 max-h-[60vh] overflow-y-auto">
              <div>
                <h4 className="text-xs font-mono font-semibold text-cyan-400 uppercase tracking-wider mb-2">
                  System Overview
                </h4>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  {selectedProject.description}
                </p>
              </div>

              {/* Performance Metrics */}
              <div>
                <h4 className="text-xs font-mono font-semibold text-cyan-400 uppercase tracking-wider mb-3">
                  Verified Performance Benchmarks
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {selectedProject.metrics.map((metric, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-[#081125] border border-blue-900/60 flex flex-col"
                    >
                      <span className="text-xs text-slate-400">{metric.label}</span>
                      <span className="text-xl font-bold text-white font-mono mt-1">
                        {metric.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Deliverables */}
              <div>
                <h4 className="text-xs font-mono font-semibold text-cyan-400 uppercase tracking-wider mb-3">
                  Architecture & Engineering Deliverables
                </h4>
                <ul className="space-y-2">
                  {selectedProject.deliverables.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div>
                <h4 className="text-xs font-mono font-semibold text-cyan-400 uppercase tracking-wider mb-2">
                  Production Technology Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-lg text-xs font-mono font-medium bg-[#081125] text-cyan-300 border border-blue-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-6 bg-[#0d1833] border-t border-blue-900/60 flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs text-slate-400">
                Interested in deploying an analogous architecture?
              </span>
              <div className="flex items-center gap-3">
                <button
                  onClick={onCloseProject}
                  className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-300 hover:text-white cursor-pointer"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    onCloseProject();
                    if (onOpenContactWithSubject) {
                      onOpenContactWithSubject(`Inquiry: ${selectedProject.title}`);
                    }
                  }}
                  className="px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white text-xs font-semibold shadow-md transition-colors cursor-pointer ring-1 ring-cyan-400/30"
                >
                  Inquire About This Architecture
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* 2. INNOVATION DOMAIN DETAIL MODAL */}
      {selectedDomain && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            className="relative w-full max-w-2xl bg-[#0e1935] text-white rounded-2xl shadow-2xl border border-blue-900/70 overflow-hidden my-8"
          >
            <div className="p-6 sm:p-8 border-b border-blue-900/60 flex items-start justify-between bg-[#0d1833]">
              <div>
                <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest">
                  TECHNOLOGY DOMAIN
                </span>
                <h3 className="text-2xl font-bold text-white mt-1">
                  {selectedDomain.title}
                </h3>
                <p className="text-sm font-semibold text-cyan-300 mt-0.5">
                  {selectedDomain.tagline}
                </p>
              </div>
              <button
                onClick={onCloseDomain}
                className="w-8 h-8 rounded-lg bg-blue-950 hover:bg-blue-900 text-slate-300 flex items-center justify-center transition-colors cursor-pointer border border-blue-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 sm:p-8 space-y-6 max-h-[60vh] overflow-y-auto">
              <div>
                <h4 className="text-xs font-mono font-semibold text-cyan-400 uppercase tracking-wider mb-2">
                  Applied Discipline Overview
                </h4>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {selectedDomain.description}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-mono font-semibold text-cyan-400 uppercase tracking-wider mb-3">
                  Core Engineering Capabilities
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedDomain.keyCapabilities.map((cap, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-[#081125] border border-blue-900/50 flex items-start gap-2.5"
                    >
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span className="text-xs font-medium text-slate-200">{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-mono font-semibold text-cyan-400 uppercase tracking-wider mb-2">
                  Primary Frameworks & Technologies
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedDomain.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-md text-xs font-mono font-medium bg-[#081125] text-cyan-300 border border-blue-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-5 bg-[#0d1833] border-t border-blue-900/60 flex justify-end gap-3">
              <button
                onClick={onCloseDomain}
                className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-300 hover:text-white cursor-pointer"
              >
                Close
              </button>
              <button
                onClick={() => {
                  onCloseDomain();
                  if (onOpenContactWithSubject) {
                    onOpenContactWithSubject(`Domain Inquiry: ${selectedDomain.title}`);
                  }
                }}
                className="px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white text-xs font-semibold shadow-md transition-colors cursor-pointer ring-1 ring-cyan-400/30"
              >
                Collaborate in this Field
              </button>
            </div>
          </motion.div>
        </div>
      )}

      {/* 3. TEAM MEMBER BIO MODAL */}
      {selectedMember && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            className="relative w-full max-w-lg bg-[#0e1935] text-white rounded-2xl shadow-2xl border border-blue-900/70 overflow-hidden my-8"
          >
            <div className="p-6 sm:p-8 flex items-start gap-5 border-b border-blue-900/60 bg-[#0d1833]">
              <img
                src={selectedMember.avatar}
                alt={selectedMember.name}
                className="w-20 h-20 rounded-2xl object-cover ring-2 ring-cyan-400/40"
              />
              <div className="flex-1">
                <span className="text-xs font-mono font-bold text-cyan-400">
                  {selectedMember.department}
                </span>
                <h3 className="text-xl font-bold text-white mt-0.5">
                  {selectedMember.name}
                </h3>
                <p className="text-sm font-semibold text-cyan-300 font-mono">{selectedMember.role}</p>
              </div>
              <button
                onClick={onCloseMember}
                className="w-8 h-8 rounded-lg bg-blue-950 hover:bg-blue-900 text-slate-300 flex items-center justify-center transition-colors cursor-pointer border border-blue-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 sm:p-8 space-y-4">
              <div>
                <h4 className="text-xs font-mono font-semibold text-cyan-400 uppercase tracking-wider mb-2">
                  Professional Biography
                </h4>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {selectedMember.bio}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-mono font-semibold text-cyan-400 uppercase tracking-wider mb-2">
                  Direct Channels
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedMember.socials.linkedin && (
                    <a
                      href={selectedMember.socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-[#081125] hover:bg-blue-900 text-slate-300 hover:text-cyan-300 border border-blue-800"
                    >
                      <Linkedin className="w-3.5 h-3.5" />
                      <span>LinkedIn</span>
                    </a>
                  )}
                  {selectedMember.socials.github && (
                    <a
                      href={selectedMember.socials.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-[#081125] hover:bg-slate-800 text-slate-300 hover:text-white border border-blue-800"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>GitHub</span>
                    </a>
                  )}
                  {selectedMember.socials.email && (
                    <a
                      href={`mailto:${selectedMember.socials.email}`}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-[#081125] hover:bg-blue-950 text-slate-300 hover:text-cyan-300 border border-blue-800"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      <span>Corporate Email</span>
                    </a>
                  )}
                </div>
              </div>
            </div>

            <div className="p-4 bg-[#0d1833] border-t border-blue-900/60 flex justify-end">
              <button
                onClick={onCloseMember}
                className="px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white text-xs font-semibold transition-colors cursor-pointer"
              >
                Close Profile
              </button>
            </div>
          </motion.div>
        </div>
      )}

      {/* 4. GALLERY LIGHTBOX MODAL */}
      {selectedGalleryItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="relative w-full max-w-4xl bg-[#0e1935] rounded-2xl overflow-hidden shadow-2xl border border-blue-900/70 flex flex-col"
          >
            <button
              onClick={onCloseGallery}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-blue-950/80 hover:bg-blue-900 text-white flex items-center justify-center border border-cyan-400/40 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative aspect-[16/10] w-full bg-black">
              <img
                src={selectedGalleryItem.imageUrl}
                alt={selectedGalleryItem.title}
                className="w-full h-full object-contain"
              />
            </div>

            <div className="p-6 bg-[#0d1833] text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-blue-900/60">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="px-2.5 py-0.5 rounded text-[10px] font-mono bg-blue-600/60 text-cyan-300 border border-cyan-500/30">
                    {selectedGalleryItem.category}
                  </span>
                  <span className="text-xs text-cyan-400 font-mono flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                    {selectedGalleryItem.location}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white">{selectedGalleryItem.title}</h3>
                <p className="text-xs text-slate-300 mt-1">{selectedGalleryItem.description}</p>
              </div>
              <button
                onClick={onCloseGallery}
                className="px-4 py-2 rounded-xl bg-blue-950 hover:bg-blue-900 text-white text-xs font-semibold shrink-0 cursor-pointer border border-blue-800"
              >
                Close Preview
              </button>
            </div>
          </motion.div>
        </div>
      )}

      {/* 5. LEGAL & CAREERS MODAL */}
      {legalModalType && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            className="relative w-full max-w-2xl bg-[#0e1935] text-white rounded-2xl shadow-2xl border border-blue-900/70 overflow-hidden my-8"
          >
            <div className="p-6 border-b border-blue-900/60 flex items-center justify-between bg-[#0d1833]">
              <div className="flex items-center gap-2.5">
                {legalModalType === 'privacy' && <Shield className="w-5 h-5 text-cyan-400" />}
                {legalModalType === 'terms' && <FileText className="w-5 h-5 text-cyan-400" />}
                {legalModalType === 'careers' && <Briefcase className="w-5 h-5 text-cyan-400" />}
                <h3 className="text-xl font-bold text-white">
                  {legalModalType === 'privacy' && 'Privacy & Data Protection Policy'}
                  {legalModalType === 'terms' && 'Institutional Terms of Service'}
                  {legalModalType === 'careers' && 'Careers, Research Chairs & Fellowships'}
                </h3>
              </div>
              <button
                onClick={onCloseLegal}
                className="w-8 h-8 rounded-lg bg-blue-950 hover:bg-blue-900 text-slate-300 flex items-center justify-center transition-colors cursor-pointer border border-blue-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 sm:p-8 space-y-4 text-sm text-slate-300 leading-relaxed max-h-[60vh] overflow-y-auto">
              {legalModalType === 'privacy' && (
                <>
                  <p>
                    At {COMPANY_INFO.name}, we hold enterprise data confidentiality and scientific research
                    integrity as primary institutional tenets.
                  </p>
                  <h4 className="font-bold text-white mt-3">1. Information We Collect</h4>
                  <p>
                    We collect only communication details and technical specifications directly submitted through our
                    inquiry portals. We do not sell, rent, or lease private client telemetry or project data to third-party brokers.
                  </p>
                  <h4 className="font-bold text-white mt-3">2. Cryptographic Security Standards</h4>
                  <p>
                    All prototype repositories and test telemetry are encrypted at rest (AES-256) and in transit (TLS 1.3).
                    NDA safeguards govern all partner discussions.
                  </p>
                  <h4 className="font-bold text-white mt-3">3. Contact</h4>
                  <p>For data inquiries, contact {COMPANY_INFO.email}.</p>
                </>
              )}

              {legalModalType === 'terms' && (
                <>
                  <p>
                    Welcome to {COMPANY_INFO.name}. By interacting with our technical documentation, research papers,
                    or platform demos, you agree to these terms.
                  </p>
                  <h4 className="font-bold text-white mt-3">1. Intellectual Property</h4>
                  <p>
                    Patents, algorithms, circuit blueprints, and software frameworks authored by {COMPANY_INFO.name} remain
                    exclusive property unless assigned via written commercial agreement.
                  </p>
                  <h4 className="font-bold text-white mt-3">2. Permitted Use</h4>
                  <p>
                    You may cite published conference papers and open-source benchmarks with appropriate scientific attribution.
                  </p>
                  <h4 className="font-bold text-white mt-3">3. Governing Law</h4>
                  <p>These terms are governed under California and federal United States jurisdiction.</p>
                </>
              )}

              {legalModalType === 'careers' && (
                <>
                  <p>
                    We are perpetually on the lookout for bold thinkers, low-level systems engineers, and applied research scientists.
                  </p>
                  <div className="space-y-3 mt-4">
                    <div className="p-3.5 rounded-xl bg-[#081125] border border-blue-900/60">
                      <span className="text-xs font-mono font-bold text-cyan-400 block">FULL-TIME • SILICON VALLEY / HYBRID</span>
                      <h5 className="font-bold text-white">Distributed Systems Engineer (Rust / Go)</h5>
                      <p className="text-xs text-slate-300 mt-1">High-throughput microservices, actor frameworks, and sub-10ms event buses.</p>
                    </div>
                    <div className="p-3.5 rounded-xl bg-[#081125] border border-blue-900/60">
                      <span className="text-xs font-mono font-bold text-cyan-400 block">FULL-TIME • RESEARCH LAB</span>
                      <h5 className="font-bold text-white">Senior AI Research Scientist (Transformers & Edge Inference)</h5>
                      <p className="text-xs text-slate-300 mt-1">Model compression, distillation, and real-time vision algorithms.</p>
                    </div>
                    <div className="p-3.5 rounded-xl bg-[#081125] border border-blue-900/60">
                      <span className="text-xs font-mono font-bold text-cyan-400 block">FELLOWSHIP • 6-MONTH CO-OP</span>
                      <h5 className="font-bold text-white">Graduate Research Fellow (Cyber-Physical & Robotics)</h5>
                      <p className="text-xs text-slate-300 mt-1">Collaborative prototyping with PhD mentors on autonomous mobile robots.</p>
                    </div>
                  </div>
                  <p className="mt-4 text-xs text-slate-400">
                    To apply, please email your CV, GitHub handle, or publication list to{' '}
                    <a href={`mailto:${COMPANY_INFO.email}`} className="text-cyan-400 font-semibold underline">
                      {COMPANY_INFO.email}
                    </a>.
                  </p>
                </>
              )}
            </div>

            <div className="p-4 bg-[#0d1833] border-t border-blue-900/60 flex justify-end">
              <button
                onClick={onCloseLegal}
                className="px-5 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white text-xs font-semibold transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </motion.div>
        </div>
      )}

      {/* 6. BEAMS BACKGROUND INTERACTIVE DEMO VIEWER */}
      {showBeamsDemo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-0 bg-slate-950/90 backdrop-blur-md overflow-hidden">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="relative w-full h-full flex flex-col bg-neutral-950 overflow-hidden"
          >
            {/* Top Toolbar */}
            <div className="relative z-20 flex flex-wrap items-center justify-between gap-4 px-6 py-4 bg-[#070d18]/80 backdrop-blur-md border-b border-blue-900/60 text-white">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-blue-600/30 border border-cyan-400/40 flex items-center justify-center text-cyan-300">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white tracking-tight flex items-center gap-2">
                    <span>Beams Background Component</span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-blue-500/20 text-cyan-300 border border-cyan-400/30">
                      /components/ui/beams-background.tsx
                    </span>
                  </h3>
                  <p className="text-xs text-slate-400">
                    Interactive canvas gradient with dynamic angle, pulsing frequency, and motion.
                  </p>
                </div>
              </div>

              {/* Intensity Switcher & Actions */}
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1 bg-[#0a1428] p-1 rounded-xl border border-blue-900/60">
                  <span className="text-[11px] font-mono text-slate-400 px-2 flex items-center gap-1">
                    <Sliders className="w-3 h-3 text-cyan-400" />
                    <span>Intensity:</span>
                  </span>
                  {(['subtle', 'medium', 'strong'] as const).map((level) => (
                    <button
                      key={level}
                      onClick={() => setBeamsIntensity(level)}
                      className={`px-3 py-1 rounded-lg text-xs font-mono capitalize transition-colors cursor-pointer ${
                        beamsIntensity === level
                          ? 'bg-blue-600 text-white font-bold shadow-xs'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      {level}
                    </button>
                  ))}
                </div>

                <button
                  onClick={onCloseBeamsDemo}
                  className="w-9 h-9 rounded-xl bg-blue-950 hover:bg-blue-900 text-slate-300 hover:text-white flex items-center justify-center border border-blue-800 transition-colors cursor-pointer"
                  aria-label="Close demo"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Beams Interactive Background Area */}
            <div className="relative flex-1 w-full h-full overflow-hidden">
              <BeamsBackground intensity={beamsIntensity} />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
