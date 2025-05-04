import React from "react";

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

const FeaturesROI = () => {
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
      <div className="relative z-10 gap-6 flex flex-row justify-between">
        <ROICard number={"600"} label={"faster annotations"}></ROICard>
        <ROICard
          number={"10"}
          label={"higher productivity in Autoscaled Deployments"}
        ></ROICard>
        <ROICard
          number={"3"}
          label={"reduction in chances of model failure"}
        ></ROICard>
      </div>
    </div>
  );
};

export default FeaturesROI;
