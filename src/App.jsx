// src/App.jsx
import React from 'react';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Project from './components/Project';
import Contact from './components/Contact';

function AppContent() {
  const { isDark } = useTheme();
  
  return (
    <div className="min-h-screen transition-colors duration-300">
      <div className={`fixed inset-0 -z-10 ${isDark ? 'bg-black' : 'bg-gray-50'}`}>
        {/* Background animations */}
      </div>
      <Navbar />
      <Hero />
      <Skills />
      <Experience />
      <Project />
      <Contact />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;