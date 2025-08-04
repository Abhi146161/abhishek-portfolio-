import { motion } from "framer-motion";

function Contact() {
  return (
    <motion.section
      id="contact"
      className="bg-blue-50 dark:bg-gray-900 py-12 px-4 sm:px-6 text-center"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.h2
        className="text-3xl font-bold text-blue-700 dark:text-blue-400 mb-6"
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Contact Me
      </motion.h2>

      <motion.p
        className="text-gray-700 dark:text-gray-300 text-lg mb-2"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        📧 Email:{" "}
        <a
          href="mailto:abhishek95680@gmail.com"
          className="text-blue-600 hover:underline"
        >
          abhishek95680@gmail.com
        </a>
      </motion.p>

      <motion.p
        className="text-gray-700 dark:text-gray-300 text-lg mb-4"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        📱 Mobile:{" "}
        <a
          href="tel:9568426691"
          className="text-blue-600 hover:underline"
        >
          9568426691
        </a>
      </motion.p>

      <motion.div
        className="flex flex-wrap justify-center gap-6 mb-6"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <a
          href="https://github.com/Abhi146161"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-700 dark:text-blue-400 hover:underline hover:text-blue-900 transition-all"
        >
          🔗 GitHub
        </a>
        <a
          href="https://linkedin.com/in/abhishek-saini-6a554a25b"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-700 dark:text-blue-400 hover:underline hover:text-blue-900 transition-all"
        >
          💼 LinkedIn
        </a>
      </motion.div>

      <motion.a
        href="/resume.pdf"
        download
        className="inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        📄 Download Resume
      </motion.a>
    </motion.section>
  );
}

export default Contact;
