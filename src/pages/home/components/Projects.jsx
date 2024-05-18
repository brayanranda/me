import React from 'react'
import ProjectList from '../../../components/projects/ProjectList'

export default function Projects({ dark = true }) {
  return (
    <section className={`${dark ? "bg-black" : ""} w-full py-14`}>
        <h1 className={`${dark ? "text-white" : ""} mx-auto w-9/12 text-left text-2xl mb-10`}>Proyectos</h1>
        <ProjectList dark={dark} />
    </section>
  )
}
