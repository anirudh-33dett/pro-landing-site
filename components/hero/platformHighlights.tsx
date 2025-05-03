import React from "react";

const PlatformHighlights = () => {
  const deploymentOptions = [
    {
      title: "Managed service on Public Cloud",
      description:
        "End-to-End access to platform functionalities with integrated QpiAI Serverless Billing Infrastructure. Pay for what you use.",
      buttonText: "Get Started",
      buttonAction: true,
    },
    {
      title: "Enterprise Data Centre Deployment",
      description:
        "Deploy on Enterprise Data Centre and enjoy complete control over security and compliance.",
      buttonText: "Contact Us",
      buttonAction: false,
    },
    {
      title: "Cloud VPC Deployment",
      description:
        "Deploy End-to-End platform functionalities within Enterprise VPC on the Public Cloud.",
      buttonText: "Contact Us",
      buttonAction: false,
    },
  ];

  return (
    <div className="bg-[#F4F8FF] px-6 md:px-10 lg:px-12 py-10">
      <div className="mx-15">
        <div className="pb-10">
          <p className="text-primary font-semibold">Access Platform</p>
        </div>
        {/* ActualTitle */}
        <div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl">
            Deployment Options of
            <span className="gradient-text ml-4 pb-4">Qpi AI Pro</span>.
          </h1>
        </div>
        {/* Content */}
        <div className="pb-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {deploymentOptions.map((option, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 flex flex-col h-full"
              >
                <h3 className="text-xl font-semibold mb-4 text-center">
                  {option.title}
                </h3>
                <p className="text-gray-700 flex-grow text-center mb-6">
                  {option.description}
                </p>
                <div className="flex justify-center mt-auto">
                  <button
                    className={`px-6 py-2 rounded-full ${
                      option.buttonAction
                        ? "bg-purple-600 text-white"
                        : "bg-purple-600 text-white"
                    }`}
                  >
                    {option.buttonText}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlatformHighlights;
