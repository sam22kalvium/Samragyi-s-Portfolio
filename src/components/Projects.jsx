import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaCalendarAlt, FaCode, FaRocket, FaStar, FaEye, FaHeart } from 'react-icons/fa';
import { HiSparkles, HiLightBulb, HiCode } from 'react-icons/hi';

const Projects = () => {
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

  const floatingVariants = {
    animate: {
      y: [0, -8, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const projects = [
    {
      name: 'HackTok',
      date: 'Oct 2024',
      description: 'A social media platform for developers to share coding challenges, solutions, and collaborate on projects. Built with modern web technologies focusing on real-time interactions and community engagement.',
      techStack: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'JWT', 'Tailwind CSS'],
      githubLink: 'https://github.com/kalviumcommunity/S64_Life_Hacks.git',
      liveLink: 'https://lifeehacks.netlify.app/',
      image: '/api/placeholder/600/400',
      featured: true,
      icon: FaRocket,
      color: 'from-blue-500 to-purple-500',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20',
      emoji: '🚀',
      stats: {
        stars: 24,
        views: 1200,
        likes: 89
      },
      category: 'Full Stack',
      status: 'Completed'
    },
    {
      name: 'SkinGenie',
      date: 'Sep 2024',
      description: 'An AI-powered skincare recommendation platform that analyzes skin conditions and provides personalized skincare routines. Integrated with machine learning models for accurate skin analysis.',
      techStack: ['React', 'Python', 'Flask', 'TensorFlow', 'PostgreSQL', 'AWS'],
      githubLink: 'https://github.com/kalviumcommunity/S64_Samragyi_Capstone_SkinGenie.git',
      liveLink: 'https://coruscating-crostata-b02083.netlify.app/',
      image: '/api/placeholder/600/400',
      featured: true,
      icon: HiSparkles,
      color: 'from-green-500 to-teal-500',
      bgColor: 'bg-green-50 dark:bg-green-900/20',
      emoji: '✨',
      stats: {
        stars: 31,
        views: 1850,
        likes: 124
      },
      category: 'AI/ML',
      status: 'Completed'
    }
  ];

  const stats = [
    {
      icon: FaCode,
      value: '20+',
      label: 'Projects Built',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: FaGithub,
      value: '50+',
      label: 'GitHub Repos',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: FaStar,
      value: '55+',
      label: 'GitHub Stars',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: FaEye,
      value: '3K+',
      label: 'Total Views',
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section id="projects" className="relative min-h-screen py-20 px-6 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-green-900/20"></div>
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          variants={sparkleVariants}
          animate="animate"
          className="absolute top-24 left-20 w-5 h-5 bg-green-400 rounded-full opacity-40"
        />
        <motion.div
          variants={sparkleVariants}
          animate="animate"
          style={{ animationDelay: "1s" }}
          className="absolute top-80 right-16 w-4 h-4 bg-purple-400 rounded-full opacity-50"
        />
        <motion.div
          variants={sparkleVariants}
          animate="animate"
          style={{ animationDelay: "2s" }}
          className="absolute bottom-40 left-24 w-3 h-3 bg-blue-400 rounded-full opacity-60"
        />
        <motion.div
          variants={sparkleVariants}
          animate="animate"
          style={{ animationDelay: "0.5s" }}
          className="absolute bottom-20 right-32 w-6 h-6 bg-yellow-400 rounded-full opacity-30"
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
            <HiCode className="text-2xl text-green-600" />
            <span className="text-lg font-semibold text-purple-600 dark:text-purple-400 uppercase tracking-wider">
              Projects
            </span>
            <HiCode className="text-2xl text-green-600" />
          </motion.div>
          
          <motion.h2 
            variants={slideUpVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white font-['Poppins',sans-serif] mb-6"
          >
            Featured{' '}
            <span className="bg-gradient-to-r from-green-600 to-purple-600 bg-clip-text text-transparent">
              Projects
            </span>
          </motion.h2>
          
          <motion.p 
            variants={slideUpVariants}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-['Roboto',sans-serif]"
          >
            Showcasing my passion for building innovative solutions and meaningful digital experiences
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

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              variants={cardVariants}
              whileHover={{ 
                scale: 1.03,
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="group relative overflow-hidden bg-white dark:bg-gray-800 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200/50 dark:border-gray-700/50"
            >
              {/* Project Image/Header */}
              <div className={`relative h-64 ${project.bgColor} overflow-hidden`}>
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-10`} />
                
                {/* Project Icon/Emoji */}
                <motion.div
                  variants={floatingVariants}
                  animate="animate"
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <div className="text-8xl opacity-20 group-hover:scale-110 transition-transform duration-500">
                    {project.emoji}
                  </div>
                </motion.div>
                
                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 left-4">
                    <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${project.color} text-white shadow-lg`}>
                      <FaStar className="text-xs" />
                      Featured
                    </span>
                  </div>
                )}

                {/* Category Badge */}
                <div className="absolute top-4 right-4">
                  <span className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300">
                    {project.category}
                  </span>
                </div>

                {/* Date Badge */}
                <div className="absolute bottom-4 left-4">
                  <div className="flex items-center gap-2 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <FaCalendarAlt className="text-purple-600 dark:text-purple-400 text-sm" />
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      {project.date}
                    </span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <motion.a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm p-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-700 transition-colors duration-200"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FaGithub className="text-lg" />
                  </motion.a>
                  <motion.a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm p-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-700 transition-colors duration-200"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FaExternalLinkAlt className="text-lg" />
                  </motion.a>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 md:p-8">
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${project.color} flex items-center justify-center`}>
                      <project.icon className="text-white text-lg" />
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white font-['Poppins',sans-serif]">
                        {project.name}
                      </h3>
                      <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                        {project.status}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6 font-['Roboto',sans-serif]">
                  {project.description}
                </p>

                {/* Stats */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
                    <FaStar className="text-yellow-500" />
                    <span>{project.stats.stars}</span>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
                    <FaEye className="text-blue-500" />
                    <span>{project.stats.views}</span>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
                    <FaHeart className="text-red-500" />
                    <span>{project.stats.likes}</span>
                  </div>
                </div>

                {/* Tech Stack */}
                <div>
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3 font-['Poppins',sans-serif] flex items-center gap-2">
                    <HiLightBulb className="text-yellow-500" />
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: techIndex * 0.05 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05 }}
                        className="inline-block bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm font-medium border border-gray-200/50 dark:border-gray-600/50 hover:shadow-md transition-all duration-200"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-6 right-6 opacity-5">
                <project.icon className="text-6xl" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          variants={slideUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center"
        >
          <div className="relative max-w-4xl mx-auto bg-gradient-to-r from-green-50 to-purple-50 dark:from-green-900/20 dark:to-purple-900/20 rounded-3xl p-8 md:p-12 border border-gray-200/50 dark:border-gray-700/50">
            <div className="absolute top-4 right-4">
              <HiSparkles className="text-2xl text-yellow-500" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 font-['Poppins',sans-serif]">
              Explore More Projects
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6 font-['Roboto',sans-serif]">
              These are just a few highlights from my portfolio. Visit my GitHub to explore more projects, 
              experiments, and contributions to the open-source community.
            </p>
            <motion.a
              href="https://github.com/sam22kalvium/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-green-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 font-['Poppins',sans-serif]"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaGithub className="text-xl" />
              View All Projects
              <HiSparkles className="text-lg" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;