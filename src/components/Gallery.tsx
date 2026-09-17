import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Maximize2, MapPin, Sparkles } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/companyData';
import { GalleryItem } from '../types';

interface GalleryProps {
  onSelectImage: (item: GalleryItem) => void;
}

export const Gallery: React.FC<GalleryProps> = ({ onSelectImage }) => {
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const categories = ['All', 'Lab & Research', 'Robotics', 'Workshops', 'Field Deployment', 'Events'];

  const filteredItems =
    activeFilter === 'All'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeFilter);

  return (
    <section id="gallery" className="py-24 bg-[#091122] relative text-white border-t border-b border-blue-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-950/80 border border-cyan-500/30 text-cyan-300 text-xs font-semibold tracking-wider uppercase mb-3 shadow-xs">
            <span>CULTURE & FIELDWORK</span>
          </div>
          <h2
            id="gallery-heading"
            className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight"
          >
            Inside Our Journey
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Snapshots of collaborative breakthrough sessions, hardware testbenches, university hackathons,
            and enterprise field deployments.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              id={`gallery-cat-${cat.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer ${
                activeFilter === cat
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-md shadow-blue-950/50 ring-1 ring-cyan-400/40'
                  : 'bg-[#0d1833] text-slate-300 hover:bg-blue-950 hover:text-white border border-blue-900/60'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Modern Masonry / Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <motion.div
              layout
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
              className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-[#070d18] border border-blue-900/50 shadow-xl cursor-pointer hover:border-cyan-400/60 transition-all duration-300"
              onClick={() => onSelectImage(item)}
            >
              {/* Image */}
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500 ease-out opacity-85 group-hover:opacity-100"
                loading="lazy"
              />

              {/* Gradient Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#070d18] via-[#070d18]/40 to-transparent opacity-85 group-hover:opacity-90 transition-opacity" />

              {/* Top Category Badge & Expand Icon */}
              <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between z-10">
                <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-medium bg-[#070d18]/90 backdrop-blur-md text-cyan-300 border border-cyan-500/30">
                  {item.category}
                </span>
                <div className="w-8 h-8 rounded-lg bg-blue-600/80 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity border border-cyan-300/40 shadow-sm">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>

              {/* Bottom Caption Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-5 z-10 transform translate-y-1 group-hover:translate-y-0 transition-transform">
                <div className="flex items-center gap-1.5 text-cyan-400 text-xs mb-1 font-mono">
                  <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{item.location}</span>
                </div>
                <h3 className="text-base font-bold text-white leading-tight mb-1 group-hover:text-cyan-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed opacity-90">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
