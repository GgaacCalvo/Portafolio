import st from "./Top.module.css";
import "../Skills/Skills.css";
import { TbArrowBigTop } from "react-icons/tb";

const Bop = () => {
  return (
    <div className={st.bop}>
      <a className="textfield" id="back-to-top" href="#home">
        <div className={st.bop2}>
          <TbArrowBigTop />
        </div>
      </a>
    </div>
  );
};
export default Bop;
