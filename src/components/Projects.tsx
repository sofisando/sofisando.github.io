
import { useState } from "react";
import { projects } from "../data/projects";
import { technologies } from "../data/technologies";
import ProjectCard from "./ProjectCard";
import "./Projects.css";

function Projects() {
  const [selectedTechnology, setSelectedTechnology] = useState("all");

  const filteredProjects =
    selectedTechnology === "all"
      ? projects
      : projects.filter((project) =>
          project.technologies.includes(selectedTechnology)
        );

  return (
    <section id="proyectos" className="py-8">
      <div className="w-9/10 mx-auto">
        <h2 className="text-3xl font-bold mb-6">
          Mis proyectos
        </h2>

        <label htmlFor="technology-filter" className="mr-3">
          Filtrar por tecnología:
        </label>

        <select
          id="technology-filter"
          value={selectedTechnology}
          onChange={(event) =>
            setSelectedTechnology(event.target.value)
          }
          className="rounded-lg p-2 bg-(--bg) border border-(--color-details)"
        >
          <option value="all">Todas</option>

          {Object.values(technologies).map((technology) => (
            <option key={technology.id} value={technology.id}>
              {technology.name}
            </option>
          ))}
        </select>
      </div>

      {filteredProjects.length > 0 ? (
        filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))
      ) : (
        <p className="w-9/10 mx-auto py-8">
          No hay proyectos con esa tecnología.
        </p>
      )}
    </section>
  );
}

export default Projects;
