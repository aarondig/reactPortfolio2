import { useState, useEffect } from "react";

export default function useWindowSize() {
  function getSize() {
    return {
      width: window.innerWidth,
      height: window.innerHeight
    };
  }

  const [windowSize, setWindowSize] = useState(getSize);

  useEffect(() => {
    function handleResize() {
      setWindowSize(getSize());
    }
    if (windowSize.width > 800) {

      
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }  
  }, []);
  
  return windowSize;
  
}