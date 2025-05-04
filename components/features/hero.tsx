import React from "react";
import { Button } from "../ui/button";

interface FeaturesHeroProps {
  title: string;
  description: string;
  youtubeUrl?: string;
}

const FeaturesHero = ({ title, description, youtubeUrl }: FeaturesHeroProps) => {
  return (
    <div className="py-20 max-w-[1120px] mx-auto">
      <div className="flex flex-col">
        <div className="mb-15">
          <Button className="rounded-full bg-[#D9D9D9] text-[#4C00FE] hover:bg-[#D9D9D9] hover:text-[#4C00FE]">
            {title}
          </Button>
        </div>
        <div className="flex flex-row gap-10 mb-10">
          {/* Heading */}
          <div className="w-[290px] flex-shrink-0">
            <h1 className="font-bold text-4xl">
              {title}
            </h1>
          </div>
          {/* Description */}
          <div className="flex flex-col justify-between flex-grow">
            <div className="mt-5">
              <p className="text-lg">{description}</p>
            </div>
            <Button className="w-[120px] bg-[#4C00FE] text-white hover:bg-white hover:border hover:border-[#4C00FE] hover:text-[#4C00FE] rounded-full">
              Get Started
            </Button>
          </div>
        </div>
        {youtubeUrl ? (
          <iframe
            className="w-full aspect-video rounded-lg"
            src={youtubeUrl}
            title="Feature Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <div className="w-full aspect-video bg-[#D9D9D9] rounded-lg"></div>
        )}
      </div>
    </div>
  );
};

export default FeaturesHero;
