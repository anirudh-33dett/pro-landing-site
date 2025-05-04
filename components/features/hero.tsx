import React from "react";
import { Button } from "../ui/button";

interface FeaturesHeroProps {
  title: string;
}

const FeaturesHero = ({ title }: FeaturesHeroProps) => {
  return (
    <div className="py-20">
      <div className="mx-15 flex flex-col">
        <div className="pb-15">
          <Button className="rounded-full bg-[#D9D9D9] text-[#4C00FE] hover:bg-[#D9D9D9] hover:text-[#4C00FE]">
            {title}
          </Button>
        </div>
        <div className="flex flex-row gap-25 pb-10">
          {/* Heading */}
          <div className="max-w-[290px]">
            <h1 className="font-bold text-4xl w-full">
              Lorem ipsum dolor sit amet consectetur. Integer augue.
            </h1>
          </div>
          {/* Description */}
          <div className="flex flex-col justify-between align-middle w-full">
            {/* Text */}
            <div className="h-full mt-5">
              <p>
                Leverage our Gen AI powered text prompting—converting natural
                language into accurate labels for detection and segmentation
                tasks. Combining automation with human validation, it delivers
                faster and more reliable results than manual methods. Best
                suited for common objects in general contexts.
              </p>
            </div>
            <Button className="border w-[120px] bg-[#4C00FE] text-white hover:bg-white hover:border hover:border-[#4C00FE] hover:text-[#4C00FE] rounded-full">
              Get Started
            </Button>
          </div>
        </div>
        <div className="w-[1120px] h-[505px] bg-[#D9D9D9] rounded-lg"></div>
      </div>
    </div>
  );
};

export default FeaturesHero;
