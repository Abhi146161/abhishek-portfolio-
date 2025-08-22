import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiFirebase } from "react-icons/si";

const skills = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-400" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-400" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
  { name: "React", icon: <FaReact className="text-cyan-400" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" /> },
  { name: "Firebase", icon: <SiFirebase className="text-yellow-300" /> },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, type: "spring", stiffness: 120 },
  },
};

const Skills = () => {
  const canvasRef = useRef(null);

  // Floating stars background like Projects section
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let stars = [];
    const colors = ["#ffffff", "#c9d1d9", "#58a6ff"];
    let w, h;

    function init() {
      w = canvas.width = window.innerWidth;
      h = canvas.height = 400;
      stars = Array.from({ length: 100 }).map(() => ({
        x: Math.random() * w,
        y: Math.random() * h,
        radius: Math.random() * 1.2,
        color: colors[Math.floor(Math.random() * colors.length)],
        speed: Math.random() * 0.3 + 0.1,
      }));
    }

    function animate() {
      ctx.clearRect(0, 0, w, h);
      stars.forEach((star) => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = star.color;
        ctx.fill();
        star.y += star.speed;
        if (star.y > h) star.y = 0;
      });
      requestAnimationFrame(animate);
    }

    init();
    animate();
    window.addEventListener("resize", init);
    return () => window.removeEventListener("resize", init);
  }, []);

  return (
    <section
      id="skills"
      className="relative bg-[#0d1117] text-center py-20 px-6 overflow-hidden"
    >
      {/* Stars Background */}
      <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full" />

      <motion.div
        className="relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <motion.h2
          className="text-4xl font-bold text-white mb-12"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          My Skills
        </motion.h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="relative flex flex-col items-center group bg-[#161b22]/80 border border-[#30363d] p-6 rounded-xl shadow-md backdrop-blur-sm cursor-pointer hover:border-blue-500/50 transition-all"
              variants={itemVariants}
              whileHover={{ scale: 1.08, rotate: 0.5 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="text-5xl mb-3"
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 150 }}
              >
                {skill.icon}
              </motion.div>
              <motion.p
                className="text-gray-200 font-medium"
                whileHover={{ scale: 1.1, color: "#60a5fa" }}
                transition={{ type: "spring", stiffness: 150 }}
              >
                {skill.name}
              </motion.p>

              {/* Bottom hover line for pro effect */}
              <div className="mt-4 h-1 w-0 group-hover:w-full bg-blue-500 transition-all duration-500"></div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
