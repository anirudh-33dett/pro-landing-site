"use client";

import CTA from "@/components/cta";
import FeatureComparison from "@/components/features/featureComparison";
import FeatureDetail from "@/components/features/featureDetail";
import FeaturesROI from "@/components/features/featuresROI";
import FeaturesHero from "@/components/features/hero";
import React from "react";

const featureTitleMap: { [key: string]: string } = {
  "automated-annotation": "Automated Annotations",
  fewshot: "Few Shot Visual Prompting",
  "visual-model-deployment": "Visual Model Deployment",
  "text-annotations": "Text Annotations",
  "llm-finetuning": "LLM Fine Tuning",
  "llm-deployment": "LLM Deployment",
};

interface FeaturePageProps {
  params: Promise<{ feature: string }>;
}

export default function FeaturePage({ params }: FeaturePageProps) {
  const { feature } = React.use(params);
  const displayTitle = featureTitleMap[feature] || `Feature: ${feature}`;

  return (
    <div className="bg-[#F4F8FF]">
      <FeaturesHero title={displayTitle} />
      <FeaturesROI></FeaturesROI>
      <FeatureDetail></FeatureDetail>
      <FeatureComparison></FeatureComparison>
      <CTA></CTA>
    </div>
  );
}
