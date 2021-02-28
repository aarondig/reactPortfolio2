import React, { useRef, useEffect, useState } from "react";
import useWindowSize from "./hooks/windowSize";
import "./App.css";
import About from "./components/About";
import Wrapper from "./components/Wrapper";
import Landing from "./components/Landing";
import ProgressBar from "./components/ProgressBar";
import Nav from "./components/Nav";
import Projects from "./components/Projects";
import Banner from "./components/Banner";
import ImgBanner from "./components/ImgBanner";
import useScroll from "./hooks/scroll"
import Scene from "./components/Scene";
import { HashRouter as Router, Route } from "react-router-dom";

function App() {
  const size = useWindowSize();
  const app = useRef();
  const scrollContainer = useRef();
  const scroller = useRef();
  const fixedScroll = useRef();

  // SCROLLING
  // const skewScrolling = () => {

  //   const scrollerHeight = scroller.current.clientHeight;
  //   const pageTotal = 2;

  //   //Set Current to the scroll position amount
  //   data.current =  window.scrollY;
  //   // Set Previous to the scroll previous position
  //   // data.previous +=  (data.current - data.previous) * data.ease;

  //   // // Set rounded to
  //   // scroll = Math.round(data.previous * 100) / 100;
  //   //VARIABLES

  //   requestAnimationFrame(() => skewScrolling());
  // };

  const {scroll} = useScroll();

  // const [scrollerSize, setScrollerSize] = useState();

  // useEffect(() => {
  //   setScrollerSize(scrollContainer.current.getBoundingClientRect().height);
  // }, [size.height]);

  // const [scroll, setScroll] = useState(0);

  // const onScroll = () => {
  //   const scrollTop = scroller.current.scrollTop;
  //   setScroll(scrollTop);
  // };

  return (
    <div ref={app} className="App">
      <Wrapper>
        
          <div id="scroller" ref={scroller} >
          {/* onScroll={() => onScroll()} */}
            <div ref={scrollContainer} className="scroll">
              <Landing size={size} scroll={scroll} />
              {/* <Scene  size={size} scroll={scroll}/> */}

              <Banner size={size} scroll={scroll} />
              <ImgBanner size={size} scroll={scroll} />
              <Projects size={size} scroll={scroll} scroller={scroller}/>
              {/* <About size={size} scroll={scroll+size.height - scrollerSize} /> */}
              {/* <ProgressBar/> */}
            </div>
            <div id="fixed" ref={fixedScroll}>
            
            </div>
            {/* <div className="nothing" />
            <div className="nothing" /> */}
            </div>
          

          {/* -(scrollerSize+(size.height*2)) */}
        

        <Nav size={size} />
      </Wrapper>
    </div>
  );
}

export default App;
