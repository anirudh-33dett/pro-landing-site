"use client";

import React, { useRef, useState, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import { cn } from "@/lib/utils";

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const MenuItem = ({
  setActive,
  active,
  item,
  children,
}: {
  setActive: (item: string) => void;
  active: string | null;
  item: string;
  children?: React.ReactNode;
}) => {
  return (
    <div onMouseEnter={() => setActive(item)} className="relative">
      <motion.p
        transition={{ duration: 0.3 }}
        className="cursor-pointer text-black hover:opacity-[0.9] dark:text-white"
      >
        {item}
      </motion.p>
      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
        >
          {active === item && (
            <div className="absolute top-[calc(100%_+_1.2rem)] left-1/2 transform -translate-x-1/2 pt-4">
              <motion.div
                transition={transition}
                layoutId="active" // layoutId ensures smooth animation
                className="bg-white dark:bg-black backdrop-blur-sm rounded-2xl overflow-hidden border border-black/[0.2] dark:border-white/[0.2] shadow-xl"
              >
                <motion.div
                  layout // layout ensures smooth animation
                  className="w-max h-full p-4"
                >
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export const Menu = ({
  setActive,
  children,
}: {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
}) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)} // resets the state
      className="relative rounded-full border border-transparent dark:bg-black dark:border-white/[0.2] bg-white shadow-input flex justify-center space-x-4 px-8 py-6"
    >
      {children}
    </nav>
  );
};

export const StandardItem = ({
  title,
  href,
}: {
  title: string;
  href: string;
}) => {
  return (
    <a
      href={href}
      className="cursor-pointer text-black hover:opacity-[0.9] dark:text-white"
    >
      {title}
    </a>
  );
};

export const HoveredLink = ({ children, ...rest }: any) => {
  return (
    <a
      {...rest}
      className="text-black dark:text-neutral-200 hover:text-[#4c00fe]"
    >
      {children}
    </a>
  );
};

export const NestedMenuItem = ({
  title,
  items,
  href,
  isExpanded,
  onToggle,
  classname,
}: {
  title: string;
  items?: string[];
  isExpanded: boolean;
  onToggle: () => void;
  classname?: string;
  href: string;
}) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState<number>(0);
  const [measuring, setMeasuring] = useState<boolean>(false);

  // Update height when items change or when expanded state changes
  useEffect(() => {
    if (isExpanded && contentRef.current) {
      setMeasuring(true);
      // Small delay to allow DOM to update before measuring
      const timer = setTimeout(() => {
        if (contentRef.current) {
          setContentHeight(contentRef.current.scrollHeight);
        }
        setMeasuring(false);
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [isExpanded, items]);

  // Custom transition for smoother animation
  const smoothTransition = {
    ...transition,
    delay: measuring ? 0.15 : 0, // Add delay when measuring to prevent jitter
  };

  return (
    <div className={cn("mb-2", classname)}>
      <div
        className="cursor-pointer font-medium text-black dark:text-white"
        onMouseEnter={onToggle}
      >
        {title}
      </div>
      <div className="overflow-hidden">
        <AnimatePresence initial={false}>
          {isExpanded && items && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{
                opacity: 1,
                height: contentHeight,
                transition: {
                  height: smoothTransition,
                  opacity: {
                    ...smoothTransition,
                    delay: measuring ? 0.2 : 0.05,
                  },
                },
              }}
              exit={{
                opacity: 0,
                height: 0,
                transition: {
                  height: { ...smoothTransition, delay: 0 },
                  opacity: { duration: 0.15 },
                },
              }}
              className="overflow-hidden"
              style={{ willChange: "height" }}
            >
              <div ref={contentRef} className="py-1">
                {items.map((item, index) => (
                  <div
                    key={index}
                    className="py-1 text-neutral-700 dark:text-neutral-300"
                  >
                    - {item}
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

// Example Usage Component
export const NavigationMenu = () => {
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>(
    {}
  );

  // Improved handler to ensure smooth transitions
  const handleMouseEnter = (title: string) => {
    // Preserve any already expanded items
    setExpandedItems((prev) => {
      // Create a new state object with the same expanded items
      const newState = { ...prev };

      // Toggle only the hovered item
      newState[title] = true;

      return newState;
    });
  };

  return (
    <div className="p-4">
      <Menu setActive={setActiveItem}>
        <MenuItem
          setActive={setActiveItem}
          active={activeItem}
          item="Solutions"
        >
          <div className="grid grid-cols-2 gap-x-12 gap-y-4 p-4">
            <div>
              <NestedMenuItem
                title="Pharmaceuticals & Life Sciences"
                href="#"
                isExpanded={
                  expandedItems["Pharmaceuticals & Life Sciences"] || false
                }
                onToggle={() =>
                  handleMouseEnter("Pharmaceuticals & Life Sciences")
                }
                items={[
                  "Use Cases",
                  "Case Studies",
                  "Whitepaper",
                  "Benchmarks",
                ]}
              />
              <NestedMenuItem
                title="Energy & Utilities"
                href="#"
                isExpanded={expandedItems["Energy & Utilities"] || false}
                onToggle={() => handleMouseEnter("Energy & Utilities")}
                items={[
                  "Energy & Utilities1",
                  "Energy & Utilities2",
                  "Energy & Utilities3",
                  "Energy & Utilities4",
                ]}
              />
            </div>
          </div>
        </MenuItem>
        <MenuItem setActive={setActiveItem} active={activeItem} item="Features">
          <div className="p-4 w-64">
            <StandardItem title="Feature 1" href="#" />
            <StandardItem title="Feature 2" href="#" />
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
};
