import React from "react";
import "./NavBar.css";
import { BsLinkedin, BsGithub, BsInstagram } from "react-icons/bs";
const NavBar = () => {
  return (
    <nav class="navg navbar navbar-expand-lg navbar-light ">
      <a class="navbar-brand" href="https://github.com/GgaacCalvo">
        @GgaacCalvo
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active litem">
            <a class="nav-link" href="/">
              Inicio <span class="sr-only">(current)</span>
            </a>
          </li>
          <li class="nav-item active litem">
            <a class="nav-link" href="#about">
              Sobre Mi <span class="sr-only">(current)</span>
            </a>
          </li>
          <li class="nav-item active litem">
            <a class="nav-link" href="#skills">
              Skills <span class="sr-only">(current)</span>
            </a>
          </li>
          <li class="nav-item active litem">
            <a class="nav-link" href="#proyects">
              Proyectos <span class="sr-only">(current)</span>
            </a>
          </li>
        </ul>
      </div>
      <div className="social">
        <a
          className="social-item"
          href="https://www.linkedin.com/in/guillermo-calvo-790948192/"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          <BsLinkedin />{" "}
        </a>
        <a
          className="social-item"
          href="https://github.com/GgaacCalvo"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          <BsGithub />{" "}
        </a>
        <a
          className="social-item"
          href="https://www.instagram.com/guillecalvo5/"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          <BsInstagram />{" "}
        </a>
      </div>
    </nav>
  );
};
export default NavBar;
