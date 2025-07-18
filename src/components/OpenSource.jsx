import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaHeart, FaUsers, FaCode, FaStar, FaCodeBranch, FaEye } from 'react-icons/fa';
import { HiSparkles, HiLightBulb, HiHeart } from 'react-icons/hi';

const OpenSource = () => {
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

  const contributions = [
    {
      title: 'Real Dev Squad',
      description: 'Contributing to Real Dev Squad, a platform that connects developers with real-world projects and provides mentorship opportunities. Working on frontend improvements and API optimizations.',
      link: 'https://github.com/Real-Dev-Squad/website-backend.git',
      type: 'Platform',
      contributions: '15+ PRs',
      impact: 'Improved UI/UX for 1000+ developers',
      techStack: ['React', 'JavaScript', 'CSS', 'Node.js'],
      color: 'from-blue-500 to-purple-500',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20',
      emoji: '🚀',
      featured: true,
      stats: {
        stars: 245,
        forks: 89,
        commits: 15
      }
    },
    {
      title: 'MERN Ecommerce Platform',
      description: 'Developed and maintained a full-stack ecommerce solution using MERN stack. Implemented secure payment integration, inventory management, and responsive design patterns.',
      link: 'https://github.com/mohamedsamara/mern-ecommerce.git',
      type: 'Project',
      contributions: '50+ commits',
      impact: 'Used by 500+ developers as learning resource',
      techStack: ['MongoDB', 'Express', 'React', 'Node.js', 'Stripe'],
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50 dark:bg-green-900/20',
      emoji: '🛒',
      featured: true,
      stats: {
        stars: 124,
        forks: 67,
        commits: 52
      }
    },
  ];

  const contributionStats = [
    {
      icon: FaGithub,
      value: '100+',
      label: 'Contributions',
      color: 'from-gray-500 to-gray-700'
    },
    {
      icon: FaCodeBranch,
      value: '25+',
      label: 'Pull Requests',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: FaStar,
      value: '369+',
      label: 'Stars Earned',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: FaUsers,
      value: '1.5K+',
      label: 'Developers Helped',
      color: 'from-blue-500 to-cyan-500'
    }
  ];

  return (
    <section id="open-source" className="relative min-h-screen py-20 px-6 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-green-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900/20"></div>
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          variants={sparkleVariants}
          animate="animate"
          className="absolute top-20 left-16 w-4 h-4 bg-purple-400 rounded-full opacity-40"
        />
        <motion.div
          variants={sparkleVariants}
          animate="animate"
          style={{ animationDelay: "1s" }}
          className="absolute top-60 right-20 w-5 h-5 bg-green-400 rounded-full opacity-50"
        />
        <motion.div
          variants={sparkleVariants}
          animate="animate"
          style={{ animationDelay: "2s" }}
          className="absolute bottom-32 left-20 w-3 h-3 bg-blue-400 rounded-full opacity-60"
        />
        <motion.div
          variants={sparkleVariants}
          animate="animate"
          style={{ animationDelay: "0.5s" }}
          className="absolute bottom-20 right-40 w-6 h-6 bg-yellow-400 rounded-full opacity-30"
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
            <HiHeart className="text-2xl text-red-500" />
            <span className="text-lg font-semibold text-purple-600 dark:text-purple-400 uppercase tracking-wider">
              Open Source
            </span>
            <HiHeart className="text-2xl text-red-500" />
          </motion.div>
          
          <motion.h2 
            variants={slideUpVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white font-['Poppins',sans-serif] mb-6"
          >
            Community{' '}
            <span className="bg-gradient-to-r from-purple-600 to-green-600 bg-clip-text text-transparent">
              Contributions
            </span>
          </motion.h2>
          
          <motion.p 
            variants={slideUpVariants}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-['Roboto',sans-serif]"
          >
            Contributing to the developer community through meaningful open source projects
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
          {contributionStats.map((stat, index) => (
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

        {/* Contributions Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16"
        >
          {contributions.map((contribution, index) => (
            <motion.div
              key={contribution.title}
              variants={cardVariants}
              whileHover={{ 
                scale: 1.03,
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="group relative overflow-hidden bg-white dark:bg-gray-800 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200/50 dark:border-gray-700/50"
            >
              {/* Header Section */}
              <div className={`relative h-48 ${contribution.bgColor} overflow-hidden`}>
                <div className={`absolute inset-0 bg-gradient-to-br ${contribution.color} opacity-10`} />
                
                {/* Floating Emoji */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl opacity-20 group-hover:scale-110 transition-transform duration-500">
                    {contribution.emoji}
                  </div>
                </div>
                
                {/* Featured Badge */}
                {contribution.featured && (
                  <div className="absolute top-4 left-4">
                    <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${contribution.color} text-white shadow-lg`}>
                      <FaStar className="text-xs" />
                      Featured
                    </span>
                  </div>
                )}

                {/* Type Badge */}
                <div className="absolute top-4 right-4">
                  <span className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300">
                    {contribution.type}
                  </span>
                </div>

                {/* Action Button */}
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <motion.a
                    href={contribution.link}
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

              {/* Content Section */}
              <div className="p-6 md:p-8">
                {/* Title */}
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${contribution.color} flex items-center justify-center`}>
                    <FaGithub className="text-white text-lg" />
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white font-['Poppins',sans-serif]">
                      {contribution.title}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6 font-['Roboto',sans-serif]">
                  {contribution.description}
                </p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1 text-sm text-gray-500 dark:text-gray-400 mb-1">
                      <FaStar className="text-yellow-500" />
                      <span>Stars</span>
                    </div>
                    <div className="text-lg font-bold text-gray-900 dark:text-white">
                      {contribution.stats.stars}
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1 text-sm text-gray-500 dark:text-gray-400 mb-1">
                      <FaCodeBranch className="text-blue-500" />
                      <span>Forks</span>
                    </div>
                    <div className="text-lg font-bold text-gray-900 dark:text-white">
                      {contribution.stats.forks}
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1 text-sm text-gray-500 dark:text-gray-400 mb-1">
                      <FaCode className="text-green-500" />
                      <span>Commits</span>
                    </div>
                    <div className="text-lg font-bold text-gray-900 dark:text-white">
                      {contribution.stats.commits}
                    </div>
                  </div>
                </div>

                {/* Tech Stack */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                    <HiSparkles className="text-purple-500" />
                    Technologies Used:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {contribution.techStack.map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: techIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="px-3 py-1 text-xs font-medium bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/20 dark:to-pink-900/20 text-purple-700 dark:text-purple-300 rounded-full border border-purple-200/50 dark:border-purple-700/50"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center"
        >
          <motion.div
            variants={cardVariants}
            className="relative overflow-hidden bg-gradient-to-r from-purple-50 to-green-50 dark:from-purple-900/20 dark:to-green-900/20 rounded-3xl p-8 md:p-12 border border-purple-200/50 dark:border-purple-700/50"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-green-500/5 dark:from-purple-500/10 dark:to-green-500/10"></div>
            
            <div className="relative z-10">
              <motion.div
                variants={sparkleVariants}
                animate="animate"
                className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-green-500 text-white mb-6 shadow-lg"
              >
                <HiLightBulb className="text-2xl" />
              </motion.div>
              
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4 font-['Poppins',sans-serif]">
                Let's Build Something Amazing Together!
              </h3>
              
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto font-['Roboto',sans-serif]">
                I'm always excited to collaborate on meaningful open source projects. 
                If you have an idea that could benefit from my skills, let's make it happen!
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
              href="https://github.com/sam22kalvium/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-green-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaGithub className="text-xl" />
                  <span>View My GitHub</span>
                </motion.a>
                
                <motion.a
                  href="#contact"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-200 dark:border-gray-700"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <HiHeart className="text-xl text-red-500" />
                  <span>Get In Touch</span>
                </motion.a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default OpenSource;