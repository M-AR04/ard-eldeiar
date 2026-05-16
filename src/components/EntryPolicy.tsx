"use client";

import { motion } from "framer-motion";
import { User, Users, Coffee, MapPin } from "lucide-react";

const policies = [
  {
    title: "Adults Entry",
    price: "3 JD",
    icon: Users,
    includes: ["Premium Seating", "Mineral Water", "One Soft Drink of Choice"],
    color: "bg-brand-accent",
    textColor: "text-brand-dark",
  },
  {
    title: "Kids (Up to 7 Years)",
    price: "1.5 JD",
    icon: User,
    includes: ["Kids Playing Area Access", "Safe Environment", "Family Zone Seating"],
    color: "bg-brand-pale",
    textColor: "text-brand-dark",
  },
];

export default function EntryPolicy() {
  return (
    <section className="py-24 relative overflow-hidden bg-brand-dark">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl mb-4">Entry Policy & Inclusions</h2>
          <div className="w-24 h-1 bg-brand-accent mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {policies.map((policy, index) => (
            <motion.div
              key={policy.title}
              initial={{ opacity: 0, x: index === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative group"
            >
              <div className="glass-dark p-8 rounded-3xl h-full border border-white/5 group-hover:border-brand-accent/30 transition-all duration-500">
                <div className={`w-16 h-16 ${policy.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-black/20`}>
                  <policy.icon className={policy.textColor || "text-white"} size={32} />
                </div>
                
                <h3 className="text-2xl font-bold mb-2">{policy.title}</h3>
                <div className="text-4xl font-bold text-brand-accent mb-6">
                  {policy.price} <span className="text-sm text-white/40 font-normal">/ Person</span>
                </div>
                
                <div className="space-y-4">
                  <p className="text-sm uppercase tracking-widest text-white/60 mb-2">Includes:</p>
                  {policy.includes.map((item) => (
                    <div key={item} className="flex items-center gap-3 text-white/80">
                      <div className="w-1.5 h-1.5 bg-brand-accent rounded-full" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Decorative Element */}
                <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <policy.icon size={120} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
