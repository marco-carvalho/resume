import { formatMonthYear } from "./formatMonthYear";

export interface AcademicExperienceProps {
  university: string;
  degree: string;
  course: string;
  from: Temporal.PlainYearMonth;
  to: Temporal.PlainYearMonth;
}

const AcademicExperience = (experience: AcademicExperienceProps) => {
  return (
    <div>
      <div className="font-bold">{experience.university}</div>
      <div className="font-semibold">
        {experience.degree} - {experience.course}
      </div>
      <div className="d-block">
        {formatMonthYear(experience.from)} - {formatMonthYear(experience.to)}
      </div>
    </div>
  );
};

export default AcademicExperience;
