import React from 'react';
import { 
  ArrowRight, 
  Download, 
  FolderGit2, 
  BookOpen, 
  Sparkles,
  ExternalLink,
  Code2,
  Mail,
  MapPin,
  Briefcase,
  CheckCircle2,
  GraduationCap
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Hero = ({ darkMode, onOpenResume }) => {
  const { personalInfo } = portfolioData;

  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      {/* Background Decorative Gradients & Grid */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-indigo-600/20 via-purple-600/15 to-cyan-500/10 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-10 right-10 w-72 h-72 bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headlines & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Status Pills */}
            <div className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
              <span className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold border tracking-wide transition-all ${
                darkMode 
                  ? 'bg-slate-900/80 border-slate-700/80 text-slate-200 shadow-sm shadow-indigo-500/10' 
                  : 'bg-indigo-50/90 border-indigo-200/90 text-indigo-900 shadow-sm'
              }`}>
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                Software Engineer II @ HCL Software
              </span>
              <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border ${
                darkMode 
                  ? 'bg-slate-900/40 border-slate-800 text-slate-400' 
                  : 'bg-slate-100 border-slate-200 text-slate-600'
              }`}>
                <Sparkles size={12} className="text-amber-400" />
                Ex-TA @ NIT Kurukshetra
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.12]">
                <span className={darkMode ? 'text-white' : 'text-slate-900'}>
                  Hi, I'm{' '}
                </span>
                <span className="text-gradient">
                  Aman Tyagi
                </span>
              </h1>
              <p className={`text-xl sm:text-2xl font-medium tracking-tight ${
                darkMode ? 'text-slate-300' : 'text-slate-700'
              }`}>
                Engineering <span className="text-indigo-400 font-semibold">Scalable Web Systems</span> & Pioneering <span className="text-cyan-400 font-semibold">Deep Learning</span> Solutions.
              </p>
            </div>

            {/* Subtitle Bio */}
            <p className={`text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 ${
              darkMode ? 'text-slate-400' : 'text-slate-600'
            }`}>
              Currently architecting enterprise-grade software at <strong className={darkMode ? 'text-slate-200' : 'text-slate-900'}>HCL Software</strong>. 
              Hold an <strong className={darkMode ? 'text-slate-200' : 'text-slate-900'}>M.Tech in Computer Engineering from NIT Kurukshetra</strong>, 
              author of <span className="text-indigo-400 font-medium">2 published research papers</span> on Diabetic Retinopathy (94% validation accuracy), 
              and solved <span className="text-indigo-400 font-medium">600+ algorithmic problems</span>.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4">
              <button
                onClick={() => scrollTo('#projects')}
                className="flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-indigo-600 hover:from-indigo-500 hover:to-indigo-500 text-white font-semibold text-sm shadow-lg shadow-indigo-600/30 hover:shadow-indigo-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <FolderGit2 size={16} />
                <span>Explore Projects</span>
                <ArrowRight size={15} />
              </button>

              <button
                onClick={() => scrollTo('#research')}
                className={`flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm border transition-all ${
                  darkMode 
                    ? 'border-cyan-500/30 bg-cyan-950/20 text-cyan-300 hover:bg-cyan-500/10 hover:border-cyan-500/50' 
                    : 'border-cyan-300 bg-cyan-50 text-cyan-800 hover:bg-cyan-100'
                }`}
              >
                <BookOpen size={16} />
                <span>View Research (2 Papers)</span>
              </button>

              <button
                onClick={onOpenResume}
                className={`flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm border transition-all ${
                  darkMode 
                    ? 'border-slate-700 bg-slate-900/60 text-slate-200 hover:bg-slate-800 hover:border-slate-600' 
                    : 'border-slate-300 bg-white text-slate-800 hover:bg-slate-50'
                }`}
              >
                <Download size={15} />
                <span>Resume</span>
              </button>
            </div>

            {/* Quick Contact Chips */}
            <div className={`pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs ${
              darkMode ? 'text-slate-400' : 'text-slate-600'
            }`}>
              <span className="flex items-center gap-1.5">
                <MapPin size={13} className="text-indigo-400" />
                India (NIT KKR / HCL)
              </span>
              <span className="flex items-center gap-1.5">
                <Mail size={13} className="text-cyan-400" />
                <a href={`mailto:${personalInfo.email}`} className="hover:underline">{personalInfo.email}</a>
              </span>
              <span className="flex items-center gap-1.5">
                <Briefcase size={13} className="text-emerald-400" />
                Available for Tech Leadership & Fullstack/AI Roles
              </span>
            </div>

          </div>

          {/* Right Column: Profile Image Card with Ambient Glow & Floating Badges */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm sm:max-w-md group">
              
              {/* Ambient Glow behind image */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 rounded-3xl blur-xl opacity-35 group-hover:opacity-60 transition duration-500 animate-pulse-slow"></div>

              {/* Main Card Frame */}
              <div className={`relative rounded-3xl border overflow-hidden shadow-2xl transition-all duration-300 ${
                darkMode 
                  ? 'bg-slate-900/90 border-slate-800' 
                  : 'bg-white border-slate-200'
              }`}>
                {/* Profile Photo */}
                <div className="relative h-96 sm:h-[430px] w-full overflow-hidden bg-slate-950">
                  <img
                    src={personalInfo.profileImage || "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80"}
                    alt={personalInfo.name}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                  
                  
                </div>

                {/* Card Sub-Bar */}
                <div className={`px-5 py-3 border-t flex items-center justify-between text-xs font-mono-code ${
                  darkMode ? 'bg-slate-950/60 border-slate-800 text-slate-400' : 'bg-slate-50 border-slate-200 text-slate-600'
                }`}>
                  <span className="flex items-center gap-1.5 text-indigo-400 font-semibold">
                    <Sparkles size={13} />
                    Ready for Opportunities
                  </span>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
