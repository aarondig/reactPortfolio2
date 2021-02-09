import React, { useRef, useEffect, useState } from "react";
import useWindowSize from "./hooks/windowSize";
import "./App.css";
import About from "./components/About";
import Wrapper from "./components/Wrapper";
import Landing from "./components/Landing";
import ProgressBar from "./components/ProgressBar";
import Nav from "./components/Nav";
import Projects from "./components/Projects";

let requestAnimationFrame = window.webkitRequestAnimationFrame || window.requestAnimationFrame || window.mozRequestAnimationFrame  || window.msRequestAnimationFrame

function App() {
  const [scroll, setScroll] = useState();
  const [scrollFixed, setScrollFixed] = useState();
  const size = useWindowSize();
  const app = useRef();
  const scrollContainer = useRef();
  const scrollable = useRef();
  const fixedScroll = useRef();

  const data = {
    ease: size.width > 700 ? 0.01 : .1,
    current: 0,
    previous: 0,
    rounded: 0,
  };

  useEffect(() => {
    requestAnimationFrame(() => skewScrolling());
  }, []);

  useEffect(() => {
    document.body.style.height = `${
      scrollContainer.current.clientHeight
    }px`;
    
  }, [size.height]);

  // console.log(scrollContainer.current.getBoundingClientRect().height)
  



  // SCROLLING
  const skewScrolling = () => {
    const scrollableHeight = scrollable.current.clientHeight;
    const pageTotal = 5;
    
    //Set Current to the scroll position amount
    data.current =  window.scrollY;
    // Set Previous to the scroll previous position
    data.previous += size.width > 700 ? (data.current - data.previous) * data.ease : (data.current - data.previous) * data.ease;

    // * data.ease

    // Set rounded to
    data.rounded = Math.round(data.previous * 100) / 100;
    //VARIABLES

    // const difference = data.current - data.rounded;
    // const acceleration = difference / size.width;
    // const velocity = +acceleration;
    // const skew = velocity * 7.5;
    //Assign skew and smooth scrolling to the scroll container based on certain scroll amounts
    
     // NORMAL W INERTIA
//  if (size.width > 800) {
    scrollable.current.style.transform = `translate3d(0, -${data.rounded}px, 0)`;
    // if (data.rounded> scrollableHeight/pageTotal ) {
    //   scrollable.current.style.transform = `translate3d(0, -${scrollableHeight/pageTotal}px, 0)`
    //   fixedScroll.current.style.transform = `translate3d(0, -${
    //     data.rounded
    //   }px, 0)`;
    // }
    // if (data.rounded > scrollableHeight/pageTotal) {
      
    // }
    // if (data.rounded > scrollableHeight) {
    //   fixedScroll.current.style.transform = `translate3d(0, -${scrollableHeight}px, 0) skewY(0deg)`;
    // }
    // size.width > 800 ? setScroll(data.rounded - (scrollableHeight / pageTotal)) : setScroll(data.current - (scrollableHeight / pageTotal))
    // setScrollFixed((data.rounded-(size.height * 3)) - (scrollableHeight / pageTotal));
  // }
    
  

    requestAnimationFrame(() => skewScrolling());
  };
  // console.log(scroll)
  // console.log(scrollFixed)
  return (
    <div ref={app} className="App" >
      <Wrapper>
        <div ref={scrollContainer} className="scroll">
          <div id="scrollable" ref={scrollable}>
            <Landing size={size} />
            <Projects size={size} scroll={scroll}/>
            <div className="nothing" style={{minHeight: size.height}}/>
            <div className="nothing" style={{minHeight: size.height}}/>
            <div className="nothing" style={{minHeight: size.height}}/>
            {/* <ProgressBar/> */}
            </div>
            <div id="fixed" ref={fixedScroll}>
              
              <About size={size} scroll={scrollFixed} />
              
            </div>
            <div className="nothing" style={{minHeight: size.height}}/>
        </div>
     

        <Nav size={size}/>
      </Wrapper>
    </div>
  );
}

export default App;
