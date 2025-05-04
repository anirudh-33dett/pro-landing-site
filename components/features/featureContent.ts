interface RoiNumber {
  value: number;
  label: string;
}

interface DetailedFeature {
  heading: string;
  description: string;
  imageUrl: string;
}

interface TableContent {
  column1: string[];
  column2: string[];
  column3: string[];
}

interface FeatureDetails {
  title: string;
  description: string;
  youtubeUrl?: string;
  roiNumbers: RoiNumber[];
  detailedFeatures: DetailedFeature[];
  tableContent: TableContent;
  cta?: string;
}

const FeatureContent: { [key: string]: FeatureDetails[] } = {
  "automated-annotation": [
    {
      title: "Advantages of Automated Annotations",
      description:
        "Leverage our Gen AI powered text prompting—converting natural language into accurate labels for detection and segmentation tasks. Combining automation with human validation, it delivers faster and more reliable results than manual methods. Best suited for common objects in general contexts.",
      youtubeUrl:
        "https://www.youtube.com/embed/efdoARMJZAc?list=PL3R3W94WK_MiMPNoTeLi5GCjlxOfCXOCr",
      roiNumbers: [
        { value: 600, label: "% faster annotations" },
        {
          value: 10,
          label: "x higher productivity with autoscaled deployments",
        },
        { value: 3, label: "x reductions in chances of model failure" },
      ],
      detailedFeatures: [
        {
          heading: "Speed & Efficiency",
          description:
            "Significantly reduce annotation time compared to manual methods, accelerating your project timelines.",
          imageUrl:
            "https://placehold.co/400x300/E0E0E0/333333?text=Speed+Icon",
        },
        {
          heading: "Consistency",
          description:
            "AI-driven annotations ensure higher consistency across large datasets, minimizing human error and bias.",
          imageUrl:
            "https://placehold.co/400x300/D0D0D0/333333?text=Consistency+Icon",
        },
        {
          heading: "Scalability",
          description:
            "Easily scale your annotation efforts for enterprise-level projects without proportional increases in manual labor.",
          imageUrl:
            "https://placehold.co/400x300/C0C0C0/333333?text=Scalability+Icon",
        },
        {
          heading: "Ease of Use",
          description:
            "Utilize intuitive natural language prompts, making the annotation process accessible even without deep technical expertise.",
          imageUrl: "https://placehold.co/400x300/B0B0B0/333333?text=Ease+Icon",
        },
        {
          heading: "Cost Effective",
          description:
            "Lower operational costs by reducing the need for large teams of manual annotators.",
          imageUrl: "https://placehold.co/400x300/A0A0A0/333333?text=Cost+Icon",
        },
        {
          heading: "Human-in-the-Loop",
          description:
            "Combine AI speed with human validation for optimal accuracy and reliability, especially for complex cases.",
          imageUrl:
            "https://placehold.co/400x300/909090/333333?text=Validation+Icon",
        },
      ],
      tableContent: {
        column1: [
          "Metric",
          "Speed",
          "Ease of Use",
          "Consistency",
          "Cost",
          "Scalability",
          "Accuracy (General)",
          "Accuracy (Complex)",
        ],
        column2: [
          "Manual Annotation",
          "Slow; time-intensive",
          "Requires skilled human experts",
          "Variable; prone to human error",
          "High; requires large specialized teams",
          "Limited; bottleneck with larger datasets",
          "Potentially High (with expertise)",
          "High (with expertise)",
        ],
        column3: [
          "Automated Annotation (Text Prompting)",
          "Up to 700x faster",
          "Intuitive, uses natural language prompts",
          "High; AI ensures consistent annotations",
          "Lower operational costs",
          "Scalable for enterprise applications",
          "High (especially for common objects)",
          "High with human validation loop",
        ],
      },
      cta: "https://app.qpiai-pro.tech/register",
    },
  ],
  fewshot: [
    {
      title: "Few Shot Visual Prompting Explained",
      description: "Description for Few Shot Visual Prompting...",
      roiNumbers: [
        { value: 50, label: "% reduction in data needs" },
        { value: 5, label: "x faster model adaptation" },
      ],
      detailedFeatures: [
        {
          heading: "Data Efficiency",
          description: "Train models with significantly less labeled data.",
          imageUrl: "https://placehold.co/400x300/E0E0E0/333333?text=Data+Icon",
        },
        {
          heading: "Rapid Prototyping",
          description: "Quickly test and adapt models to new visual concepts.",
          imageUrl:
            "https://placehold.co/400x300/D0D0D0/333333?text=Prototype+Icon",
        },
      ],
      tableContent: {
        column1: ["Metric", "Traditional", "Few-Shot"],
        column2: ["Data Required", "Large Datasets", "Minimal Examples"],
        column3: ["Adaptation Speed", "Slow", "Fast"],
      },
      cta: "https://app.qpiai-pro.tech/register",
    },
  ],
  "visual-model-deployment": [
    {
      title: "Deploying Visual Models Seamlessly",
      description: "Description for Visual Model Deployment...",
      roiNumbers: [
        { value: 99, label: "% uptime SLA" },
        { value: 10, label: "x faster deployment cycles" },
      ],
      detailedFeatures: [
        {
          heading: "Cloud & Edge",
          description: "Deploy models flexibly across cloud or edge devices.",
          imageUrl:
            "https://placehold.co/400x300/E0E0E0/333333?text=Cloud+Edge",
        },
        {
          heading: "Monitoring",
          description: "Real-time monitoring and performance tracking.",
          imageUrl:
            "https://placehold.co/400x300/D0D0D0/333333?text=Monitor+Icon",
        },
      ],
      tableContent: {
        column1: ["Feature", "Manual Deployment", "Our Platform"],
        column2: ["Scalability", "Manual Scaling", "Auto-Scaling"],
        column3: ["Monitoring", "Basic Logs", "Advanced Dashboards"],
      },
      cta: "https://app.qpiai-pro.tech/register",
    },
  ],
  "text-annotations": [
    {
      title: "Advantages of Automated Annotations",
      description:
        "Leverage our Gen AI powered text prompting—converting natural language into accurate labels for detection and segmentation tasks. Combining automation with human validation, it delivers faster and more reliable results than manual methods. Best suited for common objects in general contexts.",
      youtubeUrl:
        "https://www.youtube.com/embed/efdoARMJZAc?list=PL3R3W94WK_MiMPNoTeLi5GCjlxOfCXOCr",
      roiNumbers: [
        { value: 600, label: "% faster annotations" },
        {
          value: 10,
          label: "x higher productivity with autoscaled deployments",
        },
        { value: 3, label: "x reductions in chances of model failure" },
      ],
      detailedFeatures: [
        {
          heading: "Speed & Efficiency",
          description:
            "Significantly reduce annotation time compared to manual methods, accelerating your project timelines.",
          imageUrl:
            "https://placehold.co/400x300/E0E0E0/333333?text=Speed+Icon",
        },
        {
          heading: "Consistency",
          description:
            "AI-driven annotations ensure higher consistency across large datasets, minimizing human error and bias.",
          imageUrl:
            "https://placehold.co/400x300/D0D0D0/333333?text=Consistency+Icon",
        },
        {
          heading: "Scalability",
          description:
            "Easily scale your annotation efforts for enterprise-level projects without proportional increases in manual labor.",
          imageUrl:
            "https://placehold.co/400x300/C0C0C0/333333?text=Scalability+Icon",
        },
        {
          heading: "Ease of Use",
          description:
            "Utilize intuitive natural language prompts, making the annotation process accessible even without deep technical expertise.",
          imageUrl: "https://placehold.co/400x300/B0B0B0/333333?text=Ease+Icon",
        },
        {
          heading: "Cost Effective",
          description:
            "Lower operational costs by reducing the need for large teams of manual annotators.",
          imageUrl: "https://placehold.co/400x300/A0A0A0/333333?text=Cost+Icon",
        },
        {
          heading: "Human-in-the-Loop",
          description:
            "Combine AI speed with human validation for optimal accuracy and reliability, especially for complex cases.",
          imageUrl:
            "https://placehold.co/400x300/909090/333333?text=Validation+Icon",
        },
      ],
      tableContent: {
        column1: [
          "Metric",
          "Speed",
          "Ease of Use",
          "Consistency",
          "Cost",
          "Scalability",
          "Accuracy (General)",
          "Accuracy (Complex)",
        ],
        column2: [
          "Manual Annotation",
          "Slow; time-intensive",
          "Requires skilled human experts",
          "Variable; prone to human error",
          "High; requires large specialized teams",
          "Limited; bottleneck with larger datasets",
          "Potentially High (with expertise)",
          "High (with expertise)",
        ],
        column3: [
          "Automated Annotation (Text Prompting)",
          "Up to 700x faster",
          "Intuitive, uses natural language prompts",
          "High; AI ensures consistent annotations",
          "Lower operational costs",
          "Scalable for enterprise applications",
          "High (especially for common objects)",
          "High with human validation loop",
        ],
      },
      cta: "https://app.qpiai-pro.tech/register",
    },
  ],
  "llm-finetuning": [
    {
      title: "Advantages of Automated Annotations",
      description:
        "Leverage our Gen AI powered text prompting—converting natural language into accurate labels for detection and segmentation tasks. Combining automation with human validation, it delivers faster and more reliable results than manual methods. Best suited for common objects in general contexts.",
      youtubeUrl:
        "https://www.youtube.com/embed/efdoARMJZAc?list=PL3R3W94WK_MiMPNoTeLi5GCjlxOfCXOCr",
      roiNumbers: [
        { value: 600, label: "% faster annotations" },
        {
          value: 10,
          label: "x higher productivity with autoscaled deployments",
        },
        { value: 3, label: "x reductions in chances of model failure" },
      ],
      detailedFeatures: [
        {
          heading: "Speed & Efficiency",
          description:
            "Significantly reduce annotation time compared to manual methods, accelerating your project timelines.",
          imageUrl:
            "https://placehold.co/400x300/E0E0E0/333333?text=Speed+Icon",
        },
        {
          heading: "Consistency",
          description:
            "AI-driven annotations ensure higher consistency across large datasets, minimizing human error and bias.",
          imageUrl:
            "https://placehold.co/400x300/D0D0D0/333333?text=Consistency+Icon",
        },
        {
          heading: "Scalability",
          description:
            "Easily scale your annotation efforts for enterprise-level projects without proportional increases in manual labor.",
          imageUrl:
            "https://placehold.co/400x300/C0C0C0/333333?text=Scalability+Icon",
        },
        {
          heading: "Ease of Use",
          description:
            "Utilize intuitive natural language prompts, making the annotation process accessible even without deep technical expertise.",
          imageUrl: "https://placehold.co/400x300/B0B0B0/333333?text=Ease+Icon",
        },
        {
          heading: "Cost Effective",
          description:
            "Lower operational costs by reducing the need for large teams of manual annotators.",
          imageUrl: "https://placehold.co/400x300/A0A0A0/333333?text=Cost+Icon",
        },
        {
          heading: "Human-in-the-Loop",
          description:
            "Combine AI speed with human validation for optimal accuracy and reliability, especially for complex cases.",
          imageUrl:
            "https://placehold.co/400x300/909090/333333?text=Validation+Icon",
        },
      ],
      tableContent: {
        column1: [
          "Metric",
          "Speed",
          "Ease of Use",
          "Consistency",
          "Cost",
          "Scalability",
          "Accuracy (General)",
          "Accuracy (Complex)",
        ],
        column2: [
          "Manual Annotation",
          "Slow; time-intensive",
          "Requires skilled human experts",
          "Variable; prone to human error",
          "High; requires large specialized teams",
          "Limited; bottleneck with larger datasets",
          "Potentially High (with expertise)",
          "High (with expertise)",
        ],
        column3: [
          "Automated Annotation (Text Prompting)",
          "Up to 700x faster",
          "Intuitive, uses natural language prompts",
          "High; AI ensures consistent annotations",
          "Lower operational costs",
          "Scalable for enterprise applications",
          "High (especially for common objects)",
          "High with human validation loop",
        ],
      },
      cta: "https://app.qpiai-pro.tech/register",
    },
  ],
  "llm-deployment": [
    {
      title: "Advantages of Automated Annotations",
      description:
        "Leverage our Gen AI powered text prompting—converting natural language into accurate labels for detection and segmentation tasks. Combining automation with human validation, it delivers faster and more reliable results than manual methods. Best suited for common objects in general contexts.",
      youtubeUrl:
        "https://www.youtube.com/embed/efdoARMJZAc?list=PL3R3W94WK_MiMPNoTeLi5GCjlxOfCXOCr",
      roiNumbers: [
        { value: 600, label: "% faster annotations" },
        {
          value: 10,
          label: "x higher productivity with autoscaled deployments",
        },
        { value: 3, label: "x reductions in chances of model failure" },
      ],
      detailedFeatures: [
        {
          heading: "Speed & Efficiency",
          description:
            "Significantly reduce annotation time compared to manual methods, accelerating your project timelines.",
          imageUrl:
            "https://placehold.co/400x300/E0E0E0/333333?text=Speed+Icon",
        },
        {
          heading: "Consistency",
          description:
            "AI-driven annotations ensure higher consistency across large datasets, minimizing human error and bias.",
          imageUrl:
            "https://placehold.co/400x300/D0D0D0/333333?text=Consistency+Icon",
        },
        {
          heading: "Scalability",
          description:
            "Easily scale your annotation efforts for enterprise-level projects without proportional increases in manual labor.",
          imageUrl:
            "https://placehold.co/400x300/C0C0C0/333333?text=Scalability+Icon",
        },
        {
          heading: "Ease of Use",
          description:
            "Utilize intuitive natural language prompts, making the annotation process accessible even without deep technical expertise.",
          imageUrl: "https://placehold.co/400x300/B0B0B0/333333?text=Ease+Icon",
        },
        {
          heading: "Cost Effective",
          description:
            "Lower operational costs by reducing the need for large teams of manual annotators.",
          imageUrl: "https://placehold.co/400x300/A0A0A0/333333?text=Cost+Icon",
        },
        {
          heading: "Human-in-the-Loop",
          description:
            "Combine AI speed with human validation for optimal accuracy and reliability, especially for complex cases.",
          imageUrl:
            "https://placehold.co/400x300/909090/333333?text=Validation+Icon",
        },
      ],
      tableContent: {
        column1: [
          "Metric",
          "Speed",
          "Ease of Use",
          "Consistency",
          "Cost",
          "Scalability",
          "Accuracy (General)",
          "Accuracy (Complex)",
        ],
        column2: [
          "Manual Annotation",
          "Slow; time-intensive",
          "Requires skilled human experts",
          "Variable; prone to human error",
          "High; requires large specialized teams",
          "Limited; bottleneck with larger datasets",
          "Potentially High (with expertise)",
          "High (with expertise)",
        ],
        column3: [
          "Automated Annotation (Text Prompting)",
          "Up to 700x faster",
          "Intuitive, uses natural language prompts",
          "High; AI ensures consistent annotations",
          "Lower operational costs",
          "Scalable for enterprise applications",
          "High (especially for common objects)",
          "High with human validation loop",
        ],
      },
      cta: "https://app.qpiai-pro.tech/register",
    },
  ],
};

export { FeatureContent };
