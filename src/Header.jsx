import React, { useRef } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

const Header = () => {
  const containerRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [0, 1], [10, -10]);
  const rotateY = useTransform(mouseX, [0, 1], [-10, 10]);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - left) / width;
    const y = (e.clientY - top) / height;
    mouseX.set(x);
    mouseY.set(y);
  };

  return (
    <motion.header
      ref={containerRef}
      onMouseMove={handleMouseMove}
      style={{ perspective: 1200 }}
      className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden bg-[#0d1117] text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Subtle animated spotlight effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.06),transparent_80%)]"></div>

      {/* Floating particles for premium feel */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -50, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      {/* Content with smooth 3D parallax */}
      <motion.div
        style={{ rotateX, rotateY }}
        className="z-10 flex flex-col items-center"
      >
        <motion.h1
          className="text-5xl sm:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-100 via-gray-300 to-gray-100"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Hi, I'm Abhishek
        </motion.h1>

        <motion.p
          className="text-gray-400 text-lg sm:text-xl mb-8 max-w-2xl leading-relaxed"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Frontend Developer | React & Tailwind CSS | Building interactive,
          smooth & modern web experiences.
        </motion.p>

        {/* Premium Glass Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.a
            href="#projects"
            className="px-6 py-3 rounded-lg bg-white/5 border border-white/10 backdrop-blur-md text-white shadow-lg hover:shadow-[0_0_25px_rgba(59,130,246,0.5)] transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Projects
          </motion.a>
          <motion.a
            href="#contact"
            className="px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-purple-700 text-white shadow-lg hover:shadow-[0_0_25px_rgba(147,51,234,0.5)] transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Me
          </motion.a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          className="flex gap-6 mt-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          {[
            { href: "https://github.com/Abhi146161", label: "GitHub" },
            { href: "https://linkedin.com/in/abhishek-saini-6a554a25b", label: "LinkedIn" },
          ].map((item, i) => (
            <motion.a
              key={i}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-200 transition-colors text-2xl hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.4)]"
              whileHover={{ scale: 1.15 }}
            >
              {item.label}
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.a
        href="#skills"
        className="absolute bottom-8 flex flex-col items-center text-gray-500 hover:text-gray-200 text-sm sm:text-base"
        initial={{ y: 0 }}
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
      >
        <FaChevronDown className="text-2xl mb-1" />
        <span className="uppercase tracking-wider">Scroll for more</span>
      </motion.a>
    </motion.header>
  );
};

export default Header;
