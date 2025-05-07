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
    <div className={`p-4 ${className}`}>
      <div className="text-xs font-light mb-1 text-white">Upto</div>
      <div className="flex items-baseline gap-1">
        <div className="text-5xl font-bold text-white">{number}</div>
        <div className="text-xl text-white">x</div>
        <div className="flex flex-row items-baseline gap-2  whitespace-nowrap">
          <span className="text-white font-medium">{label}</span>
          {description && <span className="text-white/90">{description}</span>}
        </div>
      </div>
      {longDescription && (
        <div className="mt-1 text-white/90">{longDescription}</div>
      )}
    </div>
  );
};

export default function ROI() {
  return (
    <div
      className="w-full p-25"
      style={{
        background: "radial-gradient(circle at center, #7033FE, #C9B3FF )",
        backdropFilter: "blur(10px)",
        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
      }}
    >
      {/* <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div> */}
      <div className="mb-4 mx-11">
        <h1 className="text-[48px] font-medium text-primary">
          Transform your AI roadmap with QpiAI Pro
        </h1>
      </div>
      {/* Description */}
      <div className="pb-10 mx-11">
        <p className="text-xl max-w-full text-white">
          Accelerate innovation cycles, maximize resource efficiency, and
          future-proof your strategy by achieving upto:
        </p>
      </div>
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6 mx-11 justify-center items-center ">
        <ROICard
          number="700"
          label="faster"
          description="Annotations"
          longDescription={
            "Compared to manual tools, QpiAI Pro uses AI prompting to label images in milliseconds."
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
          number="3"
          label="reduction"
          description="in chances of model failure"
          longDescription={
            "Built-in validation, monitoring, and versioning improve reliability across stages."
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
          label="faster EDA insights"
          description="with embeddings"
          longDescription={
            "Semantic clustering auto-surfaces patterns without complex data slicing"
          }
        />
        <ROICard
          number="5"
          label="improvement in productivity"
          description="for geographically distributed teams"
          longDescription={
            "Centralized model repos and tagging simplify collaboration across time zones."
          }
        />
      </div>
    </div>
  );
}
