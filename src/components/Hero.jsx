import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { HiArrowRight, HiDownload } from 'react-icons/hi';
import { FaLinkedin, FaGithub, FaCode, FaEnvelope, FaMouse, FaRocket, FaHeart, FaStar } from 'react-icons/fa';
import { HiChevronDown, HiSparkles } from 'react-icons/hi';
import { BsCode, BsCodeSlash } from 'react-icons/bs';

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const roles = [
    'Full Stack Developer',
    'React & Node.js Expert',
    'API Design Specialist',
    'CI/CD Workflows',
    'PostgreSQL + MongoDB',
    'Performance-Focused',
    'Open Source Enthusiast'
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      icon: FaGithub,
      href: 'https://github.com/sam22kalvium/',
      color: 'from-gray-700 to-gray-900',
      hoverColor: 'hover:from-gray-800 hover:to-black',
      tooltip: 'Check out my projects',
      emoji: '👨‍💻'
    },
    {
      name: 'LinkedIn',
      icon: FaLinkedin,
      href: 'https://www.linkedin.com/in/samragyi-sharma-1b1082315?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      color: 'from-blue-600 to-blue-800',
      hoverColor: 'hover:from-blue-700 hover:to-blue-900',
      tooltip: 'Connect with me',
      emoji: '🤝'
    },
    {
      name: 'LeetCode',
      icon: FaCode,
      href: 'https://leetcode.com/u/Samragyi_22/',
      color: 'from-yellow-600 to-orange-600',
      hoverColor: 'hover:from-yellow-700 hover:to-orange-700',
      tooltip: 'View my solutions',
      emoji: '💻'
    },
    {
      name: 'Email',
      icon: FaEnvelope,
      href: 'mailto:samragyisharma.2226@gmail.com',
      color: 'from-red-500 to-pink-600',
      hoverColor: 'hover:from-red-600 hover:to-pink-700',
      tooltip: 'Send me an email',
      emoji: '📧'
    }
  ];

  // Typing animation effect
  useEffect(() => {
    const currentWord = roles[currentRole];
    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentWord.length) {
          setDisplayText(currentWord.slice(0, displayText.length + 1));
          setTypingSpeed(150);
        } else {
          setIsDeleting(true);
          setTypingSpeed(2000); // Pause at end of word
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
          setTypingSpeed(100);
        } else {
          setIsDeleting(false);
          setCurrentRole((prev) => (prev + 1) % roles.length);
          setTypingSpeed(500);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentRole, typingSpeed, roles]);

  const handleContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleViewProjects = () => {
    // Scroll to projects section
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 -z-10">
        {/* Modern gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-purple-900/20 dark:to-blue-900/20" />
        
        {/* Animated geometric patterns */}
        <div className="absolute inset-0 opacity-30">
          <motion.div
            className="absolute top-20 left-10 w-8 h-8 bg-purple-500 rounded-full"
            animate={{
              y: [0, -30, 0],
              scale: [1, 1.5, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute top-40 right-20 w-6 h-6 bg-blue-500 rounded-lg"
            animate={{
              y: [0, 25, 0],
              rotate: [0, 90, 180, 270, 360],
              scale: [1, 0.8, 1.2, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
          <motion.div
            className="absolute bottom-40 left-20 w-4 h-4 bg-indigo-500 rounded-full"
            animate={{
              x: [0, 20, 0],
              y: [0, -20, 0],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          />
          <motion.div
            className="absolute top-60 right-40 w-5 h-5 bg-pink-500 rounded-full"
            animate={{
              rotate: [0, 360],
              scale: [1, 1.4, 1],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5
            }}
          />
        </div>

        {/* Floating code elements */}
        <div className="absolute inset-0 opacity-20">
          <motion.div
            className="absolute top-32 left-32 text-2xl text-purple-600"
            animate={{
              y: [0, -15, 0],
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <BsCode />
          </motion.div>
          <motion.div
            className="absolute bottom-32 right-32 text-3xl text-blue-600"
            animate={{
              y: [0, 20, 0],
              rotate: [0, -15, 15, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          >
            <BsCodeSlash />
          </motion.div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="space-y-12"
        >
          {/* Main Title with enhanced animations */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, type: "spring", stiffness: 100 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white font-['Poppins',sans-serif] mb-8"
          >
            <span className="block mb-4">Hi, I'm</span>
            <motion.span 
              className="block bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent"
              animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Samragyi Sharma
            </motion.span>
          </motion.h1>

          {/* Enhanced Typing Animation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-700 dark:text-gray-300 font-['Roboto_Mono',monospace] min-h-[1.5em] mb-10"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
              {displayText}
              <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="inline-block w-[3px] h-[1.2em] bg-purple-600 ml-1"
              />
            </span>
          </motion.div>

          {/* Enhanced Description */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="max-w-4xl mx-auto mb-10"
          >
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 leading-relaxed font-['Roboto',sans-serif] mb-6">
              <span className="text-purple-600 dark:text-purple-400 font-semibold">Passionate</span> about creating 
              <span className="text-blue-600 dark:text-blue-400 font-semibold"> scalable web applications</span> with a strong focus on 
              <span className="text-indigo-600 dark:text-indigo-400 font-semibold"> user experience</span>, 
              <span className="text-purple-600 dark:text-purple-400 font-semibold"> backend performance</span>, and 
              <span className="text-blue-600 dark:text-blue-400 font-semibold"> clean API design</span>.
            </p>
            <div className="flex items-center justify-center gap-6 text-sm text-gray-500 dark:text-gray-400 font-['Roboto',sans-serif]">
              <div className="flex items-center gap-2">
                <FaRocket className="text-purple-500 text-base" />
                <span>Innovation</span>
              </div>
              <div className="flex items-center gap-2">
                <FaHeart className="text-red-500 text-base" />
                <span>Passion</span>
              </div>
              <div className="flex items-center gap-2">
                <FaStar className="text-yellow-500 text-base" />
                <span>Excellence</span>
              </div>
            </div>
          </motion.div>

          {/* Enhanced CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center pt-4 mb-12"
          >
            <motion.button
              onClick={handleContact}
              className="group relative overflow-hidden bg-gradient-to-r from-purple-600 to-blue-600 text-white px-10 py-4 rounded-full font-semibold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 border-2 border-transparent hover:border-purple-300 font-['Roboto',sans-serif]"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center justify-center gap-3">
                <HiSparkles className="text-xl" />
                Get in Touch
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <HiArrowRight className="text-xl" />
                </motion.div>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.button>

            <motion.button
              onClick={handleViewProjects}
              className="group relative overflow-hidden border-2 border-purple-200 dark:border-purple-700 text-purple-600 dark:text-purple-400 px-10 py-4 rounded-full font-semibold text-lg hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-600 hover:text-white dark:hover:bg-gradient-to-r dark:hover:from-purple-600 dark:hover:to-blue-600 dark:hover:text-white transition-all duration-300 shadow-lg hover:shadow-2xl font-['Roboto',sans-serif]"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="flex items-center justify-center gap-3">
                <motion.div
                  animate={{ x: [0, 3, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <HiArrowRight className="text-xl group-hover:rotate-45 transition-transform duration-300" />
                </motion.div>
                View Projects
                <span className="text-sm opacity-70">🚀</span>
              </span>
            </motion.button>
          </motion.div>

          {/* Enhanced Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="flex justify-center space-x-6 pt-8 mb-16"
          >
            {socialLinks.map((social, index) => (
              <motion.div
                key={social.name}
                className="relative group"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.4 + index * 0.1, type: "spring", stiffness: 200 }}
              >
                {/* Enhanced Tooltip */}
                <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-xl text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap shadow-lg">
                  <span className="text-lg mr-2">{social.emoji}</span>
                  {social.tooltip}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-purple-600" />
                </div>
                
                <motion.a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-r ${social.color} ${social.hoverColor} text-white transition-all duration-300 shadow-lg hover:shadow-2xl border border-white/20`}
                  whileHover={{ scale: 1.1, rotate: 5, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon className="text-2xl" />
                </motion.a>
              </motion.div>
            ))}
          </motion.div>

          {/* Enhanced Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="pt-8"
          >
            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex flex-col items-center text-purple-500 dark:text-purple-400 cursor-pointer"
              onClick={() => {
                const aboutSection = document.querySelector('#about');
                if (aboutSection) {
                  aboutSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              <span className="text-sm font-medium mb-2 font-['Roboto',sans-serif]">Scroll to explore</span>
              <div className="flex flex-col items-center gap-1">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <FaMouse className="text-2xl" />
                </motion.div>
                <motion.div
                  animate={{ y: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
                >
                  <HiChevronDown className="text-xl" />
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;