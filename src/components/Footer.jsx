import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiArrowUp } from 'react-icons/fi';

const Footer = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const currentYear = new Date().getFullYear();

  // --- পরিবর্তন: কানেক্ট লিঙ্কগুলো আপডেট করা হয়েছে ---
  const footerLinks = {
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Services', href: '#services' },
      { name: 'Portfolio', href: '#portfolio' },
      { name: 'Team', href: '#team' },
    ],
    support: [
      { name: 'FAQ', href: '#faq' },
      { name: 'Contact', href: '#contact' },
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
    ],
    connect: [
      { name: 'GitHub', href: '#', icon: FiGithub },
      { name: 'LinkedIn', href: '#', icon: FiLinkedin },
      { name: 'Twitter', href: '#', icon: FiTwitter },
      { name: 'Email', href: 'mailto:mohammadhossain042004@gmail.com', icon: FiMail },
    ],
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer ref={ref} className="bg-dark-800 dark:bg-dark-900 text-white">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="lg:col-span-1"
          >
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center text-white font-bold">
                01
              </div>
              <span className="text-xl font-bold">OneZero</span>
            </div>
            <p className="text-dark-300 mb-6">
              Innovating Software Solutions for a Smarter World
            </p>
            <p className="text-dark-400 text-sm">
              © {currentYear} OneZero Technologies. All rights reserved.
            </p>
          </motion.div>

          {/* Company Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-dark-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Support Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="font-bold text-lg mb-4">Support</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-dark-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Connect Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="font-bold text-lg mb-4">Connect</h3>
            <div className="flex space-x-4 mb-6">
              {footerLinks.connect.map((link, index) => {
                const Icon = link.icon;
                return (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-dark-700 flex items-center justify-center text-dark-300 hover:bg-primary-600 hover:text-white transition-colors"
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
            <p className="text-dark-300 text-sm">
              Follow us for updates and insights
            </p>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="border-t border-dark-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-dark-400 text-sm mb-4 md:mb-0">
            Made with ❤️ by the OneZero team
          </p>
          
          <button
            onClick={scrollToTop}
            className="flex items-center text-dark-300 hover:text-white transition-colors"
          >
            Back to top
            <FiArrowUp size={16} className="ml-2" />
          </button>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;