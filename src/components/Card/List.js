import React, { useEffect, useRef, useState } from "react";
import { items } from "./data";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";


import { animated } from 'react-spring'
import InfiniteSlider from './Slider.js'
import "./style.css";

function Card({ id, i, title, category, banner, icon, shadow, size, handleClick, click, freeze,slider
}) {
  const style = !click ? {
    boxShadow: `0 10px 25px ${shadow}5e`
  } : {
    boxShadow: `none`
  }
  const projectS = {
    
    height: slider ? `35vh` : `300px`,
    padding: slider ? `0` : `25px`,
    paddingBottom: size.width < 800 && (slider ? `0` : `20%`),
  }

const container = {
  borderRadius: slider ? '5px' : `10px`,
  transition: `.4s all ease-in-out`
}
  return (
    <li className={`project`} id={`project${id}`} style={projectS}>
      <div className="project-content-container" style={style} style={container}>
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
      <Link to={id} className={`project-open-link`} onClick={(e) => handleClick(e)}/>
    </li>
  );
}




export function List({ selectedId, handleClick, click, size, freeze, setFreeze }) {
  const link = useRef()
  
  const [slider, setSlider] = useState(true);

  const handleSlider = () => {
    setSlider(!slider)
  }
  const listS ={
    width: `90%`,
    display: `flex`,
    flexWrap:  `wrap`,
    justifyContent: `center`,
    alignContent: `flex-start`,
  }
  return (
    <div className="listC">
        
      <ul className="project-list" style={slider ? null : listS}>
      <div className="lineContainer"  onClick={handleSlider}>
      <div className="row">
        
      {slider ? <h2 className="viewAllBtnTxt">View All</h2>:<h2 className="viewAllBtnTxt">Show Less</h2>}
      <div className="vert">
      <div className="line"/>
      </div>
      </div>
      </div>
      {slider ? 
      
     <div className="main">
      <InfiniteSlider items={items} itemWidth={'full'} showButtons={true} showCounter={true} setFreeze={setFreeze} link={link}>
       {/* {items.map(card => ( */}

       
      {(card, i) => (
          <div className="content" style={freeze ? {pointerEvents: `none`} : {pointerEvents: `auto`}}>
          <Card key={card.id} {...card} isSelected={card.id === selectedId} size={size}
           handleClick={handleClick} click={click} freeze={freeze} link={link} slider={slider}/>
           </div>
          )}
          
       </InfiniteSlider>
       </div>
       
      : 
      <>
      {items.map((card, i) => (
        <Card key={card.id} {...card} isSelected={card.id === selectedId} size={size} handleClick={handleClick} click={click} freeze={freeze} slider={slider}/>
      ))}
     </>
      }
       </ul>
    </div>
  );
}