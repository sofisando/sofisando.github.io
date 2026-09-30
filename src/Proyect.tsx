import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import typescriptLogo from "./assets/typescriptLogo.svg";
import dockerLogo from "./assets/docker.svg";
import nodejsLogo from "./assets/nodejs.svg";
import postgreSQLLogo from "./assets/postgresql.svg";
import prismaLogo from "./assets/prisma.svg";


import "./Proyect.css";

function Proyect() {
  return (
    <>
      <section
        className="
          relative p-8 my-15
          bg-[url('./assets/imgForIT.png')] bg-center bg-cover
          w-9/10 mx-auto rounded-3xl min-h-130 overflow-hidden
          flex flex-col gap-12
          justify-center items-center

          md:text-left md:justify-end md:items-start md:pb-20 
        "
      >
        <div className="absolute inset-0 bg-linear-to-b from-black/50 to-black/80"></div>

        <div className="relative z-10 ">
          <h1>E-commerce - ForIt</h1>
          <p className="pt-2">
            E-commerce backend en desarrollo, siguiendo principios de Clean
            Architecture y Clean Code. El proyecto incorpora prácticas de
            seguridad a nivel de base de datos, incluyendo separación de
            responsabilidades mediante roles y el principio de mínimo
            privilegio.
          </p>

          <div id="tool" className="pb-6">
            <ul>
              <li>
                <a href="https://www.typescriptlang.org/" target="_blank">
                  <img className="logo" src={typescriptLogo} alt="" />
                  Typescript
                </a>
              </li>
              <li>
                <a href="https://www.docker.com/" target="_blank">
                  <img className="button-icon" src={dockerLogo} alt="" />
                  Docker
                </a>
              </li>
              <li>
                <a href="https://nodejs.org/es" target="_blank">
                  <img className="button-icon" src={nodejsLogo} alt="" />
                  Node.js
                </a>
              </li>
              <li>
                <a href="https://www.postgresql.org/" target="_blank">
                  <img className="button-icon" src={postgreSQLLogo} alt="" />
                  PostgreSQL
                </a>
              </li>
              <li>
                <a href="https://www.prisma.io/orm" target="_blank">
                  <img className="button-icon" src={prismaLogo} alt="" />
                  Prisma
                </a>
              </li>
            </ul>
          </div>

          <a
            href="#"
            className="bg-(--color-button) text-black py-3 px-6 rounded-full "
          >
            Ver proyecto
          </a>
        </div>
      </section>
      <section
        className="
          relative p-8 my-15
          bg-[url('./assets/luca-bravo.jpg')] bg-center bg-cover
          w-9/10 mx-auto rounded-3xl min-h-130 overflow-hidden
          flex flex-col gap-12
          justify-center items-center

          md:text-left md:justify-end md:items-start md:pb-20 
        "
      >
        <div className="absolute inset-0 bg-linear-to-b from-black/50 to-black/80"></div>

        <div className="relative z-10 ">
          <h1>Proyecto</h1>
          <p className="pt-2">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Reprehenderit neque commodi odio distinctio, error illum? Quisquam
            quas atque molestiae perspiciatis. Et exercitationem molestiae
            sapiente qui blanditiis facere officiis eligendi fuga.
          </p>

          <div id="tool" className="pb-6">
            <ul>
              <li>
                <a href="https://vite.dev/" target="_blank">
                  <img className="logo" src={viteLogo} alt="" />
                  Vite
                </a>
              </li>
              <li>
                <a href="https://react.dev/" target="_blank">
                  <img className="button-icon" src={reactLogo} alt="" />
                  React
                </a>
              </li>
            </ul>
          </div>

          <a
            href="#"
            className="bg-(--color-button) text-black py-3 px-6 rounded-full "
          >
            Ver más
          </a>
        </div>
      </section>
    </>
  );
}
export default Proyect;
