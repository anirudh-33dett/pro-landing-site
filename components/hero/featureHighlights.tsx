"use client";

import React from "react";
import { Tabs, TabsTrigger, TabsContent, TabsList } from "../ui/tabs";
import { Button } from "../ui/button";

interface FeatureHighlightContentProps {
  title: string;
  description: string;
  point1: string[];
  point2: string[];
  point3: string[];
  point4: string[];
  imageUrl: string;
}

// Convert this to a constant array instead of a component that returns nothing
const featureHighlightData = [
  {
    title: "Automated Annotations",
    description:
      "Use class descriptions as prompts for generating Automated Annotations across detection and segmentation tasks.",
    point1: [
      "• 700X Faster: ",
      "• Auto-generate annotatoins using simple class descriptions",
    ],
    point2: ["• Zero Expertise Needed: ", "Natural language prompts"],
    point3: ["• Scalable: ", "Ideal for massive datasets"],
    point4: [
      "• Consistent & Cost-Effective: ",
      "Uniform annotations with reduced human bias.",
    ],
    imageUrl: "/features/automatedannotation.png",
  },
  {
    title: "Few Shot Visual Prompting",
    description:
      "Leverage our proprietary Gen AI-driven methods to annotate images at the cluster level, utilizing image embeddings to enhance the accuracy of specialized dataset annotations. ",
    point1: [
      "• 300X Faster: ",
      "Drastically reduce manual labeling time even for niche datasets.",
    ],
    point2: [
      "• Cluster Based Annotation: ",
      "Annotate a few images, apply across entire clusters.",
    ],
    point3: [
      "• High Accuracy: ",
      "Fine-tune edge cases with optional manual review",
    ],
    point4: [
      "• Best for Complex Datasets: ",
      "Adaptable to medical, automotive, and geospatial data.",
    ],
    imageUrl: "/features/FewShot.png",
  },
  {
    title: "Vision Model Deployment",
    description:
      "QpiAI Pro offers a unified no-code pipeline to develop and deploy vision models—from fine-tuning pre-trained models to real-time, scalable inference with live monitoring and one-click integration",
    point1: [
      "• Maximize Value with 20x RoI: ",
      "Achieve up to 20x better return on every dollar spent through optimized credit consumption during model training.",
    ],
    point2: [
      "• Unified Vision AI Workflow: ",
      " Effortlessly Build, train, and deploy detection and segmentation models.",
    ],
    point3: [
      "• Scalable Training & Inference: ",
      "Support multi-node training and real-time, low-latency deployment across CPU/GPU environments with dynamic scaling.",
    ],
    point4: [
      "• Seamless Integration & Monitoring: ",
      "Instantly deploy with auto-generated endpoints and monitor live performance metrics through built-in dashboards.",
    ],
    imageUrl: "/features/visionmodel.webp",
  },
  {
    title: "Text Annotations",
    description:
      "Built for teams, researchers, and organizations focused on developing domain-aligned, high-quality LLMs, QpiAI Pro ensures clarity, consistency, and collaboration at every stage.",
    point1: [
      "• Manual Precision:: ",
      "Build high-quality text datasets from scratch or uploads.",
    ],
    point2: [
      "• Tailored for LLMs: ",
      "Perfect for instruction tuning and ranking tasks.",
    ],
    point3: [
      "• Collaboration-Ready: ",
      "Multi-user workflows with version control and QA.",
    ],
    point4: ["• No-Code Simplicity: ", "Focus on content, not tooling."],
    imageUrl: "/features/textannotation.jpg",
  },
  {
    title: "LLM Fine Tuning",
    description:
      "QpiAI Pro brings no-code LLM fine-tuning to your fingertips—adapt models for specific business needs through easy instruction (SFT) and preference tuning (DPO) with minimal setup or technical expertise.",
    point1: [
      "• Affordable at Scale: ",
      " Flat per-job pricing up to 95% cheaper than leading platforms.",
    ],
    point2: [
      "• Zero DevOps: ",
      "Tune LLMs using no-code SFT and DPO workflows.",
    ],
    point3: [
      "• AutoML Optimized: ",
      "Smart hyperparameters and resource scheduling.",
    ],
    point4: [
      "• Live Metrics: ",
      "Visualize loss curves, training logs, and evaluations",
    ],
    imageUrl: "/features/finetuning.webp",
  },
  {
    title: "LLM Model Deployment",
    description:
      "Deploy LLMs at scale with QpiAI Pro—flexible CPU/GPU support, built in Quantization, auto-scaling, and real-time monitoring for instant, production-grade inference anywhere.",
    point1: [
      "• Flexible Infrastructure Choices: ",
      "Deploy seamlessly on CPUs or GPUs, optimizing for both cost-efficiency and low-latency performance.",
    ],
    point2: ["• Zero Expertise Needed: ", "Natural language prompts"],
    point3: ["• Scalable: ", "Ideal for massive datasets"],
    point4: [
      "• Consistent & Cost-Effective: ",
      "Uniform annotations with reduced human bias.",
    ],
    imageUrl: "/features/llmdeploy.png",
  },
];

const FeatureHighlightContent = ({
  title,
  description,
  point1,
  point2,
  point3,
  point4,
  imageUrl,
}: any) => {
  return (
    <div className="w-full h-auto p-0 font-sans">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Content div - adjust height to match image */}
        <div className="w-full h-auto lg:h-[452px] bg-transparent p-0 rounded-lg flex flex-col overflow-hidden">
          <div className="mb-6">
            <h1 className="text-3xl font-bold mb-3 text-gray-800">{title}</h1>
            <p className="mt-2 text-gray-600 text-base">{description}</p>
          </div>
          <ul className="space-y-4 mb-auto">
            <li className="flex items-start">
              <p>
                <span className="font-bold text-[#4A4653]">{point1[0]}</span>{" "}
                {point1[1]}
              </p>
            </li>
            <li className="flex items-start">
              <p>
                <span className="font-bold text-[#4A4653]">{point2[0]}</span>{" "}
                {point2[1]}
              </p>
            </li>
            <li className="flex items-start">
              <p>
                <span className="font-bold text-[#4A4653]">{point3[0]}</span>{" "}
                {point3[1]}
              </p>
            </li>
            <li className="flex items-start">
              <p>
                <span className="font-bold text-[#4A4653]">{point4[0]}</span>{" "}
                {point4[1]}
              </p>
            </li>
          </ul>
          <div className="mt-6">
            <Button className="bg-[#4c00fe] hover:bg-white border hover:border hover:border-[#4c00fe] hover:text-[#4c00fe] rounded-full py-4 px-5 h-[45px] text-[16px]">
              Explore
            </Button>
          </div>
        </div>

        {/* Image container - fixed height and proper background */}
        <div className="w-full lg:w-[560px] h-[452px] rounded-lg flex items-center justify-center overflow-hidden bg-gray-100">
          {imageUrl ? (
            <img
              src={imageUrl}
              alt={title || "Feature image"}
              className="w-full h-full object-scale-down "
              onError={(e) =>
                (e.currentTarget.src =
                  "https://placehold.co/560x452/e2e8f0/a0aec0?text=Image+Not+Found")
              }
            />
          ) : (
            <div className="text-gray-500 bg-gray-200 h-full w-full flex items-center justify-center">
              Image Area
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const FeatureHighlights = () => {
  // Helper function to find the feature data by title
  const getFeatureDataByTitle = (title: string) => {
    return (
      featureHighlightData.find(
        (item) =>
          // Handle the special case for "LLM Deployment" vs "LLM Model Deployment"
          (title === "LLM Deployment" &&
            item.title === "LLM Model Deployment") ||
          item.title === title
      ) || featureHighlightData[0]
    ); // Fallback to first item if not found
  };

  return (
    <div className="bg-[#F4F8FF] h-full w-full">
      <div className="px-6 md:px-10 lg:px-12 py-10 space-y-6 max-w-full mx-25">
        <div className="">
          <div className="mb-4">
            <p className="text-[16px] text-primary font-bold">
              GAME CHANGING FEATURES
            </p>
          </div>
          {/* ActualTitle */}
          <div className="mb-4">
            <h1 className="text-[48px] font-medium">
              Revolutionary Features that Redefine Enterprise AI
            </h1>
          </div>
          {/* Description */}
          <div className="pb-10">
            <p className="text-xl max-w-full">
              Discover breakthrough capabilities that accelerate every stage of
              your AI pipeline—from automated annotations to real-time LLM
              deployment. Built for speed, scale, and simplicity, these
              innovations empower teams to move from idea to production with
              unmatched efficiency.
            </p>
          </div>
          {/* Grid */}
          <div className="bg-transparent">
            <Tabs
              defaultValue="Automated Annotations"
              className="w-full shadow-none"
            >
              <TabsList className="w-full h-full bg-transparent border-none shadow-none">
                <TabsTrigger
                  value="Automated Annotations"
                  className="w-full text-black data-[state=active]:text-[#4C00FE] relative data-[state=active]:shadow-none shadow-none border-t-0 border-l-0 border-r-0 border-b-2 border-[#DBDADD] rounded-none data-[state=active]:bg-transparent data-[state=active]:border-b-0 after:content-[''] after:absolute after:h-0.5 after:w-full after:bg-transparent after:bottom-0 after:left-0 data-[state=active]:after:bg-gradient-to-r data-[state=active]:after:from-[#E400A0] data-[state=active]:after:to-[#4C00FE] text-[16px] data-[state=active]:text-[16px]"
                >
                  Automated Annotations
                </TabsTrigger>
                <TabsTrigger
                  value="Few Shot Visual Prompting"
                  className="w-full text-black data-[state=active]:text-[#4C00FE] relative data-[state=active]:shadow-none shadow-none border-t-0 border-l-0 border-r-0 border-b-2 border-[#DBDADD] rounded-none data-[state=active]:bg-transparent data-[state=active]:border-b-0 after:content-[''] after:absolute after:h-0.5 after:w-full after:bg-transparent after:bottom-0 after:left-0 data-[state=active]:after:bg-gradient-to-r data-[state=active]:after:from-[#E400A0] data-[state=active]:after:to-[#4C00FE] text-[16px] data-[state=active]:text-[16px]"
                >
                  Few Shot Visual Prompting
                </TabsTrigger>
                <TabsTrigger
                  value="Vision Model Deployment"
                  className="w-full text-black data-[state=active]:text-[#4C00FE] relative data-[state=active]:shadow-none shadow-none border-t-0 border-l-0 border-r-0 border-b-2 border-[#DBDADD] rounded-none data-[state=active]:bg-transparent data-[state=active]:border-b-0 after:content-[''] after:absolute after:h-0.5 after:w-full after:bg-transparent after:bottom-0 after:left-0 data-[state=active]:after:bg-gradient-to-r data-[state=active]:after:from-[#E400A0] data-[state=active]:after:to-[#4C00FE] text-[16px] data-[state=active]:text-[16px]"
                >
                  Vision Model Deployment
                </TabsTrigger>
                <TabsTrigger
                  value="Text Annotations"
                  className="w-full text-black data-[state=active]:text-[#4C00FE] relative data-[state=active]:shadow-none shadow-none border-t-0 border-l-0 border-r-0 border-b-2 border-[#DBDADD] rounded-none data-[state=active]:bg-transparent data-[state=active]:border-b-0 after:content-[''] after:absolute after:h-0.5 after:w-full after:bg-transparent after:bottom-0 after:left-0 data-[state=active]:after:bg-gradient-to-r data-[state=active]:after:from-[#E400A0] data-[state=active]:after:to-[#4C00FE] text-[16px] data-[state=active]:text-[16px]"
                >
                  Text Annotations
                </TabsTrigger>
                <TabsTrigger
                  value="LLM Fine Tuning"
                  className="w-full text-black data-[state=active]:text-[#4C00FE] relative data-[state=active]:shadow-none shadow-none border-t-0 border-l-0 border-r-0 border-b-2 border-[#DBDADD] rounded-none data-[state=active]:bg-transparent data-[state=active]:border-b-0 after:content-[''] after:absolute after:h-0.5 after:w-full after:bg-transparent after:bottom-0 after:left-0 data-[state=active]:after:bg-gradient-to-r data-[state=active]:after:from-[#E400A0] data-[state=active]:after:to-[#4C00FE] text-[16px] data-[state=active]:text-[16px]"
                >
                  LLM Fine Tuning
                </TabsTrigger>
                <TabsTrigger
                  value="LLM Deployment"
                  className="w-full text-black data-[state=active]:text-[#4C00FE] relative data-[state=active]:shadow-none shadow-none border-t-0 border-l-0 border-r-0 border-b-2 border-[#DBDADD] rounded-none data-[state=active]:bg-transparent data-[state=active]:border-b-0 after:content-[''] after:absolute after:h-0.5 after:w-full after:bg-transparent after:bottom-0 after:left-0 data-[state=active]:after:bg-gradient-to-r data-[state=active]:after:from-[#E400A0] data-[state=active]:after:to-[#4C00FE] text-[16px] data-[state=active]:text-[16px]"
                >
                  LLM Deployment
                </TabsTrigger>
              </TabsList>
              {/* TabContent for Automated Annotations */}
              <TabsContent
                value="Automated Annotations"
                className="bg-transparent border-none shadow-none w-full p-0 pt-5"
              >
                {(() => {
                  const data = getFeatureDataByTitle("Automated Annotations");
                  return (
                    <FeatureHighlightContent
                      title={data.title}
                      description={data.description}
                      point1={data.point1}
                      point2={data.point2}
                      point3={data.point3}
                      point4={data.point4}
                      imageUrl={data.imageUrl}
                    />
                  );
                })()}
              </TabsContent>
              {/* TabContent for Few Shot Visual Prompting */}
              <TabsContent
                value="Few Shot Visual Prompting"
                className="bg-transparent border-none shadow-none w-full p-0 pt-5"
              >
                {(() => {
                  const data = getFeatureDataByTitle(
                    "Few Shot Visual Prompting"
                  );
                  return (
                    <FeatureHighlightContent
                      title={data.title}
                      description={data.description}
                      point1={data.point1}
                      point2={data.point2}
                      point3={data.point3}
                      point4={data.point4}
                      imageUrl={data.imageUrl}
                    />
                  );
                })()}
              </TabsContent>
              {/* TabContent for Vision Model Deployment */}
              <TabsContent
                value="Vision Model Deployment"
                className="bg-transparent border-none shadow-none w-full p-0 pt-5"
              >
                {(() => {
                  const data = getFeatureDataByTitle("Vision Model Deployment");
                  return (
                    <FeatureHighlightContent
                      title={data.title}
                      description={data.description}
                      point1={data.point1}
                      point2={data.point2}
                      point3={data.point3}
                      point4={data.point4}
                      imageUrl={data.imageUrl}
                    />
                  );
                })()}
              </TabsContent>
              {/* TabContent for Text Annotations */}
              <TabsContent
                value="Text Annotations"
                className="bg-transparent border-none shadow-none w-full p-0 pt-5"
              >
                {(() => {
                  const data = getFeatureDataByTitle("Text Annotations");
                  return (
                    <FeatureHighlightContent
                      title={data.title}
                      description={data.description}
                      point1={data.point1}
                      point2={data.point2}
                      point3={data.point3}
                      point4={data.point4}
                      imageUrl={data.imageUrl}
                    />
                  );
                })()}
              </TabsContent>
              {/* TabContent for LLM Fine Tuning */}
              <TabsContent
                value="LLM Fine Tuning"
                className="bg-transparent border-none shadow-none w-full p-0 pt-5"
              >
                {(() => {
                  const data = getFeatureDataByTitle("LLM Fine Tuning");
                  return (
                    <FeatureHighlightContent
                      title={data.title}
                      description={data.description}
                      point1={data.point1}
                      point2={data.point2}
                      point3={data.point3}
                      point4={data.point4}
                      imageUrl={data.imageUrl}
                    />
                  );
                })()}
              </TabsContent>
              {/* TabContent for LLM Deployment (matching to LLM Model Deployment) */}
              <TabsContent
                value="LLM Deployment"
                className="bg-transparent border-none shadow-none w-full p-0 pt-[64px]"
              >
                {(() => {
                  const data = getFeatureDataByTitle("LLM Deployment");
                  return (
                    <FeatureHighlightContent
                      title={data.title}
                      description={data.description}
                      point1={data.point1}
                      point2={data.point2}
                      point3={data.point3}
                      point4={data.point4}
                      imageUrl={data.imageUrl}
                    />
                  );
                })()}
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureHighlights;
