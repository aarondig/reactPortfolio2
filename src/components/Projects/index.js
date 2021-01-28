import React, { useState } from "react";
import "./style.css";
import { motion, useViewportScroll } from "framer-motion";
import FactCheck from "../FactCheck";
import BurgerEater from "../BurgerEater";
import MemoryGame from "../MemoryGame";
import useWindowSize from "../../hooks/windowSize";

function Projects({ scroll }) {
  const size = useWindowSize();
  const opacity = -Math.pow((scroll / size.height) * 2 - 0.2, 2) + 1;
  const style = {
    fade: {
      opacity: opacity,
    },
  };

  return (
    <div id="projects" style={{height: size.height}}>
      <div
        id="cover"
        style={
          scroll / size.height < 1
            ? { display: "block", }
            : { display: "none", }
        }
      >
        <div className="background" id="coverBack" style={
          scroll / size.height < .5
            ? 
            { opacity: 1 } : { opacity: opacity + 1}
        }>
          <div className="projectsHead">
            <h1 className="header" style={style.fade}>
              Projects
            </h1>
            <h2 className="subHeader" style={style.fade}>
              These were completed while studying web development and design.
            </h2>
            <p className="text">Keep Scrolling...</p>
          </div>
        </div>
      </div>
      
      <FactCheck scroll={scroll} size={size}/>
      <BurgerEater scroll={scroll} size={size}/>
      <MemoryGame scroll={scroll} size={size}/>
      </div>
  
  );
}

export default Projects;
