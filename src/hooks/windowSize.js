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
      getSize().width > 800 && setWindowSize(getSize());
    }
         
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  console.log(windowSize)
  return windowSize;
}