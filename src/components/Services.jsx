import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiCode, FiSmartphone, FiLayout, FiShield, FiCloud, FiCpu, FiDatabase, FiBriefcase } from 'react-icons/fi';

// ...বাকি সব কোড আগের মতোই থাকবে

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      icon: FiCode,
      title: 'Web Development',
      description: 'Modern, responsive websites and web applications built with the latest technologies for optimal performance and user experience.',
    },
    {
      icon: FiSmartphone,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android that deliver seamless user experiences.',
    },
    {
      icon: FiLayout,
      title: 'UI/UX Design',
      description: 'User-centered design solutions that combine aesthetics with functionality to create intuitive digital experiences.',
    },
    {
      icon: FiShield,
      title: 'Cybersecurity Solutions',
      description: 'Comprehensive security assessments and implementations to protect your digital assets from threats.',
    },
    {
      icon: FiCloud,
      title: 'Cloud & DevOps',
      description: 'Cloud infrastructure setup, migration, and DevOps practices to ensure scalability and reliability.',
    },
    {
      icon: FiCpu,
      title: 'AI & Machine Learning',
      description: 'Intelligent solutions leveraging artificial intelligence and machine learning to solve complex problems.',
    },
    {
      icon: FiDatabase,
      title: 'Database Management',
      description: 'Database design, optimization, and management for efficient data storage and retrieval.',
    },
    {
      icon: FiBriefcase,
      title: 'IT Consulting',
      description: 'Strategic technology consulting to help businesses make informed decisions about their digital transformation.',
    },
  ];

  return (
    <section id="services" ref={ref} className="section-padding bg-dark-50 dark:bg-dark-800">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dark-800 dark:text-white">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-dark-600 dark:text-dark-300 max-w-2xl mx-auto">
            We offer a comprehensive range of software development services to help businesses thrive in the digital landscape.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group p-6 rounded-2xl bg-white dark:bg-dark-900 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20 dark:border-dark-700/30"
            >
              <div className="mb-4">
                <div className="w-14 h-14 rounded-xl gradient-bg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-7 h-7 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2 text-dark-800 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                {service.title}
              </h3>
              <p className="text-dark-600 dark:text-dark-300">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center mt-16"
        >
          <button className="btn-primary">
            View All Services
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;