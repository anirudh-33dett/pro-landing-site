import React from "react";

const FeatureDetail = () => {
  return (
    <div className="bg-[#F4F8FF] px-6 md:px-10 lg:px-12 py-10">
      <div className="mx-15">
        <div className="pb-10">
          <p className="text-primary font-semibold">Section Name</p>
        </div>
        {/* ActualTitle */}
        <div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl pb-10">
            Lorem ipsum dolor sit amet consectetur. Integer augue.
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur. Arcu fames nunc pretium
            viverra turpis praesent. Magnis donec dui eu sit viverra vestibulum
            eu. Dignissim suspendisse mattis sagittis iaculis in in facilisi
            turpis.
          </p>
        </div>
        {/* Content */}
        <div className="py-10 flex flex-col">
          {/* Main Content - 1 */}
          <div className="bg-white w-[1050px] h-[320px] rounded-lg flex flex-row items-center">
            <div className="w-[580px] h-full px-5">
              <div className="flex flex-col justify-end pb-5 h-full">
                <h3 className="pb-5 text-2xl">Option- 1</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Odio odio morbi
                  pellentesque iaculis. Quis etiam sapien pharetra ornare. Nisl
                  turpis pulvinar in id.
                </p>
              </div>
            </div>
            <div className="w-[435px] h-[272px] bg-red-500 rounded-lg"></div>
          </div>
          {/* Main Content - 2 */}
          <div className="flex flex-row pt-5 justify-between w-[1050px]">
            <div className="h-[320px] w-[515px] bg-white rounded-lg justify-between flex flex-row items-center px-5">
              <div className="w-[230px] h-full">
                <div className="flex flex-col justify-end pb-5 h-full">
                  <h3 className="pb-5 text-2xl">Option- 1</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Odio odio morbi
                    pellentesque iaculis. Quis etiam sapien pharetra ornare.
                    Nisl turpis pulvinar in id.
                  </p>
                </div>
              </div>
              <div className="w-[224px] h-[272px] bg-red-500 rounded-lg"></div>
            </div>
            <div className="h-[320px] w-[515px] bg-white rounded-lg flex flex-row items-center justify-between px-5">
              <div className="w-[230px] h-full">
                <div className="flex flex-col justify-end pb-5 h-full">
                  <h3 className="pb-5 text-2xl">Option- 1</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Odio odio morbi
                    pellentesque iaculis. Quis etiam sapien pharetra ornare.
                    Nisl turpis pulvinar in id.
                  </p>
                </div>
              </div>
              <div className="w-[224px] h-[272px] bg-red-500 rounded-lg"></div>
            </div>
          </div>
          {/* Main Content - 3 */}
          <div className="flex flex-row pt-5 justify-between w-[1050px]">
            <div className="h-[440px] w-[340px] bg-white rounded-lg">
              <div className="h-full rounded-lg flex flex-col  items-center py-5">
                <div className="w-[300px] h-[300px] bg-red-500 rounded-lg"></div>
                <div className="w-[300px] h-full">
                  <div className="flex flex-col justify-end pb-5 h-full">
                    <h3 className="pb-5 text-2xl">Option- 1</h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur. Odio odio morbi
                      pellentesque iaculis. Quis etiam sapien pharetra ornare.
                      Nisl turpis pulvinar in id.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[440px] w-[340px] bg-white rounded-lg">
              <div className="h-full rounded-lg flex flex-col  items-center py-5">
                <div className="w-[300px] h-[300px] bg-red-500 rounded-lg"></div>
                <div className="w-[300px] h-full">
                  <div className="flex flex-col justify-end pb-5 h-full">
                    <h3 className="pb-5 text-2xl">Option- 1</h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur. Odio odio morbi
                      pellentesque iaculis. Quis etiam sapien pharetra ornare.
                      Nisl turpis pulvinar in id.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[440px] w-[340px] bg-white rounded-lg">
              <div className="h-full rounded-lg flex flex-col  items-center py-5">
                <div className="w-[300px] h-[300px] bg-red-500 rounded-lg"></div>
                <div className="w-[300px] h-full">
                  <div className="flex flex-col justify-end pb-5 h-full">
                    <h3 className="pb-5 text-2xl">Option- 1</h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur. Odio odio morbi
                      pellentesque iaculis. Quis etiam sapien pharetra ornare.
                      Nisl turpis pulvinar in id.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureDetail;
