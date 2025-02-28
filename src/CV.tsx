import { AcademicExperienceProps } from "./AcademicExperience";
import { WorkExperienceProps } from "./WorkExperience";

type CV = {
  name: string;
  mail: string;
  github: string;
  linkedin: string;
  resume: string;
  experiences: WorkExperienceProps[];
  educations: AcademicExperienceProps[];
  languages: {
    name: string;
    level: string;
  }[];
  skills: {
    name: string;
    skills: {
      name: string;
      subskills?: string[];
    }[];
  }[];
}

export default {
  name: "Marco Lúcio de Carvalho Júnior",
  mail: "marcolucio27@gmail.com",
  github: "marco-carvalho",
  linkedin: "marco-carvalho",
  resume:
    "A computer scientist passionate about web development, motivated by the good uses of new technologies, with extensive experience in the financial market, an open-source enthusiast, and focused on improving and applying my knowledge and skills in opportunities that help me grow professionally.",
  experiences: [
    {
      company: "Nubank",
      position: "Software Engineer",
      from: new Date(2025, 0, 1),
      to: null,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec elementum magna non nisl interdum, sit amet finibus eros volutpat. Praesent vestibulum elit erat, quis placerat nibh venenatis sit amet. Sed semper feugiat ipsum, non pharetra augue gravida ac.",
    },
    {
      company: "Turim MFO",
      position: "Lead Software Engineer",
      from: new Date(2019, 5, 1),
      to: new Date(2024, 11, 1),
      description:
        "Developed web and mobile apps, managing systems, CI/CD, cloud, and aligning tech with business goals, while overseeing hiring, mentoring, risk, code quality, and team culture.",
    },
    {
      company: "BTG Pactual",
      position: "Junior Software Engineer",
      from: new Date(2019, 0, 1),
      to: new Date(2019, 5, 1),
      description:
        "Developed and maintained interfaces and APIs for Asset Management, Wealth Management, and Investment Banking, enhancing user experience and efficiency.",
    },
    {
      company: "Stone Pagamentos",
      position: "Junior Software Engineer",
      from: new Date(2018, 7, 1),
      to: new Date(2018, 11, 1),
      description:
        "Developed interfaces and APIs for monitoring transactional behavior in the Risk squad, improving fraud detection and prevention.",
    },
    {
      company: "Banco Modal",
      position: "Intern Software Engineer",
      from: new Date(2017, 5, 1),
      to: new Date(2018, 6, 1),
      description:
        "Contributed to the Digital Bank project, developing services and APIs, creating internal system functionalities, and initiating Headless CMS projects.",
    },
    {
      company: "CEFET/RJ",
      position: "Undergraduate Researcher",
      from: new Date(2017, 0, 1),
      to: new Date(2017, 5, 1),
      description:
        "Implemented the Machine Learning framework Diffusion Map for dimensionality reduction, analyzing datasets like the Iris flower dataset and astronomical data.",
    },
    {
      company: "Itaú Unibanco",
      position: "Intern Software Engineer",
      from: new Date(2015, 0, 1),
      to: new Date(2016, 11, 1),
      description:
        "Developed and maintained web projects for Social Security clients, focusing on bug fixes and performance improvements.",
    },
  ],
  educations: [
    {
      university: "CEFET/RJ",
      degree: "Bachelor's Degree",
      course: "Computer Science",
      from: new Date(2012, 5),
      to: new Date(2018, 11),
    },
  ],
  languages: [
    { name: "Portuguese", level: "fluent" },
    { name: "English", level: "advanced" },
    { name: "Spanish", level: "basic" },
  ],
  skills: [
    {
      name: "Front End",
      skills: [
        { name: "HTML" },
        { name: "CSS", subskills: ["Tailwind"] },
        { name: "Javascript", subskills: ["Typescript", "React"] },
        { name: "Mobile", subskills: ["React Native"] },
      ],
    },
    {
      name: "Back End",
      skills: [
        { name: "C#", subskills: [".NET"] },
        { name: "Node.js", subskills: ["Express"] },
        { name: "Python", subskills: ["FastAPI", "Flask"] },
        { name: "Clojure" },
      ],
    },
    {
      name: "Database",
      skills: [
        { name: "SQL", subskills: ["SQL Server", "Postgres"] },
        { name: "NoSQL", subskills: ["Redis", "Datomic"] },
      ],
    },
    {
      name: "DevOps",
      skills: [
        {
          name: "AWS",
          subskills: [
            "S3",
            "Cognito",
            "WAF",
            "API Gateway",
            "IAM",
            "Lambda",
            "CloudWatch",
            "X-Ray",
            "RDS",
          ],
        },
        { name: "Message Broker", subskills: ["RabbitMQ"] },
        { name: "Infra as Code", subskills: ["Docker", "Terraform"] },
        { name: "Linux", subskills: ["Ubuntu"] },
        { name: "Web Server", subskills: ["IIS", "Nginx"] },
        { name: "CI/CD", subskills: ["GitHub Actions", "TeamCity"] },
        { name: "Monitoring", subskills: ["Grafana", "Zabbix"] },
        { name: "Code Quality", subskills: ["SonarQube"] },
      ],
    },
  ],
} as CV;
