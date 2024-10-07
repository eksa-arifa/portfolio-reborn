import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


const Projects = () => {
  return (
    <div className="dark:text-white">
        <h1 className="font-bold text-xl">My Projects</h1>
        <div className="py-2">
            <a href="https://github.com/eksa-arifa" target="_blank" className="w-full bg-black dark:bg-white dark:hover:bg-gray-200 dark:text-black hover:bg-slate-900 text-white rounded-lg block py-4 text-4xl text-center">
                <FontAwesomeIcon icon={faGithub}/>
            </a>
        </div>
    </div>
  )
}

export default Projects