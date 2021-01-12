import React, { useState, useRef } from "react";
import "./style.css";
import { motion, useViewportScroll } from "framer-motion";
import profilePic from "../../img/me.jpg";
import useWindowSize from "../../hooks/windowSize";

function About({ scroll }) {
  const size = useWindowSize();
  const eq = -Math.pow((scroll / window.innerHeight) * 1.2 - 1.4, 2) + 1;

  const move = (window.innerHeight / scroll - 1) * 50;
  const style = {
    fade: {
      opacity: eq,
    },
    reveal: {
      transform:
        size.width > 700 ? `translateX(-${move}px)` : `translateY(${move}px)`,
      objectPosition: +"%",
    },

    // opacity:  scroll < window.innerHeight ? ((scroll / 1000)* 1.5 -.5) : ((scroll / 1000)* 1.5 -.5) - (scroll / 1000)* 1.5,
    // transform: `translateX(${move}px)`,
  };

  console.log(size);
  return (
    <div id="About">
      <div id="foreground" />
      {/* <div id="spotlight">
      <div id="spotlight-child"/>
      </div> */}
      <div className="pageWrap">
        <div className="picPosi">
          <div className="profileC" style={style.reveal}>
            <img id="profilePic" src={profilePic} />
            <img id="profilePic" src={profilePic} />
            <img id="profilePic" src={profilePic} />
            <img id="profilePic" src={profilePic} />
            <div className="picOverlay" />
          </div>
        </div>
        {eq > 0 ? (
          <div className="content">
            <div className="headerC container">
              <h1 className="header container" style={style.fade}>
                Freelance Web Developer.
              </h1>
              <h4 className="subHeader" style={style.fade}>
                Take a card.
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

        {/* <h3 className="subtext">Breaking the bounds of convention.</h3> */}
        {/* <div className="inline">
          <div className="slider">
            <div className="slide-track">
              <h2 className="list" id="ux">
                {" "}
                User Experience
              </h2>
              <h2 className="list" id="minimalism">
                {" "}
                minimalism
              </h2>
              <h2 className="list" id="visNar">
                {" "}
                Visual Narratives
              </h2>
              <h2 className="list" id="minimalism">
                {" "}
                minimalism
              </h2>
              <h2 className="list" id="ux">
                {" "}
                User Experience
              </h2>
              <h2 className="list" id="minimalism">
                {" "}
                minimalism
              </h2>
              <h2 className="list" id="visNar">
                {" "}
                Visual Narratives
              </h2>
              <h2 className="list" id="minimalism">
                {" "}
                minimalism
              </h2>
            </div>
          </div> 
        </div> */}

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
