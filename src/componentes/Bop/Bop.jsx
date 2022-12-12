import st from "./Top.module.css";
import "../Skills/Skills.css";
import { TbArrowBigTop } from "react-icons/tb";
import { RiHome2Fill } from "react-icons/ri";

const Bop = () => {
  return (
    <a className={st.b2} href="#home">
      <div className={st.bop}>
        <RiHome2Fill />
      </div>
    </a>
    // <div className={st.bop}>
    //   <a className="textfield" id="back-to-top" href="#home">
    //     <div className={st.bop2}>
    //       <TbArrowBigTop />
    //     </div>
    //   </a>
    // </div>
  );
};
export default Bop;
