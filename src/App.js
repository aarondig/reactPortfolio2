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

  //   const scrollableHeight = scrollable.current.clientHeight;
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


// const scroll = useScroll();




// useEffect(()=> {
  // const scrollableHeight = scrollable.current.clientHeight;

    // scrollable.current.style.position = `relative`;
    // scrollable.current.style.transform = `translate3d(0, 0px, 0)`;
    // scrollable.current.style.transform = `translate3d(0, -${scroll}px, 0)`
    // if (scroll >= scrollableHeight/4) {
      
      
    //   scrollable.current.style.transform = `translate3d(0, -${scrollableHeight/2}px, 0)`
    //   scrollable.current.style.position = `fixed`


      
    //   // fixedScroll.current.style.transform = `translate3d(0, -${
    //   //   scroll
    //   // }px, 0)`;
    // }
    // if (scroll > scrollableHeight) {
    //   fixedScroll.current.style.transform = `translate3d(0, -${scrollableHeight}px, 0) skewY(0deg)`;
    // }
    // console.log(scroll> scrollableHeight/2)
    // setScrollFixed((scroll-(size.height)) - (scrollableHeight));

  // },[scroll])
const [scroll, setScroll] = useState(0)

  const onScroll = () => {
    const scrollTop = scroller.current.scrollTop
    setScroll(scrollTop)
   
  }


  return (
    <div ref={app} className="App">
      <Wrapper>
    
        <div ref={scrollContainer} className="scroll">
        <Router basename={process.env.PUBLIC_URL}> 
          
          <div id="scroller" ref={scroller} onScroll={()=> onScroll()}>
            
            <Landing size={size} scroll={scroll}/>
            {/* <Scene  size={size} scroll={scroll}/> */}


            <Banner  size={size} scroll={scroll} />
            <ImgBanner size={size} scroll={scroll}/>
            <Projects size={size} scroll={scroll}  />
            {/* <ProgressBar/> */}
            
            </div>
            
            {/* <div className="nothing"/> */}
            <div id="fixed" ref={fixedScroll}>
            {/* <About size={size} scroll={scroll} /> */}
            </div>
            </Router>
        </div>
        <Nav size={size}/>
      </Wrapper>
    </div>
  );
}

export default App;
