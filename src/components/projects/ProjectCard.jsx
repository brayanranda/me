import React from 'react'
import { Link } from 'react-router-dom'

export default function ProjectCard({ project, dark }) {
    return (
        <Link to={project.url} target='_blank'>
           <figure className={`${dark ? "text-white" : ""} text-left transform duration-300 hover:scale-105`}>
                <img
                    className="rounded-md w-full h-60 object-fit object-cover"
                    src={project.img}
                />
                <figcaption className="w-full">
                    <p className="text-xl md:text-2xl">{project.title}</p>
                </figcaption>
            </figure>
        </Link>
    )
}