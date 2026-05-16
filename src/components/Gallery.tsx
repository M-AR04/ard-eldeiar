"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, Maximize2 } from "lucide-react";

const images = [
  { id: 1, src: "/hero.png", title: "Sunset Mountain View", category: "Nature" },
  { id: 2, src: "/bbq.png", title: "Live BBQ Experience", category: "Dining" },
  { id: 3, src: "/shisha.png", title: "Shisha Lounge", category: "Lounge" },
  { id: 4, src: "/kids.png", title: "Kids Play Area", category: "Family" },
  { id: 5, src: "/nature.png", title: "Lush Greenery", category: "Nature" },
  { id: 6, src: "/hero.png", title: "Outdoor Seating", category: "Lounge" },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<null | typeof images[0]>(null);

  return (
    <section id="gallery" className="py-24 bg-brand-dark/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-brand-accent uppercase tracking-[0.3em] text-sm mb-2 block">Visual Story</span>
          <h2 className="text-4xl md:text-6xl mb-6">Cinematic Gallery</h2>
          <div className="w-32 h-1 bg-brand-accent mx-auto mb-12" />
        </motion.div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((image, idx) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative group cursor-pointer overflow-hidden rounded-3xl"
              onClick={() => setSelectedImage(image)}
            >
              <Image
                src={image.src}
                alt={image.title}
                width={800}
                height={600}
                className="w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-brand-dark/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-6 text-center">
                <Maximize2 className="text-brand-pale mb-4" size={32} />
                <h3 className="text-xl font-bold text-white">{image.title}</h3>
                <span className="text-sm text-brand-pale/70 uppercase tracking-widest">{image.category}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Simulation */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-12"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-8 right-8 text-white/60 hover:text-white transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X size={40} />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl w-full aspect-video rounded-3xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage.src}
                alt={selectedImage.title}
                fill
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
                <h3 className="text-2xl font-bold text-white">{selectedImage.title}</h3>
                <p className="text-brand-pale">{selectedImage.category}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
