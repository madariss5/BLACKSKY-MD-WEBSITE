import { motion } from 'framer-motion';
import { FaGamepad, FaDatabase, FaLanguage, FaPlug, FaWhatsapp, FaServer } from 'react-icons/fa';

const features = [
  {
    icon: <FaWhatsapp className="w-10 h-10 text-accent" />,
    title: 'Multi-Device Compatible',
    description: 'Works with WhatsApp Multi-Device, supporting all the latest WhatsApp features and capabilities.'
  },
  {
    icon: <FaPlug className="w-10 h-10 text-accent" />,
    title: 'Dynamic Plugin System',
    description: 'Easily add, remove, and update plugins without restarting the bot. Create custom plugins with ease.'
  },
  {
    icon: <FaGamepad className="w-10 h-10 text-accent" />,
    title: 'Advanced RPG System',
    description: 'Comprehensive RPG system with character progression, inventory management, and engaging gameplay.'
  },
  {
    icon: <FaLanguage className="w-10 h-10 text-accent" />,
    title: 'Multilingual Support',
    description: 'Supports multiple languages including German language implementations for a global user base.'
  },
  {
    icon: <FaDatabase className="w-10 h-10 text-accent" />,
    title: 'Persistent Storage',
    description: 'Database integration ensures your plugins and user data persist across restarts and deployments.'
  },
  {
    icon: <FaServer className="w-10 h-10 text-accent" />,
    title: 'Heroku Deployment Ready',
    description: 'Optimized for deployment on Heroku with special adaptations to handle platform constraints.'
  }
];

const Features = () => {
  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-primary dark:text-white mb-4"
          >
            Powerful Features
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            BlackSky-MD combines advanced technologies to create an unparalleled WhatsApp bot experience
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 dark:bg-dark-secondary rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-blue-50 dark:bg-gray-800 rounded-full mb-6 mx-auto">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-primary dark:text-white text-center mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-center">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;