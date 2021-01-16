import React, { useRef, useEffect, useState } from "react";
import useWindowSize from "./hooks/windowSize";
import "./App.css";
import About from "./components/About";
import Wrapper from "./components/Wrapper";
import Landing from "./components/Landing";
import ProgressBar from "./components/ProgressBar";

function App() {
  const [scroll, setScroll] = useState();


  const size = useWindowSize();

  const app = useRef();
  const scrollContainer = useRef();
  const scrollable = useRef();

  const data = {
    ease: 0.1,
    current: 0,
    previous: 0,
    rounded: 0,
  };

  // let speed = 0;
  // let position = 0;
  // let rounded = 0;
  // window.addEventListener('wheel',(e) => {
  //   speed += e.deltaY*.0003
  // })
  useEffect(() => {
    requestAnimationFrame(() => skewScrolling());
  }, []);

  useEffect(() => {
    document.body.style.height = `${
      scrollContainer.current.getBoundingClientRect().height
    }px`;
  }, [size.height]);
 
  
  // SCROLLING
  const skewScrolling = () => {
    //Set Current to the scroll position amount
    data.current = window.scrollY;
    // Set Previous to the scroll previous position
    data.previous += (data.current - data.previous) * data.ease;
    // Set rounded to
    data.rounded = Math.round(data.previous * 100) / 100;
    //VARIABLES

    // position += speed;
    // speed *= 0.8;
    // // let position = data.current*.01
    // rounded = Math.round(position)

    // const diff = (rounded - position)
    // position += diff*.05;


    



    const difference = data.current - data.rounded;
    const acceleration = difference / size.width;
    const velocity = + acceleration;
    const skew = velocity * 7.5;
    const round = Math.abs(velocity) * 100;
    //Assign skew and smooth scrolling to the scroll container based on certain scroll amounts
    scrollable.current.style.transform = `translate3d(0, -${data.rounded}px, 0)`;
    if (data.rounded > window.innerHeight) {
      scrollable.current.style.transform = `translate3d(0, -${window.innerHeight}px, 0) skewY(0deg)`;
    } 
    // skewY(${skew}deg)
    // scrollable.current.style.borderRadius = `${round}%`;
    
    setScroll(data.rounded)
    requestAnimationFrame(() => skewScrolling());
  };

  return (
    <div ref={app} className="App">
      <Wrapper>
        <div ref={scrollContainer} className="scroll">
          <Landing size={size.width} />
          <div id="scrollable" ref={scrollable}>
            <About scroll={scroll}/>
           <div className="nothing">
             HI EVERYBODY
             <h1>HI EVERYBODY</h1>
           </div>
          </div>
          {/* <ProgressBar/> */}
        </div>
      </Wrapper>
    </div>
  );
}

export default App;
