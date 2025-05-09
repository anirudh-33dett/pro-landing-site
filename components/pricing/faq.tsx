"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Plus, ArrowRight } from "lucide-react";

// Dummy FAQ data
const faqData = [
  {
    question: "How does the free trial work?",
    answer:
      "Our 14-day free trial gives you full access to the Professional plan features. No credit card is required to start, and you can cancel anytime before the trial ends.",
    redirect: {
      text: "Lorem ipsum dolor sit amet consectetur. Aliquet sed vitae mauris sed nibh neque?",
      link: "#",
    },
  },
  {
    question:
      "Lorem ipsum dolor sit amet consectetur. Praesent pharetra donec consectetur purus?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    redirect: {
      text: "Learn more about our pricing plans and features",
      link: "#",
    },
  },
  {
    question:
      "Lorem ipsum dolor sit amet consectetur. Praesent pharetra donec consectetur purus?",
    answer:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    redirect: {
      text: "Check out our documentation for more details",
      link: "#",
    },
  },
  {
    question:
      "Lorem ipsum dolor sit amet consectetur. Praesent pharetra donec consectetur purus?",
    answer:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    redirect: {
      text: "Contact our support team for assistance",
      link: "#",
    },
  },
  {
    question:
      "Lorem ipsum dolor sit amet consectetur. Praesent pharetra donec consectetur purus?",
    answer:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    redirect: {
      text: "Explore our knowledge base for more information",
      link: "#",
    },
  },
];

const QuestionComponent = ({
  item,
  isOpen,
  onClick,
}: {
  item: (typeof faqData)[0];
  isOpen: boolean;
  onClick: () => void;
}) => {
  return (
    <div className="rounded-lg bg-white shadow-sm overflow-hidden mb-4">
      <div
        className="flex justify-between items-center p-6 cursor-pointer"
        onClick={onClick}
      >
        <h3 className="text-lg font-medium">{item.question}</h3>
        <button className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-100">
          {isOpen ? <X size={18} /> : <Plus size={18} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="px-6 overflow-hidden"
          >
            <p className="text-gray-700 mb-4">{item.answer}</p>

            <motion.div
              className="bg-[#E9E1FF] p-4 rounded-lg mb-6 flex justify-between items-center"
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.2 }}
            >
              <p className="text-gray-800">{item.redirect.text}</p>
              <ArrowRight size={20} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="bg-gradient-to-b from-[#8EAAD814] to-[#C9B3FF26] py-16 rounded-b-4xl mb-20">
      {/* // <div className="bg-black py-16 "> */}
      <div className="container mx-auto px-4 max-w-5xl ">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold gradient-text pb-5">
            Frequently Asked Questions
          </h1>
        </div>

        <div className="mt-12">
          {faqData.map((item, index) => (
            <QuestionComponent
              key={index}
              item={item}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
