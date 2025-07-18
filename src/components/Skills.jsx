import { motion } from 'framer-motion';
import { 
  FaReact, 
  FaNodeJs, 
  FaJs, 
  FaHtml5, 
  FaCss3Alt, 
  FaGitAlt,
  FaDocker,
  FaAws,
  FaDatabase,
  FaPython,
  FaJava,
  FaCode,
  FaLaptopCode,
  FaTools,
  FaCloud,
  FaChartBar,
  FaBrain
} from 'react-icons/fa';
import { 
  SiMongodb, 
  SiPostgresql, 
  SiExpress, 
  SiTailwindcss,
  SiTypescript,
  SiRedux,
  SiGraphql,
  SiNestjs,
  SiFirebase,
  SiVercel,
  SiNetlify,
  SiJest,
  SiCypress,
  SiPostman,
  SiVisualstudiocode,
  SiFigma
} from 'react-icons/si';
import { HiSparkles, HiLightBulb, HiCode, HiDesktopComputer } from 'react-icons/hi';

const Skills = () => {
  // Enhanced Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
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
    hidden: { opacity: 0, y: 40, scale: 0.9 },
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

  const skillVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  const sparkleVariants = {
    animate: {
      scale: [1, 1.2, 1],
      rotate: [0, 180, 360],
      transition: {
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const floatingVariants = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const skillCategories = [
    {
      title: 'Frontend',
      icon: FaReact,
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20',
      skills: [
        { name: 'React', icon: FaReact, level: 'Advanced', percentage: 90 },
        { name: 'JavaScript', icon: FaJs, level: 'Advanced', percentage: 95 },
        { name: 'TypeScript', icon: SiTypescript, level: 'Intermediate', percentage: 75 },
        { name: 'HTML5', icon: FaHtml5, level: 'Advanced', percentage: 95 },
        { name: 'CSS3', icon: FaCss3Alt, level: 'Advanced', percentage: 90 },
        { name: 'Tailwind CSS', icon: SiTailwindcss, level: 'Advanced', percentage: 85 },
        { name: 'Redux', icon: SiRedux, level: 'Intermediate', percentage: 70 },
      ]
    },
    {
      title: 'Backend',
      icon: FaNodeJs,
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50 dark:bg-green-900/20',
      skills: [
        { name: 'Node.js', icon: FaNodeJs, level: 'Advanced', percentage: 85 },
        { name: 'Express.js', icon: SiExpress, level: 'Advanced', percentage: 90 },
        { name: 'NestJS', icon: SiNestjs, level: 'Intermediate', percentage: 65 },
        { name: 'GraphQL', icon: SiGraphql, level: 'Intermediate', percentage: 70 },
        { name: 'REST APIs', icon: FaCode, level: 'Advanced', percentage: 90 },
        { name: 'JWT', icon: FaCode, level: 'Advanced', percentage: 85 },
      ]
    },
    {
      title: 'Database',
      icon: FaDatabase,
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-50 dark:bg-purple-900/20',
      skills: [
        { name: 'PostgreSQL', icon: SiPostgresql, level: 'Advanced', percentage: 80 },
        { name: 'MongoDB', icon: SiMongodb, level: 'Advanced', percentage: 85 },
        { name: 'Firebase', icon: SiFirebase, level: 'Intermediate', percentage: 75 },
        { name: 'Redis', icon: FaDatabase, level: 'Intermediate', percentage: 65 },
      ]
    },
    {
      title: 'Programming',
      icon: FaPython,
      color: 'from-yellow-500 to-orange-500',
      bgColor: 'bg-yellow-50 dark:bg-yellow-900/20',
      skills: [
        { name: 'JavaScript', icon: FaJs, level: 'Advanced', percentage: 95 },
        { name: 'Python', icon: FaPython, level: 'Intermediate', percentage: 75 },
        { name: 'Java', icon: FaJava, level: 'Intermediate', percentage: 70 },
        { name: 'C++', icon: FaCode, level: 'Intermediate', percentage: 65 },
      ]
    },
    {
      title: 'DSA',
      icon: FaBrain,
      color: 'from-red-500 to-rose-500',
      bgColor: 'bg-red-50 dark:bg-red-900/20',
      skills: [
        { name: 'Arrays & Strings', icon: FaChartBar, level: 'Advanced', percentage: 85 },
        { name: 'Linked Lists', icon: FaChartBar, level: 'Advanced', percentage: 90 },
        { name: 'Trees & Graphs', icon: FaChartBar, level: 'Intermediate', percentage: 75 },
        { name: 'Dynamic Programming', icon: FaChartBar, level: 'Intermediate', percentage: 70 },
        { name: 'Sorting & Searching', icon: FaChartBar, level: 'Advanced', percentage: 85 },
      ]
    },
    {
      title: 'Tools',
      icon: FaTools,
      color: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-50 dark:bg-orange-900/20',
      skills: [
        { name: 'Git', icon: FaGitAlt, level: 'Advanced', percentage: 90 },
        { name: 'VS Code', icon: SiVisualstudiocode, level: 'Advanced', percentage: 95 },
        { name: 'Postman', icon: SiPostman, level: 'Advanced', percentage: 85 },
        { name: 'Figma', icon: SiFigma, level: 'Intermediate', percentage: 70 },
        { name: 'Jest', icon: SiJest, level: 'Intermediate', percentage: 65 },
        { name: 'Cypress', icon: SiCypress, level: 'Intermediate', percentage: 60 },
      ]
    },
    {
      title: 'Deployment',
      icon: FaCloud,
      color: 'from-indigo-500 to-purple-500',
      bgColor: 'bg-indigo-50 dark:bg-indigo-900/20',
      skills: [
        { name: 'AWS', icon: FaAws, level: 'Intermediate', percentage: 65 },
        { name: 'Vercel', icon: SiVercel, level: 'Advanced', percentage: 90 },
        { name: 'Netlify', icon: SiNetlify, level: 'Advanced', percentage: 85 },
        { name: 'Docker', icon: FaDocker, level: 'Intermediate', percentage: 70 },
        { name: 'GitHub Actions', icon: FaCode, level: 'Intermediate', percentage: 65 },
      ]
    },
  ];

  const stats = [
    {
      icon: FaCode,
      value: '25+',
      label: 'Technologies',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: FaLaptopCode,
      value: '7',
      label: 'Categories',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: FaChartBar,
      value: '15+',
      label: 'Advanced Skills',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: HiSparkles,
      value: '3+',
      label: 'Years Experience',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const getLevelColor = (level) => {
    const colors = {
      'Advanced': 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400',
      'Intermediate': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400',
      'Beginner': 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400',
    };
    return colors[level] || colors['Intermediate'];
  };

  return (
    <section id="skills" className="relative min-h-screen py-20 px-6 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-orange-900/20"></div>
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          variants={sparkleVariants}
          animate="animate"
          className="absolute top-32 left-12 w-5 h-5 bg-orange-400 rounded-full opacity-40"
        />
        <motion.div
          variants={sparkleVariants}
          animate="animate"
          style={{ animationDelay: "1.2s" }}
          className="absolute top-96 right-20 w-4 h-4 bg-blue-400 rounded-full opacity-50"
        />
        <motion.div
          variants={sparkleVariants}
          animate="animate"
          style={{ animationDelay: "2.4s" }}
          className="absolute bottom-32 left-28 w-3 h-3 bg-purple-400 rounded-full opacity-60"
        />
        <motion.div
          variants={sparkleVariants}
          animate="animate"
          style={{ animationDelay: "0.6s" }}
          className="absolute bottom-64 right-12 w-6 h-6 bg-green-400 rounded-full opacity-30"
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
            <HiDesktopComputer className="text-2xl text-orange-600" />
            <span className="text-lg font-semibold text-purple-600 dark:text-purple-400 uppercase tracking-wider">
              Skills
            </span>
            <HiDesktopComputer className="text-2xl text-orange-600" />
          </motion.div>
          
          <motion.h2 
            variants={slideUpVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white font-['Poppins',sans-serif] mb-6"
          >
            Technical{' '}
            <span className="bg-gradient-to-r from-orange-600 to-purple-600 bg-clip-text text-transparent">
              Expertise
            </span>
          </motion.h2>
          
          <motion.p 
            variants={slideUpVariants}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-['Roboto',sans-serif]"
          >
            A comprehensive overview of technologies and tools I've mastered throughout my journey
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

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              variants={cardVariants}
              whileHover={{ 
                scale: 1.02,
                y: -8,
                transition: { duration: 0.3 }
              }}
              className={`group relative overflow-hidden ${category.bgColor} rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200/50 dark:border-gray-700/50`}
            >
              {/* Gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
              
              {/* Category Header */}
              <div className="relative z-10 mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <motion.div
                    variants={floatingVariants}
                    animate="animate"
                    className={`w-12 h-12 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center shadow-lg`}
                  >
                    <category.icon className="text-white text-xl" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white font-['Poppins',sans-serif]">
                    {category.title}
                  </h3>
                </div>
              </div>

              {/* Skills List */}
              <div className="relative z-10 space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    variants={skillVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ delay: skillIndex * 0.1 }}
                    className="group/skill"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        {skill.icon && (
                          <skill.icon className="text-lg text-gray-600 dark:text-gray-400 group-hover/skill:text-purple-600 dark:group-hover/skill:text-purple-400 transition-colors duration-200" />
                        )}
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                          {skill.name}
                        </span>
                      </div>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getLevelColor(skill.level)}`}>
                        {skill.level}
                      </span>
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <motion.div
                        className={`h-2 rounded-full bg-gradient-to-r ${category.color}`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.percentage}%` }}
                        transition={{ duration: 1.5, delay: skillIndex * 0.1 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-4 right-4 opacity-5">
                <category.icon className="text-4xl" />
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
          <div className="relative max-w-4xl mx-auto bg-gradient-to-r from-orange-50 to-purple-50 dark:from-orange-900/20 dark:to-purple-900/20 rounded-3xl p-8 md:p-12 border border-gray-200/50 dark:border-gray-700/50">
            <div className="absolute top-4 right-4">
              <HiSparkles className="text-2xl text-yellow-500" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 font-['Poppins',sans-serif]">
              Always Learning & Growing
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6 font-['Roboto',sans-serif]">
              I'm constantly expanding my skill set and staying updated with the latest technologies. 
              Currently exploring <span className="font-semibold text-orange-600 dark:text-orange-400">advanced system design patterns</span>, 
              <span className="font-semibold text-purple-600 dark:text-purple-400"> microservices architecture</span>, and 
              <span className="font-semibold text-blue-600 dark:text-blue-400"> modern DevOps practices</span> to build more scalable and efficient applications.
            </p>
            <motion.div
              className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-600 to-purple-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <HiLightBulb className="text-lg" />
              <span>Ready to Innovate</span>
              <HiSparkles className="text-lg" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;