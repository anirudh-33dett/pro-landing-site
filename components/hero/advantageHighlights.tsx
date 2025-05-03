"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
// import { ChevronDown, ChevronUp } from "lucide-react";
import { Separator } from "../ui/separator";

// Updated advantages data with image paths
const advantages = [
  {
    title: "Growth Driver",
    image: "/advantages/growth-driver.svg",
    items: [
      "Open Source Models Import",
      "AI workflow",
      "Bring your own Encryption Keys",
      "Audit Logs",
      "No-Code AutoML and MLOps",
      "Jupyter Notebook and Integration",
    ],
  },
  {
    title: "Productivity",
    image: "/advantages/productivity.svg",
    items: [
      "Open Source Models Import",
      "AI workflow",
      "Bring your own Encryption Keys",
      "Audit Logs",
      "No-Code AutoML and MLOps",
      "Jupyter Notebook and Integration",
    ],
  },
  {
    title: "Cost Reduction",
    image: "/advantages/cost.svg",
    items: [
      "Open Source Models Import",
      "AI workflow",
      "Bring your own Encryption Keys",
      "Audit Logs",
      "No-Code AutoML and MLOps",
      "Jupyter Notebook and Integration",
    ],
  },
];

const AdvantageHighlights = () => {
  const [selectedAdvantage, setSelectedAdvantage] = useState(
    advantages[0].title
  );

  // Animation variants
  const itemVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { opacity: 1, height: "auto" },
  };

  const imageVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  };

  // Get the current image based on selected advantage
  const currentImage =
    advantages.find((adv) => adv.title === selectedAdvantage)?.image ||
    "/placeholder.svg?height=510&width=608";

  return (
    <div className="bg-gradient-to-b from-[#F4F8FF] to-white pt-5 px-6 md:px-10 lg:px-12 py-10 pb-25">
      <div className="mx-15">
        {/* title */}
        <div className="mb-10">
          <h1 className="text-3xl md:text-4xl lg:text-5xl ">
            Advantages of <span className="gradient-text pb-3">Qpi AI Pro</span>{" "}
            .
          </h1>
        </div>

        {/* Image & Nested Section */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Image */}
          <div className="lg:w-1/2">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedAdvantage}
                className="w-full h-[510px] rounded-lg overflow-hidden bg-[#F0F0F0] flex items-center justify-center p-4"
                variants={imageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.5 }}
              >
                <img
                  src={currentImage || "/placeholder.svg"}
                  alt={selectedAdvantage}
                  className="w-auto h-auto max-w-full max-h-full object-contain"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Nested Sections */}
          <div className="lg:w-1/2">
            {advantages.map((advantage, index) => (
              <div key={advantage.title} className="mb-2">
                <button
                  onClick={() => setSelectedAdvantage(advantage.title)}
                  className="w-full text-left py-4 flex justify-between items-center"
                >
                  <h2
                    className={`text-xl font-semibold transition-colors duration-300 ${
                      selectedAdvantage === advantage.title
                        ? "text-[#4C00FE]"
                        : "text-black"
                    }`}
                  >
                    {advantage.title}
                  </h2>
                  {/* {selectedAdvantage === advantage.title ? (
                    <ChevronUp className="h-5 w-5" />
                  ) : (
                    <ChevronDown className="h-5 w-5" />
                  )} */}
                </button>

                <AnimatePresence>
                  {selectedAdvantage === advantage.title && (
                    <motion.div
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      variants={itemVariants}
                      transition={{ duration: 0.3 }}
                    >
                      <ul className="pl-4 py-4 space-y-3">
                        {advantage.items.map((item, itemIndex) => (
                          <motion.li
                            key={itemIndex}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: itemIndex * 0.1 }}
                            className="flex items-start"
                          >
                            <span className="inline-block w-2 h-2 rounded-full bg-black mt-2 mr-2"></span>
                            {item}
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>

                {index < advantages.length - 1 && (
                  <Separator className="my-2" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvantageHighlights;
