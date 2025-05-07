'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search } from 'lucide-react'

export function SearchBar() {
    const [isOpen, setIsOpen] = useState(false)
    const [searchQuery, setSearchQuery] = useState('')
    const searchRef = useRef<HTMLDivElement>(null)
    const inputRef = useRef<HTMLInputElement>(null)

    // Mock recommendations - replace with real data
    const recommendations = [
        'Getting Started Guide',
        'API Documentation',
        'Best Practices',
        'Tutorials',
        'FAQs'
    ]

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
                setIsOpen(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    const handleSearchClick = () => {
        setIsOpen(true)
        setTimeout(() => {
            inputRef.current?.focus()
        }, 100)
    }

    return (
        <div ref={searchRef} className="relative">
            <div
                onClick={handleSearchClick}
                className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-100 hover:bg-gray-200 cursor-pointer transition-colors"
            >
                <Search size={16} className="text-gray-500" />
                <span className="text-sm text-gray-500">Search resources...</span>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[9998]"
                            onClick={() => setIsOpen(false)}
                        />

                        {/* Search Modal */}
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="absolute top-0 right-0 w-[400px] bg-white rounded-lg shadow-2xl overflow-hidden z-[9999]"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="p-4">
                                <div className="flex items-center gap-2 mb-4">
                                    <Search size={20} className="text-gray-400" />
                                    <input
                                        ref={inputRef}
                                        type="text"
                                        placeholder="Search resources..."
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        className="flex-1 bg-transparent outline-none text-lg"
                                    />
                                </div>

                                {/* Recommendations */}
                                <div className="space-y-2">
                                    {recommendations.map((item, index) => (
                                        <div
                                            key={index}
                                            className="p-2 hover:bg-gray-100 rounded-md cursor-pointer transition-colors"
                                        >
                                            <div className="flex items-center gap-2">
                                                <Search size={16} className="text-gray-400" />
                                                <span>{item}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    )
} 