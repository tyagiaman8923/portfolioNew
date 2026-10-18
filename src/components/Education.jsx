import React from 'react';
import { GraduationCap, Calendar, MapPin, Award, CheckCircle2, BookOpen } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Education = ({ darkMode }) => {
  const { education } = portfolioData;

  return (
    <section id="education" className="py-10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-indigo-400 bg-indigo-500/10 border border-indigo-500/20">
            <GraduationCap size={13} />
            Academic Foundation
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Education & Qualifications
          </h2>
          <p className={`text-base sm:text-lg ${
            darkMode ? 'text-slate-400' : 'text-slate-600'
          }`}>
            Rigorous training in computer science and engineering from premier Indian institutions.
          </p>
        </div>

        {/* Education Timeline */}
        <div className="max-w-4xl mx-auto space-y-6">
          {education.map((edu, idx) => {
            const isMTech = edu.degree.includes('Master');

            return (
              <div 
                key={edu.institution + idx}
                className={`p-6 sm:p-8 rounded-2xl border transition-all duration-300 hover:shadow-xl ${
                  darkMode 
                    ? 'bg-slate-900/80 border-slate-800 hover:border-indigo-500/40 backdrop-blur-md' 
                    : 'bg-white border-slate-200 hover:border-indigo-300 shadow-md'
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-4 border-b border-slate-800/60">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className={`text-lg sm:text-xl font-bold ${
                        darkMode ? 'text-white' : 'text-slate-900'
                      }`}>
                        {edu.degree}
                      </h3>
                      
                    </div>
                    <h4 className="text-sm font-semibold text-indigo-400">
                      {edu.institution}
                    </h4>
                    <p className={`flex items-center gap-1.5 text-xs ${
                      darkMode ? 'text-slate-400' : 'text-slate-500'
                    }`}>
                      <MapPin size={12} />
                      {edu.location}
                    </p>
                  </div>

                  <div className="flex sm:flex-col items-center sm:items-end justify-between gap-2">
                    <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-lg text-xs font-mono-code font-medium ${
                      darkMode ? 'bg-slate-800 text-slate-300' : 'bg-slate-100 text-slate-700'
                    }`}>
                      <Calendar size={12} className="text-indigo-400" />
                      {edu.period}
                    </span>
                    <span className="px-3 py-1 rounded-lg text-xs font-bold font-mono-code bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      {edu.grade}
                    </span>
                  </div>
                </div>

                {/* Highlights */}
                {edu.highlights && (
                  <div className="pt-4 space-y-1.5">
                    {edu.highlights.map((h, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2 text-xs sm:text-sm">
                        <CheckCircle2 size={14} className="text-indigo-400 shrink-0 mt-0.5" />
                        <span className={darkMode ? 'text-slate-300' : 'text-slate-600'}>
                          {h}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Education;
