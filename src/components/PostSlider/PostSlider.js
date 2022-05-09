import './PostSlider.css';

export default function PostSlider() {
    return(
        <>
            <section className="PostSlider w-full flex flex-col justify-end">
                <article className="pb-8 text-left relative z-10 text-white flex items-end justify-between mx-auto w-7/12">
                    <div>
                        <p className="">JANUARY 16, 2021</p>
                        <h1 className="text-4xl font-bold">
                            Retos para desarrolladores Web
                        </h1>
                    </div>
                    <div className="flex items-center">
                        <p className="mr-3">15</p>
                        <i class="text-2xl fas fa-heart"></i>
                    </div>
                </article>
            </section>
        </>
    );
}