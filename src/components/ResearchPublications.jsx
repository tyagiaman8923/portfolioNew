import React, { useState } from 'react';
import { BookOpen, FileCheck, Award, Eye, ExternalLink, ChevronDown, ChevronUp, Cpu, Activity, Sparkles, Layers } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const ResearchPublications = ({ darkMode, onSelectPaper }) => {
  const { publications } = portfolioData;
  const [expandedAbstract, setExpandedAbstract] = useState(null);

  const toggleAbstract = (id) => {
    setExpandedAbstract(expandedAbstract === id ? null : id);
  };

  return (
    <section id="research" className="py-10 relative overflow-hidden">
      {/* Subtle glow backdrop */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-cyan-600/10 via-indigo-600/10 to-emerald-600/10 blur-[140px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-cyan-400 bg-cyan-500/10 border border-cyan-500/20">
            <Sparkles size={13} />
            Peer-Reviewed Academic Research
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Diabetic Retinopathy Detection & AI Research
          </h2>
          <p className={`text-base sm:text-lg ${
            darkMode ? 'text-slate-400' : 'text-slate-600'
          }`}>
            Authored <span className="text-cyan-400 font-semibold">2 published research papers</span> deploying deep convolutional neural networks and transfer learning on medical fundus imagery.
          </p>
        </div>

        {/* Clinical Impact Summary Box */}
        <div className={`p-6 sm:p-8 rounded-2xl border mb-12 shadow-xl ${
          darkMode 
            ? 'bg-slate-900/60 border-cyan-500/20 bg-gradient-to-r from-slate-900/90 via-slate-900/80 to-cyan-950/20' 
            : 'bg-white border-cyan-200 shadow-cyan-100/40'
        }`}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-8 space-y-3">
              <div className="flex items-center gap-2 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
                <Activity size={15} />
                Medical Artificial Intelligence Breakthrough
              </div>
              <h3 className={`text-xl sm:text-2xl font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                Automated Screening Pipeline with EfficientNet-B3
              </h3>
              <p className={`text-sm sm:text-base leading-relaxed ${
                darkMode ? 'text-slate-300' : 'text-slate-700'
              }`}>
                Diabetic Retinopathy is the leading cause of preventable blindness among working-age adults globally. 
                My published work introduces a robust deep learning framework fine-tuning <strong>EfficientNet-B3</strong> with custom medical augmentations and CLAHE preprocessing on the <strong>Messidor + 4 other fundus benchmark</strong>, reaching a clinical validation accuracy of <strong>94%</strong> and enabling automated early-stage grading.
              </p>
            </div>

            {/* Quick Metrics Grid */}
            <div className="lg:col-span-4 grid grid-cols-2 gap-3">
              <div className={`p-4 rounded-xl border text-center ${
                darkMode ? 'bg-slate-950/50 border-cyan-500/30' : 'bg-cyan-50 border-cyan-200'
              }`}>
                <div className="text-2xl sm:text-3xl font-extrabold text-cyan-400 font-mono-code">94.0%</div>
                <div className="text-xs text-slate-400 font-medium mt-1">Validation Accuracy</div>
              </div>
              <div className={`p-4 rounded-xl border text-center ${
                darkMode ? 'bg-slate-950/50 border-indigo-500/30' : 'bg-indigo-50 border-indigo-200'
              }`}>
                <div className="text-2xl sm:text-3xl font-extrabold text-indigo-400 font-mono-code">2 Papers</div>
                <div className="text-xs text-slate-400 font-medium mt-1">Published & Indexed</div>
              </div>
              <div className={`p-4 rounded-xl border text-center ${
                darkMode ? 'bg-slate-950/50 border-emerald-500/30' : 'bg-emerald-50 border-emerald-200'
              }`}>
                <div className="text-sm font-bold text-emerald-400 font-mono-code">Messidor, Aptos + 2 other</div>
                <div className="text-xs text-slate-400 font-medium mt-1">Fundus Dataset</div>
              </div>
              <div className={`p-4 rounded-xl border text-center ${
                darkMode ? 'bg-slate-950/50 border-purple-500/30' : 'bg-purple-50 border-purple-200'
              }`}>
                <div className="text-sm font-bold text-purple-400 font-mono-code">5 Stages</div>
                <div className="text-xs text-slate-400 font-medium mt-1">Clinical Severity</div>
              </div>
            </div>
          </div>
        </div>

        {/* Papers Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {publications.map((paper, index) => {
            const isExpanded = expandedAbstract === paper.id;

            return (
              <div 
                key={paper.id}
                className={`flex flex-col justify-between p-6 sm:p-8 rounded-2xl border transition-all duration-300 hover:shadow-2xl ${
                  darkMode 
                    ? 'bg-slate-900/80 border-slate-800 hover:border-cyan-500/40 backdrop-blur-md' 
                    : 'bg-white border-slate-200 hover:border-cyan-300 shadow-md'
                }`}
              >
                <div>
                  {/* Top Bar with Badges */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                      <FileCheck size={13} />
                      Paper #{index + 1} • {paper.status}
                    </span>
                    <span className="text-xs font-mono-code text-slate-400 font-medium">
                      {paper.year}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className={`text-xl font-bold leading-snug mb-3 ${
                    darkMode ? 'text-white' : 'text-slate-900'
                  }`}>
                    {paper.title}
                  </h3>

                  {/* Venue */}
                  <p className="text-xs font-semibold text-indigo-400 mb-4 flex items-center gap-1.5">
                    <BookOpen size={14} />
                    {paper.venue}
                  </p>

                  {/* Key Metrics Chips */}
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    {paper.keyMetrics.map((km) => (
                      <div 
                        key={km.label}
                        className={`px-3 py-2 rounded-lg text-xs border ${
                          darkMode 
                            ? 'bg-slate-950/60 border-slate-800' 
                            : 'bg-slate-50 border-slate-200'
                        }`}
                      >
                        <span className="text-[10px] text-slate-400 block">{km.label}</span>
                        <span className={`font-mono-code font-bold ${
                          darkMode ? 'text-slate-200' : 'text-slate-800'
                        }`}>
                          {km.value}
                        </span>
                      </div>
                    ))}
                  </div>

                </div>

                {/* Footer with Tags & Action */}
                <div>
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {paper.tags.map((tag) => (
                      <span 
                        key={tag}
                        className={`text-[11px] px-2 py-0.5 rounded font-mono-code ${
                          darkMode 
                            ? 'bg-slate-800 text-slate-300' 
                            : 'bg-slate-100 text-slate-700'
                        }`}
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-slate-800/60 flex flex-wrap items-center justify-between gap-2">
                    <span className="text-xs text-slate-400 flex items-center gap-1">
                      <Award size={13} className="text-amber-400" />
                      Aman Tyagi (Author)
                    </span>
                    <div className="flex items-center gap-2">
                      {paper.link && paper.link !== '#' && (
                        <a
                          href={paper.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
                            darkMode 
                              ? 'border-cyan-500/30 text-cyan-300 hover:bg-cyan-500/10' 
                              : 'border-cyan-300 text-cyan-700 hover:bg-cyan-50'
                          }`}
                          title="Open Published Paper DOI"
                        >
                          <span>DOI / Paper</span>
                          <ExternalLink size={12} />
                        </a>
                      )}
                      <button
                        onClick={() => onSelectPaper(paper)}
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-cyan-600 hover:bg-cyan-500 text-white transition-all shadow-md shadow-cyan-600/20"
                      >
                        <Eye size={13} />
                        <span>Breakdown</span>
                      </button>
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

export default ResearchPublications;
