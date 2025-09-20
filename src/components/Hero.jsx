import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import { staggerContainer, fadeInUp } from '../utils/animations'; // অ্যানিমেশন ইম্পোর্ট

const Hero = () => {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden section-padding">
      <div className="absolute inset-0 bg-white dark:bg-dark-900 z-0"></div>
      <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-br from-primary-50 to-white dark:from-dark-800 dark:to-dark-900 opacity-50"></div>
      <div className="absolute bottom-0 right-0 w-1/2 h-full bg-gradient-to-tl from-accent-50 to-white dark:from-dark-800 dark:to-dark-900 opacity-50"></div>

      <div className="container mx-auto relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center text-center"
        >
          <motion.h1
            variants={fadeInUp}
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 tracking-tighter"
          >
            <span className="text-dark-800 dark:text-white">Crafting </span>
            <span className="text-gradient">Digital Excellence</span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-lg md:text-xl text-dark-600 dark:text-dark-300 mb-10 max-w-3xl"
          >
            We don't just build software; we architect solutions that drive growth, efficiency, and innovation for a smarter world.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 mb-16"
          >
            <button
              onClick={() => scrollToSection('services')}
              className="btn-primary flex items-center justify-center"
            >
              Explore Services <FiArrowRight size={20} className="ml-2" />
            </button>
            <button
              onClick={() => scrollToSection('portfolio')}
              className="btn-secondary flex items-center justify-center"
            >
              View Our Work
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;