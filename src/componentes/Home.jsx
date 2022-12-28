import "./Home.css";
import NavBar from "./NavBar";
import guille from "../assets/guille.jpg";
import { MdWavingHand } from "react-icons/md";
import Bop from "./Bop/Bop";
import { motion, useScroll } from "framer-motion";
import { useRef } from "react";

const Home = () => {
  const constraintsRef = useRef([0, 1]);

  return (
    <div id="home" className="cont">
      <NavBar></NavBar>

      {/* <div className="present">
        <h1>Hola, soy Guillermo Calvo</h1>
        <h3>
          <strong>Full Stack Developer</strong>
        </h3>
      </div> */}
      <div class="d-flex flex-column justify-content-center w-100 h-100">
        <div class="mob">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              default: {
                duration: 0.3,
                ease: [0, 0.71, 0.2, 1.01],
              },
              scale: {
                type: "spring",
                damping: 5,
                stiffness: 100,
                restDelta: 0.001,
              },
            }}
          >
            <div class="d-flex flex-column justify-content-center align-items-center">
              <h1 class="fw-light text-white m-0 present">
                Hola, soy Guillermo Calvo
              </h1>
              <h3 class="fw-light text-white m-0 text">Full Stack Developer</h3>
            </div>
          </motion.div>
          <motion.div>
            <motion.div
              ref={constraintsRef}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{
                default: {
                  duration: 0.3,
                  ease: [0, 0.71, 0.2, 1.01],
                },
                scale: {
                  type: "spring",
                  damping: 5,
                  stiffness: 100,
                  restDelta: 0.001,
                },
              }}
            >
              <motion.img
                id="pic"
                drag
                dragConstraints={constraintsRef}
                src={guille}
                alt="image"
                className="picture"
              />
            </motion.div>
          </motion.div>
          {/* <div class="pic-cont">
            <img src={guille} alt="image" className="picture" />
          </div> */}
        </div>
      </div>
      <div id="estrellas">
        <div id="estrella" className="estrella"></div>
        <div id="estrella" className="estrella"></div>
        <div id="estrella" className="estrella"></div>
        <div id="estrella" className="estrella"></div>
        <div id="estrella" className="estrella"></div>
        <div id="estrella" className="estrella"></div>
      </div>
      <div className="arriba">
        <Bop />
      </div>
    </div>
  );
};
export default Home;
