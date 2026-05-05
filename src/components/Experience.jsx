export default function Experience() {
    const experiences = [
        {
            title: "Plateforme de recrutement (Laravel)",
            date: "Mars 2026",
            desc: "Développement d’une plateforme de publication d’offres et candidatures.",
        },
        {
            title: "API REST Laravel + Angular",
            date: "Février 2026",
            desc: "Création d’une API RESTful consommée par Angular avec CRUD complet.",
        },
        {
            title: "Stage ITDC Madagascar",
            date: "Septembre - Décembre 2025",
            desc: "Assistant agronomie intelligent (RAG / React).",
        },
        {
            title: "Projet Fullstack Laravel / Angular",
            date: "Avril - Juin 2025",
            desc: "Application web avec API REST et interface responsive.",
        },
        {
            title: "Stage ORT Fianarantsoa",
            date: "Juin - Septembre 2024",
            desc: "Application tourisme (Laravel + Node.js).",
        },
        {
            title: "Stage C#",
            date: "Juin - Août 2023",
            desc: "Application de gestion de stock.",
        },
    ];

    return (
        <section id="experience" className="p-10 bg-white">
            <h2 className="text-3xl font-bold mb-8 text-center">
                Expériences
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
                {experiences.map((exp, index) => (
                    <div
                        key={index}
                        className="p-6 rounded-xl shadow-lg hover:shadow-2xl transition"
                    >
                        <h3 className="font-bold text-lg">{exp.title}</h3>
                        <p className="text-sm text-gray-500">{exp.date}</p>
                        <p className="mt-2 text-gray-600">{exp.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}