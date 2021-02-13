import React, { useState, useRef, useEffect } from "react";
import "./style.css";
import { motion, useViewportScroll } from "framer-motion";
import GetStarted from "../../img/getStarted.gif";
import NewLogin from "../../img/newLogin.gif";

function Project() {
  return (
    <div id="TravelPins">
      <a className="demoButton" href="https://travel-pins.herokuapp.com">
        <div className="buttonTextHidden">DEMO</div>
        <div className="buttonContent">
          <div className="buttonText">DEMO</div>
        </div>
      </a>
      <div className="projectWrap">
        <div className="labelC">
          <h1 className="label">DESCRIPTION</h1>
        </div>
        <div className="textC">
          <p className="description">
            A social media application for world travelers that allows users to
            post photos, mark countries they've traveled to, and follow friends.
            </p>
            <p className="description">
            This project was conducted with two other team members. 
            </p>
            <p className="description">
            Role: Frontend Developer/Designer
            </p>
        </div>

        <div className="techUsed">
          {/* <h2 className="techUsedHead">TECH USED</h2> */}
          <div className="listCol">
            <div className="row">
              <div className="icon">
                <i class="fab fa-react navicon" />
              </div>
              <div className="column">
                <p className="listName">REACT</p>
                {/* <p>HTML</p> */}
              </div>
            </div>
            <div className="row listRow">
              <div className="icon">
                <i class="fab fa-js navicon" />
              </div>
              <div className="column">
                <p className="listName">JAVASCRIPT</p>
              </div>
            </div>
            <div className="row listRow">
              <div className="icon">
                <i class="fab fa-css3-alt navicon"></i>
              </div>
              <div className="column">
                <p className="listName">CSS</p>
              </div>
            </div>
          </div>
          <div className="listExplain">
            <div className="row">
              <div className="column">
                <p className="pTitle">Frontend Dependencies</p>
                <a className="pListLink" href="https://reactjs.org">
                  React.js
                </a>
                <a
                  className="pListLink"
                  href="https://docs.mapbox.com/help/glossary/mapbox-gl/"
                >
                  Mapbox-GL
                </a>
                <a className="pListLink" href="https://www.react-spring.io">
                  React-Spring
                </a>

                <a
                  className="pListLink"
                  href="https://react-icons.github.io/react-icons/"
                >
                  React-Icons
                </a>
                <a
                  className="pListLink"
                  href="https://www.npmjs.com/package/react-dom"
                >
                  React-Dom
                </a>
                <a
                  className="pListLink"
                  href="https://www.npmjs.com/package/web-vitals"
                >
                  Web-Vitals
                </a>
                <a
                  className="pListLink"
                  href="https://www.npmjs.com/package/re-carousel"
                >
                  Re-Carousel
                </a>
                <a
                  className="pListLink"
                  href="https://www.npmjs.com/package/react-scripts"
                >
                  React-Scripts
                </a>
                <a
                  className="pListLink"
                  href="https://www.npmjs.com/package/react-swipeable"
                >
                  React-Swipeable
                </a>
                <a
                  className="pListLink"
                  href="https://reactrouter.com/web/guides/quick-start"
                >
                  React-Router-Dom
                </a>
                <a className="pListLink" href="react-transition-group">
                  React-Transition-Group
                </a>
              </div>
              <div className="column">
                <p className="pTitle">Backend Dependencies</p>
                <a
                  className="pListLink"
                  href="https://www.npmjs.com/package/axios"
                >
                  Axios
                </a>
                <a
                  className="pListLink"
                  href="https://www.npmjs.com/package/bcrypt"
                >
                  Bcrypt.js
                </a>
                <a
                  className="pListLink"
                  href="https://www.npmjs.com/package/mysql2"
                >
                  MySQL2
                </a>
                <a className="pListLink" href="https://expressjs.com">
                  Express.js
                </a>
                <a className="pListLink" href="https://cloudinary.com">
                  Cloudinary
                </a>
                <a className="pListLink" href="http://www.passportjs.org">
                  Passport.js
                </a>
                <a
                  className="pListLink"
                  href="https://www.npmjs.com/package/passport-local"
                >
                  Passport-Local
                </a>
                <a className="pListLink" href="https://sequelize.org">
                  Sequelize ORM
                </a>
                <a
                  className="pListLink"
                  href="https://www.npmjs.com/package/express-session"
                >
                  Express-Session
                </a>
                <a
                  className="pListLink"
                  href="https://www.npmjs.com/package/if-env"
                >
                  if-env
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="labelC">
          <h1 className="label">Features</h1>
        </div>
        <div className="textC">
          <p className="description">
            Do you love to travel? This app is for you. In this app, you create
            your own personalized account. You can view all of the countries in
            the world with a click. If you have traveled to a country, you can
            mark the country as "traveled." The country will highlight blue to
            show that you have traveled to the country.
          </p>
          <p className="description">
            You can upload your photos for each country as well! You simply
            click on the country you want to upload a photo to and then press
            the plus button to upload. This is an opportunity to keep a photo
            journal of your travels and share your pictures with others.
          </p>
          <p className="description">
            You can find other travelers as well on the app. You can search
            their username and follow them. Once you follow them, you can see
            photos about their travels on your newsfeed.
          </p>
          <p className="description">
            Lastly, you have your own profile account. You can see how many
            countries you have been to, how many followers you have, how many
            users follow you, and your photos.
          </p>
          <h1 className="label">User Stories</h1>
          <h2>Get Started</h2>
          <div className="imgContainer">
            <img
              className="descriptionImg"
              src={
                GetStarted
              }
            ></img>
            </div>
            <h2>Create an account or login.</h2>
            <div className="imgContainer">
            <img
              className="descriptionImg"
              src={NewLogin}
            ></img>
          </div>

          <h2>Find a country that has been visited.</h2>
            <div className="imgContainer">
            <img
              className="descriptionImg"
              src={"https://github.com/anusontarangkul/travel-pins/blob/main/images/findCountry.gif?raw=true"}
            ></img>
          </div>

         
        </div>
      </div>
    </div>
  );
}

export default Project;
