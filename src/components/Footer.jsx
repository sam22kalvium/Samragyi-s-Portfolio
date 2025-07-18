import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaCode, FaEnvelope, FaHeart, FaArrowUp, FaRocket } from 'react-icons/fa';
import { HiSparkles } from 'react-icons/hi';

const Footer = () => {
  // Enhanced Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const slideUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const sparkleVariants = {
    animate: {
      scale: [1, 1.2, 1],
      rotate: [0, 180, 360],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const socialLinks = [
    {
      name: 'GitHub',
      icon: FaGithub,
      href: 'https://github.com/sam22kalvium/',
      color: 'from-gray-600 to-gray-800',
      hoverColor: 'hover:text-gray-700 dark:hover:text-white',
    },
    {
      name: 'LinkedIn',
      icon: FaLinkedin,
      href: 'https://www.linkedin.com/in/samragyi-sharma-1b1082315?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      color: 'from-blue-600 to-blue-800',
      hoverColor: 'hover:text-blue-600',
    },
    {
      name: 'LeetCode',
      icon: FaCode,
      href: 'https://leetcode.com/u/Samragyi_22/',
      color: 'from-yellow-600 to-orange-600',
      hoverColor: 'hover:text-yellow-600',
    },
    {
      name: 'Email',
      icon: FaEnvelope,
      href: 'mailto:samragyisharma.2226@gmail.com',
      color: 'from-red-500 to-pink-500',
      hoverColor: 'hover:text-red-500',
    },
  ];

  const quickLinks = [
    { name: 'About', href: '#about', icon: '👨‍💻' },
    { name: 'Projects', href: '#projects', icon: '🚀' },
    { name: 'Skills', href: '#skills', icon: '⚡' },
    { name: 'Open Source', href: '#open-source', icon: '💖' },
    { name: 'Contact', href: '#contact', icon: '📧' },
  ];

  const handleNavClick = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gray-900 dark:bg-gray-900 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-purple-900/20"></div>
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          variants={sparkleVariants}
          animate="animate"
          className="absolute top-10 left-10 w-3 h-3 bg-purple-400 rounded-full opacity-30"
        />
        <motion.div
          variants={sparkleVariants}
          animate="animate"
          style={{ animationDelay: "1s" }}
          className="absolute top-32 right-20 w-4 h-4 bg-blue-400 rounded-full opacity-40"
        />
        <motion.div
          variants={sparkleVariants}
          animate="animate"
          style={{ animationDelay: "2s" }}
          className="absolute bottom-20 left-16 w-2 h-2 bg-green-400 rounded-full opacity-50"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Main Footer Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
        >
          {/* Brand Section */}
          <motion.div
            variants={slideUpVariants}
            className="lg:col-span-2"
          >
            <div className="mb-8">
              <motion.h3
                className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-2 cursor-pointer font-['Poppins',sans-serif]"
                onClick={scrollToTop}
                whileHover={{ scale: 1.05 }}
              >
                Samragyi Sharma
              </motion.h3>
              <p className="text-gray-300 text-lg font-['Roboto',sans-serif]">
                Full Stack Developer & Open Source Contributor
              </p>
            </div>
            <p className="text-gray-400 leading-relaxed mb-8 max-w-md font-['Roboto',sans-serif]">
              Passionate about creating innovative solutions through code. 
              Specializing in MERN stack development with a focus on performance, 
              scalability, and meaningful user experiences.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : '_self'}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : ''}
                  className={`group relative p-3 rounded-full bg-gray-800/50 ${social.hoverColor} transition-all duration-300 transform hover:scale-110 border border-gray-700/50 hover:border-gray-600`}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  aria-label={social.name}
                >
                  <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${social.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />
                  <social.icon className="text-xl relative z-10" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
          variants={slideUpVariants}
          >
            <h4 className="text-xl font-semibold mb-6 font-['Poppins',sans-serif] flex items-center gap-2">
                <HiSparkles className="text-purple-400" />
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className="group flex items-center gap-3 text-gray-400 hover:text-purple-400 transition-colors duration-200 py-2 font-['Roboto',sans-serif]"
                  >
                    <span className="text-lg group-hover:scale-110 transition-transform duration-200">
                      {link.icon}
                    </span>
                    <span className="group-hover:translate-x-1 transition-transform duration-200">
                      {link.name}
                    </span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            variants={slideUpVariants}
          >
            <h4 className="text-xl font-semibold mb-6 font-['Poppins',sans-serif] flex items-center gap-2">
              <FaRocket className="text-blue-400" />
              Get In Touch
            </h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-400">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-red-500 to-pink-500 flex items-center justify-center">
                  <FaEnvelope className="text-sm text-white" />
                </div>
                <div>
                  <p className="text-sm font-['Roboto',sans-serif]">samragyisharma.2226@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-blue-500 to-green-500 flex items-center justify-center">
                  <span className="text-sm">📍</span>
                </div>
                <div>
                  <p className="text-sm font-['Roboto',sans-serif]">Jaipur, India</p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                  <span className="text-sm">💼</span>
                </div>
                <div>
                  <p className="text-sm font-['Roboto',sans-serif]">Open to opportunities</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 dark:border-gray-700 py-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm font-['Roboto',sans-serif]">
                © 2024 Samragyi Sharma. All rights reserved.
              </p>
            </div>
            
            <div className="flex items-center space-x-2 text-gray-400 text-sm font-['Roboto',sans-serif]">
              <span>Made with</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <FaHeart className="text-red-500" />
              </motion.div>
              <span>and lots of</span>
              <motion.span
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-lg"
              >
                ☕
              </motion.span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white p-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 z-50 border border-purple-500/50"
        whileHover={{ scale: 1.1, rotate: 360 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
        aria-label="Scroll to top"
      >
        <FaArrowUp className="text-lg" />
      </motion.button>
    </footer>
  );
};

export default Footer;