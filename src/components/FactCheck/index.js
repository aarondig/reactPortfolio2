import React, { useState } from "react";
import "./style.css";
import { motion, useViewportScroll } from "framer-motion";

function FactCheck({scroll}) {

  const opacity = -Math.pow((scroll / window.innerHeight) * 2 - .5, 2) + 1;
  const style = {
    fade: {
      opacity: opacity,
    },
  }

  return (
    <div id="factCheck">
      <div className="projectsHead">
      <h1 className="header" style={style.fade}>Google Fact Checker</h1>
      <h2 className="subHeader" style={style.fade}>Using Google's Fact Check API, this application ruturns fact checked articles based on the user's input search query. Using CSS and jquery animations, this appliaction displays the capabilities of my coding and design skillset.</h2>
      
      </div>
      
    </div>
  );
}

export default FactCheck;
