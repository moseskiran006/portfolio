import React, { useLayoutEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const EducationSection = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, index) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top bottom",
            end: "top center",
            scrub: 1,
          },
          opacity: 0,
          x: index % 2 === 0 ? -100 : 100,
          rotateY: index % 2 === 0 ? -30 : 30,
          duration: 1,
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const educationData = [
    {
      school: "IIITDM Kurnool",
      course: "B.Tech AI & Data Science (2021–2025)",
      grade: "CGPA: 7.00"
    },
    {
      school: "Sri Chaitanya Jr. College",
      course: "MPC Stream (2017–2019)",
      grade: "CGPA: 9.03"
    },
    {
      school: "Sri Prathibha High School",
      grade: "CGPA: 9.3"
    }
  ];

  return (
    <section id="education" ref={sectionRef} className="min-h-screen py-20">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="glass-card p-8"
      >
        <h2 className="section-heading">Education</h2>
        <div className="space-y-12">
          {educationData.map((edu, index) => (
            <div
              key={edu.school}
              ref={el => cardsRef.current[index] = el}
              className="glass-card p-6 transform transition-all duration-500 hover:scale-105 hover:shadow-[0_0_30px_var(--neon-blue)]"
            >
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-purple)] rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000" />
                <div className="relative">
                  <h3 className="text-xl font-bold text-[var(--neon-blue)]">{edu.school}</h3>
                  {edu.course && <p className="text-[var(--neon-purple)]">{edu.course}</p>}
                  <p className="text-[var(--neon-green)]">{edu.grade}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default EducationSection;