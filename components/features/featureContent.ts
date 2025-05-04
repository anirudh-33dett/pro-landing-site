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
          imageUrl: "https://placehold.co/400x300/E0E0E0/333333?text=Speed+Icon",
        },
        {
          heading: "Consistency",
          description:
            "AI-driven annotations ensure higher consistency across large datasets, minimizing human error and bias.",
          imageUrl: "https://placehold.co/400x300/D0D0D0/333333?text=Consistency+Icon",
        },
        {
          heading: "Scalability",
          description:
            "Easily scale your annotation efforts for enterprise-level projects without proportional increases in manual labor.",
          imageUrl: "https://placehold.co/400x300/C0C0C0/333333?text=Scalability+Icon",
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
          imageUrl: "https://placehold.co/400x300/909090/333333?text=Validation+Icon",
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
      description:
        "Harness the power of few-shot learning to train visual models with minimal data. Our platform enables rapid model adaptation through visual examples, making it ideal for specialized use cases where labeled data is scarce. Perfect for quick prototyping and domain-specific applications.",
      youtubeUrl: "https://www.youtube.com/embed/sample_fewshot_video",
      roiNumbers: [
        { value: 90, label: "% less training data required" },
        {
          value: 5,
          label: "x faster model adaptation",
        },
        { value: 8, label: "x reduction in annotation costs" },
      ],
      detailedFeatures: [
        {
          heading: "Minimal Data Requirements",
          description:
            "Train effective models with just a handful of examples, dramatically reducing data collection needs.",
          imageUrl: "https://placehold.co/400x300/E0E0E0/333333?text=Minimal+Data",
        },
        {
          heading: "Rapid Adaptation",
          description: "Quickly adapt models to new scenarios with just a few visual examples.",
          imageUrl: "https://placehold.co/400x300/D0D0D0/333333?text=Rapid+Adaptation",
        },
        {
          heading: "Domain Flexibility",
          description: "Easily transfer learning across different domains and use cases.",
          imageUrl: "https://placehold.co/400x300/C0C0C0/333333?text=Domain+Flex",
        },
        {
          heading: "Interactive Learning",
          description: "Intuitive interface for providing visual examples and fine-tuning models.",
          imageUrl: "https://placehold.co/400x300/B0B0B0/333333?text=Interactive",
        },
        {
          heading: "Resource Efficient",
          description: "Minimize computational resources needed for training and adaptation.",
          imageUrl: "https://placehold.co/400x300/A0A0A0/333333?text=Resource",
        },
        {
          heading: "Iterative Improvement",
          description: "Continuously improve model performance with additional examples as needed.",
          imageUrl: "https://placehold.co/400x300/909090/333333?text=Iterative",
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
          "Traditional Training",
          "Weeks to months",
          "Requires ML expertise",
          "Dependent on large datasets",
          "High data collection costs",
          "Limited by data availability",
          "Variable with dataset size",
          "Requires extensive data",
        ],
        column3: [
          "Few-Shot Learning",
          "Hours to days",
          "Visual example-based",
          "Consistent with few examples",
          "Minimal data costs",
          "Rapid adaptation to new cases",
          "High with relevant examples",
          "Effective for specific domains",
        ],
      },
      cta: "https://app.qpiai-pro.tech/register",
    },
  ],
  "visual-model-deployment": [
    {
      title: "Enterprise-Grade Model Deployment",
      description:
        "Deploy and scale your visual AI models with enterprise-grade infrastructure. Our platform handles everything from model optimization to load balancing, ensuring high availability and performance. Ideal for production environments requiring reliable and scalable AI solutions.",
      youtubeUrl: "https://www.youtube.com/embed/sample_deployment_video",
      roiNumbers: [
        { value: 99.9, label: "% uptime guarantee" },
        {
          value: 15,
          label: "x faster deployment cycles",
        },
        { value: 40, label: "% reduction in operational costs" },
      ],
      detailedFeatures: [
        {
          heading: "One-Click Deployment",
          description:
            "Deploy models to production with a single click, eliminating complex DevOps procedures.",
          imageUrl: "https://placehold.co/400x300/E0E0E0/333333?text=One+Click",
        },
        {
          heading: "Auto-Scaling",
          description:
            "Automatically scale resources based on demand for optimal performance and cost.",
          imageUrl: "https://placehold.co/400x300/D0D0D0/333333?text=Auto+Scale",
        },
        {
          heading: "Performance Monitoring",
          description:
            "Real-time monitoring and analytics for model performance and system health.",
          imageUrl: "https://placehold.co/400x300/C0C0C0/333333?text=Monitor",
        },
        {
          heading: "Version Control",
          description: "Track and manage different model versions with easy rollback capabilities.",
          imageUrl: "https://placehold.co/400x300/B0B0B0/333333?text=Version",
        },
        {
          heading: "Security Compliance",
          description: "Enterprise-grade security with data encryption and access controls.",
          imageUrl: "https://placehold.co/400x300/A0A0A0/333333?text=Security",
        },
        {
          heading: "API Integration",
          description: "Easy integration with existing systems through RESTful APIs.",
          imageUrl: "https://placehold.co/400x300/909090/333333?text=API",
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
          "Manual Deployment",
          "Days to weeks",
          "Complex DevOps required",
          "Variable performance",
          "High operational costs",
          "Manual scaling needed",
          "Inconsistent monitoring",
          "Limited optimization",
        ],
        column3: [
          "Our Platform",
          "Minutes to hours",
          "One-click deployment",
          "Consistent performance",
          "Optimized costs",
          "Automatic scaling",
          "Real-time monitoring",
          "Continuous optimization",
        ],
      },
      cta: "https://app.qpiai-pro.tech/register",
    },
  ],
  "text-annotations": [
    {
      title: "Advanced Text Annotation Tools",
      description:
        "Streamline text annotation with our AI-powered platform. Featuring automated labeling, entity recognition, and sentiment analysis capabilities. Perfect for creating high-quality training data for NLP models while maintaining accuracy and consistency.",
      youtubeUrl: "https://www.youtube.com/embed/sample_text_annotation_video",
      roiNumbers: [
        { value: 400, label: "% faster text processing" },
        {
          value: 12,
          label: "x improvement in annotation quality",
        },
        { value: 60, label: "% cost reduction" },
      ],
      detailedFeatures: [
        {
          heading: "Smart Automation",
          description: "AI-powered suggestions and automated pre-labeling for faster annotation.",
          imageUrl: "https://placehold.co/400x300/E0E0E0/333333?text=Smart+Auto",
        },
        {
          heading: "Quality Control",
          description:
            "Built-in validation rules and consistency checks for high-quality annotations.",
          imageUrl: "https://placehold.co/400x300/D0D0D0/333333?text=Quality",
        },
        {
          heading: "Collaboration Tools",
          description: "Team-based annotation with role management and progress tracking.",
          imageUrl: "https://placehold.co/400x300/C0C0C0/333333?text=Collab",
        },
        {
          heading: "Custom Templates",
          description: "Create and save annotation templates for different use cases.",
          imageUrl: "https://placehold.co/400x300/B0B0B0/333333?text=Templates",
        },
        {
          heading: "Analytics Dashboard",
          description: "Comprehensive analytics for tracking annotation progress and quality.",
          imageUrl: "https://placehold.co/400x300/A0A0A0/333333?text=Analytics",
        },
        {
          heading: "Export Options",
          description: "Flexible export formats supporting major ML frameworks and tools.",
          imageUrl: "https://placehold.co/400x300/909090/333333?text=Export",
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
          "Basic Text Tools",
          "Manual processing",
          "Basic interface",
          "Inconsistent labels",
          "High labor costs",
          "Limited throughput",
          "Variable quality",
          "Poor handling",
        ],
        column3: [
          "Our Platform",
          "AI-assisted speed",
          "Intuitive interface",
          "Standardized labeling",
          "Reduced labor needs",
          "Enterprise-ready",
          "High accuracy",
          "Advanced handling",
        ],
      },
      cta: "https://app.qpiai-pro.tech/register",
    },
  ],
  "llm-finetuning": [
    {
      title: "LLM Fine-Tuning Excellence",
      description:
        "Optimize large language models for your specific use case with our advanced fine-tuning platform. Featuring efficient training processes, custom dataset management, and performance optimization tools. Ideal for creating specialized AI models that excel in your domain.",
      youtubeUrl: "https://www.youtube.com/embed/sample_llm_finetuning_video",
      roiNumbers: [
        { value: 300, label: "% faster model adaptation" },
        {
          value: 8,
          label: "x improvement in task performance",
        },
        { value: 50, label: "% reduction in training costs" },
      ],
      detailedFeatures: [
        {
          heading: "Efficient Training",
          description: "Optimized training pipelines for faster model adaptation and convergence.",
          imageUrl: "https://placehold.co/400x300/E0E0E0/333333?text=Training",
        },
        {
          heading: "Data Management",
          description: "Comprehensive tools for dataset preparation and quality control.",
          imageUrl: "https://placehold.co/400x300/D0D0D0/333333?text=Data+Mgmt",
        },
        {
          heading: "Performance Metrics",
          description: "Detailed analytics and evaluation metrics for model performance.",
          imageUrl: "https://placehold.co/400x300/C0C0C0/333333?text=Metrics",
        },
        {
          heading: "Resource Optimization",
          description: "Smart resource allocation for cost-effective model training.",
          imageUrl: "https://placehold.co/400x300/B0B0B0/333333?text=Resource",
        },
        {
          heading: "Model Versioning",
          description: "Track and manage different versions of fine-tuned models.",
          imageUrl: "https://placehold.co/400x300/A0A0A0/333333?text=Version",
        },
        {
          heading: "Integration Ready",
          description: "Easy deployment and integration of fine-tuned models into production.",
          imageUrl: "https://placehold.co/400x300/909090/333333?text=Integration",
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
          "Traditional Fine-tuning",
          "Weeks of training",
          "Complex setup",
          "Variable results",
          "High compute costs",
          "Resource intensive",
          "Baseline performance",
          "Unpredictable",
        ],
        column3: [
          "Our Platform",
          "Days or less",
          "Streamlined process",
          "Reliable results",
          "Optimized costs",
          "Efficient scaling",
          "Enhanced performance",
          "Consistent quality",
        ],
      },
      cta: "https://app.qpiai-pro.tech/register",
    },
  ],
  "llm-deployment": [
    {
      title: "Enterprise LLM Deployment",
      description:
        "Deploy large language models at scale with our enterprise-grade platform. Features include automated scaling, monitoring, and optimization tools designed specifically for LLM workloads. Perfect for organizations requiring reliable and efficient AI infrastructure.",
      youtubeUrl: "https://www.youtube.com/embed/sample_llm_deployment_video",
      roiNumbers: [
        { value: 99.9, label: "% service availability" },
        {
          value: 20,
          label: "x faster deployment time",
        },
        { value: 45, label: "% reduction in operational costs" },
      ],
      detailedFeatures: [
        {
          heading: "Rapid Deployment",
          description: "Deploy LLMs to production environments with automated optimization.",
          imageUrl: "https://placehold.co/400x300/E0E0E0/333333?text=Deploy",
        },
        {
          heading: "Smart Scaling",
          description: "Automatic resource scaling based on demand and usage patterns.",
          imageUrl: "https://placehold.co/400x300/D0D0D0/333333?text=Scale",
        },
        {
          heading: "Performance Tracking",
          description: "Comprehensive monitoring of model performance and system health.",
          imageUrl: "https://placehold.co/400x300/C0C0C0/333333?text=Track",
        },
        {
          heading: "Cost Management",
          description: "Optimize resource utilization and control operational costs.",
          imageUrl: "https://placehold.co/400x300/B0B0B0/333333?text=Cost",
        },
        {
          heading: "Security Features",
          description: "Enterprise-grade security with encryption and access controls.",
          imageUrl: "https://placehold.co/400x300/A0A0A0/333333?text=Security",
        },
        {
          heading: "API Management",
          description: "Comprehensive API management with versioning and documentation.",
          imageUrl: "https://placehold.co/400x300/909090/333333?text=API",
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
          "Standard Deployment",
          "Weeks of setup",
          "Complex infrastructure",
          "Variable performance",
          "High maintenance",
          "Manual scaling",
          "Basic monitoring",
          "Limited optimization",
        ],
        column3: [
          "Our Platform",
          "Hours to deploy",
          "Automated setup",
          "Stable performance",
          "Optimized costs",
          "Auto-scaling",
          "Advanced monitoring",
          "Continuous optimization",
        ],
      },
      cta: "https://app.qpiai-pro.tech/register",
    },
  ],
};

export { FeatureContent };
