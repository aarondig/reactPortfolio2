import { useState, useEffect, useRef } from "react";


// let requestAnimationFrame = window.webkitRequestAnimationFrame || window.requestAnimationFrame || window.mozRequestAnimationFrame  || window.msRequestAnimationFrame
export default function useScroll() {
  const scroller = useRef();
  let current = 0;
  let previous = 0;
  let rounded = 0;
  let ease = .1;

  const [scroll, setScroll] = useState();
  const skewScrolling = () =>  {
    

    current = window.scrollY;
    previous += (current - previous) * ease;
    rounded = Math.round(previous * 100) / 100

    
    setScroll(current);
    // rounded === current ? cancelAnimationFrame(()=> skewScrolling()) :
    // requestAnimationFrame(() => skewScrolling());
  }
  
  useEffect(() => {
    function handleScroll() {
      skewScrolling()
    }
    

      // handleScroll();
    window.addEventListener("scroll", handleScroll);
    
    return () => window.removeEventListener("scroll", handleScroll);
 
  }, []);
  return scroll;
  
}