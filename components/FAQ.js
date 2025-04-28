import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const faqs = [
  {
    question: "What is BlackSky-MD?",
    answer: "BlackSky-MD is a sophisticated WhatsApp Multi-Device bot with advanced plugin management and dynamic gaming capabilities. It features RPG elements, user tracking, and multilingual support."
  },
  {
    question: "How do I install BlackSky-MD?",
    answer: "You can install BlackSky-MD by cloning the repository from GitHub, installing the dependencies, and following the setup instructions in our documentation. We've designed the installation process to be straightforward for both beginners and experienced users."
  },
  {
    question: "Is BlackSky-MD free to use?",
    answer: "Yes, BlackSky-MD is completely free and open-source. You can use, modify, and distribute it under the terms of the license included in the repository."
  },
  {
    question: "Can I add custom plugins to BlackSky-MD?",
    answer: "Absolutely! BlackSky-MD features a dynamic plugin system that allows you to easily create and add custom plugins. Check out our developer documentation for guides on creating your own plugins."
  },
  {
    question: "Does BlackSky-MD support languages other than English?",
    answer: "Yes, BlackSky-MD has multilingual support. Currently, it includes German language implementations, and the framework is designed to easily add support for additional languages."
  },
  {
    question: "Can I deploy BlackSky-MD on Heroku?",
    answer: "Yes, BlackSky-MD is optimized for Heroku deployment with special adaptations for plugin persistence to ensure your plugins and data don't get lost during Heroku's dyno restarts."
  },
  {
    question: "How does the RPG system work?",
    answer: "BlackSky-MD's RPG system allows users to create characters, gain experience, collect items, and engage in various activities and quests. It's a comprehensive system designed to increase engagement in your WhatsApp groups."
  },
  {
    question: "Where can I get support if I encounter issues?",
    answer: "You can get support by opening an issue on our GitHub repository, joining our Discord community, or checking out the troubleshooting guides in our documentation."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-primary dark:text-white mb-4"
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 dark:text-gray-300"
          >
            Got questions? We've got answers.
          </motion.p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="flex justify-between items-center w-full p-5 text-left bg-gray-50 dark:bg-dark-secondary hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                <span className="text-lg font-medium text-primary dark:text-white">{faq.question}</span>
                {openIndex === index ? (
                  <FaChevronUp className="text-gray-500 dark:text-gray-400" />
                ) : (
                  <FaChevronDown className="text-gray-500 dark:text-gray-400" />
                )}
              </button>
              <div 
                className={`transition-all duration-300 ease-in-out ${
                  openIndex === index 
                    ? 'max-h-96 opacity-100'
                    : 'max-h-0 opacity-0 overflow-hidden'
                }`}
              >
                <div className="p-5 bg-white dark:bg-dark-primary border-t border-gray-200 dark:border-gray-700">
                  <p className="text-gray-600 dark:text-gray-300">{faq.answer}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;