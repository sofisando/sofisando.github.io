
import { Link, useParams } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { projects } from "../data/projects";
import { technologies } from "../data/technologies";

function ProjectDetailPage() {
  const { id } = useParams<{ id: string }>();

  const project = projects.find((item) => item.id === id);

  if (!project) {
    return (
      <>
        <Navbar />

        <main className="w-9/10 mx-auto py-20">
          <h1 className="text-3xl font-bold">
            Proyecto no encontrado
          </h1>

          <p className="py-4">
            El proyecto que buscás no existe o ya no está disponible.
          </p>

          <Link to="/proyectos" className="underline">
            Volver a los proyectos
          </Link>
        </main>

        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <main className="w-9/10 max-w-5xl mx-auto py-12">
        <Link to="/proyectos" className="inline-block mb-8 underline">
          ← Volver a los proyectos
        </Link>

        <img
          src={project.image}
          alt={`Imagen de ${project.title}`}
          className="w-full max-h-120 object-cover rounded-3xl"
        />

        <div className="py-8">
          <span className="inline-block mb-3 text-sm opacity-80">
            {project.status}
          </span>

          <h1 className="text-4xl font-bold">
            {project.title}
          </h1>

          <p className="text-xl py-4">
            {project.shortDescription}
          </p>

          <p className="leading-relaxed">
            {project.description}
          </p>
        </div>

        <section className="py-6">
          <h2 className="text-2xl font-bold mb-4">
            Tecnologías
          </h2>

          <ul className="flex flex-wrap gap-5">
            {project.technologies.map((technologyId) => {
              const technology = technologies[technologyId];

              if (!technology) return null;

              return (
                <li key={technology.id}>
                  <a
                    href={technology.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    {technology.icon && (
                      <img
                        src={technology.icon}
                        alt=""
                        className="button-icon"
                        loading="lazy"
                      />
                    )}
                    {technology.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </section>

        <section className="py-6">
          <h2 className="text-2xl font-bold mb-4">
            Arquitectura y diseño
          </h2>

          <ul className="list-disc pl-6 space-y-2">
            {project.architecture.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="py-6">
          <h2 className="text-2xl font-bold mb-4">
            Seguridad
          </h2>

          <ul className="list-disc pl-6 space-y-2">
            {project.security.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="py-6">
          <h2 className="text-2xl font-bold mb-4">
            Categorías
          </h2>

          <div className="flex flex-wrap gap-3">
            {project.categories.map((category) => (
              <span
                key={category}
                className="rounded-full border border-(--color-details) px-4 py-2"
              >
                {category}
              </span>
            ))}
          </div>
        </section>

        {project.video && (
          <section className="py-8">
            <h2 className="text-2xl font-bold mb-4">
              Demostración técnica
            </h2>

            <div className="aspect-video overflow-hidden rounded-2xl">
              <iframe
                src={project.video}
                title={`Video de ${project.title}`}
                className="w-full h-full"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>
          </section>
        )}

        {project.repository && (
          <div className="py-8">
            <a
              href={project.repository}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-(--color-button)
                text-black py-3 px-6 rounded-full"
            >
              Ver repositorio en GitHub
            </a>
          </div>
        )}
      </main>

      <Footer />
    </>
  );
}

export default ProjectDetailPage;
