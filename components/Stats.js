import { motion } from 'framer-motion';
import { FaUsers, FaCode, FaDownload, FaStar } from 'react-icons/fa';

const stats = [
  {
    icon: <FaUsers className="w-8 h-8 text-accent" />,
    value: '1,000+',
    label: 'Active Users'
  },
  {
    icon: <FaCode className="w-8 h-8 text-accent" />,
    value: '50+',
    label: 'Built-in Plugins'
  },
  {
    icon: <FaDownload className="w-8 h-8 text-accent" />,
    value: '5,000+',
    label: 'Downloads'
  },
  {
    icon: <FaStar className="w-8 h-8 text-accent" />,
    value: '4.8/5',
    label: 'User Rating'
  }
];

const Stats = () => {
  return (
    <section className="py-16 bg-gray-50 dark:bg-dark-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-primary dark:text-white mb-4"
          >
            BlackSky-MD by the Numbers
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            Join the community of users who have already transformed their WhatsApp experience
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-dark-secondary rounded-lg p-6 shadow-md text-center"
            >
              <div className="flex justify-center mb-4">
                {stat.icon}
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-primary dark:text-white mb-2">
                {stat.value}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;