import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ChatBot from './components/ChatBot';
import Navigation from './components/Navigation';
import Experince from './components/Experience';
import Education from './components/Education';
import { EDUCATION, EXPERIENCES, PERSONAL_INFO, PROJECTS, SKILLS } from './utils/constants';

function App() {
  return (
    <div className="min-h-screen bg-doodle-pattern text-[#9EA8B6] selection:bg-[#00C4CC]/30 selection:text-white">
    <Navigation />
    <Hero />

    {/* About Section */}
    <About />

    {/* Projects Section */}
   <Projects />

    {/* Skills Section */}
   <Skills />

    {/* Experience Section */}
   <Experince />

    {/* Education Section */}
   <Education />

    {/* Contact Section */}
   <Contact />

    {/* Footer */}
    <footer className="py-16 border-t border-[#283141] bg-[#12161E]/95 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-2xl font-black text-[#00C4CC] mb-6">AM.</p>
        <p className="text-slate-400 font-medium">© {new Date().getFullYear()} {PERSONAL_INFO.name}.</p>
        <p className="text-xs text-slate-500 mt-4 uppercase tracking-[0.2em]">{PERSONAL_INFO.location} • Full Stack Developer</p>
      </div>
    </footer>

    {/* AI Assistant */}
    <ChatBot />
  </div>
  );
}

export default App;
