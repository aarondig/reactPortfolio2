import React, { useState } from "react";
import "./style.css";
import { motion, useViewportScroll } from "framer-motion";

function BurgerEater({ scroll }) {

  const opacity = -Math.pow((scroll / window.innerHeight) * 2 - 4.5, 2) + 1;
  const style = {
    fade: {
      opacity: opacity,
    },
  }
 
  return (
    <div id="burgerEater" style={
      scroll / window.innerHeight < 3
        ? { display: "block" }
        : { display: "none" }
    }>
      <div className="background" id="burgerEaterBack" style={
          scroll / window.innerHeight < 2.5
            ? 
            { opacity: 1 } : { opacity: opacity + 1}
        }>
      <div className="projectsHead" style={style.fade}>
      <div className="learnMore">
      <h1 className="header">Burger Eater</h1>
      <h2 className="subHeader">Using a mySQL database, this application allows a user to write-to, update, and edit a database in the form of eating burgers.</h2>
      </div>
      </div>
      </div>
    </div>
  );
}

export default BurgerEater;
