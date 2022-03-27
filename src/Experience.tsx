import { DateTime } from "luxon";

import Technology from "./Technology";

const Experience = (experience: {
    position: string
    company: string
    from: Date
    to?: Date
    description: string
    technologies: {
        name: string
        subtechnologies?: string[]
    }[]
}) => {
    const getDateDiffInMonths = (date1: Date, date2: Date | undefined): Number => {
        const from = DateTime.fromJSDate(date1);
        const to = DateTime.fromJSDate(date2 || new Date());
        const diff = to.diff(from, ["months"]);
        return Math.ceil(diff.months) + 1;
    }

    return (
        <div className="space-y-1">
            <div className="text-xl font-bold leading-none">{experience.position}</div>
            <div className="text-lg leading-none">{experience.company}</div>
            <div className="space-x-1">
                <div className="inline-block">{DateTime.fromJSDate(experience.from).setLocale("pt-BR").toFormat('MMMM/yyyy')}</div>
                <div className="inline-block">-</div>
                <div className="inline-block">{experience.to ? DateTime.fromJSDate(experience.to).setLocale("pt-BR").toFormat('MMMM/yyyy') : 'atualmente'}</div>
                <div className="inline-block">•</div>
                <div className="inline-block">{getDateDiffInMonths(experience.from, experience.to)} mes(es)</div>
            </div>
            <div className="print:hidden">{experience.description}</div>
            <div>
                {experience.technologies.map((technology, i) => {
                    return <Technology {...technology} key={i} />
                })}
            </div>
        </div>
    )
}

export default Experience
