import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt, FaCode, FaUserTie, FaRocket, FaUsers, FaLaptopCode, FaAward, FaGraduationCap } from 'react-icons/fa';
import { HiSparkles, HiBriefcase, HiLightningBolt } from 'react-icons/hi';

const Experience = () => {
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
    hidden: { opacity: 0, y: 30, scale: 0.95 },
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
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const timelineVariants = {
    animate: {
      scaleY: [0, 1],
      transition: {
        duration: 1.5,
        ease: "easeInOut"
      }
    }
  };

  const experiences = [
    {
      title: 'Software Development Intern',
      company: 'Kalvium',
      location: 'Remote',
      period: 'Jan 2024 - Present',
      type: 'Internship',
      status: 'Current',
      description: 'Contributing to innovative educational technology solutions',
      icon: FaCode,
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20',
      responsibilities: [
        'Developed and maintained web applications using React.js and Node.js',
        'Collaborated with cross-functional teams to deliver high-quality software solutions',
        'Implemented responsive UI components and optimized application performance',
        'Participated in code reviews and followed best practices for clean code development',
      ],
      skills: ['React.js', 'Node.js', 'JavaScript', 'Git', 'Team Collaboration']
    },
    {
      title: 'Class Representative',
      company: 'JECRC University',
      location: 'Jaipur, India',
      period: 'Aug 2024 - Present',
      type: 'Leadership',
      status: 'Current',
      description: 'Leading and representing the Computer Science batch',
      icon: FaUserTie,
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-50 dark:bg-purple-900/20',
      responsibilities: [
        'Facilitate communication between students and faculty members',
        'Organize academic events and workshops for skill development',
        'Coordinate group projects and study sessions for better learning outcomes',
        'Represent student concerns and feedback to university administration',
      ],
      skills: ['Leadership', 'Communication', 'Event Management', 'Problem Solving']
    },
    {
      title: 'Volunteer',
      company: 'ISRO (Indian Space Research Organisation)',
      location: 'Jaipur, India',
      period: 'Jun 2023 - Aug 2023',
      type: 'Volunteer',
      status: 'Completed',
      description: 'Contributing to space research and technology initiatives',
      icon: FaRocket,
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50 dark:bg-green-900/20',
      responsibilities: [
        'Assisted in organizing space science workshops and outreach programs',
        'Supported technical documentation and research activities',
        'Contributed to educational content development for space science awareness',
        'Collaborated with scientists and engineers on various space technology projects',
      ],
      skills: ['Research', 'Documentation', 'Space Technology', 'Team Work']
    },
  ];

  const stats = [
    {
      icon: FaBriefcase,
      value: '3+',
      label: 'Work Experiences',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: FaUsers,
      value: '5+',
      label: 'Team Projects',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: FaAward,
      value: '2+',
      label: 'Leadership Roles',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: FaLaptopCode,
      value: '10+',
      label: 'Technologies',
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section id="experience" className="relative min-h-screen py-20 px-6 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900/30"></div>
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          variants={sparkleVariants}
          animate="animate"
          className="absolute top-20 left-16 w-4 h-4 bg-purple-400 rounded-full opacity-60"
        />
        <motion.div
          variants={sparkleVariants}
          animate="animate"
          style={{ animationDelay: "0.8s" }}
          className="absolute top-64 right-24 w-5 h-5 bg-blue-400 rounded-full opacity-40"
        />
        <motion.div
          variants={sparkleVariants}
          animate="animate"
          style={{ animationDelay: "1.5s" }}
          className="absolute bottom-32 left-32 w-3 h-3 bg-green-400 rounded-full opacity-50"
        />
        <motion.div
          variants={sparkleVariants}
          animate="animate"
          style={{ animationDelay: "2s" }}
          className="absolute bottom-48 right-16 w-6 h-6 bg-yellow-400 rounded-full opacity-30"
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
            <HiBriefcase className="text-2xl text-purple-600" />
            <span className="text-lg font-semibold text-purple-600 dark:text-purple-400 uppercase tracking-wider">
              Experience
            </span>
            <HiBriefcase className="text-2xl text-purple-600" />
          </motion.div>
          
          <motion.h2 
            variants={slideUpVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white font-['Poppins',sans-serif] mb-6"
          >
            Professional{' '}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Journey
            </span>
          </motion.h2>
          
          <motion.p 
            variants={slideUpVariants}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-['Roboto',sans-serif]"
          >
            Building expertise through diverse opportunities and meaningful contributions
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

        {/* Experience Cards Section */}
        <div className="relative max-w-6xl mx-auto pt-8">
          {/* Experience Cards */}
          <div className="grid gap-8 md:gap-12">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.title}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="relative group"
              >
                {/* Floating Icon */}
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  transition={{ 
                    delay: 0.2, 
                    duration: 0.8,
                    type: "spring",
                    stiffness: 100
                  }}
                  viewport={{ once: true }}
                  className="absolute -top-8 left-8 z-30"
                >
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${experience.color} flex items-center justify-center shadow-xl border-4 border-white dark:border-gray-800 group-hover:scale-110 transition-transform duration-300`}>
                    <experience.icon className="text-white text-2xl" />
                  </div>
                </motion.div>

                {/* Experience Card */}
                <div className="relative">
                  <motion.div
                    whileHover={{ 
                      scale: 1.02,
                      y: -8,
                      rotateY: 5,
                      transition: { duration: 0.3 }
                    }}
                    className={`relative overflow-hidden ${experience.bgColor} rounded-3xl p-8 md:p-10 pt-16 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-200/50 dark:border-gray-700/50 backdrop-blur-sm`}
                  >
                    {/* Gradient overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${experience.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                    
                    {/* Animated Background Pattern */}
                    <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
                      <motion.div
                        animate={{ 
                          rotate: 360,
                          scale: [1, 1.1, 1]
                        }}
                        transition={{ 
                          duration: 20,
                          repeat: Infinity,
                          ease: "linear"
                        }}
                        className={`w-full h-full bg-gradient-to-r ${experience.color} rounded-full blur-xl`}
                      />
                    </div>

                    {/* Content */}
                    <div className="relative z-10">
                      {/* Header */}
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                        <div className="mb-4 lg:mb-0">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white font-['Poppins',sans-serif]">
                              {experience.title}
                            </h3>
                            {experience.status === 'Current' && (
                              <span className="inline-flex items-center gap-1 bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400 px-2 py-1 rounded-full text-xs font-medium">
                                <span className="animate-pulse">●</span> Current
                              </span>
                            )}
                          </div>
                          <p className="text-lg md:text-xl text-purple-600 dark:text-purple-400 font-semibold">
                            {experience.company}
                          </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-3">
                          <div className="flex items-center gap-2 bg-white/50 dark:bg-gray-700/50 px-3 py-2 rounded-full">
                            <FaCalendarAlt className="text-purple-600 dark:text-purple-400 text-sm" />
                            <span className="text-gray-700 dark:text-gray-300 font-medium text-sm">
                              {experience.period}
                            </span>
                          </div>
                          <div className="flex items-center gap-2 bg-white/50 dark:bg-gray-700/50 px-3 py-2 rounded-full">
                            <FaMapMarkerAlt className="text-purple-600 dark:text-purple-400 text-sm" />
                            <span className="text-gray-700 dark:text-gray-300 font-medium text-sm">
                              {experience.location}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Type Badge */}
                      <div className="mb-4">
                        <span className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r ${experience.color} text-white shadow-lg`}>
                          <HiSparkles className="text-sm" />
                          {experience.type}
                        </span>
                      </div>

                      {/* Description */}
                      <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed font-['Roboto',sans-serif]">
                        {experience.description}
                      </p>

                      {/* Responsibilities */}
                      <div className="mb-6">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4 font-['Poppins',sans-serif] flex items-center gap-2">
                          <HiLightningBolt className="text-yellow-500" />
                          Key Responsibilities
                        </h4>
                        <ul className="space-y-3">
                          {experience.responsibilities.map((responsibility, idx) => (
                            <motion.li
                              key={idx}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.4, delay: idx * 0.1 }}
                              viewport={{ once: true }}
                              className="flex items-start gap-3"
                            >
                              <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${experience.color} mt-2 flex-shrink-0`} />
                              <span className="text-gray-700 dark:text-gray-300 leading-relaxed font-['Roboto',sans-serif]">
                                {responsibility}
                              </span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>

                      {/* Skills */}
                      <div>
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3 font-['Poppins',sans-serif] flex items-center gap-2">
                          <FaCode className="text-blue-500" />
                          Technologies & Skills
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {experience.skills.map((skill, idx) => (
                            <motion.span
                              key={skill}
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.3, delay: idx * 0.05 }}
                              viewport={{ once: true }}
                              whileHover={{ scale: 1.05 }}
                              className="inline-block bg-white/80 dark:bg-gray-700/80 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm font-medium border border-gray-200/50 dark:border-gray-600/50 hover:shadow-md transition-all duration-200"
                            >
                              {skill}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Floating Particles */}
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                      <motion.div
                        animate={{
                          y: [-10, 10, -10],
                          x: [-5, 5, -5],
                        }}
                        transition={{
                          duration: 6,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                        className="absolute top-8 right-8 w-2 h-2 bg-purple-400 rounded-full opacity-40"
                      />
                      <motion.div
                        animate={{
                          y: [10, -10, 10],
                          x: [5, -5, 5],
                        }}
                        transition={{
                          duration: 8,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: 1
                        }}
                        className="absolute bottom-8 right-12 w-1.5 h-1.5 bg-blue-400 rounded-full opacity-30"
                      />
                      <motion.div
                        animate={{
                          y: [-8, 8, -8],
                          x: [-3, 3, -3],
                        }}
                        transition={{
                          duration: 7,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: 2
                        }}
                        className="absolute top-16 right-16 w-1 h-1 bg-green-400 rounded-full opacity-50"
                      />
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          variants={slideUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mt-16"
        >
          <div className="relative max-w-4xl mx-auto bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 rounded-3xl p-8 md:p-12 border border-gray-200/50 dark:border-gray-700/50">
            <div className="absolute top-4 right-4">
              <HiSparkles className="text-2xl text-yellow-500" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 font-['Poppins',sans-serif]">
              Ready for New Challenges
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed font-['Roboto',sans-serif]">
              I'm always excited to take on new challenges and contribute to innovative projects. 
              My diverse experience in <span className="font-semibold text-purple-600 dark:text-purple-400">software development</span>, 
              <span className="font-semibold text-blue-600 dark:text-blue-400"> leadership</span>, and 
              <span className="font-semibold text-green-600 dark:text-green-400"> collaboration</span> has prepared me 
              to make meaningful contributions in any tech environment.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;