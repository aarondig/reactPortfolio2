import React, {useState} from "react";
import About from "../About";
import Scene from "../Scene"
import ProgressBar from "../ProgressBar"
import { motion, useViewportScroll } from "framer-motion"
import "./style.css";


function Landing() {
  const { scrollYProgress } = useViewportScroll()
  const [progress, setProgress] = useState(0);
  scrollYProgress.onChange(e => setProgress(e));
  const blurValue = (progress * 10) + "px";
  const num = progress * -6;
  const titlePosi = -6 + (Math.pow(num, 3));
  const [scroll, setScroll] = useState(false);




    return <div id="landing">
      <div className="mainHeader">
      <h1 id="outlineHead">
        AARON
      </h1>
      <h1 id="fillHead">
        DIGGDON
      </h1>
      </div>
      <Scene blurValue={blurValue} />

      
      {/* {progress > .2 ? <About progress={progress}/> : <div id="prompt"></div> } */}
      <ProgressBar progress={progress}/>
    </div>;
  }
  
  export default Landing;
  