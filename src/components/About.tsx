"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Mountain, Sunset, Users, Heart } from "lucide-react";

const stats = [
  { icon: Mountain, label: "Tal Al-Rumman", value: "Location" },
  { icon: Sunset, label: "Golden Hour", value: "Atmosphere" },
  { icon: Users, label: "Family First", value: "Philosophy" },
  { icon: Heart, label: "Nature Bound", value: "Soul" },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-brand-dark relative overflow-hidden">
      {/* Decorative Circles */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-accent/5 rounded-full blur-[100px] -mr-64 -mt-64" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-pale/5 rounded-full blur-[100px] -ml-64 -mb-64" />

      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Text Content */}
          <div className="lg:w-1/2 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-brand-accent uppercase tracking-[0.3em] text-sm mb-2 block">Our Story</span>
              <h2 className="text-4xl md:text-6xl mb-8">A Sanctuary for Sunsets & Soul</h2>
              <p className="text-lg text-white/70 leading-relaxed mb-6">
                Located in the heart of Tal Al-Rumman, <span className="text-brand-pale font-bold">Ard El Dyar</span> is more than just a café—it's an escape. We've built a destination where the rugged beauty of Jordan's mountains meets the warmth of a family gathering.
              </p>
              <p className="text-lg text-white/70 leading-relaxed">
                Whether you're here for our live BBQ experience, a traditional Sajeyeh under the stars, or simply to watch the sunset with a cup of Karak tea, we invite you to breathe in the nature and stay for the memories.
              </p>
            </motion.div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6 pt-8">
              {stats.map((stat, idx) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10"
                >
                  <div className="w-12 h-12 rounded-xl bg-brand-accent/20 flex items-center justify-center text-brand-accent">
                    <stat.icon size={24} />
                  </div>
                  <div>
                    <div className="text-sm text-white/40 uppercase tracking-widest">{stat.value}</div>
                    <div className="text-white font-bold">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Image Grid */}
          <div className="lg:w-1/2 grid grid-cols-2 gap-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl"
            >
              <Image src="/nature.png" alt="Nature" width={400} height={500} className="w-full h-full object-cover" />
            </motion.div>
            <div className="space-y-4 pt-12">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="aspect-square rounded-3xl overflow-hidden shadow-2xl"
              >
                <Image src="/shisha.png" alt="Atmosphere" width={400} height={400} className="w-full h-full object-cover" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="aspect-square rounded-3xl overflow-hidden shadow-2xl bg-brand-accent flex items-center justify-center p-8 text-center"
              >
                <p className="text-white font-bold text-xl italic italic">"Where nature meets hospitality."</p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
