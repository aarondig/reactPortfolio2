import React from "react";
import { items } from "./data";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./style.css";
function Card({ id, title, category, banner, icon, shadow, handleClick, click }) {

  const style = !click ? {
    boxShadow: `0 10px 25px ${shadow}5e`
  } : {
    boxShadow: `none`
  }
  return (
    <li className={`project`} id={`project${id}`} >
      <div className="project-content-container" style={style}>
        <motion.div className="project-content" layoutId={`project-container-${id}`}>
          <motion.div
            className="project-image-container"
            layoutId={`project-image-container-${id}`}
          >
            <div className={`project-thumbnail thumbnail-${id}`}>
            <i class={`fas ${icon} coverIcon`}></i>
              {/* <div className={`bubble bubble-${id}`}></div> */}
            </div>
            
            {/* <img className="project-image" src={banner} alt="" /> */}
          </motion.div>
          <motion.div
            className="title-container"
            layoutId={`title-container-${id}`}
          >
            <span className="category">{category}</span>
            <h2 className="projectTitle">{title}</h2>
          </motion.div>
        </motion.div>
      </div>
      <Link to={id} className={`project-open-link`} onClick={() => handleClick()}/>
    </li>
  );
}

export function List({ selectedId, handleClick, click }) {
  return (
    <ul className="project-list" >
      {items.map(card => (
        <Card key={card.id} {...card} isSelected={card.id === selectedId} handleClick={handleClick} click={click}/>
      ))}
    </ul>
  );
}