"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useState, useRef, useEffect } from "react";

interface CTAProps {
  ctaLink?: string;
}

export default function CTA({ ctaLink }: CTAProps) {
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  // Set initial centered position
  useEffect(() => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setMousePosition({
        x: rect.width / 2,
        y: rect.height / 2,
      });
    }
  }, []);

  // Handle mouse movement
  const handleMouseMove = (e: { clientX: number; clientY: number }) => {
    if (!containerRef.current || !isHovering) return;

    const rect = containerRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  // Handle mouse enter/leave
  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => {
    setIsHovering(false);

    // Reset to center when mouse leaves
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setMousePosition({
        x: rect.width / 2,
        y: rect.height / 2,
      });
    }
  };

  const handleGetStarted = () => {
    if (ctaLink) {
      window.location.href = ctaLink;
    } else {
      router.push("/pricing");
    }
  };

  return (
    <div className="w-full px-8 py-15 h-full bg-white">
      <div
        ref={containerRef}
        className="relative mx-auto max-w-4xl rounded-xl overflow-hidden p-10"
        style={{
          borderRadius: "24px",
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(30, 0, 102, 0.70) 0%, #1E0066 100%)`,
          position: "relative",
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Overlay to protect text from gradient effect */}
        <div className="absolute inset-0 bg-transparent z-0"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center text-center">
          <h2 className="text-3xl font-bold text-white mb-3">
            Ready to transform your AI capabilities?
          </h2>
          <p className="text-white mb-8">
            Get started with QpiAI Pro today and unlock the full potential of AI
            for your organization.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              onClick={handleGetStarted}
              variant="secondary"
              className="bg-white text-purple-700 hover:bg-white/30 hover:text-white"
            >
              Get Started <span className="ml-2">→</span>
            </Button>
            <Button
              variant="outline"
              className="border-white text-white bg-white/10 hover:text-purple-700"
            >
              Talk to Sales
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
