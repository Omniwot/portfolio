export type Role = {
  title: string;
  company: string;
  url?: string;
  location: string;
  duration: string;
  points: string[];
};

export type Project = {
  name: string;
  description: string;
  tags: string[];
  url?: string;
};

export type Credential = {
  title: string;
  org: string;
  url: string;
};

export type TimelineEvent = {
  year: string;
  label: string;
  location: string;
  detail: string;
};

export const site = {
  brand: "Omniwot",
  name: "Harshal V. Abhyankar",
  headline: "AI engineer. Agentic systems & RAG.",
  subline: "Forward-deployed AI · Charlotte, NC",
  email: "abhyankarharshal22@gmail.com",
  location: "Charlotte, NC",
  links: {
    github: "https://github.com/Omniwot",
    linkedin: "https://www.linkedin.com/in/harshal-a-omni/",
  },
} as const;

/** Short labels for frontpage nav cards */
export const homeLinks = [
  { to: "/work", label: "Work", blurb: "Roles & impact" },
  { to: "/projects", label: "Projects", blurb: "Agents & pipelines" },
  { to: "/skills", label: "Skills", blurb: "Stack & tools" },
  { to: "/contact", label: "Contact", blurb: "Say hello" },
] as const;

/** Career arc shown on the frontpage (latest → oldest, one stop each) */
export const timeline: TimelineEvent[] = [
  {
    year: "2025",
    label: "Theorem Labs",
    location: "Charlotte, NC",
    detail: "Forward Deployed Engineering",
  },
  {
    year: "2025",
    label: "Creatorain",
    location: "Champaign, IL / Remote",
    detail: "Cofounder, Data Lead · iVenture / createX",
  },
  {
    year: "2024",
    label: "Very Sweet Inc.",
    location: "Remote",
    detail: "AI Engineer · agentic OCR",
  },
  {
    year: "2024",
    label: "BIG, UIUC",
    location: "Champaign, IL",
    detail: "Project Manager · Graph RAG chatbot",
  },
  {
    year: "2024",
    label: "BayInfotech",
    location: "Livermore, CA",
    detail: "AI Software Engineer · RAG",
  },
  {
    year: "2022",
    label: "Cisco Systems",
    location: "Bangalore, India",
    detail: "SWE Intern · full-stack",
  },
  {
    year: "2022",
    label: "Zeeve Inc.",
    location: "Remote",
    detail: "Full Stack · GitHub Externship",
  },
];

export const experience: Role[] = [
  {
    title: "Programmer Analyst, Forward Deployed Engineering",
    company: "Theorem Labs",
    location: "Charlotte, NC",
    duration: "Aug 2025 — Present",
    points: [
      "Lead forward-deployed engineering for MetricStream, driving AI PoC partnerships and GRC pilot contracts valued at over $500K in total contract value.",
      "Own end-to-end delivery of client-facing AI prototypes from requirements discovery through architecture and deployment.",
      "Architect full-stack AI applications using Python, AWS, LangGraph, and React; tune prompts, caching, and retrieval for latency, accuracy, and cost.",
    ],
  },
  {
    title: "Cofounder, Data Lead",
    company: "Creatorain (iVenture 11, createX)",
    location: "Champaign, IL / Remote",
    duration: "Jan 2025 — Present",
    points: [
      "Built and maintained scalable data pipelines for influencer analytics, managing over 1M influencer profiles.",
      "Led product roadmap for matching and filtering features, managing a small technical team.",
    ],
  },
  {
    title: "AI Engineer",
    company: "Very Sweet Inc.",
    location: "Remote",
    duration: "Dec 2024 — Mar 2025",
    points: [
      "Engineered agentic workflows combining GCP Document AI OCR with LLM-driven parsing, reducing manual processing effort by 90%.",
      "Partnered with front-end engineers to integrate AI workflows into production web applications.",
    ],
  },
  {
    title: "Project Manager",
    company: "Business Intelligence Group (BIG), UIUC",
    location: "Champaign, IL",
    duration: "Sep 2024 — Present",
    points: [
      "Lead and mentor a team of consultants building a chatbot that analyzes large documents for a client, using Graph RAG and LLMs.",
      "Collaborate with stakeholders to design chatbot features aligned with client needs and industry standards.",
    ],
  },
  {
    title: "AI Software Engineer",
    company: "BayInfotech",
    url: "https://www.bay-infotech.com/",
    location: "Livermore, CA",
    duration: "May 2024 — Jul 2024",
    points: [
      "Optimized RAG pipelines by benchmarking retrieval models and tuning vector search across Elasticsearch, LangChain, Ray.io, and Pinecone.",
      "Built distributed data ingestion pipelines for multi-million record datasets, reducing ETL runtimes by 40%.",
    ],
  },
  {
    title: "SWE Intern",
    company: "Cisco Systems",
    url: "https://www.cisco.com/",
    location: "Bangalore, India",
    duration: "Aug 2022 — Dec 2022",
    points: [
      "Delivered micro-frontend implementations (React, Babel, Direflow).",
      "Built UI for a new product surface with React and Material UI.",
      "Automated web workflows and load testing with Python and Selenium.",
    ],
  },
  {
    title: "Full Stack Developer",
    company: "Zeeve Inc.",
    url: "https://www.zeeve.io/",
    location: "Remote",
    duration: "Apr 2022 — Aug 2022",
    points: [
      "Led a team of three on the client admin portal (Node, TypeScript, React, PostgreSQL).",
      "Integrated network and auth microservices into the portal.",
    ],
  },
  {
    title: "GitHub Extern",
    company: "Zeeve Inc.",
    url: "https://www.zeeve.io/",
    location: "Remote",
    duration: "Jan 2022 — Apr 2022",
    points: [
      "Selected for GitHub Externship ’22 Winter from 14k+ applicants.",
      "Built Polygon SDK PoC and admin portal frontend.",
      "Helped wire microservices for networks and authentication.",
    ],
  },
];

export const projects: Project[] = [
  {
    name: "Document Analysis Agent for Airline Pilots",
    description:
      "Led a cross-functional UIUC BIG team to ship a production-ready AI agent for airline pilots querying Collective Bargaining Agreements — RAG, graph search, and citation-backed LLM answers.",
    tags: ["RAG", "Graph", "LLMs", "PM"],
  },
  {
    name: "Browser Automation & Web Scraping Agent",
    description:
      "AI conversational agent for web scraping and browser control with Playwright and LangChain, plus PythonREPL, CSV, and Router tools.",
    tags: ["Playwright", "LangChain", "Agents"],
    url: "https://medium.com/@abhyankarharshal22/mastering-browser-automation-with-langchain-agent-and-playwright-tools-c70f38fddaa6",
  },
  {
    name: "Do I Know You?",
    description:
      "AI that remembers faces you meet — Buildspace Nights & Weekends S5.",
    tags: ["Python", "LangChain", "OpenAI"],
    url: "https://github.com/Omniwot/DoIKnowYou",
  },
  {
    name: "Chain-of-Verification",
    description:
      "Paper implementation of CoVe with DuckDuckGo-backed verification via LangChain LCEL.",
    tags: ["Python", "LangChain", "RAG"],
    url: "https://github.com/Omniwot/Chain-of-Verification_with_LCEL-DuckDuckGo",
  },
  {
    name: "GPT-4 Code Agent",
    description:
      "Autonomous Python interpreter/generator using OpenAI functions, PythonREPL, and router agents.",
    tags: ["Python", "LangChain", "Agents"],
  },
  {
    name: "F1 Analytics on Azure",
    description:
      "Medallion lakehouse with Databricks, Spark, ADF, and Power BI dashboards.",
    tags: ["Azure", "Spark", "Power BI"],
  },
  {
    name: "Resume NLP Classifier",
    description:
      "Compared BoW, TF-IDF, Word2Vec, and BERT for resume text classification.",
    tags: ["Python", "NLP", "BERT"],
  },
  {
    name: "NYC Taxi ETL",
    description:
      "Synapse ETL pipelines and Tableau/Power BI exploration of NYC taxi metrics.",
    tags: ["Azure", "Tableau", "ETL"],
  },
];

export const skillGroups = [
  {
    title: "Languages",
    slug: "lang",
    items: [
      "Python",
      "SQL",
      "TypeScript",
      "JavaScript",
      "R",
      "C",
      "C++",
      "LCEL",
    ],
  },
  {
    title: "AI / Agents",
    slug: "ai",
    items: [
      "LangGraph",
      "LangChain",
      "Mastra",
      "MCP",
      "RAG",
      "Graph RAG",
      "PyTorch",
      "Pinecone",
      "Elasticsearch",
      "Ray.io",
      "ElevenLabs",
      "Prompt tuning",
    ],
  },
  {
    title: "Cloud & stack",
    slug: "cloud",
    items: [
      "AWS Lambda",
      "S3",
      "Bedrock",
      "GCP",
      "Azure",
      "PostgreSQL",
      "FastAPI",
      "Node.js",
      "Docker",
      "React",
      "Next.js",
    ],
  },
  {
    title: "Delivery",
    slug: "ops",
    items: [
      "Forward-deployed AI",
      "PoC → production",
      "Client discovery",
      "ETL / pipelines",
      "Observability",
      "Cost / latency tuning",
    ],
  },
] as const;

export const education = [
  {
    school: "University of Illinois at Urbana-Champaign",
    degree: "M.S. Information Management",
    duration: "Aug 2023 — May 2025",
    detail:
      "GPA 4.00/4.00. Coursework: Applied Business Research, Data Statistics and Info, Methods of Data Science, DB Design & Prototyping.",
    url: "https://illinois.edu/",
  },
  {
    school: "Birla Institute of Technology and Science, Pilani",
    degree: "B.E. Electrical and Electronics",
    duration: "Aug 2019 — May 2023",
    detail:
      "GPA 3.59/4.00. Coursework: OS, IoT, Digital Image Processing, Multimedia Computing. IEEE publication co-authored with Dr. G.S.S. Chalapathi; one patent in process.",
    url: "https://www.bits-pilani.ac.in/",
  },
] as const;

export const credentials: Credential[] = [
  {
    title: "Azure Solutions Architect Expert (AZ-305)",
    org: "Microsoft",
    url: "https://learn.microsoft.com/api/credentials/share/en-us/HarshalAbhyankar-8339/A8A337BCE834EA82?sharingId",
  },
  {
    title: "Deep Learning Specialization",
    org: "Coursera / DeepLearning.AI",
    url: "https://www.coursera.org/",
  },
  {
    title: "Azure Data Engineer Associate",
    org: "Microsoft",
    url: "https://learn.microsoft.com/api/credentials/share/en-us/HarshalAbhyankar-8339/E2C5E82430A2F4C1?sharingId",
  },
  {
    title: "Azure Security Engineer Associate",
    org: "Microsoft",
    url: "https://learn.microsoft.com/api/credentials/share/en-us/HarshalAbhyankar-8339/88A87BD1A0F4AC4B?sharingId",
  },
  {
    title: "Azure Administrator Associate",
    org: "Microsoft",
    url: "https://learn.microsoft.com/api/credentials/share/en-us/HarshalAbhyankar-8339/79894CD555F9304?sharingId",
  },
];
