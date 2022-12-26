import st from "./Top.module.css";
import "../Skills/Skills.css";
import { TbArrowBigTop } from "react-icons/tb";
import { RiHome2Fill } from "react-icons/ri";
import * as mdb from "mdb-ui-kit";

const Bop = () => {
  let mybutton = document.getElementById("btn-back-to-top");

  // When the user scrolls down 20px from the top of the document, show the button

  // When the user clicks on the button, scroll to the top of the document
  // mybutton.addEventListener("click", backToTop);

  function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  return (
    // <a className={st.b2} href="#home">
    //   <div className={st.bop}>
    //     <RiHome2Fill />
    //   </div>
    // </a>
    <button
      type="button"
      class="btn btn-danger btn-floating btn-lg"
      id="btn-back-to-top"
      onClick={() => backToTop()}
    >
      <i class="fas fa-arrow-up"></i>
    </button>
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
