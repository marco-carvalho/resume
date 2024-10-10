import { DateTime } from "luxon";

const Experience = (experience: {
  position: string;
  company: string;
  from: Date;
  to?: Date;
  description: string;
  technologies: {
    name: string;
    subtechnologies?: string[];
  }[];
}) => {
  return (
    <div>
      <div className="text-xl font-bold leading-none">
        {experience.position} - {experience.company}
      </div>
      <div className="space-x-1 italic">
        <div className="inline-block">
          {DateTime.fromJSDate(experience.from).toFormat("MMMM/yyyy")}
        </div>
        <div className="inline-block">-</div>
        <div className="inline-block">
          {experience.to
            ? DateTime.fromJSDate(experience.to).toFormat("MMMM/yyyy")
            : "today"}
        </div>
      </div>
      <div className="break-keep">{experience.description}</div>
    </div>
  );
};

export default Experience;
