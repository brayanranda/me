/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-target-blank */
import data from "../../data/proyects.json";

export default function Project() {
  return (
    <>
      {data.projects.map((el, id) => (
        <a key={id} target="_blank" href={el.url}>
          <figure className="text-left transform duration-300 hover:scale-105">
            <img
              className="rounded-md w-full h-60 object-fit object-cover"
              src={el.img}
            />
            <figcaption className="w-full">
              <p className="text-sm mt-4">{el.date}</p>
              <p className="text-xl md:text-2xl">{el.title}</p>
            </figcaption>
          </figure>
        </a>
      ))}
    </>
  );
}
