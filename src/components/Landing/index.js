import React, { useState, useRef, useEffect } from "react";
import About from "../About";
import Scene from "../Scene";
import ProgressBar from "../ProgressBar";
import { motion, useViewportScroll } from "framer-motion";
import "./style.css";

function Landing({ size, scroll}) {
  const { scrollYProgress } = useViewportScroll();

  const [progress, setProgress] = useState(0);
  scrollYProgress.onChange((e) => setProgress(e));
  const blurValue = progress * 10 + "px";
  const num = progress * -6;
  const titlePosi = -6 + Math.pow(num, 3);

  return (
    <div id="landing" >
      <div className="center">
        {/* <div className="outlineLine" /> */}
        <div className="outline" />
      </div>
      <Scene blurValue={blurValue} size={size} scroll={scroll}/>

      <div className="topHeader">
        <h1 id="topHead">aaron diggdon</h1>
      </div>
      <div
        className="mainHeader"
        style={{ fontSize: size.width > 700 ? "50px" : "30px" }}
      >
        {/* <h1 id="outlineHead">Aaron</h1>
        <h1 id="fillHead">Diggdon</h1>
        <p id="subText">Scroll to Explore</p> */}
      </div>
      {/* {progress > .2 ? <About progress={progress}/> : <div id="prompt"></div> } */}
      {/* <ProgressBar progress={progress}/> */}
    </div>
  );
}

export default Landing;
