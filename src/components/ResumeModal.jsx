import React, { useState } from 'react';
import { X, Printer, Download, Copy, Check, FileText, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const ResumeModal = ({ isOpen, onClose, darkMode }) => {
  const [copied, setCopied] = useState(false);
  const { personalInfo, experience, education, publications, projects, skills, achievements } = portfolioData;

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const resumeText = `
=========================================
AMAN TYAGI - RESUME
=========================================
Email: ${personalInfo.email} | Phone: ${personalInfo.phone}
Current Role: Software Engineer II @ HCL Software
Education: M.Tech (Computer Engineering) @ NIT Kurukshetra (CGPA: 8.36)
           B.Tech (CSE) @ University of Allahabad (CGPA: 8.3)
GATE CS/IT 2024: Qualified with score 525 (Percentile: 96.3)

TECHNICAL SKILLS:
- Languages: C, C++, Python, SQL, JavaScript, TypeScript
- Web Tech: React.js, Next.js, Node.js, Express.js, MongoDB, Tailwind CSS, REST APIs
- AI/ML: PyTorch, CNN, EfficientNet-B3, LangChain, Groq LLaMA3, OpenCV
- Core CS: Operating Systems, Computer Networks, OOPS, DBMS, System Design, DSA

WORK EXPERIENCE:
1. Software Engineer II | HCL Software (Present)
   - Architecting enterprise full-stack web applications and microservices.
   - Optimizing React.js interfaces, RESTful API integration, and performance.
2. Graduate Teaching Assistant | NIT Kurukshetra (2024 - 2026)
   - Mentored 100+ undergraduate engineers in DSA, C++, and core CS concepts.

PUBLICATIONS:
- Diabetic Retinopathy Classification & Grading Using EfficientNet-B3 (90% Validation Accuracy, Messidor Dataset)
- Automated Screening & Lesion Feature Extraction for Early-Stage Diabetic Retinopathy

KEY PROJECTS:
- Uber Clone Application (MERN Stack, Real-time Geolocation, Ride Booking, Auth)
- Diabetic Retinopathy Classification (PyTorch, EfficientNet-B3, Messidor, 90% Acc)
- Multi-Source Text Summarization (LangChain, Groq LLaMA3, Streamlit)
- Food Recipe Web Application (React, Express, MongoDB, REST API)
- Real-Time Weather Intelligence App (React, Tailwind, OpenWeather API)

CODING PLATFORMS:
- 600+ Problems Solved on LeetCode & GeeksforGeeks
- 5 Stars on HackerRank | 3 Stars on GfG (Contest Rating: 1705)
=========================================
`;

  const handleCopy = () => {
    navigator.clipboard.writeText(resumeText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className={`relative w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-2xl border shadow-2xl transition-all my-8 ${
        darkMode ? 'bg-slate-900 border-slate-800 text-slate-100' : 'bg-white border-slate-200 text-slate-900'
      }`}>
        
        {/* Top Action Bar */}
        <div className="sticky top-0 z-10 flex items-center justify-between px-6 py-4 border-b bg-inherit backdrop-blur-md">
          <div className="flex items-center gap-2">
            <FileText size={18} className="text-indigo-400" />
            <h3 className="font-bold text-sm sm:text-base">Aman Tyagi - Professional Resume</h3>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
                darkMode ? 'border-slate-700 bg-slate-800 text-slate-300 hover:text-white' : 'border-slate-300 bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
              <span>{copied ? 'Copied Text' : 'Copy Text'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-indigo-600 hover:bg-indigo-500 text-white shadow-sm transition-all"
            >
              <Printer size={14} />
              <span>Print / PDF</span>
            </button>

            <button
              onClick={onClose}
              className={`p-1.5 rounded-lg transition-colors ml-1 ${
                darkMode ? 'hover:bg-slate-800 text-slate-400 hover:text-white' : 'hover:bg-slate-100 text-slate-600 hover:text-slate-900'
              }`}
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Printable Resume Content */}
        <div className="p-6 sm:p-10 space-y-6 text-sm">
          
          {/* Header */}
          <div className="text-center pb-6 border-b border-slate-700/60 space-y-2">
            <h1 className="text-3xl font-extrabold tracking-tight">AMAN TYAGI</h1>
            <p className="text-indigo-400 font-semibold text-sm">
              Software Engineer II @ HCL Software | M.Tech Computer Engineering (NIT Kurukshetra)
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-slate-400 pt-1">
              <span className="flex items-center gap-1">
                <Phone size={12} /> {personalInfo.phone}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Mail size={12} /> {personalInfo.email}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <MapPin size={12} /> {personalInfo.location}
              </span>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-wider text-indigo-400 border-b border-indigo-500/20 pb-1">
              Education
            </h2>
            <div className="space-y-2.5">
              {education.map((edu, idx) => (
                <div key={idx} className="flex justify-between items-start text-xs sm:text-sm">
                  <div>
                    <strong className="block font-semibold">{edu.institution}</strong>
                    <span className="text-slate-400">{edu.degree}</span>
                  </div>
                  <div className="text-right">
                    <span className="font-mono-code font-bold text-emerald-400 block">{edu.grade}</span>
                    <span className="text-[11px] text-slate-400">{edu.period}</span>
                  </div>
                </div>
              ))}
              <div className="pt-1 text-xs text-slate-300">
                <strong>GATE CS/IT 2024:</strong> Qualified with Score 525 | Percentile: <strong>96.3</strong>
              </div>
            </div>
          </div>

          {/* Work Experience */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-wider text-indigo-400 border-b border-indigo-500/20 pb-1">
              Work & Academic Experience
            </h2>
            <div className="space-y-3">
              {experience.map((exp) => (
                <div key={exp.id} className="text-xs sm:text-sm space-y-1">
                  <div className="flex justify-between items-baseline">
                    <strong className="font-bold">{exp.role} — {exp.company}</strong>
                    <span className="text-[11px] font-mono-code text-slate-400">{exp.period}</span>
                  </div>
                  <ul className="list-disc list-inside text-xs text-slate-300 space-y-1 pl-1">
                    {exp.highlights.map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Research Publications */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-wider text-cyan-400 border-b border-cyan-500/20 pb-1">
              Peer-Reviewed Publications (2 Papers)
            </h2>
            <div className="space-y-2">
              {publications.map((paper) => (
                <div key={paper.id} className="text-xs text-slate-300 space-y-0.5">
                  <strong className="text-slate-100 block font-semibold">{paper.title}</strong>
                  <span className="text-cyan-400 text-[11px] block">{paper.venue} ({paper.year})</span>
                  <p className="text-[11px] text-slate-400 leading-relaxed">{paper.abstract}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Key Projects */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-wider text-indigo-400 border-b border-indigo-500/20 pb-1">
              Key Projects
            </h2>
            <div className="space-y-2 text-xs">
              {projects.map((proj) => (
                <div key={proj.id} className="space-y-0.5">
                  <div className="flex justify-between">
                    <strong className="font-semibold text-slate-100">{proj.title}</strong>
                    <span className="font-mono-code text-[11px] text-slate-400">{proj.technologies.slice(0, 3).join(', ')}</span>
                  </div>
                  <p className="text-slate-300 text-[11px]">{proj.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills */}
          <div className="space-y-2 text-xs">
            <h2 className="text-xs font-bold uppercase tracking-wider text-indigo-400 border-b border-indigo-500/20 pb-1">
              Technical Skills
            </h2>
            <div className="space-y-1 text-slate-300">
              <p><strong>Languages:</strong> C, C++, Python, SQL, JavaScript, TypeScript</p>
              <p><strong>Web Tech:</strong> React.js, Next.js, Node.js, Express.js, MongoDB, Tailwind CSS, REST APIs</p>
              <p><strong>AI / ML:</strong> PyTorch, CNN, EfficientNet-B3, LangChain, Groq LLaMA3, Scikit-Learn, OpenCV</p>
              <p><strong>Core CS:</strong> Operating Systems, Computer Networks, OOPS, DBMS, DSA, System Design</p>
            </div>
          </div>

          {/* Competitive Platform Activity */}
          <div className="space-y-2 text-xs">
            <h2 className="text-xs font-bold uppercase tracking-wider text-amber-400 border-b border-amber-500/20 pb-1">
              Coding Platform Activity & Achievements
            </h2>
            <div className="space-y-1 text-slate-300">
              <p>• <strong>LeetCode & GeeksforGeeks:</strong> 600+ DSA Coding Problems Solved</p>
              <p>• <strong>HackerRank:</strong> 5 Stars in Problem Solving</p>
              <p>• <strong>GeeksforGeeks:</strong> 3 Stars, Contest Rating 1705</p>
              <p>• <strong>GATE CS/IT 2024:</strong> 96.3 Percentile (Score: 525)</p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default ResumeModal;
