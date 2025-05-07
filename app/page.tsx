import CTA from "@/components/cta";
import AdvantageHighlights from "@/components/hero/advantageHighlights";
import FeatureHighlights from "@/components/hero/featureHighlights";
import Hero from "@/components/hero/hero";
import IndustryApplicationHighlights from "@/components/hero/industryApplicationHighlights";
import KnowMore from "@/components/hero/knowMore";
import PlatformHighlights from "@/components/hero/platformHighlights";
import ProductHighlights from "@/components/hero/productHighlights";
import ROI from "@/components/hero/roi";
import ScrollArrow from "@/components/scrollArrow";

export default function Home() {
  return (
    <div>
      <Hero />
      <ProductHighlights />
      {/* <AdvantageHighlights></AdvantageHighlights> */}
      <ROI />
      <FeatureHighlights />
      <PlatformHighlights />
      <IndustryApplicationHighlights />
      <KnowMore />
      <CTA />
      <ScrollArrow /> {/* Add the ScrollArrow component */}
    </div>
  );
}
