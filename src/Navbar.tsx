import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="relative z-50 py-8 border-b border-(--color-details) rounded-2xl">
      
      <div className="flex w-9/10 mx-auto justify-end items-center relative">

        {/* BOTÓN (solo mobile) */}
        <button
          onClick={() => setOpen(!open)}
          className="z-50 md:hidden"
        >
          {!open ? (
            <svg
              className="w-7 h-7 stroke-(--color-details)"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
            >
              <path d="M4 5h16" />
              <path d="M4 12h16" />
              <path d="M4 19h16" />
            </svg>
          ) : (
            <svg
              className="w-7 h-7 stroke-(--color-details)"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          )}
        </button>

        {/* MENÚ */}
        <ul
          className={`
            flex gap-8 items-center

            /* MOBILE */
            fixed inset-0 z-40 bg-(--bg) flex-col justify-center
            transition-transform duration-300

            ${open ? "translate-y-0" : "-translate-y-full"}

            /* DESKTOP */
            md:static md:flex md:flex-row md:translate-y-0 md:bg-transparent
          `}
        >
          <li>
            <a href="#" 
            className="relative inline-block after:absolute after:left-0 after:bottom-0 
              after:h-px after:w-0 after:bg-(--color-details) 
              after:transition-all after:duration-300 hover:after:w-full"
            onClick={() => setOpen(false)}>
              Acerca de mi
            </a>
          </li>
          <li>
            <a href="#" 
            className="relative inline-block after:absolute after:left-0 after:bottom-0 
              after:h-px after:w-0 after:bg-(--color-details) 
              after:transition-all after:duration-300 hover:after:w-full"onClick={() => setOpen(false)}>
              Proyectos
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={() => setOpen(false)}
              className="bg-(--color-button) text-black py-3 px-6 rounded-full"
            >
              Contacto
            </a>
          </li>
        </ul>

      </div>
    </nav>
  );
}

export default Navbar;