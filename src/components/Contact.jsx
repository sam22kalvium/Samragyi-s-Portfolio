import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaEnvelope, 
  FaLinkedin, 
  FaGithub, 
  FaCode, 
  FaMapMarkerAlt, 
  FaPhone,
  FaPaperPlane,
  FaRocket,
  FaHeart,
  FaCheckCircle,
  FaTimesCircle
} from 'react-icons/fa';
import { HiMail, HiLocationMarker, HiPhone, HiChat } from 'react-icons/hi';

const Contact = () => {
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

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const contactInfo = [
    {
      icon: FaEnvelope,
      label: 'Email',
      value: 'samragyisharma.2226@gmail.com',
      href: 'mailto:samragyisharma.2226@gmail.com',
      color: 'from-red-500 to-pink-500',
      bgColor: 'bg-red-50 dark:bg-red-900/20',
      description: 'Send me a friendly message! 💌'
    },
    {
      icon: FaGithub,
      label: 'GitHub',
      value: 'sam22kalvium',
      href: 'https://github.com/sam22kalvium/',
      color: 'from-gray-700 to-gray-900',
      bgColor: 'bg-gray-50 dark:bg-gray-900/20',
      description: 'Explore my code adventures! 🚀'
    },
    {
      icon: FaLinkedin,
      label: 'LinkedIn',
      value: 'samragyi-sharma',
      href: 'https://www.linkedin.com/in/samragyi-sharma-1b1082315?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      color: 'from-blue-600 to-blue-800',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20',
      description: 'Let\'s network over coffee! ☕'
    },
    {
      icon: FaCode,
      label: 'LeetCode',
      value: 'Samragyi_22',
      href: 'https://leetcode.com/u/Samragyi_22/',
      color: 'from-yellow-600 to-orange-600',
      bgColor: 'bg-yellow-50 dark:bg-yellow-900/20',
      description: 'Join my coding journey! 💻'
    },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative min-h-screen py-20 px-6 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900/20"></div>
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          variants={sparkleVariants}
          animate="animate"
          className="absolute top-16 left-12 w-5 h-5 bg-blue-400 rounded-full opacity-40"
        />
        <motion.div
          variants={sparkleVariants}
          animate="animate"
          style={{ animationDelay: "1s" }}
          className="absolute top-64 right-16 w-4 h-4 bg-purple-400 rounded-full opacity-50"
        />
        <motion.div
          variants={sparkleVariants}
          animate="animate"
          style={{ animationDelay: "2s" }}
          className="absolute bottom-40 left-16 w-3 h-3 bg-pink-400 rounded-full opacity-60"
        />
        <motion.div
          variants={sparkleVariants}
          animate="animate"
          style={{ animationDelay: "0.5s" }}
          className="absolute bottom-20 right-20 w-6 h-6 bg-green-400 rounded-full opacity-30"
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
            <span className="text-2xl">☕</span>
            <span className="text-lg font-semibold text-purple-600 dark:text-purple-400 uppercase tracking-wider">
              Let's Connect
            </span>
            <span className="text-2xl">💬</span>
          </motion.div>
          
          <motion.h2 
            variants={slideUpVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white font-['Poppins',sans-serif] mb-6"
          >
            Let's Brew Some{' '}
            <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 bg-clip-text text-transparent">
              Magic ✨
            </span>
          </motion.h2>
          
          <motion.p 
            variants={slideUpVariants}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-['Roboto',sans-serif]"
          >
            Let's sit down, have a cozy chat, and create something amazing together! ✨
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-8"
          >
            <motion.div variants={slideUpVariants}>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6 font-['Poppins',sans-serif] flex items-center gap-3">
                <span>🌟</span> Let's Have a Cozy Chat
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed font-['Roboto',sans-serif]">
                Whether you want to discuss exciting opportunities, collaborate on cool projects, 
                or simply share your thoughts over a virtual cup of tea ☕ - I'm all ears! 
                Let's connect and make something wonderful happen together! 🚀
              </p>
            </motion.div>

            {/* Contact Methods */}
            <div className="space-y-6">
              {contactInfo.map((contact, index) => (
                <motion.a
                  key={contact.label}
                  href={contact.href}
                  target={contact.href.startsWith('http') ? '_blank' : '_self'}
                  rel={contact.href.startsWith('http') ? 'noopener noreferrer' : ''}
                  variants={cardVariants}
                  whileHover={{ 
                    scale: 1.02,
                    y: -5,
                    transition: { duration: 0.2 }
                  }}
                  className="group relative overflow-hidden bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200/50 dark:border-gray-700/50 block"
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${contact.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                  
                  <div className="relative z-10 flex items-center space-x-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${contact.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <contact.icon className="text-xl" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
                        {contact.label}
                      </div>
                      <div className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                        {contact.value}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                        {contact.description}
                      </div>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Additional Info */}
            <motion.div
              variants={cardVariants}
              className="relative overflow-hidden bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-6 border border-blue-200/50 dark:border-blue-700/50"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 dark:from-blue-500/10 dark:to-purple-500/10"></div>
              
              <div className="relative z-10 flex items-start space-x-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white shadow-lg">
                  <HiLocationMarker className="text-xl" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2 font-['Poppins',sans-serif]">
                    Currently Located
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 font-['Roboto',sans-serif]">
                    📍 Jaipur, India
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 font-['Roboto',sans-serif]">
                    🌍 Open to remote opportunities worldwide
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="relative overflow-hidden bg-white dark:bg-gray-800 rounded-3xl shadow-lg border border-gray-200/50 dark:border-gray-700/50"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 dark:from-blue-900/10 dark:to-purple-900/10"></div>
            
            <div className="relative z-10 p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-amber-500 to-orange-500 flex items-center justify-center">
                  <span className="text-white text-lg">☕</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white font-['Poppins',sans-serif]">
                  Share Your Thoughts ✨
                </h3>
              </div>
              
              <p className="text-gray-600 dark:text-gray-300 mb-6 font-['Roboto',sans-serif]">
                I'd love to hear from you! Drop me a message and let's start our conversation 💬
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 font-['Roboto',sans-serif]">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-200 font-['Roboto',sans-serif]"
                    placeholder="Enter your full name"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 font-['Roboto',sans-serif]">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-200 font-['Roboto',sans-serif]"
                    placeholder="Enter your email address"
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 font-['Roboto',sans-serif]">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-200 resize-none font-['Roboto',sans-serif]"
                    placeholder="Tell me about your project or just say hello!"
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 font-['Roboto',sans-serif] ${
                    isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <FaPaperPlane />
                      <span>Send Message</span>
                      <FaRocket className="ml-1" />
                    </>
                  )}
                </motion.button>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 text-green-600 dark:text-green-400 text-center font-medium justify-center p-4 bg-green-50 dark:bg-green-900/20 rounded-lg font-['Roboto',sans-serif]"
                  >
                    <FaCheckCircle />
                    <span>Message sent successfully! I'll get back to you soon.</span>
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 text-red-600 dark:text-red-400 text-center font-medium justify-center p-4 bg-red-50 dark:bg-red-900/20 rounded-lg font-['Roboto',sans-serif]"
                  >
                    <FaTimesCircle />
                    <span>Something went wrong. Please try again or contact me directly.</span>
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;