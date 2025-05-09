import DocReader from "@/components/resources/docReader";
import fs from "fs";
import path from "path";

// Define interfaces for our data structure
interface SubSubTopic {
  id: string;
  title: string;
  content: string;
}

interface SubTopic {
  id: string;
  title: string;
  content: string;
  subSubTopics: SubSubTopic[];
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

// Function to read the markdown file - this runs server-side
function readUserGuide() {
  const filePath = path.join(
    process.cwd(),
    "app/resources/docs/assets/April 2025 User Guide.md"
  );
  try {
    return fs.readFileSync(filePath, "utf8");
  } catch (error) {
    console.error("Error reading user guide file:", error);
    return "";
  }
}

// Parse the markdown content into our structured format
function parseUserGuide(markdownContent: string): UserGuideData {
  const lines = markdownContent.split("\n");
  const topics: Topic[] = [];

  let currentTopic: Topic | null = null;
  let currentSubTopic: SubTopic | null = null;
  let currentSubSubTopic: SubSubTopic | null = null;
  let currentContent: string[] = [];

  // Regular expressions for heading patterns
  const topicRegex =
    /^(?:#+\s*)?(?:\*\*)?(\d+)\.(?:\s+|\\\.)(?:\*\*)?(.+?)(?:\*\*)?$/;
  const subTopicRegex =
    /^(?:#+\s*)?(?:\*\*)?(\d+\.\d+)\.?(?:\s+|\\\.)(?:\*\*)?(.+?)(?:\*\*)?$/;
  const subSubTopicRegex =
    /^(?:#+\s*)?(?:\*\*)?(\d+\.\d+\.\d+)\.?(?:\s+|\\\.)(?:\*\*)?(.+?)(?:\*\*)?$/;

  function slugify(text: string): string {
    return text
      .toLowerCase()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");
  }

  function saveCurrentContent() {
    if (currentContent.length === 0) return;

    const contentText = currentContent.join("\n").trim();
    currentContent = [];

    if (currentSubSubTopic) {
      currentSubSubTopic.content = contentText;
    } else if (currentSubTopic) {
      currentSubTopic.content = contentText;
    } else if (currentTopic) {
      currentTopic.content = contentText;
    }
  }

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();

    // Check for topic (e.g., "1. Introduction")
    const topicMatch = line.match(topicRegex);
    if (topicMatch && !line.match(subTopicRegex)) {
      // Save any previous content
      saveCurrentContent();

      // Start a new topic
      const id = topicMatch[1];
      const title = topicMatch[2].trim();
      currentTopic = {
        id: id,
        title: title,
        content: "",
        subTopics: [],
      };
      topics.push(currentTopic);
      currentSubTopic = null;
      currentSubSubTopic = null;
      continue;
    }

    // Check for subtopic (e.g., "1.1 QpiAI Pro Platform Pipeline")
    const subTopicMatch = line.match(subTopicRegex);
    if (subTopicMatch && !line.match(subSubTopicRegex)) {
      // Save any previous content
      saveCurrentContent();

      if (!currentTopic) {
        console.warn("Found subtopic without a parent topic:", line);
        continue;
      }

      // Start a new subtopic
      const id = subTopicMatch[1];
      const title = subTopicMatch[2].trim();
      currentSubTopic = {
        id: id,
        title: title,
        content: "",
        subSubTopics: [],
      };
      currentTopic.subTopics.push(currentSubTopic);
      currentSubSubTopic = null;
      continue;
    }

    // Check for sub-subtopic (e.g., "1.1.1 Key Features")
    const subSubTopicMatch = line.match(subSubTopicRegex);
    if (subSubTopicMatch) {
      // Save any previous content
      saveCurrentContent();

      if (!currentSubTopic) {
        console.warn("Found sub-subtopic without a parent subtopic:", line);
        continue;
      }

      // Start a new sub-subtopic
      const id = subSubTopicMatch[1];
      const title = subSubTopicMatch[2].trim();
      currentSubSubTopic = {
        id: id,
        title: title,
        content: "",
      };
      currentSubTopic.subSubTopics.push(currentSubSubTopic);
      continue;
    }

    // Add to current content
    currentContent.push(line);
  }

  // Save any remaining content
  saveCurrentContent();

  return { topics };
}

export default function DocsPage() {
  // Read and parse the user guide
  const markdownContent = readUserGuide();
  const userGuideData = parseUserGuide(markdownContent);

  // Pass the structured data to DocReader component
  return <DocReader userGuideData={userGuideData} />;
}
