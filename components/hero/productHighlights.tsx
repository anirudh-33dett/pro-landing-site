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
    <li
      className="w-full list-none shadow-xl rounded-xl"
      style={{ boxShadow: "8px 8px 8px 0px rgba(142, 170, 216, 0.10)" }}
    >
      <div className="relative h-full w-full rounded-2xl border-3 border-white bg-gradient-to-l from-[#4C00FE14] to-[#8EAAD814]">
        <GlowingEffect
          spread={100}
          glow={true}
          disabled={false}
          proximity={1}
          inactiveZone={0.01}
          borderWidth={3}
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
      <div className="mx-27">
        <div className="mb-4">
          <p className="text-[16px] text-primary font-bold">USECASES</p>
        </div>
        {/* ActualTitle */}
        <div className="mb-4">
          <h1 className="text-[48px] font-medium">
            Lorem ipsum dolor sit amet consectetur. Integer augue.
          </h1>
        </div>
        {/* Description */}
        <div className="pb-10">
          <p className="text-xl max-w-full">
            Lorem ipsum dolor sit amet consectetur. Arcu fames nunc pretium
            viverra turpis praesent. Magnis donec dui eu sit viverra vestibulum
            eu. Dignissim suspendisse mattis sagittis iaculis in in facilisi
            turpis.
          </p>
        </div>
        {/* Grid */}
        <div className="mt-6 pb-5">
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <GridItem
              icon={
                <Layers className="h-12 w-12 text-primary dark:text-neutral-400 stroke-[1.5]" />
              }
              title="AutoML + MLOps Platform"
              description="A unified platform for end-to-end AI modeling and orchestration across multi-node environments, ensuring seamless automation and scalability."
            />
            <GridItem
              icon={
                <Code className="h-12 w-12 text-primary dark:text-neutral-400 stroke-[1.5]" />
              }
              title="Unified No Code GUI"
              description="Effortlessly design and deploy complex AI pipelines with a no-code, based on intuitive workflows."
            />
            <GridItem
              icon={
                <GitMerge className="h-12 w-12 text-primary  dark:text-neutral-400 stroke-[1.5]" />
              }
              title="LLM & Vision Fine-Tuning"
              description="Utilize AutoML-powered optimization to streamline model training—achieve better models in less time, and lower computational cost for enterprise-specific use cases."
            />
            <GridItem
              icon={
                <Box className="h-12 w-12 text-primary dark:text-neutral-400 stroke-[1.5]" />
              }
              title="Enterprise Scalability"
              description="Deploy seamlessly across on-premise, hybrid, and cloud environments with on-demand compute power, reducing AI development costs."
            />
            <GridItem
              icon={
                <TestTube className="h-12 w-12 text-primary dark:text-neutral-400 stroke-[1.5]" />
              }
              title="Model Validation Framework"
              description="Automate testing by segmenting datasets, comparing performance across segments, and identifying model failures with actionable insights."
            />
            <GridItem
              icon={
                <Tag className="h-12 w-12 text-primary dark:text-neutral-400 stroke-[1.5]" />
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
