import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ScanDemoSection from "@/components/ScanDemoSection";
import PainPointsSection from "@/components/PainPointsSection";
import FeaturesSection from "@/components/FeaturesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import WhoIsItForSection from "@/components/WhoIsItForSection";
import PricingSection from "@/components/PricingSection";
import StatsSection from "@/components/StatsSection";
import EarlyAccessSection from "@/components/EarlyAccessSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <PainPointsSection />
      <FeaturesSection />
      <ScanDemoSection />
      <HowItWorksSection />
      <WhoIsItForSection />
      <PricingSection />
      <StatsSection />
      <EarlyAccessSection />
      <Footer />
    </main>
  );
}
