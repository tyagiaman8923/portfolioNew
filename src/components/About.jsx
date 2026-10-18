import React from 'react';
import { 
  Code2, 
  BrainCircuit, 
  Terminal, 
  GraduationCap, 
  Briefcase, 
  Building, 
  Mail, 
  Phone, 
  MapPin, 
  Award,
  CheckCircle2
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const About = ({ darkMode }) => {
  const { about, personalInfo } = portfolioData;

  const pillarIcons = {
    Code2: Code2,
    BrainCircuit: BrainCircuit,
    Terminal: Terminal,
    GraduationCap: GraduationCap,
  };

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-indigo-400 bg-indigo-500/10 border border-indigo-500/20">
            About Me
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Engineering With Precision & Academic Rigor
          </h2>
          <p className={`text-base sm:text-lg ${
            darkMode ? 'text-slate-400' : 'text-slate-600'
          }`}>
            Blending enterprise software engineering at HCL Software with graduate research at NIT Kurukshetra.
          </p>
        </div>

        {/* Narrative & Profile Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
          
          {/* Left Narrative */}
          <div className="lg:col-span-7 space-y-5">
            {about.paragraphs.map((para, index) => (
              <p 
                key={index} 
                className={`text-base leading-relaxed ${
                  darkMode ? 'text-slate-300' : 'text-slate-700'
                }`}
              >
                {para}
              </p>
            ))}

            {/* Quick check highlights */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "Software Engineer II @ HCL Software",
                "M.Tech (Computer Engg) @ NIT Kurukshetra",
                "2 Published Papers (Diabetic Retinopathy)",
                "Former Teaching Assistant @ NIT Kurukshetra",
                "600+ Algorithmic Problems Solved",
                "GATE CS/IT 2024: 96.3 Percentile"
              ].map((point, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-sm font-medium">
                  <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
                  <span className={darkMode ? 'text-slate-200' : 'text-slate-800'}>{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Info Card */}
          <div className="lg:col-span-5">
            <div className={`p-6 sm:p-8 rounded-2xl border shadow-xl ${
              darkMode 
                ? 'bg-slate-900/80 border-slate-800 backdrop-blur-md' 
                : 'bg-white border-slate-200 backdrop-blur-md'
            }`}>
              <div className="flex items-center gap-4 pb-6 border-b border-slate-800/80">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-cyan-400 flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-indigo-600/30">
                  AT
                </div>
                <div>
                  <h3 className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                    {personalInfo.name}
                  </h3>
                  <p className="text-xs text-indigo-400 font-mono-code font-semibold">
                    {personalInfo.role} • {personalInfo.company}
                  </p>
                  <p className="text-xs text-slate-400 mt-0.5">
                    M.Tech (NIT KKR) • B.Tech (Univ of Allahabad)
                  </p>
                </div>
              </div>

              {/* Quick Details List */}
              <div className="py-6 space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <Building size={17} className="text-indigo-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs text-slate-400 block">Current Employer</span>
                    <span className={`font-semibold ${darkMode ? 'text-slate-200' : 'text-slate-800'}`}>
                      HCL Software (Software Engineer II)
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <GraduationCap size={17} className="text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs text-slate-400 block">Post-Graduation</span>
                    <span className={`font-semibold ${darkMode ? 'text-slate-200' : 'text-slate-800'}`}>
                      NIT Kurukshetra (M.Tech Computer Engg - 8.36 CGPA)
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Briefcase size={17} className="text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs text-slate-400 block">Academic Appointment</span>
                    <span className={`font-semibold ${darkMode ? 'text-slate-200' : 'text-slate-800'}`}>
                      Teaching Assistant @ NIT Kurukshetra
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail size={17} className="text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs text-slate-400 block">Email Address</span>
                    <a href={`mailto:${personalInfo.email}`} className="font-semibold text-indigo-400 hover:underline">
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone size={17} className="text-rose-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs text-slate-400 block">Direct Phone</span>
                    <a href={`tel:${personalInfo.phone}`} className={`font-semibold ${darkMode ? 'text-slate-200' : 'text-slate-800'} hover:underline`}>
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin size={17} className="text-purple-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs text-slate-400 block">Location</span>
                    <span className={`font-semibold ${darkMode ? 'text-slate-200' : 'text-slate-800'}`}>
                      {personalInfo.location}
                    </span>
                  </div>
                </div>
              </div>

              {/* Status footer in card */}
              <div className={`pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs ${
                darkMode ? 'text-slate-400' : 'text-slate-500'
              }`}>
                <span>GATE CS/IT 2024: 96.3%ile</span>
                <span className="text-emerald-400 font-medium">Verified Credentials</span>
              </div>
            </div>
          </div>

        </div>

        {/* 4 Pillars of Excellence */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {about.pillars.map((pillar, index) => {
            const Icon = pillarIcons[pillar.icon] || Code2;
            const gradients = [
              'from-indigo-500/20 to-indigo-500/0 border-indigo-500/20 text-indigo-400',
              'from-cyan-500/20 to-cyan-500/0 border-cyan-500/20 text-cyan-400',
              'from-emerald-500/20 to-emerald-500/0 border-emerald-500/20 text-emerald-400',
              'from-purple-500/20 to-purple-500/0 border-purple-500/20 text-purple-400'
            ];
            const currentGradient = gradients[index % gradients.length];

            return (
              <div 
                key={pillar.title}
                className={`p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1.5 ${
                  darkMode 
                    ? 'bg-slate-900/60 border-slate-800 hover:border-slate-700' 
                    : 'bg-white border-slate-200 hover:border-slate-300 shadow-sm hover:shadow-md'
                }`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-gradient-to-br ${currentGradient}`}>
                  <Icon size={22} />
                </div>
                <h3 className={`text-base font-bold mb-2 ${
                  darkMode ? 'text-white' : 'text-slate-900'
                }`}>
                  {pillar.title}
                </h3>
                <p className={`text-xs sm:text-sm leading-relaxed ${
                  darkMode ? 'text-slate-400' : 'text-slate-600'
                }`}>
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default About;
