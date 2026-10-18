import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Check, 
  Copy, 
  MessageSquare, 
  Sparkles,
  ExternalLink,
  ArrowRight
} from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon } from './SocialIcons';
import { portfolioData } from '../data/portfolioData';

const Contact = ({ darkMode }) => {
  const { personalInfo } = portfolioData;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [copiedType, setCopiedType] = useState(null);

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2500);
  };

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    // Simulate successful submission
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 5000);
  };

  const directMailtoLink = `mailto:${personalInfo.email}?subject=${encodeURIComponent(formData.subject || 'Portfolio Inquiry / Collaboration')}&body=${encodeURIComponent(`Hi Aman,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)}`;

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-indigo-400 bg-indigo-500/10 border border-indigo-500/20">
            <Send size={13} />
            Let's Connect
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Get in Touch
          </h2>
          <p className={`text-base sm:text-lg ${
            darkMode ? 'text-slate-400' : 'text-slate-600'
          }`}>
            Have an exciting opportunity, engineering challenge, or research collaboration? Feel free to reach out.
          </p>
        </div>

        <div className=" max-w-6xl mx-auto">
          
          {/* Left Column: Direct Contact Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Status Banner */}
            <div className={`p-6 rounded-2xl border ${
              darkMode ? 'bg-slate-900/80 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
            }`}>
              <div className="flex items-center gap-2.5 mb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wide">
                  Available for High-Impact Roles
                </span>
              </div>
              <h3 className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                Software Engineer II @ HCL Software
              </h3>
              <p className={`text-xs sm:text-sm mt-1 leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                Always eager to discuss scalable fullstack web systems, deep learning medical AI, or distributed software architecture.
              </p>
            </div>

            {/* Direct Channels */}
            <div className="space-y-3">
              
              {/* Email Card */}
              <div className={`p-4 rounded-xl border flex items-center justify-between gap-3 ${
                darkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200'
              }`}>
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                    <Mail size={18} />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-400 block font-medium">Email Address</span>
                    <a 
                      href={`mailto:${personalInfo.email}`} 
                      className={`text-xs sm:text-sm font-semibold hover:underline ${darkMode ? 'text-slate-200' : 'text-slate-800'}`}
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy(personalInfo.email, 'email')}
                  className={`p-2 rounded-lg text-xs font-medium border transition-colors ${
                    darkMode 
                      ? 'bg-slate-800 hover:bg-slate-700 text-slate-300 border-slate-700' 
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border-slate-200'
                  }`}
                  title="Copy email to clipboard"
                >
                  {copiedType === 'email' ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                </button>
              </div>

              {/* Phone Card */}
              <div className={`p-4 rounded-xl border flex items-center justify-between gap-3 ${
                darkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200'
              }`}>
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                    <Phone size={18} />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-400 block font-medium">Phone / WhatsApp</span>
                    <a 
                      href={`tel:${personalInfo.phone}`} 
                      className={`text-xs sm:text-sm font-semibold hover:underline ${darkMode ? 'text-slate-200' : 'text-slate-800'}`}
                    >
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy(personalInfo.phone, 'phone')}
                  className={`p-2 rounded-lg text-xs font-medium border transition-colors ${
                    darkMode 
                      ? 'bg-slate-800 hover:bg-slate-700 text-slate-300 border-slate-700' 
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border-slate-200'
                  }`}
                  title="Copy phone to clipboard"
                >
                  {copiedType === 'phone' ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                </button>
              </div>

              {/* Location Card */}
              <div className={`p-4 rounded-xl border flex items-center gap-3 ${
                darkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200'
              }`}>
                <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
                  <MapPin size={18} />
                </div>
                <div>
                  <span className="text-[11px] text-slate-400 block font-medium">Location</span>
                  <span className={`text-xs sm:text-sm font-semibold ${darkMode ? 'text-slate-200' : 'text-slate-800'}`}>
                    {personalInfo.location}
                  </span>
                </div>
              </div>

            </div>

            {/* Social Links */}
            <div className="pt-2">
              <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider block mb-3">
                Professional Profiles
              </span>
              <div className="flex flex-wrap gap-2.5">
                <a
                  href={personalInfo.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold border transition-all ${
                    darkMode 
                      ? 'bg-slate-900/80 border-slate-800 hover:border-indigo-500/50 text-slate-200' 
                      : 'bg-white border-slate-200 hover:border-indigo-400 text-slate-800'
                  }`}
                >
                  <LinkedinIcon size={15} className="text-indigo-400" />
                  <span>LinkedIn</span>
                  <ExternalLink size={12} className="text-slate-500" />
                </a>

                <a
                  href={personalInfo.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold border transition-all ${
                    darkMode 
                      ? 'bg-slate-900/80 border-slate-800 hover:border-indigo-500/50 text-slate-200' 
                      : 'bg-white border-slate-200 hover:border-indigo-400 text-slate-800'
                  }`}
                >
                  <GithubIcon size={15} className="text-cyan-400" />
                  <span>GitHub</span>
                  <ExternalLink size={12} className="text-slate-500" />
                </a>

                <a
                  href={personalInfo.socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold border transition-all ${
                    darkMode 
                      ? 'bg-slate-900/80 border-slate-800 hover:border-pink-500/50 text-slate-200' 
                      : 'bg-white border-slate-200 hover:border-pink-400 text-slate-800'
                  }`}
                >
                  <InstagramIcon size={15} className="text-pink-400" />
                  <span>Instagram</span>
                  <ExternalLink size={12} className="text-slate-500" />
                </a>
              </div>
            </div>

          </div>

          

        </div>

      </div>
    </section>
  );
};

export default Contact;
