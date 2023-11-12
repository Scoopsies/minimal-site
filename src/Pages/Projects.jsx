import { motion as m } from "framer-motion"

const Projects = () => {
    return (
      <m.main
        initial={{ x: "100%"}}
        animate={{ x: "0%"}}
        transition={{ duration: 0.75, ease: 'easeOut'}}
        exit={{opacity: 1}}
        className="page projects"
      >
      <div className="nameContainer">
        <m.h1
          initial={{ x: "110%" }}
          animate={{ x: "0%" }}
          transition={{ delay: 0.5, ease: "easeOut" }}
          exit={{ opacity: 0 }}
          className="name projectsName"
        >
          Projects
        </m.h1>
      </div>
      
      <m.div 
      initial={{x: "-220%"}}
      animate={{x: "0%"}}
      transition={{ duration: 1}}
      className="projectsContainter">

        <div className="projectContainer">
          <h2>Harmonic Harbor</h2>
          <div className="gifContainer">
            <div className="projectLinks">
                <a href="https://github.com/The-Whey/Capstone" target="_blank" rel="noreferrer">GitHub</a>
                <a href="https://harmonic-harbor.onrender.com" target="_blank" rel="noreferrer">Website</a>
              </div>
              <img className="project" src="/Images/Harmonic-Harbor.gif" />
            </div>
            <div>
              An online store for selling musical insturments. It was created as a group project with a 2 week deadline using Agile methodology.
            </div>
        </div>

        <div className="projectContainer">
          <h2>This Website</h2>
          <div className="gifContainer">
            <img className="project" src="/Images/Minimal-Site.gif" />
            <div className="projectLinks">
              <a href="https://github.com/Scoopsies/minimal-site" target="_blank" rel="noreferrer">GitHub</a>
            </div>
          </div>
          <div>This is the website you are currently on. It was created with the goal in mind of letting me get more familiar with the Framer Motion animation library.</div>
        </div>
      </m.div>
      </m.main>
    )
  }

export default Projects