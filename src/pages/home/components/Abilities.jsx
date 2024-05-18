import { faDesktop, faIcons, faPencilRuler } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'

export default function Abilities() {
  const [clases] = useState("mx-auto items-center justify-center rounded-md w-10 md:w-12 h-10 md:h-12 p-6 text-white");
  
  return (
    <section className="w-full py-14 text-center">
      <article className="mx-auto w-9/12 pb-10">
        <h3 className="text-md md:text-xl font-bold text-blue-500 uppercase">Habilidades</h3>
      </article>
      <article className="mx-auto w-9/12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div data-aos="zoom-in-up" className="content-ico">
          <FontAwesomeIcon className={`bg-blue-500 ${clases}`} icon={faPencilRuler} />
          <h1 className="text-xl md:text-3xl my-4">Diseño a la medida</h1>
        </div>
        <div data-aos="zoom-in-up" className="content-ico">
          <FontAwesomeIcon className={`bg-green-500 ${clases}`} icon={faDesktop} />
          <h1 className="text-xl md:text-3xl my-4">Diseño web</h1>
        </div>
        <div data-aos="zoom-in-up" className="content-ico">
          <FontAwesomeIcon className={`bg-yellow-400 ${clases}`} icon={faIcons} />
          <h1 className="text-xl md:text-3xl my-4">Contenido Multimedia </h1>
        </div>
      </article>
    </section>
  )
}
