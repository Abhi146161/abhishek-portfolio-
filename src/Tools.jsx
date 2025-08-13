import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaGitAlt } from "react-icons/fa";

const tools = [
  { name: "VS Code", icon: "🧑‍💻" },
  { name: "MS Word", icon: "📄" },
  { name: "MS Excel", icon: "📊" },
  { name: "Chrome DevTools", icon: "🧪" },
  { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
  { name: "GitHub", icon: <FaGithub className="text-white" /> },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, type: "spring", stiffness: 120 } },
};

const Tools = () => {
  return (
    <motion.section
      id="tools"
      className="bg-[#0d1117] text-center py-16 px-6"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <motion.h2
        className="text-4xl font-bold text-white mb-12"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        Tools I Use
      </motion.h2>

      <div className="grid gap-8 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 max-w-6xl mx-auto">
        {tools.map((tool, i) => (
          <motion.div
            key={i}
            className="relative flex flex-col items-center group bg-[#161b22] border border-gray-700 p-6 rounded-xl shadow-sm cursor-pointer"
            variants={itemVariants}
            whileHover={{ scale: 1.08 }}
          >
            <motion.div
              className="text-5xl mb-3"
              whileHover={{ scale: 1.3 }}
              transition={{ type: "spring", stiffness: 150 }}
            >
              {typeof tool.icon === "string" ? tool.icon : tool.icon}
            </motion.div>
            <motion.p
              className="text-gray-200 font-medium"
              whileHover={{ scale: 1.15 }}
              transition={{ type: "spring", stiffness: 150 }}
            >
              {tool.name}
            </motion.p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Tools;
