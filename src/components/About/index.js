import React, { useState, useRef, useEffect } from "react";
import "./style.css";
import { motion, useViewportScroll } from "framer-motion";
import profilePic from "../../img/me.jpg";
import useWindowSize from "../../hooks/windowSize";
import useScroll from "../../hooks/scroll";

function About({ scroll }) {
  const size = useWindowSize();
  const position = useScroll();

  const opacity = -Math.pow((scroll / window.innerHeight) * 1.2 - 1.4, 2) + 1;
  // const containerWidth = (scroll / window.innerHeight - 1.1) * 100;
  const containerWidth = (scroll / window.innerHeight - 1.1) * 100;
  const negativeSpace = 100 - containerWidth;
  const negativeSpaceSlide = 60 - containerWidth;
  const move = (window.innerHeight / scroll - 1) * 100;

  const cardwX =
    (500 / window.innerWidth) * 100 * (window.innerHeight / scroll);
  // const cardwY =
  //   ((400 / window.innerWidth) * 100 * window.innerHeight) / scroll;
  const cardWidth = -((scroll / window.innerHeight) * 50) + 150;
  const style = {
    fade: {
      opacity: opacity,
    },
    reveal: {
      maxWidth: containerWidth > 40 ? containerWidth + "vw" : "40%",
      transform:
        size.width > 700 ? `translateX(-${move}px)` : `translateY(${move}px)`,
    },
    slideOut: {
      width: containerWidth > 40 ? negativeSpace + "%" : "60%",
      marginLeft: containerWidth,
    },
    slide: {
      marginLeft: containerWidth * 1.7,
      opacity: opacity * 0.8,
    },
    slide1: {
      marginLeft: containerWidth * .2,
    },
    slide2: {
      marginLeft: containerWidth * .6,
    },
    cardWidth: {
      transform:
        scroll / window.innerHeight > 1.7
          ? `rotateX(70deg) rotateZ(-60deg) translate3d(-120px, ${cardwX}%, 70px) !important`
          : `rotateX(70deg) rotateZ(-60deg) translate3d(-120px, 400px, 70px) !important`,
      maxWidth: containerWidth > 40 ? `${cardWidth}%` : `40vw`,
      minWidth: "400px",
    },
  };

  const hoverRef = useRef();
  const onHover = () => {
    if (containerWidth < 40) {
      hoverRef.current.style.transform = `rotateX(0deg) rotateY(180deg) rotateZ(0deg) translate3d(0px, 0px, 0px)`;
    }
  };
  const onExit = () => {
    
      hoverRef.current.style.transform = `rotateX(70deg) rotateZ(-60deg) translate3d(-120px, 400px, 70px)`;
    
    
    // absolute.current.style.position = `initial`;
  };
  return (
    <div id="About">
      <div id="foreground" />
      {/* <div id="spotlight">
      <div id="spotlight-child"/>
      </div> */}
      <div className="pageWrap">
        <div className="cardContainer" style={style.reveal}>
          <div className="card" style={style.cardWidth} ref={hoverRef} >
            <div className="cardFace">
              <div className="cardFront" style={{position: containerWidth < 40 ? "absolute" : "relative"}}>
                <img id="profilePic" src={profilePic} />
                <div className="picOverlay" />
              </div>
              <div className="cardBack" style={{position: containerWidth < 40 ? "absolute" : "relative"}}>
                <h1> hello</h1>
              </div>
            </div>
          </div>
          <div id="cardOverlay" />
        </div>
        {opacity > 0 ? (
          <div className="content">
            <div className="headerC container">
              <h1
                className="header container"
                id="freelance"
                style={style.fade}
              >
                Freelance Web Developer.
              </h1>
              {size.width < 700 ? (
                <h4 className="subHeader" style={style.fade}>
                  Where creativity meets creation.
                </h4>
              ) : (
                <div />
              )}
            </div>
            {size.width > 700 ? (
              <div className="slideContent" style={style.slideOut}>
                <div className="slideWrap" style={style.slide}>
                  <h2 className="subHeader" style={style.slide1}>
                    <span>Where creativity meets creation.</span>
                  </h2>
                  <h3 className="title" style={style.slide2}>
                    Specializing in:
                  </h3>
                  <div className="buttonC container" style={style.slide2}>
                    <div
                      className="button"
                      onMouseOver={onHover}
                      onMouseOut={onExit}
                    >
                      <div>HTML</div>
                    </div>
                    <div className="button"></div>
                    <div className="button"></div>
                    <div className="button"></div>
                  </div>
                </div>
              </div>
            ) : (
              <div />
            )}

            <div className="skills"></div>
          </div>
        ) : (
          <div className="headerC center">
            {scroll > window.innerHeight ? (
              <h1 className="header">Let's stay in touch.</h1>
            ) : (
              <div />
            )}
          </div>
        )}

        {/* <div className="flex-grid">
        <div className="col">
          <ul>
            <li className="item">HTML</li>
            <li className="item">CSS</li>
            <li className="item">JAVASCRIPT</li>
          </ul>
        </div>
        <div className="col">
       
        </div>
        
      </div> */}

        {/* <div className="grid">
        <div className="gridBanner">
          <div className="aboutBackground" id="who1">WHO AM I</div>
            <div className="container">
            <h1 className="header">A Freelance Web Designer.</h1>
          </div>
        </div>
        <div className="gridLeft">
          <div className="blah">hello</div>
        </div>
        <div className="gridRight">
          <div className="blah">hello</div>
        </div>
      </div> */}
      </div>
    </div>
  );
}

export default About;
