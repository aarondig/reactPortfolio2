import { useState, useEffect } from "react";

export default function useWindowSize() {
  var width = 0;
  var maxHeight = []
  function getSize() {
    width = window.innerWidth
    // maxHeight.push(window.innerHeight)
    
    return {
      width: width,
      height: window.innerHeight
      // height: width > 700 ? maxHeight[maxHeight.length -1] : Math.max(...maxHeight)
    };
  }
  
  const [windowSize, setWindowSize] = useState(getSize);
  
  useEffect(() => {
    function handleResize() {
      setWindowSize(getSize());
    }
    

      
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
 
  }, []);
  return windowSize;
  
}