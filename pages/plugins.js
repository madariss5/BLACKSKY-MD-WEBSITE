import { useState } from 'react';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import { FaSearch, FaTag, FaDownload, FaStar, FaFilter } from 'react-icons/fa';

// Mock data for plugins - this would come from an API in a real implementation
const allPlugins = [
  {
    id: 1,
    name: 'RPG Core',
    description: 'Core RPG system with character progression, inventory, and basic activities.',
    category: 'Gaming',
    subcategory: 'RPG',
    stars: 4.9,
    downloads: 2845,
    author: 'BlackSky Team',
    lastUpdated: '2023-04-15'
  },
  {
    id: 2,
    name: 'Admin Tools',
    description: 'Administrative tools for group management, including ban, kick, promote, and demote functions.',
    category: 'Utility',
    subcategory: 'Management',
    stars: 4.7,
    downloads: 1987,
    author: 'BlackSky Team',
    lastUpdated: '2023-05-22'
  },
  {
    id: 3,
    name: 'Auto Responder',
    description: 'Automated response system with customizable triggers and responses.',
    category: 'Automation',
    subcategory: 'Chat',
    stars: 4.5,
    downloads: 1876,
    author: 'DevCommunity',
    lastUpdated: '2023-03-10'
  },
  {
    id: 4,
    name: 'YouTube Downloader',
    description: 'Download videos and audio from YouTube with various quality options.',
    category: 'Downloader',
    subcategory: 'Media',
    stars: 4.8,
    downloads: 2532,
    author: 'MediaTools',
    lastUpdated: '2023-06-05'
  },
  {
    id: 5,
    name: 'Instagram Fetcher',
    description: 'Download photos, videos, and stories from Instagram profiles and hashtags.',
    category: 'Downloader',
    subcategory: 'Media',
    stars: 4.6,
    downloads: 1843,
    author: 'SocialExtract',
    lastUpdated: '2023-04-28'
  },
  {
    id: 6,
    name: 'TikTok Downloader',
    description: 'Download TikTok videos without watermark in high quality.',
    category: 'Downloader',
    subcategory: 'Media',
    stars: 4.7,
    downloads: 2105,
    author: 'MediaTools',
    lastUpdated: '2023-05-17'
  },
  {
    id: 7,
    name: 'ChatGPT Integration',
    description: 'Integrate OpenAI\'s ChatGPT into your WhatsApp groups for AI-powered conversations.',
    category: 'AI',
    subcategory: 'Chat',
    stars: 4.9,
    downloads: 3210,
    author: 'AIEnthusiast',
    lastUpdated: '2023-06-12'
  },
  {
    id: 8,
    name: 'Google Bard',
    description: 'Add Google\'s Bard AI to your WhatsApp chats for intelligent responses.',
    category: 'AI',
    subcategory: 'Chat',
    stars: 4.7,
    downloads: 2451,
    author: 'AIEnthusiast',
    lastUpdated: '2023-05-30'
  },
  {
    id: 9,
    name: 'Sticker Creator',
    description: 'Create custom stickers from images, videos, and GIFs with just a command.',
    category: 'Media',
    subcategory: 'Creation',
    stars: 4.8,
    downloads: 3105,
    author: 'StickerLab',
    lastUpdated: '2023-04-19'
  },
  {
    id: 10,
    name: 'Image Editor',
    description: 'Edit images with filters, text, stickers, and more directly in WhatsApp.',
    category: 'Media',
    subcategory: 'Editing',
    stars: 4.5,
    downloads: 1843,
    author: 'PixelPerfect',
    lastUpdated: '2023-03-25'
  },
  {
    id: 11,
    name: 'Currency Converter',
    description: 'Convert between currencies with real-time exchange rates.',
    category: 'Utility',
    subcategory: 'Finance',
    stars: 4.4,
    downloads: 1523,
    author: 'FinanceTools',
    lastUpdated: '2023-06-01'
  },
  {
    id: 12,
    name: 'Weather Forecast',
    description: 'Get weather forecasts for any location with detailed information.',
    category: 'Utility',
    subcategory: 'Information',
    stars: 4.6,
    downloads: 1762,
    author: 'WeatherNow',
    lastUpdated: '2023-05-11'
  },
  {
    id: 13,
    name: 'Translator',
    description: 'Translate text between multiple languages instantly.',
    category: 'Utility',
    subcategory: 'Language',
    stars: 4.7,
    downloads: 2143,
    author: 'LingualGenius',
    lastUpdated: '2023-04-07'
  },
  {
    id: 14,
    name: 'Group Games',
    description: 'Collection of fun games to play in WhatsApp groups, including trivia, word games, and more.',
    category: 'Gaming',
    subcategory: 'Casual',
    stars: 4.8,
    downloads: 2356,
    author: 'GameMaster',
    lastUpdated: '2023-05-28'
  },
  {
    id: 15,
    name: 'RPG Adventures',
    description: 'Advanced RPG module with quests, missions, and story-driven adventures.',
    category: 'Gaming',
    subcategory: 'RPG',
    stars: 4.9,
    downloads: 1987,
    author: 'QuestMaker',
    lastUpdated: '2023-06-10'
  },
  {
    id: 16,
    name: 'Auto Welcome',
    description: 'Automatically welcome new members to your group with customizable messages.',
    category: 'Automation',
    subcategory: 'Group',
    stars: 4.5,
    downloads: 1654,
    author: 'WelcomeBot',
    lastUpdated: '2023-03-15'
  },
  {
    id: 17,
    name: 'Scheduled Messages',
    description: 'Schedule messages to be sent at specific times or intervals.',
    category: 'Automation',
    subcategory: 'Messaging',
    stars: 4.6,
    downloads: 1432,
    author: 'TimeWizard',
    lastUpdated: '2023-04-22'
  },
  {
    id: 18,
    name: 'Media Scanner',
    description: 'Scan images and videos for inappropriate content using AI detection.',
    category: 'Moderation',
    subcategory: 'Content',
    stars: 4.7,
    downloads: 1321,
    author: 'SafeChat',
    lastUpdated: '2023-05-19'
  }
];

// Categories for filtering
const categories = ['All', 'Gaming', 'Utility', 'Automation', 'Downloader', 'AI', 'Media', 'Moderation'];

// Sort options
const sortOptions = [
  { value: 'newest', label: 'Newest First' },
  { value: 'popular', label: 'Most Popular' },
  { value: 'rating', label: 'Highest Rated' },
  { value: 'downloads', label: 'Most Downloads' }
];

export default function Plugins() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [sortBy, setSortBy] = useState('newest');
  const [currentPage, setCurrentPage] = useState(1);
  const [showFilters, setShowFilters] = useState(false);
  const itemsPerPage = 9;

  // Filter plugins based on search term and active category
  const filteredPlugins = allPlugins.filter(plugin => {
    const matchesSearch = plugin.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          plugin.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'All' || plugin.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  // Sort plugins based on selected option
  const sortedPlugins = [...filteredPlugins].sort((a, b) => {
    switch (sortBy) {
      case 'newest':
        return new Date(b.lastUpdated) - new Date(a.lastUpdated);
      case 'popular':
        return b.downloads - a.downloads;
      case 'rating':
        return b.stars - a.stars;
      case 'downloads':
        return b.downloads - a.downloads;
      default:
        return 0;
    }
  });

  // Pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentPlugins = sortedPlugins.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(sortedPlugins.length / itemsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <Layout title="Plugins - BlackSky-MD Bot">
      <div className="pt-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-bold text-primary dark:text-white mb-4"
            >
              Plugin Directory
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8"
            >
              Explore and discover plugins to enhance your BlackSky-MD bot
            </motion.p>

            {/* Search bar */}
            <div className="relative max-w-xl mx-auto mb-8">
              <input
                type="text"
                placeholder="Search plugins..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 pl-12 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-dark-secondary text-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <FaSearch className="absolute left-4 top-4 text-gray-400" />
            </div>

            {/* Mobile filter toggle */}
            <div className="md:hidden mb-4">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="inline-flex items-center justify-center px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm text-sm font-medium text-gray-700 dark:text-gray-200 bg-white dark:bg-dark-secondary hover:bg-gray-50 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-accent"
              >
                <FaFilter className="mr-2" />
                {showFilters ? 'Hide Filters' : 'Show Filters'}
              </button>
            </div>

            {/* Filter and sort controls */}
            <div className={`flex flex-col md:flex-row justify-center items-center gap-4 mb-8 ${showFilters ? 'block' : 'hidden md:flex'}`}>
              {/* Categories */}
              <div className="flex flex-wrap justify-center gap-2 w-full md:w-auto">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => { setActiveCategory(category); setCurrentPage(1); }}
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

              {/* Sort dropdown */}
              <div className="w-full md:w-auto">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full md:w-auto px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-dark-secondary text-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-accent"
                >
                  {sortOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Plugins grid */}
          {currentPlugins.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentPlugins.map((plugin, index) => (
                <motion.div
                  key={plugin.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="bg-white dark:bg-dark-secondary rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all"
                >
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-semibold text-primary dark:text-white">
                        {plugin.name}
                      </h3>
                      <span className="flex items-center text-sm bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded-full">
                        <FaTag className="mr-1" size={12} />
                        {plugin.category}
                      </span>
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                      by {plugin.author} • Updated {new Date(plugin.lastUpdated).toLocaleDateString()}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 mb-6 h-12 overflow-hidden">
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
                      <span className="text-sm flex items-center text-gray-500 dark:text-gray-400">
                        <FaDownload className="mr-1" />
                        {plugin.downloads.toLocaleString()}
                      </span>
                    </div>
                  </div>
                  <div className="px-6 py-3 bg-gray-50 dark:bg-gray-800 border-t border-gray-100 dark:border-gray-700">
                    <button className="w-full text-center py-2 rounded-md bg-accent text-white font-medium hover:bg-blue-600 transition-colors">
                      View Details
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-white dark:bg-dark-secondary rounded-lg shadow">
              <p className="text-gray-500 dark:text-gray-400 text-lg mb-4">
                No plugins found matching your criteria.
              </p>
              <button
                onClick={() => { setSearchTerm(''); setActiveCategory('All'); setCurrentPage(1); }}
                className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-accent hover:bg-blue-600"
              >
                Reset Filters
              </button>
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center mt-12">
              <nav className="flex items-center">
                <button
                  onClick={() => paginate(Math.max(1, currentPage - 1))}
                  disabled={currentPage === 1}
                  className={`px-3 py-1 rounded-l-md border ${
                    currentPage === 1
                      ? 'bg-gray-100 dark:bg-gray-800 text-gray-400 dark:text-gray-600 cursor-not-allowed'
                      : 'bg-white dark:bg-dark-secondary text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'
                  } border-gray-300 dark:border-gray-700`}
                >
                  Previous
                </button>
                {[...Array(totalPages).keys()].map((number) => (
                  <button
                    key={number + 1}
                    onClick={() => paginate(number + 1)}
                    className={`px-3 py-1 border-t border-b ${
                      currentPage === number + 1
                        ? 'bg-accent text-white'
                        : 'bg-white dark:bg-dark-secondary text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'
                    } border-gray-300 dark:border-gray-700`}
                  >
                    {number + 1}
                  </button>
                ))}
                <button
                  onClick={() => paginate(Math.min(totalPages, currentPage + 1))}
                  disabled={currentPage === totalPages}
                  className={`px-3 py-1 rounded-r-md border ${
                    currentPage === totalPages
                      ? 'bg-gray-100 dark:bg-gray-800 text-gray-400 dark:text-gray-600 cursor-not-allowed'
                      : 'bg-white dark:bg-dark-secondary text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'
                  } border-gray-300 dark:border-gray-700`}
                >
                  Next
                </button>
              </nav>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}