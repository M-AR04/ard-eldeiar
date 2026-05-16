"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Coffee, IceCream, Utensils, Wind, GlassWater, Apple } from "lucide-react";
import { cn } from "@/lib/utils";

const categories = [
  { id: "hot", name: "Hot Drinks", icon: Coffee },
  { id: "cold", name: "Cold Drinks", icon: GlassWater },
  { id: "juices", name: "Juices & Smoothies", icon: Apple },
  { id: "shisha", name: "Shisha Lounge", icon: Wind },
  { id: "snacks", name: "Snacks & Sweets", icon: IceCream },
  { id: "live", name: "Live Cooking", icon: Utensils },
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
    { name: "Espresso Single", price: "1.50 JD" },
    { name: "Espresso Double", price: "3.00 JD" },
  ],
  cold: [
    { name: "Ice Latte", price: "2.00 JD" },
    { name: "Ice Caramel Latte", price: "2.00 JD" },
    { name: "Ice Spanish Latte", price: "2.00 JD" },
    { name: "Mojito", price: "1.50 JD" },
    { name: "Redbull", price: "2.50 JD" },
    { name: "BoomBoom", price: "2.00 JD" },
    { name: "Cola / Seven", price: "1.00 JD" },
    { name: "Water", price: "0.50 JD" },
  ],
  juices: [
    { name: "Fresh Mango", price: "3.00 JD" },
    { name: "Lemon & Mint", price: "3.00 JD" },
    { name: "Strawberry", price: "3.00 JD" },
    { name: "Fresh Cocktail", price: "3.00 JD" },
    { name: "Banana & Milk", price: "3.00 JD" },
    { name: "Guava", price: "3.00 JD" },
    { name: "Pineapple Smoothie", price: "3.00 JD" },
    { name: "Passion Fruit", price: "3.00 JD" },
  ],
  shisha: [
    { name: "Double Apple Nakhla", price: "6.00 JD" },
    { name: "Double Apple Mazaya", price: "5.00 JD" },
    { name: "Grape & Mint", price: "5.00 JD" },
    { name: "Watermelon & Mint", price: "5.00 JD" },
    { name: "Lemon & Mint", price: "5.00 JD" },
    { name: "Candy Flavor", price: "5.00 JD" },
    { name: "Personal Coal Service", price: "2.00 JD" },
  ],
  snacks: [
    { name: "Sweet Corn Salad", price: "2.50 - 3.25 JD" },
    { name: "Popcorn", price: "1.50 JD" },
    { name: "Brownies", price: "2.50 JD" },
    { name: "Cookies", price: "1.50 JD" },
    { name: "Ice Cream", price: "1.50 JD" },
    { name: "Chips", price: "1.00 JD" },
    { name: "Bezer (Seeds)", price: "1.50 JD" },
    { name: "Noodles", price: "1.50 JD" },
  ],
  live: [
    { name: "Sajeyeh Wok (Service)", price: "6.00 JD" },
    { name: "BBQ Grill & Coal Setup", price: "6.00 JD" },
    { name: "Firewood Service", price: "Included" },
    { name: "Self Grilling Experience", price: "Free with Service" },
  ],
};

export default function Menu() {
  const [activeTab, setActiveTab] = useState("hot");

  return (
    <section id="menu" className="py-24 bg-brand-dark/50 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-brand-accent uppercase tracking-[0.3em] text-sm mb-2 block">Our Offerings</span>
          <h2 className="text-4xl md:text-6xl mb-6">Explore Our Menu</h2>
          <div className="w-32 h-1 bg-brand-accent mx-auto mb-12" />
          
          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={cn(
                  "flex items-center gap-3 px-6 py-3 rounded-full border transition-all duration-300",
                  activeTab === cat.id
                    ? "bg-brand-accent border-brand-accent text-brand-dark shadow-lg shadow-brand-accent/20"
                    : "bg-white/5 border-white/10 text-white/60 hover:border-white/30 hover:text-white"
                )}
              >
                <cat.icon size={18} />
                <span className="font-medium whitespace-nowrap">{cat.name}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Menu Grid */}
        <motion.div 
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="wait">
            {menuItems[activeTab as keyof typeof menuItems].map((item, idx) => (
              <motion.div
                key={item.name}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="glass p-6 rounded-2xl group hover:bg-brand-pale/5 transition-colors"
              >
                <div className="flex justify-between items-start gap-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-bold group-hover:text-brand-pale transition-colors mb-1">{item.name}</h3>
                    <div className="w-0 group-hover:w-full h-[1px] bg-brand-pale/30 transition-all duration-500" />
                  </div>
                  <span className="text-brand-accent font-bold whitespace-nowrap">{item.price}</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Footer Note */}
        <div className="mt-16 text-center text-white/40 text-sm">
          <p>* Prices are inclusive of tax and service charges.</p>
          <p>Demo pricing for showcase purposes only.</p>
        </div>
      </div>
    </section>
  );
}
