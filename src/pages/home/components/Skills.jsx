import React from 'react'
import { technologies } from '../../../utils/data'

export default function Skills() {
  return (
    <section className="lg:text-left bg-gradient-to-r from-blue-50 w-full py-14">
      <article className="mx-auto w-9/12 lg:flex justify-between items-center">
        <h2 className="w-full lg:w-1/2 text-2xl md:text-3xl mb-12 lg:mb-0 mr-0 md:mr-6">
          Tecnologias enfocadas en el Diseño y Desarrollo front-end de
          Aplicativos Webs.
        </h2>

        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:grid-cols-5 mr-0 md:ml-6 text-center">
          {technologies.map((el, id) => (
            <div
              className="tooltip flex items-center"
              key={id}
            >
              <img className={el.class} src={el.src} alt={el.alt} />
            </div>
          ))}
        </div>
      </article>
    </section>
  )
}
