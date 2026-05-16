"use client";

import { motion } from "framer-motion";
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const galleryImages = [
  { src: "/gallery-1.jpg", alt: "Outdoor Seating", size: "row-span-2 col-span-1" },
  { src: "/gallery-2.jpg", alt: "Live BBQ Grill", size: "row-span-1 col-span-1" },
  { src: "/gallery-3.jpg", alt: "Family Gathering", size: "row-span-1 col-span-1" },
  { src: "/gallery-4.jpg", alt: "Sajeyeh Cooking", size: "row-span-2 col-span-2" },
  { src: "/gallery-5.jpg", alt: "Night Ambiance", size: "row-span-1 col-span-1" },
  { src: "/gallery-6.jpg", alt: "Kids Play Area", size: "row-span-1 col-span-1" },
];

export default function GallerySection() {
  return (
    <section id="gallery" className="py-24 px-6 bg-brand-indigo">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-brand-sand font-cairo mb-6"
          >
            Captured Moments
          </motion.h2>
          <p className="text-white/40 max-w-xl mx-auto">A visual journey through the atmosphere, flavors, and experiences of Ard El Diyar.</p>
        </div>

        <PhotoProvider>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={cn("relative overflow-hidden rounded-3xl border border-white/5 group cursor-pointer", image.size)}
              >
                <PhotoView src={image.src}>
                  <div className="w-full h-full relative">
                    <div className="absolute inset-0 bg-brand-indigo/20 group-hover:bg-transparent transition-colors z-10" />
                    <div className="w-full h-full bg-white/5 flex items-center justify-center text-brand-gold/30 italic text-sm">
                      {image.alt}
                    </div>
                    {/* Real Image would be here: 
                    <Image src={image.src} alt={image.alt} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                    */}
                    <div className="absolute bottom-4 left-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity">
                       <span className="text-xs font-bold text-white bg-brand-indigo/80 px-3 py-1 rounded-full">{image.alt}</span>
                    </div>
                  </div>
                </PhotoView>
              </motion.div>
            ))}
          </div>
        </PhotoProvider>
        
        <div className="mt-12 text-center">
           <button className="px-8 py-3 border border-brand-gold/30 text-brand-gold font-bold rounded-full hover:bg-brand-gold/10 transition-all">
             View Full Gallery
           </button>
        </div>
      </div>
    </section>
  );
}

function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(" ");
}
