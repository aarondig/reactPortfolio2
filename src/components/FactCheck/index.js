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
      width: size.width * 2,
      transform: `translateX(0)`,
    },
    opened: {
      width: size.width * 2,
      transform: size.width > 700 ? `translateX(-40%)` : `translateX(-50%)`,
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
            marginLeft: `-20px`,
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
      >
        <div
          className="slider"
          style={click ? sliderStyle.opened : sliderStyle.closed}
        >
          <div
            className="mainSlide"
            style={size.width > 700 ? { width: `40%` } : { width: `45%` }}
          >
            <div className="projectsHead" style={style.fade}>
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
            <div className="nextSlideWrapper" style={click ? wrapperStyle.opened : wrapperStyle.closed}>
              {/* <h1>hello</h1> */}
              <div className="techUsed">
                {/* <h3>This Project Uses:</h3> */}
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
              {/* <div className="description">
                <h3>NAH</h3>
                <p>JAVPT</p>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FactCheck;
