import React from 'react';
import { Code2, BookOpen, Award, Trophy } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const HighlightsBar = ({ darkMode }) => {
  const { quickMetrics } = portfolioData.personalInfo;

  const icons = [Code2, BookOpen, Award, Trophy];
  const accentColors = [
    { text: 'text-indigo-400', border: 'border-indigo-500/20', bg: 'bg-indigo-500/10' },
    { text: 'text-cyan-400', border: 'border-cyan-500/20', bg: 'bg-cyan-500/10' },
    { text: 'text-emerald-400', border: 'border-emerald-500/20', bg: 'bg-emerald-500/10' },
    { text: 'text-amber-400', border: 'border-amber-500/20', bg: 'bg-amber-500/10' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 sm:-mt-10 mb-16 relative z-20">
      <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 p-4 sm:p-6 rounded-2xl border shadow-xl ${
        darkMode 
          ? 'bg-slate-900/90 border-slate-800/80 backdrop-blur-xl shadow-black/40' 
          : 'bg-white/95 border-slate-200/90 backdrop-blur-xl shadow-slate-200/60'
      }`}>
        {quickMetrics.map((item, index) => {
          const Icon = icons[index % icons.length];
          const color = accentColors[index % accentColors.length];

          return (
            <div 
              key={item.label}
              className={`p-3 sm:p-4 rounded-xl border transition-all duration-300 hover:scale-[1.03] ${
                darkMode 
                  ? 'bg-slate-950/40 border-slate-800/60 hover:border-slate-700' 
                  : 'bg-slate-50 border-slate-200/80 hover:border-slate-300'
              }`}
            >
              <div className="flex items-center gap-3 mb-2">
                <div className={`p-2 rounded-lg ${color.bg} ${color.text}`}>
                  <Icon size={18} />
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold tracking-tight font-mono-code">
                  <span className={color.text}>{item.value}</span>
                </div>
              </div>
              <div className={`text-xs sm:text-sm font-semibold tracking-tight ${
                darkMode ? 'text-slate-200' : 'text-slate-800'
              }`}>
                {item.label}
              </div>
              <div className={`text-[11px] sm:text-xs mt-0.5 truncate ${
                darkMode ? 'text-slate-400' : 'text-slate-500'
              }`}>
                {item.subtext}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HighlightsBar;
