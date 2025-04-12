import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Brain, Mail, FileText, Github, Linkedin } from 'lucide-react';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import EducationSection from './components/EducationSection';
import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import CustomCursor from './components/CustomCursor';

function App() {
  const { scrollYProgress } = useScroll();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 2000);
  }, []);

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  if (isLoading) {
    return (
      <div className="h-screen flex items-center justify-center bg-[#0a0a0a]">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-6xl font-bold text-gradient"
        >
          KP
        </motion.div>
      </div>
    );
  }

  return (
    <>
      <CustomCursor />
      <div className="relative min-h-screen">
        <motion.div
          className="fixed inset-0 z-0"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            y: backgroundY,
          }}
        />
        <div className="relative z-10">
          <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-black/30">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-2xl font-bold text-gradient"
              >
                KP
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex gap-6"
              >
                <a href="#about" className="hover:text-[var(--neon-blue)] transition-colors">
                  <Brain className="w-6 h-6" />
                </a>
                <a href="#contact" className="hover:text-[var(--neon-blue)] transition-colors">
                  <Mail className="w-6 h-6" />
                </a>
                <a
                  href="https://drive.google.com/file/d/1EEiUOdQMlhGm8utEKJAVnio4pZETaKDy/view?usp=sharing"
                  target="_blank"
                  className="hover:text-[var(--neon-blue)] transition-colors"
                >
                  <FileText className="w-6 h-6" />
                </a>
                <a
                  href="https://github.com/moseskiran006"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[var(--neon-blue)] transition-colors"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a
                  href="https://linkedin.com/in/kiran-kumar-pilli-5a6815257"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[var(--neon-blue)] transition-colors"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
              </motion.div>
            </div>
          </nav>

          <main className="container mx-auto px-6">
            <HeroSection />
            <AboutSection />
            <EducationSection />
            <ExperienceSection />
            <ProjectsSection />
            <ContactSection />
          </main>
        </div>
      </div>
    </>
  );
}

export default App;