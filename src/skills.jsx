import React from 'react';
import { motion } from 'framer-motion';
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGithub,
} from 'react-icons/fa';
import {
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiMysql,
  SiFirebase,
} from 'react-icons/si';

const skills = [
  { name: 'HTML', icon: <FaHtml5 className="text-orange-500" /> },
  { name: 'CSS', icon: <FaCss3Alt className="text-blue-500" /> },
  { name: 'JavaScript', icon: <FaJs className="text-yellow-400" /> },
  { name: 'React', icon: <FaReact className="text-cyan-400" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-sky-400" /> },
  // { name: 'Node.js', icon: <FaNodeJs className="text-green-600" /> },
  // { name: 'Express.js', icon: <SiExpress className="text-gray-800 dark:text-gray-200" /> },
  // { name: 'MongoDB', icon: <SiMongodb className="text-green-500" /> },
  // { name: 'MySQL', icon: <SiMysql className="text-blue-600" /> },
  { name: 'Firebase', icon: <SiFirebase className="text-yellow-500" /> },
  // { name: 'GitHub', icon: <FaGithub className="text-gray-800 dark:text-white" /> },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const Skills = () => {
  return (
    <motion.section
      className="bg-gray-50 dark:bg-gray-900 text-center py-12 px-6"
      id="skills"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <h2 className="text-4xl font-bold mb-10 text-gray-900 dark:text-white">My Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center group bg-white dark:bg-gray-800 p-5 rounded-xl shadow-md dark:shadow-xl hover:shadow-xl transition-shadow duration-300"
            variants={itemVariants}
          >
            <div className="text-4xl mb-2">{skill.icon}</div>
            <p className="text-gray-700 dark:text-gray-300 font-medium">{skill.name}</p>

            {/* Tooltip */}
            <div className="absolute z-10 hidden group-hover:block mt-2 text-xs bg-black text-white px-2 py-1 rounded">
              {skill.name}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Skills;
