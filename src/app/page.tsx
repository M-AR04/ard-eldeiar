import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import EntryPolicy from "@/components/EntryPolicy";
import ExperienceGrid from "@/components/ExperienceGrid";
import MenuSection from "@/components/MenuSection";
import AboutSection from "@/components/AboutSection";
import GallerySection from "@/components/GallerySection";
import BookingDemo from "@/components/BookingDemo";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen";

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <main className="min-h-screen bg-brand-indigo selection:bg-brand-gold selection:text-brand-indigo">
        <Navbar />
        <Hero />
        <EntryPolicy />
        <AboutSection />
        <ExperienceGrid />
        <MenuSection />
        <GallerySection />
        <BookingDemo />
        <Footer />
      </main>
    </>
  );
}
