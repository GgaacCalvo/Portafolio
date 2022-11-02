import pdf from "../../assets/CurriculumGuillermoCalvo.pdf";
import resumeData from "../../resumeData";
import st from "./About.module.css";
const About = () => {
  return (
    <section id="about">
      <div className={st.cont}>
        <span className={st.about}>
          <strong>Sobre mi</strong>
        </span>
        <p>{resumeData.aboutme}</p>
        <span>
          <a
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
