import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PainPointsSection from "@/components/PainPointsSection";
import WhyChooseSection from "@/components/sections/WhyChooseSection";
import FeaturesSection from "@/components/FeaturesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import ComparisonSection from "@/components/sections/ComparisonSection";
import DesktopDashboardSection from "@/components/sections/DesktopDashboardSection";
import WhoIsItForSection from "@/components/WhoIsItForSection";
import PricingSection from "@/components/PricingSection";
import SecurityTrustSection from "@/components/sections/SecurityTrustSection";
import StatsSection from "@/components/StatsSection";
import EarlyAccessSection from "@/components/EarlyAccessSection";
import Footer from "@/components/Footer";

// Code-split without ssr:false — these still render on the server for SEO/schema
// (FAQ text feeds the FAQPage JSON-LD; testimonials/ROI copy is index-worthy),
// but their client JS is split into separate chunks instead of the main bundle.
const ROICalculatorSection = dynamic(
  () => import("@/components/sections/ROICalculatorSection")
);
const TestimonialsSection = dynamic(
  () => import("@/components/sections/TestimonialsSection")
);
const FAQSection = dynamic(() => import("@/components/sections/FAQSection"));

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <PainPointsSection />
      <WhyChooseSection />
      <FeaturesSection />
      <HowItWorksSection />
      <ComparisonSection />
      <DesktopDashboardSection />
      <WhoIsItForSection />
      <ROICalculatorSection />
      <PricingSection />
      <TestimonialsSection />
      <SecurityTrustSection />
      <StatsSection />
      <FAQSection />
      <EarlyAccessSection />
      <Footer />
    </main>
  );
}
