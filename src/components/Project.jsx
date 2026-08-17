// components/Projects.jsx
import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  FaGithub, 
  FaExternalLinkAlt,
  FaServer,
  FaGlobe,
  FaDatabase,
  FaLock,
  FaCloud,
  FaRocket,
  FaCode
} from 'react-icons/fa';
import { SiReact, SiTailwindcss, SiNodedotjs, SiMongodb } from 'react-icons/si';
import { useTheme } from '../context/ThemeContext';

export default function Projects() {
  const { isDark } = useTheme();
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  // Projects Data - Removed Weather Dashboard and Cybersecurity Dashboard
  const projects = [
    {
      id: 1,
      title: 'Backend API',
      description: 'RESTful API built with Node.js, Express, and MongoDB. Features JWT authentication, role-based authorization, and complete CRUD operations with proper error handling.',
      icon: '🚀',
      category: 'Backend',
      tech: ['Node.js', 'Express', 'MongoDB', 'JWT'],
      status: 'Live',
      github: 'https://github.com/ShaniyaSharma/sharma_backend.git',
      demo: 'https://your-demo-link.com',
      features: [
        'User Authentication & Authorization',
        'JWT Token Management',
        'Password Encryption with Bcrypt',
        'CRUD Operations',
        'Input Validation',
        'Error Handling Middleware',
        'MongoDB Database Integration'
      ]
    },
    {
      id: 2,
      title: 'Google Website Clone',
      description: 'A responsive Google homepage clone with search functionality, voice search, and dark mode support. Built with React and Tailwind CSS.',
      icon: '🔍',
      category: 'Frontend',
      tech: ['React', 'Tailwind CSS', 'Framer Motion'],
      status: 'Completed',
      github: 'https://github.com/ShaniyaSharma/google-clone.git',
      demo: 'https://your-demo-link.com',
      features: [
        'Google Homepage UI Clone',
        'Search Functionality',
        'Voice Search Integration',
        'Dark/Light Mode',
        'Responsive Design',
        'Google Doodles Display',
        'Keyboard Shortcuts'
      ]
    },
    {
      id: 3,
      title: 'Portfolio Website',
      description: 'Modern portfolio website with dark/light mode, smooth animations, and responsive design. Built with React, Tailwind CSS, and Framer Motion.',
      icon: '🎨',
      category: 'Frontend',
      tech: ['React', 'Tailwind CSS', 'Framer Motion'],
      status: 'Completed',
      github: 'https://github.com/ShaniyaSharma/shaniya_portfolio.git',
      demo: 'https://your-portfolio-link.com',
      features: [
        'Dark/Light Mode Toggle',
        'Smooth Animations',
        'Responsive Design',
        'Interactive UI',
        'Project Showcase',
        'Contact Form'
      ]
    }
  ];

  // Get tech icon - simplified to only use confirmed icons
  const getTechIcon = (tech) => {
    const icons = {
      'React': <SiReact className="inline mr-1 text-blue-400" />,
      'Node.js': <SiNodedotjs className="inline mr-1 text-green-500" />,
      'Tailwind CSS': <SiTailwindcss className="inline mr-1 text-cyan-400" />,
      'MongoDB': <SiMongodb className="inline mr-1 text-green-500" />,
    };
    return icons[tech] || null;
  };

  // Container Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 20,
      },
    },
  };

  return (
    <section id="projects" className="relative min-h-screen py-20 overflow-hidden">
      {/* Background - Same as other sections */}
      <div className={`absolute inset-0 ${
        isDark ? 'bg-black' : 'bg-gray-50'
      }`}>
        {/* Floating particles */}
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
            className={`absolute rounded-full ${
              isDark 
                ? 'bg-orange-400/10' 
                : 'bg-orange-400/15'
            }`}
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: particle.size,
              height: particle.size,
              animation: `float ${particle.duration}s ease-in-out ${particle.delay}s infinite`,
            }}
          />
        ))}
        
        {/* Animated circles */}
        <div
          className={`absolute top-20 right-20 w-96 h-96 rounded-full blur-3xl ${
            isDark ? 'bg-orange-500/20' : 'bg-orange-300/30'
          }`}
          style={{
            animation: 'pulse 8s ease-in-out infinite alternate'
          }}
        />
        <div
          className={`absolute bottom-20 left-20 w-80 h-80 rounded-full blur-3xl ${
            isDark ? 'bg-yellow-500/20' : 'bg-yellow-300/30'
          }`}
          style={{
            animation: 'pulse 6s ease-in-out infinite alternate-reverse'
          }}
        />
      </div>

      <div ref={ref} className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : { scale: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block"
          >
            <span className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium ${
              isDark 
                ? 'bg-orange-500/20 text-orange-300 border border-orange-500/30' 
                : 'bg-orange-100 text-orange-700 border border-orange-200'
            }`}>
              <FaRocket className="w-4 h-4" />
              My Projects
            </span>
          </motion.div>
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{ delay: 0.2 }}
            className={`text-4xl md:text-5xl font-bold mt-4 mb-4 ${
              isDark ? 'text-orange-100' : 'text-gray-800'
            }`}
          >
            Featured Projects
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: '80px' } : { width: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className={`h-1 mx-auto rounded-full ${
              isDark ? 'bg-orange-400' : 'bg-orange-500'
            }`}
          />
          <p className={`text-lg mt-4 max-w-2xl mx-auto ${
            isDark ? 'text-orange-300/70' : 'text-gray-600'
          }`}>
            Here are some of my recent projects showcasing my skills
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className={`group p-6 rounded-2xl transition-all duration-300 ${
                isDark 
                  ? 'bg-white/5 backdrop-blur-sm border border-orange-500/20 hover:border-orange-400/40 hover:bg-white/10' 
                  : 'bg-white/80 backdrop-blur-sm shadow-xl border border-orange-200/50 hover:border-orange-300 hover:shadow-2xl'
              }`}
            >
              {/* Project Icon & Status */}
              <div className="flex items-start justify-between mb-4">
                <div className="text-4xl">{project.icon}</div>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  project.status === 'Live'
                    ? isDark 
                      ? 'bg-green-500/20 text-green-300' 
                      : 'bg-green-100 text-green-700'
                    : project.status === 'Completed'
                    ? isDark 
                      ? 'bg-blue-500/20 text-blue-300' 
                      : 'bg-blue-100 text-blue-700'
                    : isDark 
                      ? 'bg-yellow-500/20 text-yellow-300' 
                      : 'bg-yellow-100 text-yellow-700'
                }`}>
                  {project.status}
                </span>
              </div>

              {/* Project Category */}
              <div className={`inline-block px-2 py-0.5 rounded-md text-xs font-medium mb-2 ${
                isDark 
                  ? 'bg-orange-500/10 text-orange-300 border border-orange-500/20' 
                  : 'bg-orange-100 text-orange-700 border border-orange-200'
              }`}>
                {project.category}
              </div>

              {/* Title & Description */}
              <h3 className={`text-xl font-semibold mb-2 ${
                isDark ? 'text-orange-100' : 'text-gray-800'
              }`}>
                {project.title}
              </h3>
              <p className={`text-sm mb-3 ${
                isDark ? 'text-orange-300/70' : 'text-gray-600'
              }`}>
                {project.description}
              </p>

              {/* Features List */}
              <div className="mb-4">
                <p className={`text-xs font-medium mb-1 ${
                  isDark ? 'text-orange-300/50' : 'text-gray-500'
                }`}>
                  Key Features:
                </p>
                <div className="flex flex-wrap gap-1">
                  {project.features.slice(0, 3).map((feature, i) => (
                    <span
                      key={i}
                      className={`text-xs px-2 py-0.5 rounded-full ${
                        isDark 
                          ? 'bg-orange-500/5 text-orange-300/60 border border-orange-500/10' 
                          : 'bg-orange-50 text-gray-600 border border-orange-100'
                      }`}
                    >
                      {feature}
                    </span>
                  ))}
                  {project.features.length > 3 && (
                    <span className={`text-xs px-2 py-0.5 rounded-full ${
                      isDark 
                        ? 'text-orange-300/40' 
                        : 'text-gray-400'
                    }`}>
                      +{project.features.length - 3} more
                    </span>
                  )}
                </div>
              </div>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className={`inline-flex items-center px-2 py-1 rounded-md text-xs font-medium ${
                      isDark 
                        ? 'bg-orange-500/10 text-orange-300 border border-orange-500/20' 
                        : 'bg-orange-100 text-orange-700 border border-orange-200'
                    }`}
                  >
                    {getTechIcon(tech)}
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex items-center gap-4 pt-3 border-t border-orange-500/10">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-1.5 text-sm font-medium transition-colors ${
                    isDark 
                      ? 'text-orange-400 hover:text-orange-300' 
                      : 'text-orange-600 hover:text-orange-700'
                  }`}
                >
                  <FaGithub className="w-4 h-4" />
                  GitHub
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-1.5 text-sm font-medium transition-colors ${
                    isDark 
                      ? 'text-orange-400 hover:text-orange-300' 
                      : 'text-orange-600 hover:text-orange-700'
                  }`}
                >
                  <FaExternalLinkAlt className="w-4 h-4" />
                  Live Demo
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-12 text-center"
        >
          <p className={`text-lg mb-4 ${
            isDark ? 'text-orange-300/70' : 'text-gray-600'
          }`}>
            Want to see more projects?
          </p>
          <a
            href="https://github.com/ShaniyaSharma"
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
              isDark
                ? 'bg-orange-500 hover:bg-orange-600 text-white shadow-lg shadow-orange-500/30'
                : 'bg-orange-600 hover:bg-orange-700 text-white shadow-lg shadow-orange-600/30'
            }`}
          >
            <FaGithub className="w-5 h-5" />
            View All on GitHub
          </a>
        </motion.div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
            opacity: 0.3;
          }
          50% {
            transform: translateY(-30px) translateX(20px);
            opacity: 0.8;
          }
        }
        @keyframes pulse {
          0% {
            transform: scale(1);
            opacity: 0.3;
          }
          100% {
            transform: scale(1.2);
            opacity: 0.5;
          }
        }
      `}</style>
    </section>
  );
}