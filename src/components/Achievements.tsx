import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Award, Calendar, CheckCircle, ChevronRight, Trophy, Zap } from 'lucide-react';
import { ACHIEVEMENTS_STATS, MILESTONES } from '../data/companyData';

interface AnimatedCounterProps {
  value: number;
  suffix: string;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ value, suffix }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 1800; // ms
    const startTime = performance.now();

    const updateCounter = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // easeOutExpo
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const currentVal = Math.floor(easeProgress * value);

      setCount(currentVal);

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        setCount(value);
      }
    };

    requestAnimationFrame(updateCounter);
  }, [isInView, value]);

  return (
    <span ref={ref} className="font-mono">
      {count}
      {suffix}
    </span>
  );
};

export const Achievements: React.FC = () => {
  const [selectedMilestone, setSelectedMilestone] = useState(MILESTONES.length - 1);

  return (
    <section
      id="achievements"
      className="py-24 bg-[#070d18] text-white relative overflow-hidden"
    >
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 pointer-events-none opacity-25" aria-hidden="true">
        <div className="absolute top-1/4 -right-40 w-96 h-96 bg-blue-600/25 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -left-40 w-96 h-96 bg-cyan-600/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-950/80 text-cyan-300 text-xs font-semibold tracking-wider uppercase mb-3 border border-cyan-500/30 shadow-xs">
            <Trophy className="w-3.5 h-3.5" />
            <span>TRACK RECORD OF IMPACT</span>
          </div>
          <h2
            id="achievements-heading"
            className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight"
          >
            Milestones & Achievements
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Quantifiable progress built on scientific discipline, industrial deployments, and transformative innovations.
          </p>
        </div>

        {/* 5 Statistic Metric Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 mb-20">
          {ACHIEVEMENTS_STATS.map((stat, idx) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="p-6 rounded-2xl bg-[#0d1833] border border-blue-900/50 hover:border-cyan-400/50 hover:bg-[#111f42] transition-all duration-300 flex flex-col justify-between shadow-lg"
            >
              <div>
                <div className="text-3xl sm:text-4xl font-extrabold text-cyan-300 mb-2">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <h3 className="text-sm sm:text-base font-bold text-white mb-1.5">{stat.label}</h3>
              </div>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed border-t border-blue-900/40 pt-2">
                {stat.sublabel}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Horizontal Interactive Timeline */}
        <div className="mt-8 pt-8 border-t border-blue-900/50">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8">
            <div>
              <span className="text-xs font-mono font-medium text-cyan-400 uppercase tracking-widest">
                Our Evolution
              </span>
              <h3 className="text-2xl font-bold text-white mt-1">Company Milestone Timeline</h3>
            </div>
            <p className="text-xs text-slate-400 max-w-sm mt-2 md:mt-0">
              Click any year in the timeline to inspect architectural milestones and breakthroughs.
            </p>
          </div>

          {/* Timeline Bar (Scrollable on small screens) */}
          <div className="overflow-x-auto pb-4 scrollbar-none">
            <div className="min-w-[680px] relative">
              {/* Central Line */}
              <div className="absolute top-7 left-8 right-8 h-0.5 bg-blue-900/60" />

              {/* Steps */}
              <div className="flex justify-between relative z-10">
                {MILESTONES.map((m, idx) => {
                  const isSelected = selectedMilestone === idx;
                  return (
                    <button
                      key={m.year}
                      id={`timeline-step-${m.year}`}
                      onClick={() => setSelectedMilestone(idx)}
                      className="flex flex-col items-center group cursor-pointer text-center max-w-[110px]"
                    >
                      <div
                        className={`w-14 h-14 rounded-full flex items-center justify-center font-mono font-bold text-sm transition-all duration-300 border-2 ${
                          isSelected
                            ? 'bg-gradient-to-tr from-blue-600 to-cyan-500 border-cyan-300 text-white shadow-lg shadow-blue-950/60 scale-110'
                            : 'bg-[#0a142c] border-blue-800 text-slate-300 group-hover:border-cyan-400/50'
                        }`}
                      >
                        {m.year}
                      </div>
                      <span
                        className={`mt-3 text-xs font-semibold block transition-colors ${
                          isSelected ? 'text-cyan-300' : 'text-slate-400 group-hover:text-slate-200'
                        }`}
                      >
                        {m.quarter}
                      </span>
                      <span className="text-[11px] text-slate-400 font-medium truncate w-full mt-0.5">
                        {m.title}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Selected Milestone Detail Card */}
          <motion.div
            key={selectedMilestone}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-8 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#0d1833] via-[#0f1d3d] to-[#070e1e] border border-blue-800/80 shadow-2xl ring-1 ring-cyan-500/20"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              <div className="lg:col-span-8">
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-3 py-1 rounded-md text-xs font-mono font-bold bg-cyan-950/70 text-cyan-300 border border-cyan-500/30">
                    {MILESTONES[selectedMilestone].year} • {MILESTONES[selectedMilestone].quarter}
                  </span>
                  <span className="text-xs text-slate-400 font-mono">Verified Milestone</span>
                </div>
                <h4 className="text-2xl font-extrabold text-white mb-2">
                  {MILESTONES[selectedMilestone].title}
                </h4>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  {MILESTONES[selectedMilestone].description}
                </p>
              </div>
              <div className="lg:col-span-4 bg-[#081125] p-4.5 rounded-xl border border-blue-900/60">
                <span className="text-[11px] font-mono text-cyan-400 uppercase block mb-1 font-semibold">
                  Key Breakthrough
                </span>
                <p className="text-sm font-semibold text-white">
                  {MILESTONES[selectedMilestone].highlight}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
