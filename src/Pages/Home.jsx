import { motion as m } from "framer-motion"

const Home = () => {
  return (
    <m.main
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{duration: 1, ease: 'easeOut'}}
        className="home"
    >
        <h1 className="name">Michael Martin</h1>
        <div className="content">
            <div>
                <div>Frontend</div>
                <div>Software</div>
                <div>Developer</div>
            </div>
            <div>
                <div>This website was to help me learn framer-motion.</div>
                <div>I hope its half as suave as I am, but fill out words.</div>
                <div>I hope you enjoy it as much as I enjoyed making .</div>
            </div>
        </div>
    </m.main>
  )
}

export default Home