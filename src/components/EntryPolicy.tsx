"use client";

import { motion } from "framer-motion";
import { Users, Baby, GlassWater, MapPin } from "lucide-react";

export default function EntryPolicy() {
  return (
    <section className="py-24 px-6 relative overflow-hidden bg-brand-dark">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-brand-sand font-cairo mb-4">
            Entry Policy & Packages
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Experience the best of Jordanian hospitality with our inclusive entry packages.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Adults Package */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="group relative p-8 rounded-3xl glass-dark border border-white/10 hover:border-brand-gold/30 transition-all duration-500 overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
              <Users size={120} className="text-brand-gold" />
            </div>
            
            <div className="relative z-10">
              <div className="w-16 h-16 bg-brand-gold/10 rounded-2xl flex items-center justify-center mb-6 border border-brand-gold/20">
                <Users className="text-brand-gold" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Adults Entry</h3>
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-5xl font-black text-brand-gold">3</span>
                <span className="text-xl font-bold text-brand-gold">JD</span>
              </div>
              
              <ul className="space-y-4">
                {[
                  "Comfortable Premium Seating",
                  "Complimentary Bottled Water",
                  "One Soft Drink of Your Choice",
                  "Full Access to Park Scenery"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-white/80">
                    <div className="w-1.5 h-1.5 bg-brand-gold rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Kids Package */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="group relative p-8 rounded-3xl glass-dark border border-white/10 hover:border-brand-gold/30 transition-all duration-500 overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
              <Baby size={120} className="text-brand-gold" />
            </div>

            <div className="relative z-10">
              <div className="w-16 h-16 bg-brand-gold/10 rounded-2xl flex items-center justify-center mb-6 border border-brand-gold/20">
                <Baby className="text-brand-gold" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Kids Entry</h3>
              <p className="text-sm text-white/50 mb-4">Up to 7 Years Old</p>
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-5xl font-black text-brand-gold">1.5</span>
                <span className="text-xl font-bold text-brand-gold">JD</span>
              </div>

              <ul className="space-y-4">
                {[
                  "Unlimited Kids Play Area Access",
                  "Safe & Secure Environment",
                  "Outdoor Activity Spaces",
                  "Family-Friendly Seating Access"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-white/80">
                    <div className="w-1.5 h-1.5 bg-brand-gold rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-gold/20 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-gold/20 to-transparent" />
    </section>
  );
}
