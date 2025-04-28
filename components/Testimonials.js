import { motion } from 'framer-motion';
import { FaQuoteLeft } from 'react-icons/fa';

const testimonials = [
  {
    id: 1,
    content: "BlackSky-MD has completely transformed how I manage my WhatsApp groups. The RPG system keeps members engaged and the admin tools are incredibly powerful.",
    author: "Alex Johnson",
    role: "Community Manager",
    avatar: "/avatars/avatar1.png"
  },
  {
    id: 2,
    content: "The plugin system is incredibly flexible. I was able to create custom plugins for my specific needs with minimal effort. The documentation is excellent!",
    author: "Maria Garcia",
    role: "Developer",
    avatar: "/avatars/avatar2.png"
  },
  {
    id: 3,
    content: "I run a gaming community, and the RPG features in BlackSky-MD have kept our members engaged like never before. The persistent storage is a game-changer.",
    author: "Thomas Weber",
    role: "Gaming Community Owner",
    avatar: "/avatars/avatar3.png"
  }
];

const Testimonials = () => {
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
            What Our Users Say
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            Don't just take our word for it - hear from the community
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-dark-secondary rounded-lg p-8 shadow-md relative"
            >
              <FaQuoteLeft className="text-gray-200 dark:text-gray-800 text-4xl absolute top-4 left-4" />
              <div className="relative z-10">
                <p className="text-gray-600 dark:text-gray-300 mb-6 italic">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-primary dark:text-white">
                      {testimonial.author}
                    </h4>
                    <p className="text-gray-500 dark:text-gray-400">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;