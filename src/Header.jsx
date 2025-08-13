import React from "react";
import { motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

const Header = () => {
  return (
    <motion.header
      className="bg-[#0d1117] text-white min-h-screen flex flex-col justify-center items-center text-center px-6 relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h1
        className="text-5xl sm:text-6xl font-extrabold mb-6"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Hi, I'm Abhishek
      </motion.h1>

      <motion.p
        className="text-gray-300 text-lg sm:text-xl mb-8 max-w-3xl"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        I am a passionate Frontend Developer | React & Tailwind CSS | Building interactive, smooth & modern web experiences.
      </motion.p>

      <motion.div
        className="flex flex-wrap justify-center gap-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <motion.a
          href="#projects"
          className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition-all shadow-md hover:shadow-xl"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          View Projects
        </motion.a>
        <motion.a
          href="#contact"
          className="border border-blue-400 text-blue-400 px-6 py-3 rounded hover:bg-blue-500 hover:text-white transition-all shadow-md hover:shadow-xl"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Contact Me
        </motion.a>
      </motion.div>

      <motion.div
        className="flex gap-6 mt-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <motion.a
          href="https://github.com/Abhi146161"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition-colors text-2xl"
          whileHover={{ scale: 1.2 }}
        >
          GitHub
        </motion.a>
        <motion.a
          href="https://linkedin.com/in/abhishek-saini-6a554a25b"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-blue-400 transition-colors text-2xl"
          whileHover={{ scale: 1.2 }}
        >
          LinkedIn
        </motion.a>
      </motion.div>

      {/* Scroll Hint */}
      <motion.a
        href="#skills"
        className="absolute bottom-8 flex flex-col items-center text-gray-400 hover:text-white text-sm sm:text-base"
        initial={{ y: 0 }}
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
      >
        <FaChevronDown className="text-2xl mb-1" />
        <span className="uppercase tracking-wider">Scroll for other details</span>
      </motion.a>
    </motion.header>
  );
};

export default Header;
