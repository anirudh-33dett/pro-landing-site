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
        background: "radial-gradient(circle at center, #7033FE, #C9B3FF )",
        backdropFilter: "blur(10px)",
        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
      <div className="relative z-10 mx-13">
        <div className="mb-4">
          <p className="text-[16px] text-primary font-bold">
            PRODUCT HIGHLIGHT
          </p>
        </div>
        {/* ActualTitle */}
        <div className="mb-4">
          <h1 className="text-[48px] font-medium text-white">
            Lorem ipsum dolor sit amet consectetur. Integer augue.
          </h1>
        </div>
        <div className="pb-10">
          <p className="text-xl max-w-full text-white">
            Lorem ipsum dolor sit amet consectetur. Arcu fames nunc pretium
            viverra turpis praesent. Magnis donec dui eu sit viverra vestibulum
            eu. Dignissim suspendisse mattis sagittis iaculis in in facilisi
            turpis.
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
                    className={`relative flex-shrink-0 mx-2 rounded-lg overflow-hidden transition-all duration-300 ease-out shadow-xl ${
                      index === selectedIndex
                        ? "scale-100"
                        : "scale-90 opacity-90"
                    }`}
                    style={{ width: "380px", height: "400px" }}
                  >
                    <div className="bg-white/50 h-14 flex items-center px-5 justify-center text-center ">
                      <h3 className="font-medium text-lg text-gray-800 dark:text-white">
                        {card.title}
                      </h3>
                    </div>
                    <div className="h-full w-full">
                      <img
                        src={card.image}
                        alt={card.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              className={`absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/80 shadow-lg flex items-center justify-center text-gray-800 transition-all z-20 ${
                prevBtnEnabled
                  ? "opacity-100 cursor-pointer"
                  : "opacity-50 cursor-not-allowed"
              }`}
              onClick={scrollPrev}
              disabled={!prevBtnEnabled}
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

            <button
              className={`absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/80 shadow-lg flex items-center justify-center text-gray-800 transition-all z-20 ${
                nextBtnEnabled
                  ? "opacity-100 cursor-pointer"
                  : "opacity-50 cursor-not-allowed"
              }`}
              onClick={scrollNext}
              disabled={!nextBtnEnabled}
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

            {/* Dots Navigation */}
            <div className="flex justify-center gap-2 mt-6">
              {scrollSnaps.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === selectedIndex
                      ? "bg-[#4c00fe]"
                      : "bg-white/50 hover:bg-white/70"
                  }`}
                  onClick={() => scrollTo(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default IndustryApplicationHighlights;
