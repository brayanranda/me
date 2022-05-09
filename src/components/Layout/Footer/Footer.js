/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/alt-text */
import data from "../../../data/data.json";

export default function Footer() {
  return (
    <footer className="w-full bg-black py-4">
      <div className="text-white mx-auto w-9/12 text-center lg:flex items-center justify-between">
        <figure className="lg:flex items-center">
          <img className="mx-auto lg:mx-0 w-5" src={data.images[1].favicon} />
          <p className="font-bold lg:ml-2 text-sm mt-4 lg:mt-0">
            @brayanismaelpr
          </p>
        </figure>
        <ul className="flex justify-center mt-4 lg:mt-0">
          {data.socialmedia.map((el, id) => (
            <li
              key={id}
              className="cursor-pointer bg-gray-800 h-10 w-10 flex items-center justify-center rounded-full mr-4 lg:mr-0 lg:ml-4 duration-300 hover:bg-gray-700"
            >
              <a
                className="flex"
                target="_blank"
                href={el.url}
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title={el.title}
              >
                <i className={el.ico}></i>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
