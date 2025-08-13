// About.jsx
import { motion } from "framer-motion";

function About() {
  return (
    <motion.section
      className="py-16 px-4 sm:px-6 md:px-10 lg:px-20 bg-[#0d1117] text-center"
      id="about"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.img
        src="/Abhishek.img"
        alt="Abhishek Saini"
        className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 mx-auto rounded-full shadow-lg mb-6 object-cover border-4 border-[#30363d]"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      />

      <motion.h2
        className="text-3xl md:text-4xl font-bold text-white mb-4"
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        About Me
      </motion.h2>

      <motion.p
        className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.7 }}
      >
        I’m Abhishek Saini, a passionate frontend developer skilled in HTML, CSS,
        JavaScript and React. I love building user-friendly web interfaces and
        learning new technologies every day.
      </motion.p>
    </motion.section>
  );
}

export default About;
