import React from 'react'
import ProjectList from '../../../components/projects/ProjectList'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode } from '@fortawesome/free-solid-svg-icons'

export default function Projects({ dark = true }) {
  return (
    <section className={`${dark ? "bg-black" : ""} w-full py-14`}>
      <h1 className={`${dark ? "text-white" : ""} mx-auto w-9/12 text-left text-3xl font-bold mb-10 flex items-center`}>
        <FontAwesomeIcon icon={faCode} className="mr-4 text-2xl" />
        Proyectos
      </h1>
      <ProjectList dark={dark} />
    </section>
  )
}
