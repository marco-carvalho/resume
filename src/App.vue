<template lang="pug">
#app.mx-auto.container.leading-none(class="lg:px-0")
  Header.mb-2(
    :name="name"
    :mail="mail"
    :phone="phone"
    :github="github"
    :linkedin="linkedin"
  )
  .flex.-mx-2
    .px-2.w-full(class="md:w-1/2")
      Experiences.mb-2(:experiences="experiences")
    .px-2.w-full(class="md:w-1/2")
      Resume.mb-2(:resume="resume")
      Skills.mb-2(:skills="skills")
      Certifications.mb-2(:certifications="certifications")
      .flex.flex-wrap.-mx-2
        .px-2.w-full(class="md:w-1/2")
          Education.mb-2(:educations="educations")
        .px-2.w-full(class="md:w-1/2")
          Languages.mb-2(:languages="languages")
      .h-px.bg-gray-300.mb-2
      Footer
</template>

<script>
import Education from "@/components/Education";
import Experiences from "@/components/Experiences";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Languages from "@/components/Languages";
import Resume from "@/components/Resume";
import Skills from "@/components/Skills";
import Certifications from "@/components/Certifications";

export default {
  components: {
    Education,
    Experiences,
    Footer,
    Header,
    Languages,
    Resume,
    Skills,
    Certifications,
  },
  data() {
    return {
      name: "Marco Lúcio de Carvalho Júnior",
      mail: "marcolucio27@gmail.com",
      phone: {
        CCC: 55,
        cityCode: 21,
        number: "99571-0606",
      },
      github: "marco-carvalho",
      linkedin: "marco-carvalho",
      resume: "Um cientista da computação apaixonado por desenvolvimento web, motivado pelos bons usos de novas tecnologias, e focado em melhorar e aplicar os meus conhecimentos e competências em experiências que me façam crescer profissionalmente.",
      experiences: [
        {
          company: "Turim Family Office",
          position: "Analista de Desenvolvimento Web",
          from: this.$moment("20190601"),
          to: null,
          description: "Fui responsável pelo desenvolvimento e manutenção de interfaces e APIs que atendem as necessidades e demandas dos funcionários internos das áreas de Wealth Management.",
          tecnologies: [
            {name: "CSS", subtecnologies: ["Bootstrap", "Tailwind"]},
            {name: "Javascript", subtecnologies: ["React"]},
            {name: "Mobile", subtecnologies: ["React Native"]},
            {name: "C#", subtecnologies: ["Web API"]},
            {name: "SQL", subtecnologies: ["SQL Server"]},
            {name: "Message Broker", subtecnologies: ["RabbitMQ"]},
            {name: "Web Server", subtecnologies: ["IIS"]},
            {name: "CI/CD", subtecnologies: ["TeamCity"]},
            {name: "Monitoring", subtecnologies: ["Grafana"]},
          ]
        },
        {
          company: "BTG Pactual",
          position: "Analista de Desenvolvimento Web",
          from: this.$moment("20190101"),
          to: this.$moment("20190601"),
          description: "Fui responsável pelo desenvolvimento e manutenção de interfaces e APIs que atendem as necessidades e demandas dos funcionários internos e clientes externos das áreas de Asset Management.",
          tecnologies: [
            {name: "HTML", subtecnologies: ["Pug"]},
            {name: "CSS", subtecnologies: ["Bootstrap"]},
            {name: "Javascript", subtecnologies: ["VueJS"]},
            {name: "C#"},
            {name: "Node.js", subtecnologies: ["Express"]},
            {name: "SQL", subtecnologies: ["SQL Server", "Postgres"]},
            {name: "Infra as Code", subtecnologies: ["Docker", "Rancher"]},
            {name: "CI/CD", subtecnologies: ["Azure DevOps"]},
            {name: "Cloud", subtecnologies: ["AWS"]},
          ]
        },
        {
          company: "Stone Pagamentos",
          position: "Analista de Desenvolvimento Web",
          from: this.$moment("20180801"),
          to: this.$moment("20181201"),
          description: "Fui responsável pelo desenvolvimento e manutenção de interfaces e APIs que permitem a identificação e análise de lojistas que apresentaram comportamento transacional suspeito, suprindo a necessidade dos funcionários internos das áreas de Monitoramento, Credenciamento, Prevenção e Antifraude.",
          tecnologies: [
            {name: "C#", subtecnologies: ["WCF"]},
            {name: "Python"},
            {name: "SQL", subtecnologies: ["SQL Server"]},
            {name: "CI/CD", subtecnologies: ["Azure DevOps", "GoCD"]},
            {name: "Logs", subtecnologies: ["Splunk"]},
          ]
        },
        {
          company: "Banco Modal",
          position: "Estagiário de Desenvolvimento Web",
          from: this.$moment("20170601"),
          to: this.$moment("20180701"),
          description: "Fui responsável pelo desenvolvimento e manutenção de serviços e APIs do projeto do Banco Digital, pela criação de novas funcionalidades para o sistema interno da empresa, além de ter iniciado os projetos de migração dos sites institucionais do banco para a utilização da JAMstack.",
          tecnologies: [
            {name: "HTML"},
            {name: "CSS", subtecnologies: ["Bootstrap"]},
            {name: "Javascript", subtecnologies: ["React"]},
            {name: "C#", subtecnologies: ["Web API", "WCF"]},
            {name: "SQL", subtecnologies: ["SQL Server"]},
          ]
        },
        {
          company: "CEFET/RJ",
          position: "Bolsista de Iniciação Científica",
          from: this.$moment("20170101"),
          to: this.$moment("20170601"),
          description: "Fui responsável por implementar e utilizar o framework de Machine Learning chamado Diffusion Map para reduzir a dimensionalidade e extrair funcionalidades do dataset de flores Iris e de datasets formados por características de estrelas, como coordenadas e informações referentes a luminosidade.",
          tecnologies: [
            {name: "R"}
          ]
        },
        {
          company: "Itaú Unibanco",
          position: "Estagiário de Desenvolvimento Web",
          from: this.$moment("20150101"),
          to: this.$moment("20161201"),
          description: "Fui responsável pelo desenvolvimento e manutenção de projetos web dos clientes da área de Previdência, corrigindo bugs e melhorando o desempenho.",
          tecnologies: [
            {name: "HTML"},
            {name: "CSS"},
            {name: "Javascript", subtecnologies: ["Knockout"]},
            {name: "C#"},
            {name: "SQL", subtecnologies: ["SQL Server"]},
          ]
        }
      ],
      educations: [
        {
          degree: "Bacharelado",
          university: "CEFET/RJ",
          course: "Ciência da Computação",
          from: this.$moment(new Date(2012, 5)).format("MMMM/YYYY"),
          to: this.$moment(new Date(2018, 11)).format("MMMM/YYYY")
        }
      ],
      languages: [
        { name: "Português", level: "fluente" },
        { name: "Inglês", level: "avançado" },
      ],
      skills: [
        {
          name: "Front End",
          tecnologies: [
            { name: "HTML", subtecnologies: ["Pug"] },
            { name: "CSS", subtecnologies: ["Bootstrap", "Tailwind", "Sass"] },
            { name: "Javascript", subtecnologies: ["VueJS", "React"]},
            { name: "Mobile", subtecnologies: ["React Native"]},
          ]
        },
        {
          name: "Back End",
          tecnologies: [
            { name: "C#", subtecnologies: ["Web API", "WCF"] },
            { name: "Node.js", subtecnologies: ["Express"] },
            { name: "Python", subtecnologies: ["Django"] },
            { name: "Message Broker", subtecnologies: ["RabbitMQ"] },
          ]
        },
        {
          name: "DBA",
          tecnologies: [
            { name: "SQL", subtecnologies: ["SQL Server", "Postgres", "MySQL"]},
            { name: "NoSQL", subtecnologies: ["MongoDB"]},
            { name: "Cache", subtecnologies: ["Redis"]},
          ]
        },
        {
          name: "DevOps",
          tecnologies: [
            { name: "Linux", subtecnologies: ["Ubuntu", "Debian"]},
            { name: "Web Servers", subtecnologies: ["IIS", "Nginx"]},
            { name: "Infra as Code", subtecnologies: ["Docker", "Rancher"]},
            { name: "CI/CD", subtecnologies: ["Travis CI", "GoCD", "TeamCity"]},
            { name: "Logs", subtecnologies: ["Splunk"]},
            { name: "Cloud", subtecnologies: ["AWS"]},
            { name: "Monitoring", subtecnologies: ["Grafana"]},
          ]
        }
      ],
      certifications: [
        {
          title: "DevOps Essentials Professional",
          company: "CertiProf",
          date: this.$moment("20190101"),
          url: "bit.ly/2HnzVtH"
        },
        {
          title: "Scrum Foundation Professional",
          company: "CertiProf",
          date: this.$moment("20190101"),
          url: "bit.ly/2T2kF6Y"
        },
      ],
    }
  }
};
</script>