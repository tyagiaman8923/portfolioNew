import React, { useEffect } from 'react';
import { X, ExternalLink, CheckCircle2, Layers, Cpu, Code2, Sparkles, BookOpen } from 'lucide-react';
import { GithubIcon } from './SocialIcons';

const ProjectModal = ({ item, type = 'project', isOpen, onClose, darkMode }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !item) return null;

  const isResearch = type === 'research' || Boolean(item.abstract);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div 
        className={`relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl border shadow-2xl transition-all my-8 ${
          darkMode 
            ? 'bg-slate-900 border-slate-800 text-slate-100' 
            : 'bg-white border-slate-200 text-slate-900'
        }`}
      >
        {/* Modal Header */}
        <div className="sticky top-0 z-10 flex items-center justify-between px-6 py-4 border-b bg-inherit backdrop-blur-md">
          <div className="flex items-center gap-2">
            <span className={`px-2.5 py-1 rounded-md text-xs font-semibold ${
              isResearch 
                ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30' 
                : 'bg-indigo-500/20 text-indigo-400 border border-indigo-500/30'
            }`}>
              {isResearch ? 'Peer-Reviewed Research' : item.category || 'Featured Project'}
            </span>
            {item.status && (
              <span className="text-xs font-medium text-emerald-400">
                • {item.status}
              </span>
            )}
          </div>

          <button
            onClick={onClose}
            className={`p-2 rounded-xl transition-colors ${
              darkMode ? 'text-slate-400 hover:text-white hover:bg-slate-800' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          
          {/* Title & Tagline */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold leading-tight">
              {item.title}
            </h2>
            {item.tagline && (
              <p className="text-sm font-semibold text-indigo-400 mt-1">
                {item.tagline}
              </p>
            )}
            {item.venue && (
              <p className="text-xs font-medium text-cyan-400 mt-1 flex items-center gap-1.5">
                <BookOpen size={14} />
                {item.venue} ({item.year})
              </p>
            )}
          </div>

          {/* Research Key Metrics if applicable */}
          {item.keyMetrics && (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {item.keyMetrics.map((km) => (
                <div 
                  key={km.label}
                  className={`p-3 rounded-xl border text-center ${
                    darkMode ? 'bg-slate-950/60 border-slate-800' : 'bg-slate-50 border-slate-200'
                  }`}
                >
                  <div className="text-lg font-bold font-mono-code text-cyan-400">{km.value}</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">{km.label}</div>
                </div>
              ))}
            </div>
          )}

          {/* Detailed Description / Abstract */}
          <div className="space-y-3">
            <h3 className="text-xs uppercase tracking-wider font-semibold text-slate-400">
              {isResearch ? 'Abstract & Methodology' : 'System Overview & Problem Statement'}
            </h3>
            <p className={`text-sm sm:text-base leading-relaxed ${
              darkMode ? 'text-slate-300' : 'text-slate-700'
            }`}>
              {item.abstract || item.description}
            </p>
          </div>

          {/* Key Engineering Highlights */}
          {item.highlights && item.highlights.length > 0 && (
            <div className="space-y-3">
              <h3 className="text-xs uppercase tracking-wider font-semibold text-slate-400">
                Key Deliverables & Architectural Highlights
              </h3>
              <div className="space-y-2">
                {item.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm">
                    <CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                    <span className={darkMode ? 'text-slate-300' : 'text-slate-700'}>
                      {highlight}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Technologies Used */}
          {(item.technologies || item.tags) && (
            <div className="space-y-2 pt-2 border-t border-slate-800/60">
              <h3 className="text-xs uppercase tracking-wider font-semibold text-slate-400">
                Technologies & Architecture Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {(item.technologies || item.tags).map((tech) => (
                  <span
                    key={tech}
                    className={`px-3 py-1 rounded-lg text-xs font-mono-code font-medium border ${
                      darkMode 
                        ? 'bg-slate-800/80 text-indigo-300 border-slate-700/80' 
                        : 'bg-indigo-50 text-indigo-800 border-indigo-200'
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Action Links */}
          <div className="pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4">
            <div className="text-xs text-slate-400">
              Lead Developer / Researcher: <strong className={darkMode ? 'text-white' : 'text-slate-900'}>Aman Tyagi</strong>
            </div>

            <div className="flex items-center gap-3">
              {item.github && (
                <a
                  href={item.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold border transition-all ${
                    darkMode 
                      ? 'border-slate-700 hover:bg-slate-800 text-slate-200' 
                      : 'border-slate-300 hover:bg-slate-100 text-slate-800'
                  }`}
                >
                  <GithubIcon size={15} />
                  <span>GitHub Repository</span>
                </a>
              )}

              {item.link && item.link !== '#' && (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2 rounded-xl text-xs font-semibold bg-cyan-600 hover:bg-cyan-500 text-white shadow-md shadow-cyan-600/30 transition-all"
                >
                  <span>Read Published Paper</span>
                  <ExternalLink size={14} />
                </a>
              )}

              {item.liveDemo && (
                <a
                  href={item.liveDemo}
                  target={item.liveDemo.startsWith('#') ? '_self' : '_blank'}
                  rel="noopener noreferrer"
                  onClick={item.liveDemo.startsWith('#') ? onClose : undefined}
                  className="flex items-center gap-2 px-5 py-2 rounded-xl text-xs font-semibold bg-indigo-600 hover:bg-indigo-500 text-white shadow-md shadow-indigo-600/30 transition-all"
                >
                  <span>Launch Live App</span>
                  <ExternalLink size={14} />
                </a>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
