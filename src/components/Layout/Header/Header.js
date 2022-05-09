/* eslint-disable jsx-a11y/alt-text */
import data from "../../../data/data.json";

export default function Header() {
  return (
    <header className="w-full bg-black">
      <nav className="mx-auto w-9/12 flex items-center justify-between">
        <a
          href="/"
          data-bs-toggle="tooltip"
          data-bs-placement="top"
          title="Inicio"
        >
          <img className="w-32 md:w-36" src={data.images[0].logo} />
        </a>
        <ul className="flex items-center py-5 text-white">
          {data.menu.map((el, id) => (
            <li key={id} className="pl-8">
              <a className="hover:text-blue-500" href={el.href}>
                {el.li}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
