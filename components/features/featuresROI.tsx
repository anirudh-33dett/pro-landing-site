import React from "react";

interface ROICardProps {
  number: string | number;
  label: string;
  description?: string;
  className?: string;
}

interface RoiNumber {
  value: number;
  label: string;
}

interface FeaturesROIProps {
  numbers: RoiNumber[];
}

const ROICard = ({
  number,
  label,
  description,
  className = "",
}: ROICardProps) => {
  return (
    <div className={`p-6 flex-1 ${className}`}>
      <div className="text-xs font-light mb-2 text-white">Upto</div>
      <div className="flex items-baseline gap-2">
        <div className="text-6xl font-bold text-white">{number}</div>
        <div className="text-2xl text-white">x</div>
      </div>
      <div className="mt-2">
        <span className="text-white font-medium text-lg">{label}</span>
        {description && <span className="text-white/90 text-lg"> {description}</span>}
      </div>
    </div>
  );
};

const FeaturesROI = ({ numbers }: FeaturesROIProps) => {
  return (
    <div className="max-w-[1120px] mx-auto relative mb-20">
      <div
        className="w-full p-10 rounded-2xl relative overflow-hidden"
        style={{
          background: "radial-gradient(circle at center, #7033FE, #C9B3FF)",
          backdropFilter: "blur(10px)",
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
        }}
      >
        <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
        <div className="relative z-10 flex flex-row justify-between">
          {numbers.map((roi, index) => (
            <ROICard
              key={index}
              number={roi.value}
              label={roi.label}
              className={index < numbers.length - 1 ? "border-r border-white/20" : ""}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesROI;
