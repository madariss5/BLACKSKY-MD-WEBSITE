import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaSearch, FaTag } from 'react-icons/fa';

// Mock data for plugins - this would come from an API in a real implementation
const pluginsData = [
  {
    id: 1,
    name: 'RPG System',
    description: 'Comprehensive RPG system with character progression, inventory, quests, and more.',
    category: 'Gaming',
    stars: 4.9,
    downloads: 1245
  },
  {
    id: 2,
    name: 'Admin Tools',
    description: 'Administrative tools for group management, including ban, kick, promote, and demote functions.',
    category: 'Utility',
    stars: 4.7,
    downloads: 987
  },
  {
    id: 3,
    name: 'Auto Responder',
    description: 'Automated response system with customizable triggers and responses.',
    category: 'Automation',
    stars: 4.5,
    downloads: 876
  },
  {
    id: 4,
    name: 'Media Downloader',
    description: 'Download media from various platforms including YouTube, Instagram, TikTok, and more.',
    category: 'Downloader',
    stars: 4.8,
    downloads: 1532
  },
  {
    id: 5,
    name: 'AI Chat',
    description: 'Integrate AI chatbots into your WhatsApp groups using OpenAI, Google Bard, and more.',
    category: 'AI',
    stars: 4.9,
    downloads: 2103
  },
  {
    id: 6,
    name: 'Sticker Maker',
    description: 'Create custom stickers from images, videos, and GIFs with just a command.',
    category: 'Media',
    stars: 4.6,
    downloads: 1356
  }
];

// Categories for filtering
const categories = ['All', 'Gaming', 'Utility', 'Automation', 'Downloader', 'AI', 'Media'];

const PluginShowcase = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  // Filter plugins based on search term and active category
  const filteredPlugins = pluginsData.filter(plugin => {
    const matchesSearch = plugin.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          plugin.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'All' || plugin.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-primary dark:text-white mb-4"
          >
            Explore Our Plugins
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8"
          >
            Enhance your bot with our collection of powerful plugins
          </motion.p>

          {/* Search and filter controls */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-12">
            <div className="relative w-full md:w-1/3">
              <input
                type="text"
                placeholder="Search plugins..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 pl-10 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-dark-secondary text-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <FaSearch className="absolute left-3 top-3 text-gray-400" />
            </div>

            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeCategory === category
                      ? 'bg-accent text-white'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Plugins grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPlugins.length > 0 ? (
              filteredPlugins.map((plugin, index) => (
                <motion.div
                  key={plugin.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 dark:bg-dark-secondary rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-semibold text-primary dark:text-white">
                        {plugin.name}
                      </h3>
                      <span className="flex items-center text-sm bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded-full">
                        <FaTag className="mr-1" size={12} />
                        {plugin.category}
                      </span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 mb-6 line-clamp-2">
                      {plugin.description}
                    </p>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <svg
                              key={i}
                              className={`w-4 h-4 ${
                                i < Math.floor(plugin.stars)
                                  ? 'text-yellow-500'
                                  : 'text-gray-300 dark:text-gray-600'
                              }`}
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                        <span className="ml-1 text-sm text-gray-600 dark:text-gray-400">
                          {plugin.stars}
                        </span>
                      </div>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {plugin.downloads.toLocaleString()} downloads
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-gray-500 dark:text-gray-400 text-lg">
                  No plugins found matching your criteria.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PluginShowcase;