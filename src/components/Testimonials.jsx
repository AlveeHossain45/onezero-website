import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiChevronLeft, FiChevronRight, FiStar, FiMessageSquare } from 'react-icons/fi';
import testimonialsData from '../data/testimonials';

// ...বাকি সব কোড আগের মতোই থাকবে

const Testimonials = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonialsData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonialsData.length - 1 : prevIndex - 1
    );
  };

  // Auto-advance testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000);

    return () => clearInterval(interval);
  }, []); // Added dependency array to fix potential issues

  return (
    <section id="testimonials" ref={ref} className="section-padding bg-white dark:bg-dark-900">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dark-800 dark:text-white">
            Client <span className="text-gradient">Testimonials</span>
          </h2>
          <p className="text-dark-600 dark:text-dark-300 max-w-2xl mx-auto">
            Hear what our clients have to say about working with us and the results we've delivered.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Testimonial Card */}
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-dark-800 rounded-2xl shadow-xl p-8 md:p-12 relative"
          >
            <FiMessageSquare className="absolute top-6 right-6 w-12 h-12 text-primary-100 dark:text-primary-900/30" />

            {/* Rating Stars */}
            <div className="flex mb-6">
              {[...Array(5)].map((_, i) => (
                <FiStar
                  key={i}
                  size={20}
                  className="fill-yellow-400 text-yellow-400 mr-1"
                />
              ))}
            </div>

            {/* Testimonial Text */}
            <p className="text-lg text-dark-700 dark:text-dark-300 mb-8 italic">
              "{testimonialsData[currentIndex].text}"
            </p>

            {/* Project Info */}
            <div className="mb-6">
              <span className="inline-block px-3 py-1 text-sm font-medium bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full">
                {testimonialsData[currentIndex].project}
              </span>
            </div>

            {/* Client Info */}
            <div className="flex items-center">
              <div className="w-14 h-14 rounded-full bg-gradient-to-r from-primary-100 to-secondary-100 dark:from-primary-900/20 dark:to-secondary-900/20 flex items-center justify-center mr-4">
                <div className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center text-white font-bold">
                  {testimonialsData[currentIndex].name.charAt(0)}
                </div>
              </div>
              <div>
                <h4 className="font-bold text-dark-800 dark:text-white">
                  {testimonialsData[currentIndex].name}
                </h4>
                <p className="text-dark-600 dark:text-dark-300">
                  {testimonialsData[currentIndex].role}, {testimonialsData[currentIndex].company}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Navigation Buttons */}
          <div className="flex justify-center mt-8 space-x-4">
            <button
              onClick={prevTestimonial}
              className="p-3 rounded-full bg-white dark:bg-dark-800 shadow-md text-dark-700 dark:text-dark-300 hover:bg-primary-500 hover:text-white transition-colors"
              aria-label="Previous testimonial"
            >
              <FiChevronLeft size={20} />
            </button>
            <button
              onClick={nextTestimonial}
              className="p-3 rounded-full bg-white dark:bg-dark-800 shadow-md text-dark-700 dark:text-dark-300 hover:bg-primary-500 hover:text-white transition-colors"
              aria-label="Next testimonial"
            >
              <FiChevronRight size={20} />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonialsData.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex
                    ? 'bg-primary-500 w-6'
                    : 'bg-dark-300 dark:bg-dark-600'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Client Logos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16"
        >
          <h3 className="text-center text-lg font-medium text-dark-600 dark:text-dark-300 mb-8">
            Trusted by innovative companies
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center opacity-60">
            {['TechInnovate', 'HealthPlus', 'GlobalV', 'EduTech', 'FinPartners', 'StartUpGrid'].map((company, index) => (
              <div
                key={index}
                className="flex items-center justify-center p-4 bg-white dark:bg-dark-800 rounded-xl shadow-md"
              >
                <div className="w-8 h-8 rounded-full gradient-bg flex items-center justify-center text-white font-bold text-sm mr-2">
                  {company.charAt(0)}
                </div>
                <span className="font-medium text-dark-700 dark:text-dark-300">
                  {company}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;