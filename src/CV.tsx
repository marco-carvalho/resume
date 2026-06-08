import { AcademicExperienceProps } from "./AcademicExperience";
import { WorkExperienceProps } from "./WorkExperience";

type CV = {
  name: string;
  mail: string;
  github: string;
  linkedin: string;
  resume: string;
  about: string;
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
  about:
    "Over 10+ years in financial technology, I worked across banks, payments, asset management, and business banking platforms, from internships to senior and lead engineering roles. I was responsible for building, maintaining, and scaling reliable web, mobile, backend, and platform solutions that supported critical financial workflows for internal teams, external clients, and business customers. I developed features, APIs, microservices, frontend applications, CI/CD pipelines, cloud infrastructure, monitoring, tests, and observability, while also mentoring engineers, supporting hiring, managing technical risks, and aligning engineering decisions with business priorities. As a result, I helped improve platform stability, performance, maintainability, fraud and risk analysis workflows, digital banking infrastructure, team maturity, and scalable payment-management capabilities across organizations.",
  experiences: [
    {
      company: "Nubank",
      position: "Software Engineer",
      from: new Date(2025, 0, 1),
      to: null,
      description:
        "I worked on the Charging Assistant platform, a payment management solution that enables business customers to create, manage, and track charges with flexible payment terms, methods, late-payment fines and interest, invoice issuance, and automated payment notifications and reminders. My responsibility was to help maintain and evolve the platform within a scalable, event-driven microservices architecture, including separate frontend applications, BFF layers for mobile and web experiences, a core domain service, and downstream services for notifications and fiscal documents. I contributed by developing new features, fixing bugs, and improving performance, strengthening reliability through unit and integration testing, performance and latency instrumentation (Apdex), and observability dashboards, while also raising engineering standards across the broader codebase by enforcing testing and architecture conventions and building internal developer tooling used across multiple services. As a result, I helped improve the platform's stability, maintainability, and ability to support business customers' receivables at scale, reducing late payments and improving their cash flow.",
    },
    {
      company: "Turim MFO",
      position: "Lead Software Engineer",
      from: new Date(2019, 5, 1),
      to: new Date(2024, 11, 1),
      description:
        "I was responsible for guiding a team in the development of scalable web and mobile applications while overseeing frontend and backend systems, infrastructure as code, cloud services, and CI/CD pipelines. My goal was to ensure that technical decisions supported business priorities while maintaining strong standards for performance, reliability, and code quality. I collaborated closely with business stakeholders, managed risks, supported hiring and talent development, mentored junior developers, resolved team conflicts, and helped define the long-term technical vision. As a result, I contributed to the delivery of reliable financial technology solutions while strengthening the team's technical maturity, collaboration, and overall engineering culture.",
    },
    {
      company: "BTG Pactual",
      position: "Junior Software Engineer",
      from: new Date(2019, 0, 1),
      to: new Date(2019, 5, 1),
      description:
        "In the Asset Management team, I was responsible for developing and maintaining interfaces and APIs used by both internal employees and external clients across Asset Management, Wealth Management, and Investment Banking. My role involved understanding the needs of different business areas and translating them into reliable technical solutions that supported daily operations and client-facing services. I contributed to the evolution of these systems through feature development, maintenance, and improvements to usability, integration, and system stability. As a result, I helped deliver tools and APIs that supported key financial workflows and improved the efficiency and reliability of services used by multiple stakeholders.",
    },
    {
      company: "Stone Pagamentos",
      position: "Junior Software Engineer",
      from: new Date(2018, 7, 1),
      to: new Date(2018, 11, 1),
      description:
        "In the Risk squad, I was responsible for developing and maintaining interfaces and APIs that supported the identification and analysis of tenants with suspicious transactional behavior. My role was to provide reliable technical solutions for internal teams in Monitoring, Accreditation, Prevention, and Anti-Fraud, helping them investigate risk signals more effectively. I worked on maintaining existing systems, implementing improvements, and ensuring that the tools supported operational needs with accuracy and stability. As a result, I contributed to stronger fraud prevention workflows, improved internal analysis capabilities, and more reliable support for risk-related decision-making.",
    },
    {
      company: "Banco Modal",
      position: "Intern Software Engineer",
      from: new Date(2017, 5, 1),
      to: new Date(2018, 6, 1),
      description:
        "In the Development squad, I worked directly on the Digital Bank project, where I was responsible for developing and maintaining services and APIs that supported the company's internal systems. My role involved creating new functionalities, improving existing services, and ensuring that backend solutions remained reliable and aligned with business needs. I also initiated projects to migrate the bank's institutional websites to a JAMstack architecture, aiming to improve performance, scalability, and maintainability. As a result, I contributed to the evolution of the Digital Bank platform while supporting more modern and efficient web infrastructure for the institution.",
    },
    {
      company: "CEFET/RJ",
      position: "Undergraduate Researcher",
      from: new Date(2017, 0, 1),
      to: new Date(2017, 5, 1),
      description:
        "The research project focused on applying the Machine Learning framework Diffusion Map to reduce the dimensionality of complex datasets, including the Iris flower dataset and astronomical datasets composed of star characteristics such as coordinates and luminosity information. My role involved implementing the framework, preparing and analyzing the datasets, and evaluating how dimensionality reduction could reveal underlying patterns in the data. I worked with both benchmark and scientific datasets to better understand the behavior and applicability of the method across different contexts. As a result, the project contributed to the exploration of Diffusion Map as a useful technique for simplifying high-dimensional data while preserving relevant structural relationships.",
    },
    {
      company: "Itaú Unibanco",
      position: "Intern Software Engineer",
      from: new Date(2015, 0, 1),
      to: new Date(2016, 11, 1),
      description:
        "In the Commercial Proposals squad, I was responsible for developing and maintaining web projects for multiple clients in the Social Security area. My role involved supporting existing applications, correcting bugs, and improving performance to ensure better stability and usability for end users. I worked on technical improvements that helped keep the projects reliable and aligned with client needs. As a result, I contributed to more stable, efficient, and maintainable web solutions for clients in the Social Security sector.",
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
        { name: "Mobile", subskills: ["React Native", "Flutter"] },
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
        { name: "Message Broker", subskills: ["RabbitMQ", "Kafka"] },
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
