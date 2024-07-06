/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to true if you want to use the splash screen.
  useCustomCursor: false, // Change this to false if you want the good'ol cursor
  googleTrackingID: "", //UA-174238252-2
};

//Home Page
const greeting = {
  title: "Hello👋!",
  title2: "Omniwot",
  logo_name: "O(n)iwot",
  nickname: "H",
  full_name: "Harshal Abhyankar(Omniwot)",
  subTitle: `
Master's student at UIUC, ML Engineer and 
Full Stack Developer. Always learning.`,
  resumeLink: "https://www.linkedin.com/in/harshal-abhyankar-095b17198/",
  mail: "mailto:abhyankarharshal22.gaming@gmail.com",
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/omniwot",
  linkedin: "https://www.linkedin.com/in/harshal-abhyankar-095b17198/",
  gmail: "abhyankarharshal22.gaming@gmail.com",
  //instagram: "https://www.instagram.com/harshal_omni/",
};

const skills = {
  data: [
    {
      title: "ML and Data Science",
      fileName: "DataScienceImg",
      skills: [
        `🔶 Developing and deploying machine learning models using
       Python`,
        `🔶 Building and maintaining data pipelines with Azure 
       Databricks, Apache Spark and Azure Data Factory`,
        `🔶 Performing data analysis and visualization with tools 
       like PySpark and PowerBI`,
        `🔶 Implementing Natural Language Processing (NLP) techniques 
       for text classification`,
        `🔶 Working with vector databases and advanced data retrieval 
       methods for RAG`,
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: {
            color: "#3776AB",
          },
        },
        {
          skillName: "SQL",
          fontAwesomeClassname: "simple-icons:databricks",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "R",
          fontAwesomeClassname: "simple-icons:r",
          style: {
            color: "#276DC3",
          },
        },
        {
          skillName: "Apache Spark",
          fontAwesomeClassname: "simple-icons:apachespark",
          style: {
            color: "#E25A1C",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Langchain",
          fontAwesomeClassname: "simple-icons:langchain",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "OpenAI API",
          fontAwesomeClassname: "simple-icons:openai",
          style: {
            color: "#412991",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },

        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "Streamlit",
          fontAwesomeClassname: "simple-icons:streamlit",
          style: {
            color: "#E25A1C",
          },
        },
        {
          skillName: "Ray.io",
          fontAwesomeClassname: "simple-icons:ray",
          style: {
            color: "#A8B9CC",
          },
        },
        {
          skillName: "C++",
          fontAwesomeClassname: "simple-icons:cplusplus",
          style: {
            color: "#00599C",
          },
        },
      ],
    },
    {
      title: "Backend Development",
      fileName: "FullStackImg",
      skills: [
        `🔶 Develop highly interactive Front end / User Interfaces 
       for your web and mobile applications`,
        `🔶 Building responsive website front end using ReactJS`,
        `🔶 Creating application backend in Node, Express 
       & Postgresql`,
        `🔶 Integration of third party services such as 
       Firebase/ AWS / MongoDB Cloud`,
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#FFFFFF",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:nodedotjs",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#439743",
          },
        },
        {
          skillName: "Android",
          fontAwesomeClassname: "simple-icons:android",
          style: {
            color: "#3DDC84",
          },
        },
        // {
        //   skillName: "Java",
        //   fontAwesomeClassname: "simple-icons:java",
        //   style: {
        //     color: "#f89820",
        //   },
        // },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1",
          },
        },
        // {
        //   skillName: "jQuery",
        //   fontAwesomeClassname: "simple-icons:jquery",
        //   style: {
        //     color: "#0865A6",
        //   },
        // },
        {
          skillName: "Apache",
          fontAwesomeClassname: "simple-icons:apache",
          style: {
            color: "#CA1A22",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "C",
          fontAwesomeClassname: "simple-icons:c",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "C++",
          fontAwesomeClassname: "simple-icons:cplusplus",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: {
            color: "#3776AB",
          },
        },
      ],
    },

    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "🔶 Experience working on multiple cloud platforms",
        "🔶 Experience hosting and managing websites",
        "🔶 Experience with Continuous Integration",
      ],
      softwareSkills: [
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#6863A6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "GitHub Actions",
          fontAwesomeClassname: "simple-icons:githubactions",
          style: {
            color: "#5b77ef",
          },
        },
      ],
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "University of Illinois Urbana Champaign",
      subtitle: "Master of Science in Information Management",
      logo_path: "uiuc.png",
      alt_name: "UIUC",
      duration: "Fall 2023 - Present",
      descriptions: [
        "🔶 I'm currently pursuing my masters in Information Management.",
        "🔶 My coursework includes Methods of Data Science, Database Design and Prototyping, Information Consulting, Data Warehousing and Business Intelligence and Data Statistical Methods and Modelling by Stephanie Besser.   ",
        "🔶 I have also completed various online courses for Frontend/Backend Web Development, Computer Vision, Retrieval Augmented Generation and LLMs.",
        "🔶 I have implemented several projects and earned certifications from Microsoft in Data Engineering and Analytics.",
      ],
      website_link: "https://illinois.edu/",
    },
    {
      title: "Birla Institute of Technology and Science, Pilani",
      subtitle: "Bachelor of Engineering in Electrical and Electronics",
      logo_path: "bits.png",
      alt_name: "BITS Pilani",
      duration: "2019 - 2023",
      descriptions: [
        "🔶 I have completed CS electives including Digital Image Processing, Operating Systems, Multimedia computing, and Internet of Things.",
        "🔶 I have also completed various online courses for Backend , Web , Mobile App Development and Full Stack Development and implemented them in personal projects.",
        "🔶 I have worked with 2 startups and 2 MNCs during my undergraduate studies for practical experience.",
      ],
      website_link: "https://www.bits-pilani.ac.in/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Microsoft Certified Azure Solutions Architect Expert",
      subtitle: "Azure Cloud",
      logo_path: "azure-architect-expert.png",
      certificate_link:
        "https://learn.microsoft.com/api/credentials/share/en-us/HarshalAbhyankar-8339/A8A337BCE834EA82?sharingId",
      alt_name: "certification",
      color_code: "#2AAFEE",
    },
    {
      title: "Microsoft Certified Azure Data Engineer Associate",
      subtitle: "Azure Cloud",
      logo_path: "azure-data.png",
      certificate_link:
        "https://learn.microsoft.com/api/credentials/share/en-us/HarshalAbhyankar-8339/E2C5E82430A2F4C1?sharingId",
      alt_name: "certification",
      color_code: "#2AAFEE",
    },
    {
      title: "Microsoft Certified Azure Security Engineer Associate",
      subtitle: "Azure Cloud",
      logo_path: "azure-security-engineer.png",
      certificate_link:
        "https://learn.microsoft.com/api/credentials/share/en-us/HarshalAbhyankar-8339/88A87BD1A0F4AC4B?sharingId",
      alt_name: "certification",
      color_code: "#2AAFEE",
    },
    {
      title: "Microsoft Certified Azure Administrator Associate",
      subtitle: "Azure Cloud",
      logo_path: "azure-admin.png",
      certificate_link:
        "https://learn.microsoft.com/api/credentials/share/en-us/HarshalAbhyankar-8339/79894CD555F9304?sharingId",
      alt_name: "certification",
      color_code: "#2AAFEE",
    },
    {
      title: " LLMs Mastery: Complete Guide to Transformers & Generative AI",
      subtitle: "Udemy",
      logo_path: "udemy.png",
      certificate_link:
        "https://www.udemy.com/certificate/UC-b50b8926-3e75-4a15-847b-ab2419dede65/",
      alt_name: "certificate",
      color_code: "#7a33e0",
    },
    {
      title: "Python and Statistics for Financial Analysis",
      subtitle: "Python/Finance",
      logo_path: "Coursera1.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/WXD3KTNYVN9B",
      alt_name: "certificate",
      color_code: "#2AAFEE",
    },
    {
      title: "Alphaverse",
      subtitle: "Alphathon",
      logo_path: "flutter.png",
      certificate_link: "",
      alt_name: "Alphathon",
      color_code: "#2AAFED",
    },
    {
      title: "Financial Markets",
      subtitle: "Finance-Yale",
      logo_path: "Coursera1.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/XEL627JG42EH",
      alt_name: "certificate",
      color_code: "#2AAFEE",
    },
    {
      title: "Data Structures and Algorithms",
      subtitle: "DSA",
      logo_path: "Coursera1.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/AYG4ZF8DS3JS",
      alt_name: "certificate",
      color_code: "#2AAFEE",
    },
    {
      title: "Machine Learning",
      subtitle: "ML",
      logo_path: "Coursera1.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/U6CGPJRUELPJ",
      alt_name: "certificate",
      color_code: "#2AAFEE",
    },
    {
      title: "Server-side development with NodeJS,Express and MongoDB",
      subtitle: "Backend",
      logo_path: "Coursera1.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/5ZFE79DQJAGZ",
      alt_name: "certificate",
      color_code: "#2AAFEE",
    },
    {
      title: "Javascript DSA",
      subtitle: "DSA",
      logo_path: "fcc.png",
      certificate_link:
        "https://www.freecodecamp.org/certification/fccef56bd66-03e4-46de-8ee3-4275ac796cb5/javascript-algorithms-and-data-structures",
      alt_name: "Freecodecamp",
      color_code: "#FFFFFF",
    },
    {
      title: "Responsive Web Design",
      subtitle: "Web Development",
      logo_path: "fcc.png",
      certificate_link:
        "https://www.freecodecamp.org/certification/omniwot/responsive-web-design",
      alt_name: "Freecodecamp",
      color_code: "#FFFFFF",
    },
    {
      title: "Postman Student Expert",
      subtitle: "Postman",
      logo_path: "postman.png",
      certificate_link:
        "https://api.badgr.io/public/assertions/b_HANf0ZQfuYq0Elq4TX-Q?identity__email=abhyankarharshal22%40gmail.com",
      alt_name: "Postman",
      color_code: "#fffbf3",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I've completed 4 internships during my UG studies at BITS Pilani. I've mostly done projects on my own and I am actively looking for internships. I love organizing workshops to share my knowledge with others.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work Experience",
      experiences: [
        {
          title: "SWE Intern (ML/AI)",
          company: "BayInfotech",
          company_url: "https://www.bay-infotech.com/",
          logo_path: "bay_infotech.png",
          duration: "May 2024 - Present",
          location: "Livermore, California",
          description: `•	Researching vector databases and data retrieval methods for advanced Retrieval Augmented Generation.
•	Creating data pipelines to ingest data using various embedding techniques into vector databases.
•	Leading a team of engineers and researchers to develop MVPs of experimental RAG methods.
`,
          color: "#0071C5",
        },
        {
          title: "SWE Intern",
          company: "Cisco Systems (India)",
          company_url: "https://www.cisco.com/",
          logo_path: "cisco.png",
          duration: "August 2022 - Dec 2022",
          location: "Bangalore, India",
          description: `• Created micro-frontend implementations of existing frontends of an application. (ReactJS, Babel, Direflow)
• Assisted in UI and Frontend development of a new project. (ReactJS, Material UI, HTML, CSS)
• Worked on Automation testing of web workflows and load testing. (Python, Selenium) and manual testing.
        `,
          color: "#0071C5",
        },
        {
          title: "Full Stack Developer",
          company: "Zeeve Inc.",
          company_url: "https://www.zeeve.io/",
          logo_path: "zeeve.png",
          duration: "April 2022 - August 2022",
          location: "Remote",
          description: `• I was rehired by Zeeve after my externship ended to continue working on their admin portal.
• Led a team of three to develop and design client admin portal (NodeJS, Typescript, ReactJS, PostgreSQL)
• Assisted in integration of multiple microservices related to networks and authentication with portal (NodeJS, PostgreSQL)`,
          color: "#ee3c26",
        },
        {
          title: "Github Extern at Zeeve Inc.",
          company: "Zeeve Inc.",
          company_url: "https://www.zeeve.io/",
          logo_path: "zeeve.png",
          duration: "January 2022 - April 2022",
          location: "Remote",
          description: `• One of the students selected for the GitHub Externship '22 Winter Cohort out of 14k+ applications. 
• Worked on a Polygon SDK based PoC and design client admin portal frontend (ReactJS, Material UI, Bootstrap) 
• Assisted in integration of multiple microservices related to networks and authentication with portal (NodeJS, PostgreSQL)`,
          color: "#ee3c26",
        },
        {
          title: "Full Stack Developer",
          company: "Phigent LLC",
          company_url: "https://www.cybervardan.com/",
          logo_path: "cyber.png",
          duration: "January 2022 - April 2022",
          location: "Los Altos, CA (Remote)",
          description: `• One of the students selected for the GitHub Externship '22 Winter Cohort out of 14k+ applications. 
• Worked on a Polygon SDK based PoC and design client admin portal frontend (ReactJS, Material UI, Bootstrap) 
• Assisted in integration of multiple microservices related to networks and authentication with portal (NodeJS, PostgreSQL)`,
          color: "#ee3c26",
        },
        {
          title: "Research Intern (IIOT Division)",
          company: "L&T Infotech (now LTI Mindtree)",
          company_url: "https://www.ltimindtree.com/",
          logo_path: "cyber.png",
          duration: "January 2022 - April 2022",
          location: "Mumbai, India",
          description: `• One of the students selected for the GitHub Externship '22 Winter Cohort out of 14k+ applications. 
• Worked on a Polygon SDK based PoC and design client admin portal frontend (ReactJS, Material UI, Bootstrap) 
• Assisted in integration of multiple microservices related to networks and authentication with portal (NodeJS, PostgreSQL)`,
          color: "#ee3c26",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Volunteer Teacher and Member",
          company: "NSS, BITS Pilani",
          company_url: "https://nssbitspilani.org/departments/School",
          logo_path: "nss.png",
          duration: "August 2019 - September 2021",
          location: "BITS, Pilani",
          description: `• Taught local students Math, Chemistry and Physics for 1.5 hours per day 3 days a week. 
• Assisted in all NSS events including UDAAN 2k19, Junoon 2k19 and Blood donation camps`,
          color: "#FBBD18",
        },
        {
          title: "Music Coordinator",
          company: "Maharashtra Mandal",
          company_url: "",
          logo_path: "mandal.png",
          duration: "August 2020 - September 2021",
          location: "BITS, Pilani",
          description: `• Organized and planned musical events, recitals, and performances.
• Coordinated logistics for events, including music selections, equipment setup, and scheduling`,
          color: "#4285F4",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects are created a vast variety of latest tech stacks. I have most experience with Javascript, Python and C based tech stacks. Below are some of my projects. Note that some of my mentioned research projects are not on GitHub.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "file.jpg",
    description:
      "You can contact me at the places mentioned below. I will try to get back to you as fast as I can. ",
  },
};

const projects = {
  data: [
    {
      id: "0",
      name: "Do I Know You?",
      url: "https://github.com/Omniwot/DoIKnowYou",
      description: `Currently working on an AI that remembers every face you meet for Builspace Nights&Weekends s5.`,
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "LangChain",
          iconifyClass: "simple-icons:langchain",
        },
        {
          name: "OpenAI API",
          iconifyClass: "simple-icons:openai",
        },
      ],
      links: [
        {
          name: "Github",
          url: "https://github.com/Omniwot/DoIKnowYou",
          iconifyClass: "ri:github-fill",
        },
      ],
    },
    {
      id: "1",
      name: "Chain-of-Verification with Langchain, Python and DuckDuckGoSearch",
      url:
        "https://github.com/Omniwot/Chain-of-Verification_with_LCEL-DuckDuckGo",
      description: `This is an implementation of Chain-of-Verification, from this research paper (https://arxiv.org/abs/2309.11495) with addition of DuckDuckGoSearch based verification.`,
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "LangChain",
          iconifyClass: "simple-icons:langchain",
        },
        {
          name: "OpenAI API",
          iconifyClass: "simple-icons:openai",
        },
      ],
      links: [
        {
          name: "Github",
          url:
            "https://github.com/Omniwot/Chain-of-Verification_with_LCEL-DuckDuckGo",
          iconifyClass: "ri:github-fill",
        },
      ],
    },
    {
      id: "2",
      name: "GPT4 based Autonomous Python Code Interpreter and Generator Agent",
      url: "",
      description: `Engineered an AI system using GPT-4 for automated Python code interpretation and generation, leveraging OpenAI Functions and LangChain. Enhanced coding efficiency by integrating PythonREPL, CSV, and Router Agents, into a unified Agent framework.
      `,
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "LangChain",
          iconifyClass: "simple-icons:langchain",
        },
        {
          name: "OpenAI API",
          iconifyClass: "simple-icons:openai",
        },
      ],
      links: [],
    },
    {
      id: "3",
      name: "F1 Data Analytics with Azure Databricks and Data Factory",
      url: "",
      description: `Developed end-to-end data analytics solution with Azure Databricks, Apache Spark, ADLS, and Azure Data Factory. Implemented medallion architecture leveraging PySpark and Spark SQL for data ingestion, transformation, and analysis connected to PowerBI for analytical dashboards.`,
      languages: [
        {
          name: "Azure",
          iconifyClass: "vscode-icons:file-type-azure",
        },
        {
          name: "Apache Spark",
          iconifyClass: "logos-apache-spark",
        },
        {
          name: "PowerBI",
          iconifyClass: "logos-power-bi",
        },
      ],
      links: [],
    },
    {
      id: "4",
      name: "Loan Defaults Analysis and Prediction",
      url: "",
      description: `Implemented data cleaning, feature engineering, and analytical methods to gain valuable insights into Loan defaults. Applied and compared various machine learning algorithms to determine the best predictive models.`,
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "Numpy",
          iconifyClass: "logos-numpy",
        },
        {
          name: "Pandas",
          iconifyClass: "logos-pandas",
        },
        {
          name: "Scikit learn",
          iconifyClass: "logos-scikit-learn",
        },
        {
          name: "Scipy",
          iconifyClass: "logos-scipy",
        },
        {
          name: "Seaborn",
          iconifyClass: "logos-seaborn",
        },
        {
          name: "Matplotlib",
          iconifyClass: "logos-matplotlib",
        },
      ],
      links: [],
    },
    {
      id: "5",
      name: "Resume Classification using NLP Techniques",
      url: "",
      description: `Performed comparative analysis between Bag of Words, IDF, Word2Vec and basic BERT models for text classification. Created pre-processing pipeline, performed text cleaning and applied varied encoding and tokenization techniques.`,
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "NLP",
          iconifyClass: "vscode-icons:file-type-nlp",
        },
      ],
      links: [],
    },
    {
      id: "6",
      name: "Analytical Dashboards and ETL Pipelines with NYC Taxi Data",
      url: "",
      description: `Engineered ETL pipelines to streamline data processing, ensuring data reliability using Azure Synapse Analytics. Developed intuitive analytical dashboards using Tableau and PowerBI, enabling exploration of NYC taxi metrics.`,
      languages: [
        {
          name: "Azure",
          iconifyClass: "vscode-icons:file-type-azure",
        },
        {
          name: "Tableau",
          iconifyClass: "logos-tableau",
        },
        {
          name: "PowerBI",
          iconifyClass: "logos-power-bi",
        },
      ],
      links: [],
    },
    {
      id: "7",
      name:
        "IoT Based Precision Agriculture for weather alerts and Farm advisory",
      url: "",
      description: `Details of this project cannot be made public as its patent is being filed.`,
      languages: [
        {
          name: "NodeJs",
          iconifyClass: "logos-nodejs",
        },
        {
          name: "Arduino",
          iconifyClass: "logos-arduino",
        },
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
        {
          name: "NodeMCU",
          iconifyClass: "logos-esp8266",
        },
      ],
      links: [],
    },
    {
      id: "8",
      name: "Options backtesting system using Numpy and Pandas",
      url: "",
      description: `Options backtesting system using Numpy and Pandas to test specific option chains for Iron butterfly strategy with a fifth dynamic leg for hedging.`,
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "Numpy",
          iconifyClass: "logos-numpy",
        },
        {
          name: "Pandas",
          iconifyClass: "logos-pandas",
        },
      ],
      links: [],
    },
    {
      id: "9",
      name: "Project Medcare",
      url: "https://github.com/Omniwot/Project_Medcare",
      description:
        "This project is an implementation of Healthcare pricing engine that searches prices according to CPT codes of medical procedures or their description. We can also strore redacted versions of medical bills to collect pricing data from consumers using google cloud redaction engine. ",
      languages: [
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
        {
          name: "HTML5",
          iconifyClass: "logos-html-5",
        },
        {
          name: "CSS3",
          iconifyClass: "logos-css-3",
        },
        {
          name: "NodeJs",
          iconifyClass: "logos-nodejs",
        },
      ],
      links: [
        {
          name: "Github",
          url: "https://github.com/Omniwot/Project_Medcare",
          iconifyClass: "ri:github-fill",
        },
      ],
    },
    {
      id: "10",
      name: "IoT-Based Baby Monitoring System",
      url: "https://github.com/Omniwot/IoTBased-BabyMonitoringSystem",
      description: `An app that plays music according to your mood. Created a playlist management UI and used SpotifyAPI to control player client based on mood detection using ML model.`,
      languages: [
        {
          name: "HTML5",
          iconifyClass: "logos-html-5",
        },
        {
          name: "CSS3",
          iconifyClass: "logos-css-3",
        },
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "Arduino",
          iconifyClass: "logos-arduino",
        },
      ],
      links: [
        {
          name: "Github",
          url: "https://github.com/Omniwot/IoTBased-BabyMonitoringSystem",
          iconifyClass: "ri:github-fill",
        },
      ],
    },
    {
      id: "11",
      name: "GitHub Portfolio",
      url: "https://omniwot.github.io",
      description:
        "A Personal Portfolio Website that showcases my work and experience. which is hosted on Github Pages.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "SCSS",
          iconifyClass: "vscode-icons:file-type-scss2",
        },
      ],
      links: [
        {
          name: "Github",
          url: "https://github.com/omniwot/omniwot.github.io",
          iconifyClass: "ri:github-fill",
        },
        {
          name: "Live Demo",
          url: "https://omniwot.github.io/",
          iconifyClass: "mdi:web",
        },
      ],
    },
    {
      id: "10",
      name: "Hacker News",
      url: "https://github.com/Omniwot/hackerNewsReact",
      description: "Hacker News Clone using React.",
      languages: [
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
        {
          name: "HTML5",
          iconifyClass: "logos-html-5",
        },
        {
          name: "CSS3",
          iconifyClass: "logos-css-3",
        },
        {
          name: "NodeJs",
          iconifyClass: "logos-nodejs",
        },
      ],
      links: [
        {
          name: "Github",
          url: "https://github.com/Omniwot/hackerNewsReact",
          iconifyClass: "ri:github-fill",
        },
      ],
    },
  ],
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
  projects,
};
