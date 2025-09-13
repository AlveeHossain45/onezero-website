import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiPlay } from 'react-icons/fi';

// ...বাকি সব কোড আগের মতোই থাকবে

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden section-padding">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-dark-800 dark:via-dark-900 dark:to-dark-800 z-0"></div>
      
      {/* Animated Shapes */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-primary-200/30 dark:bg-primary-900/20 blur-3xl"
        ></motion.div>
        
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
            rotate: [0, -90, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-secondary-200/30 dark:bg-secondary-900/20 blur-3xl"
        ></motion.div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-white/80 dark:bg-dark-800/80 backdrop-blur-md border border-white/20 dark:border-dark-700/30 shadow-lg mb-8"
          >
            <div className="w-2 h-2 rounded-full bg-primary-500 mr-2 animate-pulse"></div>
            <span className="text-sm font-medium text-dark-700 dark:text-dark-300">We're hiring talented developers</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
          >
            <span className="text-dark-800 dark:text-white">Crafting </span>
            <span className="text-gradient">Digital Excellence</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-xl md:text-2xl text-dark-600 dark:text-dark-300 mb-10 max-w-3xl"
          >
            Innovating Software Solutions for a Smarter World
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 mb-16"
          >
            <button className="btn-primary flex items-center justify-center">
              Explore Services <FiArrowRight size={20} className="ml-2" />
            </button>
            <button className="btn-secondary flex items-center justify-center">
              View Portfolios
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex items-center"
          >
            <button className="flex items-center justify-center w-16 h-16 rounded-full gradient-bg shadow-lg">
              <FiPlay size={24} className="text-white ml-1" />
            </button>
            <span className="ml-4 text-dark-700 dark:text-dark-300 font-medium">Watch our story</span>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-dark-300 dark:border-dark-600 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-3 bg-primary-500 rounded-full mt-2"
          ></motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;