import { useState, useEffect, useRef } from "react";

// let requestAnimationFrame = window.webkitRequestAnimationFrame || window.requestAnimationFrame || window.mozRequestAnimationFrame  || window.msRequestAnimationFrame
export default function useScroll() {
  const scroller = useRef();
  let current = 0;
  let previous = 0;
  let rounded = 0;
  let ease = 0.1;

  const skewScrolling = () => {
    current = window.scrollY;
    previous += (current - previous) * ease;
    rounded = Math.round(previous * 100) / 100;

    // setScroll(current);
    return {
      scroll: current,
      // scroller: scroller,
    };
    // rounded === current ? cancelAnimationFrame(()=> skewScrolling()) :
    // requestAnimationFrame(() => skewScrolling());
  };
  const [scroll, setScroll] = useState(skewScrolling());
  useEffect(() => {
    function handleScroll() {
      setScroll(skewScrolling());
    }


    
     window.addEventListener("scroll", handleScroll);

      return () => window.removeEventListener("scroll", handleScroll);
    
  }, [scroll]);
  return scroll;
}



// import { useState, useEffect, useRef } from "react";


// export default function useScroll() {
//   const scroller = useRef();

//   const onScroll = () => {
//     return {
//       scroll: scroller.current && scroller.current.scrollTop,
//       scroller: scroller,
//     };
//   };
//   const [scroll, setScroll] = useState(onScroll);
//   useEffect(() => {
//     function handleScroll() {
//       setScroll(onScroll());
//     }
// if (scroller.current) {
//   scroller.current.addEventListener('scroll', handleScroll)
//   return ()=> scroller.current.removeEventListener('scroll', handleScroll)
// }
//   }, [scroll]);
//   return scroll;
// }
