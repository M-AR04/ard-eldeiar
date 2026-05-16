"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Instagram, Facebook, Phone } from "lucide-react";
// If the above fails, Turbopack might be having issues with the main export.
// I'll try to use the icons directly if needed.
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Menu", href: "#menu" },
  { name: "Experiences", href: "#experiences" },
  { name: "Family & Kids", href: "#family" },
  { name: "Gallery", href: "#gallery" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled ? "bg-brand-dark/80 backdrop-blur-md py-3 shadow-lg" : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-12 h-12 overflow-hidden rounded-full border-2 border-brand-pale group-hover:scale-110 transition-transform duration-300">
            <Image
              src="/logo.png"
              alt="Ard El Dyar Logo"
              fill
              className="object-cover"
            />
          </div>
          <span className="text-xl font-arabic font-bold text-white tracking-wider group-hover:text-brand-pale transition-colors">
            أرض الديار
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-white/80 hover:text-brand-pale transition-colors uppercase tracking-widest"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="#reserve"
            className="px-6 py-2 bg-brand-accent text-brand-dark font-bold rounded-full hover:bg-brand-accent/80 transition-all transform hover:scale-105 shadow-lg shadow-brand-accent/20"
          >
            RESERVE
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-brand-dark border-t border-white/10 p-6 md:hidden flex flex-col gap-6 items-center shadow-2xl"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-medium text-white/80 hover:text-brand-pale transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="#reserve"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center px-6 py-3 bg-brand-accent text-brand-dark font-bold rounded-full hover:bg-brand-accent/80 transition-all"
            >
              RESERVE NOW
            </Link>
            <div className="flex gap-6 mt-4">
              <Instagram className="text-white/60 hover:text-brand-accent cursor-pointer" />
              <Facebook className="text-white/60 hover:text-brand-accent cursor-pointer" />
              <Phone className="text-white/60 hover:text-brand-accent cursor-pointer" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
