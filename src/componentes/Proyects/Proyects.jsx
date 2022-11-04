import resumeData from "../../resumeData";
import "./Proyects.css";
import "../About/About.css";

export default function Projects() {
  return (
    <section id="portfolio">
      <div className="row-projects">
        <span className="titulo-span text"> Proyectos </span>
        <div className="portfolio-wrapper">
          {resumeData.portfolio &&
            resumeData.portfolio.map((item, index) => {
              return (
                <div className="item-wrap text" key={index}>
                  <img src={item.imgurl} className="item-img" width="300" />
                  <div>
                    <h3>{item.name}</h3>
                    <p className="text-project">{item.description}</p>
                    <span className="button1">
                      <a
                        className="deploy"
                        target="_blank"
                        rel="noreferrer"
                        href={item.deploy}
                      >
                        VER
                      </a>
                    </span>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
}
