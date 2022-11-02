import "./Home.css";
import NavBar from "./NavBar";
import guille from "../assets/guille.jpg";
import { MdWavingHand } from "react-icons/md";
import Bop from "./Bop/Bop";

const Home = () => {
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
        <div class="d-flex flex-row justify-content-center">
          <div class="d-flex flex-column justify-content-center align-items-center">
            <h1 class="fw-light text-white m-0 present">
              Hola
              <MdWavingHand />, soy Guillermo Calvo
            </h1>
            <h3 class="fw-light text-white m-0 ">Full Stack Developer</h3>
            <h6>
              Portfolio en proceso..{" "}
              <a href="https://github.com/GgaacCalvo">
                visita mi github para mas información
              </a>
            </h6>
          </div>
          <div class="pic-cont">
            <img src={guille} alt="image" className="picture" />
          </div>
        </div>
      </div>
      <div className="arriba">
        <Bop />
      </div>
    </div>
  );
};
export default Home;
