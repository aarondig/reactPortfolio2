import React, {useState} from "react";
import About from "../About";
import Header from "../Header"
import "./style.css";
import { motion, useViewportScroll } from "framer-motion"
import {useSpring, a} from "react-spring"

function Landing(props) {
  const { scrollYProgress } = useViewportScroll()
  const [progress, setProgress] = useState(0);
  scrollYProgress.onChange(e => setProgress(e));
  const blurValue = (progress * 10) + "px";
  const num = progress * -6;
  const titlePosi = 3 + Math.pow(num, 3);
  const [blur, setBlur] = useState(false);
  console.log(progress)
  // if (progress > .9) {
  //   setBlur(true)
  // }

//   const props = useSpring({ number: 1, from: { number: 0 } })
// return <animated.span>{props.number}</animated.span>


    return <div id="landing">
      
      <Header blur={blur} blurValue={blurValue} titlePosi={titlePosi} />

      {progress > .9 ? <About/> : <div id="prompt"></div> }
      
    </div>;
  }
  
  export default Landing;
  