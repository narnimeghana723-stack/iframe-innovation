import React from 'react';
import { motion } from 'motion/react';
import { Linkedin, Github, Twitter, Mail, ArrowRight, UserPlus } from 'lucide-react';
import { TEAM_MEMBERS } from '../data/companyData';
import { TeamMember } from '../types';

interface TeamProps {
  onSelectMember: (member: TeamMember) => void;
  onViewCareers: () => void;
}

export const Team: React.FC<TeamProps> = ({ onSelectMember, onViewCareers }) => {
  return (
    <section id="team" className="py-24 bg-[#091122] relative text-white border-t border-b border-blue-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-950/80 border border-cyan-500/30 text-cyan-300 text-xs font-semibold tracking-wider uppercase mb-3 shadow-xs">
            <span>LEADERSHIP & ENGINEERING</span>
          </div>
          <h2
            id="team-heading"
            className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight"
          >
            Meet the Team
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            People behind the ideas, technology, and impact. Our interdisciplinary team unites deep
            mathematical inquiry, hardware expertise, and enterprise cloud architecture.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {TEAM_MEMBERS.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="group rounded-2xl bg-[#0e1935] border border-blue-900/50 p-6 sm:p-7 shadow-lg hover:shadow-2xl hover:shadow-cyan-950/40 hover:-translate-y-1 hover:border-cyan-400/50 hover:bg-[#122045] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Header Profile Photo & Badge */}
                <div className="flex items-start justify-between mb-5">
                  <div className="relative">
                    <img
                      src={member.avatar}
                      alt={member.name}
                      className="w-20 h-20 rounded-2xl object-cover ring-2 ring-blue-800/80 group-hover:ring-cyan-400/50 transition-all duration-300 shadow-md"
                      loading="lazy"
                    />
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-emerald-500 border-2 border-[#0e1935]" title="Active Core Contributor" />
                  </div>
                  <span className="text-[11px] font-semibold text-cyan-300 bg-[#081125] border border-blue-800/60 px-2.5 py-1 rounded-full font-mono">
                    {member.department}
                  </span>
                </div>

                {/* Name & Role */}
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {member.name}
                </h3>
                <p className="text-sm font-semibold text-cyan-400 mb-3 font-mono">{member.role}</p>

                {/* Bio Description */}
                <p className="text-sm text-slate-300 leading-relaxed line-clamp-3 mb-6">
                  {member.bio}
                </p>
              </div>

              {/* Social Icons & View Bio */}
              <div className="pt-4 border-t border-blue-900/40 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {member.socials.linkedin && (
                    <a
                      href={member.socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg text-slate-400 hover:text-cyan-300 hover:bg-blue-950 transition-colors"
                      aria-label={`${member.name}'s LinkedIn`}
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                  )}
                  {member.socials.github && (
                    <a
                      href={member.socials.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-blue-950 transition-colors"
                      aria-label={`${member.name}'s GitHub`}
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                  {member.socials.twitter && (
                    <a
                      href={member.socials.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg text-slate-400 hover:text-cyan-400 hover:bg-blue-950 transition-colors"
                      aria-label={`${member.name}'s Twitter`}
                    >
                      <Twitter className="w-4 h-4" />
                    </a>
                  )}
                  {member.socials.email && (
                    <a
                      href={`mailto:${member.socials.email}`}
                      className="p-1.5 rounded-lg text-slate-400 hover:text-blue-400 hover:bg-blue-950 transition-colors"
                      aria-label={`Email ${member.name}`}
                    >
                      <Mail className="w-4 h-4" />
                    </a>
                  )}
                </div>

                <button
                  id={`view-bio-${member.id}`}
                  onClick={() => onSelectMember(member)}
                  className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 hover:underline cursor-pointer"
                >
                  View Bio
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Full Team Callout Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-[#0d1833] border border-blue-900/60 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <h3 className="text-lg font-bold text-white">Want to join our research and engineering lab?</h3>
            <p className="text-sm text-slate-300 mt-1">
              We are actively looking for systems researchers, applied ML scientists, and low-latency developers.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <button
              id="meet-full-team-cta"
              onClick={onViewCareers}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white text-sm font-semibold shadow-md transition-colors cursor-pointer ring-1 ring-cyan-400/30"
            >
              <span>Explore Careers & Fellowships</span>
              <ArrowRight className="w-4 h-4 text-cyan-100" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
