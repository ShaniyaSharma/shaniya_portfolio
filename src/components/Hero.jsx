// src/components/Hero.jsx
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

  const profile = {
    name: 'Shaniya Sharma',
    title: 'MERN Stack Developer',
    subtitle: 'Building modern & scalable web applications',
    description: 'Passionate MERN Stack Developer with expertise in cybersecurity, frontend & backend development. Currently pursuing BCA and learning Data Structures & Algorithms to build efficient solutions.',
    avatar: '/sharma.png',
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
      <div className={`absolute inset-0 ${isDark ? 'bg-gray-900' : 'bg-gray-100'}`}>
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
            className={`absolute rounded-full ${isDark ? 'bg-gray-500/10' : 'bg-gray-400/20'}`}
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
          className={`absolute top-20 right-20 w-96 h-96 rounded-full blur-3xl ${isDark ? 'bg-gray-600/20' : 'bg-gray-300/30'}`}
          style={{ animation: 'pulse 8s ease-in-out infinite alternate' }}
        />
        <div
          className={`absolute bottom-20 left-20 w-80 h-80 rounded-full blur-3xl ${isDark ? 'bg-gray-700/20' : 'bg-gray-400/30'}`}
          style={{ animation: 'pulse 6s ease-in-out infinite alternate-reverse' }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="min-h-screen flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 py-16"
        >
          <motion.div 
            variants={containerVariants}
            className="flex-1 text-center lg:text-left order-2 lg:order-1"
          >
            <motion.div
              variants={itemVariants}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 ${
                isDark 
                  ? 'bg-gray-700/30 text-gray-300 border border-gray-600/30' 
                  : 'bg-gray-200/50 text-gray-700 border border-gray-300/30'
              }`}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gray-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-gray-500"></span>
              </span>
              <span className="text-sm font-medium">Available for work</span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className={`text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}
            >
              Hi, I'm{' '}
              <span className={`${
                isDark ? 'text-gray-300' : 'text-gray-600'
              }`}>
                {profile.name}
              </span>
            </motion.h1>

            <motion.h2
              variants={itemVariants}
              className={`text-2xl sm:text-3xl lg:text-4xl font-semibold mb-4 ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}
            >
              {profile.title}
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className={`text-lg lg:text-xl mb-6 max-w-2xl mx-auto lg:mx-0 ${
                isDark ? 'text-gray-300' : 'text-gray-600'
              }`}
            >
              {profile.subtitle}
            </motion.p>

            <motion.p
              variants={itemVariants}
              className={`text-base lg:text-lg mb-8 max-w-xl mx-auto lg:mx-0 ${
                isDark ? 'text-gray-400' : 'text-gray-600'
              }`}
            >
              {profile.description}
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="mb-8"
            >
              <div className="flex items-center gap-2 mb-3 justify-center lg:justify-start flex-wrap">
                <GraduationCap className={`w-5 h-5 ${
                  isDark ? 'text-gray-400' : 'text-gray-600'
                }`} />
                <span className={`font-semibold ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  {profile.education.degree}
                </span>
                <span className={`text-sm px-3 py-0.5 rounded-full ${
                  isDark 
                    ? 'bg-gray-700/30 text-gray-300 border border-gray-600/30' 
                    : 'bg-gray-200/50 text-gray-700 border border-gray-300/30'
                }`}>
                  {profile.education.specialization}
                </span>
              </div>
              
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
                          ? 'bg-white/5 border border-gray-600/30 hover:border-gray-400/40'
                          : 'bg-white/50 border border-gray-300/30 hover:border-gray-400/40'
                      }`}
                    >
                      <Icon className={`w-4 h-4 ${skill.color}`} />
                      <span className={isDark ? 'text-gray-300' : 'text-gray-700'}>
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
                      : 'bg-yellow-500/10 border border-yellow-500/20 text-yellow-600'
                  }`}
                >
                  <Activity className="w-4 h-4" />
                  <span>{profile.education.status}</span>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
            >
              <motion.a
                href={profile.resumeLink}
                className={`group flex items-center gap-2 px-8 py-3 rounded-lg font-medium transition-all duration-300 ${
                  isDark
                    ? 'bg-gray-600 hover:bg-gray-500 text-white shadow-lg shadow-gray-600/30'
                    : 'bg-gray-700 hover:bg-gray-800 text-white shadow-lg shadow-gray-700/30'
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
                    ? 'border-gray-500 text-gray-300 hover:bg-gray-700/30'
                    : 'border-gray-600 text-gray-700 hover:bg-gray-200/50'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Me
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex items-center gap-3 mt-8 justify-center lg:justify-start"
            >
              <span className={`text-sm font-medium ${
                isDark ? 'text-gray-300' : 'text-gray-600'
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
                        ? 'text-gray-300 hover:text-white hover:bg-gray-700/30'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-200/50'
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

          {/* Right Content - Profile Image - Color Photo */}
          <motion.div
            variants={containerVariants}
            className="flex-1 flex flex-col items-center order-1 lg:order-2"
          >
            <motion.div
              variants={imageVariants}
              className="relative"
            >
              <motion.div
                animate={floatingAnimation}
                className="relative"
              >
                <div className={`absolute inset-0 rounded-2xl blur-2xl ${
                  isDark ? 'bg-gray-500/20' : 'bg-gray-400/20'
                }`} />
                
                <div className={`relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-2xl p-2 ${
                  isDark 
                    ? 'bg-gradient-to-r from-gray-600 via-gray-500 to-gray-600' 
                    : 'bg-gradient-to-r from-gray-500 via-gray-400 to-gray-500'
                }`}>
                  <div className={`w-full h-full rounded-2xl overflow-hidden ${
                    isDark ? 'bg-gray-900' : 'bg-gray-100'
                  }`}>
                    <img
                      src={profile.avatar}
                      alt={profile.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.src = 'https://ui-avatars.com/api/?name=Shaniya+Sharma&size=200&background=6b7280&color=ffffff&bold=true';
                      }}
                    />
                  </div>
                </div>

                <motion.div
                  className={`absolute -bottom-2 -right-2 p-2.5 rounded-full border-2 ${
                    isDark
                      ? 'bg-gray-900 border-gray-500'
                      : 'bg-gray-100 border-gray-500'
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
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gray-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-4 w-4 bg-gray-500"></span>
                  </span>
                </motion.div>
              </motion.div>
            </motion.div>

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
                        ? 'bg-white/5 backdrop-blur-sm border border-gray-600/30 hover:border-gray-400/40'
                        : 'bg-white/50 backdrop-blur-sm border border-gray-300/30 hover:border-gray-400/40'
                    }`}
                  >
                    <Icon className={`w-5 h-5 mx-auto mb-1 ${
                      isDark ? 'text-gray-400' : 'text-gray-600'
                    }`} />
                    <div className={`text-xl font-bold ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}>
                      {stat.value}
                    </div>
                    <div className={`text-xs ${
                      isDark ? 'text-gray-300' : 'text-gray-600'
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
          isDark ? 'border-gray-500' : 'border-gray-400'
        }`}>
          <motion.div
            className={`w-1 h-2 rounded-full ${
              isDark ? 'bg-gray-400' : 'bg-gray-600'
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
    </section>
  );
}