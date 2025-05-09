"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function UnderConstruction() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-gray-800 px-4 text-center">
      <Image
        src="/under-construction/under-construction.svg"
        alt="Under Construction"
        width={400}
        height={400}
        priority
      />
      <h1 className="text-3xl font-semibold mt-6">Page Under Construction</h1>
      <p className="text-lg text-gray-600 mt-2 max-w-md">
        This page is currently being built. Check back soon for updates!
      </p>
      <Button
        className="shadow-none bg-[#4c00fe] rounded-full text-white border border-white hover:border-[#4c00fe] hover:bg-white hover:text-[#4c00fe] mt-5"
        onClick={() => (window.location.href = "/")}
      >
        Go Back to Home
      </Button>
    </div>
  );
}
