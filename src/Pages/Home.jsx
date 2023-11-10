import { motion as m, AnimatePresence } from "framer-motion";
import ReactCurvedText from "react-curved-text";

const Home = () => {
  return (
    <m.main
      initial={{ y: "100%" }}
      animate={{ y: "0%" }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      exit={{ opacity: 1 }}
      className="page"
    >

    <div className="center">

        <div className="imgCircle">
            <div className="profilePhoto"/>
            <ReactCurvedText 
              width='400'
              height='400'
              cx='200'
              cy='200'
              rx={100}
              ry={100}
              startOffset='0'
              reversed={false}
              text='FULL STACK DEVELOPER -- React.js | PostgreSQL | Expressjs --'
              textProps={{"style": {"fontSize": 21}}}
              textPathProps={null}
              tspanProps={{"dy": "87"}}
              ellipseProps={null}
              svgProps={{"className": "rotating-curved-text"}} />
        </div>

        <div className="homeText">
          <div>
            <h2>My name is</h2>
          </div>
          <AnimatePresence initial={true}>
            <div className="nameContainer">
                <m.h1
                initial={{ y: "150%" }}
                animate={{ y: "0%" }}
                transition={{ delay: 0.75, ease: "easeOut" }}
                exit={{ opacity: 0 }}
                className="name"
                >
                Michael Martin.
                </m.h1>
            </div>
            <m.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{delay: 2}}
            className="description"
            >
              <h2>I'm a full stack software developer</h2>
              <h2>with a background in sales, special events,</h2>
              <h2>and management.</h2>
              <br/>
              <m.div
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              transition={{delay: 4}}
              className="secondDescription"
              >
              <h2>I'm curently looking to collaborate on</h2>
              <h2>any and all coding projects.</h2>
              </m.div>
              <br/>
              <m.h2
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              transition={{delay:6}}
              >
                Reach out if you would like to work together!</m.h2>
            </m.div>
          </AnimatePresence>
        </div>
    </div>

      <div className="bottom">
        <div className="contentRight">
          <div>HTML | CSS | JavaScript</div>
          <div>PostgreSQL | ExpressJS</div>
          <div>React.js | Node.js</div>
        </div>
      </div>
    </m.main>
  );
};

export default Home;
