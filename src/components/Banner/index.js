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
      <h1 className="bannerTitle"> FULL STACK WEB DEVELOPER</h1>
      <p className="bannerSub">Certified by UC Berkeley Extension</p>
      <div className="vertLine" />
      <p className="bannerText">Specializing in Front-End Development and Design. Knowladgeable in the MERN stack, React is my tool of choice.</p>
      </div>
      {/* <div className="vertLineB"></div> */}
      {/* <div className="vertLineB" style={scroll/2 > size.height*.4 ? container : lineB}></div> */}
      
      
      </div>
      


    </div>;
  }
  
  export default Banner;
  