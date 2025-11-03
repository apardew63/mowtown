import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import DifferenceSection from "@/components/DifferenceSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";
import LogoSlider from "@/components/LogoSlider";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <LogoSlider />
        <FeaturesSection />
        <DifferenceSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </>
  );
}
