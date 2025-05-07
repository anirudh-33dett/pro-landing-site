import { ResourcesTabBar } from "@/components/ResourcesTabBar"

export default function ResourcesLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="container mx-5 py-8">
            <ResourcesTabBar />
            {children}
        </div>
    )
}
