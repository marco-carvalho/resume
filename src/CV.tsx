export default {
  name: "Marco Lúcio de Carvalho Júnior",
  mail: "marcolucio27@gmail.com",
  github: "marco-carvalho",
  linkedin: "marco-carvalho",
  resume:
    "A computer scientist passionate about web development, motivated by the good uses of new technologies, with extensive experience in the financial market, an open-source enthusiast, and focused on improving and applying my knowledge and skills in opportunities that help me grow professionally.",
  experiences: [
    {
      company: "Turim MFO",
      position: "Tech Lead & Senior Software Engineer",
      from: new Date(2019, 5, 1),
      to: undefined,
      description:
        "Lead a team in designing and implementing full-stack solutions, ensuring software robustness, scalability, and performance. Collaborate with stakeholders, mentor junior developers, and promote continuous improvement.",
      technologies: [
        { name: "HTML" },
        { name: "CSS", subtechnologies: ["TailwindCSS"] },
        { name: "Javascript", subtechnologies: ["Typescript", "React"] },
        { name: "Mobile", subtechnologies: ["React Native"] },
        { name: "C#", subtechnologies: [".NET"] },
        { name: "Python", subtechnologies: ["Flask"] },
        { name: "Node", subtechnologies: ["Express"] },
        { name: "SQL", subtechnologies: ["SQL Server", "Postgres"] },
        { name: "Infra as Code", subtechnologies: ["Docker", "Terraform"] },
        { name: "Message Broker", subtechnologies: ["RabbitMQ"] },
        { name: "Web Server", subtechnologies: ["IIS", "Nginx"] },
        { name: "CI/CD", subtechnologies: ["GitHub Actions", "TeamCity"] },
        { name: "Monitoring", subtechnologies: ["Grafana", "Zabbix"] },
        { name: "Code Quality", subtechnologies: ["SonarQube"] },
        { name: "Cloud", subtechnologies: ["AWS", "Azure"] },
        { name: "Cache", subtechnologies: ["Redis"] },
      ],
    },
    {
      company: "BTG Pactual",
      position: "Junior Software Engineer",
      from: new Date(2019, 0, 1),
      to: new Date(2019, 5, 1),
      description:
        "Developed and maintained interfaces and APIs for Asset Management, Wealth Management, and Investment Banking, enhancing user experience and efficiency.",
      technologies: [
        { name: "HTML", subtechnologies: ["Pug"] },
        { name: "CSS", subtechnologies: ["Bootstrap"] },
        { name: "Javascript", subtechnologies: ["VueJS"] },
        { name: "C#" },
        { name: "Node.js", subtechnologies: ["Express"] },
        { name: "SQL", subtechnologies: ["SQL Server", "Postgres"] },
        { name: "Infra as Code", subtechnologies: ["Docker", "Rancher"] },
        { name: "CI/CD", subtechnologies: ["Azure DevOps"] },
        { name: "Cloud", subtechnologies: ["AWS"] },
      ],
    },
    {
      company: "Stone Pagamentos",
      position: "Junior Software Engineer",
      from: new Date(2018, 7, 1),
      to: new Date(2018, 11, 1),
      description:
        "Developed interfaces and APIs for monitoring transactional behavior in the Risk squad, improving fraud detection and prevention.",
      technologies: [
        { name: "C#", subtechnologies: ["WCF"] },
        { name: "Python" },
        { name: "SQL", subtechnologies: ["SQL Server"] },
        { name: "CI/CD", subtechnologies: ["Azure DevOps", "GoCD"] },
        { name: "Logs", subtechnologies: ["Splunk"] },
      ],
    },
    {
      company: "Banco Modal",
      position: "Intern Software Engineer",
      from: new Date(2017, 5, 1),
      to: new Date(2018, 6, 1),
      description:
        "Contributed to the Digital Bank project, developing services and APIs, creating internal system functionalities, and initiating JAMstack migrations.",
      technologies: [
        { name: "HTML" },
        { name: "CSS", subtechnologies: ["Bootstrap"] },
        { name: "Javascript", subtechnologies: ["React"] },
        { name: "C#", subtechnologies: ["Web API", "WCF"] },
        { name: "SQL", subtechnologies: ["SQL Server"] },
      ],
    },
    {
      company: "CEFET/RJ",
      position: "Scientific Initiation Scholarship Holder",
      from: new Date(2017, 0, 1),
      to: new Date(2017, 5, 1),
      description:
        "Implemented the Machine Learning framework Diffusion Map for dimensionality reduction, analyzing datasets like the Iris flower dataset and astronomical data.",
      technologies: [{ name: "R" }],
    },
    {
      company: "Itaú Unibanco",
      position: "Intern Software Engineer",
      from: new Date(2015, 0, 1),
      to: new Date(2016, 11, 1),
      description:
        "Developed and maintained web projects for Social Security clients, focusing on bug fixes and performance improvements.",
      technologies: [
        { name: "HTML" },
        { name: "CSS" },
        { name: "Javascript", subtechnologies: ["Knockout"] },
        { name: "C#" },
        { name: "SQL", subtechnologies: ["SQL Server"] },
      ],
    },
  ],
  educations: [
    {
      degree: "Bachelor's Degree",
      university: "CEFET/RJ",
      course: "Computer Science",
      from: new Date(2012, 5),
      to: new Date(2018, 11),
    },
  ],
  languages: [
    { name: "Portuguese", level: "fluent" },
    { name: "English", level: "advanced" },
  ],
  skills: [
    {
      name: "Front End",
      technologies: [
        { name: "HTML" },
        { name: "CSS", subtechnologies: ["Tailwind"] },
        { name: "Javascript", subtechnologies: ["Typescript", "React"] },
        { name: "Mobile", subtechnologies: ["React Native"] },
      ],
    },
    {
      name: "Back End",
      technologies: [
        { name: "C#", subtechnologies: [".NET"] },
        { name: "Node.js", subtechnologies: ["Express"] },
        { name: "Python", subtechnologies: ["FastAPI", "Flask"] },
      ],
    },
    {
      name: "Database",
      technologies: [
        { name: "SQL", subtechnologies: ["SQL Server", "Postgres", "MySQL"] },
        { name: "Cache", subtechnologies: ["Redis"] },
      ],
    },
    {
      name: "DevOps",
      technologies: [
        { name: "Cloud", subtechnologies: ["AWS", "Azure"] },
        { name: "Message Broker", subtechnologies: ["RabbitMQ"] },
        { name: "Infra as Code", subtechnologies: ["Docker", "Terraform"] },
        { name: "Message Broker", subtechnologies: ["RabbitMQ"] },
        { name: "Linux", subtechnologies: ["Ubuntu"] },
        { name: "Web Server", subtechnologies: ["IIS", "Nginx"] },
        { name: "CI/CD", subtechnologies: ["GitHub Actions", "TeamCity"] },
        { name: "Monitoring", subtechnologies: ["Grafana", "Zabbix"] },
        { name: "Code Quality", subtechnologies: ["SonarQube"] },
      ],
    },
  ],
};
