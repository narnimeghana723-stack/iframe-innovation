import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote, ShieldCheck } from 'lucide-react';
import { TESTIMONIALS, PARTNERS } from '../data/companyData';

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-[#070d18] relative text-white border-t border-b border-blue-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-950/80 border border-cyan-500/30 text-cyan-300 text-xs font-semibold tracking-wider uppercase mb-3 shadow-xs">
            <span>ENDORSEMENTS & ALLIANCES</span>
          </div>
          <h2
            id="testimonials-heading"
            className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight"
          >
            What People Say About Us
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            From industrial engineering vice presidents to university cybernetics directors, discover how our
            systems create long-term impact.
          </p>
        </div>

        {/* 3 Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {TESTIMONIALS.map((t, index) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="p-8 rounded-2xl bg-[#0e1935] border border-blue-900/50 shadow-lg hover:shadow-2xl hover:shadow-cyan-950/40 hover:border-cyan-400/50 transition-all duration-300 flex flex-col justify-between relative group"
            >
              <div className="relative z-10">
                {/* Rating stars & quote icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-blue-800/80 group-hover:text-cyan-400/40 transition-colors" />
                </div>

                {/* Quote Text */}
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8 italic">
                  "{t.quote}"
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-6 border-t border-blue-900/40 flex items-center gap-3.5">
                <img
                  src={t.avatar}
                  alt={t.author}
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-blue-800"
                  loading="lazy"
                />
                <div>
                  <h4 className="text-sm font-bold text-white">{t.author}</h4>
                  <p className="text-xs text-cyan-400 font-medium font-mono">{t.role}</p>
                  <p className="text-xs text-slate-400 font-medium">{t.organization}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Partners & Clients Logos Row */}
        <div className="pt-12 border-t border-blue-900/50">
          <p className="text-center text-xs font-semibold uppercase tracking-widest text-slate-400 mb-8 font-mono">
            Trusted by research consortia and forward-thinking enterprises
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
            {PARTNERS.map((partner) => (
              <div
                key={partner.id}
                className="p-4 rounded-xl bg-[#0d1833] border border-blue-900/50 shadow-md hover:border-cyan-400/50 hover:bg-[#111f42] transition-all duration-200 flex flex-col items-center justify-center text-center group"
              >
                <div className="w-8 h-8 rounded-lg bg-blue-950 text-cyan-300 group-hover:bg-cyan-500 group-hover:text-slate-950 flex items-center justify-center font-bold text-xs font-mono mb-2 transition-colors border border-blue-800">
                  {partner.name.substring(0, 2).toUpperCase()}
                </div>
                <span className="text-xs font-bold text-white tracking-tight block">
                  {partner.name}
                </span>
                <span className="text-[10px] text-slate-400 font-medium tracking-wide mt-0.5">
                  {partner.category}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
