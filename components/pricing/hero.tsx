import React from "react";

const PricingHero = () => {
  return (
    <div
      className="w-full py-30 flex items-center justify-center"
      style={{
        background:
          "linear-gradient(107deg, rgba(76, 0, 254, 0.10) 0%, rgba(142, 170, 216, 0.30) 83.16%)",
      }}
    >
      <div className="container mx-auto text-center px-4 flex flex-col items-center">
        <div className="max-w-2xl">
          <div className="bg-white/75 rounded-xl h-[65px] w-[720px] flex items-center justify-center mb-2">
            <h1 className="text-4xl md:text-5xl font-bold">
              Simple, Transparent{" "}
              <span className="text-[#4C00FE]">Pricing</span>
            </h1>
          </div>
          <p className="text-lg md:text-xl text-black mt-4">
            Choose the plan that's right for your organization's AI journey.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PricingHero;
