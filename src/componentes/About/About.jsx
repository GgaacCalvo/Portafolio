import pdf from "../../assets/CurriculumGuillermoCalvo.pdf";
import resumeData from "../../resumeData";
import st from "./About.module.css";
import "./About.css";
const About = () => {
  return (
    <section id="about">
      <div className={st.cont}>
        <span className={st.about}>
          <strong className="text">Sobre mi</strong>
        </span>
        <p className="text">{resumeData.aboutme}</p>
        <span>
          <a
            className="download"
            href={pdf}
            target="_blank"
            rel="noreferrer"
            download="CurriculumGuillermoCalvo.pdf"
          >
            Descargar CV
          </a>
        </span>
      </div>
    </section>
  );
};
export default About;
