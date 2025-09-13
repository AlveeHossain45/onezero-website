import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiMail, FiSend } from 'react-icons/fi';

// ...বাকি সব কোড আগের মতোই থাকবে

const Newsletter = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter subscription here
    console.log('Subscribed with email:', email);
    setSubscribed(true);
    setEmail('');
    
    // Reset after 3 seconds
    setTimeout(() => {
      setSubscribed(false);
    }, 3000);
  };

  return (
    <section ref={ref} className="section-padding bg-white dark:bg-dark-900">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-8 md:p-12 text-white text-center"
        >
          <div className="max-w-2xl mx-auto">
            <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-6">
              <FiMail size={28} className="text-white" />
            </div>
            
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Stay Updated with OneZero
            </h2>
            
            <p className="mb-8 opacity-90">
              Subscribe to our newsletter to receive the latest updates, tech insights, and exclusive offers.
            </p>

            {subscribed ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white/20 p-4 rounded-lg"
              >
                <p className="font-medium">🎉 Thank you for subscribing!</p>
                <p className="text-sm opacity-90 mt-1">
                  You'll receive our next newsletter in your inbox.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 rounded-full text-dark-800 focus:outline-none focus:ring-2 focus:ring-white/30"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-white text-primary-600 rounded-full font-medium hover:bg-gray-100 transition-colors flex items-center justify-center"
                >
                  Subscribe
                  <FiSend size={18} className="ml-2" />
                </button>
              </form>
            )}

            <p className="text-sm opacity-80 mt-6">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;