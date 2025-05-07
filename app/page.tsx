import CTA from "@/components/cta";
import AdvantageHighlights from "@/components/hero/advantageHighlights";
import FeatureHighlights from "@/components/hero/featureHighlights";
import Hero from "@/components/hero/hero";
import IndustryApplicationHighlights from "@/components/hero/industryApplicationHighlights";
import KnowMore from "@/components/hero/knowMore";
import PlatformHighlights from "@/components/hero/platformHighlights";
import ProductHighlights from "@/components/hero/productHighlights";
import ROI from "@/components/hero/roi";

export default function Home() {
  return (
    <div>
      <Hero></Hero>
      <ProductHighlights></ProductHighlights>
      {/* <AdvantageHighlights></AdvantageHighlights> */}
      <ROI></ROI>
      <FeatureHighlights></FeatureHighlights>
      <PlatformHighlights></PlatformHighlights>
      <IndustryApplicationHighlights></IndustryApplicationHighlights>
      <KnowMore></KnowMore>
      <CTA></CTA>
    </div>
  );
}
