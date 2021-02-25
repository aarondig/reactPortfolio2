import React, { useEffect, useRef, useState } from "react";
import { items } from "./data";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";


import { animated } from 'react-spring'
import InfiniteSlider from './Slider.js'
import "./style.css";

function Card({ id, i, title, category, banner, icon, shadow, handleClick, click, freeze, link
}) {
  const style = !click ? {
    boxShadow: `0 10px 25px ${shadow}5e`
  } : {
    boxShadow: `none`
  }
  // const frozen = freeze ? 
  //   {pointerEvents: `none`}
  //  : {pointerEvents: `auto`}
  
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
      <Link to={id} ref={link} className={`project-open-link`} onClick={(e) => handleClick(e)}/>
    </li>
  );
}




export function List({ selectedId, handleClick, click, freeze, setFreeze }) {
  const link = useRef()


  return (
    <ul className="project-list">
      <div className="main">
      <InfiniteSlider items={items} itemWidth={'full'} showButtons={true} showCounter={true} setFreeze={setFreeze} link={link}>
       
      {(card, i) => (
          <div className="content" style={freeze ? {pointerEvents: `none`} : {pointerEvents: `auto`}}>
          <Card key={card.id} {...card} isSelected={card.id === selectedId} handleClick={handleClick} click={click} freeze={freeze} link={link}/>
          </div>
          )}
      </InfiniteSlider>
    </div>
    </ul>
  );
}