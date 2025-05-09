"use client";

import { useState } from "react";
import {
  HoveredLink,
  Menu,
  MenuItem,
  StandardItem,
  NestedMenuItem,
} from "./ui/navbar-menu";
import { Button } from "./ui/button";
import DropdownArrow from "./dropdownArrow";

const leftColumnIndustries = [
  {
    title: "Pharmaceuticals & Life Sciences",
    items: ["Use Cases", "Case Studies", "Whitepaper", "Benchmarks"],
  },
  {
    title: "Advanced Materials Science",
    items: ["Use Cases", "Case Studies", "Whitepaper", "Benchmarks"],
  },
  {
    title: "Manufacturing",
    items: ["Use Cases", "Case Studies", "Whitepaper", "Benchmarks"],
  },
  {
    title: "Logistics & Supply Chains",
    items: ["Use Cases", "Case Studies", "Whitepaper", "Benchmarks"],
  },
];

const rightColumnIndustries = [
  {
    title: "Energy & Utilities",
    items: ["Use Cases", "Case Studies", "Whitepaper", "Benchmarks"],
  },
  {
    title: "Automotive & Aerospace",
    items: ["Use Cases", "Case Studies", "Whitepaper", "Benchmarks"],
  },
  {
    title: "Telecommunication",
    items: ["Use Cases", "Case Studies", "Whitepaper", "Benchmarks"],
  },
  {
    title: "Banking and Financial Service",
    items: ["Use Cases", "Case Studies", "Whitepaper", "Benchmarks"],
  },
];

export function Navbar() {
  const [active, setActive] = useState<string | null>(null);
  const [expandedIndustry, setExpandedIndustry] = useState<string | null>();

  return (
    <div className="max-w-full z-50 bg-white justify-between px-5 flex flex-row align-center">
      <div className="flex items-center">
        <img src="/logos/qpi_logo.svg" alt="QPiAI" className="h-10" />
        <img src="/logos/pro_logo.svg" alt="Pro" className="h-7 ml-2" />
      </div>
      <div>
        <Menu setActive={setActive}>
          <StandardItem title={"Home"} href={"/"}></StandardItem>
          <div className="flex flex-row space-x-1">
            <MenuItem setActive={setActive} active={active} item="Features">
              <div className="pt-1 pb-4">
                <p className="text-[#929098]">Features</p>
              </div>
              <div className="grid grid-cols-2 gap-x-8 text-sm">
                <div className="flex flex-col space-y-4">
                  <HoveredLink href="/features/automated-annotation">
                    Automated Annotations
                  </HoveredLink>
                  <HoveredLink href="/features/fewshot">
                    Few Shot Visual Prompting
                  </HoveredLink>
                  <HoveredLink href="/features/visual-model-deployment">
                    Visual Model Deployment
                  </HoveredLink>
                </div>
                {/* Second Column Container */}
                <div className="flex flex-col space-y-4">
                  {/* <div>
                    <p className="text-white">Features</p>
                  </div> */}
                  <HoveredLink href="/features/text-annotations">
                    Text Annotations
                  </HoveredLink>
                  <HoveredLink href="/features/llm-finetuning">
                    LLM Fine Tuning
                  </HoveredLink>
                  <HoveredLink href="/features/llm-deployment">
                    LLM Deployment
                  </HoveredLink>
                </div>
              </div>
            </MenuItem>
            <div className="my-auto pt-1">
              <DropdownArrow></DropdownArrow>
            </div>
          </div>
          <div className="flex flex-row">
            <MenuItem setActive={setActive} active={active} item="Solutions">
              <div className="pt-1 pb-4">
                <p className="text-[#929098]">Industries</p>
              </div>
              <div className="flex flex-col space-y-4 text-sm">
                <div className="grid grid-cols-2 gap-8">
                  <div className="flex flex-col space-y-4">
                    {leftColumnIndustries.map((industry) => (
                      <HoveredLink
                        key={industry.title}
                        // href={`/solution/${industry.title}`}
                        href="/under-construction"
                      >
                        {industry.title}
                      </HoveredLink>
                    ))}
                  </div>
                  <div className="flex flex-col space-y-4">
                    {rightColumnIndustries.map((industry) => (
                      <HoveredLink
                        key={industry.title}
                        // href={`/solution/${industry.title}`}
                        href="/under-construction"
                      >
                        {industry.title}
                      </HoveredLink>
                    ))}
                  </div>
                </div>
              </div>
            </MenuItem>
            <div className="my-auto pt-1">
              <DropdownArrow />
            </div>
          </div>
          <div className="flex flex-row space-x-1">
            <MenuItem setActive={setActive} active={active} item="Resources">
              <div className="pt-1 pb-4">
                <p className="text-[#929098]">Resources</p>
              </div>
              <div className="grid grid-cols-2 gap-x-8 text-sm">
                <div className="flex flex-col space-y-4">
                  <HoveredLink href="/resources/blogs">Blog</HoveredLink>
                  <HoveredLink href="/resources/docs">Docs</HoveredLink>
                  <HoveredLink href="/resources/showcase">Showcase</HoveredLink>
                </div>
                <div className="flex flex-col space-y-4">
                  <HoveredLink href="/web-dev">News Articles</HoveredLink>
                  <HoveredLink href="/web-dev">
                    Awards and Recognition
                  </HoveredLink>
                </div>
              </div>
            </MenuItem>
            <div className="my-auto pt-1">
              <DropdownArrow></DropdownArrow>
            </div>
          </div>
          <StandardItem title={"Pricing"} href={"/pricing"}></StandardItem>
          <StandardItem title={"Contact"} href={"/contact-us"}></StandardItem>
        </Menu>
      </div>
      <div className="space-x-4 my-auto">
        <Button
          className="shadow-none bg-white rounded-full text-[#4c00fe] border border-white hover:bg-[#4c00fe] hover:text-white"
          onClick={() => (window.location.href = "/contactus")}
        >
          Book Demo
        </Button>
        <Button
          className="rounded-full shadow-none bg-[#4c00fe] text-white border border-[#4c00fe] hover:text-[#4c00fe] hover:bg-white"
          onClick={() =>
            (window.location.href = "https://app.qpiai-pro.tech/register")
          }
        >
          Get Started
        </Button>
      </div>
    </div>
  );
}
