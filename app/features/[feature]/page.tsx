"use client";

import CTA from "@/components/cta";
import FeatureComparison from "@/components/features/featureComparison";
import FeatureDetail from "@/components/features/featureDetail";
import FeaturesROI from "@/components/features/featuresROI";
import FeaturesHero from "@/components/features/hero";
import { FeatureContent } from "@/components/features/featureContent";
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
  const featureData = FeatureContent[feature]?.[0];
  const displayTitle = featureTitleMap[feature] || `Feature: ${feature}`;

  if (!featureData) {
    return <div>Feature not found</div>;
  }

  return (
    <div className="bg-[#F4F8FF] min-h-screen">
      <div>
        <FeaturesHero
          buttonTitle={displayTitle}
          title={featureData.title}
          description={featureData.description}
          youtubeUrl={featureData.youtubeUrl}
        />
        <FeaturesROI numbers={featureData.roiNumbers} />
        <FeatureDetail features={featureData.detailedFeatures} />
        <FeatureComparison tableContent={featureData.tableContent} />
        <CTA ctaLink={featureData.cta} />
      </div>
    </div>
  );
}
