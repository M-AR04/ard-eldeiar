"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Instagram, Facebook, Send, MessageCircle } from "lucide-react";

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("This is a demo! Your message has been 'sent' in our mock system.");
  };

  return (
    <footer id="contact" className="bg-brand-dark pt-24 pb-12 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 mb-24">
          {/* Contact Info */}
          <div className="space-y-12">
            <div>
              <h2 className="text-4xl md:text-6xl mb-6">Let's Connect</h2>
              <p className="text-lg text-white/60">
                Plan your next family gathering or sunset escape with us. We're open every day to welcome you.
              </p>
            </div>

            <div className="grid gap-8">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-brand-accent group-hover:bg-brand-accent group-hover:text-white transition-all duration-300">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-sm text-white/40 uppercase tracking-widest">Call Us</p>
                  <p className="text-xl font-bold">+962 7 9813 0798</p>
                  <p className="text-xl font-bold">+962 7 9878 8981</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-brand-accent group-hover:bg-brand-accent group-hover:text-white transition-all duration-300">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-sm text-white/40 uppercase tracking-widest">Visit Us</p>
                  <p className="text-xl font-bold">Tal Al-Rumman, Jerash, Jordan</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-brand-accent group-hover:bg-brand-accent group-hover:text-white transition-all duration-300">
                  <MessageCircle size={24} />
                </div>
                <div>
                  <p className="text-sm text-white/40 uppercase tracking-widest">WhatsApp</p>
                  <p className="text-xl font-bold">962798130798</p>
                </div>
              </div>
            </div>

            <div className="flex gap-6">
              <motion.a 
                whileHover={{ y: -5 }}
                href="https://instagram.com/ardeldyar" 
                target="_blank"
                className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-brand-accent hover:border-brand-accent transition-all"
              >
                <Instagram size={20} />
              </motion.a>
              <motion.a 
                whileHover={{ y: -5 }}
                href="#" 
                className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-brand-accent hover:border-brand-accent transition-all"
              >
                <Facebook size={20} />
              </motion.a>
            </div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass p-10 rounded-[2.5rem] border border-white/5"
          >
            <h3 className="text-2xl font-bold mb-8">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-white/40 px-2">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-brand-accent transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-white/40 px-2">Phone Number</label>
                  <input 
                    type="tel" 
                    placeholder="+962 00 000 0000"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-brand-accent transition-all"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-white/40 px-2">Inquiry Type</label>
                <select className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-brand-accent transition-all appearance-none text-white/60">
                  <option>Table Reservation</option>
                  <option>BBQ Service</option>
                  <option>Event Inquiry</option>
                  <option>General Question</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-white/40 px-2">Message</label>
                <textarea 
                  rows={4} 
                  placeholder="Tell us about your visit..."
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-brand-accent transition-all resize-none"
                />
              </div>
              <button 
                type="submit"
                className="w-full py-4 bg-brand-accent text-brand-dark font-bold rounded-2xl shadow-xl shadow-brand-accent/20 hover:bg-brand-accent/80 transition-all flex items-center justify-center gap-3"
              >
                Send Message <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>

        {/* Map Placeholder */}
        <div className="w-full h-[400px] bg-white/5 rounded-[2.5rem] border border-white/5 mb-16 overflow-hidden relative grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-1000">
          <div className="absolute inset-0 flex items-center justify-center">
             <div className="text-center">
               <MapPin className="text-brand-accent mx-auto mb-4" size={48} />
               <p className="text-white font-bold text-xl uppercase tracking-widest">Map View (Demo)</p>
               <p className="text-white/40">Tal Al-Rumman, Jerash, Jordan</p>
             </div>
          </div>
          {/* Simulated Map UI */}
          <div className="absolute inset-0 bg-brand-dark/20 pointer-events-none" />
        </div>

        {/* Copyright */}
        <div className="flex flex-col md:row items-center justify-between gap-6 border-t border-white/5 pt-12 text-white/20 text-sm">
          <div className="flex items-center gap-4">
            <span className="font-arabic font-bold text-white/40">أرض الديار</span>
            <span>&copy; 2026 Ard El Dyar. All rights reserved.</span>
          </div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
          <p>Handcrafted for luxury outdoor experiences.</p>
        </div>
      </div>
    </footer>
  );
}
