import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import { FaRobot, FaGamepad, FaDatabase, FaLanguage, FaPlug, FaServer, FaShieldAlt, FaTools, FaUsers } from 'react-icons/fa';

const features = [
  {
    id: 'multi-device',
    icon: <FaRobot className="w-12 h-12 text-accent" />,
    title: 'Multi-Device Support',
    description: 'BlackSky-MD is built on the latest WhatsApp Multi-Device architecture, allowing you to use the bot without keeping your phone connected.',
    details: [
      'Connect to multiple devices simultaneously',
      'Works even when your phone is offline',
      'Faster response times with direct connections',
      'More stable performance with reduced disconnections',
      'Support for the latest WhatsApp features'
    ]
  },
  {
    id: 'rpg-system',
    icon: <FaGamepad className="w-12 h-12 text-accent" />,
    title: 'Advanced RPG System',
    description: 'Engage your group members with an immersive RPG experience that includes character progression, inventory management, and various activities.',
    details: [
      'Character creation and customization',
      'Experience-based leveling system',
      'Virtual economy with currency (Bargeld) and banking (Bankkonto)',
      'Resource gathering activities (mining, fishing, hunting)',
      'Quests and missions with rewards',
      'Trading system between players',
      'Item crafting and upgrading'
    ]
  },
  {
    id: 'plugin-system',
    icon: <FaPlug className="w-12 h-12 text-accent" />,
    title: 'Dynamic Plugin System',
    description: 'Customize your bot with a powerful plugin system that allows you to add, remove, and update features without restarting.',
    details: [
      'Hot-swappable plugins that can be updated on the fly',
      'Easy plugin creation with comprehensive documentation',
      'Plugin persistence across restarts using database storage',
      'Plugin sharing and importing from other users',
      'Built-in plugin manager with search and categorization',
      'Event-based architecture for high performance'
    ]
  },
  {
    id: 'database',
    icon: <FaDatabase className="w-12 h-12 text-accent" />,
    title: 'Persistent Storage',
    description: 'All your data is securely stored in a database, ensuring nothing is lost during restarts or deployments.',
    details: [
      'PostgreSQL database integration for reliability',
      'Automatic data migration and schema updates',
      'Periodic backups to prevent data loss',
      'Optimized for cloud platforms like Heroku',
      'Database monitoring and health checks',
      'Efficient data storage with minimal resource usage'
    ]
  },
  {
    id: 'multilingual',
    icon: <FaLanguage className="w-12 h-12 text-accent" />,
    title: 'Multilingual Support',
    description: 'Reach a global audience with built-in support for multiple languages, including German language implementations.',
    details: [
      'User interface available in multiple languages',
      'Easy language switching with simple commands',
      'Automatic message translation capabilities',
      'Language detection for incoming messages',
      'Expandable language system for adding new translations',
      'Regional formatting for dates, times, and numbers'
    ]
  },
  {
    id: 'admin-tools',
    icon: <FaShieldAlt className="w-12 h-12 text-accent" />,
    title: 'Group Administration',
    description: 'Powerful tools for managing your WhatsApp groups effectively and maintaining a positive environment.',
    details: [
      'User management (ban, kick, promote, demote)',
      'Anti-spam and anti-flood protection',
      'Message filtering and content moderation',
      'Welcome and goodbye messages',
      'Group statistics and activity monitoring',
      'Scheduled announcements and reminders',
      'Custom command access control'
    ]
  },
  {
    id: 'utility',
    icon: <FaTools className="w-12 h-12 text-accent" />,
    title: 'Utility Features',
    description: 'A wide range of practical features to enhance your WhatsApp experience and boost productivity.',
    details: [
      'Media downloaders for various platforms',
      'Sticker creation from images, videos, and GIFs',
      'Currency converter and calculator',
      'Weather forecasts and information',
      'Web searching and information retrieval',
      'Text formatting and manipulation tools',
      'QR code generation and scanning'
    ]
  },
  {
    id: 'deployment',
    icon: <FaServer className="w-12 h-12 text-accent" />,
    title: 'Deployment Ready',
    description: 'Optimized for deployment on various platforms with special adaptations for cloud services like Heroku.',
    details: [
      'One-click deployment on Heroku',
      'Docker support for containerized deployment',
      'Low resource usage for affordable hosting',
      'Environment variable configuration',
      'Automatic restart on crash',
      'Plugin persistence across dyno restarts',
      'Comprehensive deployment documentation'
    ]
  },
  {
    id: 'community',
    icon: <FaUsers className="w-12 h-12 text-accent" />,
    title: 'Active Community',
    description: 'Join a vibrant community of users and developers sharing plugins, tips, and helping each other.',
    details: [
      'Discord server for real-time support',
      'GitHub repository for collaborative development',
      'Regular updates and new features',
      'Plugin sharing platform',
      'Community tutorials and guides',
      'Contribution opportunities for developers',
      'Bug reporting and feature request system'
    ]
  }
];

export default function Features() {
  return (
    <Layout title="Features - BlackSky-MD Bot">
      <div className="pt-16 bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-dark-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-16">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-bold text-primary dark:text-white mb-4"
            >
              Powerful Features
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            >
              Discover all the capabilities that make BlackSky-MD the ultimate WhatsApp bot solution
            </motion.p>
          </div>

          <div className="space-y-16">
            {features.map((feature, index) => (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
              >
                <div className={`${index % 2 === 1 ? 'md:order-2' : ''}`}>
                  <div className="flex justify-center md:justify-start items-center mb-4">
                    {feature.icon}
                    <h2 className="text-2xl md:text-3xl font-bold text-primary dark:text-white ml-4">
                      {feature.title}
                    </h2>
                  </div>
                  <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                    {feature.description}
                  </p>
                  <ul className="space-y-2">
                    {feature.details.map((detail, i) => (
                      <li key={i} className="flex items-start">
                        <svg
                          className="w-5 h-5 text-accent mt-1 mr-2 flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-gray-600 dark:text-gray-300">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`${index % 2 === 1 ? 'md:order-1' : ''} flex justify-center`}>
                  <div className="w-full max-w-md h-64 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl shadow-xl flex items-center justify-center">
                    <div className="text-white text-xl font-semibold text-center px-8">
                      {feature.title} Feature Preview
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}