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
    return (
        <div className="space-y-1">
            <div className="text-xl font-bold leading-none">{experience.position}</div>
            <div className="text-lg font-bold leading-none">{experience.company}</div>
            <div className="space-x-1 italic">
                <div className="inline-block">{DateTime.fromJSDate(experience.from).setLocale("pt-BR").toFormat('MMMM/yyyy')}</div>
                <div className="inline-block">-</div>
                <div className="inline-block">{experience.to ? DateTime.fromJSDate(experience.to).setLocale("pt-BR").toFormat('MMMM/yyyy') : 'atualmente'}</div>
            </div>
            <div className="break-keep">{experience.description}</div>
        </div>
    )
}

export default Experience;
