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
import useScroll from "./hooks/scroll";

//  if ( !window.requestAnimationFrame ) {

//     window.requestAnimationFrame = ( function() {
  
//       return window.webkitRequestAnimationFrame ||
//       window.mozRequestAnimationFrame ||
//       window.oRequestAnimationFrame ||
//       window.msRequestAnimationFrame ||
//       function( /* function FrameRequestCallback */ callback, /* DOMElement Element */ element ) {
  
//         window.setTimeout( callback, 1000 / 60 );
  
//       };
  
//     } )();
  
//   }



function App() {
  // const [scroll, setScroll] = useState();
  const [scrollFixed, setScrollFixed] = useState();
  const size = useWindowSize();
  const app = useRef();
  const scrollContainer = useRef();
  const scrollable = useRef();
  const fixedScroll = useRef();

  const data = {
    ease: size.width > 700 ? 0.1 : .2,
    current: 0,
    previous: 0,
    rounded: 0,
  };


  useEffect(() => {
    document.body.style.height = `${
      scrollContainer.current.clientHeight
    }px`;
  }, [size.height]);

  


  

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


const scroll = useScroll();


useEffect(()=> {
  const scrollableHeight = scrollable.current.clientHeight;


  scrollable.current.style.position = `relative`;

    scrollable.current.style.transform = `translate3d(0, 0px, 0)`;
    if (scroll > scrollableHeight/1.5) {
      
      
      scrollable.current.style.transform = `translate3d(0, -${scrollableHeight/1.5}px, 0)`
      scrollable.current.style.position = `fixed`


      
      // fixedScroll.current.style.transform = `translate3d(0, -${
      //   scroll
      // }px, 0)`;
    }
    // if (scroll > scrollableHeight) {
    //   fixedScroll.current.style.transform = `translate3d(0, -${scrollableHeight}px, 0) skewY(0deg)`;
    // }
    // console.log(scroll> scrollableHeight/2)
    // setScrollFixed((scroll-(size.height)) - (scrollableHeight));

  },[scroll])
  return (
    <div ref={app} className="App">
      <Wrapper>
        <div ref={scrollContainer} className="scroll">
          <div id="scrollable" ref={scrollable}>
            <Landing size={size} scroll={scroll}/>
            <Banner/>
            {/* <Projects size={size} scroll={scroll}  /> */}
            {/* <ProgressBar/> */}
            
            </div>
            
            <div className="nothing"/>
            <div id="fixed" ref={fixedScroll}>
            <About size={size} scroll={scroll} />
            </div>
        </div>
        <Nav size={size}/>
      </Wrapper>
    </div>
  );
}

export default App;
