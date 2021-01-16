import React, { useState, useRef, useEffect } from "react";
import "./style.css";
import { motion, useViewportScroll } from "framer-motion";
import profilePic from "../../img/me.jpg";
import useWindowSize from "../../hooks/windowSize";

function About({ scroll }) {
  const size = useWindowSize();
  const opacity = -Math.pow((scroll / window.innerHeight) * 1.2 - 1.4, 2) + 1;
  const containerWidth = (scroll / window.innerHeight - 1.1) * 100;

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
    cardWidth: {
      transform: scroll / window.innerHeight > 1.7 ? `rotateX(70deg) rotateZ(-60deg) translate3d(-120px, ${cardwX}%, 70px)` : `rotateX(70deg) rotateZ(-60deg) translate3d(-120px, 400px, 70px)`,
      // minWidth: scroll / window.innerHeight > 1 ? `${cardWidth}%` : "100%",
      maxWidth: 
      containerWidth > 40
          ? `${cardWidth}%`
          : `40vw`,
      minWidth: "400px"
    },
  };

  console.log(move);

  console.log(move < 0);
  return (
    <div id="About">
      <div id="foreground" />
      {/* <div id="spotlight">
      <div id="spotlight-child"/>
      </div> */}
      <div className="pageWrap">
        <div className="picPosi">
          <div className="cardContainer" style={style.reveal}>
            <div className="card" style={style.cardWidth}>
              <img id="profilePic" src={profilePic} />

              {/* <h1 className="cardHead" style={style.fade}>
                AARON DIGGDON
              </h1> */}
              <div className="picOverlay" />
            </div>
          </div>
        </div>
        {opacity > 0 ? (
          <div className="content">
            <div className="headerC container">
              <h1 className="header container" style={style.fade}>
                Freelance Web Developer.
              </h1>
              <h4 className="subHeader" style={style.fade}>
                Where creativity meets creation.
              </h4>
            </div>
            <div className="skills"></div>
          </div>
        ) : (
          <div className="headerC center">
            {scroll > window.innerHeight ? (
              <h1 className="header">Contact</h1>
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
