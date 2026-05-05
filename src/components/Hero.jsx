export default function Hero() {
    return (
        <section className="min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-r from-gray-900 to-black text-white">
            <h1 className="text-5xl md:text-6xl font-bold">
                Liva Jaona Silasy
            </h1>

            <h2 className="text-2xl mt-4 text-gray-300">
                Développeur Fullstack
            </h2>

            <p className="mt-4 max-w-xl text-gray-400">
                Je conçois et développe des applications web modernes avec Laravel, Angular et React.
            </p>

            <div className="mt-6 flex gap-4">
                <a
                    href="#projects"
                    className="px-6 py-3 bg-primary rounded-lg shadow-lg hover:scale-105 transition"
                >
                    Voir mes projets
                </a>

                <a
                    href="#experience"
                    className="px-6 py-3 bg-primary rounded-lg shadow-lg hover:scale-105 transition"
                >
                    Voir mes expériences
                </a>
            </div>
        </section>
    );
}