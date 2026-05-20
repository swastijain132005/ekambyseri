import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Collections from "@/components/Collection";
import InfoSection from "@/components/Infosection";
import Craftsmanship from "@/components/Craftmanship";
import BestSeller from "@/components/Bestseller";
import Spaces from "@/components/Spaces";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Collections />
      <InfoSection />
      <Craftsmanship />
      <BestSeller />
      <Spaces />
      <Testimonials />
      <Footer />
    </>
  );
}