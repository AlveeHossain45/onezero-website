import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { pricingData } from '../data/pricing';

const Pricing = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="pricing" ref={ref} className="section-padding bg-dark-50 dark:bg-dark-800">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            Find the <span className="text-gradient">Perfect Plan</span>
          </h2>
          <p className="text-dark-600 dark:text-dark-300 max-w-2xl mx-auto">
            Transparent pricing with no hidden fees. Choose a plan that fits your needs and budget.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {pricingData.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`flex flex-col pricing-card ${plan.featured ? 'featured' : ''}`}
            >
              {plan.featured && (
                <div className="featured-badge">Most Popular</div>
              )}
              <div className="p-8 flex flex-col h-full">
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-lg gradient-bg mr-4">
                     <plan.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-dark-800 dark:text-white">{plan.tier}</h3>
                </div>

                <p className="text-dark-600 dark:text-dark-300 mb-6 flex-grow">{plan.description}</p>
                <div className="text-4xl font-extrabold text-dark-900 dark:text-white mb-6">
                  {plan.price}
                  {plan.price.startsWith('$') && <span className="text-lg font-medium text-dark-500 dark:text-dark-400">/project</span>}
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <feature.icon className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-dark-700 dark:text-dark-300">{feature.text}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={plan.link}
                  className={`${plan.featured ? 'btn-primary' : 'btn-secondary'} w-full mt-auto text-center`}
                >
                  {plan.buttonText}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;