import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiCalendar, FiClock, FiArrowRight } from 'react-icons/fi';

const Blog = () => {
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

  // --- পরিবর্তন শুরু: ছবি, লিঙ্ক এবং নতুন পোস্ট যোগ করা হয়েছে ---
  const blogPosts = [
    {
      id: 1,
      title: 'The Future of Web Development in 2025',
      excerpt: 'Explore the latest trends and technologies shaping the future of web development.',
      image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80&w=870',
      date: 'March 15, 2024',
      readTime: '5 min read',
      category: 'Web Development',
      link: 'https://www.freecodecamp.org/news/web-development-trends/'
    },
    {
      id: 2,
      title: 'Building Scalable React Applications',
      excerpt: 'Best practices and patterns for building large-scale React applications that stand the test of time.',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=870',
      date: 'February 28, 2024',
      readTime: '7 min read',
      category: 'React',
      link: 'https://www.freecodecamp.org/news/scaling-react-applications/'
    },
    {
      id: 3,
      title: 'AI Integration in Modern Applications',
      excerpt: 'How to effectively integrate AI capabilities into your applications to enhance user experiences.',
      image: 'https://images.unsplash.com/photo-1534723452862-4c874018d66d?auto=format&fit=crop&q=80&w=870',
      date: 'February 12, 2024',
      readTime: '6 min read',
      category: 'Artificial Intelligence',
      link: 'https://www.toptal.com/artificial-intelligence/how-to-integrate-ai'
    },
    {
      id: 4,
      title: 'Cybersecurity Best Practices for Startups',
      excerpt: 'Essential security measures every startup should implement to protect their digital assets.',
      image: 'https://images.unsplash.com/photo-1550751827-4133d11b2b80?auto=format&fit=crop&q=80&w=870',
      date: 'January 30, 2024',
      readTime: '8 min read',
      category: 'Security',
      link: 'https://www.forbes.com/sites/forbestechcouncil/2023/05/15/cybersecurity-best-practices-for-startups-in-2023/'
    },
  ];
  // --- পরিবর্তন শেষ ---

  const toggleShowAll = () => {
    if (showAll && sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
    setShowAll(prev => !prev);
  };

  const postsToShow = showAll ? blogPosts : blogPosts.slice(0, 3);

  return (
    <section id="blog" ref={setRefs} className="section-padding bg-dark-50 dark:bg-dark-800">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dark-800 dark:text-white">
            Latest from our <span className="text-gradient">Blog</span>
          </h2>
          <p className="text-dark-600 dark:text-dark-300 max-w-2xl mx-auto">
            Insights, trends, and best practices in software development and technology.
          </p>
        </motion.div>

        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {postsToShow.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-dark-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              <a href={post.link} target="_blank" rel="noopener noreferrer" className="block h-48 overflow-hidden">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300" />
              </a>

              <div className="p-6 flex flex-col flex-grow">
                <span className="inline-block px-3 py-1 text-xs font-medium bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full mb-4 self-start">
                  {post.category}
                </span>

                <h3 className="text-xl font-bold mb-3 text-dark-800 dark:text-white">
                  <a href={post.link} target="_blank" rel="noopener noreferrer" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                    {post.title}
                  </a>
                </h3>

                <p className="text-dark-600 dark:text-dark-300 mb-4 flex-grow">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between text-sm text-dark-500 dark:text-dark-400 mb-4">
                  <div className="flex items-center">
                    <FiCalendar size={14} className="mr-1" />
                    {post.date}
                  </div>
                  <div className="flex items-center">
                    <FiClock size={14} className="mr-1" />
                    {post.readTime}
                  </div>
                </div>

                <a 
                  href={post.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center text-primary-600 dark:text-primary-400 font-medium hover:text-primary-700 dark:hover:text-primary-300 transition-colors self-start mt-auto"
                >
                  Read More
                  <FiArrowRight size={16} className="ml-1" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>

        {blogPosts.length > 3 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-center mt-12"
            >
              <button onClick={toggleShowAll} className="btn-primary">
                {showAll ? 'Show Less' : 'View All Articles'}
              </button>
            </motion.div>
        )}
        
      </div>
    </section>
  );
};

export default Blog;