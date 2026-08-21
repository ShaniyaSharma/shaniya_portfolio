// src/components/Contact.jsx
import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Sparkles, CheckCircle, Clock, MessageCircle, User, AtSign } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function Contact() {
  const { isDark } = useTheme();
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);
  const [formStatus, setFormStatus] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('sending');
    
    setTimeout(() => {
      setFormStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      setTimeout(() => {
        setFormStatus(null);
      }, 5000);
    }, 1500);
  };

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'shaniyasharma17@gmail.com', link: 'mailto:shaniyasharma17@gmail.com', color: 'text-red-500' },
    { icon: Phone, label: 'Phone', value: '+91 9896505529', link: 'tel:+919896505529', color: 'text-green-500' },
    { icon: MapPin, label: 'Location', value: 'Kaithal, Haryana, India', link: '#', color: 'text-blue-500' }
  ];

  const socialLinks = [
    { icon: Mail, href: 'mailto:shaniyasharma17@gmail.com', label: 'Email', color: 'hover:text-gray-300' }
  ];

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
    <section id="contact" className="relative min-h-screen py-20 overflow-hidden">
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

      <div ref={ref} className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
                ? 'bg-gray-700/30 text-gray-300 border border-gray-600/30' 
                : 'bg-gray-200/50 text-gray-700 border border-gray-300/30'
            }`}>
              <Sparkles className="w-4 h-4" />
              Contact Me
            </span>
          </motion.div>
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{ delay: 0.2 }}
            className={`text-4xl md:text-5xl font-bold mt-4 mb-4 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}
          >
            Get In Touch
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: '80px' } : { width: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className={`h-1 mx-auto rounded-full ${
              isDark ? 'bg-gray-400' : 'bg-gray-600'
            }`}
          />
          <p className={`text-lg mt-4 max-w-2xl mx-auto ${
            isDark ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Have a question or want to work together? Let's connect!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-6"
          >
            <motion.div
              variants={itemVariants}
              className={`p-6 rounded-2xl ${
                isDark 
                  ? 'bg-white/5 backdrop-blur-sm border border-gray-600/30' 
                  : 'bg-white/50 backdrop-blur-sm border border-gray-300/30'
              }`}
            >
              <h3 className={`text-xl font-semibold mb-4 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                Contact Information
              </h3>
              
              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <a
                      key={index}
                      href={info.link}
                      target={info.label === 'Location' ? '_self' : '_blank'}
                      rel="noopener noreferrer"
                      className={`flex items-center gap-4 p-3 rounded-xl transition-all duration-300 ${
                        isDark ? 'hover:bg-white/5' : 'hover:bg-gray-100/50'
                      }`}
                    >
                      <div className={`p-2 rounded-lg ${
                        isDark ? 'bg-gray-700/30' : 'bg-gray-200/50'
                      }`}>
                        <Icon className={`w-5 h-5 ${info.color}`} />
                      </div>
                      <div>
                        <p className={`text-sm ${
                          isDark ? 'text-gray-300' : 'text-gray-600'
                        }`}>
                          {info.label}
                        </p>
                        <p className={isDark ? 'text-white' : 'text-gray-900'}>
                          {info.value}
                        </p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className={`p-6 rounded-2xl ${
                isDark 
                  ? 'bg-white/5 backdrop-blur-sm border border-gray-600/30' 
                  : 'bg-white/50 backdrop-blur-sm border border-gray-300/30'
              }`}
            >
              <h3 className={`text-xl font-semibold mb-4 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                Connect With Me
              </h3>

              <div className="flex items-center gap-3 mb-4">
                <Clock className={`w-5 h-5 ${
                  isDark ? 'text-gray-400' : 'text-gray-600'
                }`} />
                <span className={isDark ? 'text-gray-300' : 'text-gray-700'}>
                  Available for freelance work
                </span>
              </div>

              <div className="flex gap-3">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 rounded-xl transition-all duration-300 ${
                        isDark 
                          ? 'bg-white/5 border border-gray-600/30 text-gray-400 hover:bg-gray-700/30 hover:border-gray-400/40' 
                          : 'bg-white/50 border border-gray-300/30 text-gray-600 hover:bg-gray-200/50 hover:border-gray-400/40'
                      } ${social.color}`}
                      aria-label={social.label}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className={`p-4 rounded-2xl text-center ${
                isDark 
                  ? 'bg-gray-700/20 border border-gray-600/30' 
                  : 'bg-gray-200/30 border border-gray-300/30'
              }`}
            >
              <p className={isDark ? 'text-gray-300' : 'text-gray-700'}>
                <MessageCircle className="inline w-4 h-4 mr-1" />
                I usually respond within 24 hours
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.div
              variants={itemVariants}
              className={`p-8 rounded-2xl ${
                isDark 
                  ? 'bg-white/5 backdrop-blur-sm border border-gray-600/30' 
                  : 'bg-white/50 backdrop-blur-sm border border-gray-300/30'
              }`}
            >
              <h3 className={`text-xl font-semibold mb-6 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                Send Me a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className={`block text-sm font-medium mb-2 ${
                    isDark ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Your Name
                  </label>
                  <div className="relative">
                    <User className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 ${
                      isDark ? 'text-gray-400' : 'text-gray-600'
                    }`} />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className={`w-full pl-10 pr-4 py-3 rounded-xl border transition-all duration-300 focus:outline-none ${
                        isDark 
                          ? 'bg-white/5 border-gray-600/30 text-gray-300 focus:border-gray-400' 
                          : 'bg-white/50 border-gray-300/30 text-gray-700 focus:border-gray-500'
                      }`}
                      placeholder="John Doe"
                    />
                  </div>
                </div>

                <div>
                  <label className={`block text-sm font-medium mb-2 ${
                    isDark ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Your Email
                  </label>
                  <div className="relative">
                    <AtSign className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 ${
                      isDark ? 'text-gray-400' : 'text-gray-600'
                    }`} />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className={`w-full pl-10 pr-4 py-3 rounded-xl border transition-all duration-300 focus:outline-none ${
                        isDark 
                          ? 'bg-white/5 border-gray-600/30 text-gray-300 focus:border-gray-400' 
                          : 'bg-white/50 border-gray-300/30 text-gray-700 focus:border-gray-500'
                      }`}
                      placeholder="you@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className={`block text-sm font-medium mb-2 ${
                    isDark ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="4"
                    className={`w-full px-4 py-3 rounded-xl border transition-all duration-300 focus:outline-none ${
                      isDark 
                        ? 'bg-white/5 border-gray-600/30 text-gray-300 focus:border-gray-400' 
                        : 'bg-white/50 border-gray-300/30 text-gray-700 focus:border-gray-500'
                    }`}
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={formStatus === 'sending'}
                  className={`w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                    formStatus === 'sending' ? 'opacity-70 cursor-not-allowed' : 'hover:scale-105'
                  } ${
                    isDark
                      ? 'bg-gray-600 hover:bg-gray-500 text-white shadow-lg shadow-gray-600/30'
                      : 'bg-gray-700 hover:bg-gray-800 text-white shadow-lg shadow-gray-700/30'
                  }`}
                >
                  {formStatus === 'sending' ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent" />
                      Sending...
                    </>
                  ) : formStatus === 'success' ? (
                    <>
                      <CheckCircle className="w-5 h-5" />
                      Message Sent!
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </button>

                {formStatus === 'success' && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`text-center text-sm ${
                      isDark ? 'text-green-400' : 'text-green-600'
                    }`}
                  >
                    ✓ Your message has been sent successfully!
                  </motion.p>
                )}
              </form>
            </motion.div>
          </motion.div>
        </div>
      </div>

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