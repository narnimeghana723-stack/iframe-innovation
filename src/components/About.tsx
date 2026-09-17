import React from 'react';
import { motion } from 'motion/react';
import {
  Compass,
  Target,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Building2,
  FlaskConical,
  Award
} from 'lucide-react';
import { ABOUT_CARDS, COMPANY_INFO } from '../data/companyData';

interface AboutProps {
  onLearnMoreModal: () => void;
  onExploreProjects: () => void;
}

const iconMap: Record<string, React.ReactNode> = {
  Compass: <Compass className="w-6 h-6 text-cyan-400" />,
  Target: <Target className="w-6 h-6 text-blue-400" />,
  ShieldCheck: <ShieldCheck className="w-6 h-6 text-indigo-400" />,
  Sparkles: <Sparkles className="w-6 h-6 text-teal-400" />,
};

export const About: React.FC<AboutProps> = ({ onLearnMoreModal, onExploreProjects }) => {
  return (
    <section id="about" className="py-24 bg-[#091122] relative text-white border-t border-b border-blue-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-950/80 border border-cyan-500/30 text-cyan-300 text-xs font-semibold tracking-wider uppercase mb-3 shadow-xs">
            <span>ABOUT {COMPANY_INFO.name}</span>
          </div>
          <h2
            id="about-heading"
            className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight"
          >
            Turning Ideas Into Real-World Impact
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            We are an applied research and technology engineering organization established to tackle complex
            computational, physical, and infrastructural challenges for forward-looking enterprises and research partners.
          </p>
        </div>

        {/* Two-Column Core Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Comprehensive Company Narrative */}
          <div className="lg:col-span-6 flex flex-col space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white tracking-tight">
                Engineering the Intersection of Research & Industrial Execution
              </h3>
              <p className="leading-relaxed text-slate-300">
                Founded in 2021 by systems engineers and machine learning researchers,{' '}
                <strong className="text-white font-semibold">{COMPANY_INFO.name}</strong> operates as a bridge
                between theoretical frontier breakthroughs and mission-critical production systems.
              </p>
              <p className="leading-relaxed text-slate-300">
                Many breakthrough discoveries remain trapped in academic papers or fragile proof-of-concepts. We exist to
                eliminate that barrier: we design, develop, stress-test, and deploy high-throughput software architectures,
                autonomous edge sensor networks, and reliable AI systems engineered for zero-failure operating environments.
              </p>
            </div>

            {/* Value Propositions / Key Deliverables */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#0d172e] border border-blue-900/50">
                <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-white">Who We Serve</h4>
                  <p className="text-xs text-slate-400 mt-0.5">Enterprises, research institutes, startups & universities.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#0d172e] border border-blue-900/50">
                <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-white">What We Solve</h4>
                  <p className="text-xs text-slate-400 mt-0.5">Latency, scale, hardware telemetry & inference bottlenecks.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#0d172e] border border-blue-900/50">
                <CheckCircle2 className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-white">Our Standard</h4>
                  <p className="text-xs text-slate-400 mt-0.5">Deterministic precision, mathematical rigor & reliability.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#0d172e] border border-blue-900/50">
                <CheckCircle2 className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-white">Why We Exist</h4>
                  <p className="text-xs text-slate-400 mt-0.5">To accelerate sustainable technology that benefits society.</p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                id="about-learn-more-btn"
                onClick={onLearnMoreModal}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-semibold text-sm transition-all duration-200 shadow-md shadow-blue-950/40 cursor-pointer ring-1 ring-cyan-400/30"
              >
                <span>Learn More About Our Methodology</span>
                <ArrowRight className="w-4 h-4 text-cyan-100" />
              </button>

              <button
                id="about-view-projects-btn"
                onClick={onExploreProjects}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#0b162f] hover:bg-[#101f42] text-slate-200 hover:text-white font-semibold text-sm border border-blue-800/80 transition-colors cursor-pointer"
              >
                <span>View Delivered Projects</span>
              </button>
            </div>
          </div>

          {/* Right Column: 4 Feature Cards (Vision, Mission, Values, Impact) */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {ABOUT_CARDS.map((card) => (
              <div
                key={card.id}
                id={`about-card-${card.id}`}
                className="p-6 rounded-2xl bg-[#0d1833] border border-blue-900/50 shadow-md hover:shadow-xl hover:border-cyan-500/50 hover:bg-[#111f42] transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-blue-950/80 text-cyan-400 border border-blue-800 flex items-center justify-center mb-4 group-hover:scale-105 group-hover:border-cyan-400/50 transition-all duration-200">
                    {iconMap[card.iconName] || <Sparkles className="w-6 h-6 text-cyan-400" />}
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {card.title}
                  </h4>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {card.description}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-blue-900/40 flex items-center text-xs font-semibold text-cyan-400 group-hover:translate-x-1 transition-transform">
                  <span>Explore principle</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Supporting Technology / Facility Banner */}
        <div className="mt-16 rounded-2xl overflow-hidden border border-blue-900/70 bg-[#070e1e] text-white relative shadow-2xl ring-1 ring-cyan-500/20">
          <div className="grid grid-cols-1 md:grid-cols-12 items-center">
            <div className="md:col-span-7 p-8 sm:p-10 z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 text-cyan-300 text-xs font-mono font-medium mb-4 border border-cyan-500/30">
                <FlaskConical className="w-3.5 h-3.5" />
                <span>STATE-OF-THE-ART APPLIED RESEARCH FACILITY</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-3">
                Dedicated Prototyping & Stress-Testing Testbeds
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl mb-6">
                From micro-electronic sensor attestation chambers to high-density GPU computing clusters, our facility is
                custom-built to simulate extreme physical and network environments prior to production rollout.
              </p>
              <div className="flex flex-wrap gap-6 text-sm">
                <div>
                  <span className="block text-xl font-bold text-cyan-300 font-mono">14,000 sq ft</span>
                  <span className="text-xs text-slate-400">Laboratory footprint</span>
                </div>
                <div>
                  <span className="block text-xl font-bold text-cyan-300 font-mono">ISO 9001</span>
                  <span className="text-xs text-slate-400">Quality Certified</span>
                </div>
                <div>
                  <span className="block text-xl font-bold text-cyan-300 font-mono">100% Green</span>
                  <span className="text-xs text-slate-400">Solar & Clean Powered</span>
                </div>
              </div>
            </div>
            <div className="md:col-span-5 h-64 md:h-full relative min-h-[260px]">
              <img
                src="https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=800&q=80"
                alt="Engineering Laboratory Workspace"
                className="w-full h-full object-cover opacity-75"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#070e1e] via-transparent to-transparent md:block hidden" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
