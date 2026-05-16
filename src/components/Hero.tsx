"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image with Parallax */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="/hero.png"
          alt="Ard El Dyar Sunset"
          fill
          className="object-cover scale-110"
          priority
        />
        {/* Cinematic Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/40 via-transparent to-brand-dark" />
        <div className="absolute inset-0 bg-black/20" />
      </motion.div>

      {/* Floating Fireflies/Particles */}
      <div className="absolute inset-0 z-1 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-brand-pale rounded-full blur-[1px]"
            initial={{ 
              x: Math.random() * 100 + "%", 
              y: Math.random() * 100 + "%",
              opacity: Math.random() * 0.5 + 0.2
            }}
            animate={{
              y: [null, "-20px", "20px", null],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h1 className="text-5xl md:text-8xl font-arabic font-bold text-white mb-6 leading-tight drop-shadow-2xl">
            Where Family Gatherings <br />
            <span className="text-brand-pale">Meet Nature & Fire</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-white/90 mb-10 leading-relaxed font-light">
            A premium outdoor resto-cafe experience blending hospitality, live grilling, campfire ambiance, and unforgettable moments.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-brand-accent text-brand-dark font-bold rounded-full text-lg shadow-xl shadow-brand-accent/30 flex items-center gap-2"
            >
              Explore Menu
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold rounded-full text-lg hover:bg-white/20 transition-all"
            >
              View Experiences
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        style={{ opacity }}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 text-white/60 flex flex-col items-center gap-2"
      >
        <span className="text-xs uppercase tracking-[0.3em]">Scroll</span>
        <ChevronDown size={20} />
      </motion.div>
    </section>
  );
}
