import { AcademicExperienceProps } from "./AcademicExperience";
import { WorkExperienceProps } from "./WorkExperience";

type CV = {
  name: string;
  mail: string;
  github: string;
  linkedin: string;
  location: string;
  experiences: WorkExperienceProps[];
  educations: AcademicExperienceProps[];
  languages: {
    name: string;
    level: string;
  }[];
}

export default {
  name: "Marco Lúcio de Carvalho Júnior",
  mail: "marcolucio27@gmail.com",
  github: "marco-carvalho",
  linkedin: "marco-carvalho",
  location: "Rio de Janeiro, Brazil",
  experiences: [
    {
      company: "Nubank",
      position: "Software Engineer",
      from: new Date(2025, 0, 1),
      to: null,
      stack:
        "Clojure, Datomic, Kafka, TypeScript, React, Flutter, Databricks, AWS, Kubernetes, Grafana, Prometheus",
      bullets: [
        "The Charging Assistant platform, a B2B payment management product that enables 6M+ business customers to create, manage, and track charges, runs on an event-driven microservices architecture spanning frontend applications, mobile and web BFF layers, a core domain service, and downstream notification and fiscal-document services.",
        "Maintain and evolve the platform, from product discovery and collaborative solution design (whiteboarding) to backlog refinement and implementation, while raising engineering standards across the broader codebase.",
        "Led a data-backed latency discovery, authored the RFC and ADR, and built a new event-driven read-store service that replaces on-the-fly aggregations with constant-time reads; authored and enforced testing and architecture linters adopted across multiple services and teams; built internal developer tooling used by engineers across teams; instrumented latency (Apdex) and built observability dashboards.",
        "Improved the platform's stability, performance visibility, and maintainability, helping it scale reliably so businesses get paid faster and improve cash-flow predictability.",
      ],
    },
    {
      company: "Turim MFO",
      position: "Lead Software Engineer",
      from: new Date(2019, 5, 1),
      to: new Date(2024, 11, 1),
      stack:
        "C#/.NET 8, TypeScript, React, React Native, Node.js, Python, SQL Server, PostgreSQL, Redis, AWS, Azure, Terraform, Docker, RabbitMQ",
      bullets: [
        "A multi-family office whose engineering team owned end to end, primarily, the internal platform employees use to generate the monthly and semiannual investment reports presented in meetings with client families, and a mobile app used exclusively by those families, along with the supporting cloud infrastructure and CI/CD pipelines.",
        "Promoted from Software Engineer (2019) to Senior (2021) and Lead (2023), guiding the team and ensuring technical decisions supported business priorities with strong standards for performance, reliability, and code quality.",
        "Led the development of the company's mobile app, oversaw frontend and backend systems, designed infrastructure as code and CI/CD pipelines, mentored junior developers, supported hiring and talent development, and defined the long-term technical vision.",
        "Delivered reliable financial technology solutions, including a client-facing mobile app that strengthened the firm's relationship with its clients, while raising the team's technical maturity, collaboration, and overall engineering culture.",
      ],
    },
    {
      company: "BTG Pactual",
      position: "Junior Software Engineer",
      from: new Date(2019, 0, 1),
      to: new Date(2019, 5, 1),
      stack: "C#, Node.js, Vue.js, SQL Server, PostgreSQL, Docker, AWS",
      bullets: [
        "The Asset Management team maintained interfaces and APIs used by internal employees and external clients across Asset Management, Wealth Management, and Investment Banking.",
        "Understand the needs of different business areas and translate them into reliable technical solutions supporting daily operations and client-facing services.",
        "Developed new features, maintained existing systems, and improved usability, integration, and stability.",
        "Delivered tools and APIs that supported key financial workflows and improved the efficiency and reliability of services used by multiple stakeholders.",
      ],
    },
    {
      company: "Stone Pagamentos",
      position: "Junior Software Engineer",
      from: new Date(2018, 7, 1),
      to: new Date(2018, 11, 1),
      stack: "C# (Web API, WCF), Python, JavaScript, SQL Server, Splunk",
      bullets: [
        "The Risk squad provided the tooling used by the internal Monitoring, Accreditation, Prevention, and Anti-Fraud teams to investigate risk signals.",
        "Develop and maintain the interfaces and APIs used to identify and analyze tenants with suspicious transactional behavior.",
        "Maintained existing systems, implemented improvements, and ensured the tools supported operational needs with accuracy and stability.",
        "Strengthened fraud-prevention workflows, improved internal analysis capabilities, and provided more reliable support for risk-related decision-making.",
      ],
    },
    {
      company: "Banco Modal",
      position: "Software Engineering Intern",
      from: new Date(2017, 5, 1),
      to: new Date(2018, 6, 1),
      stack: "C# (Web API, WCF), React, SQL Server",
      bullets: [
        "The Development squad built the Digital Bank project, whose services and APIs supported the company's internal systems.",
        "Develop and maintain services and APIs, keeping backend solutions reliable and aligned with business needs.",
        "Created new functionality, improved existing services, and initiated the migration of the bank's institutional websites to a JAMstack architecture.",
        "Contributed to the evolution of the Digital Bank platform and delivered faster, more scalable, and more maintainable web infrastructure.",
      ],
    },
    {
      company: "CEFET/RJ",
      position: "Undergraduate Researcher",
      from: new Date(2017, 0, 1),
      to: new Date(2017, 5, 1),
      stack: "R, Machine Learning",
      bullets: [
        "A research project focused on applying the Diffusion Map machine learning framework to reduce the dimensionality of complex datasets.",
        "Implement the framework and evaluate how dimensionality reduction could reveal underlying patterns in the data.",
        "Prepared and analyzed benchmark (Iris) and astronomical datasets composed of star characteristics such as coordinates and luminosity, comparing the method's behavior across contexts.",
        "Contributed to validating Diffusion Map as a technique for simplifying high-dimensional data while preserving structural relationships.",
      ],
    },
    {
      company: "Itaú Unibanco",
      position: "Software Engineering Intern",
      from: new Date(2015, 0, 1),
      to: new Date(2016, 11, 1),
      stack: "C#, JavaScript (jQuery, Knockout), SQL Server",
      bullets: [
        "The Commercial Proposals squad served multiple clients in the Social Security area with web projects.",
        "Develop and maintain these projects, keeping them reliable and aligned with client needs.",
        "Supported existing applications, diagnosed and corrected bugs, and implemented performance and stability improvements.",
        "Delivered more stable, efficient, and maintainable web solutions with better usability for end users.",
      ],
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
    { name: "Portuguese", level: "native" },
    { name: "English", level: "advanced" },
    { name: "Spanish", level: "basic" },
  ],
} as CV;
