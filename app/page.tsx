import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PainPointsSection from "@/components/PainPointsSection";
import WhoIsItForSection from "@/components/WhoIsItForSection";
import AIBillReaderSection from "@/components/sections/AIBillReaderSection";
import FeaturesSection from "@/components/FeaturesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import OperatingModelSection from "@/components/sections/OperatingModelSection";
import ReplenishmentSection from "@/components/sections/ReplenishmentSection";
import GodownOperationsSection from "@/components/sections/GodownOperationsSection";
import ChainInventorySection from "@/components/sections/ChainInventorySection";
import DesktopDashboardSection from "@/components/sections/DesktopDashboardSection";
import TeamAccessSection from "@/components/sections/TeamAccessSection";
import ComparisonSection from "@/components/sections/ComparisonSection";
import WhyChooseSection from "@/components/sections/WhyChooseSection";
import PricingSection from "@/components/PricingSection";
import OffersSection from "@/components/sections/OffersSection";
import SecurityTrustSection from "@/components/sections/SecurityTrustSection";
import GetStartedSection from "@/components/GetStartedSection";
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
      <WhoIsItForSection />
      <AIBillReaderSection />
      <FeaturesSection />
      <HowItWorksSection />
      <OperatingModelSection />
      <ReplenishmentSection />
      <GodownOperationsSection />
      <ChainInventorySection />
      <DesktopDashboardSection />
      <TeamAccessSection />
      <ComparisonSection />
      <WhyChooseSection />
      <ROICalculatorSection />
      <PricingSection />
      <OffersSection />
      <SecurityTrustSection />
      <FAQSection />
      <GetStartedSection />
      <Footer />
    </main>
  );
}
