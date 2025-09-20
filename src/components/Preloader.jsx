
import React from 'react';
import { motion } from 'framer-motion';

const Preloader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white dark:bg-dark-900 z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 1.2 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center justify-center"
      >
        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.2, 1],
          }}
          transition={{
            rotate: { duration: 2, repeat: Infinity, ease: "linear" },
            scale: { duration: 1, repeat: Infinity, ease: "easeInOut" }
          }}
          className="w-20 h-20 rounded-full gradient-bg flex items-center justify-center text-white font-bold text-2xl mb-4"
        >
          10
        </motion.div>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-2xl font-bold text-dark-800 dark:text-white"
        >
          OneZero
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-dark-600 dark:text-dark-300 mt-2"
        >
          Loading innovation...
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Preloader;