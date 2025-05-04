import React from "react";

interface DetailedFeature {
  heading: string;
  description: string;
  imageUrl: string;
}

interface FeatureDetailProps {
  features: DetailedFeature[];
}

const FeatureDetail = ({ features }: FeatureDetailProps) => {
  // Split features into groups for different layouts
  const mainFeature = features[0];
  const secondaryFeatures = features.slice(1, 3);
  const tertiaryFeatures = features.slice(3, 6);

  return (
    <div className="max-w-[1120px] mx-auto py-20">
      <div className="mb-10">
        <p className="text-primary font-semibold text-lg">Key Features</p>
      </div>
      {/* Content */}
      <div className="space-y-10">
        {/* Main Content - 1 */}
        {mainFeature && (
          <div className="bg-white rounded-2xl shadow-sm flex items-center p-8">
            <div className="flex-1 pr-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">{mainFeature.heading}</h3>
                <p className="text-gray-600">{mainFeature.description}</p>
              </div>
            </div>
            <div className="w-[435px] flex-shrink-0">
              <img
                src={mainFeature.imageUrl}
                alt={mainFeature.heading}
                className="w-full h-[272px] object-cover rounded-xl"
              />
            </div>
          </div>
        )}
        {/* Main Content - 2 */}
        {secondaryFeatures.length > 0 && (
          <div className="grid grid-cols-2 gap-8">
            {secondaryFeatures.map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-sm p-8 flex items-center">
                <div className="flex-1 pr-8">
                  <div className="space-y-4">
                    <h3 className="text-2xl font-semibold">{feature.heading}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
                <div className="w-[224px] flex-shrink-0">
                  <img
                    src={feature.imageUrl}
                    alt={feature.heading}
                    className="w-full h-[272px] object-cover rounded-xl"
                  />
                </div>
              </div>
            ))}
          </div>
        )}
        {/* Main Content - 3 */}
        {tertiaryFeatures.length > 0 && (
          <div className="grid grid-cols-3 gap-8">
            {tertiaryFeatures.map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-sm p-6">
                <div className="space-y-6">
                  <img
                    src={feature.imageUrl}
                    alt={feature.heading}
                    className="w-full aspect-square object-cover rounded-xl"
                  />
                  <div className="space-y-4">
                    <h3 className="text-2xl font-semibold">{feature.heading}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FeatureDetail;
