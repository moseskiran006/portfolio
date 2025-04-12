import React, { useLayoutEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ContactSection = () => {
  const sectionRef = useRef(null);
  const itemsRef = useRef([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      itemsRef.current.forEach((item, index) => {
        gsap.from(item, {
          scrollTrigger: {
            trigger: item,
            start: "top bottom",
            end: "center center",
            scrub: 1,
          },
          opacity: 0,
          x: index % 2 === 0 ? -50 : 50,
          duration: 1,
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6 text-[var(--neon-blue)]" />,
      text: "Samalkot, East Godavari, Andhra Pradesh, India",
    },
    {
      icon: <Mail className="w-6 h-6 text-[var(--neon-purple)]" />,
      text: "moseskiran006@gmail.com",
      href: "mailto:moseskiran006@gmail.com",
    },
    {
      icon: <Phone className="w-6 h-6 text-[var(--neon-green)]" />,
      text: "+91 6302766355",
      href: "tel:+916302766355",
    },
    {
      icon: <Github className="w-6 h-6 text-[var(--neon-blue)]" />,
      text: "github.com/moseskiran006",
      href: "https://github.com/moseskiran006",
    },
    {
      icon: <Linkedin className="w-6 h-6 text-[var(--neon-purple)]" />,
      text: "linkedin.com/in/kiran-kumar-pilli-5a6815257",
      href: "https://linkedin.com/in/kiran-kumar-pilli-5a6815257",
    },
  ];

  return (
    <section id="contact" ref={sectionRef} className="min-h-screen py-20">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="glass-card p-8"
      >
        <h2 className="section-heading">Contact</h2>
        <div className="space-y-8">
          {contactInfo.map((info, index) => (
            <div
              key={info.text}
              ref={el => itemsRef.current[index] = el}
              className="group"
            >
              <div className="glass-card p-4 transform transition-all duration-500 group-hover:scale-105">
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-purple)] rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000" />
                  <div className="relative flex items-center gap-4">
                    {info.icon}
                    {info.href ? (
                      <a
                        href={info.href}
                        target={info.href.startsWith('http') ? "_blank" : undefined}
                        rel={info.href.startsWith('http') ? "noopener noreferrer" : undefined}
                        className="hover:text-[var(--neon-blue)] transition-colors"
                      >
                        {info.text}
                      </a>
                    ) : (
                      <p>{info.text}</p>
                    )}
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

export default ContactSection;