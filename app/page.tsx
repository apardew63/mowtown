import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import DifferenceSection from "@/components/DifferenceSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";
import LogoSlider from "@/components/LogoSlider";
import GreenSection from "@/components/GreenSection";
import TestimonialsSlider from "@/components/TestimonialsSlider";
import Reward from "@/components/Reward";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <LogoSlider />
        <FeaturesSection />
        <DifferenceSection />
        <GreenSection />
        <TestimonialsSection />
        <TestimonialsSlider />
        <Reward />
      </main>
      <Footer />
    </>
  );
}
