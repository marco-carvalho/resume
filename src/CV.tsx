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
        "Clojure, Datomic, Kafka, Python (FastAPI), TypeScript, React, Flutter, Databricks, Redis, AWS, Kubernetes, Grafana, Prometheus",
      bullets: [
        "Charging Assistant, the payment-management platform in Nu Empresas where millions of businesses create and track charges, automate reminders, apply late-payment rules, issue invoices, and organize accounts receivable, built as event-driven microservices spanning web and mobile clients, BFF layers, a core domain service, and downstream notification and fiscal-document services.",
        "Evolve the platform end to end, from product discovery and solution design to implementation, testing, and observability, where reliability and correctness matter more as usage and product complexity grow; investigate production issues and use operational data to find performance opportunities.",
        "Traced a read flow that grew more expensive as customers accumulated charges, using production data and latency instrumentation, authored the RFC and ADR, and built an event-driven read model that moved the aggregation off the request path; also added Apdex instrumentation and dashboards, testing and architecture linters other teams adopted, and internal developer tooling.",
        "Made reads predictable as data volume grows and improved the platform's stability, observability, and maintainability, so businesses collect receivables with less manual effort and more predictable cash flow.",
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
        "A multi-family office whose engineering team owned business-critical financial products end to end: the internal platform used to generate the monthly and semiannual investment reports presented in meetings with client families, the mobile app those families used, and the supporting cloud infrastructure and CI/CD pipelines.",
        "Promoted from Software Engineer (2019) to Senior (2021) to Lead (2023), setting the team's technical direction and working with business stakeholders to turn their priorities and risks into technical plans.",
        "Guided architecture across frontend, backend, mobile, infrastructure, and delivery; led the mobile app's development; designed infrastructure as code and CI/CD pipelines; mentored engineers, supported hiring, and managed delivery risk while staying hands-on with the hardest problems.",
        "Delivered reliable financial systems, including the client-facing app that strengthened the firm's relationship with client families, while improving performance and stability, reducing technical risk, and raising the team's autonomy and engineering maturity.",
      ],
    },
    {
      company: "BTG Pactual",
      position: "Junior Software Engineer",
      from: new Date(2019, 0, 1),
      to: new Date(2019, 5, 1),
      stack:
        "C#, Node.js (Express), Vue.js, SQL Server, PostgreSQL, Docker, Rancher, Azure DevOps, AWS",
      bullets: [
        "Systems for the administration and daily operations of investment funds, including the platform external clients used to submit operations that fed the bank's internal workflows.",
        "Built features and integrations with internal systems, investigated production issues, and improved usability and stability, mindful of downstream financial processes and controls.",
      ],
    },
    {
      company: "Stone Pagamentos",
      position: "Junior Software Engineer",
      from: new Date(2018, 7, 1),
      to: new Date(2018, 11, 1),
      stack: "C# (Web API, WCF), Python, JavaScript, SQL Server, Splunk",
      bullets: [
        "Internal systems used by the Risk, Monitoring, Prevention, and Anti-Fraud teams to investigate merchants whose transactional behavior signaled fraud or chargeback risk for the acquirer.",
        "Developed and maintained the interfaces and services those teams relied on, presenting risk signals clearly enough that analysts could reach fast, consistent decisions during investigations.",
      ],
    },
    {
      company: "Banco Modal",
      position: "Software Engineering Intern",
      from: new Date(2017, 5, 1),
      to: new Date(2018, 6, 1),
      stack: "C# (Web API, WCF), React, SQL Server",
      bullets: [
        "Services for the Digital Bank initiative as the bank expanded into digital retail banking.",
        "Implemented and improved backend services; proposed and started the migration of the bank's institutional websites to a JAMstack architecture, improving performance and deployment.",
      ],
    },
    {
      company: "CEFET/RJ",
      position: "Undergraduate Researcher",
      from: new Date(2017, 0, 1),
      to: new Date(2017, 5, 1),
      stack: "R, Machine Learning",
      bullets: [
        "Research on Diffusion Maps, a nonlinear dimensionality-reduction method that represents high-dimensional data while preserving structural relationships.",
        "Implemented the method, validated it on benchmarks, then applied it to astronomical star data.",
      ],
    },
    {
      company: "Itaú Unibanco",
      position: "Software Engineering Intern",
      from: new Date(2015, 0, 1),
      to: new Date(2016, 11, 1),
      stack: "C#, JavaScript (jQuery, Knockout), SQL Server",
      bullets: [
        "Participant-facing web portals for organizations managing closed pension funds.",
        "Implemented features, corrected defects, and improved performance and usability in codebases shared across clients, balancing reuse with the plans and business rules specific to each entity.",
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
