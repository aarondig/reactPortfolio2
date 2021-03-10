import { useEdgeSplit } from "@react-three/drei";
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import profilePic from "../../img/me.jpg";
import resume from "../../img/resume.pdf";
import "./style.css";

function About({ size, scroll }) {
  const clickRef = useRef();
  const moveRef = useRef();
  const nameC = useRef();
  const [card, setCard] = useState("aaron d.");
  const [click, setClick] = useState();
  const toggleClick = () => {
    setClick(!click);
  };
  const offsetX = (size.width - size.width * 0.35) * 0.3;
  const offsetY = size.height - size.height * 0.1;

  const reset = () => {
    setCard("aaron d.");
  }
  useEffect(() => {
    if (size.width > 800) {
    if (click) {
      clickRef.current.style.transform = `rotateX(0deg) rotateY(180deg) rotateZ(0deg) scale(.6) translate3d(-${offsetX}px, -100px, 0px)`;
      moveRef.current.style.bottom = `0px`;
      moveRef.current.style.right = `0px`;
      moveRef.current.style.width = `100%`;
      moveRef.current.style.borderRadius = `0`;
    }
    if (!click) {
      clickRef.current.style.transform = `rotateX(70deg) rotateZ(-60deg) translate3d(-150px, 320px, 70px)`;
      moveRef.current.style.bottom = `25px`;
      moveRef.current.style.right = `25px`;
      moveRef.current.style.width = `220px`;
      moveRef.current.style.borderRadius = `50px`;
    }
  }
    if (size.width < 800) {
      if (click) {
        clickRef.current.style.transform = `rotateX(0deg) rotateY(180deg) rotateZ(0deg) scale(.6) translate3d(0px, -150px, 0px)`;
        moveRef.current.style.bottom = `0px`;
        moveRef.current.style.width = `100%`;
        moveRef.current.style.borderRadius = `0`;
        nameC.current.style.opacity = `0`
      }
      if (!click) {
        clickRef.current.style.transform = `rotateX(70deg) rotateZ(-60deg) translate3d(-150px, 320px, 70px)`;
        moveRef.current.style.bottom = `25px`;
        moveRef.current.style.width = `220px`;
        moveRef.current.style.borderRadius = `50px`;
        nameC.current.style.opacity = `1`
      }
    }
  
  }, [click, size.width]);

  return (
    <div id="about" style={{height: size.height}}>
      <div className="background"/>
      <div className="leftContainer">
        <div className="nameC">
          <h1 className="name">Aaron Diggdon</h1>
          <h2 className="subName">Web Developer</h2>
          <p>Student at The New School in New York City studying Journalism + Design</p>
        </div>
        <div className="bottomTextC">
          <p>Certified by UC Berkeley Extension</p>
        </div>
      </div>

      <div className="rightContainer">
        {size.width < 800 && 
        <div className="nameC" ref={nameC}>
          <h1 className="name">Aaron Diggdon</h1>
          <h1 className="subName">Free-Lance Web Developer</h1>
        </div>
        }
      
        <div className="contactBtnC">
        <div className="rightInner" onClick={toggleClick} ref={moveRef}>
          <p className="innerTxt">Contact</p>
        </div>
        </div>
        <div className="cardContainer">
          <div className="card" ref={clickRef}>
            <div className="cardFace">
              <div className="cardFront">
                <img id="profilePic" src={profilePic} />
                {/* <div className="picOverlay" /> */}
              </div>
              <div className="cardBack">
                <div className="contactList">
                  <a
                    href="https://www.linkedin.com/in/aarondiggdon/"
                    className="coverLink"
                  >
                    <h2
                      className="contactItem"
                      onMouseEnter={() => setCard("LinkedIn")}
                      onMouseLeave={() => reset()}
                    >
                      <i class="fab fa-linkedin-in contactIcon" />
                    </h2>
                  </a>
                  <a href="https://github.com/aarondig" className="coverLink">
                  <h2
                    className="contactItem"
                    onMouseEnter={() => setCard("GitHub")}
                    onMouseLeave={() => reset()}
                  >
                    <i class="fab fa-github contactIcon" />
                  </h2>
                  </a>
                  <a href="https://www.instagram.com/aarondiggdon/" className="coverLink">
                  <h2
                    className="contactItem"
                    onMouseEnter={() => setCard("Instagram")}
                    onMouseLeave={() => reset()}
                  >
                    <i class="fab fa-instagram contactIcon" />
                  </h2>
                  </a>
                  <a href={resume} className="coverLink" download="aarondiggdonResume">
                  <h2
                    className="contactItem"
                    onMouseEnter={() => setCard("Resume")}
                    onMouseLeave={() => reset()}
                  >
                    <i class="far fa-file contactIcon" />
                  </h2>
                  </a>
                </div>
                <div className="contactHead">
                  <h1 className="contactItemHead">{card}</h1>
                  <h1 className="contactText">aarondiggdon@gmail.com</h1>
                </div>
                <div className="contactBottom"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
