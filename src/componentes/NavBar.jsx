import React from "react";
import "./NavBar.css";
import { BsLinkedin, BsGithub, BsInstagram } from "react-icons/bs";

import { BsWhatsapp } from "react-icons/bs";

import { motion } from "framer-motion";
const iconAnimate = {
  initial: {},
  view: {
    y: [0, -5, 0],
    color: "#503010",
    transition: { duration: 0.4 },
  },
};
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
            <div className="ait">
              <a class="nav-link " href="/">
                Inicio <span class="sr-only ">(current)</span>
              </a>
            </div>
          </li>
          <li class="nav-item active litem ">
            <div className="ait">
              <a class="nav-link" href="#about">
                Sobre Mi <span class="sr-only ">(current)</span>
              </a>
            </div>
          </li>
          <li class="nav-item active litem">
            <div className="ait">
              <a class="nav-link" href="#skills">
                Skills <span class="sr-only">(current)</span>
              </a>
            </div>
          </li>
          <li class="nav-item active litem">
            <div className="ait">
              <a class="nav-link" href="#proyects">
                Proyectos <span class="sr-only">(current)</span>
              </a>
            </div>
          </li>
        </ul>
      </div>
      <div className="social">
        <a
          className="no-underline hover:underline"
          href="https://www.linkedin.com/in/guillermo-calvo-790948192/"
          target="_blank"
          rel="noreferrer"
        >
          <motion.div
            whileHover={"view"}
            initial={{ color: "black" }}
            variants={iconAnimate}
            className="hidden mr-5 cursor-pointer md:block decoration-black"
          >
            <BsLinkedin size={20} />
          </motion.div>
        </a>
        <a
          href="https://github.com/GgaacCalvo"
          target="_blank"
          rel="noreferrer"
        >
          <motion.div
            initial={{ color: "black" }}
            whileHover={"view"}
            variants={iconAnimate}
            className="hidden mr-5 cursor-pointer md:block"
          >
            <BsGithub size={20} />
          </motion.div>
        </a>
        <a
          href="https://www.instagram.com/guillecalvo5/"
          target="_blank"
          rel="noreferrer"
        >
          <motion.div
            initial={{ color: "black" }}
            whileHover={"view"}
            variants={iconAnimate}
            className="hidden mr-5 cursor-pointer md:block"
          >
            <BsInstagram size={20} />
          </motion.div>
        </a>
        {/* <a
          className="social-item"
          href="https://www.linkedin.com/in/guillermo-calvo-790948192/"
          target="_blank"
          rel="noreferrer"
        >
          <motion.div
          whileHover={"view"}
          variants={iconAnimate}
          className="hidden mr-5 cursor-pointer md:block no-underline"
        >
          <BsLinkedin size={20} />
        </motion.div>
        </a>
        <a
          className="social-item"
          href="https://github.com/GgaacCalvo"
          target="_blank"
          rel="noreferrer"
        >
          <motion.div
          whileHover={"view"}
          variants={iconAnimate}
          className="hidden mr-5 cursor-pointer md:block"
        >
          <BsGithub size={20} />
        </motion.div>
        </a>
        <a
          className="social-item"
          href="https://www.instagram.com/guillecalvo5/"
          target="_blank"
          rel="noreferrer"
        >
          <motion.div
          whileHover={"view"}
          variants={iconAnimate}
          className="hidden mr-5 cursor-pointer md:block"
        >
          <BsInstagram size={20} />
        </motion.div>
        </a> */}
      </div>
    </nav>
  );
};
export default NavBar;
