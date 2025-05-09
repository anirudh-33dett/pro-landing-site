"use client";

import { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";

const industryCards = [
  {
    title: "Pharmaceuticals & Life Sciences",
    image: "/industries/pharma.png",
  },
  {
    title: "Advanced Materials Science",
    image: "/industries/materials.png",
  },
  {
    title: "Manufacturing",
    image: "/industries/manufacturing.png",
  },
  {
    title: "Logistics & Supply Chain",
    image: "/industries/logistics.png",
  },
  {
    title: "Energy & Utilities",
    image: "/industries/energy.jpg",
  },
  {
    title: "Automotive & Aerospace",
    image: "/industries/auto.png",
  },
  {
    title: "Telecommunication",
    image: "/industries/tele.jpg",
  },
  {
    title: "Banking & Financial Services",
    image: "/industries/banking.jpg",
  },
];

const IndustryApplicationHighlights = () => {
  const [mounted, setMounted] = useState(false);
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false, // No infinite scroll
    align: "center",
    containScroll: "trimSnaps",
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(true);

  // Handle scroll and update states
  const onSelect = useCallback(() => {
    if (!emblaApi) return;

    setSelectedIndex(emblaApi.selectedScrollSnap());
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi]);

  // Set up the carousel when it's mounted
  useEffect(() => {
    if (!emblaApi) return;

    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    onSelect();

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  // Navigation controls
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div
      className="w-full pt-25 px-25 pb-5"
      style={{
        background: "radial-gradient(circle at center, #7033FEB3, #C9B3FFB3 )",
        backdropFilter: "blur(10px)",
        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
      <div className="relative z-10 mx-13">
        <div className="mb-4">
          <p className="text-[16px] text-primary font-bold">
            INDUSTRY APPLICATIONS
          </p>
        </div>
        {/* ActualTitle */}
        <div className="mb-4">
          <h1 className="text-[48px] font-medium text-white">
            Built for Every Industry, Ready for Your Use Case.
          </h1>
        </div>
        <div className="pb-10">
          <p className="text-xl max-w-full text-white">
            From pharmaceuticals to finance, QpiAI Pro powers AI transformation
            across sectors. Explore how our platform adapts to domain-specific
            challenges with precision, speed, and scale.
          </p>
        </div>

        {/* Carousel */}
        {mounted && (
          <div className="relative w-full mb-16">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex py-10">
                {industryCards.map((card, index) => (
                  <div
                    key={card.title}
                    className={`relative flex-shrink-0 mx-2 rounded-lg overflow-hidden transition-all duration-300 ease-out shadow-xl border-3 border-white ${
                      index === selectedIndex
                        ? "scale-100"
                        : "scale-90 opacity-90"
                    }`}
                    style={{ width: "380px", height: "400px" }}
                  >
                    {/* Image covers the entire card */}
                    <div className="absolute inset-0 w-full h-full">
                      <img
                        src={card.image}
                        alt={card.title}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Title overlay with blur effect */}
                    <div className="absolute top-0 left-0 right-0 bg-black/40 backdrop-blur-md h-14 flex items-center px-5 justify-center text-center z-10">
                      <h3 className="font-medium text-lg text-white">
                        {card.title}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            {prevBtnEnabled && (
              <button
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/80 shadow-lg flex items-center justify-center text-gray-800 transition-all z-20 opacity-100 cursor-pointer"
                onClick={scrollPrev}
                aria-label="Previous slide"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
            )}

            {nextBtnEnabled && (
              <button
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/80 shadow-lg flex items-center justify-center text-gray-800 transition-all z-20 opacity-100 cursor-pointer"
                onClick={scrollNext}
                aria-label="Next slide"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default IndustryApplicationHighlights;
