import React, { useLayoutEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(textRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center",
          end: "bottom center",
          scrub: 1,
        },
        opacity: 0,
        y: 100,
        rotateX: -45,
        transformOrigin: "0% 50% -100",
        duration: 1,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="min-h-screen py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30 pointer-events-none" />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="glass-card p-8 relative"
      >
        <h2 className="section-heading mb-12">About Me</h2>
        <div ref={textRef} className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-purple)] blur opacity-30 group-hover:opacity-100 transition duration-1000" />
          <p className="text-xl leading-relaxed mb-6 relative">
          I’m an AI/ML Engineer passionate about building intelligent systems using Generative AI, NLP, and Computer Vision. I specialize in fine-tuning large language models like GPT and RoBERTa, and deploying scalable AI applications with FastAPI, Docker, and cloud platforms. With hands-on experience in full-stack development and real-time AI solutions, I thrive on solving real-world problems with data-driven approaches.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;