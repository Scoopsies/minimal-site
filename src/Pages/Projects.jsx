import { motion as m } from "framer-motion"
import { Link } from "react-router-dom"

const Projects = () => {
    return (
      <m.main
        initial={{ x: "100%"}}
        animate={{ x: "0%"}}
        transition={{ duration: 0.75, ease: 'easeOut'}}
        exit={{opacity: 1}}
        className="projects"
      >
      <div className="nameContainer">
        <m.h1
          initial={{ x: "110%" }}
          animate={{ x: "0%" }}
          transition={{ delay: 0.5, ease: "easeOut" }}
          exit={{ opacity: 0 }}
          className="name"
        >
          Projects
        </m.h1>
      </div>
      
      <m.div 
      initial={{x: "-220%"}}
      animate={{x: "0%"}}
      transition={{delay: 1}}
      className="projectsContainter">
        <div className="projectContainer">
          <div className="projectLinks">
              <a href="https://github.com/The-Whey/Capstone" target="_blank" rel="noreferrer">GitHub</a>
              <a href="https://harmonic-harbor.onrender.com" target="_blank" rel="noreferrer">Website</a>
            </div>
            <img className="project" src="src/Images/Harmonic-Harbor.gif" />
          </div>
        <div className="projectContainer">
          <img className="project" src="src/Images/Minimal-Site.gif" />
          <div className="projectLinks">
            <a href="https://github.com/The-Whey/Capstone" target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </div>
      </m.div>
      </m.main>
    )
  }

export default Projects