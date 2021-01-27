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
    ease: size.width > 800 ? 0.1 : .05,
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
  }, []);
  // size.height


  // console.log(scrollContainer.current.getBoundingClientRect().height)




  // SCROLLING
  const skewScrolling = () => {
    const containerHeight = size.width > 800 ? scrollable.current.getBoundingClientRect().height + 1 : scrollable.current.clientHeight + 1;
    const pageTotal = 5;
    
    //Set Current to the scroll position amount
    data.current =  window.scrollY;
    // Set Previous to the scroll previous position
    data.previous += size.width > 800 ? (data.current - data.previous) * data.ease : (data.current - data.previous);

    // * data.ease

    // Set rounded to
    data.rounded = Math.round(data.previous * 100) / 100;
    //VARIABLES

    const difference = data.current - data.rounded;
    const acceleration = difference / size.width;
    const velocity = +acceleration;
    const skew = velocity * 7.5;
    //Assign skew and smooth scrolling to the scroll container based on certain scroll amounts
    
     // NORMAL W INERTIA
//  if (size.width > 800) {
    scrollable.current.style.transform = `translate3d(0, -${data.rounded}px, 0)`;
    if (data.rounded> containerHeight/pageTotal ) {
      scrollable.current.style.transform = `translate3d(0, -${containerHeight/pageTotal}px, 0)`
      fixedScroll.current.style.transform = `translate3d(0, -${
        data.rounded
      }px, 0)`;
    }
    if (data.rounded > containerHeight/pageTotal) {
      
    }
    if (data.rounded > containerHeight) {
      fixedScroll.current.style.transform = `translate3d(0, -${containerHeight}px, 0) skewY(0deg)`;
    }
    setScroll(data.rounded - containerHeight / pageTotal);
  // }


// MOBILE RESPONSIVE W/O INERTIA
// if (size.width < 800) {
//   scrollable.current.style.transform = `translate3d(0, -${window.scrollY}px, 0)`;
//   if (window.scrollY > containerHeight/pageTotal ) {
//     scrollable.current.style.transform = `translate3d(0, -${containerHeight/pageTotal}px, 0)`
//     fixedScroll.current.style.transform = `translate3d(0, -${
//       window.scrollY
//     }px, 0)`;
//   }
//   if (window.scrollY > containerHeight) {
//     fixedScroll.current.style.transform = `translate3d(0, -${containerHeight}px, 0) skewY(0deg)`;
//   }
//   setScroll(window.scrollY - containerHeight / pageTotal);
// }


    // skewY(${skew}deg)
    // scrollable.current.style.borderRadius = `${round}%`;
    
    requestAnimationFrame(() => skewScrolling());
  };
  return (
    <div ref={app} className="App">
      <Wrapper>
        <div ref={scrollContainer} className="scroll">
          <div id="scrollable" ref={scrollable}>
            <Landing size={size} />
            <Projects scroll={scroll}/>
            <div className="nothing"/>
            <div className="nothing"/>
            <div className="nothing"/>
            {/* <ProgressBar/> */}
            </div>
            <div id="fixed" ref={fixedScroll}>
              
              <About scroll={scroll} />
              <div className="nothing"/>
            </div>
          
        </div>
         {/* <div id="fixed" ref={fixedScroll}>
            {((scroll + (container/3) +1) > container/3) &&
              <div style={{height: "100%", width: "100%"}}>
                <About scroll={scroll}/>
              <div className="nothing"/>
              </div>
              }
            </div> */}

        <Nav />
      </Wrapper>
    </div>
  );
}

export default App;


//  // NORMAL W INERTIA
//  if (size.width > 800) {
//   scrollable.current.style.transform = `translate3d(0, -${data.rounded}px, 0)`;
//   if (data.rounded > containerHeight/pageTotal ) {
//     scrollable.current.style.transform = `translate3d(0, -${containerHeight/pageTotal}px, 0)`
//     fixedScroll.current.style.transform = `translate3d(0, -${
//       data.rounded
//     }px, 0)`;
//   }
//   if (data.rounded > containerHeight) {
//     fixedScroll.current.style.transform = `translate3d(0, -${containerHeight}px, 0) skewY(0deg)`;
//   }
//   setScroll(data.rounded - containerHeight / pageTotal);
// }

// // MOBILE RESPONSIVE W/O INERTIA
// if (size.width < 800) {
//   scrollable.current.style.transform = `translate3d(0, -${window.scrollY}px, 0)`;
//   if (window.scrollY > containerHeight/pageTotal ) {
//     scrollable.current.style.transform = `translate3d(0, -${containerHeight/pageTotal}px, 0)`
//     fixedScroll.current.style.transform = `translate3d(0, -${
//       data.rounded
//     }px, 0)`;
//   }
//   if (window.scrollY > containerHeight) {
//     fixedScroll.current.style.transform = `translate3d(0, -${containerHeight}px, 0) skewY(0deg)`;
//   }
//   setScroll(window.scrollY - containerHeight / pageTotal);
// }