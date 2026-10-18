import React, { useState } from 'react';
import { 
  FolderGit2, 
  ExternalLink, 
  Sparkles, 
  Layers, 
  Eye, 
  CheckCircle2,
  Code2
} from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { portfolioData } from '../data/portfolioData';

const Projects = ({ darkMode, onSelectProject }) => {
  const { projects } = portfolioData;
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'Full Stack', 'AI & Machine Learning', 'Web Apps'];

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-indigo-400 bg-indigo-500/10 border border-indigo-500/20">
            <FolderGit2 size={13} />
            Featured Software & AI Systems
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Featured Engineering Projects
          </h2>
          <p className={`text-base sm:text-lg ${
            darkMode ? 'text-slate-400' : 'text-slate-600'
          }`}>
            From fullstack enterprise web applications (Uber Clone, Recipe App, Weather App) to cutting-edge AI (Diabetic Retinopathy & Groq LLaMA3 Summarizer).
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
          {categories.map((category) => {
            const isActive = activeFilter === category;
            return (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  isActive
                    ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30 scale-105'
                    : darkMode
                      ? 'bg-slate-900/80 text-slate-300 hover:bg-slate-800 border border-slate-800'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className={`flex flex-col justify-between rounded-2xl border overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl group ${
                darkMode 
                  ? 'bg-slate-900/80 border-slate-800 hover:border-indigo-500/50 backdrop-blur-md' 
                  : 'bg-white border-slate-200 hover:border-indigo-300 shadow-md'
              }`}
            >
              {/* Project Card Image & Header */}
              <div>
                <div className="relative h-48 sm:h-52 overflow-hidden bg-slate-950">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                  
                  {/* Category Pill */}
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-slate-900/90 text-indigo-300 border border-indigo-500/30 backdrop-blur-md">
                      {project.category}
                    </span>
                  </div>

                  {/* Highlights Bar */}
                  <div className="absolute bottom-3 left-3 right-3">
                    <h3 className="text-lg font-bold text-white drop-shadow-md">
                      {project.title}
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 space-y-4">
                  <p className="text-xs font-medium text-indigo-400">
                    {project.tagline}
                  </p>
                  
                  <p className={`text-xs sm:text-sm line-clamp-3 leading-relaxed ${
                    darkMode ? 'text-slate-300' : 'text-slate-600'
                  }`}>
                    {project.description}
                  </p>

                  {/* Bullet Highlights */}
                  <div className="space-y-1.5 pt-1">
                    {project.highlights.slice(0, 2).map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs">
                        <CheckCircle2 size={13} className="text-emerald-400 shrink-0 mt-0.5" />
                        <span className={`line-clamp-1 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className={`text-[11px] px-2 py-0.5 rounded font-mono-code ${
                          darkMode 
                            ? 'bg-slate-800 text-slate-300 border border-slate-700/60' 
                            : 'bg-slate-100 text-slate-700 border border-slate-200'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="text-[11px] px-1.5 py-0.5 rounded text-slate-400">
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className={`p-5 pt-3 border-t flex items-center justify-between gap-2 ${
                darkMode ? 'border-slate-800/80 bg-slate-950/40' : 'border-slate-100 bg-slate-50/60'
              }`}>
                <button
                  onClick={() => onSelectProject(project)}
                  className="flex items-center gap-1.5 text-xs font-semibold text-indigo-400 hover:text-indigo-300 transition-colors"
                >
                  <Eye size={13} />
                  <span>Case Study</span>
                </button>

                <div className="flex items-center gap-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2 rounded-lg transition-colors ${
                      darkMode 
                        ? 'text-slate-300 hover:text-white hover:bg-slate-800' 
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200'
                    }`}
                    title="View GitHub Repository"
                  >
                    <GithubIcon size={16} />
                  </a>

                  {project.liveDemo && (
                    <a
                      href={project.liveDemo}
                      target={project.liveDemo.startsWith('#') ? '_self' : '_blank'}
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-semibold bg-indigo-600 hover:bg-indigo-500 text-white transition-all shadow-sm shadow-indigo-600/30"
                      title="View Demo"
                    >
                      <span>Demo</span>
                      <ExternalLink size={12} />
                    </a>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
