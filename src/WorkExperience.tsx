import { Fragment } from "react";
import { formatMonthYear } from "./formatMonthYear";

export interface WorkExperienceProps {
  position: string;
  company: string;
  from: Temporal.PlainYearMonth;
  to?: Temporal.PlainYearMonth | null;
  stack: string;
  bullets: string[];
}

const WorkExperience = (experience: WorkExperienceProps) => {
  return (
    <div className="break-inside-avoid">
      <div className="flex justify-between items-baseline">
        <div className="text-xl font-bold">{experience.company}</div>
        <div className="italic">
          {formatMonthYear(experience.from)} -{" "}
          {experience.to ? formatMonthYear(experience.to) : "Present"}
        </div>
      </div>
      <div className="text-lg font-semibold">{experience.position}</div>
      <div className="text-sm italic text-gray-600">{experience.stack}</div>
      <ul className="list-disc list-outside ml-5 break-keep">
        {experience.bullets.map((bullet, i) => (
          <li key={i}>
            {bullet.split(" ").map((word, j, words) => (
              <Fragment key={j}>
                {word.includes("-") ? (
                  <span className="whitespace-nowrap">{word}</span>
                ) : (
                  word
                )}
                {j < words.length - 1 && " "}
              </Fragment>
            ))}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WorkExperience;
