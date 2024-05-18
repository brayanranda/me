import React from 'react'
import { slider } from '../../../utils/utils'

export default function Slider() {
  return (
    <section className="w-full">
      <article className="mx-auto w-full">
        <div className="splide">
          <div className="splide__track">
            <ul className="splide__list">
              {slider.map((el, id) => (
                <li key={id} className="splide__slide">
                  <figure className="relative items-center justify-between w-full">
                    <img
                      className="relative z-0 top-0 left-0 w-full h-96 md:h-96 object-fit object-cover"
                      src={el.image}
                    />
                    <figcaption className="overflow-hidden px-14 md:px-24 justify-center text-white flex items-start flex-col h-96 md:h-96 bg-black-slider absolute z-10 top-0 right-0 text-left w-full md:w-1/2 py-8 md:py-0">
                      <p data-aos="zoom-in-up" className="font-bold">
                        Proyectos
                      </p>
                      <h1
                        data-aos="zoom-in-up"
                        className="font-bold text-3xl lg:text-5xl typography"
                      >
                        {el.title}
                      </h1>
                      <p
                        data-aos="zoom-in-up"
                        className="my-3 lg:my-5 leading-7 text-md lg:text-xl"
                      >
                        {el.description}
                      </p>
                      <div className="flex items-center">
                        <a
                          data-aos="zoom-in-up"
                          target="_blank"
                          className="hover:bg-black duration-300 hover:border-black hover:text-white text-black mr-2 h-9 rounded-md px-2 flex items-center justify-center border-2 border-white bg-white"
                          href={el.url}
                        >
                          Ver más
                        </a>
                      </div>
                    </figcaption>
                  </figure>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </article>
    </section>
  )
}
