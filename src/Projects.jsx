// Projects.jsx
import { motion } from "framer-motion";

function Projects() {
  const projects = [
    {
      name: "Guess Country Flag",
      tech: "HTML, CSS, JavaScript | flags.json API",
      link: "https://guess-flags-quiz.netlify.app",
    },
    {
      name: "Login Form",
      tech: "React, Tailwind CSS, React Hook Form, Vite",
      link: "https://login-verse.netlify.app",
    },
    {
      name: "Calculator",
      tech: "React, Tailwind CSS",
      link: "https://calc-ify.netlify.app",
    },
    {
      name: "Image to PDF & Compress",
      tech: "React, Tailwind CSS, Vite, Dropzone, ResizeControl",
      link: "https://pdf-edit-app.netlify.app",
    },
  ];

  const openProject = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <motion.section
      id="projects"
      className="py-16 px-4 sm:px-6 md:px-10 bg-[#0d1117] text-center"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.h2
        className="text-3xl font-bold text-white mb-10"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Projects
      </motion.h2>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {projects.map((proj, i) => (
          <motion.div
            key={i}
            className="bg-[#161b22] border border-[#30363d] p-6 rounded-xl shadow-lg hover:shadow-xl hover:border-blue-500/40 transition-all cursor-pointer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            viewport={{ once: true }}
            onClick={() => openProject(proj.link)}
          >
            <h3 className="text-xl font-semibold text-white">{proj.name}</h3>
            <p className="text-gray-400 mt-2">{proj.tech}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

export default Projects;
