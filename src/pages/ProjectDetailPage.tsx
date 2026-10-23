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
        <main className="w-9/10 max-w-5xl mx-auto py-20">
          <h1 className="text-3xl font-bold">Proyecto no encontrado</h1>
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

      <main className="w-9/10 max-w-5xl mx-auto py-10 md:py-16">
        <Link
          to="/proyectos"
          className="inline-flex items-center gap-2 mb-8 opacity-80 hover:opacity-100"
        >
          <span aria-hidden="true">←</span>
          Volver a los proyectos
        </Link>

        {/* Presentación */}
        <header className="mb-12">
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span className="rounded-full border border-(--color-details) px-4 py-1 text-sm">
              {project.status}
            </span>

            {project.categories.map((category) => (
              <span key={category} className="text-sm opacity-70">
                #{category}
              </span>
            ))}
          </div>

          <h1 className="text-4xl md:text-5xl font-bold">{project.title}</h1>

          <p className="text-xl md:text-2xl leading-relaxed py-5 opacity-90">
            {project.shortDescription}
          </p>

          <p className="leading-relaxed opacity-80 max-w-4xl">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-4 mt-7">
            {project.repository && (
              <a
                href={project.repository}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-(--color-button) text-black py-3 px-6 rounded-full"
              >
                Ver repositorio en GitHub ↗
              </a>
            )}
          </div>

        {/* Tecnologías */}
          <div id="tool" className="pt-4">
            <ul className="flex flex-wrap items-center gap-4">
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
                      title={`Sitio oficial de ${technology.name}`}
                    >
                      {technology.icon && (
                        <img
                          className="button-icon"
                          src={technology.icon}
                          alt=""
                          loading="lazy"
                        />
                      )}

                      <span>{technology.name}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </header>

        {/* Imagen del proyecto */}
        <div className="mb-14 overflow-hidden rounded-3xl border border-(--color-details)">
          <img
            src={project.image}
            alt={`Imagen de ${project.title}`}
            className="w-full max-h-120 object-cover"
          />
        </div>

        {/* Arquitectura y seguridad */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
          <section className="rounded-3xl border border-(--color-details) p-6 md:p-8">
            <h2 className="text-2xl font-bold mb-5">Arquitectura y diseño</h2>

            <ul className="space-y-4">
              {project.architecture.map((item) => (
                <li key={item} className="flex gap-3 leading-relaxed">
                  <span className="opacity-60" aria-hidden="true">
                    ↗
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="rounded-3xl border border-(--color-details) p-6 md:p-8">
            <h2 className="text-2xl font-bold mb-5">Seguridad</h2>

            <ul className="space-y-4">
              {project.security.map((item) => (
                <li key={item} className="flex gap-3 leading-relaxed">
                  <span className="opacity-60" aria-hidden="true">
                    ✓
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* Demostración */}
        {project.video && (
          <section className="mb-14">
            <div className="mb-5">
              <h2 className="text-2xl md:text-3xl font-bold">
                Demostración técnica
              </h2>
              <p className="mt-2 opacity-75">
                Una explicación práctica del funcionamiento y las decisiones
                técnicas del proyecto.
              </p>
            </div>

            <div className="aspect-video overflow-hidden rounded-3xl border border-(--color-details)">
              <iframe
                src={project.video}
                title={`Demostración técnica de ${project.title}`}
                className="w-full h-full"
                loading="lazy"
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>
          </section>
        )}
      </main>

      <Footer />
    </>
  );
}

export default ProjectDetailPage;
