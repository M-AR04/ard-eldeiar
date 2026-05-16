"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Coffee, Cloud, Utensils, Zap, IceCream, Apple } from "lucide-react";
import { cn } from "@/lib/utils";

const categories = [
  { id: "hot", name: "Hot Drinks", icon: Coffee },
  { id: "cold", name: "Cold Drinks", icon: Zap },
  { id: "juices", name: "Juices & Smoothies", icon: Apple },
  { id: "shisha", name: "Shisha Lounge", icon: Cloud },
  { id: "snacks", name: "Snacks & Sweets", icon: IceCream },
  { id: "services", name: "Live Services", icon: Utensils },
];

const menuItems = {
  hot: [
    { name: "Turkish Coffee", price: "1.00 JD" },
    { name: "Tea (Green/Red)", price: "1.00 JD" },
    { name: "Karak Tea", price: "1.00 JD" },
    { name: "Hot Chocolate", price: "1.00 JD" },
    { name: "Herbs", price: "1.00 JD" },
    { name: "Cappuccino", price: "1.00 JD" },
    { name: "Caffe Latte", price: "1.50 JD" },
    { name: "Single Espresso", price: "1.50 JD" },
    { name: "Double Espresso", price: "3.00 JD" },
  ],
  cold: [
    { name: "Cola / Seven", price: "1.00 JD" },
    { name: "Water", price: "0.50 JD" },
    { name: "Ice Latte", price: "2.00 JD" },
    { name: "Ice Caramel Latte", price: "2.00 JD" },
    { name: "Ice Spanish Latte", price: "2.00 JD" },
    { name: "Ice Tea", price: "2.00 JD" },
    { name: "Mojitos", price: "1.50 JD" },
    { name: "Redbull", price: "2.50 JD" },
    { name: "BoomBoom", price: "2.00 JD" },
  ],
  juices: [
    { name: "Fresh Cocktail", price: "3.00 JD" },
    { name: "Mango / Guava", price: "3.00 JD" },
    { name: "Banana & Milk", price: "3.00 JD" },
    { name: "Lemon & Mint", price: "3.00 JD" },
    { name: "Strawberry", price: "3.00 JD" },
    { name: "Passion Fruit Smoothie", price: "3.00 JD" },
    { name: "Passion Mango Smoothie", price: "3.00 JD" },
    { name: "Pineapple Smoothie", price: "3.00 JD" },
  ],
  shisha: [
    { name: "Double Apple Nakhla", price: "6.00 JD" },
    { name: "Double Apple Mazaya", price: "5.00 JD" },
    { name: "Watermelon & Mint", price: "5.00 JD" },
    { name: "Lemon & Mint", price: "5.00 JD" },
    { name: "Cinnamon & Gum", price: "5.00 JD" },
    { name: "Grape & Mint", price: "5.00 JD" },
    { name: "Candy Flavor", price: "5.00 JD" },
  ],
  snacks: [
    { name: "Sweet Corn Salad", price: "2.50 JD" },
    { name: "Brownies", price: "2.50 JD" },
    { name: "Cookies", price: "1.50 JD" },
    { name: "Ice Cream", price: "1.50 JD" },
    { name: "Noodles", price: "1.50 JD" },
    { name: "Popcorn / Bezer", price: "1.50 JD" },
    { name: "Chips", price: "1.00 JD" },
  ],
  services: [
    { name: "Sajeyeh Wok / Manqal", price: "6.00 JD" },
    { name: "Live BBQ Tools & Coal", price: "6.00 JD" },
    { name: "Personal Shisha Service", price: "2.00 JD" },
  ]
};

export default function MenuSection() {
  const [activeTab, setActiveTab] = useState("hot");

  return (
    <section id="menu" className="py-24 px-6 bg-brand-indigo">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold text-brand-sand font-cairo mb-4">
              Our Premium Menu
            </h2>
            <p className="text-white/50">Handcrafted drinks and authentic live cooking experiences.</p>
          </motion.div>

          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={cn(
                  "flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold transition-all duration-300",
                  activeTab === cat.id
                    ? "bg-brand-gold text-brand-indigo shadow-lg shadow-brand-gold/20"
                    : "bg-white/5 text-white/60 hover:bg-white/10"
                )}
              >
                <cat.icon size={16} />
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="wait">
            {menuItems[activeTab as keyof typeof menuItems].map((item, index) => (
              <motion.div
                key={activeTab + item.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ delay: index * 0.05 }}
                className="group p-6 rounded-2xl glass-dark border border-white/5 hover:border-brand-gold/20 transition-all"
              >
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-lg font-bold text-white group-hover:text-brand-gold transition-colors">
                    {item.name}
                  </h4>
                  <span className="text-brand-gold font-black">{item.price}</span>
                </div>
                <div className="w-full h-px bg-white/5 group-hover:bg-brand-gold/20 transition-colors" />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
