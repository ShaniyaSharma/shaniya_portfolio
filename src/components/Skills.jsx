// components/Skills.jsx
import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Code2, 
  Brain,
  Server,
  Database,
  Cloud,
  GitBranch,
  Terminal,
  Users,
  Zap,
  Sparkles,
  Award,
  Star
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function Skills() {
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

  // Skill Categories
  const skillCategories = [
    {
      title: 'Cybersecurity',
      icon: Shield,
      color: 'text-red-500',
      bgColor: 'from-red-500/20 to-red-600/10',
      skills: [
        { name: 'Network Security', icon: '🔒' },
        { name: 'Ethical Hacking', icon: '🛡️' },
        { name: 'Vulnerability Assessment', icon: '🔍' },
        { name: 'Security Auditing', icon: '📋' },
        { name: 'Penetration Testing', icon: '🎯' },
        { name: 'Security Best Practices', icon: '✅' },
      ]
    },
    {
      title: 'MERN Stack Development',
      icon: Code2,
      color: 'text-blue-500',
      bgColor: 'from-blue-500/20 to-blue-600/10',
      skills: [
        { name: 'MongoDB', icon: '🍃' },
        { name: 'Express.js', icon: '🚀' },
        { name: 'React.js', icon: '⚛️' },
        { name: 'Node.js', icon: '🟢' },
        { name: 'REST APIs', icon: '🔗' },
        { name: 'JWT Authentication', icon: '🔐' },
      ]
    },
    {
      title: 'Prompt Engineering',
      icon: Brain,
      color: 'text-purple-500',
      bgColor: 'from-purple-500/20 to-purple-600/10',
      skills: [
        { name: 'LLM Prompt Design', icon: '🧠' },
        { name: 'Few-shot Learning', icon: '🎯' },
        { name: 'Chain of Thought', icon: '🔗' },
        { name: 'System Prompts', icon: '⚙️' },
        { name: 'Prompt Optimization', icon: '✨' },
        { name: 'AI Integration', icon: '🤖' },
      ]
    }
  ];

  // Additional Skills
  const additionalSkills = [
    { name: 'Git & GitHub', icon: GitBranch },
    { name: 'Cloud Computing', icon: Cloud },
    { name: 'DevOps', icon: Terminal },
    { name: 'Database Design', icon: Database },
    { name: 'Agile Methodology', icon: Users },
    { name: 'Performance Optimization', icon: Zap },
  ];

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
    <section id="skills" className="relative min-h-screen py-20 overflow-hidden">
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
              <Sparkles className="w-4 h-4" />
              My Skills
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
            My Expertise
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
            Specialized in Cybersecurity, Full-Stack Development, and AI Prompt Engineering
          </p>
        </motion.div>

        {/* Skill Categories */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12"
        >
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`p-6 rounded-2xl transition-all duration-300 ${
                  isDark 
                    ? 'bg-white/5 backdrop-blur-sm border border-orange-500/20 hover:border-orange-400/40 hover:bg-white/10' 
                    : 'bg-white/80 backdrop-blur-sm shadow-xl border border-orange-200/50 hover:border-orange-300 hover:shadow-2xl'
                }`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2 rounded-lg bg-gradient-to-r ${category.bgColor}`}>
                    <Icon className={`w-6 h-6 ${category.color}`} />
                  </div>
                  <h3 className={`text-xl font-semibold ${
                    isDark ? 'text-orange-100' : 'text-gray-800'
                  }`}>
                    {category.title}
                  </h3>
                </div>
                
                <div className="space-y-2">
                  {category.skills.map((skill, idx) => (
                    <div
                      key={idx}
                      className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-300 ${
                        isDark 
                          ? 'hover:bg-white/5' 
                          : 'hover:bg-orange-50'
                      }`}
                    >
                      <span className="text-lg">{skill.icon}</span>
                      <span className={isDark ? 'text-orange-200/80' : 'text-gray-700'}>
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Additional Skills */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className={`p-6 rounded-2xl transition-all duration-300 ${
            isDark 
              ? 'bg-white/5 backdrop-blur-sm border border-orange-500/20' 
              : 'bg-white/80 backdrop-blur-sm shadow-xl border border-orange-200/50'
          }`}
        >
          <h3 className={`text-xl font-semibold mb-6 flex items-center gap-2 ${
            isDark ? 'text-orange-100' : 'text-gray-800'
          }`}>
            <Award className="w-5 h-5 text-orange-500" />
            Additional Skills & Tools
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {additionalSkills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className={`p-4 rounded-xl text-center transition-all duration-300 ${
                    isDark 
                      ? 'bg-white/5 backdrop-blur-sm border border-orange-500/20 hover:border-orange-400/40' 
                      : 'bg-white/50 backdrop-blur-sm border border-orange-200/50 hover:border-orange-300'
                  }`}
                >
                  <Icon className={`w-8 h-8 mx-auto mb-2 ${
                    isDark ? 'text-orange-400' : 'text-orange-500'
                  }`} />
                  <p className={`text-sm font-medium ${
                    isDark ? 'text-orange-200/80' : 'text-gray-700'
                  }`}>
                    {skill.name}
                  </p>
                </motion.div>
              );
            })}
          </div>
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
            Want to know more about my skills and experience?
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href="#contact"
              className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                isDark
                  ? 'bg-orange-500 hover:bg-orange-600 text-white shadow-lg shadow-orange-500/30'
                  : 'bg-orange-600 hover:bg-orange-700 text-white shadow-lg shadow-orange-600/30'
              }`}
            >
              <Users className="w-5 h-5" />
              Let's Collaborate
            </a>
            <a
              href="#projects"
              className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 border-2 ${
                isDark
                  ? 'border-orange-400 text-orange-400 hover:bg-orange-400/10'
                  : 'border-orange-600 text-orange-600 hover:bg-orange-600/10'
              }`}
            >
              <Star className="w-5 h-5" />
              View My Work
            </a>
          </div>
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