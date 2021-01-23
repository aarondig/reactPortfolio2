import React, { useState } from "react";
import "./style.css";
import { motion, useViewportScroll } from "framer-motion";

function Projects({scroll}) {

  const opacity = -Math.pow((scroll / window.innerHeight) * 2 - .5, 2) + 1;
  const style = {
    fade: {
      opacity: opacity,
    },
  }
  console.log(opacity)
  return (
    <div id="projects">
      <div className="projectsHead container">
      <h1 className="header" style={style.fade}>Projects</h1>
      </div>
    </div>
  );
}

export default Projects;
