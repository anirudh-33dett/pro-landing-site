import { ResourcesTabBar } from "@/components/ResourcesTabBar";

export default function ResourcesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="px-25 py-8 bg-[#F4F8FF]">
      <ResourcesTabBar />
      {children}
    </div>
  );
}
