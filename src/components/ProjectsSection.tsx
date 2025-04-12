import React, { useLayoutEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Github } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ProjectsSection = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, index) => {
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
          rotateY: index % 2 === 0 ? -30 : 30,
          duration: 1,
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const projects = [
    {
      title: "AI-Powered News Chatbot",
      subtitle: "Winner at DataWorks Hackathon, IIITDM",
      features: [
        "Real-time news bot using BART + Telegram & Twitter APIs",
        "Gradio UI for human-friendly input",
        "NLP, automation, and UX combined"
      ]
    },
    {
      title: "YOLOv9 + OCR Plate Reader",
      subtitle: "Real-time License Plate Detection",
      features: [
        "Real-time detection + reading of license plates",
        "Hosted backend using FastAPI & MongoDB",
        "Uses EasyOCR + YOLOv9"
      ]
    },
  {
    title: "LLM Fine-Tuning Dashboard",
subtitle: "Finetuning of GPT-3 & RoBERTa",
features: [
  "Finetuning pipelines for GPT-3 & RoBERTa models",
  "Integrated LangChain-based Retrieval-Augmented Generation (RAG)",
  "Optimized backend workflows for scalable question answering"
]},{

title: "🎨 DALL·E Image Generator",
subtitle: "AI-Powered Art Studio in the Browser",
features: [
  "MERN stack interface connected with DALL·E API",
  "Users generate unique art using natural language prompts",
  "Interactive AI-driven creative studio experience"
]

  }
  ];

  return (
    <section id="projects" ref={sectionRef} className="min-h-screen py-20">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="glass-card p-8"
      >
        <h2 className="section-heading">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <div
              key={project.title}
              ref={el => cardsRef.current[index] = el}
              className="group"
            >
              <div className="glass-card p-6 transform transition-all duration-500 group-hover:scale-105 group-hover:shadow-[0_0_30px_var(--neon-blue)]">
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-purple)] rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000" />
                  <div className="relative">
                    <h3 className="text-xl font-bold text-[var(--neon-blue)]">{project.title}</h3>
                    <p className="text-[var(--neon-purple)] mb-4">{project.subtitle}</p>
                    <ul className="list-disc list-inside mb-4 space-y-2">
                      {project.features.map((feature, i) => (
                        <li key={i} className="text-[var(--neon-green)]">{feature}</li>
                      ))}
                    </ul>
                    <a
                      href="https://github.com/moseskiran006"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-[var(--neon-green)] hover:text-[var(--neon-blue)] transition-colors"
                    >
                      <Github className="w-5 h-5" />
                      View on GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ProjectsSection;