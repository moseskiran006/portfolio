import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const titles = [
  "AI/ML Engineer",
  "Generative AI Engineer",
  "LLM Fine-Tuner",
  "Hackathon Winner",
  "OCR Wizard"
];

const HeroSection = () => {
  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % titles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative">
      <div className="text-center">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          className="mb-8"
        >
          <img
            src="https://drive.google.com/file/d/1DqRUU4yYlrUsB_RoomJTLd0XZFZQdtcE/view?usp=sharing"
            alt="Kiran Kumar Pilli"
            className="w-48 h-48 rounded-full mx-auto border-4 border-[var(--neon-blue)] shadow-lg shadow-[var(--neon-blue)]/20"
          />
        </motion.div>

        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-6xl font-bold mb-4 text-glow"
        >
          Hi, I'm Kiran Kumar Pilli
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-xl md:text-2xl mb-8 text-[var(--neon-purple)]"
        >
          I build intelligent systems with code and vision
        </motion.p>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-lg md:text-xl font-mono text-[var(--neon-green)]"
        >
          {titles[titleIndex]}
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-12 flex gap-6 justify-center"
        >
          <a
            href="#projects"
            className="glass-card px-8 py-3 rounded-full hover:bg-[var(--neon-blue)]/20 transition-colors"
          >
            View Projects
          </a>
          <a
            href="https://drive.google.com/file/d/1EEiUOdQMlhGm8utEKJAVnio4pZETaKDy/view?usp=sharing"
            target="_blank"
            className="glass-card px-8 py-3 rounded-full hover:bg-[var(--neon-purple)]/20 transition-colors"
          >
            View Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;