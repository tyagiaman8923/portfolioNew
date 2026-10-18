import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  Moon, 
  Sun, 
  FileText, 
  Send, 
  Code2, 
  GraduationCap, 
  Briefcase, 
  FolderGit2, 
  BookOpen, 
  Award,
  Sparkles
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Navbar = ({ darkMode, setDarkMode, onOpenResume }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['about', 'experience', 'research', 'projects', 'skills', 'achievements', 'education', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about', icon: Sparkles },
    { name: 'Experience', href: '#experience', icon: Briefcase },
    { name: 'Research', href: '#research', icon: BookOpen },
    { name: 'Projects', href: '#projects', icon: FolderGit2 },
    { name: 'Skills', href: '#skills', icon: Code2 },
    { name: 'Education', href: '#education', icon: GraduationCap },
    { name: 'Contact', href: '#contact', icon: Send },
  ];

  const handleNavClick = (href) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? darkMode 
            ? 'bg-slate-950/80 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/20' 
            : 'bg-white/85 backdrop-blur-md border-b border-slate-200/90 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Logo / Brand */}
          <a 
            href="#" 
            className="flex items-center gap-3 group focus:outline-none"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-cyan-400 flex items-center justify-center text-white font-bold text-lg shadow-md shadow-indigo-500/25 group-hover:scale-105 transition-transform">
              AT
            </div>
            <div className="flex flex-col">
              <span className={`font-bold text-lg tracking-tight transition-colors ${
                darkMode ? 'text-white group-hover:text-indigo-400' : 'text-slate-900 group-hover:text-indigo-600'
              }`}>
                {portfolioData.personalInfo.name}
              </span>
              <span className="text-xs font-mono-code text-indigo-400 flex items-center gap-1.5 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                SE II @ HCL Software
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  className={`px-3 py-1.5 text-sm font-medium rounded-lg transition-all duration-200 ${
                    isActive
                      ? darkMode
                        ? 'text-indigo-400 bg-indigo-500/10'
                        : 'text-indigo-600 bg-indigo-50'
                      : darkMode
                        ? 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  {link.name}
                </button>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-2.5">
            {/* Theme Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-xl transition-all ${
                darkMode 
                  ? 'bg-slate-800/80 text-amber-400 hover:bg-slate-700/80 hover:text-amber-300' 
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900'
              }`}
              title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
              aria-label="Toggle Theme"
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            {/* Resume Button */}
            <button
              onClick={onOpenResume}
              className={`flex items-center gap-2 px-3.5 py-2 text-xs font-semibold rounded-xl border transition-all ${
                darkMode 
                  ? 'border-indigo-500/30 text-indigo-300 hover:bg-indigo-500/15 hover:border-indigo-500/60' 
                  : 'border-indigo-200 text-indigo-700 hover:bg-indigo-50 hover:border-indigo-300'
              }`}
            >
              <FileText size={15} />
              <span>Resume</span>
            </button>

            {/* Contact CTA */}
            <button
              onClick={() => handleNavClick('#contact')}
              className="flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-500 text-white shadow-md shadow-indigo-600/25 hover:from-indigo-500 hover:to-indigo-600 hover:shadow-indigo-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <Send size={14} />
              <span>Let's Talk</span>
            </button>
          </div>

          {/* Mobile Menu Hamburger */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-xl transition-all ${
                darkMode 
                  ? 'bg-slate-800 text-amber-400' 
                  : 'bg-slate-100 text-slate-700'
              }`}
              aria-label="Toggle Theme"
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-xl transition-all ${
                darkMode 
                  ? 'text-slate-300 hover:text-white bg-slate-800/80' 
                  : 'text-slate-700 hover:text-slate-900 bg-slate-100'
              }`}
              aria-label="Open Mobile Menu"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div 
          className={`lg:hidden border-b px-4 pt-3 pb-6 space-y-2 transition-all ${
            darkMode 
              ? 'bg-slate-950/95 border-slate-800 backdrop-blur-xl' 
              : 'bg-white/95 border-slate-200 backdrop-blur-xl'
          }`}
        >
          <div className="grid grid-cols-2 gap-2 pt-2 pb-3">
            {navLinks.map((link) => {
              const IconComponent = link.icon;
              return (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  className={`flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${
                    darkMode
                      ? 'text-slate-300 hover:text-white hover:bg-slate-800/70'
                      : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  <IconComponent size={16} className="text-indigo-400" />
                  {link.name}
                </button>
              );
            })}
          </div>

          <div className="flex flex-col sm:hidden gap-2 pt-2 border-t border-slate-800/40">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className={`flex items-center justify-center gap-2 w-full py-2.5 text-sm font-semibold rounded-xl border transition-all ${
                darkMode 
                  ? 'border-indigo-500/30 text-indigo-300 bg-indigo-500/10' 
                  : 'border-indigo-200 text-indigo-700 bg-indigo-50'
              }`}
            >
              <FileText size={16} />
              <span>View & Download Resume</span>
            </button>
            <button
              onClick={() => handleNavClick('#contact')}
              className="flex items-center justify-center gap-2 w-full py-2.5 text-sm font-semibold rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-500 text-white shadow-md shadow-indigo-600/30"
            >
              <Send size={15} />
              <span>Get in Touch</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
