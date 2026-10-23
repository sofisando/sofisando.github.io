import { Link } from "react-router";
import type { Project } from "../types/projects";
import { technologies } from "../data/technologies";

interface ProjectCardProps {
  project: Project;
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <section
      className="
        relative p-8 my-15
        bg-center bg-cover
        w-9/10 mx-auto rounded-3xl min-h-130 overflow-hidden
        flex flex-col gap-12
        justify-center items-center

        md:text-left md:justify-end md:items-start md:pb-20
      "
      style={{
        backgroundImage: `url("${project.image}")`,
      }}
    >
      {/* Degradado original */}
      <div className="absolute inset-0 bg-linear-to-b from-black/50 to-black/80" />

      {/* Contenido */}
      <div className="relative z-10 w-full">
        <h2 className="text-2xl font-bold">
          {project.title}
        </h2>

        <p className="pt-2 max-w-3xl">
          {project.shortDescription}
        </p>

        <div id="tool" className="pb-6 pt-4">
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

        <Link
          to={`/proyectos/${project.id}`}
          className="
            inline-block
            bg-(--color-button) text-black
            py-3 px-6 rounded-full
          "
        >
          Ver proyecto
        </Link>
      </div>
    </section>
  );
}

export default ProjectCard;
