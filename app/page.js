import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import CTASection from "@/components/CTASection";
import EventsSection from "@/components/EventSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProgramsSection from "@/components/ProgramSection";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection/>
        <AboutSection/>
        <ProgramsSection/>
        <EventsSection/>
        <CTASection/>
        <ContactSection/>
      </main>
      <Footer/>
    </div>
  );
}
