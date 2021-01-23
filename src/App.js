import React, { useRef, useEffect, useState } from "react";
import useWindowSize from "./hooks/windowSize";
import "./App.css";
import About from "./components/About";
import Wrapper from "./components/Wrapper";
import Landing from "./components/Landing";
import ProgressBar from "./components/ProgressBar";
import Nav from "./components/Nav";
import Projects from "./components/Projects";

function App() {
  const [scroll, setScroll] = useState();

  const size = useWindowSize();

  const app = useRef();
  const scrollContainer = useRef();
  const scrollable = useRef();
  const fixedScroll = useRef();

  const data = {
    ease: 0.1,
    current: 0,
    previous: 0,
    rounded: 0,
  };

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
    const containerHeight = scrollable.current.getBoundingClientRect()
      .height  + 1;
    //Set Current to the scroll position amount
    data.current = window.scrollY;
    // Set Previous to the scroll previous position
    data.previous += (data.current - data.previous) * data.ease;
    // Set rounded to
    data.rounded = Math.round(data.previous * 100) / 100;
    //VARIABLES

    const difference = data.current - data.rounded;
    const acceleration = difference / size.width;
    const velocity = +acceleration;
    const skew = velocity * 7.5;
    //Assign skew and smooth scrolling to the scroll container based on certain scroll amounts
    scrollable.current.style.transform = `translate3d(0, -${data.rounded}px, 0)`;
    if (data.rounded > containerHeight/2) {
      scrollable.current.style.transform = `translate3d(0, -${containerHeight/2}px, 0)`
      fixedScroll.current.style.transform = `translate3d(0, -${
      data.rounded
      }px, 0)`;
    }

    // if (data.rounded > containerHeight/2) {
    //   scrollable.current.style.transform = `translate3d(0, -${data.rounded + containerHeight/2}px, 0)`;
    // }

    if (data.rounded > containerHeight) {
      fixedScroll.current.style.transform = `translate3d(0, -${containerHeight}px, 0) skewY(0deg)`;
    }
    // skewY(${skew}deg)
    // scrollable.current.style.borderRadius = `${round}%`;
    setScroll(data.rounded - containerHeight/2);
    requestAnimationFrame(() => skewScrolling());
  };
  return (
    <div ref={app} className="App">
      <Wrapper>
        <div ref={scrollContainer} className="scroll">
          <div id="scrollable" ref={scrollable}>
            <Landing size={size.width} />
            <Projects />

            {/* <ProgressBar/> */}
            </div>
            <div id="fixed" ref={fixedScroll}>
              <About scroll={scroll} />
              <div className="nothing"/>
            </div>
          
        </div>
        <Nav />
      </Wrapper>
    </div>
  );
}

export default App;
