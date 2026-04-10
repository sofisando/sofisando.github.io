function Footer() {
  return (
    <footer className="border-t border-(--color-details) rounded-2xl py-15">
      <div className="w-9/10 mx-auto">
        <nav>
          <ul className="flex flex-wrap gap-8 justify-evenly
          **:hover:underline">
            <li>
              <a href="#">GitHub</a>
            </li>
             <li>
              <a href="#">LinkedIn</a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  )
}
export default Footer