// src/App.jsx
import React from 'react';
import { useTheme } from './context/ThemeContext.jsx';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Skills from './components/Skills.jsx';
import Experience from './components/Experience.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';

function App() {
  const { isDark } = useTheme();

  return (
    <div className="min-h-screen transition-colors duration-300">
      {/* Background */}
      <div className={`fixed inset-0 -z-10 ${isDark ? 'bg-black' : 'bg-gray-50'}`}>
        {Array.from({ length: 25 }, (_, i) => ({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 4 + 2,
          duration: Math.random() * 10 + 10,
          delay: Math.random() * 5,
        })).map((particle) => (
          <div
            key={particle.id}
            className={`absolute rounded-full ${isDark ? 'bg-orange-400/10' : 'bg-orange-400/15'}`}
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: particle.size,
              height: particle.size,
              animation: `float ${particle.duration}s ease-in-out ${particle.delay}s infinite`,
            }}
          />
        ))}
        <div
          className={`absolute top-20 right-20 w-96 h-96 rounded-full blur-3xl ${isDark ? 'bg-orange-500/20' : 'bg-orange-300/30'}`}
          style={{ animation: 'pulse 8s ease-in-out infinite alternate' }}
        />
        <div
          className={`absolute bottom-20 left-20 w-80 h-80 rounded-full blur-3xl ${isDark ? 'bg-yellow-500/20' : 'bg-yellow-300/30'}`}
          style={{ animation: 'pulse 6s ease-in-out infinite alternate-reverse' }}
        />
      </div>

      <Navbar />
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <Contact />

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0.3; }
          50% { transform: translateY(-30px) translateX(20px); opacity: 0.8; }
        }
        @keyframes pulse {
          0% { transform: scale(1); opacity: 0.3; }
          100% { transform: scale(1.2); opacity: 0.5; }
        }
      `}</style>
    </div>
  );
}

export default App;