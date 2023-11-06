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
  );
};

export default Home;
