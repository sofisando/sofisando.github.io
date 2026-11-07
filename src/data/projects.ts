import type { Project } from "../types/projects";
import imgForIt from "../assets/imgForIT.png";

export const projects: Project[] = [
  {
    id: "forit",
    title: "E-commerce - ForIt",

    shortDescription:
      "Backend de e-commerce diseñado con una arquitectura por capas y responsabilidades definidas. El proyecto prioriza la mantenibilidad y la seguridad mediante controles de acceso en la base de datos y el principio de mínimo privilegio.",

    description:
      "ForIt es un e-commerce en desarrollo orientado a construir un backend mantenible y seguro. La organización del código separa las responsabilidades del negocio de los detalles de infraestructura, mientras que el diseño de la base de datos contempla la gestión de roles y permisos.",
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
    status: "En desarrollo",

    repository: "https://github.com/sofisando/ForIt-Ecommerce.git",
    video: "https://www.youtube.com/embed/uXfRfZKT3S8",

    sections: [
      {
        id: "arquitectura",
        title: "Arquitectura y diseño",
        summary:
          "Cómo se organiza el backend y cómo se separan las responsabilidades.",
        
        icon: "layers",

        paragraphs: [
          "La estructura sigue principios de Clean Architecture y separación de responsabilidades. Los casos de uso coordinan las operaciones de la aplicación, mientras que los repositorios abstraen el acceso a los datos y la infraestructura contiene las implementaciones técnicas.",
          "Este enfoque busca reducir el acoplamiento entre componentes, facilitar el mantenimiento y permitir que las reglas del negocio no dependan directamente de los detalles de persistencia.",
        ],

        items: [
          "Separación entre casos de uso, dominio e infraestructura.",
          "Repository Pattern para abstraer el acceso a los datos.",
          "Organización del código para facilitar su evolución y las pruebas.",
        ],
      },

      {
        id: "seguridad",
        title: "Seguridad de la base de datos",
        summary:
          "Gestión de roles, permisos y reducción de accesos innecesarios.",

        icon: "security",

        paragraphs: [
          "El proyecto aborda la seguridad desde la configuración de PostgreSQL y la separación de responsabilidades. El principio de mínimo privilegio busca que cada rol disponga únicamente de los permisos necesarios para sus tareas.",
          "La estrategia de seguridad contempla separar los permisos de la aplicación de los necesarios para administrar el esquema y ejecutar migraciones. La eficacia de estos controles debe comprobarse mediante los permisos efectivos y pruebas de acceso.",
        ],

        items: [
          "Roles de base de datos con responsabilidades diferenciadas.",
          "Principio de mínimo privilegio.",
          "Gestión de configuración sensible mediante variables de entorno.",
          "Controles de acceso que deben verificarse según los permisos realmente concedidos.",
        ],
      },

      {
        id: "infraestructura",
        title: "Infraestructura y despliegue",
        summary:
          "Entorno contenerizado y gestión versionada del esquema.",

        paragraphs: [
          "PostgreSQL y el backend se ejecutan en contenedores. Las migraciones permiten versionar los cambios del esquema y aplicar los cambios pendientes de forma controlada durante el despliegue.",
          "La configuración se organiza mediante variables de entorno, evitando incorporar credenciales sensibles directamente al código fuente.",
        ],

        items: [
          "Contenedores separados para los servicios.",
          "Migraciones de base de datos versionadas.",
          "Configuración mediante variables de entorno.",
        ],
      },
    ],
  },
];