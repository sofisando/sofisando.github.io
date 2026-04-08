import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="py-8 border-b border-(--color-details) rounded-2xl">
      
      <div className="flex w-9/10 mx-auto justify-end relative">

        {/* BOTÓN */}
        <button
          onClick={() => setOpen(!open)}
          className="top-8 right-8 z-50 cursor-pointer"
        >
          {/* ☰ */}
          {!open && (
            <svg
              className="w-7 h-7 stroke-(--color-details)"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
            >
              <path d="M4 5h16" />
              <path d="M4 12h16" />
              <path d="M4 19h16" />
            </svg>
          )}

          {/* ✕ */}
          {open && (
            <svg
              className="w-7 h-7 stroke-(--color-details)"
              xmlns="http://www.w3.org/2000/svg"
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
            fixed inset-0 z-40 bg-(--bg)
            flex flex-col gap-8 justify-center items-center

            transition-transform duration-300
            ${open ? "translate-y-0" : "-translate-y-full"}
          `}
        >
          <li>
            <a
              href="#"
              onClick={() => setOpen(false)}
              className="bg-(--color-button) text-black py-4 px-6 rounded-full"
            >
              Acerca de mi
            </a>
          </li>
          <li>
            <a href="#" onClick={() => setOpen(false)}>
              Proyectos
            </a>
          </li>
          <li>
            <a href="#" onClick={() => setOpen(false)}>
              Contacto
            </a>
          </li>
        </ul>

      </div>
    </nav>
  );
}

export default Navbar;