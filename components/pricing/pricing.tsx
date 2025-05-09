import React from "react";
import { Check } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const PricingTable = ({ isAnnual = false }) => {
  const basePricing = {
    free: { price: 0 },
    cv: { price: isAnnual ? 50 : 60 },
    genAi: { price: isAnnual ? 100 : 120 },
  };

  const getPrice = (plan: keyof typeof basePricing) => {
    return basePricing[plan].price;
  };

  return (
    <div className="w-full mx-auto px-4">
      <div className="grid grid-cols-4 gap-0 border border-gray-200 rounded-lg overflow-hidden">
        {/* Column Headers */}
        <div className="p-4 font-medium border-b border-r border-gray-200 bg-indigo-50">
          Features
        </div>

        {/* Plan Headers */}
        {/* Free Plan */}
        <div className="p-6 text-center border-b border-gray-200 bg-indigo-50">
          <div className="text-xl font-bold mb-2">Pro - Free</div>
          <p className="text-gray-600 mb-6">
            Lorem ipsum dolor sit amet consectetur. Id dictumst facilisis.
          </p>
          <div className="mb-4">
            <span className="text-indigo-600 text-3xl font-bold">$0</span>
            <span className="text-gray-500 ml-1">/ forever</span>
          </div>
          <button className="bg-gray-100 text-gray-800 py-2 px-4 rounded-md font-medium hover:bg-gray-200 transition-colors">
            Start Free Trial
          </button>
        </div>

        {/* CV Plan */}
        <div className="p-6 text-center border-b border-gray-200 bg-indigo-50">
          <div className="text-xl font-bold mb-2">Pro - CV</div>
          <p className="text-gray-600 mb-6">
            Lorem ipsum dolor sit amet consectetur. Id dictumst facilisis.
          </p>
          <div className="mb-4">
            <span className="text-indigo-600 text-3xl font-bold">
              ${getPrice("cv")}
            </span>
            <span className="text-gray-500 ml-1">/ month</span>
          </div>
          <button className="bg-indigo-600 text-white py-2 px-4 rounded-md font-medium hover:bg-indigo-700 transition-colors">
            Get Started
          </button>
        </div>

        {/* Gen AI Plan */}
        <div className="p-6 text-center border-b border-gray-200 bg-indigo-50">
          <div className="text-xl font-bold mb-2">Pro - Gen AI</div>
          <p className="text-gray-600 mb-6">
            Lorem ipsum dolor sit amet consectetur. Id dictumst facilisis.
          </p>
          <div className="mb-4">
            <span className="text-indigo-600 text-3xl font-bold">
              ${getPrice("genAi")}
            </span>
            <span className="text-gray-500 ml-1">/ month</span>
          </div>
          <button className="bg-indigo-600 text-white py-2 px-4 rounded-md font-medium hover:bg-indigo-700 transition-colors">
            Get Started
          </button>
        </div>

        {/* Data Management Section */}
        <FeatureSection
          title="Data Management"
          features={[
            {
              name: "Automate labeling with minimal examples",
              free: "Cluster based for enhanced accuracy",
              cv: "Cluster based for enhanced accuracy",
              genAi: "Cluster based for enhanced accuracy",
            },
            {
              name: "AI suggestions to speed up human labeling",
              free: true,
              cv: true,
              genAi: true,
            },
            {
              name: "Labeling by describing objects in words",
              free: true,
              cv: true,
              genAi: true,
            },
          ]}
        />

        {/* Model Training Section */}
        <FeatureSection
          title="Model Training"
          features={[
            {
              name: "Train custom vision models on your data",
              free: "Yes, with control over model choice as per application",
              cv: "Yes, with control over model choice as per application",
              genAi: "Yes, with control over model choice as per application",
            },
            {
              name: "Fine-tune pretrained NLP/LLM on custom data",
              free: "Yes, with control over model choice as per application",
              cv: "Yes, with control over model choice as per application",
              genAi: "Yes, with control over model choice as per application",
            },
            {
              name: "Deploy/trial computer vision models in production",
              free: "1 Model Deployments",
              cv: "5 Model Deployments",
              genAi: "5 Model Deployments",
            },
            {
              name: "Deploy a hosted LLM for inference (e.g. via API)",
              free: false,
              cv: false,
              genAi: "5 Model Deployments",
            },
            {
              name: "Deploy a custom fine-tuned LLM",
              free: false,
              cv: false,
              genAi: "5 Model Deployments",
            },
          ]}
        />

        {/* Security & Compliance Section */}
        <FeatureSection
          title="Security & Compliance"
          features={[
            {
              name: "Granular user roles & permissions",
              free: false,
              cv: true,
              genAi: true,
            },
            {
              name: "SAML/OAuth SSO for enterprise",
              free: false,
              cv: true,
              genAi: true,
            },
            {
              name: "Fine-grained API tokens for accessing data/models",
              free: false,
              cv: true,
              genAi: true,
            },
            {
              name: "Self-hosted installation",
              free: false,
              cv: "Available under Enterprise License",
              genAi: "Available under Enterprise License",
            },
          ]}
        />

        {/* Pricing & Support Section */}
        <FeatureSection
          title="Pricing & Support"
          features={[
            {
              name: "Usage included in plan price",
              free: "10 credits",
              cv: "30 credits",
              genAi: "50 credits",
            },
            {
              name: "Cost for extra usage beyond included",
              free: "$12 per 100 credits",
              cv: "$10 per 100 credits",
              genAi: "$10 per 100 credits",
            },
            {
              name: "Dedicated support, SLAs, extras",
              free: "Limited",
              cv: "Dedicated support, security SLAs",
              genAi: "Dedicated support, security SLAs",
            },
          ]}
        />
      </div>
    </div>
  );
};

const FeatureSection = ({
  title,
  features,
}: {
  title: string;
  features: Array<{
    name: string;
    free: string | boolean;
    cv: string | boolean;
    genAi: string | boolean;
  }>;
}) => {
  const renderValue = (value: string | boolean) => {
    if (typeof value === "boolean") {
      if (value) return <Check className="mx-auto w-5 h-5 text-indigo-600" />;
      return "—";
    }
    return value;
  };

  return (
    <>
      <div className="p-4 font-medium border-b border-r border-gray-200 col-span-4 text-[#3500B2] text-xl">
        {title}
      </div>
      {features.map((feature, index) => (
        <React.Fragment key={index}>
          <div className="p-4 border-b border-r border-gray-200 font-semibold">
            {feature.name}
          </div>
          <div className="p-4 text-center border-b border-gray-200">
            {renderValue(feature.free)}
          </div>
          <div className="p-4 text-center border-b border-gray-200">
            {renderValue(feature.cv)}
          </div>
          <div className="p-4 text-center border-b border-gray-200">
            {renderValue(feature.genAi)}
          </div>
        </React.Fragment>
      ))}
    </>
  );
};

const Pricing = () => {
  return (
    <div className="py-10 my-10 flex items-center justify-center">
      <Tabs defaultValue="monthly" className="w-full max-w-[1000px]">
        <TabsList className="grid w-full grid-cols-2 h-14 p-1 bg-purple-50 rounded-lg mb-8">
          <TabsTrigger
            value="monthly"
            className="rounded-md data-[state=active]:text-[#4C00FE] data-[state=active]:font-semibold text-lg"
          >
            Monthly
          </TabsTrigger>
          <TabsTrigger
            value="annually"
            className="rounded-md data-[state=active]:text-[#4C00FE] data-[state=active]:font-semibold text-lg flex items-center justify-center gap-2"
          >
            <span>Annually</span>
            <div className="bg-orange-50 text-[#FF7F23] font-medium border border-[#FF7F23] rounded-full px-4 py-1 text-sm">
              Save 20%
            </div>
          </TabsTrigger>
        </TabsList>
        <TabsContent value="monthly">
          <PricingTable isAnnual={false} />
        </TabsContent>
        <TabsContent value="annually">
          <PricingTable isAnnual={true} />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Pricing;
