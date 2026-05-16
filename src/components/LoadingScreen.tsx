"use client";

import { motion } from "framer-motion";

export default function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 2, duration: 1 }}
      onAnimationComplete={() => {
        document.body.style.overflow = "auto";
      }}
      className="fixed inset-0 z-[100] bg-brand-indigo flex flex-col items-center justify-center p-6"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-brand-sand font-cairo mb-4">أرض الديار</h1>
        <div className="w-48 h-1 bg-white/10 mx-auto rounded-full overflow-hidden relative">
          <motion.div
            initial={{ left: "-100%" }}
            animate={{ left: "100%" }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 bottom-0 w-24 bg-brand-gold shadow-[0_0_20px_rgba(234,179,8,0.5)]"
          />
        </div>
        <p className="text-brand-gold text-xs font-bold tracking-[0.5em] uppercase mt-4 animate-pulse">
          Ard El Diyar
        </p>
      </motion.div>
    </motion.div>
  );
}
