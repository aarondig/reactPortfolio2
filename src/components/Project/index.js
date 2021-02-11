import React, { useState, useRef, useEffect } from "react";
import "./style.css";
import { motion, useViewportScroll } from "framer-motion";

function Project({}) {
  return (
    <div id="project">
      <div className="projectWrap">
        <div className="labelC">
          <h1 className="label">DESCRIPTION</h1>
        </div>
        <div className="textC">
          <p>
            An application that allows you to search claims, terms and quotes,
            and returns fact checked articles reguarding the validitiy of the
            query.
          </p>
        </div>

        <div className="techUsed">
          <h2 className="techUsedHead">TECH USED</h2>
          <div className="listCol">
          <div className="row">
            <div className="icon">
              <i class="fab fa-html5 navicon" />
            </div>
            <h2 className="listName">HTML</h2>
          </div>
          <div className="row listRow">
            <div className="icon">
              <i class="fab fa-js navicon" />
            </div>
            <h2 className="listName">JAVASCRIPT</h2>
          </div>
          </div>
        </div>
      </div>

      {/* <a className="demoButton" href="https://googlefactchecker.herokuapp.com">
              <div className="buttonContent">DEMO</div>
              </a> */}
    </div>
  );
}

export default Project;
