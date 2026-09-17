import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles, Activity, ShieldCheck, Cpu, Database, ChevronRight } from 'lucide-react';
import { HERO_STATS } from '../data/companyData';
import { BeamsBackground } from '@/components/ui/beams-background';

interface HeroProps {
  onExploreWork: () => void;
  onLearnMore: () => void;
  onOpenBeamsDemo?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreWork, onLearnMore, onOpenBeamsDemo }) => {
  return (
    <section
      id="home"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-[#070d18] via-[#091226] to-[#070d18] text-white"
    >
      {/* Background Animated Beams & Decorative Tech Grids */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <BeamsBackground
          className="absolute inset-0 min-h-full h-full bg-transparent opacity-35"
          intensity="subtle"
        />
        <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[1100px] h-[550px] bg-gradient-to-tr from-blue-600/15 via-cyan-500/15 to-indigo-600/10 blur-3xl rounded-full" />
        <div className="absolute -top-24 right-0 w-96 h-96 bg-cyan-600/10 blur-3xl rounded-full" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-600/10 blur-3xl rounded-full" />
        {/* Subtle grid lines */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: `radial-gradient(#38bdf8 1px, transparent 1px)`,
            backgroundSize: '36px 36px',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            {/* Eyebrow & Component Demo Trigger */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <div
                id="hero-eyebrow"
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/80 border border-cyan-500/40 text-cyan-300 text-xs font-semibold tracking-wider uppercase shadow-sm shadow-cyan-950/50"
              >
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                <span>INNOVATION • TECHNOLOGY • IMPACT</span>
              </div>

              {onOpenBeamsDemo && (
                <button
                  onClick={onOpenBeamsDemo}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-900/60 hover:bg-blue-800 text-cyan-300 text-xs font-mono font-medium border border-cyan-400/40 transition-all cursor-pointer shadow-sm hover:scale-105 active:scale-95"
                  title="Interactive /components/ui/beams-background Demo"
                >
                  <Sparkles className="w-3.5 h-3.5 text-cyan-300 animate-pulse" />
                  <span>Interactive Beams Demo</span>
                </button>
              )}
            </div>

            {/* Main Heading */}
            <h1
              id="hero-heading"
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12] mb-6"
            >
              Building Ideas That{' '}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-300 bg-clip-text text-transparent">
                Shape Tomorrow
              </span>
            </h1>

            {/* Supporting Paragraph */}
            <p
              id="hero-subheading"
              className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl mb-9"
            >
              At <strong className="text-white font-semibold">IFRAME</strong>, we engineer cutting-edge technology solutions, distributed software platforms, and
              intelligent automation systems that bridge exploratory research and real-world industrial impact.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-12">
              <button
                id="hero-primary-cta"
                onClick={onExploreWork}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-semibold text-base shadow-lg shadow-blue-950/50 hover:shadow-cyan-500/25 transition-all duration-200 active:scale-98 cursor-pointer ring-1 ring-cyan-400/40"
              >
                <span>Explore Our Work</span>
                <ArrowRight className="w-5 h-5 text-cyan-100" />
              </button>

              <button
                id="hero-secondary-cta"
                onClick={onLearnMore}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#0b162f] hover:bg-[#101e3e] text-slate-200 hover:text-white font-semibold text-base border border-blue-800/80 hover:border-cyan-400/50 shadow-sm transition-all duration-200 active:scale-98 cursor-pointer"
              >
                <span>Learn More</span>
                <ChevronRight className="w-4 h-4 text-cyan-400" />
              </button>
            </div>

            {/* Statistics Bar */}
            <div
              id="hero-stats-container"
              className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-blue-900/50"
            >
              {HERO_STATS.map((stat, idx) => (
                <div key={idx} className="flex flex-col">
                  <span className="text-2xl sm:text-3xl font-bold text-white tracking-tight font-mono">
                    {stat.value}
                  </span>
                  <span className="text-xs sm:text-sm font-medium text-slate-400 mt-0.5">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Visual Composition with Floating Cards */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
            className="lg:col-span-5 relative flex items-center justify-center"
          >
            {/* Visual Frame Container */}
            <div className="relative w-full max-w-lg lg:max-w-none">
              {/* Outer decorative glow ring */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-blue-600 via-cyan-500 to-indigo-600 rounded-3xl opacity-25 blur-xl" />

              {/* Main Image Card */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-blue-800/80 bg-[#0a1224] aspect-[4/3] sm:aspect-[16/11] ring-1 ring-cyan-500/20">
                <img
                  src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80"
                  alt="IFRAME Technology Lab and Robotics Prototyping"
                  className="w-full h-full object-cover object-center opacity-85 hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Tech overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#070d18] via-[#070d18]/40 to-transparent pointer-events-none" />

                {/* Bottom Overlay Label */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs">
                  <div className="flex items-center gap-2 bg-[#09142c]/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-cyan-500/30 shadow-md">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                    <span className="font-mono text-[11px] font-medium tracking-wide text-cyan-300">
                      LIVE SYSTEM TELEMETRY
                    </span>
                  </div>
                  <span className="font-mono text-[11px] text-slate-300">SYSTEMS ONLINE</span>
                </div>
              </div>

              {/* Floating UI Card 1: Top Right */}
              <motion.div
                initial={{ opacity: 0, x: 20, y: -10 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="absolute -top-6 -right-3 sm:-right-6 bg-[#0b1630]/95 backdrop-blur-md p-3.5 rounded-xl shadow-2xl border border-blue-800/80 flex items-center gap-3 ring-1 ring-cyan-500/20"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-950 text-cyan-400 flex items-center justify-center shrink-0 border border-blue-800">
                  <Activity className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-semibold text-white">Neural Pipeline</span>
                    <span className="px-1.5 py-0.5 rounded text-[10px] font-medium bg-emerald-950/80 text-emerald-300 border border-emerald-500/30">
                      Active
                    </span>
                  </div>
                  <p className="text-[11px] font-medium text-slate-400">99.4% Diagnostic Precision</p>
                </div>
              </motion.div>

              {/* Floating UI Card 2: Bottom Left */}
              <motion.div
                initial={{ opacity: 0, x: -20, y: 15 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="absolute -bottom-6 -left-3 sm:-left-6 bg-[#0b1630]/95 backdrop-blur-md p-3.5 rounded-xl shadow-2xl border border-blue-800/80 flex items-center gap-3 ring-1 ring-cyan-500/20"
              >
                <div className="w-10 h-10 rounded-lg bg-cyan-950 text-cyan-300 flex items-center justify-center shrink-0 border border-cyan-800">
                  <Cpu className="w-5 h-5 text-cyan-300" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-semibold text-white">Autonomous Edge</span>
                    <span className="text-[10px] text-cyan-400 font-mono">1.2ms</span>
                  </div>
                  <p className="text-[11px] font-medium text-slate-400">4,200+ Synchronized Nodes</p>
                </div>
              </motion.div>

              {/* Floating Badge 3: Center Left */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="hidden sm:flex absolute top-1/2 -left-8 -translate-y-1/2 bg-[#081024]/95 text-white backdrop-blur-md px-3.5 py-2 rounded-xl shadow-2xl border border-cyan-500/40 items-center gap-2"
              >
                <ShieldCheck className="w-4 h-4 text-cyan-400" />
                <span className="text-xs font-medium text-slate-200 font-mono">Zero-Downtime Architecture</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
