
import type { Project } from "../types/projects";
import imgForIt from "../assets/imgForIT.png";

export const projects: Project[] = [
  {
    id: "forit",
    title: "E-commerce - ForIt",

    shortDescription:
      "Backend de e-commerce desarrollado con TypeScript, PostgreSQL y Docker.",

    description:
      "E-commerce actualmente en desarrollo, construido siguiendo principios de Clean Architecture y Clean Code. El proyecto incorpora prácticas de seguridad a nivel de base de datos mediante roles y el principio de mínimo privilegio.",

    image: imgForIt,

    technologies: [
      "typescript",
      "nodejs",
      "express",
      "postgresql",
      "prisma",
      "docker",
    ],

    categories: ["backend", "database", "security"],

    architecture: [
      "Clean Architecture",
      "Clean Code",
      "Repository Pattern",
    ],

    security: [
      "Roles de base de datos",
      "Principio de mínimo privilegio",
      "Separación de responsabilidades y permisos",
      "Configuración mediante variables de entorno",
    ],

    status: "En desarrollo",

    // Agregá estos campos cuando tengas las URL definitivas.
    // repository: "URL_REAL_DE_TU_REPOSITORIO",
    // video: "https://www.youtube.com/embed/ID_DEL_VIDEO",
  },
];
