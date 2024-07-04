/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to true if you want to use the splash screen.
  useCustomCursor: false, // Change this to false if you want the good'ol cursor
  googleTrackingID: "", //UA-174238252-2
};

//Home Page
const greeting = {
  title: "Hello 👋!",
  title2: "Omniwot",
  logo_name: "O(n)iwot",
  nickname: "H",
  full_name: "Harshal Abhyankar",
  subTitle: " ML Engineer and Full Stack Developer . Always learning.",
  resumeLink: "https://www.linkedin.com/in/harhal-abhyankar-095b17198/",
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
      title: "Machine Learning and Data Science",
      fileName: "DataScienceImg",
      skills: [
        "🔶 Developing and deploying machine learning models using Python",
        "🔶 Building and maintaining data pipelines with Apache Spark and Azure Data Factory",
        "🔶 Performing data analysis and visualization with tools like PySpark and PowerBI",
        "🔶 Implementing Natural Language Processing (NLP) techniques for text classification",
        "🔶 Working with vector databases and advanced data retrieval methods for RAG",
        "🔶 Integrating third-party services such as Firebase, AWS, and MongoDB Cloud",
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
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
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
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#439743",
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
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
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
          skillName: "C",
          fontAwesomeClassname: "simple-icons:c",
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
        "🔶 Develop highly interactive Front end / User Interfaces for your web and mobile applications",
        "🔶 Building responsive website front end using ReactJS",
        "🔶 Developing mobile applications using Flutter in Android Studio",
        "🔶 Creating application backend in Node, Express & Postgresql",
        "🔶 Integration of third party services such as Firebase/ AWS / MongoDB Cloud",
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
          fontAwesomeClassname: "simple-icons:node-dot-js",
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
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Netlify",
          fontAwesomeClassname: "simple-icons:netlify",
          style: {
            color: "#38AFBB",
          },
        },
        {
          skillName: "Heroku",
          fontAwesomeClassname: "simple-icons:heroku",
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
        "🔶 My coursework in Fall 2023 includes Information Consulting by Prof. Yoo-Seong Song, Data Warehousing and Business Intelligence by Michael Wonderlich and Data Statistical Methods and Modelling by Stephanie Besser.   ",
        // "🔶 I have also completed various online courses for Backend , Web , Mobile App Development, etc.",
        // "🔶 I have implemented several projects based on what I've leart under my Computer Engineering course. ",
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
        "🔶 I have completed CS electives including Digital Image Processing, Operating Systems, Multimedia computing, Internet of Things and Human Resource Development.",
        "🔶 I have also completed various online courses for Backend , Web , Mobile App Development and Full Stack Development and implemented them in personal projects.",
        "🔶 I have worked with 2 startups and 2 MNCs throughout my undergraduate studies for practical experience.",
      ],
      website_link: "https://www.bits-pilani.ac.in/",
    },
  ],
};

const certifications = {
  certifications: [
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
          location: "Work From Home",
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
          location: "Work From Home",
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
          location: "Work From Home",
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
          location: "Work From Home",
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
    profile_image_path: "enigma.png",
    description:
      "You can contact me at the places mentioned below. I will try to get back to you as fast as I can. ",
  },
};

const projects = {
  data: [
    {
      id: "0",
      name:
        "IoT Based Precision Agriculture for weather alerts and Farm advisory",
      url: "",
      description: `Details of this project cannot be made public as its patent is being filed. `,
      languages: [
        {
          name: "NodeJs",
          iconifyClass: "logos-nodejs",
        },
        {
          name: "Augmented Reality",
          iconifyClass: "bi:badge-ar",
        },
      ],
      links: [
        {
          name: "Github",
          url: "",
          iconifyClass: "ri:github-fill",
        },
        // {
        //   name: "Devpost",
        //   url: "https://devpost.com/software/keep-calm-and-carry-on",
        //   iconifyClass: "fluent:window-dev-edit-20-filled",
        // },
        // {
        //   name: "Live Demo",
        //   url:
        //     "https://akshitagupta15june.github.io/Keep-Calm-and-Carry-On.github.io/",
        //   iconifyClass: "mdi:web",
        // },
      ],
    },
    {
      id: "1",
      name: "Options backtesting system using Numpy and Pandas",
      url: "https://github.com/kevalvavaliya/Yog4Life",
      description:
        "An app for helping people their healthy life. Yog4Life Has a feed feature which is help to get information from the folks, Yog4Life has an anonymous chat room to get connected with the world.",
      languages: [
        {
          name: "Flutter",
          iconifyClass: "logos-flutter",
        },
        {
          name: "NodeJs",
          iconifyClass: "logos-nodejs",
        },
      ],
      links: [
        {
          name: "Github",
          url: "https://github.com/kevalvavaliya/Yog4Life",
          iconifyClass: "ri:github-fill",
        },
        {
          name: "Devfolio",
          url: "https://devfolio.co/projects/yoglife-b20d",
          iconifyClass: "fluent:window-dev-edit-20-filled",
        },
      ],
    },
    {
      id: "2",
      name: "Options backtesting system using Numpy and Pandas",
      url:
        "Options backtesting system using Numpy and Pandas to test specific option chains for Iron butterfly strategy with a fifth dynamic leg for hedging.",
      description: "",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
      ],
      links: [
        {
          name: "Github",
          url: "",
          iconifyClass: "ri:github-fill",
        },
      ],
    },
    {
      id: "3",
      name: "Project Medcare",
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
    {
      id: "4",
      name: "IoT-Based Baby Monitoring System",
      url: "https://github.com/kevalvavaliya/Emosic",
      description:
        "An app that plays music according to your mood. Created a playlist management UI and used SpotifyAPI to control player client based on mood detection using ml model.",
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
      ],
      links: [
        {
          name: "Github",
          url: "https://github.com/kevalvavaliya/Emosic",
          iconifyClass: "ri:github-fill",
        },
        {
          name: "Devpost",
          url: "https://devpost.com/software/emosic",
          iconifyClass: "fluent:window-dev-edit-20-filled",
        },
      ],
    },
    {
      id: "5",
      name: "Fileblok",
      url: "https://github.com/harikanani/Fileblok",
      description:
        "Keep your projects moving with seamless transfer experice. FileBlok is a file transfer app that allows you to transfer files from one device to another without any hassle. We built this app using Flutter, Node.js and StoryBlok.",
      languages: [
        {
          name: "Flutter",
          iconifyClass: "logos-flutter",
        },
        {
          name: "NodeJs",
          iconifyClass: "logos-nodejs",
        },
        {
          name: "Storyblok",
          iconifyClass: "logos-storyblok-icon",
        },
      ],
      links: [
        {
          name: "Github",
          url: "https://github.com/harikanani/Fileblok",
          iconifyClass: "ri:github-fill",
        },
        {
          name: "Devpost",
          url: "https://devpost.com/software/fileblok",
          iconifyClass: "fluent:window-dev-edit-20-filled",
        },
      ],
    },
    {
      id: "6",
      name: "BAUDDIK-GEEKS PORTFOLIO",
      url: "https://github.com/Bauddhik-Geeks/Bauddhik-Geeks.github.io",
      description:
        "Awesome Community Portfolio website for Bauddhik-Geeks community",
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
      ],
      links: [
        {
          name: "Github",
          url: "https://github.com/Bauddhik-Geeks/Bauddhik-Geeks.github.io",
          iconifyClass: "ri:github-fill",
        },
        {
          name: "Live Demo",
          url: "https://bauddhikgeeks.co/",
          iconifyClass: "mdi:web",
        },
      ],
    },
    {
      id: "7",
      name: "Votechain",
      url: "https://github.com/abhigoyani/votechain",
      description:
        "Awesome Community Portfolio website for Bauddhik-Geeks community",
      languages: [
        {
          name: "Flask",
          iconifyClass: "logos-flask",
        },
        {
          name: "Python",
          iconifyClass: "logos-python",
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
          name: "MongoDB",
          iconifyClass: "logos-mongodb-icon",
        },
      ],
      links: [
        {
          name: "Github",
          url: "https://github.com/abhigoyani/votechain",
          iconifyClass: "ri:github-fill",
        },
      ],
    },
    {
      id: "3",
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
    {
      id: "9",
      name: "node-blockchain",
      url: "https://github.com/harikanani/node-blockchain",
      description:
        "A simple blockchain and cryptocurrency wallet implemented in Node.js and TypeScript (for learning purposes).",
      languages: [
        {
          name: "NodeJS",
          iconifyClass: "logos-nodejs",
        },
        {
          name: "TypeScript",
          iconifyClass: "skill-icons:typescript",
        },
      ],
      links: [
        {
          name: "Github",
          url: "https://github.com/harikanani/node-blockchain",
          iconifyClass: "ri:github-fill",
        },
      ],
    },
    {
      id: "10",
      name: "Know Me Well",
      url: "https://github.com/harikanani/personal-portfolio",
      description:
        "A simple command line interface based quiz app to know more about me :).",
      languages: [
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "NodeJS",
          iconifyClass: "logos-nodejs",
        },
        {
          name: "Repl.it",
          iconifyClass: "logos-replit-icon",
        },
      ],
      links: [
        {
          name: "Github",
          url: "https://github.com/harikanani/personal-portfolio",
          iconifyClass: "ri:github-fill",
        },
      ],
    },
    {
      id: "11",
      name: "Bloggify",
      url: "https://github.com/harikanani/Bloggify",
      description: "A Simple REST API for Blog Application.",
      languages: [
        {
          name: "NodeJS",
          iconifyClass: "logos-nodejs",
        },
      ],
      links: [
        {
          name: "Github",
          url: "https://github.com/harikanani/Bloggify",
          iconifyClass: "ri:github-fill",
        },
      ],
    },
    {
      id: "12",
      name: "Stargazzers",
      url: "https://github.com/harikanani/stargazers",
      description: "An Unofficial API for GitHub Repo Stars Count",
      languages: [
        {
          name: "NodeJs",
          iconifyClass: "logos-nodejs",
        },
      ],
      links: [
        {
          name: "Github",
          url: "https://github.com/harikanani/stargazers",
          iconifyClass: "ri:github-fill",
        },
      ],
    },
    {
      id: "13",
      name: "GitHub Portfolio",
      url: "https://github.com/harikanani/harikanani.github.io",
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
          url: "https://github.com/harikanani/harikanani.github.io",
          iconifyClass: "ri:github-fill",
        },
        {
          name: "Live Demo",
          url: "https://harikanani.github.io/",
          iconifyClass: "mdi:web",
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
