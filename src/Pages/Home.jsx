import { motion as m } from "framer-motion";

const Home = () => {
  return (
    <m.main
      initial={{ y: "100%" }}
      animate={{ y: "0%" }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      exit={{ opacity: 1 }}
      className="home"
    >

    <div className="center">
        <div className="imgCircle">
            <img className="profilePhoto" src="src/Images/Me.jpg" />
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







      <div className="homeContent">
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
