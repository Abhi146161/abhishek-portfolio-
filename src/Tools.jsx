import { motion } from "framer-motion";
import { FaGithub, FaGitAlt } from "react-icons/fa";

function Tools() {
  const tools = [
    { name: "VS Code", icon: "🧑‍💻" },
    { name: "MS Word", icon: "📄" },
    { name: "MS Excel", icon: "📊" },
    { name: "Chrome DevTools", icon: "🧪" },
    { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
    { name: "GitHub", icon: <FaGithub className="text-black" /> },
  ];

  return (
    <motion.section
      id="tools"
      className="bg-white py-12 px-6 text-center"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.h2
        className="text-3xl font-bold text-blue-700 mb-10"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        Tools I Use
      </motion.h2>

      <div className="grid gap-6 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 max-w-5xl mx-auto">
        {tools.map((tool, i) => (
          <motion.div
            key={i}
            className="bg-gray-50 shadow p-4 rounded-lg flex flex-col items-center hover:shadow-xl transition-all cursor-pointer"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.15 }}
            whileHover={{ scale: 1.1 }}
          >
            <div className="text-4xl mb-2">
              {typeof tool.icon === "string" ? (
                <span>{tool.icon}</span>
              ) : (
                tool.icon
              )}
            </div>
            <p className="text-gray-700 font-medium">{tool.name}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

export default Tools;
