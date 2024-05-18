import React from 'react'
import ProjectCard from './ProjectCard'
import { projects } from '../../utils/data'

export default function ProjectList({ dark }) {

    return (
        <article className="mx-auto w-9/12 grid md:grid-cols-2 lg:grid-cols-3 gap-16">
            {
                projects && projects.length > 0 &&
                    projects.map((project, index) =>
                        <ProjectCard project={project} key={index} dark={dark} />
                    )
            }
        </article>
    )
}

