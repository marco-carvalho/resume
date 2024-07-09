import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { DateTime } from "luxon";

import Experience from "./Experience";
import Technology from "./Technology";

function App() {
  const CV = {
    name: "Marco Lúcio de Carvalho Júnior",
    mail: "marcolucio27@gmail.com",
    github: "marco-carvalho",
    linkedin: "marco-carvalho",
    resume: "A computer scientist passionate about web development, motivated by the good uses of new technologies, with extensive experience in the financial market, an open-source enthusiast, and focused on improving and applying my knowledge and skills in opportunities that help me grow professionally.",
    experiences: [
      {
        company: "Turim Multi-Family Office",
        position: "Tech Lead & Senior Software Engineer",
        from: new Date(2019, 5, 1),
        to: undefined,
        description: "Lead a team in designing and implementing full-stack solutions, ensuring software robustness, scalability, and performance. Collaborate with stakeholders, mentor junior developers, and promote continuous improvement.",
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
        ]
      },
      {
        company: "BTG Pactual",
        position: "Junior Software Engineer",
        from: new Date(2019, 0, 1),
        to: new Date(2019, 5, 1),
        description: "Developed and maintained interfaces and APIs for Asset Management, Wealth Management, and Investment Banking, enhancing user experience and efficiency.",
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
        ]
      },
      {
        company: "Stone Pagamentos",
        position: "Junior Software Engineer",
        from: new Date(2018, 7, 1),
        to: new Date(2018, 11, 1),
        description: "Developed interfaces and APIs for monitoring transactional behavior in the Risk squad, improving fraud detection and prevention.",
        technologies: [
          { name: "C#", subtechnologies: ["WCF"] },
          { name: "Python" },
          { name: "SQL", subtechnologies: ["SQL Server"] },
          { name: "CI/CD", subtechnologies: ["Azure DevOps", "GoCD"] },
          { name: "Logs", subtechnologies: ["Splunk"] },
        ]
      },
      {
        company: "Banco Modal",
        position: "Intern Software Engineer",
        from: new Date(2017, 5, 1),
        to: new Date(2018, 6, 1),
        description: "Contributed to the Digital Bank project, developing services and APIs, creating internal system functionalities, and initiating JAMstack migrations.",
        technologies: [
          { name: "HTML" },
          { name: "CSS", subtechnologies: ["Bootstrap"] },
          { name: "Javascript", subtechnologies: ["React"] },
          { name: "C#", subtechnologies: ["Web API", "WCF"] },
          { name: "SQL", subtechnologies: ["SQL Server"] },
        ]
      },
      {
        company: "CEFET/RJ",
        position: "Scientific Initiation Scholarship Holder",
        from: new Date(2017, 0, 1),
        to: new Date(2017, 5, 1),
        description: "Implemented the Machine Learning framework Diffusion Map for dimensionality reduction, analyzing datasets like the Iris flower dataset and astronomical data.",
        technologies: [
          { name: "R" }
        ]
      },
      {
        company: "Itaú Unibanco",
        position: "Intern Software Engineer",
        from: new Date(2015, 0, 1),
        to: new Date(2016, 11, 1),
        description: "Developed and maintained web projects for Social Security clients, focusing on bug fixes and performance improvements.",
        technologies: [
          { name: "HTML" },
          { name: "CSS" },
          { name: "Javascript", subtechnologies: ["Knockout"] },
          { name: "C#" },
          { name: "SQL", subtechnologies: ["SQL Server"] },
        ]
      }
    ],
    educations: [
      {
        degree: "Bachelor's Degree",
        university: "CEFET/RJ",
        course: "Computer Science",
        from: new Date(2012, 5),
        to: new Date(2018, 11),
      }
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
        ]
      },
      {
        name: "Back End",
        technologies: [
          { name: "C#", subtechnologies: [".NET"] },
          { name: "Node.js", subtechnologies: ["Express"] },
          { name: "Python", subtechnologies: ["Flask"] },
          { name: "Message Broker", subtechnologies: ["RabbitMQ"] },
        ]
      },
      {
        name: "DBA",
        technologies: [
          { name: "SQL", subtechnologies: ["SQL Server", "Postgres", "MySQL"] },
          { name: "Cache", subtechnologies: ["Redis"] },
        ]
      },
      {
        name: "DevOps",
        technologies: [
          { name: "Linux", subtechnologies: ["Ubuntu"] },
          { name: "Infra as Code", subtechnologies: ["Docker", "Terraform"] },
          { name: "Message Broker", subtechnologies: ["RabbitMQ"] },
          { name: "Web Server", subtechnologies: ["IIS", "Nginx"] },
          { name: "CI/CD", subtechnologies: ["GitHub Actions", "TeamCity"] },
          { name: "Monitoring", subtechnologies: ["Grafana", "Zabbix"] },
          { name: "Code Quality", subtechnologies: ["SonarQube"] },
          { name: "Cloud", subtechnologies: ["AWS", "Azure"] },
        ]
      }
    ],
  };

  return (
    <div id="app" className="mx-auto container leading-none space-y-2">
      <div className="text-center text-3xl font-bold uppercase">{CV.name}</div>
      <div className="text-center flex flex-wrap space-y-2 md:space-y-0 print:space-y-0">
        <div className="w-full md:w-1/3 print:w-1/3 space-x-1">
          <FontAwesomeIcon icon={faEnvelope} />
          <a href={`mailto:${CV.mail}`} className="inline text-gray-500">{CV.mail}</a>
        </div>
        <div className="w-full md:w-1/3 print:w-1/3 space-x-1">
          <FontAwesomeIcon icon={faGithub} />
          <a href={`https://github.com/${CV.github}`} className="inline text-gray-500">{CV.github}</a>
        </div>
        <div className="w-full md:w-1/3 print:w-1/3 space-x-1">
          <FontAwesomeIcon icon={faLinkedin} />
          <a href={`https://linkedin.com/in/${CV.linkedin}`} className="inline text-gray-500">{CV.linkedin}</a>
        </div>
      </div>
      <div className="flex flex-wrap">
        <div className="px-2 w-full md:w-1/2 print:w-1/2 space-y-1">
          <div className="bg-black uppercase text-center text-white rounded text-xl">
            <div className="font-bold p-1">Professional History</div>
          </div>
          <div className="space-y-4">
            {CV.experiences.map((experience, i) => <Experience key={i} {...experience} />)}
          </div>
        </div>
        <div className="px-2 w-full md:w-1/2 print:w-1/2">
          <div className="mb-2">
            <div className="bg-black uppercase text-center text-white rounded mb-2 text-xl">
              <div className="font-bold p-1">Resume</div>
            </div>
            <div className="font-normal">{CV.resume}</div>
          </div>
          <div className="mb-2">
            <div className="bg-black uppercase text-center text-white rounded mb-2 text-xl">
              <div className="font-bold p-1">Skills</div>
            </div>
            {CV.skills.map(skill => {
              return (
                <div className="text-center mb-1">
                  {skill.technologies.map(technology => {
                    return <Technology {...technology} />
                  })}
                </div>
              )
            })}
          </div>
          <div className="flex flex-wrap -mx-2">
            <div className="px-2 w-full md:w-1/2">
              <div className="mb-2">
                <div className="text-center">
                  <div className="bg-black uppercase text-center text-white rounded mb-2 text-xl">
                    <div className="font-bold p-1">Education</div>
                  </div>
                  {CV.educations.map((education, i) => {
                    return (
                      <div key={i}>
                        <div className="font-bold">{education.degree} - {education.university}</div>
                        <div className="font-bold">{education.course}</div>
                        <div className="d-block">{DateTime.fromJSDate(education.from).toFormat('MMMM/yyyy')} - {DateTime.fromJSDate(education.to).setLocale("pt-BR").toFormat('MMMM/yyyy')}</div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
            <div className="px-2 w-full md:w-1/2">
              <div className="mb-2">
                <div className="text-center">
                  <div className="bg-black uppercase text-center text-white rounded mb-2 text-xl">
                    <div className="font-bold p-1">Languages</div>
                  </div>
                  {CV.languages.map((language, i) => {
                    return (
                      <div key={i}>
                        <div className="inline font-bold mr-1">{language.name}:</div>
                        <div className="inline">{language.level}</div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
          <div className="h-px bg-gray-300 mb-2"></div>
          <div>
            <div className="text-center space-x-1">
              <div className="inline">Made with</div>
              <a href="https://reactjs.org" className="inline underline text-gray-500">React</a>
              <div className="inline">and</div>
              <a href="https://tailwindcss.com/" className="inline underline text-gray-500">TailwindCSS</a>
            </div>
            <div className="text-center underline"><a href="https://marco-carvalho.github.io/resume" className="text-gray-500">https://marco-carvalho.github.io/resume</a></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
