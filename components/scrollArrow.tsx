"use client";

import React, { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";

const ScrollArrow = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Hide arrow when scrolled beyond a certain point
      if (window.scrollY > 300) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = () => {
    const element = document.getElementById("id1");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (!isVisible) return null;

  return (
    <div
      className="fixed bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer z-50"
      onClick={scrollToSection}
      aria-label="Scroll to product highlights"
    >
      <div className="bg-white bg-opacity-50 rounded-full p-3 shadow-lg animate-bounce">
        <ChevronDown size={24} className="text-primary" />
      </div>
    </div>
  );
};

export default ScrollArrow;
