import React from 'react';
import { Briefcase, GraduationCap, Calendar, MapPin, CheckCircle2, ChevronRight, Building } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Experience = ({ darkMode }) => {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-cyan-400 bg-cyan-500/10 border border-cyan-500/20">
            Professional & Academic Journey
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Work Experience & Teaching
          </h2>
          <p className={`text-base sm:text-lg ${
            darkMode ? 'text-slate-400' : 'text-slate-600'
          }`}>
            Delivering enterprise scale at HCL Software and shaping future engineers at NIT Kurukshetra.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="max-w-4xl mx-auto space-y-8">
          {experience.map((exp, index) => {
            const isHcl = exp.id === 'hcl-software';
            const Icon = isHcl ? Briefcase : GraduationCap;
            const badgeColor = isHcl 
              ? 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20' 
              : 'text-indigo-400 bg-indigo-500/10 border-indigo-500/20';

            return (
              <div 
                key={exp.id}
                className={`relative p-6 sm:p-8 rounded-2xl border transition-all duration-300 hover:shadow-2xl ${
                  darkMode 
                    ? 'bg-slate-900/70 border-slate-800 hover:border-slate-700 backdrop-blur-md' 
                    : 'bg-white border-slate-200 hover:border-slate-300 shadow-md'
                }`}
              >
                {/* Header Row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-slate-800/60">
                  <div className="flex items-start sm:items-center gap-3.5">
                    <div className={`p-3 rounded-xl border ${badgeColor}`}>
                      <Icon size={22} />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                          {exp.role}
                        </h3>
                        {isHcl && (
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                            Current Role
                          </span>
                        )}
                      </div>
                      <p className="text-sm font-semibold text-indigo-400 flex items-center gap-1.5 mt-0.5">
                        <Building size={14} />
                        {exp.company}
                      </p>
                    </div>
                  </div>

                  <div className="flex sm:flex-col items-center sm:items-end justify-between text-xs gap-1">
                    <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-lg font-mono-code font-medium ${
                      darkMode ? 'bg-slate-800 text-slate-300' : 'bg-slate-100 text-slate-700'
                    }`}>
                      <Calendar size={13} className="text-indigo-400" />
                      {exp.period}
                    </span>
                    <span className={`flex items-center gap-1 text-[11px] ${
                      darkMode ? 'text-slate-400' : 'text-slate-500'
                    }`}>
                      <MapPin size={12} />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Description & Key Highlights */}
                <div className="pt-5 space-y-4">
                  <p className={`text-sm sm:text-base leading-relaxed ${
                    darkMode ? 'text-slate-300' : 'text-slate-700'
                  }`}>
                    {exp.description}
                  </p>

                  <div className="space-y-2.5">
                    <h4 className={`text-xs uppercase tracking-wider font-semibold ${
                      darkMode ? 'text-slate-400' : 'text-slate-500'
                    }`}>
                      Key Contributions & Impact:
                    </h4>
                    <div className="grid grid-cols-1 gap-2.5">
                      {exp.highlights.map((highlight, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm">
                          <ChevronRight size={16} className="text-indigo-400 shrink-0 mt-0.5" />
                          <span className={darkMode ? 'text-slate-300' : 'text-slate-700'}>
                            {highlight}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech stack chips */}
                  <div className="pt-3 border-t border-slate-800/50">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-xs text-slate-400 font-medium mr-1">Technologies & Skills:</span>
                      {exp.technologies.map((tech) => (
                        <span 
                          key={tech}
                          className={`text-xs px-2.5 py-1 rounded-md font-mono-code border ${
                            darkMode 
                              ? 'bg-slate-800/80 text-indigo-300 border-slate-700/80' 
                              : 'bg-indigo-50/80 text-indigo-800 border-indigo-200'
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Experience;
