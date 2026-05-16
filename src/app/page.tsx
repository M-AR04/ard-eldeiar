"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import EntryPolicy from "@/components/EntryPolicy";
import Menu from "@/components/Menu";
import ExperienceSections from "@/components/ExperienceSections";
import Gallery from "@/components/Gallery";
import About from "@/components/About";
import Contact from "@/components/Contact";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="min-h-screen bg-brand-dark">
      <AnimatePresence>
        {isLoading && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-brand-dark flex flex-col items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
              className="relative w-32 h-32 mb-8"
            >
              <Image
                src="/logo.png"
                alt="Logo"
                fill
                className="object-contain animate-pulse-slow"
              />
            </motion.div>
            <div className="w-48 h-1 bg-white/10 rounded-full overflow-hidden">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "0%" }}
                transition={{ duration: 2, ease: "easeInOut" }}
                className="w-full h-full bg-brand-accent"
              />
            </div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-4 text-brand-pale text-sm uppercase tracking-[0.4em] font-arabic"
            >
              أرض الديار
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>

      <Navbar />
      <Hero />
      <EntryPolicy />
      <Menu />
      <ExperienceSections />
      <Gallery />
      <About />
      <Contact />

      {/* Floating Action Button for Reservation */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 3 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 z-40 w-16 h-16 bg-brand-accent text-white rounded-full shadow-2xl flex items-center justify-center group"
      >
        <span className="absolute right-full mr-4 bg-brand-accent text-white px-4 py-2 rounded-xl text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          Reserve Now
        </span>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
      </motion.button>
    </main>
  );
}
