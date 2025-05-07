import React from "react";
import Image from "next/image";
import { Button } from "../ui/button";

const mainArticle = [
  {
    title:
      "QpiAI Closes $6.5 Mill Pre-Series A Funding Led by Yournest and SIDBI Venture Capital to Enable Intelligence Modelling and Intelligence Compute Using Quantum Computers",
    typeOf: "News Article",
    Description:
      "BANGALORE, India--QpiAI announced its maiden external funding of $6.5 million to build Quantum computing and Generative AI products and platforms and Intelligence Compute Using Quantum Computers",
    imageUrl: "/about/pre-seed.png",
    date: "April 16, 2025",
    articleLink: "",
  },
];

const secondaryArticles = [
  {
    title:
      "QpiAI Announces Dawn of Quantum Era in India With 25 Qubit Quantum Computer",
    typeOf: "News Article",
    Description:
      "BANGALORE, India--QpiAI, a leader in quantum computing and generative AI, announced its First Quantum computer named QpiAI announced",
    imageUrl: "/about/quantum.png",
    date: "April 16, 2025",
    articleLink: "",
  },
  {
    title:
      "QpiAI Announces AI Enabled QpiAISense™ Platform for Worldwide Deployment for Controlling Superconducting, Spin and Ion-Trap Qubits",
    typeOf: "News Article",
    Description:
      "BANGALORE, India--QpiAI, a leader in quantum computing and generative AI, announced its First Quantum computer named QpiAI Indus Quantum Computer",
    imageUrl: "/about/sense.png",
    date: "April 16, 2025",
    articleLink: "",
  },
];

const KnowMore = () => {
  return (
    <div className="py-10 bg-white">
      <div className="mx-27">
        {/* ActualTitle */}
        <div className="mb-4">
          <p className="text-[16px] text-primary font-bold">OUR ACHIEVEMENTS</p>
        </div>
        <div className="mb-4">
          <h1 className="text-[48px] font-medium ">
            Lorem ipsum dolor sit amet consectetur. Integer augue.
          </h1>
        </div>
        <div className="pb-10">
          <p className="text-xl max-w-full ">
            Lorem ipsum dolor sit amet consectetur. Arcu fames nunc pretium
            viverra turpis praesent. Magnis donec dui eu sit viverra vestibulum
            eu. Dignissim suspendisse mattis sagittis iaculis in in facilisi
            turpis.
          </p>
        </div>
        {/* BentoGrid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* MainArticle */}
          {mainArticle.map((article, index) => (
            <div
              key={index}
              className="flex flex-col border rounded-lg shadow-lg overflow-hidden h-[736px]"
            >
              {/* Image */}
              <div className="h-64 w-full relative">
                <Image
                  src={article.imageUrl || "/api/placeholder/544/256"}
                  alt={article.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              {/* Text */}
              <div className="flex flex-col flex-1 p-5">
                <div className="flex flex-row justify-between pb-4">
                  <p className="text-sm text-gray-600">{article.typeOf}</p>
                  <p className="text-sm text-gray-600">{article.date}</p>
                </div>
                <div className="flex flex-col flex-1">
                  <h3 className="font-semibold text-lg pb-3">
                    {article.title}
                  </h3>
                  <p className="text-sm mb-6">{article.Description}</p>
                  <div className="mt-auto">
                    <Button className="bg-white text-[#4c00fe] underline rounded-none hover:text-[#e400a0] px-4 hover:bg-white py-2 transition-colors duration-200">
                      Read More
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* SecondaryArticles Container */}
          <div className="flex flex-col h-full gap-4">
            {secondaryArticles.map((article, index) => (
              <div
                key={index}
                className="flex flex-row border rounded-lg shadow-sm overflow-hidden flex-1"
              >
                {/* Image */}
                <div className="w-1/3 relative">
                  <Image
                    src={article.imageUrl || "/api/placeholder/228/256"}
                    alt={article.title}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                {/* Text */}
                <div className="flex flex-col flex-1 p-4">
                  <div className="flex flex-row justify-between pb-2">
                    <p className="text-sm text-gray-600">{article.typeOf}</p>
                    <p className="text-sm text-gray-600">{article.date}</p>
                  </div>
                  <div className="flex flex-col flex-1">
                    <h3 className="font-semibold text-base pb-2 line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-sm mb-2 line-clamp-2">
                      {article.Description}
                    </p>
                    <div className="mt-auto">
                      <Button className="bg-white text-[#4c00fe] underline rounded-none hover:text-[#e400a0] px-4 py-2 transition-colors duration-200 hover:bg-white">
                        Read More
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default KnowMore;
