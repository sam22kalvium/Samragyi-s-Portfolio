import { motion } from 'framer-motion';
import { FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt, FaAward, FaBook, FaStar, FaLaptopCode, FaChartLine } from 'react-icons/fa';
import { HiAcademicCap, HiSparkles, HiLightBulb } from 'react-icons/hi';

const Education = () => {
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
    hidden: { opacity: 0, x: -80 },
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
    hidden: { opacity: 0, x: 80 },
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
      y: [0, -10, 0],
      rotate: [0, 3, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const sparkleVariants = {
    animate: {
      scale: [1, 1.3, 1],
      rotate: [0, 180, 360],
      transition: {
        duration: 2.5,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const courses = [
    {
      name: 'Data Structures & Algorithms',
      icon: FaChartLine,
      color: 'from-blue-500 to-cyan-500',
      progress: 85
    },
    {
      name: 'Database Management Systems',
      icon: FaBook,
      color: 'from-purple-500 to-pink-500',
      progress: 90
    },
    {
      name: 'Computer Networks',
      icon: FaLaptopCode,
      color: 'from-green-500 to-emerald-500',
      progress: 80
    },
    {
      name: 'Software Engineering',
      icon: FaAward,
      color: 'from-orange-500 to-red-500',
      progress: 88
    },
    {
      name: 'Web Development',
      icon: FaLaptopCode,
      color: 'from-indigo-500 to-purple-500',
      progress: 95
    },
    {
      name: 'Operating Systems',
      icon: FaBook,
      color: 'from-teal-500 to-green-500',
      progress: 82
    },
    {
      name: 'Object-Oriented Programming',
      icon: FaChartLine,
      color: 'from-pink-500 to-rose-500',
      progress: 92
    },
    {
      name: 'System Design',
      icon: FaAward,
      color: 'from-yellow-500 to-orange-500',
      progress: 78
    }
  ];

  const achievements = [
    {
      icon: FaAward,
      title: 'Dean\'s List',
      description: 'Consistent high academic performance',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: FaLaptopCode,
      title: 'Coding Excellence',
      description: 'Top performer in programming courses',
      color: 'from-blue-500 to-purple-500'
    },
    {
      icon: FaStar,
      title: 'Project Innovation',
      description: 'Best project award in software development',
      color: 'from-green-500 to-teal-500'
    }
  ];

  return (
    <section id="education" className="relative min-h-screen py-20 px-6 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900/20"></div>
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          variants={sparkleVariants}
          animate="animate"
          className="absolute top-32 left-16 w-5 h-5 bg-blue-400 rounded-full opacity-40"
        />
        <motion.div
          variants={sparkleVariants}
          animate="animate"
          style={{ animationDelay: "0.7s" }}
          className="absolute top-64 right-20 w-4 h-4 bg-purple-400 rounded-full opacity-50"
        />
        <motion.div
          variants={sparkleVariants}
          animate="animate"
          style={{ animationDelay: "1.2s" }}
          className="absolute bottom-32 left-32 w-3 h-3 bg-green-400 rounded-full opacity-60"
        />
        <motion.div
          variants={sparkleVariants}
          animate="animate"
          style={{ animationDelay: "1.8s" }}
          className="absolute bottom-48 right-40 w-6 h-6 bg-yellow-400 rounded-full opacity-30"
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
            <HiAcademicCap className="text-2xl text-blue-600" />
            <span className="text-lg font-semibold text-purple-600 dark:text-purple-400 uppercase tracking-wider">
              Education
            </span>
            <HiAcademicCap className="text-2xl text-blue-600" />
          </motion.div>
          
          <motion.h2 
            variants={slideUpVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white font-['Poppins',sans-serif] mb-6"
          >
            My Academic{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Journey
            </span>
          </motion.h2>
          
          <motion.p 
            variants={slideUpVariants}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-['Roboto',sans-serif]"
          >
            Building a strong foundation in computer science through innovative learning
          </motion.p>
        </motion.div>

        {/* Main Education Card */}
        <motion.div
          variants={slideUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <motion.div
            variants={floatingVariants}
            animate="animate"
            className="relative max-w-5xl mx-auto"
          >
            <div className="relative bg-white dark:bg-gray-800 rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-200/50 dark:border-gray-700/50 backdrop-blur-sm">
              {/* Header Section */}
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
                <div className="flex items-center space-x-6 mb-6 lg:mb-0">
                  <div className="relative">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg">
                      <FaGraduationCap className="text-3xl text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <HiSparkles className="text-white text-sm" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white font-['Poppins',sans-serif]">
                      B.Tech in Computer Science
                    </h3>
                    <p className="text-lg md:text-xl text-purple-600 dark:text-purple-400 font-semibold">
                      JECRC University - Kalvium Program
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex items-center space-x-3 bg-blue-50 dark:bg-blue-900/20 px-4 py-2 rounded-full">
                    <FaCalendarAlt className="text-blue-600 dark:text-blue-400" />
                    <span className="text-gray-700 dark:text-gray-300 font-medium">2024 - 2028</span>
                  </div>
                  <div className="flex items-center space-x-3 bg-purple-50 dark:bg-purple-900/20 px-4 py-2 rounded-full">
                    <FaMapMarkerAlt className="text-purple-600 dark:text-purple-400" />
                    <span className="text-gray-700 dark:text-gray-300 font-medium">Jaipur, India</span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="mb-8">
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed font-['Roboto',sans-serif]">
                  Currently pursuing my Bachelor's degree in Computer Science through the prestigious 
                  <span className="font-semibold text-blue-600 dark:text-blue-400"> Kalvium Program </span>
                  at JECRC University. This innovative program combines theoretical computer science concepts 
                  with practical industry-relevant skills, emphasizing hands-on learning and real-world project development.
                </p>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-8 -right-8 w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-10 blur-sm"></div>
              <div className="absolute -bottom-8 -left-8 w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-10 blur-sm"></div>
            </div>
          </motion.div>
        </motion.div>

        {/* Coursework Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Relevant Coursework */}
          <motion.div
            variants={slideLeftVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3 mb-8">
              <HiLightBulb className="text-3xl text-yellow-500" />
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white font-['Poppins',sans-serif]">
                Relevant Coursework
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {courses.map((course, index) => (
                <motion.div
                  key={course.name}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ 
                    scale: 1.05,
                    y: -5,
                    transition: { duration: 0.2 }
                  }}
                  className="group relative overflow-hidden bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-200/50 dark:border-gray-700/50"
                >
                  {/* Gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${course.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${course.color} flex items-center justify-center`}>
                        <course.icon className="text-white text-lg" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 dark:text-white text-sm font-['Poppins',sans-serif]">
                          {course.name}
                        </h4>
                      </div>
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <motion.div
                        className={`h-2 rounded-full bg-gradient-to-r ${course.color}`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${course.progress}%` }}
                        transition={{ duration: 1.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      />
                    </div>
                    <span className="text-xs text-gray-500 dark:text-gray-400 mt-1 block">
                      {course.progress}% Complete
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Achievements */}
          <motion.div
            variants={slideRightVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3 mb-8">
              <FaAward className="text-3xl text-yellow-500" />
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white font-['Poppins',sans-serif]">
                Academic Achievements
              </h3>
            </div>

            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.title}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ 
                    scale: 1.03,
                    x: 10,
                    transition: { duration: 0.2 }
                  }}
                  className="group relative overflow-hidden bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-200/50 dark:border-gray-700/50"
                >
                  {/* Gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${achievement.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                  
                  <div className="relative z-10 flex items-center gap-4">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${achievement.color} flex items-center justify-center shadow-lg`}>
                      <achievement.icon className="text-white text-xl" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-1 font-['Poppins',sans-serif]">
                        {achievement.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm font-['Roboto',sans-serif]">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Kalvium Program Info */}
        <motion.div
          variants={slideUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center"
        >
          <div className="relative max-w-4xl mx-auto bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-3xl p-8 md:p-12 border border-gray-200/50 dark:border-gray-700/50">
            <div className="absolute top-4 right-4">
              <HiSparkles className="text-2xl text-yellow-500" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 font-['Poppins',sans-serif]">
              About Kalvium Program
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed font-['Roboto',sans-serif]">
              The Kalvium Program emphasizes <span className="font-semibold text-blue-600 dark:text-blue-400">practical learning</span> through 
              industry partnerships, ensuring students graduate with both theoretical knowledge and hands-on experience in 
              cutting-edge technologies. This innovative approach bridges the gap between academic learning and industry requirements.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;