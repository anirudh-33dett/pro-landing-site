import React from "react";
import { GlowingEffect } from "../ui/glowing-effect";
import { Layers, Code, GitMerge, Box, TestTube, Tag } from "lucide-react";

interface GridItemProps {
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
}

const GridItem = ({ icon, title, description }: GridItemProps) => {
  return (
    <li className="w-full mb-4 list-none">
      <div className="relative h-full w-full rounded-2xl border bg-gradient-to-l from-[#4C00FE14] to-[#8EAAD814]">
        <GlowingEffect
          spread={100}
          glow={true}
          disabled={false}
          proximity={1}
          inactiveZone={0.01}
          borderWidth={1}
        />
        <div className="relative flex h-full flex-col p-6">
          {/* Top section with icon */}
          <div className="w-fit rounded-lg p-2">{icon || "🔍"}</div>

          {/* Title and description - both left-aligned with consistent spacing */}
          <div className="mt-6 space-y-3">
            <h3 className="font-sans text-xl font-semibold text-black dark:text-white">
              {title || "Card Title"}
            </h3>
            <h2 className="font-sans text-sm text-black dark:text-neutral-400">
              {description || "Card description goes here"}
            </h2>
          </div>
        </div>
      </div>
    </li>
  );
};

const ProductHighlights = () => {
  return (
    <div className="bg-[#F4F8FF] px-6 md:px-10 lg:px-12 py-10 space-y-6">
      <div className="mx-15">
        <div className="pb-10">
          <p className="text-primary font-semibold">Product Highlight</p>
        </div>
        {/* ActualTitle */}
        <div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl">
            Benefits of
            <span className="gradient-text ml-4 pb-4">Qpi AI Pro</span>.
          </h1>
        </div>
        {/* Description */}
        <div className="pb-10">
          <p className="text-sm max-w-full">
            QpiAI Pro offers a unified platform to accelerate AI workflows from
            data annotation and model training to scalable deployment. It
            emphasizes no-code tools, automation, and cost efficiency, catering
            to enterprises seeking faster development cycles and reduced
            operational costs. The platform covers vision and language AI with
            features designed for collaboration and high-performance output
            across different environments (cloud, on-premise, hybrid).
          </p>
        </div>
        {/* Grid */}
        <div className="mt-6 pb-5">
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <GridItem
              icon={
                <Layers className="h-12 w-12 text-gray-700 dark:text-neutral-400" />
              }
              title="AutoML + MLOps Platform"
              description="A unified platform for end-to-end AI modeling and orchestration across multi-node environments, ensuring seamless automation and scalability."
            />
            <GridItem
              icon={
                <Code className="h-12 w-12 text-gray-700 dark:text-neutral-400" />
              }
              title="Unified No Code GUI"
              description="Effortlessly design and deploy complex AI pipelines with a no-code, based on intuitive workflows."
            />
            <GridItem
              icon={
                <GitMerge className="h-12 w-12 text-gray-700 dark:text-neutral-400" />
              }
              title="LLM & Vision Fine-Tuning"
              description="Utilize AutoML-powered optimization to streamline model training—achieve better models in less time, and lower computational cost for enterprise-specific use cases."
            />
            <GridItem
              icon={
                <Box className="h-12 w-12 text-gray-700 dark:text-neutral-400" />
              }
              title="Enterprise Scalability"
              description="Deploy seamlessly across on-premise, hybrid, and cloud environments with on-demand compute power, reducing AI development costs."
            />
            <GridItem
              icon={
                <TestTube className="h-12 w-12 text-gray-700 dark:text-neutral-400" />
              }
              title="Model Validation Framework"
              description="Automate testing by segmenting datasets, comparing performance across segments, and identifying model failures with actionable insights."
            />
            <GridItem
              icon={
                <Tag className="h-12 w-12 text-gray-700 dark:text-neutral-400" />
              }
              title="Tag & Submit"
              description="With OpAI patented Tag & Submit - tag models based on Domains & Subdomains - enable faster AI model discovery for a use case."
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductHighlights;
