import type { AcademicExperienceProps } from "./AcademicExperience";
import type { WorkExperienceProps } from "./WorkExperience";

const yearMonth = (year: number, month: number): Temporal.PlainYearMonth =>
  Temporal.PlainYearMonth.from({ year, month });

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
      from: yearMonth(2025, 1),
      to: null,
      stack:
        "Clojure, Datomic, Kafka, Python, TypeScript, React, Flutter, Databricks, Redis, AWS, Kubernetes, Grafana, Prometheus, Figma, Honeycomb",
      bullets: [
        "Charging Assistant, Nu Empresas' payment-management platform where businesses create and track charges through boleto, Pix, NuPay, and payment links, automate reminders, configure fines and interest, issue invoices, and manage accounts receivable, built as event-driven microservices spanning web and mobile clients, BFF layers, a core domain service, and downstream notification and fiscal-document services.",
        "Evolve the platform end to end, from product discovery and solution design through implementation, testing, and observability, investigating production issues and using operational data to find reliability and performance opportunities as usage and product complexity grow.",
        "Shipped core customer journeys across web and mobile, including charge creation with variable installments, fines and interest templates, and buyer autofill; notifications for overdue, cancelled, expired, and refunded charges; refunds and redesigned charge and sale details; and the company charge tab with latest charges and received and overdue amounts.",
        "Designed and built an event-driven read model that keeps a ready-to-serve summary of each customer's latest charges, taking an aggregation over the full transaction history off the request path so reads stay predictable as data grows; also rolled out Apdex instrumentation and dashboards, architecture and testing linters across services and shared templates, and internal developer tooling.",
      ],
    },
    {
      company: "Turim MFO",
      position: "Lead Software Engineer",
      from: yearMonth(2019, 6),
      to: yearMonth(2024, 12),
      stack:
        ".NET, TypeScript, React, React Native, Node.js, Python, SQL Server, PostgreSQL, Redis, AWS, Azure, Terraform, Docker, RabbitMQ, Figma",
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
      from: yearMonth(2019, 1),
      to: yearMonth(2019, 6),
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
      from: yearMonth(2018, 8),
      to: yearMonth(2018, 12),
      stack: "C# (Web API, WCF), Python, JavaScript, SQL Server, Splunk",
      bullets: [
        "Internal systems used by the Risk, Monitoring, Prevention, and Anti-Fraud teams to investigate merchants whose transactional behavior signaled fraud or chargeback risk for the acquirer.",
        "Developed and maintained the interfaces and services those teams relied on, presenting risk signals clearly enough that analysts could reach fast, consistent decisions during investigations.",
      ],
    },
    {
      company: "Banco Modal",
      position: "Software Engineering Intern",
      from: yearMonth(2017, 6),
      to: yearMonth(2018, 7),
      stack: "C# (Web API, WCF), React, SQL Server",
      bullets: [
        "Services for the Digital Bank initiative as the bank expanded into digital retail banking.",
        "Implemented and improved backend services; proposed and started the migration of the bank's institutional websites to a JAMstack architecture, improving performance and deployment.",
      ],
    },
    {
      company: "CEFET/RJ",
      position: "Undergraduate Researcher",
      from: yearMonth(2017, 1),
      to: yearMonth(2017, 6),
      stack: "R, Machine Learning",
      bullets: [
        "Research on Diffusion Maps, a nonlinear dimensionality-reduction method that represents high-dimensional data while preserving structural relationships.",
        "Implemented the method, validated it on benchmarks, then applied it to astronomical star data.",
      ],
    },
    {
      company: "Itaú Unibanco",
      position: "Software Engineering Intern",
      from: yearMonth(2015, 1),
      to: yearMonth(2016, 12),
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
      from: yearMonth(2012, 7),
      to: yearMonth(2018, 12),
    },
  ],
  languages: [
    { name: "Portuguese", level: "native" },
    { name: "English", level: "advanced" },
    { name: "Spanish", level: "basic" },
  ],
} as CV;
