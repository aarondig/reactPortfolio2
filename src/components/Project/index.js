import React, { useState, useRef, useEffect } from "react";
import "./style.css";

function Project() {
  return (
    <div id="project">
       <a
              className="demoButton"
              href="https://googlefactchecker.herokuapp.com"
            >
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
            An application that allows you to search claims, terms and quotes,
            and returns fact checked articles reguarding the validitiy of the
            query.
          </p>
        </div>

        <div className="techUsed">
          {/* <h2 className="techUsedHead">TECH USED</h2> */}
          <div className="listCol">
            <div className="row">
              <div className="icon">
                <i class="fab fa-html5 navicon" />
              </div>
              <div className="column">
                <p className="listName">HTML</p>
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
            <p>This was valuble bc of this this and this</p>
          </div>
        </div>
        <div className="labelC">
          <h1 className="label">Features</h1>
        </div>
        <div className="textC">
          <h2>Search</h2>
          <p className="description">
            Using Google's <a href="https://developers.google.com/fact-check/tools/api">Fact Check Tools API</a>, I created a user friendly interface
            that allows users to easily enter claims and recieve their articles.
            We used database archetecture with MySQL to save claims, with hopes
            of using the most-searched-for claims in a featured secton. The
            application was designed and developed using HTML, CSS and
            Javascript's JQuery.
          </p>
          <h2>User Experience</h2>
          <p className="description">
            Creating a seamless user experience was my top priority. I tried to
            keep a minimalist aesthetic with aesthetic transitions to seamlessly
            move the user from one action to another.
          </p>
          <h2>Routes</h2>
          <p className="description">
            Search queries are recieved in the public directory, and passed into
            the api-routes.js file where the API is called, using axios.js, with
            the query name. All data is passed using express.js.
          </p>
          <div className="imgsContainer">
            <p>RECIEVED IN PUBLIC</p>
            <div className="imgContainer">
              <img
                className="descriptionImg"
                src={
                  "https://github.com/aarondig/factCheck/blob/main/assets/recieve.png?raw=true"
                }
              ></img>
            </div>
            <p className="description">
              Search queries are recieved in the public directory, and passed
              into the api-routes.js file where the API is called, using
              axios.js, with the query name. All data is passed using
              express.js.
            </p>
            <p>API-ROUTES</p>
            <div className="imgContainer">
              <img
                className="descriptionImg"
                src={
                  "https://github.com/aarondig/factCheck/blob/main/assets/passed.png?raw=true"
                }
              ></img>
            </div>
          </div>
          <h2>Models</h2>
          <p className="description">
            Using express.js, and sequelize.js I created models for each type of
            data returned, so I could create HTML elements in Javascript with
            each specific data type.
          </p>
          <div className="imgContainer">
            <img
              className="descriptionImg"
              src={
                "https://github.com/aarondig/factCheck/blob/main/assets/models.png?raw=true"
              }
            ></img>
          </div>
          <p className="description">
            Data from the API is passed into the models file from api-routes,
            using express.js. From there, they are stored in the MySQL database
            using Sequelize.
          </p>
        </div>
      </div>

      
    </div>
  );
}

export default Project;
