import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

const Portfolio = () => {
  const sectionRef = useRef(null);
  const [inViewRef, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const setRefs = (node) => {
    sectionRef.current = node;
    inViewRef(node);
  };

  const [activeFilter, setActiveFilter] = useState('all');
  const [showAll, setShowAll] = useState(false);

  const filters = [
    { id: 'all', name: 'All Projects' },
    { id: 'web', name: 'Web Development' },
    { id: 'mobile', name: 'Mobile Apps' },
    { id: 'design', name: 'UI/UX Design' },
  ];

  // --- নতুন, সুন্দর ছবি যুক্ত করা হয়েছে ---
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-featured online shopping platform with secure payment integration.',
      image: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&q=80&w=870',
      tags: ['web', 'design'],
      link: '#',
      github: '#',
    },
    {
      id: 2,
      title: 'Health & Fitness App',
      description: 'Mobile application for tracking workouts and nutrition with AI recommendations.',
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=920',
      tags: ['mobile', 'design'],
      link: '#',
      github: '#',
    },
    {
      id: 3,
      title: 'Enterprise Dashboard',
      description: 'Analytics dashboard for business intelligence and data visualization.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=815',
      tags: ['web'],
      link: '#',
      github: '#',
    },
    {
      id: 4,
      title: 'Travel Booking System',
      description: 'Comprehensive travel booking platform with real-time availability.',
      image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=870',
      tags: ['web', 'mobile'],
      link: '#',
      github: '#',
    },
    {
      id: 5,
      title: 'Educational Platform',
      description: 'Interactive learning management system with video conferencing.',
      image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=870',
      tags: ['web', 'design'],
      link: '#',
      github: '#',
    },
    {
      id: 6,
      title: 'Social Media App',
      description: 'Community-driven social platform with content sharing features.',
      image: 'https://images.unsplash.com/photo-1516557070042-d968619ec4af?auto=format&fit=crop&q=80&w=870',
      tags: ['mobile'],
      link: '#',
      github: '#',
    },
  ];

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
    setShowAll(false);
  };

  const toggleShowAll = () => {
    if (showAll && sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
    setShowAll(prev => !prev);
  };

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.tags.includes(activeFilter));
  
  // --- পরিবর্তন শুরু (ডিফল্ট প্রজেক্ট সংখ্যা ৩ করা হয়েছে) ---
  const projectsToShow = showAll ? filteredProjects : filteredProjects.slice(0, 3);
  // --- পরিবর্তন শেষ ---

  return (
    <section id="portfolio" ref={setRefs} className="section-padding bg-white dark:bg-dark-900">
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => handleFilterClick(filter.id)}
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

        {/* --- পরিবর্তন শুরু (মাঝখানে আনার অপ্রয়োজনীয় ক্লাসগুলো সরানো হয়েছে) --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* --- পরিবর্তন শেষ --- */}
          {projectsToShow.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 bg-white dark:bg-dark-800"
            >
              <div className="relative overflow-hidden h-48">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white text-dark-800 hover:bg-primary-500 hover:text-white transition-colors">
                    <FiExternalLink size={18} />
                  </a>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white text-dark-800 hover:bg-primary-500 hover:text-white transition-colors">
                    <FiGithub size={18} />
                  </a>
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
        
        {/* --- পরিবর্তন শুরু (filteredProjects.length > 3 করা হয়েছে) --- */}
        {filteredProjects.length > 3 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="text-center mt-16"
            >
              <button onClick={toggleShowAll} className="btn-primary">
                {showAll ? 'Show Less' : 'View More Projects'}
              </button>
            </motion.div>
        )}
        {/* --- পরিবর্তন শেষ --- */}
      </div>
    </section>
  );
};

export default Portfolio;