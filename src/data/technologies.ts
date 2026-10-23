
import type { Technology } from "../types/projects";

import typescriptLogo from "../assets/typescriptLogo.svg";
import nodejsLogo from "../assets/nodejs.svg";
import dockerLogo from "../assets/docker.svg";
import postgresqlLogo from "../assets/postgresql.svg";
import prismaLogo from "../assets/prisma.svg";
import reactLogo from "../assets/react.svg";
import viteLogo from "../assets/vite.svg";

export const technologies: Record<string, Technology> = {
  typescript: {
    id: "typescript",
    name: "TypeScript",
    url: "https://www.typescriptlang.org/",
    icon: typescriptLogo,
  },

  nodejs: {
    id: "nodejs",
    name: "Node.js",
    url: "https://nodejs.org/",
    icon: nodejsLogo,
  },

  express: {
    id: "express",
    name: "Express",
    url: "https://expressjs.com/",
  },

  postgresql: {
    id: "postgresql",
    name: "PostgreSQL",
    url: "https://www.postgresql.org/",
    icon: postgresqlLogo,
  },

  prisma: {
    id: "prisma",
    name: "Prisma",
    url: "https://www.prisma.io/orm",
    icon: prismaLogo,
  },

  docker: {
    id: "docker",
    name: "Docker",
    url: "https://www.docker.com/",
    icon: dockerLogo,
  },

  react: {
    id: "react",
    name: "React",
    url: "https://react.dev/",
    icon: reactLogo,
  },

  vite: {
    id: "vite",
    name: "Vite",
    url: "https://vite.dev/",
    icon: viteLogo,
  },
};
