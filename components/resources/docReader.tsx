"use client";

import React, { useState } from 'react'

const dummyData = {
    topics: [
        {
            id: 1,
            title: "Getting Started",
            subtopics: [
                {
                    id: 'a',
                    title: "Installation Guide",
                    content: "Welcome to our comprehensive installation guide. This section will walk you through everything you need to know to get started with our platform. First and foremost, ensure that you have the latest version of Node.js installed on your system. Our platform requires Node.js version 14 or higher to function properly. Once you have confirmed your Node.js installation, you can proceed with the following steps..."
                },
                {
                    id: 'b',
                    title: "Basic Configuration",
                    content: "Configuration is a crucial step in optimizing your experience. In this section, we'll explore the various configuration options available to you. The configuration file can be found in the root directory of your project. It follows a simple JSON structure that allows you to customize everything from appearance to functionality..."
                },
                {
                    id: 'e',
                    title: "Quick Start Tutorial",
                    content: "Get up and running in less than 5 minutes with our quick start tutorial. This guide assumes you have completed the installation process and have basic familiarity with web development concepts. We'll create a simple project together that demonstrates the core features of our platform..."
                }
            ]
        },
        {
            id: 2,
            title: "Advanced Features",
            subtopics: [
                {
                    id: 'c',
                    title: "Custom Integrations",
                    content: "Our platform offers robust integration capabilities with various third-party services. This extensive guide covers everything from API authentication to webhook setup. When implementing custom integrations, it's important to consider security implications and performance optimization. We recommend following our best practices for maintaining secure and efficient integrations..."
                },
                {
                    id: 'd',
                    title: "Performance Optimization",
                    content: "Performance is at the heart of every successful application. In this section, we dive deep into optimization techniques that can help your application run faster and more efficiently. We'll cover topics such as caching strategies, lazy loading, and database query optimization. Understanding these concepts is crucial for building scalable applications..."
                }
            ]
        },
        {
            id: 3,
            title: "Security Best Practices",
            subtopics: [
                {
                    id: 'f',
                    title: "Authentication Systems",
                    content: "Security is paramount in modern web applications. This comprehensive guide covers implementing secure authentication systems, including OAuth2, JWT tokens, and multi-factor authentication. Learn about best practices for password hashing, session management, and protecting against common security vulnerabilities..."
                },
                {
                    id: 'g',
                    title: "Data Encryption",
                    content: "Protecting sensitive data through encryption is essential. This guide explores different encryption methods, key management strategies, and when to use each approach. We'll cover both at-rest and in-transit encryption, as well as compliance considerations for various regulatory requirements..."
                },
                {
                    id: 'h',
                    title: "Security Auditing",
                    content: "Regular security audits help maintain the integrity of your application. Learn how to implement logging, monitoring, and alerting systems to detect and respond to security incidents. We'll also cover automated security scanning tools and how to integrate them into your CI/CD pipeline..."
                }
            ]
        },
        {
            id: 4,
            title: "Development Workflow",
            subtopics: [
                {
                    id: 'i',
                    title: "Version Control Best Practices",
                    content: "Effective version control is crucial for team collaboration. This guide covers Git workflows, branching strategies, and code review processes. Learn how to maintain a clean commit history, handle merge conflicts, and use advanced Git features for better productivity..."
                },
                {
                    id: 'j',
                    title: "CI/CD Pipeline Setup",
                    content: "Continuous Integration and Continuous Deployment (CI/CD) automate your development workflow. This guide walks through setting up robust pipelines, including automated testing, code quality checks, and deployment strategies. Learn about different deployment environments and how to manage configuration across them..."
                },
                {
                    id: 'k',
                    title: "Testing Strategies",
                    content: "A comprehensive testing strategy ensures code quality and reliability. This section covers unit testing, integration testing, and end-to-end testing approaches. Learn about test-driven development (TDD), behavior-driven development (BDD), and how to achieve optimal test coverage..."
                }
            ]
        },
        {
            id: 5,
            title: "API Documentation",
            subtopics: [
                {
                    id: 'l',
                    title: "RESTful API Guidelines",
                    content: "Design and implement RESTful APIs that follow industry best practices. This guide covers resource naming, HTTP methods, status codes, and versioning strategies. Learn about API documentation tools and how to create clear, useful documentation for your endpoints..."
                },
                {
                    id: 'm',
                    title: "GraphQL Implementation",
                    content: "GraphQL offers a flexible approach to API development. This comprehensive guide covers schema design, resolvers, mutations, and subscriptions. Learn about performance optimization, caching strategies, and how to migrate from REST to GraphQL..."
                },
                {
                    id: 'n',
                    title: "API Security",
                    content: "Securing your APIs is critical for protecting your application. This section covers authentication, authorization, rate limiting, and other security measures. Learn about common attack vectors and how to implement proper security headers and CORS policies..."
                }
            ]
        }
    ]
};

const DocReader = () => {
    const [expandedTopics, setExpandedTopics] = useState<number[]>([1, 2]);
    const [selectedSubtopic, setSelectedSubtopic] = useState<string>('a');
    const [isAllExpanded, setIsAllExpanded] = useState(true);

    const toggleTopic = (topicId: number) => {
        setExpandedTopics(prev =>
            prev.includes(topicId)
                ? prev.filter(id => id !== topicId)
                : [...prev, topicId]
        );
    };

    const toggleAll = () => {
        setIsAllExpanded(prev => !prev);
        setExpandedTopics(prev =>
            prev.length ? [] : dummyData.topics.map(topic => topic.id)
        );
    };

    const getSelectedContent = () => {
        for (const topic of dummyData.topics) {
            const subtopic = topic.subtopics.find(sub => sub.id === selectedSubtopic);
            if (subtopic) return subtopic;
        }
        return dummyData.topics[0].subtopics[0];
    };

    return (
        <div className='mx-5 w-full h-full flex items-center justify-center'>
            <div className='shadow-sm flex flex-row w-[1120px] p-15'>
                <div className='flex flex-col w-[276px]'>
                    <button
                        onClick={toggleAll}
                        className="underline mb-2 text-left hover:text-blue-900 text-[#4C00FE] transition-colors"
                    >
                        {isAllExpanded ? 'Collapse All' : 'Expand All'}
                    </button>

                    {dummyData.topics.map(topic => (
                        <div key={topic.id} className="mb-4">
                            <button
                                onClick={() => toggleTopic(topic.id)}
                                className="font-semibold hover:text-blue-600 transition-colors"
                            >
                                {expandedTopics.includes(topic.id) ? '▼' : '>'} {topic.title}
                            </button>

                            {expandedTopics.includes(topic.id) && (
                                <div className="ml-4 mt-2">
                                    {topic.subtopics.map(subtopic => (
                                        <div
                                            key={subtopic.id}
                                            onClick={() => setSelectedSubtopic(subtopic.id)}
                                            className={`cursor-pointer py-1 px-2 rounded ${selectedSubtopic === subtopic.id
                                                ? 'bg-blue-100 text-blue-600'
                                                : 'hover:bg-gray-100'
                                                }`}
                                        >
                                            {subtopic.title}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                <div className='flex flex-col w-[770px] p-6'>
                    <h1 className="text-2xl font-bold mb-2">
                        {getSelectedContent().title}
                    </h1>
                    <p className="text-gray-700 leading-relaxed">
                        {getSelectedContent().content}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default DocReader