import Link from "next/link";
import { MapPin, Phone, Clock, MessageSquare } from "lucide-react";
import { FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer id="contact" className="bg-brand-indigo border-t border-white/5 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Brand Col */}
          <div className="col-span-1 lg:col-span-1">
            <h2 className="text-3xl font-bold text-brand-sand font-cairo mb-6">أرض الديار</h2>
            <p className="text-white/50 mb-8 leading-relaxed">
              Where Family Gatherings Meet Nature & Fire. Experience authentic Jordanian hospitality in the heart of nature.
            </p>
            <div className="flex gap-4">
              <a href="https://instagram.com/ardeldyar" className="w-10 h-10 rounded-full glass flex items-center justify-center text-brand-gold hover:bg-brand-gold hover:text-brand-indigo transition-all">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center text-brand-gold hover:bg-brand-gold hover:text-brand-indigo transition-all">
                <MessageSquare size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-widest">Explore</h3>
            <ul className="space-y-4">
              {["Home", "Menu", "Experiences", "Gallery", "About Us"].map((link) => (
                <li key={link}>
                  <Link href={`/${link.toLowerCase().replace(" ", "-")}`} className="text-white/40 hover:text-brand-gold transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-widest">Contact</h3>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <MapPin className="text-brand-gold shrink-0" size={20} />
                <span className="text-white/60 text-sm">
                  Anmar Abubaker Street, Jarash / Amman outskirts area, Jordan
                </span>
              </li>
              <li className="flex gap-4">
                <Phone className="text-brand-gold shrink-0" size={20} />
                <span className="text-white/60 text-sm font-bold">+962 7X XXX XXXX</span>
              </li>
              <li className="flex gap-4">
                <Clock className="text-brand-gold shrink-0" size={20} />
                <span className="text-white/60 text-sm">
                  Mon - Sun: 12:00 PM - 1:00 AM
                </span>
              </li>
            </ul>
          </div>

          {/* Booking CTA */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-widest">Reserve</h3>
            <p className="text-white/50 text-sm mb-6">Plan your unforgettable gathering with us today.</p>
            <button 
              suppressHydrationWarning={true}
              onClick={() => window.open('https://wa.me/962', '_blank')}
              className="w-full py-4 bg-brand-gold text-brand-indigo font-bold rounded-xl hover:bg-brand-sand transition-all"
            >
              Book via WhatsApp
            </button>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-bold uppercase tracking-widest text-white/30">
          <p>© 2026 ARD EL DIYAR. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-8">
            <Link href="/privacy" className="hover:text-brand-gold">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-brand-gold">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
