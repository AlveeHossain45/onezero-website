import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiPlus, FiMinus } from 'react-icons/fi';
import faqData from '../data/faq';

const FAQ = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const categories = [...new Set(faqData.map(item => item.category))];
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredFaqs = activeCategory === 'all' 
    ? faqData 
    : faqData.filter(item => item.category === activeCategory);

  return (
    <section id="faq" ref={ref} className="section-padding bg-white dark:bg-dark-900">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dark-800 dark:text-white">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-dark-600 dark:text-dark-300 max-w-2xl mx-auto">
            Find answers to common questions about our services, process, and how we work.
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-6 py-2 rounded-full font-medium transition-all ${
              activeCategory === 'all'
                ? 'gradient-bg text-white shadow-lg'
                : 'bg-white dark:bg-dark-800 text-dark-700 dark:text-dark-300 shadow-md hover:text-primary-600 dark:hover:text-primary-400'
            }`}
          >
            All Questions
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                activeCategory === category
                  ? 'gradient-bg text-white shadow-lg'
                  : 'bg-white dark:bg-dark-800 text-dark-700 dark:text-dark-300 shadow-md hover:text-primary-600 dark:hover:text-primary-400'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </motion.div>

        {/* FAQ Items */}
        <div className="max-w-3xl mx-auto">
          {filteredFaqs.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-4 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="flex items-center justify-between w-full p-6 bg-white dark:bg-dark-800 shadow-md hover:shadow-lg transition-shadow text-left"
              >
                <h3 className="text-lg font-medium text-dark-800 dark:text-white">
                  {item.question}
                </h3>
                {activeIndex === index ? (
                  <FiMinus size={20} className="text-primary-600 dark:text-primary-400 flex-shrink-0 ml-4" />
                ) : (
                  <FiPlus size={20} className="text-primary-600 dark:text-primary-400 flex-shrink-0 ml-4" />
                )}
              </button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 bg-gray-50 dark:bg-dark-700 border-t border-gray-200 dark:border-dark-600">
                      <p className="text-dark-600 dark:text-dark-300">
                        {item.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Still have questions?
            </h3>
            <p className="mb-6 max-w-2xl mx-auto opacity-90">
              Can't find the answer you're looking for? Please reach out to our friendly team.
            </p>
            {/* --- পরিবর্তন: বাটনটিকে লিঙ্কে পরিবর্তন করা হয়েছে --- */}
            <a 
              href="#contact"
              className="inline-block bg-white text-primary-600 px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;