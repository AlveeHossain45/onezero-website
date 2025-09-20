import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiMail, FiPhone, FiMapPin, FiSend, FiMessageSquare } from 'react-icons/fi';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const contactMethods = [
    {
      icon: FiMail,
      title: 'Email Us',
      details: 'mohammadhossain042004@gmail.com',
      link: 'mailto:mohammadhossain042004@gmail.com'
    },
    {
      icon: FiPhone,
      title: 'Call Us',
      details: '+8801957320294',
      link: 'tel:+8801957320292'
    },
    {
      icon: FiMapPin,
      title: 'Location',
      details: 'Uttara, Bangladesh',
      link: 'https://www.google.com/maps/search/?api=1&query=Uttara,Dhaka,Bangladesh'
    },
  ];

  return (
    <section id="contact" ref={ref} className="section-padding bg-dark-50 dark:bg-dark-800">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dark-800 dark:text-white">
            Get in <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-dark-600 dark:text-dark-300 max-w-2xl mx-auto">
            Have a project in mind or want to learn more about our services? We'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6 text-dark-800 dark:text-white">
                Let's talk about your project
              </h3>
              <p className="text-dark-600 dark:text-dark-300 mb-8">
                We're here to answer any questions you may have and discuss how we can help bring your ideas to life.
              </p>
            </div>

            <div className="space-y-6">
              {contactMethods.map((method, index) => (
                <motion.a
                  key={index}
                  href={method.link}
                  target="_blank" 
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ x: 5 }}
                  className="flex items-start p-6 bg-white dark:bg-dark-900 rounded-2xl shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="p-3 rounded-full bg-primary-100 dark:bg-primary-900/30 mr-4">
                    <method.icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-dark-800 dark:text-white mb-1">
                      {method.title}
                    </h4>
                    {/* --- পরিবর্তন এখানে করা হয়েছে --- */}
                    <p className="text-dark-600 dark:text-dark-300 break-all">
                      {method.details}
                    </p>
                    {/* --- পরিবর্তন শেষ --- */}
                  </div>
                </motion.a>
              ))}
            </div>
            
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-dark-900 rounded-2xl shadow-xl p-8"
          >
            <div className="flex items-center mb-6">
              <div className="p-3 rounded-full bg-primary-100 dark:bg-primary-900/30 mr-4">
                <FiMessageSquare className="w-6 h-6 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="text-2xl font-bold text-dark-800 dark:text-white">
                Send us a message
              </h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-dark-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-dark-800 text-dark-800 dark:text-white transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-dark-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-dark-800 text-dark-800 dark:text-white transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-dark-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-dark-800 text-dark-800 dark:text-white transition-colors"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full btn-primary flex items-center justify-center"
              >
                Send Message
                <FiSend size={18} className="ml-2" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;