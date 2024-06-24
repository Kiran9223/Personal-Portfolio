import project1 from "../assets/projects/project1.jpg";
import project2 from "../assets/projects/project2.jpg";
import project3 from "../assets/projects/project3.jpg";

export const HERO_CONTENT = `Welcome to my portfolio! I'm Kiran Sukumar, a passionate and experienced software developer with a strong background in backend development and full-stack projects. Currently pursuing my Masters in Computer Science at California State University, Fullerton, I bring a wealth of knowledge and practical experience gained from my time at IBM. With a keen eye for detail and a commitment to delivering high-quality software solutions, I thrive in collaborative environments and enjoy tackling complex challenges. My experience spans developing scalable applications, performing migrations, optimizing performance, and integrating cutting-edge technologies.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2022 - Present",
    role: "Backend Developer",
    company: "IBM",
    description: ["Created RESTful APIs using Spring Boot that scaled up to 2000+ users accessing the API in a minute","Successfully performed the migration of a Java Struts application from Struts version 2.5 to 6.1",
      "Mappedout user requirements to reorganize database schemas and increase consistency of performance results, which yielded a 60% improvement in efficiency",
      "Utilized webhook to successfully integrate Slack application with GitHub code repository to receive notifications whenever pull requests are created and code is merged",
      " Worked extensively in a DevOps environment, proficiently leveraging Docker to containerize applications and facilitate deployments on the IBM Public Cloud through efficient CI/CD pipelines"
    ],
    technologies: ["Java", "Spring Boot", "REST API", "Struts", "Db2", "IBM Public Cloud"],
  },
  {
    year: "2020 - 2022",
    role: "Software Developer",
    company: "IBM",
    description: ["Developed and maintained Java Spring MVC-based server-side applications",
      "Consolidated existing codebase with clean up and eliminated redundant modules, optimizing performance by 30%",
      "Implemented complex business logic and workflows using java and spring framework",
      "Migrated legacy application which was built using JSF to Angular which improved user experience",
      "Created dynamic and user-friendly web pages using Angular framework"
    ],
    technologies: ["Java", "Angular", "Spring MVC", "Db2"],
  },
];

export const PROJECTS = [
  {
    title: "Discussion-Hub",
    image: project1,
    description:
      ` Discussion Hub is a social news website and forum where the content posted by a user is socially
        curated and promoted by voting. Discussion hub is a full-stack project in which emailing features are also included.`,
    technologies: ["Java", "Spring Boot", "Angular","MySQL"],
  },
  {
    title: "ChatRoom",
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
  email: "ks12.dev@gmail.com",
};