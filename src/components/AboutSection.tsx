"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 px-6 bg-brand-dark overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 rounded-[40px] overflow-hidden border border-white/10 shadow-2xl">
              <div className="aspect-[4/5] bg-brand-indigo/50 flex items-center justify-center">
                 {/* Visual Placeholder for brand story image */}
                 <div className="text-brand-gold text-center p-10">
                   <h4 className="text-2xl font-cairo font-bold mb-4">Our Heritage</h4>
                   <p className="text-sm opacity-60">Traditional Jordanian hospitality meets modern nature-inspired design.</p>
                 </div>
              </div>
            </div>
            
            {/* Decorative Floating Element */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-10 -right-10 w-48 h-48 glass rounded-3xl p-6 flex flex-col justify-end border border-brand-gold/20 shadow-xl"
            >
              <span className="text-4xl font-black text-brand-gold mb-2">100%</span>
              <span className="text-xs font-bold text-white/60 uppercase tracking-widest">Natural Ambiance</span>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-brand-gold font-bold tracking-[0.2em] uppercase text-sm">The Story of Ard El Diyar</span>
            <h2 className="text-4xl md:text-6xl font-bold text-brand-sand font-cairo mt-4 mb-8 leading-tight">
              Where Every Fire Tells <br /> <span className="text-white">A Traditional Story</span>
            </h2>
            <div className="space-y-6 text-white/70 leading-relaxed text-lg">
              <p>
                Founded on the belief that the best moments are shared under the open sky, 
                Ard El Diyar (أرض الديار) was born to bring families back to nature. 
                Our name reflects the "Ground of the Home" — a place where every guest 
                is treated like family.
              </p>
              <p>
                Whether it's the sizzle of a live BBQ, the warmth of a traditional Sajeyeh, 
                or the laughter of children playing in a safe environment, we have crafted 
                every detail to ensure your visit is more than just a meal; it's a memory.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 mt-12">
              <div>
                <h4 className="text-3xl font-black text-brand-gold mb-1">Jordan</h4>
                <p className="text-xs text-white/40 uppercase tracking-widest font-bold">Authentic Roots</p>
              </div>
              <div>
                <h4 className="text-3xl font-black text-brand-gold mb-1">Family</h4>
                <p className="text-xs text-white/40 uppercase tracking-widest font-bold">First Priority</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
