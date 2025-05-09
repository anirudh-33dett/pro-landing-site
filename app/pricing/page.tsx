import React from "react";
import PricingHero from "../../components/pricing/hero";
import CustomSolutionCTA from "../../components/pricing/cta";
import FAQ from "../../components/pricing/faq";
import CTA from "@/components/cta";
import Pricing from "@/components/pricing/pricing";

const PricingPage = () => {
  return (
    <div>
      <PricingHero></PricingHero>
      <Pricing></Pricing>
      <CustomSolutionCTA></CustomSolutionCTA>
      <FAQ></FAQ>
      <CTA></CTA>
    </div>
  );
};

export default PricingPage;
