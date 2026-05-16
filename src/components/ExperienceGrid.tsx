"use client";

import { motion } from "framer-motion";
import { Flame, UtensilsCrossed, Wind, Heart } from "lucide-react";

const experiences = [
  {
    title: "Live BBQ Experience",
    description: "Master the grill at your own table. We provide the tools, premium coal, and a perfect atmosphere for a family grilling feast.",
    icon: Flame,
    color: "from-orange-500/20 to-red-600/20",
    image: "/bbq-experience.jpg"
  },
  {
    title: "Sajeyeh & Firewood",
    description: "Taste the tradition with our authentic Sajeyeh wok cooking over open firewood. A rustic experience that warms the soul.",
    icon: UtensilsCrossed,
    color: "from-amber-600/20 to-orange-700/20",
    image: "/sajeyeh-experience.jpg"
  },
  {
    title: "Shisha Lounge",
    description: "Relax in our premium outdoor lounge with curated flavors, ambient lighting, and the soothing sounds of nature.",
    icon: Wind,
    color: "from-blue-500/20 to-brand-indigo/20",
    image: "/shisha-experience.jpg"
  },
  {
    title: "Family Moments",
    description: "A safe, vibrant haven for families. While kids enjoy the play area, adults can soak in the natural beauty of Jordan.",
    icon: Heart,
    color: "from-emerald-500/20 to-teal-600/20",
    image: "/family-experience.jpg"
  }
];

export default function ExperienceGrid() {
  return (
    <section id="experience" className="py-24 px-6 bg-brand-dark overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-7xl font-bold text-brand-sand font-cairo mb-6"
          >
            Immersive Experiences
          </motion.h2>
          <p className="text-white/40 max-w-xl mx-auto">Discover the unique activities that make Ard El Diyar more than just a cafe.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative h-[400px] rounded-3xl overflow-hidden border border-white/10"
            >
              {/* Background Image Placeholder/Overlay */}
              <div className={cn("absolute inset-0 bg-gradient-to-br opacity-60 z-10 transition-opacity group-hover:opacity-80", exp.color)} />
              
              <div className="absolute inset-0 bg-black/40 z-0" />
              
              <div className="absolute inset-0 flex flex-col justify-end p-8 z-20">
                <div className="mb-4 w-12 h-12 rounded-xl glass flex items-center justify-center text-brand-gold group-hover:scale-110 transition-transform">
                  <exp.icon size={28} />
                </div>
                <h3 className="text-3xl font-bold text-white mb-3 font-cairo">{exp.title}</h3>
                <p className="text-white/70 max-w-md group-hover:text-white transition-colors">
                  {exp.description}
                </p>
                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-2 text-brand-gold font-bold cursor-pointer">
                  Learn More <span className="text-xl">→</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Helper for cn in case it's not imported correctly in the block
function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(" ");
}
