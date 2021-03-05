import React, { useState, useEffect } from "react";
import { AnimateSharedLayout, AnimatePresence } from "framer-motion";

import { Item } from "./Item";
import { List } from "./List";
import "./style.css";
import useScrollLock from "../../hooks/scrollLock";


function Store({ match, slider, scroll, size, scroller }) {
  const scrollLock = useScrollLock();
  const [freeze, setFreeze] = useState(false);
  const [click, setClick] = useState();
  const handleClick = (e) => {
    if (freeze) {
      e.preventDefault();
    } else {
      setClick(!click);
      // if (click) {
      //   scroller.current.style.perspective = 'none'
      // } if (!click) {
      //   scroller.current.style.perspective = '1px'
      // }
      
    }
  };

  useEffect(() => {
    click && scrollLock.lock();
    !click && scrollLock.unlock();
  }, [click]);

  let { id } = match.params;
  const imageHasLoaded = true;

  useEffect(() => {
    if ("#/aaronDiggdon/" + id === window.location.hash) {
      setClick(true);
    }
  }, []);
console.log(slider)
  return (
    <AnimateSharedLayout type="crossfade">
      <List selectedId={id} handleClick={handleClick} size={size} click={click} freeze={freeze} setFreeze={setFreeze} slider={slider}/>
      <AnimatePresence>
        {id && imageHasLoaded && (
          <Item id={id} key="item" handleClick={handleClick} scroll={scroll}/>
        )}
      </AnimatePresence>
      
    </AnimateSharedLayout>
  );
}
export default Store;
