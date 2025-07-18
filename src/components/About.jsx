import { motion } from 'framer-motion';
import { FaCode, FaProjectDiagram, FaUsers, FaBullseye, FaGithub, FaLinkedin, FaTwitter, FaDownload } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import { HiSparkles } from 'react-icons/hi';

const About = () => {
  // Handle CV download/view
  const handleDownloadCV = () => {
    // Open PDF in new tab for viewing - user can download from there
    const pdfPath = '/resume/Samragyi\'s Resume.docx.pdf';
    window.open(pdfPath, '_blank');
  };

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

  const slideLeftVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  const slideRightVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
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

  const floatingVariants = {
    animate: {
      y: [0, -15, 0],
      rotate: [0, 5, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const sparkleVariants = {
    animate: {
      scale: [1, 1.2, 1],
      rotate: [0, 180, 360],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const badges = [
    {
      icon: FaCode,
      title: "2+ Years Experience",
      description: "Built scalable full-stack applications",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50 dark:bg-blue-900/20"
    },
    {
      icon: FaProjectDiagram,
      title: "5+ Projects",
      description: "Deployed full-cycle applications",
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50 dark:bg-purple-900/20"
    },
    {
      icon: FaUsers,
      title: "Team Collaborator",
      description: "Open-source & project teamwork",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50 dark:bg-green-900/20"
    },
    {
      icon: FaBullseye,
      title: "Focused on Quality",
      description: "Clean, maintainable, tested code",
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50 dark:bg-orange-900/20"
    }
  ];

  const socialLinks = [
    { icon: FaGithub, href: "https://github.com/sam22kalvium/", label: "GitHub" },
    { icon: FaLinkedin, href: "https://www.linkedin.com/in/samragyi-sharma-1b1082315?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", label: "LinkedIn" },
    { icon: SiLeetcode, href: "https://leetcode.com/u/Samragyi_22/", label: "LeetCode" }
  ];

  return (
    <section id="about" className="relative min-h-screen py-20 px-6 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900/30"></div>
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          variants={sparkleVariants}
          animate="animate"
          className="absolute top-20 left-20 w-4 h-4 bg-blue-400 rounded-full opacity-60"
        />
        <motion.div
          variants={sparkleVariants}
          animate="animate"
          style={{ animationDelay: "0.5s" }}
          className="absolute top-40 right-32 w-6 h-6 bg-purple-400 rounded-full opacity-40"
        />
        <motion.div
          variants={sparkleVariants}
          animate="animate"
          style={{ animationDelay: "1s" }}
          className="absolute bottom-40 left-40 w-3 h-3 bg-green-400 rounded-full opacity-50"
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
            <HiSparkles className="text-2xl text-yellow-500" />
            <span className="text-lg font-semibold text-purple-600 dark:text-purple-400 uppercase tracking-wider">
              About Me
            </span>
            <HiSparkles className="text-2xl text-yellow-500" />
          </motion.div>
          
          <motion.h2 
            variants={slideUpVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white font-['Poppins',sans-serif] mb-6"
          >
            Know More About{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Myself
            </span>
          </motion.h2>
          
          <motion.p 
            variants={slideUpVariants}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-['Roboto',sans-serif]"
          >
            Passionate developer crafting digital experiences with modern technologies
          </motion.p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Profile Visual */}
          <motion.div 
            variants={slideLeftVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="relative"
          >
            <motion.div
              variants={floatingVariants}
              animate="animate"
              className="relative max-w-md mx-auto"
            >
              {/* Main Profile Card */}
              <div className="relative bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-2xl border border-gray-200/50 dark:border-gray-700/50 backdrop-blur-sm">
                {/* Profile Image Container */}
                <div className="relative mb-6">
                  {/* Outer glow ring */}
                  <div className="absolute inset-0 w-64 h-64 mx-auto rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-pulse opacity-20 blur-md"></div>
                  
                  {/* Main image container with enhanced styling */}
                  <div className="relative w-64 h-64 mx-auto rounded-full bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 p-1 shadow-2xl">
                    {/* Inner border with gradient */}
                    <div className="w-full h-full rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-1">
                      <div className="w-full h-full rounded-full bg-white dark:bg-gray-800 overflow-hidden shadow-inner">
                        <img 
                          src="/profile.png" 
                          alt="Samragyi Sharma - Profile" 
                          className="w-full h-full object-cover object-center hover:scale-110 transition-transform duration-500 ease-in-out filter brightness-105 contrast-105"
                        />
                      </div>
                    </div>
                  </div>
                  
                  {/* Decorative floating elements around image */}
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-bounce opacity-80 shadow-lg"></div>
                  <div className="absolute -bottom-2 -left-4 w-6 h-6 bg-gradient-to-r from-green-400 to-blue-500 rounded-full animate-pulse opacity-70 shadow-lg"></div>
                  <div className="absolute top-8 -left-6 w-4 h-4 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full animate-ping opacity-60"></div>
                  
                  {/* Status Badge */}
                  <div className="absolute bottom-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg">
                    <span className="animate-pulse">●</span> Available
                  </div>
                </div>

                {/* Profile Info */}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 font-['Poppins',sans-serif]">
                    Samragyi Sharma
                  </h3>
                  <p className="text-purple-600 dark:text-purple-400 font-medium mb-4">
                    Full Stack Developer
                  </p>
                  
                  {/* Social Links */}
                  <div className="flex justify-center gap-4 mb-6">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={social.label}
                        href={social.href}
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white hover:shadow-lg transition-all duration-300"
                      >
                        <social.icon className="text-lg" />
                      </motion.a>
                    ))}
                  </div>
                  
                  {/* Download CV Button */}
                  <motion.button
                    onClick={handleDownloadCV}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full font-medium hover:shadow-lg transition-all duration-300"
                  >
                    <FaDownload className="text-sm" />
                    Download CV
                  </motion.button>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-20 blur-sm"></div>
                <div className="absolute -bottom-6 -left-6 w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-20 blur-sm"></div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - About Content */}
          <motion.div 
            variants={slideRightVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-8"
          >
            {/* Main Heading */}
            <motion.h3 
              variants={slideUpVariants}
              className="text-3xl lg:text-4xl font-extrabold text-gray-900 dark:text-white font-['Poppins',sans-serif] leading-tight"
            >
              Passionate Developer &{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Problem Solver
              </span>
            </motion.h3>

            {/* Description */}
            <motion.div 
              variants={slideUpVariants}
              className="space-y-4 text-lg text-gray-600 dark:text-gray-300 leading-relaxed font-['Roboto',sans-serif]"
            >
              <p>
                I'm a dedicated full-stack developer with hands-on experience building scalable 
                <span className="font-semibold text-blue-600 dark:text-blue-400"> MERN + PostgreSQL </span>
                applications. I love turning complex problems into simple, beautiful solutions.
              </p>
              
              <p>
                My journey in software development is driven by curiosity and a commitment to 
                writing clean, maintainable code. I believe in the power of technology to create 
                positive impact and meaningful user experiences.
              </p>
              
              <p>
                When I'm not coding, I contribute to open-source projects, explore new technologies, 
                and engage with the developer community to stay at the forefront of modern development practices.
              </p>
            </motion.div>

            {/* Feature Badges Grid */}
            <motion.div
              variants={containerVariants}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-8"
            >
              {badges.map((badge, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover={{ 
                    scale: 1.05,
                    y: -8,
                    transition: { duration: 0.3 }
                  }}
                  className={`group relative overflow-hidden ${badge.bgColor} rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 hover:shadow-xl transition-all duration-300 cursor-pointer`}
                >
                  {/* Gradient overlay on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${badge.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                  
                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r ${badge.color} text-white mb-4 shadow-lg`}>
                      <badge.icon className="text-xl" />
                    </div>
                    
                    {/* Title */}
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2 font-['Poppins',sans-serif]">
                      {badge.title}
                    </h4>
                    
                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-300 text-sm font-['Roboto',sans-serif]">
                      {badge.description}
                    </p>
                  </div>

                  {/* Decorative corner */}
                  <div className="absolute top-0 right-0 w-16 h-16 -translate-y-8 translate-x-8 bg-gradient-to-br from-transparent via-transparent to-white/20 dark:to-gray-700/20 rounded-full opacity-50" />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;