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
      <div className="mx-27">
        <div className="pb-10">
          <p className="text-[16px] text-primary font-bold">ACCESS PLATFORM</p>
        </div>
        {/* ActualTitle */}
        <div className="mb-4">
          <h1 className="text-[48px] font-medium">
            Lorem ipsum dolor sit amet consectetur. Integer augue.
          </h1>
        </div>
        {/* Content */}
        <div className="pb-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {deploymentOptions.map((option, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 flex flex-col h-[410px]"
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
                        ? "bg-[#4c00fe] hover:bg-white border hover:border hover:border-[#4c00fe] hover:text-[#4c00fe] rounded-full text-white"
                        : "bg-[#4c00fe] hover:bg-white border hover:border hover:border-[#4c00fe] hover:text-[#4c00fe] rounded-full text-white"
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
