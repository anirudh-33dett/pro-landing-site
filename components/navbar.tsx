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
          <StandardItem title={"Home"} href={"/home"}></StandardItem>
          <div className="flex flex-row space-x-1">
            <MenuItem setActive={setActive} active={active} item="Features">
              <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="/web-dev">Web Development</HoveredLink>
                <HoveredLink href="/interface-design">
                  Interface Design
                </HoveredLink>
                <HoveredLink href="/seo">
                  Search Engine Optimization
                </HoveredLink>
                <HoveredLink href="/branding">Branding</HoveredLink>
              </div>
            </MenuItem>
            <div className="my-auto pt-1">
              <DropdownArrow></DropdownArrow>
            </div>
          </div>
          <div className="flex flex-row">
            <MenuItem setActive={setActive} active={active} item="Solutions">
              <div className="flex flex-col space-y-4 text-sm">
                <div className="grid grid-cols-2 gap-8">
                  <div className="flex flex-col space-y-4">
                    {leftColumnIndustries.map((industry) => (
                      <HoveredLink
                        key={industry.title}
                        href={`/solution/${industry.title}`}
                      >
                        {industry.title}
                      </HoveredLink>
                    ))}
                  </div>
                  <div className="flex flex-col space-y-4">
                    {rightColumnIndustries.map((industry) => (
                      <HoveredLink
                        key={industry.title}
                        href={`/solution/${industry.title}`}
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
              <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="/web-dev">Web Development</HoveredLink>
                <HoveredLink href="/interface-design">
                  Interface Design
                </HoveredLink>
                <HoveredLink href="/seo">
                  Search Engine Optimization
                </HoveredLink>
                <HoveredLink href="/branding">Branding</HoveredLink>
              </div>
            </MenuItem>
            <div className="my-auto pt-1">
              <DropdownArrow></DropdownArrow>
            </div>
          </div>
          <StandardItem title={"Pricing"} href={"/pricing"}></StandardItem>
          <StandardItem title={"Contact"} href={"/contact"}></StandardItem>
        </Menu>
      </div>
      <div className="space-x-4 my-auto">
        <Button className="shadow-none bg-white rounded-full text-[#4c00fe] border border-white hover:bg-[#4c00fe] hover:text-white">
          Book Demo
        </Button>
        <Button className="rounded-full shadow-none bg-[#4c00fe] text-white border border-[#4c00fe] hover:text-[#4c00fe] hover:bg-white ">
          Get Started
        </Button>
      </div>
    </div>
  );
}
