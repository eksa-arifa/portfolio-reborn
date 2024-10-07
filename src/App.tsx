import About from "./components/About"
import Achievments from "./components/Achievments"
import Contact from "./components/Contact"
import Educations from "./components/Educations"
import Jumbotron from "./components/Jumbotron"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import Skill from "./components/Skill"


function App() {

  return (
    <div className="bg-white dark:bg-black transition-all">
      <Navbar/>
      <div className="px-4 sm:px-24 md:px-32 py-28 flex flex-col gap-10">
        <Jumbotron/>
        <About/>
        <Skill/>
        <Projects/>
        <Educations/>
        <Achievments/>
        <Contact/>
      </div>
    </div>
  )
}

export default App
