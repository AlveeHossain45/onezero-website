import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiTarget, FiEye, FiCode, FiUsers } from 'react-icons/fi';

// ...বাকি সব কোড আগের মতোই থাকবে

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    { icon: FiCode, number: '50+', label: 'Projects Completed' },
    { icon: FiUsers, number: '25+', label: 'Happy Clients' },
    { icon: FiCode, number: '2', label: 'Founding Engineers' },
    { icon: FiTarget, number: '100%', label: 'Client Satisfaction' },
  ];

  const missionVision = [
    {
      icon: FiTarget,
      title: 'Our Mission',
      description: 'To deliver innovative, scalable software solutions that empower businesses to thrive in the digital age through cutting-edge technology and exceptional engineering practices.',
    },
    {
      icon: FiEye,
      title: 'Our Vision',
      description: 'To become a leading force in software innovation, creating a smarter world through technology that enhances human experiences and solves complex challenges.',
    },
  ];

  return (
    <section id="about" ref={ref} className="section-padding bg-white dark:bg-dark-900">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-dark-800 dark:text-white">
              About <span className="text-gradient">OneZero</span>
            </h2>
            
            <p className="text-dark-600 dark:text-dark-300 mb-6">
              Founded by two passionate software engineers with a vision to bridge the gap between innovative ideas and technical execution. At OneZero, we combine technical expertise with creative problem-solving to deliver software that makes a difference.
            </p>
            
            <p className="text-dark-600 dark:text-dark-300 mb-8">
              Our team specializes in transforming complex challenges into elegant digital solutions. With backgrounds in both startup environments and enterprise systems, we bring a unique perspective to every project we undertake.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center p-4 rounded-xl glass-effect"
                >
                  <stat.icon className="w-8 h-8 text-primary-600 dark:text-primary-400 mx-auto mb-2" />
                  <h3 className="text-2xl font-bold text-dark-800 dark:text-white">{stat.number}</h3>
                  <p className="text-dark-600 dark:text-dark-300">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            {missionVision.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="p-6 rounded-2xl glass-effect card-hover"
              >
                <div className="flex items-start mb-4">
                  <div className="p-3 rounded-full bg-primary-100 dark:bg-primary-900/30 mr-4">
                    <item.icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                  </div>
                  <h3 className="text-xl font-bold text-dark-800 dark:text-white">{item.title}</h3>
                </div>
                <p className="text-dark-600 dark:text-dark-300">{item.description}</p>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="p-6 rounded-2xl gradient-bg text-white"
            >
              <h3 className="text-xl font-bold mb-2">Why Choose Us?</h3>
              <p className="mb-4">We combine technical excellence with business acumen to deliver solutions that drive real results.</p>
              <ul className="space-y-2">
                {['Expert Engineering', 'Agile Methodology', 'Continuous Support', 'Cutting-edge Technology'].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-white mr-3"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;