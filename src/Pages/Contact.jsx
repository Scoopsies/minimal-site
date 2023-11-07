import { motion as m } from "framer-motion"

const Contact = () => {
    return (
      <m.main
        initial={{ y: "100%"}}
        animate={{ y: "0%"}}
        transition={{ duration: 0.75, ease: 'easeOut'}}
        exit={{opacity: 1}}
        className="contact"
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
          <div className="contactLogos">

            <div className="logoOverflow">
             <img className="logo" src="public/Images/linkedIn.png" />
            </div>
            
            <div className="logoOverflow">
             <img className="logo" src="public/Images/GitHub.png" />
            </div>

            <div className="logoOverflow">
             <img className="logo" src="public/Images/Email.png" />
            </div>
      </div>
      </m.main>
    )
  }

export default Contact