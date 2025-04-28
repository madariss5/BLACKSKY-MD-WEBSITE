import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleTheme = () => {
    if (mounted) {
      setTheme(theme === 'dark' ? 'light' : 'dark');
    }
  };

  return (
    <nav className="fixed w-full z-50 bg-white dark:bg-dark-primary border-b border-gray-200 dark:border-gray-800 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold text-primary dark:text-white">
                BlackSky<span className="text-accent">MD</span>
              </span>
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-gray-700 dark:text-gray-300 hover:text-accent dark:hover:text-accent transition-colors">
              Home
            </Link>
            <Link href="/features" className="text-gray-700 dark:text-gray-300 hover:text-accent dark:hover:text-accent transition-colors">
              Features
            </Link>
            <Link href="/docs" className="text-gray-700 dark:text-gray-300 hover:text-accent dark:hover:text-accent transition-colors">
              Documentation
            </Link>
            <Link href="/plugins" className="text-gray-700 dark:text-gray-300 hover:text-accent dark:hover:text-accent transition-colors">
              Plugins
            </Link>
            <Link href="/contact" className="text-gray-700 dark:text-gray-300 hover:text-accent dark:hover:text-accent transition-colors">
              Contact
            </Link>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-200 dark:bg-gray-800 text-primary dark:text-white focus:outline-none"
              aria-label="Toggle dark mode"
            >
              {mounted && theme === 'dark' ? <FaSun size={18} /> : <FaMoon size={18} />}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={toggleTheme}
              className="p-2 mr-2 rounded-lg bg-gray-200 dark:bg-gray-800 text-primary dark:text-white focus:outline-none"
            >
              {mounted && theme === 'dark' ? <FaSun size={18} /> : <FaMoon size={18} />}
            </button>
            <button
              onClick={toggleMenu}
              className="p-2 rounded-lg bg-gray-200 dark:bg-gray-800 text-primary dark:text-white focus:outline-none"
            >
              {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-60' : 'max-h-0 overflow-hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-dark-primary">
          <Link href="/" 
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800">
            Home
          </Link>
          <Link href="/features" 
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800">
            Features
          </Link>
          <Link href="/docs" 
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800">
            Documentation
          </Link>
          <Link href="/plugins" 
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800">
            Plugins
          </Link>
          <Link href="/contact" 
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;