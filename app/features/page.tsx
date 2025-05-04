"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function FeaturesPage() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to home page immediately
    router.push("/");
  }, [router]);

  return (
    <div className="flex items-center justify-center h-screen">
      {/* <div className="loader">Loading...</div> */}
      <style jsx>{`
        .loader {
          border: 4px solid #f3f3f3;
          border-top: 4px solid #3498db;
          border-radius: 50%;
          width: 40px;
          height: 40px;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}
