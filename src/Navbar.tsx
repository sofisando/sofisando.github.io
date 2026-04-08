function Navbar() {
  return (
    <>
      <nav className="py-8 border-b border-(--color-details) rounded-2xl">
        <div className="flex w-9/10 mx-auto justify-end">
          <label className="
          relative z-10 
          cursor-pointer transition-all inline-flex items-center
          ">
            <input type="checkbox" className=" peer hidden" />

            <svg
              className="w-6 h-6 stroke-(--color-details) peer-checked:hidden"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
            >
              <path d="M4 5h16" />
              <path d="M4 12h16" />
              <path d="M4 19h16" />
            </svg>

            <svg
              className="w-6 h-6 stroke-(--color-details) hidden peer-checked:block"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>

            <ul className="absolute insert-0 bg-(--bg)
          flex flex-col gap-8 
          justify-center items-center
          
          -translate-y-full
          peer-checked:translate-0
          transition-transform

          ">
            <li>
              <a href="#"
              className="bg-(--color-button) text-black py-4 px-6 rounded-full"
              >Acerca de mi</a>
            </li>
            <li>
              <a href="#">Proyectos</a>
            </li>
            <li>
              <a href="#">Contacto</a>
            </li>
          </ul>
          </label>

          

        </div>
      </nav>
    </>
  );
}
export default Navbar;
