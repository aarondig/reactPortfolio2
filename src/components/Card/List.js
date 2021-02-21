import React, { useEffect, useState } from "react";
import { items } from "./data";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./style.css";

const num = items.length;
const even = num/2
const odd = (num + 1) /2


function Card({ id, i, title, category, banner, icon, shadow, handleClick, click }) {

  const style = !click ? {
    boxShadow: `0 10px 25px ${shadow}5e`
  } : {
    boxShadow: `none`
  }
const [state, setState] = useState();
console.log(i)
  return (
    <li className={`project ${state}`} id={`project${id}`} >
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
  useEffect(()=>{

  })

  
  return (
    <ul className="project-list" >
      {/* <div className="cardContainer"> */}
      {items.map(function (card, index) {
      

        return <Card key={card.id} i={index} {...card} isSelected={card.id === selectedId} handleClick={handleClick} click={click}/>
      })}
      {/* </div> */}
    </ul>
  );
}