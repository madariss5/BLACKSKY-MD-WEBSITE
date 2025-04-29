import { useState } from 'react';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import { FaGithub, FaDiscord, FaTwitter, FaEnvelope, FaWhatsapp } from 'react-icons/fa';

const socialLinks = [
  {
    name: 'GitHub',
    icon: <FaGithub size={24} />,
    url: 'https://github.com/madariss5/BLACKSKY-MDV9',
    color: 'hover:bg-gray-800 hover:text-white'
  },
  {
    name: 'Discord',
    icon: <FaDiscord size={24} />,
    url: 'https://discord.gg/D4p8B8SE',
    color: 'hover:bg-indigo-600 hover:text-white'
  },
  {
    name: 'Twitter',
    icon: <FaTwitter size={24} />,
    url: 'https://twitter.com/your-username',
    color: 'hover:bg-blue-400 hover:text-white'
  },
  {
    name: 'WhatsApp',
    icon: <FaWhatsapp size={24} />,
    url: 'https://wa.me/4915563151347',
    color: 'hover:bg-green-500 hover:text-white'
  }
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real implementation, you would send the form data to a server
    // This is just a simulation for the demo
    setFormStatus('success');
    setTimeout(() => {
      setFormStatus(null);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 3000);
  };

  return (
    <Layout title="Contact Us - BlackSky-MD Bot">
      <div className="pt-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-16">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-bold text-primary dark:text-white mb-4"
            >
              Get in Touch
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            >
              Have questions or feedback? We'd love to hear from you.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-dark-secondary rounded-lg shadow-md p-8"
            >
              <h2 className="text-2xl font-bold text-primary dark:text-white mb-6">
                Send us a Message
              </h2>

              {formStatus === 'success' ? (
                <div className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 p-4 rounded-lg mb-6">
                  Your message has been sent successfully! We'll get back to you soon.
                </div>
              ) : null}

              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block text-gray-700 dark:text-gray-300 font-medium mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent dark:bg-gray-800 dark:text-white"
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-gray-700 dark:text-gray-300 font-medium mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent dark:bg-gray-800 dark:text-white"
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="subject"
                    className="block text-gray-700 dark:text-gray-300 font-medium mb-2"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent dark:bg-gray-800 dark:text-white"
                  />
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="message"
                    className="block text-gray-700 dark:text-gray-300 font-medium mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent dark:bg-gray-800 dark:text-white"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-accent hover:bg-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent"
                >
                  <FaEnvelope className="mr-2" />
                  Send Message
                </button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col"
            >
              <div className="bg-white dark:bg-dark-secondary rounded-lg shadow-md p-8 mb-8">
                <h2 className="text-2xl font-bold text-primary dark:text-white mb-6">
                  Contact Information
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Feel free to reach out to us through any of the channels below. We're always happy to help with any questions or concerns.
                </p>

                <div className="space-y-4">
                  <div className="flex items-center">
                    <FaEnvelope className="text-accent mr-3" size={20} />
                    <a href="mailto:contact.blackskymd@gmail.com" className="text-gray-600 dark:text-gray-300 hover:text-accent dark:hover:text-accent transition-colors">
                      contact.blackskymd@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center">
                    <FaWhatsapp className="text-accent mr-3" size={20} />
                    <a href="https://wa.me/4915563151347" className="text-gray-600 dark:text-gray-300 hover:text-accent dark:hover:text-accent transition-colors">
                      +4915563151347
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-dark-secondary rounded-lg shadow-md p-8">
                <h2 className="text-2xl font-bold text-primary dark:text-white mb-6">
                  Connect With Us
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Follow us on social media to stay updated with the latest news and updates.
                </p>

                <div className="flex flex-wrap gap-4">
                  {socialLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center justify-center w-12 h-12 rounded-full border border-gray-300 dark:border-gray-700 text-gray-600 dark:text-gray-300 transition-colors ${link.color}`}
                      aria-label={link.name}
                    >
                      {link.icon}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
