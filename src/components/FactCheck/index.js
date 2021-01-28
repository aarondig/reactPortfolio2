import React, { useState, useRef } from "react";
import "./style.css";
import { motion, useViewportScroll } from "framer-motion";

function FactCheck({ scroll, size }) {
  const [click, setClick] = useState(false);
  const opacity = -Math.pow((scroll / size.height) * 2 - 2.5, 2) + 1;
  const style = {
    fade: {
      opacity: opacity,
    },
  };

  const sliderStyle = {
    closed: {
      width: size.width*2,
      transform: `translateX(0)`,
    },
    opened: {
      width: size.width*2,
      transform: `translateX(-40%)`,
    },
  };
  const arrowStyle = {
    closed: {
      transform: `rotate(315deg)`,
    },
    opened: {
      transform: `rotate(135deg)`,
    },
  };
  console.log(click);
  return (
    <div
      id="factCheck"
      style={
        scroll / size.height < 2
          ? { display: "block", height: size.height }
          : { display: "none", height: size.height }
      }
    >
      <div
        className="background"
        id="factCheckBack"
        style={
          scroll / size.height < 1.5 ? { opacity: 1 } : { opacity: opacity + 1 }
        }
      ><div className="slider" style={click ? sliderStyle.opened : sliderStyle.closed}>

      
        <div
          className="mainSlide"
          
        >
          <div className="projectsHead" style={style.fade}>
            <div className="learnMore">
              <h1 className="header">Google Fact Checker</h1>
              <h2 className="subHeader">
                Using Google's Fact Check API, this application ruturns fact
                checked articles based on the user's input search query.
              </h2>
            </div>
          </div>
          </div>
          <div className="arrowC">
          <div
            className="arrow"
            style={click ? arrowStyle.opened : arrowStyle.closed}
            onClick={() => setClick(!click)}
          />
          </div>
          <div
          className="nextSlide"
          // style={click ? nextSlideStyle.opened : nextSlideStyle.closed}
        ></div>
        </div>
          
      </div>
    </div>
  );
}

export default FactCheck;
