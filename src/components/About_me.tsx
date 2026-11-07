
// import yo from "../assets/yo.png";

// function About_me() {
//   return (
//     <section className="w-9/10 max-w-6xl mx-auto py-20">
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">

//         {/* Presentación */}
//         <div className="flex flex-col items-start gap-5 order-2 md:order-1">

//           <span className="text-sm tracking-[0.25em] opacity-60">
//             HOLA, SOY
//           </span>

//           <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
//             Sofía <span className="text-(--color-button)">Sandobal.</span>
//           </h1>

//           <h2 className="text-xl md:text-2xl font-medium opacity-85">
//             Desarrolladora de software
//             <span className="block text-(--color-button)">
//               en constante formación.
//             </span>
//           </h2>

//           <p className="max-w-lg leading-relaxed opacity-75">
//             Me interesa construir soluciones digitales comprendiendo
//             cómo funcionan desde adentro. Disfruto especialmente el
//             desarrollo backend, las bases de datos y la ciberseguridad.
//           </p>

//           <div className="flex flex-wrap gap-3 mt-2 text-sm opacity-60">
//             <span>Backend</span>
//             <span>·</span>
//             <span>Database</span>
//             <span>·</span>
//             <span>Cybersecurity</span>
//           </div>

//           <a
//             href="#proyectos"
//             className="mt-5 px-6 py-3 rounded-full
//               border border-(--color-details)
//               hover:bg-(--color-button) hover:text-black
//               transition-colors duration-300"
//           >
//             Explorar proyectos ↗
//           </a>
//         </div>

//         {/* Fotografía */}
//         <div className="relative flex justify-center order-1 md:order-2">

//           {/* Resplandor de fondo */}
//           <div
//             className="absolute inset-8 rounded-full
//               bg-(--color-button)/20 blur-3xl"
//           />

//           {/* Marco */}
//           <div className="relative w-full max-w-sm aspect-4/5
//             overflow-hidden rounded-t-[48%] rounded-b-3xl
//             border border-(--color-details)">

//             <img
//               src={yo}
//               alt="Retrato de Sofía"
//               className="w-full h-full object-cover
//                 object-[55%_25%] scale-240 translate-y-70 translate-x-7"
//             />

//           </div>

//           {/* Identificador decorativo */}
//           <div
//             className="absolute bottom-5 -left-3 md:-left-6
//               rounded-full border border-(--color-details)
//               px-4 py-3 text-xs backdrop-blur-md
//               bg-black/40"
//           >
//             <span className="opacity-60 mr-2">✦</span>
//             Desarrollo · Tecnología · Innovación
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }

// export default About_me;


import yo from "../assets/yo.png";
import { Code2, Sparkles } from "lucide-react";

function About_me() {
  return (
    <section className="w-9/10 max-w-7xl mx-auto py-16 md:py-24">

      {/* Resplandor ambiental */}
      <div className="absolute -right-32 bottom-0 w-96 h-96
        rounded-full bg-(--color-button)/15 blur-[120px]
        pointer-events-none" />

      {/* Encabezado superior */}
      <div className="flex items-center gap-6 mb-12">
        <span className="shrink-0 rounded-full border
          border-(--color-details) px-5 py-2 text-sm
          tracking-wide flex items-center gap-3">
          <span className="w-2.5 h-2.5 rounded-full
            bg-(--color-button)" />
          PORTFOLIO · 2026
        </span>

        <div className="h-px flex-1 bg-(--color-details)" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2
        gap-14 md:gap-10 items-center">

        {/* Presentación */}
        <div className="flex flex-col items-start gap-5
          order-2 md:order-1">

          <span className="text-sm tracking-[0.3em] opacity-60">
            HOLA, SOY
          </span>

          <h1 className="text-5xl md:text-6xl lg:text-7xl
            font-bold tracking-tight leading-tight">
            Sofía{" "}
            <span className="text-(--color-button)">
              Sandobal.
            </span>
          </h1>

          <h2 className="text-xl md:text-2xl font-medium">
            Desarrolladora de software
            <span className="block text-(--color-button)">
              en constante formación.
            </span>
          </h2>

          <p className="max-w-lg leading-relaxed opacity-75">
            Me interesa construir soluciones digitales
            comprendiendo cómo funcionan desde adentro.
            Disfruto especialmente el desarrollo backend,
            las bases de datos y la ciberseguridad.
          </p>

          <a
            href="#proyectos"
            className="mt-3 inline-flex items-center gap-5
              rounded-full border border-(--color-button)
              px-7 py-4 transition-all duration-300
              hover:bg-(--color-button) hover:text-black"
          >
            Explorar proyectos
            <span className="text-xl">↗</span>
          </a>

        </div>

        {/* Fotografía */}
        <div className="relative flex justify-center
          order-1 md:order-2">

          {/* Halo */}
          <div className="absolute inset-8 rounded-full
            bg-(--color-button)/20 blur-[80px]" />

          {/* Órbita decorativa */}
          <svg
            viewBox="0 0 500 550"
            className="absolute inset-0 w-full h-full
              pointer-events-none overflow-visible"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M35 330 C100 180 390 120 460 250
                 C520 370 160 510 45 405"
              stroke="var(--color-button)"
              strokeWidth="1.2"
              opacity="0.8"
            />

            <path
              d="M400 80 C480 20 510 100 465 145"
              stroke="var(--color-button)"
              strokeWidth="1.2"
              opacity="0.7"
            />

            <path
              d="M450 220 L456 232 L468 238
                 L456 244 L450 256 L444 244
                 L432 238 L444 232 Z"
              fill="var(--color-button)"
            />
          </svg>

          {/* Marco de la fotografía */}
          <div className="relative w-full max-w-sm
            aspect-4/5 overflow-hidden
            rounded-t-[48%] rounded-b-3xl
            border border-(--color-details)">

            <img
              src={yo}
              alt="Retrato de Sofía Sandobal"
              className="w-full h-full object-cover
                object-[55%_25%] scale-240
                translate-y-70 translate-x-7"
            />
          </div>

          {/* Icono flotante */}
          <div className="absolute top-[17%] -right-2
            md:-right-5 w-14 h-14 rounded-xl
            border border-(--color-details)
            bg-black/50 backdrop-blur-md
            flex items-center justify-center
            text-(--color-button)">
            <Code2 size={27} strokeWidth={1.7} />
          </div>

          {/* Etiqueta inferior */}
          <div className="absolute bottom-5 -left-3
            md:-left-8 rounded-full
            border border-(--color-details)
            bg-black/70 backdrop-blur-md
            px-5 py-3 flex items-center gap-3
            text-xs md:text-sm whitespace-nowrap">

            <Sparkles
              size={17}
              className="text-(--color-button)"
            />

            Desarrollo · Tecnología · Innovación
          </div>

        </div>
      </div>

      {/* Tecnologías */}
      <div className="mt-16 pt-6 border-t
        border-(--color-details)">

        <div className="flex flex-wrap items-center
          gap-x-6 gap-y-3 opacity-65 text-sm">

          <Code2 size={23} />

          <span>TypeScript</span>
          <span>·</span>
          <span>Node.js</span>
          <span>·</span>
          <span>PostgreSQL</span>
          <span>·</span>
          <span>Docker</span>
          <span>·</span>
          <span>Prisma</span>
        </div>
      </div>

    </section>
  );
}

export default About_me;
