import React from "react";
import { motion } from "framer-motion";
// import { LoremIpsum } from "react-lorem-ipsum";
import { Link } from "react-router-dom";
import { items } from "./data";
import "./style.css";
import FactCheck from "../FactCheck";

export function Item({ id, handleClick }) {
  const { category, title, component } = items.find((item) => item.id === id);

  // console.log(component)

  const Component = component;

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2, delay: 0.1 }}
        style={{ pointerEvents: "auto" }}
        className="overlay"
      >
        <Link to="/" onClick={() => handleClick()} />
      </motion.div>
      <div className="project-content-container open">
        <motion.div
          className="project-content"
          layoutId={`project-container-${id}`}
        >
          <motion.div
            className="project-image-container"
            layoutId={`project-image-container-${id}`}
          >
            <Link to="/" onClick={() => handleClick()}>
            <div className={`project-thumbnail thumbnail-${id}`}>
              <div className={`bubble bubble-${id}`}></div>
            </div>
              {/* <img
                className="project-image"
                src={`https://github.com/aarondig/factCheck/blob/main/assets/banner.png?raw=true`}
                alt=""
              /> */}
            </Link>
           
          </motion.div>
          <motion.div
            className="title-container"
            layoutId={`title-container-${id}`}
          >
            <span className="category">{category}</span>
            <h2 className="projectTitle">{title}</h2>
          </motion.div>
          <motion.div className="content-container" animate>
            <Component />
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}
