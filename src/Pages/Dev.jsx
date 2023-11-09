import { motion as m } from 'framer-motion'

const Dev = () => {
    return (
        <m.main
          initial={{ x: "100%"}}
          animate={{ x: "0%"}}
          transition={{ duration: 0.75, ease: 'easeOut'}}
          exit={{opacity: 1}}
          className="page projects"
        >
      



        
        </m.main>
      )
}

export default Dev