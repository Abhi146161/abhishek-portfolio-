import { motion } from "framer-motion";
import { useRef, useEffect } from "react";

function Projects() {
  const canvasRef = useRef(null);

  // Floating stars background
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let stars = [];
    const colors = ["#ffffff", "#c9d1d9", "#58a6ff"];
    let w, h;

    function init() {
      w = canvas.width = window.innerWidth;
      h = canvas.height = 500; // Fixed height for section
      stars = Array.from({ length: 120 }).map(() => ({
        x: Math.random() * w,
        y: Math.random() * h,
        radius: Math.random() * 1.3,
        color: colors[Math.floor(Math.random() * colors.length)],
        speed: Math.random() * 0.4 + 0.1,
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
    <section
      id="projects"
      className="relative py-20 px-4 sm:px-6 md:px-10 bg-[#0d1117] text-center overflow-hidden"
    >
      {/* Stars background */}
      <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full"></canvas>

      <motion.div
        className="relative z-10"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-white mb-10"
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
              className="bg-[#161b22]/80 border border-[#30363d] p-6 rounded-xl shadow-lg backdrop-blur-sm hover:border-blue-500/50 transition-all cursor-pointer group"
              whileHover={{ scale: 1.07, rotate: 0.5 }}
              whileTap={{ scale: 0.97 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.15, type: "spring", stiffness: 120 }}
              viewport={{ once: true }}
              onClick={() => openProject(proj.link)}
            >
              <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors">
                {proj.name}
              </h3>
              <p className="text-gray-400 mt-2 text-sm group-hover:text-gray-300 transition-colors">
                {proj.tech}
              </p>
              <div className="mt-4 h-1 w-0 group-hover:w-full bg-blue-500 transition-all duration-500"></div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Projects;
