// src/components/Team.jsx

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiExternalLink } from 'react-icons/fi';
import { teamData } from '../data/team';

const Team = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    // পরিবর্তন: ব্যাকগ্রাউন্ডের অতিরিক্ত ডিজাইন এলিমেন্টগুলো সরিয়ে ফেলা হয়েছে
    <section id="team" ref={ref} className="section-padding bg-dark-50 dark:bg-dark-800">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-dark-800 dark:text-white">
            Meet Our <span className="text-gradient">Team</span>
          </h2>
          
          <p className="text-dark-600 dark:text-dark-300 max-w-2xl mx-auto text-lg leading-relaxed">
            Passionate engineers and designers dedicated to delivering exceptional software solutions.
          </p>
        </motion.div>

        {/* পরিবর্তন: lg:grid-cols-2 করা হয়েছে এবং max-w-4xl করা হয়েছে সঠিক লেআউটের জন্য */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {teamData.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              // পরিবর্তন: শ্যাডো সরানো হয়েছে এবং একটি সুন্দর বর্ডার যোগ করা হয়েছে
              className="group flex flex-col bg-white dark:bg-dark-900 rounded-2xl border border-gray-200 dark:border-dark-700 transition-all duration-300 overflow-hidden"
            >
              {/* কার্ডের উপরে একটি প্রিমিয়াম অ্যাকসেন্ট বার */}
              <div className="h-1.5 bg-primary-500 dark:bg-accent-500 transition-all duration-300"></div>
              
              <div className="p-8 flex flex-col h-full text-center">
                <div className="relative mb-6">
                  <div className="relative w-40 h-40 mx-auto rounded-full overflow-hidden border-4 border-white dark:border-dark-800">
                    <img 
                      src={member.image} 
                      alt={`Photo of ${member.name}`}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" 
                    />
                  </div>
                  
                  <motion.div 
                    className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 flex gap-2"
                    initial={{ y: 20, opacity: 0 }}
                    animate={inView ? { y: 0, opacity: 1 } : {}}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    {Object.entries(member.social).map(([platform, url]) => {
                      const Icon = 
                        platform === 'github' ? FiGithub :
                        platform === 'linkedin' ? FiLinkedin :
                        platform === 'twitter' ? FiTwitter : FiMail;
                      
                      return (
                        <a
                          key={platform}
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-full bg-white dark:bg-dark-800 border border-gray-200 dark:border-dark-700 text-dark-700 dark:text-dark-300 hover:bg-primary-500 dark:hover:bg-accent-500 hover:text-white transition-all duration-300 transform hover:scale-110"
                          aria-label={`Visit ${member.name}'s ${platform}`}
                        >
                          <Icon size={14} />
                        </a>
                      );
                    })}
                  </motion.div>
                </div>

                <div className="flex flex-col flex-grow mt-4">
                  <h3 className="text-xl font-bold mb-2 text-dark-800 dark:text-white">
                    {member.name}
                  </h3>
                  <div className="mb-4">
                    <span className="text-primary-600 dark:text-accent-400 font-medium text-sm bg-primary-100 dark:bg-accent-500/10 px-3 py-1 rounded-full">
                      {member.role}
                    </span>
                  </div>
                  <p className="text-dark-600 dark:text-dark-300 text-sm leading-relaxed mb-4 flex-grow">
                    {member.bio}
                  </p>

                  {/* পরিবর্তন: 'View Portfolio' লিঙ্কটিকে একটি সুন্দর বাটনে পরিণত করা হয়েছে */}
                  {member.portfolio && (
                    <div className="mt-auto pt-4">
                      <a
                        href={member.portfolio}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-5 py-2 text-xs font-bold text-primary-600 dark:text-accent-400 bg-primary-50 dark:bg-dark-800 border border-primary-200 dark:border-dark-700 rounded-full hover:bg-primary-100 dark:hover:bg-dark-700 transition-all duration-300 group/link"
                      >
                        <span className="mr-2">View Personal Portfolio</span>
                        <FiExternalLink className="transform group-hover/link:translate-x-0.5 transition-transform duration-300" size={12} />
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-20"
        >
          <div className="relative bg-white dark:bg-dark-900 border border-gray-200 dark:border-dark-700 rounded-2xl p-8 max-w-2xl mx-auto overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1.5 bg-primary-500 dark:bg-accent-500"></div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4 text-dark-800 dark:text-white">
                Join Our <span className="text-gradient">Team</span>
              </h3>
              <p className="text-dark-600 dark:text-dark-300 mb-6 leading-relaxed">
                We're always looking for talented developers and designers who are passionate about creating amazing software.
              </p>
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-primary"
              >
                View Open Positions
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Team;