import { motion as m, transform } from "framer-motion";
import ReactCurvedText from "react-curved-text";

const Home = () => {
  const text = 'Michael Martin - Frontend Developer - Javascript | HTML | CSS'



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
              text='FULL STACK DEVELOPER -- PostgreSQL | Expressjs | React.js --'
              textProps={{"style": {"fontSize": 21}}}
              textPathProps={null}
              tspanProps={{"dy": "87"}}
              ellipseProps={null}
              svgProps={{"className": "rotating-curved-text"}} />
        </div>

        <div className="nameContainer">
            <m.h1
            initial={{ y: "110%" }}
            animate={{ y: "0%" }}
            transition={{ delay: 0.5, ease: "easeOut" }}
            exit={{ opacity: 0 }}
            className="name"
            >
            Michael Martin
            </m.h1>
        </div>
    </div>

      <div className="content">
        <div>
          <div>Full Stack</div>
          <div>Software</div>
          <div>Developer</div>
        </div>
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
