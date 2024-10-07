import { faGithub, faInstagram, faTelegram } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import DarkModeToggle from "./ToggleDark"


const Navbar = () => {
  return (
    <nav className="fixed bottom-10 left-1/2 -translate-x-1/2 p-4 shadow-lg bg-white dark:bg-black dark:text-white border rounded-lg flex gap-5">
        <ul className="text-2xl flex gap-4 items-center">
            <li><a href="https://instagram.com/eksrifaa" target="_blank"><FontAwesomeIcon icon={faInstagram}/></a></li>
            <li><a href="https://github.com/eksa-arifa" target="_blank"><FontAwesomeIcon icon={faGithub}/></a></li>
            <li><a href="mailto:eksaarifa@gmail.com" target="_blank"><FontAwesomeIcon icon={faTelegram}/></a></li>
        </ul>
        <span className="h-[35px] border"></span>
        <ul className="flex items-center text-2xl">
          <li>
            <DarkModeToggle/>
          </li>
        </ul>
    </nav>
  )
}

export default Navbar