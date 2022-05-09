import Project from '../../components/Project/Project';
import Header from '../../components/Layout/Header/Header';
import Footer from '../../components/Layout/Footer/Footer';

export default function blog() {
    return(
        <>
            <Header/>
            <section className="w-full py-14">
                <h1 className="mx-auto w-9/12 text-left text-2xl mb-10">Articulos</h1>
                <article className="mx-auto w-9/12 grid md:grid-cols-2 lg:grid-cols-3 gap-16">
                    <Project/>
                </article>
            </section>
            <Footer/>
        </>
    );
}