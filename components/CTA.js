import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaRocket } from 'react-icons/fa';

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-500 to-purple-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your WhatsApp Experience?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Get started with BlackSky-MD today and unlock the full potential of WhatsApp automation
            with our advanced bot system.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link href="/docs/installation" className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-100 transition-colors">
              <FaRocket className="mr-2" /> Get Started Now
            </Link>
            <Link href="/docs" className="inline-flex items-center justify-center px-8 py-4 border border-white text-base font-medium rounded-md text-white hover:bg-white/10 transition-colors">
              Learn More
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;