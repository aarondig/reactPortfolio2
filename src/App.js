import React, { useRef, useEffect, useState } from "react";
import useWindowSize from "./hooks/windowSize";
import "./App.css";
import About from "./components/About1";
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

  const [containerHeight, setContainerHeight] = useState()
  useEffect(()=>{
    setContainerHeight(scrollContainer.current.getBoundingClientRect().height)
  },[size.height])
  // useEffect(()=>{
  //   fixedScroll.current.style.position = 'relative'
  //   if (scroll > containerHeight) {
  //     fixedScroll.current.style.position = 'fixed'

  //   }
  // },[scroll])
  return (
    <div ref={app} className="App">
      <Wrapper>
        
          <div id="scroller" ref={scroller} >
          {/* onScroll={() => onScroll()} */}
            <div ref={scrollContainer} className="scroll">
              {size.width > 800 ? <>
              <Landing size={size} scroll={scroll} />
              {/* <Scene  size={size} scroll={scroll}/> */}

              <Banner size={size} scroll={scroll} />
              <ImgBanner size={size} scroll={scroll} />
              <Projects size={size} scroll={scroll} scroller={scroller}/>
              <About size={size} scroll={scroll}/>
              </> : <About size={size} scroll={scroll}/>}

              {/* <ProgressBar/> */}
            </div>
            {/* <div id="fixed" ref={fixedScroll}>
            <About size={size} scroll={scroll - (containerHeight - size.height)} />
            </div> */}
            {/* {Math.round(scroll) >= Math.round(containerHeight) ? 
            <div className="nothing" /> : <div/>
          } */}
            
            </div>
          

          {/* -(scrollerSize+(size.height*2)) */}
        

        <Nav size={size} />
      </Wrapper>
    </div>
  );
}

export default App;
