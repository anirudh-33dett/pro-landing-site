"use client";

interface ROICardProps {
  number: string;
  label: string;
  description?: string;
  longDescription: string;
  className?: string;
}

const ROICard = ({
  number,
  label,
  description,
  longDescription,
  className = "",
}: ROICardProps) => {
  return (
    <div
      className={`p-6 h-[214px] flex flex-col justify-start rounded-lg w-full shadow-lg ${className}`}
      style={{
        background:
          "linear-gradient(137deg, rgba(255, 255, 255, 0.90) 1.86%, rgba(255, 255, 255, 0.70) 97.78%)",
        border: "2px solid white",
      }}
    >
      <div className="text-5xl font-bold text-[#4c00fe]">
        {number}
        <span className="text-3xl">x</span>
      </div>
      <div className="flex text-xl text-black font-medium gap-x-2 mt-2">
        <span>{label}</span>
        {description && <span>{description}</span>}
      </div>
      {longDescription && (
        <div className="mt-3 text-black text-sm">{longDescription}</div>
      )}
    </div>
  );
};

export default function ROI() {
  return (
    <div className="mb-10">
      <div
        className="w-full py-16 px-8 md:px-16"
        style={{
          background: "radial-gradient(circle at center, #7033FEB3, #D0BEFF99)",
          backdropFilter: "blur(10px)",
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
        }}
      >
        <div className="mx-25">
          {/* Title */}
          <div className="mb-4">
            <h1 className="text-[48px] font-medium text-[#4c00fe]">
              Transform your AI roadmap with QpiAI Pro
            </h1>
          </div>

          {/* Description */}
          <div className="pb-10">
            <p className="text-xl text-white">
              Accelerate innovation cycles, maximize resource efficiency, and
              future-proof your strategy by achieving upto:
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <ROICard
              number="700"
              label="faster"
              description="Annotations"
              longDescription={
                "Compared to manual tools, QpiAI Pro uses AI prompting to label images in milliseconds."
              }
            />
            <ROICard
              number="3"
              label="faster EDA insights"
              description="with embeddings"
              longDescription={
                "Semantic clustering auto-surfaces patterns without complex data slicing"
              }
            />
            <ROICard
              number="50"
              label="reduction"
              description="in Computational Costs"
              longDescription={
                "AutoML-optimized pipelines/GPU usage and also eliminates per-token fine-tuning costs"
              }
            />
            <ROICard
              number="3"
              label="reduction"
              description="in chances of model failure"
              longDescription={
                "Built-in validation, monitoring, and versioning improve reliability across stages."
              }
            />
            <ROICard
              number="10"
              label="higher productivity"
              description="with Autoscaled Deployments"
              longDescription={
                "Few-clicks scalable inference removes DevOps bottlenecks and accelerates delivery."
              }
            />
            <ROICard
              number="5"
              label="productivity boost"
              description="for remote teams"
              longDescription={
                "Centralized model repos and tagging simplify collaboration across time zones."
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}
