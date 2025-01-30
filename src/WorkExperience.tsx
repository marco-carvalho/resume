import { DateTime } from "luxon";

export interface WorkExperienceProps {
  position: string;
  company: string;
  from: Date;
  to?: Date;
  description: string;
}

const WorkExperience = (experience: WorkExperienceProps) => {
  return (
    <div className="relative">
      <div className="text-xl font-bold leading-none">{experience.company}</div>
      <div className="text-lg font-semibold leading-none">
        {experience.position}
      </div>
      <div className="break-keep">{experience.description}</div>
      <div className="absolute top-0 right-0 italic space-x-1">
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
    </div>
  );
};

export default WorkExperience;
