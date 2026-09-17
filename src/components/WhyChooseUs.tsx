import React from 'react';
import { motion } from 'motion/react';
import { Lightbulb, Layers, TrendingUp, Users, CheckCircle2 } from 'lucide-react';
import { WHY_CHOOSE_US } from '../data/companyData';

const iconMap: Record<string, React.ReactNode> = {
  Lightbulb: <Lightbulb className="w-7 h-7 text-cyan-400" />,
  Layers: <Layers className="w-7 h-7 text-blue-400" />,
  TrendingUp: <TrendingUp className="w-7 h-7 text-indigo-400" />,
  Users: <Users className="w-7 h-7 text-teal-400" />,
};

export const WhyChooseUs: React.FC = () => {
  return (
    <section id="why-choose-us" className="py-24 bg-[#070d18] relative border-t border-b border-blue-950/60 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-950/80 border border-cyan-500/30 text-cyan-300 text-xs font-semibold tracking-wider uppercase mb-3 shadow-xs">
            <span>VALUE & ADVANTAGE</span>
          </div>
          <h2
            id="why-choose-us-heading"
            className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight"
          >
            Why Work With Us?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            We deliver the ideal balance of foundational scientific inquiry and battle-tested production
            engineering, eliminating risk at every project milestone.
          </p>
        </div>

        {/* 4 Benefits Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_CHOOSE_US.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="p-7 rounded-2xl bg-[#0d1833] border border-blue-900/50 shadow-lg hover:shadow-2xl hover:shadow-cyan-950/40 hover:border-cyan-400/50 hover:bg-[#111f42] transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-blue-950/80 border border-blue-800 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-cyan-400/50 transition-all duration-300">
                  {iconMap[item.iconName]}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-blue-900/40 flex items-center gap-2 text-xs font-semibold text-cyan-300 font-mono">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                <span>{item.stats}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
