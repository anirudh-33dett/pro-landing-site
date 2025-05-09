import React from "react";

const PlatformHighlights = () => {
  const deploymentOptions = [
    {
      title: "Managed service on Public Cloud",
      description:
        "End-to-End access to platform functionalities with integrated QpiAI Serverless Billing Infrastructure. Pay for what you use.",
      buttonText: "Get Started",
      buttonAction: true,
      features: [
        {
          icon: "/deployment/aws-icon.svg",
        },
        {
          icon: "/deployment/azure-icon.svg",
        },
        {
          icon: "/deployment/personal-server-icon.svg",
        },
      ],
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
      <div className="mx-27 max-w-full">
        <div className="pb-10">
          <p className="text-[16px] text-primary font-bold">
            DEPLOYMENT OPTIONS
          </p>
        </div>
        {/* ActualTitle */}
        <div className="mb-4">
          <h1 className="text-[48px] font-medium">
            Train Fast. Deploy Smart. Scale Seamlessly
          </h1>
        </div>
        {/* Description */}
        <div className="pb-10">
          <p className="text-xl max-w-full " id="id2">
            QpiAI Pro offers a unified no-code pipeline to develop and deploy
            vision models—from fine-tuning pre-trained models to real-time,
            scalable inference with live monitoring and one-click integration
          </p>
        </div>
        {/* Content */}
        <div className="pb-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {deploymentOptions.map((option, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-xl p-6 flex flex-col h-full border-2 border-white"
              >
                <h3 className="text-xl font-semibold mb-4 text-center">
                  {option.title}
                </h3>

                <p className="text-gray-700 mb-6 text-center">
                  {option.description}
                </p>

                {option.features && (
                  <div className="flex justify-center gap-4 mb-6">
                    {option.features.map((feature, idx) => (
                      <div key={idx} className="flex flex-col items-center">
                        <div className="w-14 h-14 rounded-lg flex items-center justify-center">
                          <img
                            src={feature.icon}
                            alt="Cloud provider"
                            className="w-8 h-8"
                            style={{
                              filter:
                                "invert(0%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(0%) contrast(70%)",
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                <div className="flex justify-center mt-auto">
                  <button
                    className={`px-6 py-2 rounded-full ${
                      option.buttonAction
                        ? "bg-[#4c00fe] hover:bg-white border hover:border hover:border-[#4c00fe] hover:text-[#4c00fe] text-white"
                        : "bg-[#4c00fe] hover:bg-white border hover:border hover:border-[#4c00fe] hover:text-[#4c00fe] text-white"
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
