import React, { useState } from "react";
import "./style.css";
import { motion, useViewportScroll } from "framer-motion";
import profilePic from "../../img/me.jpg";

function About({ progress }) {
  const style = {
    // pointerEvents: progress > .5 ? "auto" : "none",
    // opacity: progress
  };

  return (
    <div id="About" style={style}>
      <div id="foreground"/>
      <div className="overlay" />
      <div className="pageWrap">
        <div className="picPosi">
       <div className="profileC">
          <img id="profilePic"  src={profilePic} />
        </div>
        </div>
        
        <div className="headerC center">
          <h1 className="header">Freelance Web Developer.</h1>
          </div>
          {/* <h3 className="subtext">Breaking the bounds of convention.</h3> */}
        <div className="inline">
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
        </div>
        
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
