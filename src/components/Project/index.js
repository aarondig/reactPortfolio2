import React, { useState, useRef, useEffect } from "react";
import "./style.css";
import { motion, useViewportScroll } from "framer-motion";

import useScrollLock from "../../hooks/scrollLock";
import useWindowSize from "../../hooks/windowSize";

function FactCheck({  }) {
  const [click, setClick] = useState();
  const scrollLock = useScrollLock();
  const size = useWindowSize();
const slider = useRef()

    

    useEffect(()=>{
      
      if (click === true) {
        // slider.current.style.overflowY = "scroll";
        scrollLock.lock();
        
      } 
      if (click === false) {
        
        // slider.current.style.overflowY = originalStyle;
        scrollLock.unlock();
      }
      console.log(document.body)
    },[click])



  
  

  const sliderStyle = {
    closed: {
      width: "200%",
      transform: `translateX(0)`,
      // overflowY: `hidden`,
      
    },
    opened: {
      transform: size.width > 700 ? `translateX(-40%)` : `translateX(-50%)`,
      // overflowY: `scroll`,
    },
  };
  const arrowStyle =
    size.width > 700
      ? {
          closed: {
            transform: `rotate(315deg)`,
            marginLeft: `0px`,
          },
          opened: {
            transform: `rotate(135deg)`,
            marginLeft: `33px`,
          },
        }
      : {
          closed: {
            transform: `rotate(315deg)`,
            marginLeft: `-48vw`,
            marginBottom: -(size.height * .65) + `px`,
          },
          opened: {
            transform: `rotate(135deg)`,
            marginLeft: `170%`,
            borderColor: "#ebedee",
          },
        };
        const wrapperStyle =  size.width > 700
        ? {
          closed: {
            paddingLeft: `15%`,
          },
          opened: {
            paddingLeft: `5%`
          }
        } : {
          closed: {
            paddingLeft: `25%`,
          },
          opened: {
            paddingLeft: `15%`
          },
        };
  return (
    <div
      id="project"
    >
        <div
          className="slider"
          style={click ? sliderStyle.opened : sliderStyle.closed}
          ref={slider}
        >
          <div
            className="mainSlide"
            style={size.width > 700 ? { width: `40%` } : { width: `45%` }}
          >
            <div className="projectsHead">
              <h1 className="header">Google Fact Checker</h1>
              <h2 className="subHeader">
                Using Google's Fact Check API, this application ruturns fact
                checked articles based on the user's input search query.
              </h2>
            </div>
          </div>
          <div
            className="arrowC"
            style={size.width > 700 ? { width: `5%` } : { width: `5%` }}
          >
            <div
              className="arrow"
              style={click ? arrowStyle.opened : arrowStyle.closed}
              onClick={() => setClick(!click)}
            />
          </div>
          <div
            className="nextSlide"
            style={size.width > 700 ? { width: `45%` } : { width: `50%` }}
          >
            <div className="projectImgC">
              <img
                className="projectImg"
                src="https://github.com/aarondig/factCheck/blob/main/assets/banner.png?raw=true"
              ></img>
            </div>
            <div className="overflow">
            <div className="nextSlideWrapper" style={click ? wrapperStyle.opened : wrapperStyle.closed}>
              {/* <h1>hello</h1> */}
              

              
              <div className="techUsed">
                <h3>This Project Uses:</h3>
                <p>JAVASCRIPT</p>
                <p>EXPRESS.JS</p>
                <p>JQUERY.JS</p>
                <p>AXIOS.JS</p>
                <p>CSS</p>
                <p>HTML</p>
              </div>

              <div className="vertCenter">
                <div className="center">
                  <div className="mainLink"></div>
                </div>
              </div>
              <a className="demoButton" href="https://googlefactchecker.herokuapp.com">
              <div className="buttonContent">DEMO</div>
              </a>
              </div>
            </div>
          </div>
        </div>

    </div>
  );
}

export default FactCheck;
