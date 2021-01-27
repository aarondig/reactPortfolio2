import React, { useState } from "react";
import "./style.css";
import { motion, useViewportScroll } from "framer-motion";

function MemoryGame({ scroll, size }) {

  const opacity = -Math.pow((scroll / size.height) * 2 - 6.5, 2) + 1;
  const style = {
    fade: {
      opacity: opacity,
    },
  }
  return (
    <div id="memoryGame" style={
      scroll / size.height < 4
        ? { display: "block" }
        : { display: "none" }
    }>
      <div className="background" id="memoryGameBack" style={
          scroll / size.height < 3.5
            ? 
            { opacity: 1 } : { opacity: opacity + 1}
        }>
      <div className="projectsHead" style={style.fade}>
      <div className="learnMore">
      <h1 className="header">Memory Game</h1>
      <h2 className="subHeader">This game uses REACT to display a grid of images with onClick event listeners that trigger a function when selected. The onClick function within the game.js file determines if that same image has been clicked before. If it has, the game is lost and all state components are returned to their initial value, and setting the highscore as the user's current number of points. If it hasn't, the game continues, adding a point to the banner and shuffling cards using a math.random function.</h2>
      </div>
      </div>
      </div>
    </div>
  );
}

export default MemoryGame;
