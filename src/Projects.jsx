import { motion } from "framer-motion";

function Projects() {
  const projects = [
    {
      name: "Weather App",
      tech: "HTML, CSS, JS | OpenWeather API",
    },
    {
      name: "Calculator",
      tech: "React + Styled CSS | Live UI updates",
    },
    // Future Projects yaha add kar sakta hai
  ];

  return (
    <motion.section
      id="projects"
      className="py-12 px-4 sm:px-6 md:px-10 bg-white text-center"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.h2
        className="text-2xl sm:text-3xl font-bold text-blue-700 mb-8 sm:mb-10"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Projects
      </motion.h2>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto px-2 sm:px-4">
        {projects.map((proj, i) => (
          <motion.div
            key={i}
            className="bg-gray-100 p-5 sm:p-6 rounded-xl shadow hover:shadow-xl transition-all cursor-pointer"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800">{proj.name}</h3>
            <p className="text-sm sm:text-base text-gray-600 mt-2">{proj.tech}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

export default Projects;
