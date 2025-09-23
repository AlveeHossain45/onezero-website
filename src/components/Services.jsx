import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { servicesData } from '../data/services';

const Services = () => {
  const sectionRef = useRef(null);
  const [inViewRef, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const setRefs = (node) => {
    sectionRef.current = node;
    inViewRef(node);
  };
  
  const [showAll, setShowAll] = useState(false);

  const toggleShowAll = () => {
    if (showAll && sectionRef.current) {
        sectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
    setShowAll(prev => !prev);
  };

  const servicesToShow = showAll ? servicesData : servicesData.slice(0, 2);

  return (
    <section id="services" ref={setRefs} className="section-padding bg-dark-50 dark:bg-dark-800">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-dark-600 dark:text-dark-300 max-w-2xl mx-auto">
            We offer a comprehensive range of software development services to help businesses thrive in the digital landscape.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {servicesToShow.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group p-8 rounded-2xl bg-white dark:bg-dark-900 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20 dark:border-dark-700/30"
            >
              <div className="mb-6">
                <div className="w-16 h-16 rounded-xl gradient-bg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-dark-800 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                {service.title}
              </h3>
              <p className="text-dark-600 dark:text-dark-300">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        {servicesData.length > 2 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center mt-16"
          >
            <button onClick={toggleShowAll} className="btn-secondary">
              {showAll ? 'Show Less' : 'View All Services'}
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Services;