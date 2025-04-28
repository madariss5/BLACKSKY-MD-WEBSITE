import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { FaGithub, FaDownload } from 'react-icons/fa';

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-b from-white to-gray-100 dark:from-dark-primary dark:to-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center md:text-left"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary dark:text-white mb-6">
              BlackSky<span className="text-accent">MD</span> WhatsApp Bot
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              A sophisticated WhatsApp Multi-Device RPG bot with advanced plugin management 
              and dynamic gaming capabilities.
            </p>
            <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <Link href="/docs/installation" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-accent hover:bg-blue-600 transition-colors">
                <FaDownload className="mr-2" /> Get Started
              </Link>
              <a
                href="https://github.com/your-username/blacksky-md"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 dark:border-gray-700 text-base font-medium rounded-md text-gray-700 dark:text-white bg-white dark:bg-dark-secondary hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
              >
                <FaGithub className="mr-2" /> GitHub
              </a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden md:block relative"
          >
            <div className="relative w-full h-[400px]">
              {/* Placeholder for bot preview image */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl shadow-2xl overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-white text-lg font-semibold">
                  BlackSky-MD Bot Preview
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Wave effect at the bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 100"
          className="w-full h-auto fill-white dark:fill-gray-900"
        >
          <path
            d="M0,64L48,69.3C96,75,192,85,288,85.3C384,85,480,75,576,69.3C672,64,768,64,864,69.3C960,75,1056,85,1152,85.3C1248,85,1344,75,1392,69.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;