function Footer() {
  return (
    <footer className="border-t border-(--color-details) rounded-2xl py-15">
      <div className="w-9/10 mx-auto ">
        <nav>
          <ul className="flex flex-wrap gap-8 justify-evenly">
            <li>
              <a href="#"
              className="relative inline-block after:absolute after:left-0 after:bottom-0 
              after:h-px after:w-0 after:bg-(--color-details) 
              after:transition-all after:duration-300 hover:after:w-full"
              >GitHub</a>
            </li>
             <li>
              <a href="#"
              className="relative inline-block after:absolute after:left-0 after:bottom-0 
              after:h-px after:w-0 after:bg-(--color-details) 
              after:transition-all after:duration-300 hover:after:w-full"
              >LinkedIn</a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  )
}
export default Footer