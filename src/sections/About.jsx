// About.jsx
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

function About() {
  const canvasRef = useRef(null);

  // Stars background effect
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let stars = [];
    const colors = ["#ffffff", "#c9d1d9", "#58a6ff"];
    let w, h;

    function init() {
      w = canvas.width = window.innerWidth;
      h = canvas.height = 400; // Fixed height for section
      stars = Array.from({ length: 80 }).map(() => ({
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
    <section className="relative bg-[#0d1117] text-center overflow-hidden py-16 px-4 sm:px-6 md:px-10 lg:px-20" id="about">
      {/* Canvas for floating stars */}
      <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full"></canvas>

      <motion.div
        className="relative z-10"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.img
          src="/Abhishek.img"
          alt="Abhishek Saini"
          className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 mx-auto rounded-full shadow-lg mb-6 object-cover border-4 border-[#30363d] hover:scale-110 transition-transform duration-300"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />

        <motion.h2
          className="text-3xl md:text-4xl font-bold text-white mb-4"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          About Me
        </motion.h2>

        <motion.p
          className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed px-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.7 }}
        >
          I’m Abhishek Saini, a passionate frontend developer skilled in HTML, CSS,
          JavaScript and React. I love building user-friendly web interfaces and
          exploring new technologies every day to create stunning digital experiences.
        </motion.p>
      </motion.div>
    </section>
  );
}

export default About;
