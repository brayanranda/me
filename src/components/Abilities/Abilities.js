export default function Abilities() {
  return (
    <section className="w-full py-14">
      <article className="mx-auto w-9/12 pb-10">
        <h3 className="text-md md:text-xl font-bold text-blue-500 uppercase">
          Habilidades
        </h3>
        <h2 className="text-xl md:text-3xl">
          Conoce nuestra forma de trabajo.
        </h2>
      </article>
      <article className="mx-auto w-9/12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="content-ico">
          <i class="mx-auto items-center justify-center rounded-md w-20 md:w-28 h-20 md:h-28 bg-blue-500 text-4xl md:text-6xl text-white fas fa-pencil-ruler"></i>
          <h1 className="text-xl md:text-3xl my-4">Diseño a la medida</h1>
        </div>
        <div className="content-ico">
          <i class="mx-auto items-center justify-center rounded-md w-20 md:w-28 h-20 md:h-28 bg-green-500 text-4xl md:text-6xl text-white fas fa-desktop"></i>
          <h1 className="text-xl md:text-3xl my-4">Diseño web</h1>
        </div>
        <div className="content-ico">
          <i class="mx-auto items-center justify-center rounded-md w-20 md:w-28 h-20 md:h-28 bg-yellow-400 text-4xl md:text-6xl text-white fas fa-icons"></i>
          <h1 className="text-xl md:text-3xl my-4">Contenido Multimedia </h1>
        </div>
      </article>
    </section>
  );
}
