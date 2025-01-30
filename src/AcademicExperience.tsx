import { DateTime } from "luxon";

export interface AcademicExperienceProps {
  university: string;
  degree: string;
  course: string;
  from: Date;
  to: Date;
}

const AcademicExperience = (experience: AcademicExperienceProps) => {
  return (
    <div>
      <div className="font-bold">{experience.university}</div>
      <div className="font-semibold">
        {experience.degree} - {experience.course}
      </div>
      <div className="d-block">
        {DateTime.fromJSDate(experience.from).toFormat("MMMM/yyyy")} -{" "}
        {DateTime.fromJSDate(experience.to).toFormat("MMMM/yyyy")}
      </div>
    </div>
  );
};

export default AcademicExperience;
