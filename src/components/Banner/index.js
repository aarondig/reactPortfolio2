import React from "react";
import useWindowSize from "../../hooks/windowSize";
import "./style.css";

function Banner({size, scroll}) {

const line = {
  height: `${scroll/2}px`,
}
const lineB = {
  height: `${scroll/1.5}px`,
}
const container = {
  height: `50vh`,
  width: `100%`,

  

}

    return <div id="banner">
      
        <div className="bannerC">
      
      <div className="bannerBox">
      <h1 className="bannerTitle">FRONTEND WEB DEVELOPER</h1>
      <div className="vertLine" />
      <p className="bannerTitle">My name is Aaron. I'm a Freelance Web Developer</p>
      </div>
      {/* <div className="vertLineB"></div> */}
      {/* <div className="vertLineB" style={scroll/2 > size.height*.4 ? container : lineB}></div> */}
      
      
      </div>
      


    </div>;
  }
  
  export default Banner;
  