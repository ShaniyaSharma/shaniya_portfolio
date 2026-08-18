// components/Hero.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Download, 
  ArrowRight,
  Code2,
  Briefcase,
  Users,
  Award,
  GraduationCap,
  Shield,
  Server,
  Brain,
  Activity
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function Hero() {
  const { isDark } = useTheme();

  // Profile data - Updated with your information
  const profile = {
    name: 'Shaniya Sharma',
    title: 'MERN Stack Developer',
    subtitle: 'Building modern & scalable web applications',
    description: 'Passionate MERN Stack Developer with expertise in cybersecurity, frontend & backend development. Currently pursuing BCA and learning Data Structures & Algorithms to build efficient solutions.',
    avatar: '/shaniya1.png',
    stats: [
      { icon: Code2, value: '10+', label: 'Projects' },
      { icon: Briefcase, value: '1.5+', label: 'Years Experience' },
      { icon: Users, value: '7+', label: 'Happy Clients' },
      { icon: Award, value: '5+', label: 'Certifications' },
    ],
    socials: [
      { icon: Mail, href: 'mailto:shaniyasharma17@gmail.com', label: 'Email' },
    ],
    resumeLink: '#',
    education: {
      degree: 'BCA - Bachelor of Computer Applications',
      specialization: 'First Year Student',
      skills: [
        { name: 'Cybersecurity', icon: Shield, color: 'text-red-500' },
        { name: 'Frontend Development', icon: Code2, color: 'text-blue-500' },
        { name: 'Backend Development', icon: Server, color: 'text-purple-500' },
        { name: 'DSA Learner', icon: Brain, color: 'text-yellow-500' },
      ],
      status: 'Active Learner'
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
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

  const imageVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
        duration: 0.8,
      },
    },
  };

  const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      repeatType: 'loop',
      ease: 'easeInOut',
    },
  };

  const skillCardVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: (i) => ({
      scale: 1,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        type: 'spring',
        stiffness: 100,
        damping: 20,
      },
    }),
  };

  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      {/* Background */}
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

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="min-h-screen flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 py-16"
        >
          {/* Left Content */}
          <motion.div 
            variants={containerVariants}
            className="flex-1 text-center lg:text-left order-2 lg:order-1"
          >
            {/* Badge */}
            <motion.div
              variants={itemVariants}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 ${
                isDark 
                  ? 'bg-orange-500/20 text-orange-300 border border-orange-500/30' 
                  : 'bg-orange-100 text-orange-700 border border-orange-200'
              }`}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
              </span>
              <span className="text-sm font-medium">Available for work</span>
            </motion.div>

            {/* Name & Title */}
            <motion.h1
              variants={itemVariants}
              className={`text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 ${
                isDark ? 'text-orange-100' : 'text-gray-800'
              }`}
            >
              Hi, I'm{' '}
              <span className={`${
                isDark ? 'text-orange-400' : 'text-orange-600'
              }`}>
                {profile.name}
              </span>
            </motion.h1>

            <motion.h2
              variants={itemVariants}
              className={`text-2xl sm:text-3xl lg:text-4xl font-semibold mb-4 ${
                isDark ? 'text-orange-300' : 'text-gray-700'
              }`}
            >
              {profile.title}
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className={`text-lg lg:text-xl mb-6 max-w-2xl mx-auto lg:mx-0 ${
                isDark ? 'text-orange-300/70' : 'text-gray-600'
              }`}
            >
              {profile.subtitle}
            </motion.p>

            <motion.p
              variants={itemVariants}
              className={`text-base lg:text-lg mb-8 max-w-xl mx-auto lg:mx-0 ${
                isDark ? 'text-orange-300/60' : 'text-gray-600/80'
              }`}
            >
              {profile.description}
            </motion.p>

            {/* Education & Skills Section */}
            <motion.div
              variants={itemVariants}
              className="mb-8"
            >
              <div className="flex items-center gap-2 mb-3 justify-center lg:justify-start flex-wrap">
                <GraduationCap className={`w-5 h-5 ${
                  isDark ? 'text-orange-400' : 'text-orange-600'
                }`} />
                <span className={`font-semibold ${
                  isDark ? 'text-orange-100' : 'text-gray-800'
                }`}>
                  {profile.education.degree}
                </span>
                <span className={`text-sm px-3 py-0.5 rounded-full ${
                  isDark 
                    ? 'bg-orange-500/20 text-orange-300 border border-orange-400/20' 
                    : 'bg-orange-100 text-orange-700 border border-orange-200'
                }`}>
                  {profile.education.specialization}
                </span>
              </div>
              
              {/* Skills Grid */}
              <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                {profile.education.skills.map((skill, index) => {
                  const Icon = skill.icon;
                  return (
                    <motion.div
                      key={skill.name}
                      custom={index}
                      variants={skillCardVariants}
                      initial="hidden"
                      animate="visible"
                      whileHover={{ scale: 1.05, y: -2 }}
                      className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm ${
                        isDark
                          ? 'bg-white/5 border border-orange-500/20 hover:border-orange-400/40'
                          : 'bg-white/80 border border-orange-200/50 hover:border-orange-300'
                      }`}
                    >
                      <Icon className={`w-4 h-4 ${skill.color}`} />
                      <span className={isDark ? 'text-orange-200/80' : 'text-gray-700'}>
                        {skill.name}
                      </span>
                    </motion.div>
                  );
                })}
                <motion.div
                  custom={profile.education.skills.length}
                  variants={skillCardVariants}
                  initial="hidden"
                  animate="visible"
                  className={`flex items-center gap-1 px-3 py-1.5 rounded-lg text-sm ${
                    isDark
                      ? 'bg-yellow-500/10 border border-yellow-500/20 text-yellow-400'
                      : 'bg-yellow-50 border border-yellow-200 text-yellow-700'
                  }`}
                >
                  <Activity className="w-4 h-4" />
                  <span>{profile.education.status}</span>
                </motion.div>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
            >
              <motion.a
                href={profile.resumeLink}
                className={`group flex items-center gap-2 px-8 py-3 rounded-lg font-medium transition-all duration-300 ${
                  isDark
                    ? 'bg-orange-500 hover:bg-orange-600 text-white shadow-lg shadow-orange-500/30'
                    : 'bg-orange-600 hover:bg-orange-700 text-white shadow-lg shadow-orange-600/30'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download className="w-5 h-5" />
                Download Resume
              </motion.a>

              <motion.a
                href="#contact"
                className={`group flex items-center gap-2 px-8 py-3 rounded-lg font-medium transition-all duration-300 border-2 ${
                  isDark
                    ? 'border-orange-400 text-orange-400 hover:bg-orange-400/10'
                    : 'border-orange-600 text-orange-600 hover:bg-orange-600/10'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Me
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-3 mt-8 justify-center lg:justify-start"
            >
              <span className={`text-sm font-medium ${
                isDark ? 'text-orange-300/70' : 'text-gray-600'
              }`}>
                Connect with me:
              </span>
              {profile.socials.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2.5 rounded-lg transition-all duration-300 ${
                      isDark
                        ? 'text-orange-300/70 hover:text-orange-400 hover:bg-orange-400/10'
                        : 'text-gray-600 hover:text-orange-600 hover:bg-orange-600/10'
                    }`}
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Right Content - Profile Image */}
          <motion.div
            variants={containerVariants}
            className="flex-1 flex flex-col items-center order-1 lg:order-2"
          >
            {/* Profile Image */}
            <motion.div
              variants={imageVariants}
              className="relative"
            >
              <motion.div
                animate={floatingAnimation}
                className="relative"
              >
                {/* Glow effect */}
                <div className={`absolute inset-0 rounded-2xl blur-2xl ${
                  isDark ? 'bg-orange-500/30' : 'bg-orange-400/30'
                }`} />
                
                {/* Image container */}
                <div className={`relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-2xl p-2 ${
                  isDark 
                    ? 'bg-gradient-to-r from-orange-500 via-orange-400 to-orange-500' 
                    : 'bg-gradient-to-r from-orange-500 via-orange-400 to-orange-500'
                }`}>
                  <div className={`w-full h-full rounded-2xl overflow-hidden ${
                    isDark ? 'bg-black' : 'bg-white'
                  }`}>
                    <img
                      src={profile.avatar}
                      alt={profile.name}
                      className="w-fit h-fit object-cover grayscale contrast-110 brightness-105"
                      onError={(e) => {
                        e.target.src = 'https://ui-avatars.com/api/?name=Shaniya+Sharma&size=200&background=666666&color=ffffff&bold=true';
                      }}
                    />
                  </div>
                </div>

                {/* Status indicator */}
                <motion.div
                  className={`absolute -bottom-2 -right-2 p-2.5 rounded-full border-2 ${
                    isDark
                      ? 'bg-black border-orange-400'
                      : 'bg-white border-orange-500'
                  }`}
                  animate={{
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: 'reverse',
                  }}
                >
                  <span className="relative flex h-4 w-4">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-4 w-4 bg-orange-500"></span>
                  </span>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Stats Cards */}
            <motion.div
              variants={containerVariants}
              className="grid grid-cols-2 gap-3 mt-6 w-full max-w-sm"
            >
              {profile.stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className={`p-3 rounded-xl text-center transition-all duration-300 ${
                      isDark
                        ? 'bg-white/5 backdrop-blur-sm border border-orange-500/20 hover:border-orange-400/40'
                        : 'bg-white/80 backdrop-blur-sm shadow-md border border-orange-200/50 hover:border-orange-300 hover:shadow-lg'
                    }`}
                  >
                    <Icon className={`w-5 h-5 mx-auto mb-1 ${
                      isDark ? 'text-orange-400' : 'text-orange-500'
                    }`} />
                    <div className={`text-xl font-bold ${
                      isDark ? 'text-orange-100' : 'text-gray-800'
                    }`}>
                      {stat.value}
                    </div>
                    <div className={`text-xs ${
                      isDark ? 'text-orange-300/70' : 'text-gray-600'
                    }`}>
                      {stat.label}
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: 'loop',
        }}
      >
        <div className={`w-6 h-10 rounded-full border-2 flex items-start justify-center p-1 ${
          isDark ? 'border-orange-400/50' : 'border-orange-400'
        }`}>
          <motion.div
            className={`w-1 h-2 rounded-full ${
              isDark ? 'bg-orange-400' : 'bg-orange-600'
            }`}
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: 'loop',
            }}
          />
        </div>
      </motion.div>

      {/* CSS Animations - FIXED: Removed jsx attribute */}
      <style>{`
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