import React, { useState, useRef, useEffect } from "react";
import About from "../About";
import Scene from "../Scene";
import ProgressBar from "../ProgressBar";
import { motion, useViewportScroll } from "framer-motion";
import "./style.css";

function Landing({ size, scroll}) {

  return (
    <div id="landing">
      <Scene  size={size} scroll={scroll}/>
      <div className="landingWrap">
      
      <div className="center backTextC">
        {/* <div className="outline" /> */}
        <h1 className="backText">hello!</h1>
      </div>
  
      
    
      <div className="topHeader">
        <h1 id="topHead">AARON DIGGDON</h1>
      </div>
      
      <div
        className="mainHeader"
        style={{ fontSize: size.width > 700 ? "50px" : "30px" }}
      >
        {/* <h1 id="outlineHead">Aaron</h1>
        <h1 id="fillHead">Diggdon</h1>
        <p id="subText">Scroll to Explore</p> */}
      </div>
      </div>
      {/* {progress > .2 ? <About progress={progress}/> : <div id="prompt"></div> } */}
      {/* <ProgressBar progress={progress}/> */}
    </div>
  );
}

export default Landing;
