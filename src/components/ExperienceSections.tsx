"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Flame, UtensilsCrossed, Wind, Sunset } from "lucide-react";

const experiences = [
  {
    id: "bbq",
    title: "Live BBQ Experience",
    description: "Take control of the grill. We provide the tools, the charcoal, and the perfect mountain view. You bring the flavor.",
    features: ["Self-grilling setups", "Premium charcoal service", "Professional BBQ tools", "Mountain breeze ambiance"],
    icon: UtensilsCrossed,
    image: "/bbq.png",
    reverse: false,
  },
  {
    id: "shisha",
    title: "Sunset Shisha Lounge",
    description: "Relax in our outdoor lounge as the sun dips behind the Jerash mountains. Premium flavors and a cozy fire-lit atmosphere.",
    features: ["Premium shisha blends", "Warm fire pit zones", "Sunset view terrace", "Plush outdoor cushions"],
    icon: Wind,
    image: "/shisha.png",
    reverse: true,
  },
  {
    id: "sajeyeh",
    title: "Sajeyeh & Firewood",
    description: "Experience traditional Jordanian outdoor cooking. Our firewood woks (Sajeyeh) offer a rustic and authentic flavor profile.",
    features: ["Traditional wok cooking", "Authentic firewood heat", "Live cooking shows", "Rustic farm ambiance"],
    icon: Flame,
    image: "/hero.png", // Reusing hero for now or using a variation
    reverse: false,
  },
];

export default function ExperienceSections() {
  return (
    <section id="experiences" className="py-24 bg-brand-dark">
      <div className="container mx-auto px-6 space-y-32">
        {experiences.map((exp, index) => (
          <div 
            key={exp.id}
            className={`flex flex-col ${exp.reverse ? "md:flex-row-reverse" : "md:flex-row"} items-center gap-12 md:gap-24`}
          >
            {/* Text Side */}
            <motion.div 
              initial={{ opacity: 0, x: exp.reverse ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex-1 space-y-6"
            >
              <div className="w-16 h-16 bg-brand-accent/20 rounded-2xl flex items-center justify-center text-brand-accent">
                <exp.icon size={32} />
              </div>
              <h2 className="text-4xl md:text-6xl font-bold">{exp.title}</h2>
              <p className="text-lg text-white/60 leading-relaxed">
                {exp.description}
              </p>
              <ul className="space-y-4">
                {exp.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-white/80">
                    <div className="w-2 h-2 bg-brand-accent rounded-full" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <motion.button
                whileHover={{ x: 10 }}
                className="flex items-center gap-3 text-brand-accent font-bold group"
              >
                Learn More About This Experience
                <div className="w-10 h-[2px] bg-brand-accent group-hover:w-16 transition-all" />
              </motion.button>
            </motion.div>

            {/* Image Side */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, rotate: exp.reverse ? -2 : 2 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              className="flex-1 relative aspect-[4/3] w-full rounded-[2rem] overflow-hidden group shadow-2xl"
            >
              <Image
                src={exp.image}
                alt={exp.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-brand-accent/10 group-hover:bg-transparent transition-colors" />
              {/* Decorative Frame */}
              <div className="absolute inset-4 border border-white/20 rounded-[1.5rem] pointer-events-none" />
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}
