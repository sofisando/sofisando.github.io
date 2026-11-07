import { useState } from "react";
import type { ProjectSection } from "../types/projects";

import { Layers3, ShieldCheck, Database, Container, Code2 } from "lucide-react";

const sectionIcons = {
  layers: Layers3,
  security: ShieldCheck,
  database: Database,
  container: Container,
  code: Code2,
};

interface TechnicalSectionProps {
  section: ProjectSection;
  index: number;
}

function TechnicalSection({ section, index }: TechnicalSectionProps) {
  const [isOpen, setIsOpen] = useState(false);

  const Icon = section.icon
    ? (sectionIcons[section.icon as keyof typeof sectionIcons] ?? Code2)
    : Code2;

  return (
    <article
      id={section.id}
      className={`group rounded-3xl border border-(--color-details)
        transition-colors duration-300
        ${isOpen ? "bg-(--color-details)/5" : ""}`}
    >
      {/* Encabezado */}
      <button
        type="button"
        onClick={() => setIsOpen((previous) => !previous)}
        aria-expanded={isOpen}
        aria-controls={`technical-content-${section.id}`}
        className="w-full p-6 md:p-8 text-left"
      >
        <div className="flex items-center justify-between gap-5">
          <div className="flex items-center gap-4 min-w-0 ">

             <span className="shrink-0 text-sm opacity-50 font-mono">
              {String(index + 1).padStart(2, "0")}
            </span>

            <div
              className="flex items-center justify-center shrink-0 w-11 h-11 rounded-xl bg-(--color-details)/10">
              <Icon size={22} strokeWidth={1.6} />
            </div>

           

            <div className="min-w-0">
              <h2 className="text-xl md:text-2xl font-bold">{section.title}</h2>

              <p className="mt-2 leading-relaxed opacity-75 max-w-3xl">
                {section.summary}
              </p>
            </div>
          </div>

          <span
            aria-hidden="true"
            className={`shrink-0 flex items-center justify-center
              w-10 h-10 rounded-full border border-(--color-details)
              text-xl transition-transform duration-500 ease-in-out
              ${isOpen ? "rotate-45" : "rotate-0"}`}
          >
            +
          </span>
        </div>

        <div className="mt-5 flex items-center gap-2 text-xs opacity-50">
          <span>{isOpen ? "Cerrar sección" : "Explorar contenido"}</span>
          <span aria-hidden="true">↗</span>
        </div>
      </button>

      {/* Contenido desplegable */}
      <div
        id={`technical-content-${section.id}`}
        className={`grid transition-[grid-template-rows] duration-500 ease-in-out
          ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
        aria-hidden={!isOpen}
        inert={!isOpen}
      >
        <div className="overflow-hidden min-h-0">
          <div className="mx-6 md:mx-8 border-t border-(--color-details)" />

          <div className="px-6 md:px-8 py-6 space-y-5 leading-relaxed text-left">
            {section.paragraphs?.map((paragraph, index) => (
              <p key={`${section.id}-paragraph-${index}`}>{paragraph}</p>
            ))}

            {section.items && section.items.length > 0 && (
              <ul className="space-y-4 m-6">
                {section.items.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="opacity-60" aria-hidden="true">
                      ↗
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )}

            {section.image && (
              <figure className="space-y-2">
                <img
                  src={section.image}
                  alt={section.imageAlt ?? section.title}
                  loading="lazy"
                  className="w-full rounded-2xl border border-(--color-details)"
                />

                {section.imageAlt && (
                  <figcaption className="text-sm opacity-70">
                    {section.imageAlt}
                  </figcaption>
                )}
              </figure>
            )}

            {section.code && (
              <pre className="overflow-x-auto rounded-2xl border border-(--color-details) p-4 text-sm">
                <code>{section.code}</code>
              </pre>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

export default TechnicalSection;
