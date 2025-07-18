import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaTrophy, FaCertificate, FaAward, FaCalendarAlt, FaEye, FaTimes, FaStar, FaMedal, FaGraduationCap, FaCode } from 'react-icons/fa';
import { HiSparkles, HiAcademicCap, HiBadgeCheck } from 'react-icons/hi';

// Import certificate images
import javaImage from '../certificates/java.jpeg';
import javascriptImage from '../certificates/javascript.jpeg';
import pythonImage from '../certificates/Python.jpeg';
import webDevImage from '../certificates/WebDevelopment.jpeg';

const Achievements = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [showModal, setShowModal] = useState(false);

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
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
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
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const achievements = [
    {
      title: 'Model United Nations (MUN)',
      category: 'Competition',
      description: 'Participated in multiple Model United Nations conferences, representing different countries and committees. Developed strong diplomatic skills and global perspective on international issues.',
      date: '2023',
      icon: FaTrophy,
      color: 'from-yellow-500 to-yellow-600',
      bgColor: 'bg-yellow-50 dark:bg-yellow-900/20',
      emoji: '🏆',
      impact: 'Enhanced Diplomatic Skills',
      featured: true
    },
    {
      title: 'Aarunya Achievement',
      category: 'Recognition',
      description: 'Received recognition for outstanding performance in academic and extracurricular activities. Demonstrated leadership qualities and excellence in various initiatives.',
      date: '2024',
      icon: FaAward,
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50 dark:bg-purple-900/20',
      emoji: '🎖️',
      impact: 'Leadership Excellence',
      featured: true
    },
  ];

  const certifications = [
    {
      title: 'Web Development Bootcamp',
      issuer: 'Coding Academy',
      date: 'January 2025',
      description: 'Comprehensive course covering modern web development technologies, responsive design, and full-stack development practices.',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js'],
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20',
      emoji: '🌐',
      level: 'Advanced',
      hasImage: true,
      image: webDevImage
    },
    {
      title: 'JavaScript Programming',
      issuer: 'JavaScript Institute',
      date: 'February 2025',
      description: 'Advanced JavaScript programming covering ES6+, async programming, DOM manipulation, and modern JavaScript frameworks.',
      skills: ['JavaScript', 'ES6+', 'DOM', 'Async/Await', 'APIs'],
      color: 'from-yellow-500 to-orange-500',
      bgColor: 'bg-yellow-50 dark:bg-yellow-900/20',
      emoji: '🟨',
      level: 'Advanced',
      hasImage: true,
      image: javascriptImage
    },
    {
      title: 'Java Programming Bootcamp',
      issuer: 'Oracle Academy',
      date: 'March 2025',
      description: 'Intensive bootcamp covering Java fundamentals, object-oriented programming, and enterprise application development.',
      skills: ['Java', 'OOP', 'Spring Boot', 'Maven', 'JPA'],
      color: 'from-red-500 to-orange-500',
      bgColor: 'bg-red-50 dark:bg-red-900/20',
      emoji: '☕',
      level: 'Intermediate',
      hasImage: true,
      image: javaImage
    },
    {
      title: 'Python Programming Bootcamp',
      issuer: 'Python Institute',
      date: 'April 2025',
      description: 'Complete Python programming course including data structures, algorithms, and real-world application development.',
      skills: ['Python', 'Data Structures', 'Algorithms', 'Flask', 'Django'],
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50 dark:bg-green-900/20',
      emoji: '🐍',
      level: 'Intermediate',
      hasImage: true,
      image: pythonImage
    },
  ];

  const stats = [
    {
      icon: FaTrophy,
      value: achievements.length,
      label: 'Awards Won',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: FaCertificate,
      value: certifications.length,
      label: 'Certifications',
      color: 'from-blue-500 to-purple-500'
    },
    {
      icon: FaStar,
      value: '100%',
      label: 'Completion Rate',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: FaMedal,
      value: '2025',
      label: 'Latest Achievement',
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const handleViewCertificate = (certificate) => {
    console.log('Opening certificate:', certificate.title);
    console.log('Image path:', certificate.image);
    setSelectedCertificate(certificate);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedCertificate(null);
  };

  return (
    <section id="achievements" className="relative min-h-screen py-20 px-6 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-yellow-900/20"></div>
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          variants={sparkleVariants}
          animate="animate"
          className="absolute top-20 left-20 w-4 h-4 bg-yellow-400 rounded-full opacity-40"
        />
        <motion.div
          variants={sparkleVariants}
          animate="animate"
          style={{ animationDelay: "1s" }}
          className="absolute top-40 right-16 w-5 h-5 bg-purple-400 rounded-full opacity-50"
        />
        <motion.div
          variants={sparkleVariants}
          animate="animate"
          style={{ animationDelay: "2s" }}
          className="absolute bottom-32 left-12 w-3 h-3 bg-blue-400 rounded-full opacity-60"
        />
        <motion.div
          variants={sparkleVariants}
          animate="animate"
          style={{ animationDelay: "0.5s" }}
          className="absolute bottom-20 right-24 w-6 h-6 bg-green-400 rounded-full opacity-30"
        />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20"
        >
          <motion.div variants={slideUpVariants} className="inline-flex items-center gap-2 mb-4">
            <FaTrophy className="text-2xl text-yellow-500" />
            <span className="text-lg font-semibold text-purple-600 dark:text-purple-400 uppercase tracking-wider">
              Achievements
            </span>
            <FaTrophy className="text-2xl text-yellow-500" />
          </motion.div>
          
          <motion.h2 
            variants={slideUpVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white font-['Poppins',sans-serif] mb-6"
          >
            My{' '}
            <span className="bg-gradient-to-r from-yellow-600 to-purple-600 bg-clip-text text-transparent">
              Achievements
            </span>
          </motion.h2>
          
          <motion.p 
            variants={slideUpVariants}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-['Roboto',sans-serif]"
          >
            Recognition and certifications that mark my journey of continuous learning
          </motion.p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={cardVariants}
              whileHover={{ 
                scale: 1.05,
                y: -5,
                transition: { duration: 0.2 }
              }}
              className="group relative overflow-hidden bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200/50 dark:border-gray-700/50"
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
              
              <div className="relative z-10 text-center">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r ${stat.color} text-white mb-4 shadow-lg`}>
                  <stat.icon className="text-xl" />
                </div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1 font-['Poppins',sans-serif]">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300 font-['Roboto',sans-serif]">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Achievements Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-20"
        >
          <motion.h3
            variants={slideUpVariants}
            className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center font-['Poppins',sans-serif] flex items-center justify-center gap-3"
          >
            <HiBadgeCheck className="text-yellow-500" />
            Awards & Recognition
          </motion.h3>

          <div className="grid md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                variants={cardVariants}
                whileHover={{ 
                  scale: 1.03,
                  y: -10,
                  transition: { duration: 0.3 }
                }}
                className="group relative overflow-hidden bg-white dark:bg-gray-800 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200/50 dark:border-gray-700/50"
              >
                {/* Header Section */}
                <div className={`relative h-32 ${achievement.bgColor} overflow-hidden`}>
                  <div className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-10`} />
                  
                  {/* Floating Emoji */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-4xl opacity-20 group-hover:scale-110 transition-transform duration-500">
                      {achievement.emoji}
                    </div>
                  </div>
                  
                  {/* Featured Badge */}
                  {achievement.featured && (
                    <div className="absolute top-4 right-4">
                      <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${achievement.color} text-white shadow-lg`}>
                        <FaStar className="text-xs" />
                        Featured
                      </span>
                    </div>
                  )}
                </div>

                {/* Content Section */}
                <div className="p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${achievement.color} flex items-center justify-center`}>
                      <achievement.icon className="text-white text-lg" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white font-['Poppins',sans-serif]">
                        {achievement.title}
                      </h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400 font-['Roboto',sans-serif]">
                        {achievement.category} • {achievement.date}
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4 font-['Roboto',sans-serif]">
                    {achievement.description}
                  </p>

                  <div className="flex items-center gap-2 text-sm font-medium text-purple-600 dark:text-purple-400">
                    <HiSparkles className="text-lg" />
                    <span>{achievement.impact}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certifications Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h3
            variants={slideUpVariants}
            className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center font-['Poppins',sans-serif] flex items-center justify-center gap-3"
          >
            <HiAcademicCap className="text-blue-500" />
            Professional Certifications
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                variants={cardVariants}
                whileHover={{ 
                  scale: 1.05,
                  y: -10,
                  transition: { duration: 0.3 }
                }}
                className="group relative overflow-hidden bg-white dark:bg-gray-800 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200/50 dark:border-gray-700/50 cursor-pointer"
                onClick={() => handleViewCertificate(cert)}
              >
                {/* Header Section with Image Preview */}
                <div className={`relative h-40 overflow-hidden`}>
                  {cert.image ? (
                    <div className="relative w-full h-full">
                      <img 
                        src={cert.image} 
                        alt={`${cert.title} Preview`}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-30`} />
                    </div>
                  ) : (
                    <div className={`relative h-full ${cert.bgColor}`}>
                      <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-10`} />
                      {/* Floating Emoji */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-5xl opacity-20 group-hover:scale-110 transition-transform duration-500">
                          {cert.emoji}
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {/* Level Badge */}
                  <div className="absolute top-4 left-4">
                    <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${cert.color} text-white shadow-lg backdrop-blur-sm`}>
                      <FaMedal className="text-xs" />
                      {cert.level}
                    </span>
                  </div>

                  {/* View Button */}
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm p-2 rounded-full text-gray-700 dark:text-gray-300 shadow-lg">
                      <FaEye className="text-lg" />
                    </div>
                  </div>

                  {/* Click to View Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white font-medium text-sm bg-black/50 px-3 py-1 rounded-full backdrop-blur-sm">
                      Click to View Certificate
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6">
                  <div className="text-center mb-4">
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2 font-['Poppins',sans-serif]">
                      {cert.title}
                    </h4>
                    <p className="text-blue-600 dark:text-blue-400 font-medium font-['Roboto',sans-serif]">
                      {cert.issuer}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 font-['Roboto',sans-serif] flex items-center gap-1">
                      <FaCalendarAlt className="text-xs" />
                      {cert.date}
                    </p>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4 font-['Roboto',sans-serif]">
                    {cert.description}
                  </p>

                  {/* Skills */}
                  <div>
                    <h5 className="text-sm font-semibold text-gray-900 dark:text-white mb-2 font-['Poppins',sans-serif]">
                      Skills Covered:
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill, skillIndex) => (
                        <span
                          key={skill}
                          className="px-2 py-1 text-xs font-medium bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 text-blue-700 dark:text-blue-300 rounded-full border border-blue-200/50 dark:border-blue-700/50"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Certificate Modal */}
      {showModal && selectedCertificate && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={closeModal}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 50 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="bg-white dark:bg-gray-800 rounded-3xl p-6 md:p-8 max-w-4xl w-full relative shadow-2xl border border-gray-200/50 dark:border-gray-700/50 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <motion.button
              onClick={closeModal}
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              className="absolute top-6 right-6 w-10 h-10 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-full flex items-center justify-center text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-all duration-200"
            >
              <FaTimes className="text-lg" />
            </motion.button>

            <div className="text-center">
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${selectedCertificate.color} text-white mb-6`}>
                <FaCertificate className="text-2xl" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 font-['Poppins',sans-serif]">
                {selectedCertificate.title}
              </h3>
              
              <p className="text-lg text-blue-600 dark:text-blue-400 font-medium mb-6 font-['Roboto',sans-serif]">
                {selectedCertificate.issuer}
              </p>

              <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-6 mb-6">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 font-['Poppins',sans-serif] flex items-center gap-2">
                  <FaCertificate className="text-blue-500" />
                  Certificate Image
                </h4>
                {selectedCertificate.image ? (
                  <div className="relative overflow-hidden rounded-xl shadow-2xl bg-white p-4">
                    <img 
                      src={selectedCertificate.image} 
                      alt={`${selectedCertificate.title} Certificate`}
                      className="w-full h-auto max-h-[500px] object-contain rounded-lg shadow-lg transition-opacity duration-300"
                      style={{ maxWidth: '100%', height: 'auto' }}
                      onLoad={(e) => {
                        e.target.style.opacity = '1';
                      }}
                      onError={(e) => {
                        console.error('Image failed to load:', selectedCertificate.image);
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'block';
                      }}
                    />
                    <div className="hidden text-center py-8">
                      <div className="text-6xl mb-4">⚠️</div>
                      <p className="text-gray-600 dark:text-gray-300 font-['Roboto',sans-serif] text-lg font-medium">
                        Certificate image could not be loaded
                      </p>
                      <p className="text-gray-500 dark:text-gray-400 font-['Roboto',sans-serif] text-sm mt-2">
                        Please try refreshing the page or contact support
                      </p>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent pointer-events-none rounded-xl" />
                    
                    {/* Image Controls */}
                    <div className="absolute top-2 right-2 flex gap-2">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(selectedCertificate.image, '_blank');
                        }}
                        className="bg-white/90 hover:bg-white text-gray-700 p-2 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
                        title="Open in new tab"
                      >
                        <FaEye className="text-sm" />
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-12 bg-white dark:bg-gray-800 rounded-xl">
                    <div className="text-6xl mb-4">📜</div>
                    <p className="text-gray-600 dark:text-gray-300 font-['Roboto',sans-serif] text-lg">
                      Certificate image not available
                    </p>
                    <p className="text-gray-500 dark:text-gray-400 font-['Roboto',sans-serif] text-sm mt-2">
                      Please contact for verification
                    </p>
                  </div>
                )}
              </div>

              {/* Skills Section */}
              <div className="mb-6">
                <h5 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 font-['Poppins',sans-serif] flex items-center gap-2">
                  <FaCode className="text-blue-500" />
                  Skills Covered
                </h5>
                <div className="flex flex-wrap gap-2 justify-center">
                  {selectedCertificate.skills.map((skill, index) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className={`px-3 py-1 text-sm font-medium bg-gradient-to-r ${selectedCertificate.color} text-white rounded-full shadow-lg`}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Certificate Details */}
              <div className="bg-gray-50 dark:bg-gray-700/50 rounded-2xl p-4 mb-6">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-semibold text-gray-900 dark:text-white">Issued by:</span>
                    <p className="text-gray-600 dark:text-gray-300">{selectedCertificate.issuer}</p>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900 dark:text-white flex items-center gap-1">
                      <FaCalendarAlt className="text-xs" />
                      Date:
                    </span>
                    <p className="text-gray-600 dark:text-gray-300">{selectedCertificate.date}</p>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900 dark:text-white">Level:</span>
                    <p className="text-gray-600 dark:text-gray-300">{selectedCertificate.level}</p>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900 dark:text-white">Status:</span>
                    <p className="text-green-600 dark:text-green-400 flex items-center gap-1">
                      <FaMedal className="text-xs" />
                      Completed
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex gap-3 justify-center">
                <motion.button
                  onClick={closeModal}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 text-gray-700 dark:text-gray-300 rounded-full hover:from-gray-300 hover:to-gray-400 dark:hover:from-gray-600 dark:hover:to-gray-500 transition-all duration-200 font-['Roboto',sans-serif] font-medium shadow-lg"
                >
                  Close
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default Achievements;