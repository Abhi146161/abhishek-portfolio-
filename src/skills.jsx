import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGithub, FaNode } from "react-icons/fa";
import { SiTailwindcss, SiVite } from "react-icons/si";

function Skills() {
  const skills = [
    { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
    { name: "React", icon: <FaReact className="text-cyan-400" /> },
    { name: "Tailwind", icon: <SiTailwindcss className="text-blue-400" /> },
    { name: "Vite", icon: <SiVite className="text-purple-500" /> },
  ];

  return (
    <section id="skills" className="bg-gray-50 py-12 px-6 text-center">
      <h2 className="text-3xl font-bold text-blue-700 mb-10">Skills</h2>
      <div className="grid gap-6 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 max-w-5xl mx-auto">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-white shadow p-4 rounded-lg flex flex-col items-center hover:shadow-md transition duration-300"
          >
            <div className="text-4xl mb-2">{skill.icon}</div>
            <p className="text-gray-700 font-medium">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
