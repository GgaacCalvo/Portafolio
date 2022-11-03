import React from "react";
import st from "./Skills.module.css";
import resumeData from "../../resumeData";
export default function Skills() {
  return (
    <section id="skills">
      <div className={st.cont}>
        <div className="text">
          <span className={st.tecnologias}>Tecnologías</span>
        </div>

        <div className={st.skills}>
          {resumeData.skills &&
            resumeData.skills.map((item, index) => {
              return (
                <div key={index} className={st.sk}>
                  <img src={item.img} width="90" />
                  <span className="text">{item.skillname}</span>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
}
