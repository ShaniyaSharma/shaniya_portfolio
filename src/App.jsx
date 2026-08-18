// App.jsx
import React from 'react';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Project from './components/Project';
import Contact from './components/Contact';

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

function AppContent() {
  const { isDark } = useTheme();

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDark 
        ? 'bg-gradient-to-br from-black via-gray-900 to-black' 
        : 'bg-gradient-to-br from-amber-50 via-orange-50/50 to-yellow-50'
    }`}>
      <Navbar />
      <Hero />
      <Skills />
      <Experience />
      <Project />
      <Contact />
    </div>
  );
}

export default App;