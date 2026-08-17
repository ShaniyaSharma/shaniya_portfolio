// components/Experience.jsx
import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  Code2, 
  Shield, 
  Server, 
  Brain,
  Award,
  Users,
  Rocket,
  Sparkles,
  Star,
  ExternalLink,
  CheckCircle
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function Experience() {
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

  // Experience Data
  const experiences = [
    {
      id: 1,
      title: 'Frontend Developer Intern',
      company: 'Hartron Advanced Skill Center',
      location: 'Kaithal, Haryana',
      period: 'May 2026 - Present',
      duration: '6 Months',
      type: 'Internship',
      icon: <Code2 className="w-6 h-6" />,
      description: [
        'Learning modern frontend development with React.js and building responsive web applications',
        'Working on real-world projects and collaborating with team members',
        'Gaining hands-on experience with HTML, CSS, JavaScript, and modern frameworks',
        'Understanding industry best practices and development workflows'
      ],
      skills: ['React.js', 'JavaScript', 'HTML/CSS', 'Tailwind CSS', 'Git/GitHub', 'Responsive Design'],
      achievements: [
        'Completed 6 months of intensive frontend training',
        'Built multiple responsive web applications',
        'Learned modern development practices and tools'
      ],
      status: 'In Progress'
    }
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
    <section id="experience" className="relative min-h-screen py-20 overflow-hidden">
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
              <Briefcase className="w-4 h-4" />
              Experience
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
            My Experience
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
            My journey in frontend development and professional growth
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              variants={itemVariants}
              className={`relative p-8 rounded-2xl transition-all duration-300 ${
                isDark 
                  ? 'bg-white/5 backdrop-blur-sm border border-orange-500/20 hover:border-orange-400/40' 
                  : 'bg-white/80 backdrop-blur-sm shadow-xl border border-orange-200/50 hover:border-orange-300 hover:shadow-2xl'
              }`}
            >
              {/* Status Badge */}
              <div className="absolute top-4 right-4">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  exp.status === 'In Progress'
                    ? isDark 
                      ? 'bg-green-500/20 text-green-300' 
                      : 'bg-green-100 text-green-700'
                    : isDark 
                      ? 'bg-blue-500/20 text-blue-300' 
                      : 'bg-blue-100 text-blue-700'
                }`}>
                  {exp.status}
                </span>
              </div>

              {/* Header */}
              <div className="flex items-start gap-4 mb-4">
                <div className={`p-3 rounded-xl ${
                  isDark 
                    ? 'bg-orange-500/20' 
                    : 'bg-orange-100'
                }`}>
                  {exp.icon}
                </div>
                <div className="flex-1">
                  <h3 className={`text-2xl font-bold ${
                    isDark ? 'text-orange-100' : 'text-gray-800'
                  }`}>
                    {exp.title}
                  </h3>
                  <p className={`text-lg font-semibold ${
                    isDark ? 'text-orange-400' : 'text-orange-600'
                  }`}>
                    {exp.company}
                  </p>
                </div>
              </div>

              {/* Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
                <div className="flex items-center gap-2">
                  <Calendar className={`w-4 h-4 ${
                    isDark ? 'text-orange-400' : 'text-orange-500'
                  }`} />
                  <span className={isDark ? 'text-orange-300/80' : 'text-gray-600'}>
                    {exp.period} • {exp.duration}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className={`w-4 h-4 ${
                    isDark ? 'text-orange-400' : 'text-orange-500'
                  }`} />
                  <span className={isDark ? 'text-orange-300/80' : 'text-gray-600'}>
                    {exp.location}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className={`w-4 h-4 ${
                    isDark ? 'text-orange-400' : 'text-orange-500'
                  }`} />
                  <span className={isDark ? 'text-orange-300/80' : 'text-gray-600'}>
                    {exp.type}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className={`w-4 h-4 ${
                    isDark ? 'text-orange-400' : 'text-orange-500'
                  }`} />
                  <span className={isDark ? 'text-orange-300/80' : 'text-gray-600'}>
                    Student Learner
                  </span>
                </div>
              </div>

              {/* Description */}
              <div className="mb-4">
                <h4 className={`text-sm font-semibold mb-2 ${
                  isDark ? 'text-orange-300' : 'text-gray-700'
                }`}>
                  What I'm Learning:
                </h4>
                <ul className="space-y-2">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle className={`w-4 h-4 mt-0.5 ${
                        isDark ? 'text-green-400' : 'text-green-500'
                      }`} />
                      <span className={isDark ? 'text-orange-300/80' : 'text-gray-600'}>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Skills */}
              <div className="mb-4">
                <h4 className={`text-sm font-semibold mb-2 ${
                  isDark ? 'text-orange-300' : 'text-gray-700'
                }`}>
                  Skills I'm Developing:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, i) => (
                    <span
                      key={i}
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        isDark 
                          ? 'bg-orange-500/20 text-orange-300 border border-orange-500/20' 
                          : 'bg-orange-100 text-orange-700 border border-orange-200'
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Achievements */}
              <div>
                <h4 className={`text-sm font-semibold mb-2 ${
                  isDark ? 'text-orange-300' : 'text-gray-700'
                }`}>
                  Key Achievements:
                </h4>
                <ul className="space-y-1">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Star className={`w-4 h-4 mt-0.5 ${
                        isDark ? 'text-yellow-400' : 'text-yellow-500'
                      }`} />
                      <span className={isDark ? 'text-orange-300/80' : 'text-gray-600'}>
                        {achievement}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Progress Bar */}
              <div className="mt-4 pt-4 border-t border-orange-500/10">
                <div className="flex justify-between items-center mb-1">
                  <span className={`text-sm ${
                    isDark ? 'text-orange-300/70' : 'text-gray-600'
                  }`}>
                    Progress
                  </span>
                  <span className={`text-sm font-medium ${
                    isDark ? 'text-orange-400' : 'text-orange-600'
                  }`}>
                    100%
                  </span>
                </div>
                <div className={`w-full h-2 rounded-full overflow-hidden ${
                  isDark ? 'bg-orange-500/20' : 'bg-orange-100'
                }`}>
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: '100%' } : { width: 0 }}
                    transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
                    className="h-full rounded-full bg-gradient-to-r from-orange-500 to-orange-600"
                  />
                </div>
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
            Want to know more about my experience?
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href="#projects"
              className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                isDark
                  ? 'bg-orange-500 hover:bg-orange-600 text-white shadow-lg shadow-orange-500/30'
                  : 'bg-orange-600 hover:bg-orange-700 text-white shadow-lg shadow-orange-600/30'
              }`}
            >
              <Rocket className="w-5 h-5" />
              View My Projects
            </a>
            <a
              href="#contact"
              className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 border-2 ${
                isDark
                  ? 'border-orange-400 text-orange-400 hover:bg-orange-400/10'
                  : 'border-orange-600 text-orange-600 hover:bg-orange-600/10'
              }`}
            >
              <ExternalLink className="w-5 h-5" />
              Let's Connect
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