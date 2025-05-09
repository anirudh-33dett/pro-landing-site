import { Button } from "@/components/ui/button";
import React from "react";

const CustomSolutionCTA = () => {
  return (
    <div className="w-[1040px] h-[304px] bg-[#F4F0FF] flex flex-col items-center justify-center rounded-xl my-15 mx-auto">
      <div className="flex flex-col items-center justify-center mb-10">
        <h1 className="text-[#3500B2] text-5xl mb-3 font-bold leading-[48px]">
          Need a custom solution?
        </h1>
        <p className="text-[#34313A] text-center font-normal text-[20px] leading-[32px]">
          Our Enterprise plan offers flexible options tailored to your
          organization's specific requirements.
        </p>
        <p className="text-[#34313A] text-center font-normal text-[20px] leading-[32px]">
          Contact our sales team to discuss your needs.
        </p>
      </div>
      <Button className="text-white bg-[#4C00FE]">Talk to Sales</Button>
    </div>
  );
};

export default CustomSolutionCTA;
