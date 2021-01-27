import React, { useState } from "react";
import "./style.css";
import { motion, useViewportScroll } from "framer-motion";

function FactCheck({ scroll }) {
  const opacity = -Math.pow((scroll / window.innerHeight) * 2 - 2.5, 2) + 1;
  const style = {
    fade: {
      opacity: opacity,
    },
  };

  return (
    <div
      id="factCheck"
      style={
        scroll / window.innerHeight < 2
          ? { display: "block" }
          : { display: "none" }
      }
    >
      <div
        className="background"
        id="factCheckBack"
        style={
          scroll / window.innerHeight < 1.5
            ? { opacity: 1 }
            : { opacity: opacity + 1 }
        }
      >
        <div className="projectsHead" style={style.fade}>
          <div className="learnMore">
            <h1 className="header">Google Fact Checker</h1>
            
            <h2 className="subHeader">
              Using Google's Fact Check API, this application ruturns fact
              checked articles based on the user's input search query.
            </h2>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default FactCheck;
