import React from "react";
import { Button } from "../ui/button";

interface FeaturesHeroProps {
  buttonTitle: string;
  title: string;
  description: string;
  youtubeUrl?: string;
}

const FeaturesHero = ({
  buttonTitle,
  title,
  description,
  youtubeUrl,
}: FeaturesHeroProps) => {
  return (
    <div className="py-20 mx-auto max-w-[90%] sm:max-w-[640px] md:max-w-[768px] lg:max-w-[1120px] xl:max-w-[1280px]">
      <div className="flex flex-col">
        <div className="mb-15">
          <Button className="rounded-full bg-[#D9D9D9] text-[#4C00FE] hover:bg-[#D9D9D9] hover:text-[#4C00FE]">
            {buttonTitle}
          </Button>
        </div>
        <div className="flex flex-row gap-10 mb-10">
          {/* Heading */}
          <div className="w-[490px] h-[225px] flex-shrink-0">
            <h1 className="font-bold text-4xl text-[48px]">{title}</h1>
          </div>
          {/* Description */}
          <div className="flex flex-col h-[225px] flex-grow">
            <div className="flex-grow flex items-center justify-center">
              <p className="text-lg">{description}</p>
            </div>
            <Button className="w-[120px] bg-[#4C00FE] text-white hover:bg-white hover:border hover:border-[#4C00FE] hover:text-[#4C00FE] rounded-full self-start">
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
