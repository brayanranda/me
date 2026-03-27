import React from 'react'
import { slider } from '../../../utils/utils'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { Link } from 'react-router-dom';
import '@splidejs/react-splide/css';

export default function Slider() {
  return (
    <Splide aria-label="My Favorite Images">
      {
        slider.map((el, id) =>
          <SplideSlide key={id}>
            <figure className="relative items-center justify-between w-full">
              <img
                className="relative z-0 top-0 left-0 w-full h-96 md:h-96 object-fit object-cover"
                src={el.image}
              />
              <figcaption className="overflow-hidden px-14 md:px-24 justify-center text-white flex items-start flex-col h-96 md:h-96 bg-black-slider absolute z-10 top-0 right-0 text-left w-full md:w-1/2 py-8 md:py-0">
                <p className="font-bold">
                  Proyectos
                </p>
                <h1 className="font-bold text-3xl lg:text-5xl typography">{el.title}</h1>
                <p className="my-3 lg:my-5 leading-7 text-md lg:text-xl">{el.description}</p>
              </figcaption>
            </figure>
          </SplideSlide>
        )
      }
    </Splide>
  )
}