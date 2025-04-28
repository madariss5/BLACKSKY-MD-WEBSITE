import Link from 'next/link';
import { FaGithub, FaTwitter, FaDiscord, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-dark-primary border-t border-gray-200 dark:border-gray-800 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <span className="text-2xl font-bold text-primary dark:text-white">
                BlackSky<span className="text-accent">MD</span>
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              A sophisticated WhatsApp Multi-Device RPG bot with advanced plugin management 
              and dynamic gaming capabilities.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/your-username/blacksky-md"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-accent dark:text-gray-400 dark:hover:text-accent transition-colors"
              >
                <FaGithub size={20} />
              </a>
              <a
                href="https://twitter.com/your-username"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-accent dark:text-gray-400 dark:hover:text-accent transition-colors"
              >
                <FaTwitter size={20} />
              </a>
              <a
                href="https://discord.gg/your-server"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-accent dark:text-gray-400 dark:hover:text-accent transition-colors"
              >
                <FaDiscord size={20} />
              </a>
              <a
                href="https://wa.me/your-number"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-accent dark:text-gray-400 dark:hover:text-accent transition-colors"
              >
                <FaWhatsapp size={20} />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-lg font-semibold text-primary dark:text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-600 dark:text-gray-400 hover:text-accent dark:hover:text-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/features" className="text-gray-600 dark:text-gray-400 hover:text-accent dark:hover:text-accent transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/docs" className="text-gray-600 dark:text-gray-400 hover:text-accent dark:hover:text-accent transition-colors">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="/plugins" className="text-gray-600 dark:text-gray-400 hover:text-accent dark:hover:text-accent transition-colors">
                  Plugins
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 dark:text-gray-400 hover:text-accent dark:hover:text-accent transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold text-primary dark:text-white mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/getting-started" className="text-gray-600 dark:text-gray-400 hover:text-accent dark:hover:text-accent transition-colors">
                  Getting Started
                </Link>
              </li>
              <li>
                <Link href="/installation" className="text-gray-600 dark:text-gray-400 hover:text-accent dark:hover:text-accent transition-colors">
                  Installation Guide
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-600 dark:text-gray-400 hover:text-accent dark:hover:text-accent transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <a
                  href="https://github.com/your-username/blacksky-md/issues"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-accent dark:hover:text-accent transition-colors"
                >
                  Report Issues
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
          <p className="text-center text-gray-500 dark:text-gray-400">
            &copy; {currentYear} BlackSky-MD. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;