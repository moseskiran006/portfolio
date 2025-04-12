import React, { useLayoutEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ExperienceSection = () => {
  const sectionRef = useRef(null);
  const timelineRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray('.experience-card');
      
      cards.forEach((card, i) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top bottom",
            end: "center center",
            scrub: 1,
          },
          opacity: 0,
          scale: 0.8,
          y: 100,
          rotateX: -30,
          duration: 1,
        });
      });

      gsap.to(timelineRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center",
          end: "bottom center",
          scrub: 1,
        },
        height: "100%",
        duration: 1,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="experience" ref={sectionRef} className="min-h-screen py-20 relative">
      <div ref={timelineRef} className="absolute left-1/2 top-0 w-1 bg-gradient-to-b from-[var(--neon-blue)] to-[var(--neon-purple)] h-0" />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="glass-card p-8"
      >
        <h2 className="section-heading">Work Experience</h2>
        <div className="space-y-16">
          <div className="experience-card glass-card p-6 transform hover:scale-105 transition-all duration-500">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-purple)] rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000" />
              <div className="relative">
                <h3 className="text-xl font-bold text-[var(--neon-blue)]">AM Global Research & Technologies (Computer Vision Intern)</h3>
                <p className="text-[var(--neon-purple)]">June-December 2024</p>
                <ul className="list-disc list-inside mt-4 space-y-2">
                  <li className="text-[var(--neon-green)]">YOLOv9 + EasyOCR number plate detection</li>
                  <li className="text-[var(--neon-green)]">FastAPI backend with MongoDB</li>
                  <li className="text-[var(--neon-green)]">Full-stack deployment</li>
                  <li className="text-[var(--neon-green)]">Awarded "Best Intern"</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="experience-card glass-card p-6 transform hover:scale-105 transition-all duration-500">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-purple)] rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000" />
              <div className="relative">
                <h3 className="text-xl font-bold text-[var(--neon-blue)]">Acmegrade (Machine Learning Intern)</h3>
                <p className="text-[var(--neon-purple)]">June–September 2023</p>
                <ul className="list-disc list-inside mt-4 space-y-2">
                  <li className="text-[var(--neon-green)]">Built RAG systems with LangChain</li>
                  <li className="text-[var(--neon-green)]">Fine-tuned GPT-3 & RoBERTa</li>
                  <li className="text-[var(--neon-green)]">Delivered LLM-based pipelines</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ExperienceSection;
