import { DateTime } from "luxon";

const WorkExperience = (experience: {
  position: string;
  company: string;
  from: Date;
  to?: Date;
  description: string;
  skills: {
    name: string;
    subskills?: string[];
  }[];
}) => {
  return (
    <div>
      <div className="text-xl font-bold leading-none">{experience.company}</div>
      <div className="text-xl font-semibold leading-none">
        {experience.position}
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

export default WorkExperience;
