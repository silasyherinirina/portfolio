export default function Projects() {
    const projects = [
        {
            name: "Jobs App",
            link: "https://github.com/silasyherinirina/my_jobs_app",
        },
        {
            name: "API Laravel",
            link: "https://github.com/silasyherinirina/base-api",
        },
        {
            name: "Gestion Soldes",
            link: "https://github.com/silasyherinirina/gestion-des-Soldes-d--t-",
        },
        {
            name: "Tourisme App",
            link: "https://github.com/silasyherinirina/tourisme_app",
        },
    ];

    return (
        <section id="projects" className="p-10 bg-gray-100">
            <h2 className="text-3xl font-bold mb-8 text-center">
                Projets
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
                {projects.map((proj, index) => (
                    <a
                        key={index}
                        href={proj.link}
                        target="_blank"
                        className="p-6 bg-white rounded-xl shadow hover:scale-105 hover:shadow-xl transition"
                    >
                        <h3 className="font-bold text-lg">{proj.name}</h3>
                        <p className="text-gray-500 mt-2">
                            Voir sur GitHub →
                        </p>
                    </a>
                ))}
            </div>
        </section>
    );
}