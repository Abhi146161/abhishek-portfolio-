import { motion } from "framer-motion";

function About() {
  return (
    <motion.section
      className="py-12 px-4 sm:px-6 md:px-10 lg:px-20 bg-gray-100 text-center"
      id="about"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.img
        src="/Abhishek.img"
        alt="Abhishek Saini"
        className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 mx-auto rounded-full shadow-xl mb-4 object-cover border-4 border-blue-500"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      />

      <motion.h2
        className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-700 mb-4"
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        About Me
      </motion.h2>

      <motion.p
        className="text-base sm:text-lg md:text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed px-2 sm:px-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.7 }}
      >
        I’m Abhishek Saini, a passionate frontend developer skilled in HTML, CSS,
        JavaScript and React. I love building user-friendly web interfaces and learning
        new technologies every day.
      </motion.p>
    </motion.section>
  );
}

export default About;
