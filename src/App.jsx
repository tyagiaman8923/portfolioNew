import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HighlightsBar from './components/HighlightsBar';
import About from './components/About';
import Experience from './components/Experience';
import ResearchPublications from './components/ResearchPublications';
import Projects from './components/Projects';
import ProjectModal from './components/ProjectModal';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('aman_portfolio_theme');
    return saved !== null ? JSON.parse(saved) : true;
  });

  const [selectedModalItem, setSelectedModalItem] = useState(null);
  const [modalType, setModalType] = useState('project');
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('aman_portfolio_theme', JSON.stringify(darkMode));
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const handleOpenProject = (project) => {
    setSelectedModalItem(project);
    setModalType('project');
  };

  const handleOpenPaper = (paper) => {
    setSelectedModalItem(paper);
    setModalType('research');
  };

  const handleCloseModal = () => {
    setSelectedModalItem(null);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      darkMode ? 'bg-slate-950 text-slate-100' : 'bg-slate-100 text-slate-900'
    }`}>
      {/* Navigation */}
      <Navbar 
        darkMode={darkMode} 
        setDarkMode={setDarkMode}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      <main>
        {/* Hero Section */}
        <Hero 
          darkMode={darkMode} 
          onOpenResume={() => setIsResumeOpen(true)}
        />

        {/* 4 Impact Metrics Bar */}
        <HighlightsBar darkMode={darkMode} />

        {/* About Section */}
        <About darkMode={darkMode} />

        {/* Work & Teaching Experience */}
        <Experience darkMode={darkMode} />

        {/* Research & Publications (2 Diabetic Retinopathy Papers) */}
        <ResearchPublications 
          darkMode={darkMode}
          onSelectPaper={handleOpenPaper}
        />

        {/* Projects (Uber Clone, Recipe App, Weather App, AI) */}
        <Projects 
          darkMode={darkMode}
          onSelectProject={handleOpenProject}
        />

        {/* Technical Skills & Competencies */}
        <Skills darkMode={darkMode} />

        {/* Education & Qualifications */}
        <Education darkMode={darkMode} />

        {/* Interactive Contact Section */}
        <Contact darkMode={darkMode} />
      </main>

      {/* Footer */}
      <Footer darkMode={darkMode} />

      {/* Case Study & Research Breakdown Modal */}
      <ProjectModal
        isOpen={Boolean(selectedModalItem)}
        item={selectedModalItem}
        type={modalType}
        onClose={handleCloseModal}
        darkMode={darkMode}
      />

      {/* Full Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
        darkMode={darkMode}
      />
    </div>
  );
}

export default App;
