import project1 from "../assets/projects/project1.jpg";
import project2 from "../assets/projects/project2.jpg";
import project3 from "../assets/projects/project3.jpg";
import project4 from "../assets/projects/Stratosphere.png";

export const HERO_CONTENT = `Welcome to my portfolio! I'm Kiran Sukumar, a passionate and experienced software developer with a strong background in backend development and full-stack projects. Currently pursuing my Masters in Computer Science at California State University, Fullerton, I bring a wealth of knowledge and practical experience gained from my time at IBM. With a keen eye for detail and a commitment to delivering high-quality software solutions, I thrive in collaborative environments and enjoy tackling complex challenges. My experience spans developing scalable applications, performing migrations, optimizing performance, and integrating cutting-edge technologies.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2022 - Present",
    role: "Back-end Developer",
    company: "IBM",
    description: ["Developed and optimized RESTful APIs using Java and Spring Boot, scaled to handle over 3000 users per minute, ensuring seamless performance and reliability in high-traffic environments","Created dynamic web pages using Angular and React which enabled seamless user experience",
      "Migrated the codebase from Java 8 to Java 11 by updating deprecated APIs, refactoring critical components, and leveraging new Java features, resulting in a 20% performance boost and enhanced security",
      "Deployed applications on AWS using EC2, S3, Docker, and Kubernetes while leveraging AWS Lambda for serverless execution and automating deployments through CI/CD pipelines, ensuring scalability and security",
      "Leveraged Kafka Streams to process and analyze event-driven data, enabling efficient handling of high-throughput transactional data and reducing system latency",
      "Implemented OAuth2 authentication and authorization for secure access to APIs, ensuring data privacy and compliance with industry standards",
      "Integrated IBM's WatsonX generative AI to develop functionality that summarized email chains of up to 20 emails into concise 5-sentence paragraphs, significantly reducing users' time manually reading each email",
      "Redesigned and optimized database schemas for IBM DB2 and MongoDB, leading to a 60% increase in query efficiency and improved platform performance",
      "Conducted root cause analysis to identify software bugs, resulting in a 25% improvement in code stability through effective fixes",
      "Collaborated in a Scrum-based Agile environment, leveraging JIRA for sprint planning, backlog grooming, and issue tracking, which streamlined development workflows and enabled on-time feature delivery",
      "Implemented Test-Driven Development (TDD) to write unit and integration tests before feature implementation, ensuring high code quality, early bug detection, and maintaining a robust test suite that improved code coverage by 30%"
    ],
    technologies: ["Java", "Spring Boot", "REST API", "Angular", "ReactJs", "Db2", "IBM Public Cloud"],
  },
  // {
  //   year: "2020 - 2022",
  //   role: "Software Developer",
  //   company: "IBM",
  //   description: ["Developed and maintained Java Spring MVC-based server-side applications",
  //     "Consolidated existing codebase with clean up and eliminated redundant modules, optimizing performance by 30%",
  //     "Implemented complex business logic and workflows using java and spring framework",
  //     "Migrated legacy application which was built using JSF to Angular which improved user experience",
  //     "Created dynamic and user-friendly web pages using Angular framework"
  //   ],
  //   technologies: ["Java", "Angular", "Spring MVC", "Db2"],
  // },
];

export const PROJECTS = [
  {
    title: "Stratoshpere",
    image: project4,
    description:
      `Developed a backend system using FastAPI and asynchronous programming to manage cloud service access dynamically, integrating JWT - based authentication, authorization, and role-based access control (RBAC) for secure and efficient user subscription management.
       Implemented real-time usage tracking and access regulation by simulating cloud services, enforcing subscription plan limits, and providing admin functionalities to manage subscription plans, permissions, and user access seamlessly.`,
    technologies: ["Python", "FastAPI", "JWT","Oauth2","MySQL"], 
  },
  {
    title: "Discussion-Hub",
    image: project1,
    description:
      ` Discussion Hub is a social news website and forum where the content posted by a user is socially
        curated and promoted by voting. Discussion hub is a full-stack project in which emailing features are also included.`,
    technologies: ["Java", "Spring Boot", "Angular","MySQL"],
  },
  {
    title: "Chat Room",
    image: project2,
    description:
      "Chat Room is a web application that enables users to communicate with each other in real time.",
    technologies: ["Java", "Spring Boot", "Web Socket", "React"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["React", "Tailwind CSS"],
  },
];

export const CONTACT = {
  phoneNo: "+000000000000",
  email: "kirann9223@gmail.com",
};

export const RESUME = "https://drive.google.com/file/d/1Z-EMoozIrs4cLQXfLMb8kjKIhTtHDeHi/view?usp=sharing";