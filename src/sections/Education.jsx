import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const Education = () => {
  const canvasRef = useRef(null);

  // Stars background like other sections
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let stars = [];
    const colors = ["#ffffff", "#c9d1d9", "#58a6ff"];
    let w, h;

    function init() {
      w = canvas.width = window.innerWidth;
      h = canvas.height = 350;
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
    <section
      id="education"
      className="relative bg-[#0d1117] text-center py-20 px-6 overflow-hidden"
    >
      {/* Stars background */}
      <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full" />

      <motion.div
        className="relative z-10 max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h2
          className="text-4xl font-bold text-white mb-12"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          My Education
        </motion.h2>

        <ul className="text-left text-gray-300 space-y-6">
          <li>
            <span className="text-white font-semibold text-lg">🎓 Bachelor of Computer Applications (BCA)</span>
            <br /> Quantum University, Roorkee | 2022 – 2025
            <br /> <span className="text-blue-400">CGPA: 6.74</span>
          </li>

          <li>
            <span className="text-white font-semibold text-lg">🏫 Senior Secondary (12th)</span>
            <br /> Nav Jano Dey Inter College, UP Board | 2022
            <br /> <span className="text-blue-400">Percentage: 63.4%</span>
          </li>

          <li>
            <span className="text-white font-semibold text-lg">🏫 Secondary (10th)</span>
            <br /> Nav Jano Dey Inter College, UP Board | 2020
            <br /> <span className="text-blue-400">Percentage: 69%</span>
          </li>
        </ul>
      </motion.div>
    </section>
  );
};

export default Education;
