import React from 'react';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from 'react-icons/fa';
import { SiTailwindcss, SiFirebase } from 'react-icons/si';

const skills = [
  { name: 'HTML', icon: <FaHtml5 className="text-orange-400" /> },
  { name: 'CSS', icon: <FaCss3Alt className="text-blue-400" /> },
  { name: 'JavaScript', icon: <FaJs className="text-yellow-400" /> },
  { name: 'React', icon: <FaReact className="text-cyan-400" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-sky-400" /> },
  { name: 'Firebase', icon: <SiFirebase className="text-yellow-300" /> },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, type: 'spring', stiffness: 120 } },
};

const Skills = () => {
  return (
    <motion.section
      id="skills"
      className="bg-[#0d1117] text-center py-16 px-6"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <h2 className="text-4xl font-bold text-white mb-12">My Skills</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="relative flex flex-col items-center group bg-[#161b22] border border-gray-700 p-6 rounded-xl shadow-sm cursor-pointer"
            variants={itemVariants}
            whileHover={{ scale: 1.08 }} // Card slightly enlarge
          >
            <motion.div
              className="text-5xl mb-3"
              whileHover={{ scale: 1.3 }} // Icon enlarge on hover
              transition={{ type: 'spring', stiffness: 150 }}
            >
              {skill.icon}
            </motion.div>
            <motion.p
              className="text-gray-200 font-medium"
              whileHover={{ scale: 1.15 }}
              transition={{ type: 'spring', stiffness: 150 }}
            >
              {skill.name}
            </motion.p>

            {/* Optional Tooltip */}
            <motion.div
              initial={{ opacity: 0, y: 5 }}
              whileHover={{ opacity: 1, y: -10 }}
              className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 px-2 py-1 rounded bg-gray-800 text-white text-xs whitespace-nowrap shadow"
            >
              {skill.name}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Skills;
