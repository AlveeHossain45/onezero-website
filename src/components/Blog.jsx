import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiCalendar, FiClock, FiArrowRight } from 'react-icons/fi';

// ...বাকি সব কোড আগের মতোই থাকবে

const Blog = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const blogPosts = [
    {
      id: 1,
      title: 'The Future of Web Development in 2024',
      excerpt: 'Explore the latest trends and technologies shaping the future of web development.',
      image: '/blog1.jpg',
      date: 'March 15, 2024',
      readTime: '5 min read',
      category: 'Web Development',
    },
    {
      id: 2,
      title: 'Building Scalable React Applications',
      excerpt: 'Best practices and patterns for building large-scale React applications that stand the test of time.',
      image: '/blog2.jpg',
      date: 'February 28, 2024',
      readTime: '7 min read',
      category: 'React',
    },
    {
      id: 3,
      title: 'AI Integration in Modern Applications',
      excerpt: 'How to effectively integrate AI capabilities into your applications to enhance user experiences.',
      image: '/blog3.jpg',
      date: 'February 12, 2024',
      readTime: '6 min read',
      category: 'Artificial Intelligence',
    },
    {
      id: 4,
      title: 'Cybersecurity Best Practices for Startups',
      excerpt: 'Essential security measures every startup should implement to protect their digital assets.',
      image: '/blog4.jpg',
      date: 'January 30, 2024',
      readTime: '8 min read',
      category: 'Security',
    },
  ];

  return (
    <section id="blog" ref={ref} className="section-padding bg-dark-50 dark:bg-dark-800">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-dark-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="h-48 bg-gradient-to-r from-primary-100 to-secondary-100 dark:from-primary-900/20 dark:to-secondary-900/20 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full gradient-bg flex items-center justify-center text-white font-bold text-xl">
                  0{post.id}
                </div>
              </div>

              <div className="p-6">
                <span className="inline-block px-3 py-1 text-xs font-medium bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full mb-4">
                  {post.category}
                </span>

                <h3 className="text-xl font-bold mb-3 text-dark-800 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  {post.title}
                </h3>

                <p className="text-dark-600 dark:text-dark-300 mb-4">
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

                <button className="flex items-center text-primary-600 dark:text-primary-400 font-medium hover:text-primary-700 dark:hover:text-primary-300 transition-colors">
                  Read More
                  <FiArrowRight size={16} className="ml-1" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-12"
        >
          <button className="btn-primary">
            View All Articles
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;