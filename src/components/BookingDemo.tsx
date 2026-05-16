"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Users, Flame, Utensils, Baby, Send } from "lucide-react";
import { cn } from "@/lib/utils";

export default function BookingDemo() {
  const [formData, setFormData] = useState({
    date: "",
    guests: "2",
    experience: "bbq",
    seating: "outdoor",
  });

  return (
    <section id="booking" className="py-24 px-6 bg-brand-indigo relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-gold/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-brand-gold font-bold tracking-[0.2em] uppercase text-sm"
          >
            Reservations
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-brand-sand font-cairo mt-4 mb-6"
          >
            Reserve Your Experience
          </motion.h2>
          <p className="text-white/50 max-w-xl mx-auto">
            Book your spot for a live grilling session or a cozy campfire gathering. 
            This is a frontend demo of our reservation system.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="glass-dark p-8 md:p-12 rounded-[40px] border border-white/10 shadow-2xl"
        >
          <div className="grid md:grid-cols-2 gap-8">
            {/* Date Picker Mock */}
            <div className="space-y-3">
              <label className="text-white/70 text-sm font-bold flex items-center gap-2">
                <Calendar size={16} className="text-brand-gold" /> Preferred Date
              </label>
              <input
                type="date"
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-brand-gold/50 transition-all"
                defaultValue="2026-05-20"
              />
            </div>

            {/* Guests Selection */}
            <div className="space-y-3">
              <label className="text-white/70 text-sm font-bold flex items-center gap-2">
                <Users size={16} className="text-brand-gold" /> Number of Guests
              </label>
              <select className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-brand-gold/50 transition-all appearance-none">
                <option className="bg-brand-indigo">2 Guests</option>
                <option className="bg-brand-indigo">4 Guests</option>
                <option className="bg-brand-indigo">6 Guests</option>
                <option className="bg-brand-indigo">8+ Guests (Group)</option>
              </select>
            </div>

            {/* Experience Selection */}
            <div className="space-y-3">
              <label className="text-white/70 text-sm font-bold flex items-center gap-2">
                <Flame size={16} className="text-brand-gold" /> Select Experience
              </label>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { id: "bbq", name: "Live BBQ", icon: Flame },
                  { id: "saj", name: "Sajeyeh", icon: Utensils },
                ].map((exp) => (
                  <button
                    key={exp.id}
                    onClick={() => setFormData({ ...formData, experience: exp.id })}
                    className={cn(
                      "flex items-center justify-center gap-2 p-4 rounded-2xl border transition-all",
                      formData.experience === exp.id
                        ? "bg-brand-gold/20 border-brand-gold text-brand-gold"
                        : "bg-white/5 border-white/10 text-white/50 hover:bg-white/10"
                    )}
                  >
                    <exp.icon size={18} />
                    <span className="font-bold">{exp.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Seating */}
            <div className="space-y-3">
              <label className="text-white/70 text-sm font-bold flex items-center gap-2">
                <Baby size={16} className="text-brand-gold" /> Seating Area
              </label>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { id: "outdoor", name: "Park Side" },
                  { id: "kids", name: "Near Kids Area" },
                ].map((seat) => (
                  <button
                    key={seat.id}
                    onClick={() => setFormData({ ...formData, seating: seat.id })}
                    className={cn(
                      "p-4 rounded-2xl border transition-all font-bold",
                      formData.seating === seat.id
                        ? "bg-brand-gold/20 border-brand-gold text-brand-gold"
                        : "bg-white/5 border-white/10 text-white/50 hover:bg-white/10"
                    )}
                  >
                    {seat.name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <button 
            suppressHydrationWarning={true}
            className="w-full mt-12 py-5 bg-brand-gold text-brand-indigo font-black rounded-2xl hover:bg-brand-sand transition-all transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-3 shadow-xl shadow-brand-gold/20"
          >
            CONFIRM DEMO RESERVATION
            <Send size={20} />
          </button>

          <p className="text-center text-white/30 text-xs mt-6 font-bold uppercase tracking-widest">
            * This is a simulated booking for demonstration purposes
          </p>
        </motion.div>
      </div>
    </section>
  );
}
