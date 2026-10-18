import React, { useState } from 'react';
import { 
  Code2, 
  Globe, 
  BrainCircuit, 
  Cpu, 
  Wrench, 
  Users, 
  Sparkles,
  CheckCircle2,
  Terminal
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Skills = ({ darkMode }) => {
  const { skills } = portfolioData;
  const [activeTab, setActiveTab] = useState('all');

  const tabList = [
    { id: 'all', name: 'All Skills', icon: Sparkles },
    { id: 'languages', name: 'Languages', icon: Code2 },
    { id: 'web', name: 'Web & Full Stack', icon: Globe },
    { id: 'ai', name: 'AI & Deep Learning', icon: BrainCircuit },
    { id: 'core', name: 'Core CS & DSA', icon: Cpu },
    { id: 'tools', name: 'Tools & Workflow', icon: Wrench },
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 border border-emerald-500/20">
            <Code2 size={13} />
            Technical Arsenal
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Skills & Core Competencies
          </h2>
          <p className={`text-base sm:text-lg ${
            darkMode ? 'text-slate-400' : 'text-slate-600'
          }`}>
            A comprehensive overview of programming languages, web frameworks, deep learning architectures, and foundational computer science topics.
          </p>
        </div>

        {/* Tab Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {tabList.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  isActive
                    ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/30 scale-105'
                    : darkMode
                      ? 'bg-slate-900/80 text-slate-300 hover:bg-slate-800 border border-slate-800'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200'
                }`}
              >
                <Icon size={14} />
                <span>{tab.name}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Programming Languages */}
          {(activeTab === 'all' || activeTab === 'languages') && (
            <div className={`p-6 rounded-2xl border transition-all ${
              darkMode ? 'bg-slate-900/80 border-slate-800' : 'bg-white border-slate-200 shadow-md'
            }`}>
              <div className="flex items-center gap-3 mb-5 pb-3 border-b border-slate-800/60">
                <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                  <Code2 size={20} />
                </div>
                <div>
                  <h3 className={`text-base font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                    Programming Languages
                  </h3>
                  <span className="text-xs text-slate-400">Object-Oriented & Scripting</span>
                </div>
              </div>

              <div className="space-y-3">
                {skills.languages.map((lang) => (
                  <div key={lang.name} className="flex items-center justify-between text-xs">
                    <span className={`font-mono-code font-semibold ${darkMode ? 'text-slate-200' : 'text-slate-800'}`}>
                      {lang.name}
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] text-slate-400">{lang.experience}</span>
                      <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                        {lang.level}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Web Technologies */}
          {(activeTab === 'all' || activeTab === 'web') && (
            <div className={`p-6 rounded-2xl border transition-all ${
              darkMode ? 'bg-slate-900/80 border-slate-800' : 'bg-white border-slate-200 shadow-md'
            }`}>
              <div className="flex items-center gap-3 mb-5 pb-3 border-b border-slate-800/60">
                <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  <Globe size={20} />
                </div>
                <div>
                  <h3 className={`text-base font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                    Web & Full-Stack Tech
                  </h3>
                  <span className="text-xs text-slate-400">Frontend, Backend & DB</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2.5">
                {skills.webTechnologies.map((tech) => (
                  <div
                    key={tech.name}
                    className={`p-2.5 rounded-xl border text-xs flex flex-col justify-between ${
                      darkMode ? 'bg-slate-950/60 border-slate-800/80' : 'bg-slate-50 border-slate-200'
                    }`}
                  >
                    <span className={`font-semibold font-mono-code ${darkMode ? 'text-slate-200' : 'text-slate-800'}`}>
                      {tech.name}
                    </span>
                    <span className="text-[10px] text-cyan-400 mt-1 font-medium">
                      {tech.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* AI & Deep Learning */}
          {(activeTab === 'all' || activeTab === 'ai') && (
            <div className={`p-6 rounded-2xl border transition-all ${
              darkMode ? 'bg-slate-900/80 border-slate-800' : 'bg-white border-slate-200 shadow-md'
            }`}>
              <div className="flex items-center gap-3 mb-5 pb-3 border-b border-slate-800/60">
                <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
                  <BrainCircuit size={20} />
                </div>
                <div>
                  <h3 className={`text-base font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                    AI & Deep Learning
                  </h3>
                  <span className="text-xs text-slate-400">Vision, Transfer Learning & LLMs</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {skills.aiAndDataScience.map((ai) => (
                  <span
                    key={ai.name}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium border flex items-center gap-1.5 ${
                      darkMode 
                        ? 'bg-purple-950/20 border-purple-500/30 text-purple-300' 
                        : 'bg-purple-50 border-purple-200 text-purple-900'
                    }`}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
                    {ai.name}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Core CS Fundamentals */}
          {(activeTab === 'all' || activeTab === 'core') && (
            <div className={`p-6 rounded-2xl border transition-all md:col-span-2 lg:col-span-2 ${
              darkMode ? 'bg-slate-900/80 border-slate-800' : 'bg-white border-slate-200 shadow-md'
            }`}>
              <div className="flex items-center gap-3 mb-5 pb-3 border-b border-slate-800/60">
                <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  <Cpu size={20} />
                </div>
                <div>
                  <h3 className={`text-base font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                    Core Computer Science & Systems
                  </h3>
                  <span className="text-xs text-slate-400">Key Areas of Academic & Engineering Mastery</span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {skills.coreFundamentals.map((core) => (
                  <div
                    key={core.name}
                    className={`p-3 rounded-xl border ${
                      darkMode ? 'bg-slate-950/60 border-slate-800' : 'bg-slate-50 border-slate-200'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className={`font-semibold text-xs sm:text-sm ${darkMode ? 'text-slate-200' : 'text-slate-900'}`}>
                        {core.name}
                      </span>
                      <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                        {core.level}
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-400 mt-1">
                      {core.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tools & DevOps */}
          {(activeTab === 'all' || activeTab === 'tools') && (
            <div className={`p-6 rounded-2xl border transition-all ${
              darkMode ? 'bg-slate-900/80 border-slate-800' : 'bg-white border-slate-200 shadow-md'
            }`}>
              <div className="flex items-center gap-3 mb-5 pb-3 border-b border-slate-800/60">
                <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
                  <Wrench size={20} />
                </div>
                <div>
                  <h3 className={`text-base font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                    Tools & Environments
                  </h3>
                  <span className="text-xs text-slate-400">DevOps & Productive Workflows</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {skills.toolsAndWorkflow.map((tool) => (
                  <span
                    key={tool.name}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono-code border ${
                      darkMode 
                        ? 'bg-slate-800/80 border-slate-700/80 text-slate-300' 
                        : 'bg-slate-100 border-slate-200 text-slate-700'
                    }`}
                  >
                    {tool.name}
                  </span>
                ))}
              </div>

              {/* Soft skills */}
              <div className="pt-3 border-t border-slate-800/60">
                <div className="text-xs text-slate-400 font-semibold uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Users size={12} />
                  Soft Skills:
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {skills.softSkills.map((ss) => (
                    <span 
                      key={ss}
                      className="text-[11px] px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                    >
                      {ss}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          )}

        </div>

      </div>
    </section>
  );
};

export default Skills;
