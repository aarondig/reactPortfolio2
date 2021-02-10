import React from "react";
import { items } from "./data";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./style.css";
function Card({ id, title, category, theme, handleClick }) {
  return (
    <li className={`project ${theme}`} >
      <div className="project-content-container">
        <motion.div className="project-content" layoutId={`project-container-${id}`}>
          <motion.div
            className="project-image-container"
            layoutId={`project-image-container-${id}`}
          >
            <img className="project-image" src={`../../img/me.jpg`} alt="" />
          </motion.div>
          <motion.div
            className="title-container"
            layoutId={`title-container-${id}`}
          >
            <span className="category">{category}</span>
            <h2>{title}</h2>
          </motion.div>
        </motion.div>
      </div>
      <Link to={id} className={`project-open-link`} onClick={() => handleClick()}/>
    </li>
  );
}

export function List({ selectedId, handleClick }) {
  return (
    <ul className="project-list" >
      {items.map(card => (
        <Card key={card.id} {...card} isSelected={card.id === selectedId} handleClick={handleClick}/>
      ))}
    </ul>
  );
}