'use client'

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { usePathname, useRouter } from "next/navigation"
import { SearchBar } from "./SearchBar"

export function ResourcesTabBar() {
    const pathname = usePathname()
    const router = useRouter()

    // Get the current tab from the URL path (/resources/[tab])
    const currentTab = pathname.split('/').pop() || 'blogs'

    const tabs = [
        { value: 'blogs', label: 'Blogs' },
        { value: 'docs', label: 'Documentation' },
        { value: 'showcase', label: 'Showcase' }
    ]

    return (
        <div className="w-full flex justify-between items-center mb-8">
            <Tabs
                defaultValue={currentTab}
                className="w-[400px]"
                onValueChange={(value) => router.push(`/resources/${value}`)}
            >
                <TabsList className="w-full h-12 grid grid-cols-3 gap-2 bg-background p-1 rounded-full border border-[#4C00FE]">
                    {tabs.map((tab) => (
                        <TabsTrigger
                            key={tab.value}
                            value={tab.value}
                            className="rounded-full data-[state=active]:bg-[#4C00FE] data-[state=active]:text-white data-[state=active]:shadow-none px-15 whitespace-nowrap"
                        >
                            {tab.label}
                        </TabsTrigger>
                    ))}
                </TabsList>
            </Tabs>

            <SearchBar />
        </div>
    )
}