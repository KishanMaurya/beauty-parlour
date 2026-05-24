import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsStrip from "@/components/StatsStrip";
import SignatureServices from "@/components/SignatureServices";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Academy from "@/components/Academy";
import Booking from "@/components/Booking";
import MapSection from "@/components/MapSection";
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
      <Booking />
      <MapSection />
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
