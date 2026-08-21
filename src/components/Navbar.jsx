// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaBars, 
  FaTimes, 
  FaSun, 
  FaMoon,
  FaEnvelope,
  FaHome,
  FaCode,
  FaComment,
  FaBriefcase
} from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';

export default function Navbar() {
  const { isDark, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'Home', href: '#home', icon: FaHome },
    { name: 'Skills', href: '#skills', icon: FaCode },
    { name: 'Experience', href: '#experience', icon: FaBriefcase },
    { name: 'Projects', href: '#projects', icon: FaCode },
    { name: 'Contact', href: '#contact', icon: FaComment },
  ];

  const socialLinks = [
    { icon: FaEnvelope, href: 'mailto:shaniyasharma17@gmail.com', label: 'Email' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = navLinks.map(link => link.href.substring(1));
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navLinks]);

  const handleLinkClick = (href) => {
    setIsOpen(false);
    const section = href.substring(1);
    setActiveSection(section);
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  };

  const navbarVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: 'spring', 
        stiffness: 100, 
        damping: 20 
      }
    }
  };

  const mobileMenuVariants = {
    closed: { 
      opacity: 0,
      x: '100%',
      transition: { 
        type: 'spring', 
        stiffness: 400, 
        damping: 40 
      }
    },
    open: { 
      opacity: 1,
      x: 0,
      transition: { 
        type: 'spring', 
        stiffness: 400, 
        damping: 40,
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const mobileLinkVariants = {
    closed: { x: 20, opacity: 0 },
    open: { x: 0, opacity: 1 }
  };

  return (
    <>
      <motion.nav
        initial="hidden"
        animate="visible"
        variants={navbarVariants}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? `shadow-lg ${isDark ? 'bg-gray-900/95 backdrop-blur-md' : 'bg-white/95 backdrop-blur-md'}`
            : `${isDark ? 'bg-gray-900/80' : 'bg-white/80'} backdrop-blur-sm`
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.a
              href="#home"
              className={`flex items-center space-x-2 text-2xl font-bold ${
                isDark ? 'text-white' : 'text-gray-800'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="sr-only">Logo</span>
              <span className="text-3xl">🚀</span>
              <span>Portfolio</span>
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navLinks.map((link) => {
                const Icon = link.icon;
                const isActive = activeSection === link.href.substring(1);
                return (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(link.href);
                    }}
                    className={`relative px-4 py-2 rounded-lg transition-all duration-200 flex items-center space-x-2 ${
                      isActive
                        ? `${
                            isDark 
                              ? 'text-white bg-gray-700/50' 
                              : 'text-gray-900 bg-gray-200/70'
                          }`
                        : `${
                            isDark 
                              ? 'text-gray-300 hover:text-white hover:bg-gray-700/30' 
                              : 'text-gray-600 hover:text-gray-900 hover:bg-gray-200/50'
                          }`
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{link.name}</span>
                    {isActive && (
                      <motion.div
                        layoutId="activeIndicator"
                        className={`absolute bottom-0 left-0 right-0 h-0.5 ${
                          isDark ? 'bg-gray-400' : 'bg-gray-600'
                        }`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </motion.a>
                );
              })}
            </div>

            {/* Right side - Social & Theme Toggle */}
            <div className="flex items-center space-x-3">
              {/* Social Links - Desktop */}
              <div className="hidden md:flex items-center space-x-2">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-2 rounded-lg transition-colors ${
                        isDark
                          ? 'text-gray-300 hover:text-white hover:bg-gray-700/30'
                          : 'text-gray-600 hover:text-gray-900 hover:bg-gray-200/50'
                      }`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      aria-label={social.label}
                    >
                      <Icon className="w-5 h-5" />
                    </motion.a>
                  );
                })}
              </div>

              {/* Theme Toggle */}
              <motion.button
                onClick={toggleTheme}
                className={`p-2 rounded-lg transition-colors ${
                  isDark
                    ? 'text-yellow-400 hover:bg-yellow-400/10'
                    : 'text-yellow-500 hover:bg-yellow-500/10'
                }`}
                whileHover={{ scale: 1.1, rotate: 180 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Toggle theme"
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={isDark ? 'dark' : 'light'}
                    initial={{ rotate: -180, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 180, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {isDark ? <FaSun className="w-5 h-5" /> : <FaMoon className="w-5 h-5" />}
                  </motion.div>
                </AnimatePresence>
              </motion.button>

              {/* Mobile Menu Toggle */}
              <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className={`md:hidden p-2 rounded-lg transition-colors ${
                  isDark
                    ? 'text-gray-300 hover:bg-gray-700/30'
                    : 'text-gray-600 hover:bg-gray-200/50'
                }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Toggle menu"
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={isOpen ? 'close' : 'open'}
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {isOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
                  </motion.div>
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={mobileMenuVariants}
              className={`md:hidden fixed inset-0 top-16 ${
                isDark ? 'bg-gray-900/95 backdrop-blur-lg' : 'bg-white/95 backdrop-blur-lg'
              }`}
            >
              <div className="container mx-auto px-4 py-8 h-full">
                <div className="flex flex-col space-y-2">
                  {navLinks.map((link) => {
                    const Icon = link.icon;
                    const isActive = activeSection === link.href.substring(1);
                    return (
                      <motion.a
                        key={link.name}
                        href={link.href}
                        onClick={(e) => {
                          e.preventDefault();
                          handleLinkClick(link.href);
                        }}
                        variants={mobileLinkVariants}
                        className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all ${
                          isActive
                            ? `${
                                isDark
                                  ? 'text-white bg-gray-700/50'
                                  : 'text-gray-900 bg-gray-200/70'
                              }`
                            : `${
                                isDark
                                  ? 'text-gray-300 hover:text-white hover:bg-gray-700/30'
                                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-200/50'
                              }`
                        }`}
                        whileHover={{ x: 10 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Icon className="w-5 h-5" />
                        <span className="text-lg font-medium">{link.name}</span>
                      </motion.a>
                    );
                  })}

                  {/* Mobile Social Links */}
                  <div className="pt-6 mt-6 border-t border-gray-700/20">
                    <p className={`text-sm font-medium mb-4 ${
                      isDark ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      Connect with me
                    </p>
                    <div className="flex space-x-4">
                      {socialLinks.map((social) => {
                        const Icon = social.icon;
                        return (
                          <motion.a
                            key={social.label}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`p-3 rounded-lg transition-colors ${
                              isDark
                                ? 'text-gray-300 hover:text-white hover:bg-gray-700/30'
                                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-200/50'
                            }`}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            aria-label={social.label}
                          >
                            <Icon className="w-6 h-6" />
                          </motion.a>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      <div className="h-16" />
    </>
  );
}