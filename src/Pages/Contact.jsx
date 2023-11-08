import { motion as m } from "framer-motion"

const Contact = () => {
    return (
      <m.main
        initial={{ y: "100%"}}
        animate={{ y: "0%"}}
        transition={{ duration: 0.75, ease: 'easeOut'}}
        exit={{opacity: 1}}
        className="page contact"
      >
        <div className="nameContainer">
          <m.h1
            initial={{ y: "110%" }}
            animate={{ y: "0%" }}
            transition={{ delay: 0.5, ease: "easeOut" }}
            exit={{ opacity: 0 }}
            className="name"
          >
            Contact Info
          </m.h1>
        </div>
        
        <m.div 
          initial={{y: "100%"}}
          animate={{y:"0%"}}
          transition={{delay: 0.5}}
          className="contactLogos"
        >

          <a href="https://www.linkedin.com/in/consolelog-michael-martin/" target="_blank" rel="noreferrer">
            <div className="logoOverflow">
              <img className="logo" src="/Images/linkedIn.png" />
            </div>
          </a>
          
          <a href="https://github.com/scoopsies" target="_blank" rel="noreferrer">
            <div className="logoOverflow">
              <img className="logo" src="/Images/GitHub.png" />
            </div>
          </a>

          <a href="mailto:consolelogmichaelmartin@gmail.com">
            <div className="logoOverflow">
              <img className="logo" src="/Images/Email.png" />
            </div>
          </a>

        </m.div>
      </m.main>
    )
  }

export default Contact