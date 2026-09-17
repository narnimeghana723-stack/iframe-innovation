import React from 'react';
import { motion } from 'motion/react';
import {
  BrainCircuit,
  Cpu,
  CodeXml,
  CloudCog,
  Microscope,
  Bot,
  ArrowRight,
  CheckCircle,
  ExternalLink
} from 'lucide-react';
import { INNOVATION_DOMAINS } from '../data/companyData';
import { InnovationDomain } from '../types';

interface InnovationProps {
  onSelectDomain: (domain: InnovationDomain) => void;
}

const iconComponentMap: Record<string, React.ReactNode> = {
  BrainCircuit: <BrainCircuit className="w-6 h-6 text-cyan-400" />,
  Cpu: <Cpu className="w-6 h-6 text-blue-400" />,
  CodeXml: <CodeXml className="w-6 h-6 text-indigo-400" />,
  CloudCog: <CloudCog className="w-6 h-6 text-sky-400" />,
  Microscope: <Microscope className="w-6 h-6 text-teal-400" />,
  Bot: <Bot className="w-6 h-6 text-cyan-300" />,
};

export const Innovation: React.FC<InnovationProps> = ({ onSelectDomain }) => {
  return (
    <section
      id="innovation"
      className="py-24 bg-[#070d18] relative overflow-hidden text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-950/80 border border-cyan-500/30 text-cyan-300 text-xs font-semibold tracking-wider uppercase mb-3 shadow-xs">
            <span>OUR CAPABILITIES</span>
          </div>
          <h2
            id="innovation-heading"
            className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight"
          >
            Innovation Across Technology
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Explore the core technological disciplines and research frontiers where our teams engineer
            next-generation industrial platforms.
          </p>
        </div>

        {/* 6 Attractive Innovation Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {INNOVATION_DOMAINS.map((domain, index) => (
            <motion.div
              key={domain.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group relative rounded-2xl bg-[#0e1935] border border-blue-900/50 p-6 sm:p-7 shadow-lg hover:shadow-2xl hover:shadow-cyan-950/40 hover:-translate-y-1.5 hover:border-cyan-400/60 hover:bg-[#122045] transition-all duration-300 flex flex-col justify-between"
            >
              <div className="relative z-10">
                {/* Top Badge & Icon */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-blue-950/90 text-cyan-400 border border-blue-800 flex items-center justify-center group-hover:border-cyan-400/50 transition-colors duration-300 shadow-md">
                    {iconComponentMap[domain.iconName] || <BrainCircuit className="w-6 h-6 text-cyan-400" />}
                  </div>
                  <span className="text-[11px] font-semibold tracking-wide uppercase px-2.5 py-1 rounded-full bg-blue-950/90 text-cyan-300 border border-blue-800 font-mono">
                    {domain.badge}
                  </span>
                </div>

                {/* Title and Tagline */}
                <h3 className="text-xl font-bold text-white mb-1.5 group-hover:text-cyan-300 transition-colors">
                  {domain.title}
                </h3>
                <p className="text-xs font-semibold text-cyan-400 tracking-tight mb-3 font-mono">
                  {domain.tagline}
                </p>

                {/* Description */}
                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  {domain.description}
                </p>

                {/* Tech Chips */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {domain.technologies.slice(0, 4).map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded-md text-[11px] font-medium bg-[#081125] text-cyan-200 border border-blue-800/60"
                    >
                      {tech}
                    </span>
                  ))}
                  {domain.technologies.length > 4 && (
                    <span className="px-1.5 py-0.5 rounded-md text-[11px] font-medium bg-blue-950 text-slate-400">
                      +{domain.technologies.length - 4}
                    </span>
                  )}
                </div>
              </div>

              {/* Card Action */}
              <div className="relative z-10 pt-4 border-t border-blue-900/40 flex items-center justify-between">
                <button
                  id={`explore-domain-${domain.id}`}
                  onClick={() => onSelectDomain(domain)}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-cyan-400 group-hover:text-cyan-300 cursor-pointer"
                >
                  <span>Explore Domain</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <span className="text-xs text-slate-400 font-mono">Specs & Docs</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Interactive Callout */}
        <div className="mt-14 p-6 rounded-2xl bg-[#0d1833] border border-blue-900/60 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
          <div className="flex items-center gap-3.5 text-left">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-500 text-white flex items-center justify-center shrink-0 shadow-md">
              <CheckCircle className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Custom Research & Proof-of-Concept Engagements</h4>
              <p className="text-xs text-slate-300">Need architectural advisory or tailored algorithm validation? Partner with our lab scientists.</p>
            </div>
          </div>
          <a
            href="#contact"
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white text-xs font-semibold whitespace-nowrap shadow-md transition-all cursor-pointer ring-1 ring-cyan-400/30"
          >
            Initiate Engagement
          </a>
        </div>
      </div>
    </section>
  );
};
