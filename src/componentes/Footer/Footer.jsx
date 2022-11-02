import React, { Component } from "react";
import { BsFillHeartFill } from "react-icons/bs";
import st from "./Footer.module.css";
import { BsLinkedin, BsGithub, BsInstagram } from "react-icons/bs";
const Footer = () => {
  return (
    <footer className={st.cont}>
      <div className={st.copyright}>
        <p>
          {" "}
          © 2022 - Desarrollado con <BsFillHeartFill className={st.heart} /> por
          Guillermo Calvo
        </p>
        <div className={st.social}>
          <a
            className={st.socialitem}
            href="https://www.linkedin.com/in/guillermo-calvo-790948192/"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <BsLinkedin />{" "}
          </a>
          <a
            className={st.socialitem}
            href="https://github.com/GgaacCalvo"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <BsGithub />{" "}
          </a>
          <a
            className={st.socialitem}
            href="https://www.instagram.com/guillecalvo5/"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <BsInstagram />{" "}
          </a>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
