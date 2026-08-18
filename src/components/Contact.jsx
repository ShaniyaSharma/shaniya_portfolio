// components/Contact.jsx
import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  // Github, 
  // Linkedin, 
  // Twitter,
  Send,
  Sparkles,
  CheckCircle,
  Clock,
  MessageCircle,
  User,
  AtSign
} from 'lucide-react';
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
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      // Reset status after 5 seconds
      setTimeout(() => {
        setFormStatus(null);
      }, 5000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'shaniyasharma17@gmail.com',
      link: 'mailto:shaniyasharma17@gmail.com',
      color: 'text-red-500'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 12345 67890',
      link: 'tel:+911234567890',
      color: 'text-green-500'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Kaithal, Haryana, India',
      link: '#',
      color: 'text-blue-500'
    }
  ];

  const socialLinks = [
    // { icon: Github, href: 'https://github.com/ShaniyaSharma', label: 'GitHub', color: 'hover:text-gray-400' },
    // { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn', color: 'hover:text-blue-400' },
    { icon: Mail, href: 'mailto:shaniyasharma17@gmail.com', label: 'Email', color: 'hover:text-red-400' }
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
    <section id="contact" className="relative min-h-screen py-20 overflow-hidden">
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
              <Sparkles className="w-4 h-4" />
              Contact Me
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
            Get In Touch
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
            Have a question or want to work together? Let's connect!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
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
                  ? 'bg-white/5 backdrop-blur-sm border border-orange-500/20' 
                  : 'bg-white/80 backdrop-blur-sm shadow-xl border border-orange-200/50'
              }`}
            >
              <h3 className={`text-xl font-semibold mb-4 ${
                isDark ? 'text-orange-100' : 'text-gray-800'
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
                        isDark 
                          ? 'hover:bg-white/5' 
                          : 'hover:bg-orange-50'
                      }`}
                    >
                      <div className={`p-2 rounded-lg ${
                        isDark ? 'bg-orange-500/20' : 'bg-orange-100'
                      }`}>
                        <Icon className={`w-5 h-5 ${info.color}`} />
                      </div>
                      <div>
                        <p className={`text-sm ${
                          isDark ? 'text-orange-300/70' : 'text-gray-500'
                        }`}>
                          {info.label}
                        </p>
                        <p className={isDark ? 'text-orange-100' : 'text-gray-800'}>
                          {info.value}
                        </p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </motion.div>

            {/* Availability & Social */}
            <motion.div
              variants={itemVariants}
              className={`p-6 rounded-2xl ${
                isDark 
                  ? 'bg-white/5 backdrop-blur-sm border border-orange-500/20' 
                  : 'bg-white/80 backdrop-blur-sm shadow-xl border border-orange-200/50'
              }`}
            >
              <h3 className={`text-xl font-semibold mb-4 ${
                isDark ? 'text-orange-100' : 'text-gray-800'
              }`}>
                Connect With Me
              </h3>

              <div className="flex items-center gap-3 mb-4">
                <Clock className={`w-5 h-5 ${
                  isDark ? 'text-green-400' : 'text-green-500'
                }`} />
                <span className={isDark ? 'text-orange-300/80' : 'text-gray-600'}>
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
                          ? 'bg-white/5 border border-orange-500/20 text-orange-400 hover:bg-orange-500/20' 
                          : 'bg-white/80 shadow-md border border-orange-200/50 text-orange-600 hover:bg-orange-50'
                      } ${social.color}`}
                      aria-label={social.label}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </motion.div>

            {/* Quick Response */}
            <motion.div
              variants={itemVariants}
              className={`p-4 rounded-2xl text-center ${
                isDark 
                  ? 'bg-orange-500/10 border border-orange-500/20' 
                  : 'bg-orange-50 border border-orange-200'
              }`}
            >
              <p className={isDark ? 'text-orange-300/80' : 'text-gray-600'}>
                <MessageCircle className="inline w-4 h-4 mr-1" />
                I usually respond within 24 hours
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.div
              variants={itemVariants}
              className={`p-8 rounded-2xl ${
                isDark 
                  ? 'bg-white/5 backdrop-blur-sm border border-orange-500/20' 
                  : 'bg-white/80 backdrop-blur-sm shadow-xl border border-orange-200/50'
              }`}
            >
              <h3 className={`text-xl font-semibold mb-6 ${
                isDark ? 'text-orange-100' : 'text-gray-800'
              }`}>
                Send Me a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className={`block text-sm font-medium mb-2 ${
                    isDark ? 'text-orange-300/80' : 'text-gray-700'
                  }`}>
                    Your Name
                  </label>
                  <div className="relative">
                    <User className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 ${
                      isDark ? 'text-orange-400' : 'text-orange-500'
                    }`} />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className={`w-full pl-10 pr-4 py-3 rounded-xl border transition-all duration-300 focus:outline-none ${
                        isDark 
                          ? 'bg-white/5 border-orange-500/20 text-orange-100 focus:border-orange-400' 
                          : 'bg-white border-orange-200 text-gray-800 focus:border-orange-500'
                      }`}
                      placeholder="John Doe"
                    />
                  </div>
                </div>

                <div>
                  <label className={`block text-sm font-medium mb-2 ${
                    isDark ? 'text-orange-300/80' : 'text-gray-700'
                  }`}>
                    Your Email
                  </label>
                  <div className="relative">
                    <AtSign className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 ${
                      isDark ? 'text-orange-400' : 'text-orange-500'
                    }`} />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className={`w-full pl-10 pr-4 py-3 rounded-xl border transition-all duration-300 focus:outline-none ${
                        isDark 
                          ? 'bg-white/5 border-orange-500/20 text-orange-100 focus:border-orange-400' 
                          : 'bg-white border-orange-200 text-gray-800 focus:border-orange-500'
                      }`}
                      placeholder="you@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className={`block text-sm font-medium mb-2 ${
                    isDark ? 'text-orange-300/80' : 'text-gray-700'
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
                        ? 'bg-white/5 border-orange-500/20 text-orange-100 focus:border-orange-400' 
                        : 'bg-white border-orange-200 text-gray-800 focus:border-orange-500'
                    }`}
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={formStatus === 'sending'}
                  className={`w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                    formStatus === 'sending'
                      ? 'opacity-70 cursor-not-allowed'
                      : 'hover:scale-105'
                  } ${
                    isDark
                      ? 'bg-orange-500 hover:bg-orange-600 text-white shadow-lg shadow-orange-500/30'
                      : 'bg-orange-600 hover:bg-orange-700 text-white shadow-lg shadow-orange-600/30'
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

      {/* CSS Animations */}
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