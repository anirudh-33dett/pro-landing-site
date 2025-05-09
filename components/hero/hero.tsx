"use client";

import React from "react";
import { Button } from "../ui/button";

const Hero = () => {
  return (
    <div className="w-full py-16 bg-[#F4F8FF]">
      <div className="text-center">
        <div className="flex flex-row justify-center font-medium mb-2">
          <h1 className="text-6xl mb-2 gradient-text mr-3">Collaborate.</h1>
          <h1 className="text-6xl mb-2 gradient-text">Invent.</h1>
        </div>
        <h2 className="text-6xl mb-[42px] font-semibold">
          Seamlessly Build <span className="gradient-text">end-to-end</span> AI
          Solutions
        </h2>
        <p className="text-[#34313A] max-w-6xl mx-auto text-xl mb-[42px] mt-4">
          Harness our <span className="text-primary font-bold">no code</span> AI
          + GenAI platform to effortlessly develop, deploy, and scale robust
          enterprise-grade solutions. Annotations, Computer Vision, AutoML, LLMs
          -all in one place.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-10">
          <Button
            className="bg-[#4c00fe] hover:bg-white border hover:border hover:border-[#4c00fe] hover:text-[#4c00fe] rounded-full py-4 px-5 h-[45px] text-[16px]"
            onClick={() => (window.location.href = "/contactus")}
          >
            Contact for Enterprise Version
          </Button>
          <Button
            className="bg-transparent text-[#4c00fe] shadow-none border border-transparent rounded-full hover:text-white hover:border hover:border-[#4c00fe] hover:bg-[#4c00fe] h-[45px] text-[16px]"
            onClick={() =>
              (window.location.href = "https://app.qpiai-pro.tech/register")
            }
          >
            Start free trial
          </Button>
        </div>
        <div className="h-[560px] mx-auto md:mx-20 lg:mx-32 xl:mx-40 rounded-lg overflow-hidden">
          <video
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/hero.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};

export default Hero;
