import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PainPointsSection from "@/components/PainPointsSection";
import OperatingModelSection from "@/components/sections/OperatingModelSection";
import WhyChooseSection from "@/components/sections/WhyChooseSection";
import FeaturesSection from "@/components/FeaturesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import ReplenishmentSection from "@/components/sections/ReplenishmentSection";
import GodownOperationsSection from "@/components/sections/GodownOperationsSection";
import ChainInventorySection from "@/components/sections/ChainInventorySection";
import ComparisonSection from "@/components/sections/ComparisonSection";
import DesktopDashboardSection from "@/components/sections/DesktopDashboardSection";
import TeamAccessSection from "@/components/sections/TeamAccessSection";
import WhoIsItForSection from "@/components/WhoIsItForSection";
import PricingSection from "@/components/PricingSection";
import SecurityTrustSection from "@/components/sections/SecurityTrustSection";
import StatsSection from "@/components/StatsSection";
import EarlyAccessSection from "@/components/EarlyAccessSection";
import Footer from "@/components/Footer";

// Code-split without ssr:false — these still render on the server for SEO/schema
// (FAQ text feeds the FAQPage JSON-LD; ROI copy is index-worthy),
// but their client JS is split into separate chunks instead of the main bundle.
const ROICalculatorSection = dynamic(
  () => import("@/components/sections/ROICalculatorSection")
);
const FAQSection = dynamic(() => import("@/components/sections/FAQSection"));

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <PainPointsSection />
      <OperatingModelSection />
      <WhyChooseSection />
      <FeaturesSection />
      <HowItWorksSection />
      <ReplenishmentSection />
      <GodownOperationsSection />
      <ChainInventorySection />
      <ComparisonSection />
      <DesktopDashboardSection />
      <TeamAccessSection />
      <WhoIsItForSection />
      <ROICalculatorSection />
      <PricingSection />
      <SecurityTrustSection />
      <StatsSection />
      <FAQSection />
      <EarlyAccessSection />
      <Footer />
    </main>
  );
}
