"use client";

interface ROICardProps {
  number: string;
  label: string;
  description?: string;
  className?: string;
}

const ROICard = ({
  number,
  label,
  description,
  className = "",
}: ROICardProps) => {
  return (
    <div className={`p-4 ${className}`}>
      <div className="text-xs font-light mb-1 text-white">Upto</div>
      <div className="flex items-baseline gap-1">
        <div className="text-5xl font-bold text-white">{number}</div>
        <div className="text-xl text-white">x</div>
      </div>
      <div className="mt-1">
        <span className="text-white font-medium">{label}</span>
        {description && <span className="text-white/90"> {description}</span>}
      </div>
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
      <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        <ROICard number="600" label="faster" description="Annotations" />
        <ROICard
          number="10"
          label="higher productivity"
          description="with Autoscaled Deployments"
        />
        <ROICard
          number="3"
          label="reduction"
          description="in chances of model failure"
        />
        <ROICard
          number="50"
          label="reduction"
          description="in Computational Costs"
        />
        <ROICard
          number="3"
          label="faster EDA insights"
          description="with embeddings"
        />
        <ROICard
          number="5"
          label="improvement in productivity"
          description="for geographically distributed teams"
        />
      </div>
    </div>
  );
}
