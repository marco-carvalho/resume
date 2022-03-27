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
    resume: "Um cientista da computação apaixonado por desenvolvimento web, motivado pelos bons usos de novas tecnologias, com experiência majoritária no mercado financeira, entusiasta do open-source, e focado em melhorar e aplicar os meus conhecimentos e competências em oportunidades que me façam crescer profissionalmente.",
    experiences: [
      {
        company: "Turim Multi-Family Office",
        position: "Analista de Desenvolvimento Web",
        from: new Date(2019, 5, 1),
        to: undefined,
        description: "Fui responsável pelo desenvolvimento e manutenção de interfaces e APIs que atendem as necessidades e demandas dos funcionários internos das áreas de Wealth Management.",
        technologies: [
          { name: "HTML" },
          { name: "CSS", subtechnologies: ["Bootstrap"] },
          { name: "Javascript", subtechnologies: ["React"] },
          { name: "Mobile", subtechnologies: ["React Native"] },
          { name: "C#", subtechnologies: [".NET Core"] },
          { name: "SQL", subtechnologies: ["SQL Server"] },
          { name: "Message Broker", subtechnologies: ["RabbitMQ"] },
          { name: "Web Server", subtechnologies: ["IIS"] },
          { name: "CI/CD", subtechnologies: ["TeamCity"] },
          { name: "Monitoring", subtechnologies: ["Grafana"] },
          { name: "Code Quality", subtechnologies: ["SonarQube"] },
        ]
      },
      {
        company: "BTG Pactual",
        position: "Analista de Desenvolvimento Web",
        from: new Date(2019, 0, 1),
        to: new Date(2019, 5, 1),
        description: "Fui responsável pelo desenvolvimento e manutenção de interfaces e APIs que atendem as necessidades e demandas dos funcionários internos e clientes externos das áreas de Asset Management.",
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
        position: "Analista de Desenvolvimento Web",
        from: new Date(2018, 7, 1),
        to: new Date(2018, 11, 1),
        description: "Fui responsável pelo desenvolvimento e manutenção de interfaces e APIs que permitem a identificação e análise de lojistas que apresentaram comportamento transacional suspeito, suprindo a necessidade dos funcionários internos das áreas de Monitoramento, Credenciamento, Prevenção e Antifraude.",
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
        position: "Estagiário de Desenvolvimento Web",
        from: new Date(2017, 5, 1),
        to: new Date(2018, 6, 1),
        description: "Fui responsável pelo desenvolvimento e manutenção de serviços e APIs do projeto do Banco Digital, pela criação de novas funcionalidades para o sistema interno da empresa, além de ter iniciado os projetos de migração dos sites institucionais do banco para a utilização da JAMstack.",
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
        position: "Bolsista de Iniciação Científica",
        from: new Date(2017, 0, 1),
        to: new Date(2017, 5, 1),
        description: "Fui responsável por implementar e utilizar o framework de Machine Learning chamado Diffusion Map para reduzir a dimensionalidade e extrair funcionalidades do dataset de flores Iris e de datasets formados por características de estrelas, como coordenadas e informações referentes a luminosidade.",
        technologies: [
          { name: "R" }
        ]
      },
      {
        company: "Itaú Unibanco",
        position: "Estagiário de Desenvolvimento Web",
        from: new Date(2015, 0, 1),
        to: new Date(2016, 11, 1),
        description: "Fui responsável pelo desenvolvimento e manutenção de projetos web dos clientes da área de Previdência, corrigindo bugs e melhorando o desempenho.",
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
        degree: "Bacharelado",
        university: "CEFET/RJ",
        course: "Ciência da Computação",
        from: new Date(2012, 5),
        to: new Date(2018, 11),
      }
    ],
    languages: [
      { name: "Português", level: "fluente" },
      { name: "Inglês", level: "avançado" },
    ],
    skills: [
      {
        name: "Front End",
        technologies: [
          { name: "HTML", subtechnologies: ["Pug"] },
          { name: "CSS", subtechnologies: ["Tailwind", "Bootstrap"] },
          { name: "Javascript", subtechnologies: ["React", "VueJS"] },
          { name: "Mobile", subtechnologies: ["React Native"] },
        ]
      },
      {
        name: "Back End",
        technologies: [
          { name: "C#", subtechnologies: [".NET"] },
          { name: "Node.js", subtechnologies: ["Express"] },
          { name: "Python", subtechnologies: ["Django"] },
          { name: "Message Broker", subtechnologies: ["RabbitMQ"] },
        ]
      },
      {
        name: "DBA",
        technologies: [
          { name: "SQL", subtechnologies: ["SQL Server", "Postgres", "MySQL"] },
          { name: "NoSQL", subtechnologies: ["MongoDB"] },
          { name: "Cache", subtechnologies: ["Redis"] },
        ]
      },
      {
        name: "DevOps",
        technologies: [
          { name: "Linux", subtechnologies: ["Ubuntu", "Debian"] },
          { name: "Web Servers", subtechnologies: ["IIS", "Nginx"] },
          { name: "Infra as Code", subtechnologies: ["Docker", "Rancher"] },
          { name: "CI/CD", subtechnologies: ["GitHub Actions", "TeamCity"] },
          { name: "Logs", subtechnologies: ["Splunk"] },
          { name: "Cloud", subtechnologies: ["AWS"] },
          { name: "Monitoring", subtechnologies: ["Grafana"] },
          { name: "Code Quality", subtechnologies: ["SonarQube"] },
          { name: "Code Security", subtechnologies: ["Synk"] },
        ]
      }
    ],
  };

  return (
    <div id="app" className="mx-auto container leading-none space-y-2">
      <div className="text-center text-4xl font-bold uppercase">{CV.name}</div>
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
          <div className="bg-black uppercase text-center text-white rounded text-2xl">
            <div className="font-bold p-1">Histórico Profissional</div>
          </div>
          {CV.experiences.map((experience, i) => <Experience key={i} {...experience} />)}
        </div>
        <div className="px-2 w-full md:w-1/2 print:w-1/2">
          <div className="mb-2">
            <div className="bg-black uppercase text-center text-white rounded mb-2 text-2xl">
              <div className="font-bold p-1">Resumo</div>
            </div>
            <div className="font-normal">{CV.resume}</div>
          </div>
          <div className="mb-2">
            <div className="bg-black uppercase text-center text-white rounded mb-2 text-2xl">
              <div className="font-bold p-1">Habilidades</div>
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
                  <div className="bg-black uppercase text-center text-white rounded mb-2 text-2xl">
                    <div className="font-bold p-1">Educação</div>
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
                  <div className="bg-black uppercase text-center text-white rounded mb-2 text-2xl">
                    <div className="font-bold p-1">Idiomas</div>
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
            <div className="text-center">
              <div className="inline">Feito com </div>
              <a href="https://reactjs.org" className="inline text-gray-500">React</a>
              <div className="inline"> e </div>
              <a href="https://tailwindcss.com/" className="inline text-gray-500">TailwindCSS</a>
            </div>
            <div className="text-center"><a href="https://marco-carvalho.github.io/resume" className="text-gray-500">https://marco-carvalho.github.io/resume</a></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
