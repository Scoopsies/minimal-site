import { motion as m } from "framer-motion"

const Contact = () => {
    return (
      <m.main
        initial={{ y: "100%"}}
        animate={{ y: "0%"}}
        transition={{ duration: 1, ease: 'easeOut'}}
        exit={{opacity: 1}}
        className="contact"
      >
          <h1 className="name">Contact Info</h1>
          <div className="content">
              <div>
                  <div>Reach Out:</div>
              </div>
              <div>
                  <div> <a href='https://www.linkedin.com/in/consolelog-michael-martin/' rel="noreferrer" target="_blank">Linkedin</a> </div>
                  <div> <a href='https://github.com/scoopsies' rel="noreferrer" target="_blank" >GitHub</a> </div>
                  <div> <a href='mailto:mooninites103@gmail.com'>E-mail</a> </div>
              </div>
              
          </div>
      </m.main>
    )
  }

export default Contact