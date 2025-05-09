"use client";

import React, { useState } from "react";
import { Separator } from "../ui/separator";

interface SubSubTopic {
  id: string;
  title: string;
  content: string;
}

interface SubTopic {
  id: string;
  title: string;
  content: string;
  subSubTopics?: SubSubTopic[];
}

interface Topic {
  id: string;
  title: string;
  content: string;
  subTopics: SubTopic[];
}

interface UserGuideData {
  topics: Topic[];
}

interface DocReaderProps {
  userGuideData: UserGuideData;
}

const DocReader = ({ userGuideData }: DocReaderProps) => {
  const topics = userGuideData?.topics || []; // Ensure topics is always an array
  const [expandedTopics, setExpandedTopics] = useState<string[]>(["1", "2"]);
  const [selectedContent, setSelectedContent] = useState({
    topicId: "1",
    subTopicId: "1-1",
  });
  const [isAllExpanded, setIsAllExpanded] = useState(false);

  const toggleTopic = (topicId: string) => {
    setExpandedTopics((prev) =>
      prev.includes(topicId)
        ? prev.filter((id) => id !== topicId)
        : [...prev, topicId]
    );
  };

  const toggleAll = () => {
    setIsAllExpanded((prev) => !prev);
    setExpandedTopics((prev) =>
      prev.length ? [] : topics.map((topic) => topic.id)
    );
  };

  const selectSubTopic = (topicId: string, subTopicId: string) => {
    setSelectedContent({
      topicId,
      subTopicId,
    });
  };

  const getSelectedContent = () => {
    const topic = topics.find((t) => t.id === selectedContent.topicId);
    if (!topic) return { title: "", content: "" };

    const subTopic = topic.subTopics.find(
      (st) => st.id === selectedContent.subTopicId
    );
    return subTopic || { title: topic.title, content: topic.content };
  };

  return (
    <div className="mx-5 w-full h-full flex items-center justify-center rounded-lg border-3 border-white shadow-lg">
      <div className="shadow-sm flex flex-row w-full p-15">
        {/* Left Navigation Sidebar */}
        <div className="flex px-4 flex-col w-[276px] border-r-3  border-[#DBDADD]">
          <button
            onClick={toggleAll}
            className="underline mb-2 text-left hover:text-blue-900 text-[#4C00FE] transition-colors"
          >
            {isAllExpanded ? "Collapse All" : "Expand All"}
          </button>

          {topics.map((topic) => (
            <div key={topic.id} className="mb-4">
              <button
                onClick={() => toggleTopic(topic.id)}
                className="font-semibold hover:text-blue-600 transition-colors flex items-center"
              >
                <span className="mr-1">
                  {expandedTopics.includes(topic.id) ? "▼" : "▶"}
                </span>
                {topic.title}
              </button>

              {expandedTopics.includes(topic.id) && (
                <div className="ml-4 mt-2">
                  {topic.subTopics.map((subTopic) => (
                    <div
                      key={subTopic.id}
                      onClick={() => selectSubTopic(topic.id, subTopic.id)}
                      className={`cursor-pointer py-1 px-2 rounded ${
                        selectedContent.subTopicId === subTopic.id
                          ? "bg-blue-100 text-blue-600"
                          : "hover:bg-gray-100"
                      }`}
                    >
                      {subTopic.title}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <Separator orientation="vertical" className="h-full" />

        {/* Content Area */}
        <div className="flex flex-col w-[770px] p-6">
          <h1 className="text-2xl font-bold mb-2">
            {getSelectedContent().title}
          </h1>
          <p className="text-gray-700 leading-relaxed">
            {getSelectedContent().content}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DocReader;
