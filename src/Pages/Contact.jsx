import { motion as m } from "framer-motion"

const Contact = () => {
    return (
      <m.main
        initial={{ opacity: 0}}
        animate={{ opacity: 1}}
        transition={{ duration: 0.75, ease: 'easeOut'}}
      >
          <h1 className="name">Contact Info</h1>
          <div className="content">
              <div>
                  <div>Reach Out:</div>
              </div>
              <div>
                  <div> <a href='https://github.com/scoopsies'>GitHub</a> </div>
                  <div> <a href='https://www.linkedin.com/in/consolelog-michael-martin/'>Linkedin</a> </div>
                  <div> <a href='mailto:mooninites103@gmail.com'>E-mail</a> </div>
              </div>
              <div/>
          </div>
      </m.main>
    )
  }

export default Contact