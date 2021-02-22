import React, { useEffect, useState } from "react";
import { items } from "./data";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";


import { animated } from 'react-spring'
import InfiniteSlider from './Slider.js'
import "./style.css";

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


const AnimatedCard = animated(Card)

  
  return (
    <ul className="project-list">
      <div className="main">
      <InfiniteSlider items={items} itemWidth={'full'} showButtons={true} showCounter={true}>
       
      {(card, i) => (
          <div className="content">
          <Card key={card.id} {...card} isSelected={card.id === selectedId} handleClick={handleClick} click={click}/>
          </div>
          )}
        
        
        
      </InfiniteSlider>
    </div>
    </ul>
  );
}