import Project from "../Project/Project";

export default function Projects() {
    return(
        <section className="w-full py-14">
            <h1 className="mx-auto w-9/12 text-left text-2xl mb-10">Proyectos</h1>
            <article className="mx-auto w-9/12 grid md:grid-cols-2 lg:grid-cols-3 gap-16">
                <Project/>
            </article>
        </section>
    );
}