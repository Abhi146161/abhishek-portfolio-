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
      className="py-12 px-6 bg-white text-center"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.h2
        className="text-3xl font-bold text-blue-700 mb-10"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Projects
      </motion.h2>

      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {projects.map((proj, i) => (
          <motion.div
            key={i}
            className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-xl transition-all cursor-pointer"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-gray-800">{proj.name}</h3>
            <p className="text-sm text-gray-600 mt-2">{proj.tech}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

export default Projects;
