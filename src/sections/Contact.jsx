import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

function Contact() {
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
      id="contact"
      className="relative bg-[#0d1117] text-center py-20 px-6 overflow-hidden"
    >
      {/* Stars background */}
      <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full" />

      <motion.div
        className="relative z-10"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h2
          className="text-4xl font-bold text-white mb-8"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Contact Me
        </motion.h2>

        <motion.p
          className="text-gray-300 text-lg mb-3"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          📧 Email:{" "}
          <a
            href="mailto:abhishek95680@gmail.com"
            className="text-blue-400 hover:text-blue-500 hover:underline transition-colors"
          >
            abhishek95680@gmail.com
          </a>
        </motion.p>

        <motion.p
          className="text-gray-300 text-lg mb-6"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          📱 Mobile:{" "}
          <a
            href="tel:9568426691"
            className="text-blue-400 hover:text-blue-500 hover:underline transition-colors"
          >
            9568426691
          </a>
        </motion.p>

        <motion.div
          className="flex flex-wrap justify-center gap-6 mb-8"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <motion.a
            href="https://github.com/Abhi146161"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-500 hover:underline transition-colors"
            whileHover={{ scale: 1.1 }}
          >
            🔗 GitHub
          </motion.a>
          <motion.a
            href="https://linkedin.com/in/abhishek-saini-6a554a25b"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-500 hover:underline transition-colors"
            whileHover={{ scale: 1.1 }}
          >
            💼 LinkedIn
          </motion.a>
        </motion.div>

        <motion.a
          href="src/assets/Abhishek_Resume.pdf"
          download
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 hover:shadow-blue-500/50 transition-all"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          📄 Download Resume
        </motion.a>
      </motion.div>
    </section>
  );
}

export default Contact;
