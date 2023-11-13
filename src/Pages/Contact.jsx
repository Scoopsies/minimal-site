import { AnimatePresence, motion as m } from "framer-motion"

const Contact = () => {
    return (
      <m.main
        initial={{ y: "100%"}}
        animate={{ y: "0%"}}
        transition={{ duration: 0.75, ease: 'easeOut'}}
        exit={{opacity: 1}}
        className="page contact"
      >
        <div className="contactText">
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
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{delay: 2}}
          className="contactPitch">
            <h3>
              Reach out if you have any questions,
            </h3>
            <h3>
            want to collaborate, or just want to say hi!
            </h3>
          </m.div>
        </div>
        
        <m.div 
          initial={{y: "100%"}}
          animate={{y:"0%"}}
          transition={{delay: 0.5}}
          className="contactLogos"
        >

          <a href="https://www.linkedin.com/in/consolelog-michael-martin/" target="_blank" rel="noreferrer">
            <div className="logoOverflow">
                <img className="logo" src="https://media.licdn.com/dms/image/D4D35AQEHHS_kQTIVTg/profile-framedphoto-shrink_200_200/0/1694128022350?e=1700168400&v=beta&t=uzDLwwerQuWWIZRx1kPa4i81rD_R596JkxfeRV1yjZM" />
                <p className="logoText linkedin">Linkedin</p>
              <m.div
              initial={{opacity: 1}}
              animate={{opacity: 0}}
              transition={{delay: 2, duration: 2, repeat: Infinity, repeatType: "reverse"}}>
                <img className="logo logo-front" src="/Images/linkedIn.png" />
              </m.div>
            </div>
          </a>
          
          <a href="https://github.com/scoopsies" target="_blank" rel="noreferrer">
            <div className="logoOverflow">
              <img className="logo" src="https://avatars.githubusercontent.com/u/138405614?v=4" />
              <p className="logoText github">GitHub</p>
              <img className="logo logo-front" src="/Images/GitHub.png" />
            </div>
          </a>

          <a href="mailto:consolelogmichaelmartin@gmail.com">
            <div className="logoOverflow">
              <img className="logo" src="https://media3.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif?cid=ecf05e47zzymzsjfb9ze88ddqt0upbdam4iz9sgztlbuactw&ep=v1_gifs_search&rid=giphy.gif&ct=g" />
              <p className="logoText email">E-Mail</p>
              <img className="logo logo-front" src="/Images/Email.png" />
            </div>
          </a>

        </m.div>

      <AnimatePresence initial={true}>
        <m.div 
          initial={{y: "100%"}}
          animate={{y:"0%"}}
          transition={{delay: 0.5}}
          className="contactLogosNoHover"
        >

          <a href="https://www.linkedin.com/in/consolelog-michael-martin/" target="_blank" rel="noreferrer">
            <div className="logoOverflow">
                <img className="logo" src="https://media.licdn.com/dms/image/D4D35AQEHHS_kQTIVTg/profile-framedphoto-shrink_200_200/0/1694128022350?e=1700168400&v=beta&t=uzDLwwerQuWWIZRx1kPa4i81rD_R596JkxfeRV1yjZM" />
                <p className="logoText linkedin">Linkedin</p>
              <m.div
              initial={{opacity: 1}}
              animate={{opacity: 0}}
              transition={{delay: 2, duration: 3, repeat: Infinity, repeatType: "reverse"}}>
                <img className="logo logo-front" src="/Images/linkedIn.png" />
              </m.div>
            </div>
          </a>
          
          <a href="https://github.com/scoopsies" target="_blank" rel="noreferrer">
            <div className="logoOverflow">
              <img className="logo" src="https://avatars.githubusercontent.com/u/138405614?v=4" />
              <p className="logoText github">GitHub</p>
              <m.div
              initial={{opacity: 1}}
              animate={{opacity: 0}}
              transition={{delay: 3, duration: 3, repeat: Infinity, repeatType: "reverse"}}>
              <img className="logo logo-front" src="/Images/GitHub.png" />
              </m.div>
            </div>
          </a>

          <a href="mailto:consolelogmichaelmartin@gmail.com">
            <div className="logoOverflow">
              <img className="logo" src="https://media3.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif?cid=ecf05e47zzymzsjfb9ze88ddqt0upbdam4iz9sgztlbuactw&ep=v1_gifs_search&rid=giphy.gif&ct=g" />
              <p className="logoText email">E-Mail</p>
              <m.div
              initial={{opacity: 1}}
              animate={{opacity: 0}}
              transition={{delay: 3, duration: 3, repeat: Infinity, repeatType: "reverse"}}>
              <img className="logo logo-front" src="/Images/Email.png" />
              </m.div>
            </div>
          </a>

        </m.div>
      </AnimatePresence>
      </m.main>
    )
  }

export default Contact