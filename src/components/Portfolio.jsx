import React, { useState } from 'react'; // <--- এই লাইনটি পরিবর্তন করা হয়েছে
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiExternalLink, FiGithub, FiFilter } from 'react-icons/fi';

const Portfolio = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', name: 'All Projects' },
    { id: 'web', name: 'Web Development' },
    { id: 'mobile', name: 'Mobile Apps' },
    { id: 'design', name: 'UI/UX Design' },
  ];

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-featured online shopping platform with secure payment integration.',
      image: '/project1.png',
      tags: ['web', 'design'],
      link: '#',
      github: '#',
    },
    {
      id: 2,
      title: 'Health & Fitness App',
      description: 'Mobile application for tracking workouts and nutrition with AI recommendations.',
      image: '/project2.png',
      tags: ['mobile', 'design'],
      link: '#',
      github: '#',
    },
    {
      id: 3,
      title: 'Enterprise Dashboard',
      description: 'Analytics dashboard for business intelligence and data visualization.',
      image: '/project3.png',
      tags: ['web'],
      link: '#',
      github: '#',
    },
    {
      id: 4,
      title: 'Travel Booking System',
      description: 'Comprehensive travel booking platform with real-time availability.',
      image: '/project4.png',
      tags: ['web', 'mobile'],
      link: '#',
      github: '#',
    },
    {
      id: 5,
      title: 'Educational Platform',
      description: 'Interactive learning management system with video conferencing.',
      image: '/project5.png',
      tags: ['web', 'design'],
      link: '#',
      github: '#',
    },
    {
      id: 6,
      title: 'Social Media App',
      description: 'Community-driven social platform with content sharing features.',
      image: '/project6.png',
      tags: ['mobile'],
      link: '#',
      github: '#',
    },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.tags.includes(activeFilter));

  return (
    <section id="portfolio" ref={ref} className="section-padding bg-white dark:bg-dark-900">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dark-800 dark:text-white">
            Our <span className="text-gradient">Portfolio</span>
          </h2>
          <p className="text-dark-600 dark:text-dark-300 max-w-2xl mx-auto">
            Explore our latest projects and see how we've helped businesses transform their ideas into reality.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'gradient-bg text-white shadow-lg'
                  : 'bg-white dark:bg-dark-800 text-dark-700 dark:text-dark-300 hover:text-primary-600 dark:hover:text-primary-400 shadow-md'
              }`}
            >
              {filter.name}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 bg-white dark:bg-dark-800"
            >
              <div className="relative overflow-hidden">
                <div className="h-48 bg-gradient-to-r from-primary-100 to-secondary-100 dark:from-primary-900/20 dark:to-secondary-900/20 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full gradient-bg flex items-center justify-center text-white font-bold">
                    0{project.id}
                  </div>
                </div>
                
                <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <button className="p-3 rounded-full bg-white text-dark-800 hover:bg-primary-500 hover:text-white transition-colors">
                    <FiExternalLink size={18} />
                  </button>
                  <button className="p-3 rounded-full bg-white text-dark-800 hover:bg-primary-500 hover:text-white transition-colors">
                    <FiGithub size={18} />
                  </button>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-dark-800 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-dark-600 dark:text-dark-300 mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300"
                    >
                      {tag.charAt(0).toUpperCase() + tag.slice(1)}
                    </span>
                  ))}
                </div>
              </div>
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
            View More Projects
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;