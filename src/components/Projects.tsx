import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Layers, ExternalLink, Activity, Sparkles, Filter } from 'lucide-react';
import { PROJECTS_DATA } from '../data/companyData';
import { Project } from '../types';

interface ProjectsProps {
  onSelectProject: (project: Project) => void;
}

const CATEGORIES = ['All', 'AI', 'IoT', 'Software', 'Cloud', 'Automation'] as const;

export const Projects: React.FC<ProjectsProps> = ({ onSelectProject }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'All') return PROJECTS_DATA;
    return PROJECTS_DATA.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="projects" className="py-24 bg-[#091122] relative text-white border-t border-b border-blue-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-950/80 border border-cyan-500/30 text-cyan-300 text-xs font-semibold tracking-wider uppercase mb-3 shadow-xs">
            <span>PORTFOLIO & CASE STUDIES</span>
          </div>
          <h2
            id="projects-heading"
            className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight"
          >
            Projects That Make an Impact
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Explore some of our recent work, high-performance systems, and engineering innovations deployed across
            critical industrial sectors.
          </p>
        </div>

        {/* Category Filters Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-14" role="tablist">
          {CATEGORIES.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                id={`filter-btn-${category.toLowerCase()}`}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveCategory(category)}
                className={`px-4.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-md shadow-blue-950/50 ring-1 ring-cyan-400/40'
                    : 'bg-[#0d1833] text-slate-300 hover:bg-blue-950 hover:text-white border border-blue-900/60'
                }`}
              >
                {category}
                {category === 'All' ? ` (${PROJECTS_DATA.length})` : ''}
              </button>
            );
          })}
        </div>

        {/* Responsive Project Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="group rounded-2xl bg-[#0e1935] border border-blue-900/50 shadow-lg hover:shadow-2xl hover:shadow-cyan-950/40 hover:border-cyan-400/60 transition-all duration-300 overflow-hidden flex flex-col justify-between"
              >
                {/* Image Showcase with Zoom and Tag overlay */}
                <div>
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#070e1e]">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover opacity-85 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 ease-out"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0e1935] via-transparent to-transparent pointer-events-none" />

                    {/* Top Category Badge */}
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 rounded-md text-[11px] font-semibold tracking-wide bg-[#070d18]/90 backdrop-blur-md text-cyan-300 border border-cyan-500/30 font-mono">
                        {project.category}
                      </span>
                    </div>

                    {/* Featured Star if applicable */}
                    {project.featured && (
                      <div className="absolute top-3 right-3">
                        <span className="flex items-center gap-1 px-2.5 py-1 rounded-md text-[10px] font-semibold bg-blue-600/90 backdrop-blur-md text-white border border-cyan-400/40">
                          <Sparkles className="w-3 h-3 text-cyan-200" />
                          Featured
                        </span>
                      </div>
                    )}

                    {/* Client / Domain tag on image bottom */}
                    <div className="absolute bottom-3 left-3 right-3 text-white text-xs font-medium truncate drop-shadow-sm">
                      <span className="text-cyan-400 mr-1.5 font-mono">Domain:</span>
                      <span className="text-slate-200">{project.clientOrDomain}</span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors mb-1.5">
                      {project.title}
                    </h3>
                    <p className="text-xs text-cyan-400 font-medium mb-3 italic font-mono">
                      "{project.tagline}"
                    </p>
                    <p className="text-sm text-slate-300 line-clamp-2 leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {/* Technology Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {project.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 rounded text-[11px] font-medium bg-[#081125] text-cyan-200 border border-blue-800/60 font-mono"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Key Metric Highlights */}
                    <div className="grid grid-cols-2 gap-2 pt-3 border-t border-blue-900/40 mb-4 bg-[#081125] p-2.5 rounded-xl border border-blue-900/40">
                      {project.metrics.slice(0, 2).map((m, idx) => (
                        <div key={idx} className="flex flex-col">
                          <span className="text-xs text-slate-400">{m.label}</span>
                          <span className="text-sm font-bold text-white font-mono mt-0.5">{m.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="px-6 pb-6 pt-2">
                  <button
                    id={`view-project-${project.id}`}
                    onClick={() => onSelectProject(project)}
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-xl bg-[#0a142c] hover:bg-gradient-to-r hover:from-blue-600 hover:to-cyan-600 text-slate-200 hover:text-white font-semibold text-xs sm:text-sm border border-blue-800/80 hover:border-cyan-400/40 transition-all duration-200 cursor-pointer shadow-sm"
                  >
                    <span>View Project Specifications</span>
                    <ArrowRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View All Projects Trigger */}
        <div className="mt-14 text-center">
          <button
            id="view-all-projects-cta"
            onClick={() => setActiveCategory('All')}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-semibold text-sm shadow-md shadow-blue-950/50 transition-all duration-200 cursor-pointer ring-1 ring-cyan-400/30"
          >
            <span>View All {PROJECTS_DATA.length} Projects & Architectural Benchmarks</span>
            <ArrowRight className="w-4 h-4 text-cyan-100" />
          </button>
        </div>
      </div>
    </section>
  );
};
