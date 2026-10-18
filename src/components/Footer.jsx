import React from 'react';
import { ArrowUp, Heart, Code2, Sparkles, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon } from './SocialIcons';
import { portfolioData } from '../data/portfolioData';

const Footer = ({ darkMode }) => {
  const { personalInfo } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={`border-t py-12 transition-colors ${
      darkMode ? 'bg-slate-950 border-slate-800/80' : 'bg-slate-50 border-slate-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800/60">
          
          {/* Brand Info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-1">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-bold text-sm">
                AT
              </div>
              <span className={`text-lg font-bold tracking-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                {personalInfo.name}
              </span>
            </div>
            <p className="text-xs text-slate-400">
              Software Engineer II @ HCL Software • M.Tech Computer Engg (NIT Kurukshetra)
            </p>
          </div>

          {/* Socials & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2.5 rounded-xl border transition-colors ${
                darkMode ? 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white' : 'bg-white border-slate-200 text-slate-600 hover:text-slate-900'
              }`}
              title="LinkedIn"
            >
              <LinkedinIcon size={16} />
            </a>

            <a
              href={personalInfo.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2.5 rounded-xl border transition-colors ${
                darkMode ? 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white' : 'bg-white border-slate-200 text-slate-600 hover:text-slate-900'
              }`}
              title="GitHub"
            >
              <GithubIcon size={16} />
            </a>

            <a
              href={personalInfo.socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2.5 rounded-xl border transition-colors ${
                darkMode ? 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white' : 'bg-white border-slate-200 text-slate-600 hover:text-slate-900'
              }`}
              title="Instagram"
            >
              <InstagramIcon size={16} />
            </a>

            <a
              href={`mailto:${personalInfo.email}`}
              className={`p-2.5 rounded-xl border transition-colors ${
                darkMode ? 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white' : 'bg-white border-slate-200 text-slate-600 hover:text-slate-900'
              }`}
              title="Email"
            >
              <Mail size={16} />
            </a>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-indigo-600 hover:bg-indigo-500 text-white shadow-md shadow-indigo-600/30 transition-all ml-2"
              title="Scroll to Top"
            >
              <span>Back to Top</span>
              <ArrowUp size={14} />
            </button>
          </div>

        </div>

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4 text-center sm:text-left">
          <div>
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
