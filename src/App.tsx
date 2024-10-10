import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { DateTime } from "luxon";

import Experience from "./Experience";
import Technology from "./Technology";
import CV from "./CV";

function App() {
  return (
    <div
      id="app"
      className="mx-auto container leading-none space-y-2 max-w-2xl"
    >
      <div className="text-center text-4xl font-bold uppercase">{CV.name}</div>
      <div className="text-center flex flex-wrap space-y-2 md:space-y-0 print:space-y-0">
        <div className="w-full md:w-1/3 print:w-1/3 space-x-1">
          <FontAwesomeIcon icon={faEnvelope} />
          <a href={`mailto:${CV.mail}`} className="inline text-gray-500">
            {CV.mail}
          </a>
        </div>
        <div className="w-full md:w-1/3 print:w-1/3 space-x-1">
          <FontAwesomeIcon icon={faGithub} />
          <a
            href={`https://github.com/${CV.github}`}
            className="inline text-gray-500"
          >
            {CV.github}
          </a>
        </div>
        <div className="w-full md:w-1/3 print:w-1/3 space-x-1">
          <FontAwesomeIcon icon={faLinkedin} />
          <a
            href={`https://linkedin.com/in/${CV.linkedin}`}
            className="inline text-gray-500"
          >
            {CV.linkedin}
          </a>
        </div>
      </div>
      <div className="space-y-1">
        <div className="bg-black uppercase text-center text-white rounded mb-2 text-xl">
          <div className="font-bold p-1">Resume</div>
        </div>
        <div className="font-normal">{CV.resume}</div>
      </div>
      <div className="space-y-1">
        <div className="bg-black uppercase text-center text-white rounded mb-2 text-xl">
          <div className="font-bold p-1">Professional History</div>
        </div>
        <div className="space-y-2">
          {CV.experiences.map((experience, i) => (
            <Experience key={i} {...experience} />
          ))}
        </div>
      </div>
      <div className="space-y-1">
        <div className="bg-black uppercase text-center text-white rounded mb-2 text-xl">
          <div className="font-bold p-1">Skills</div>
        </div>
        {CV.skills.map((skill) => {
          return (
            <div className="text-center">
              {skill.technologies.map((technology) => {
                return <Technology {...technology} />;
              })}
            </div>
          );
        })}
      </div>
      <div className="flex">
        <div className="w-1/2 px-2">
          <div>
            <div className="text-center">
              <div className="bg-black uppercase text-center text-white rounded mb-2 text-xl">
                <div className="font-bold p-1">Education</div>
              </div>
              {CV.educations.map((education, i) => {
                return (
                  <div key={i}>
                    <div className="font-bold">
                      {education.degree} - {education.university}
                    </div>
                    <div className="font-bold">{education.course}</div>
                    <div className="d-block">
                      {DateTime.fromJSDate(education.from).toFormat(
                        "MMMM/yyyy"
                      )}{" "}
                      -{" "}
                      {DateTime.fromJSDate(education.to).toFormat("MMMM/yyyy")}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="w-1/2 px-2">
          <div>
            <div className="text-center">
              <div className="bg-black uppercase text-center text-white rounded mb-2 text-xl">
                <div className="font-bold p-1">Languages</div>
              </div>
              {CV.languages.map((language, i) => {
                return (
                  <div key={i}>
                    <div className="inline font-bold mr-1">
                      {language.name}:
                    </div>
                    <div className="inline">{language.level}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
