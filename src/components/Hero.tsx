"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";

export default function Hero() {
  const [particles, setParticles] = useState<{ id: number; style: any }[]>([]);

  useEffect(() => {
    const newParticles = [...Array(20)].map((_, i) => ({
      id: i,
      style: {
        width: Math.random() * 10 + 5 + "px",
        height: Math.random() * 10 + 5 + "px",
        left: Math.random() * 100 + "%",
        top: Math.random() * 100 + "%",
        animationDelay: Math.random() * 5 + "s",
        animationDuration: Math.random() * 10 + 10 + "s",
      },
    }));
    setParticles(newParticles);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Cinematic Background Overlay */}
      <div className="absolute inset-0 bg-[url('/hero-bg.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-indigo/60 via-brand-indigo/40 to-brand-indigo" />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute bg-brand-gold/40 rounded-full blur-xl animate-float"
            style={particle.style}
          />
        ))}
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-[0.3em] text-brand-gold uppercase border border-brand-gold/30 rounded-full glass">
            Traditional Hospitality • Modern Nature
          </span>
          <h1 className="text-5xl md:text-8xl font-bold text-brand-sand mb-6 font-cairo leading-tight">
            Where Family Gatherings <br /> 
            <span className="text-white">Meet Nature & Fire</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
            A unique outdoor resto-cafe experience blending traditional hospitality, 
            live grilling, cozy campfires, and unforgettable family moments.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              suppressHydrationWarning={true}
              className="w-full sm:w-auto px-10 py-4 bg-brand-gold text-brand-indigo font-bold rounded-full hover:bg-brand-sand transition-all duration-300 transform hover:scale-105 shadow-lg shadow-brand-gold/20"
            >
              View Menu
            </button>
            <button 
              suppressHydrationWarning={true}
              className="w-full sm:w-auto px-10 py-4 glass text-white font-bold rounded-full hover:bg-white/10 transition-all duration-300"
            >
              Explore Experiences
            </button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-brand-gold flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-widest font-bold opacity-50">Scroll</span>
        <ChevronDown size={24} />
      </motion.div>
    </section>
  );
}
