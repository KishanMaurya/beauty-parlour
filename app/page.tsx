import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsStrip from "@/components/StatsStrip";
import SignatureServices from "@/components/SignatureServices";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Academy from "@/components/Academy";
import BookingMapSection from "@/components/BookingMapSection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import ClientEffects from "@/components/ClientEffects";

export default function Home() {
  return (
    <>
      <ClientEffects />
      <Navbar />
      <Hero />
      <StatsStrip />
      <SignatureServices />
      <Pricing />
      <Services />
      <Gallery />
      <Testimonials />
      <Academy />
      <BookingMapSection />
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
