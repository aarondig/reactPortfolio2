import { useState, useEffect } from "react";

export default function useScroll() {
  function getSize() {
    return {
      percent: (window.scrollY / window.innerHeight) * 100,
      amount: window.scrollY
    };
  }

  const [scroll, setScroll] = useState(getSize);

  useEffect(() => {
    function handleScroll() {
      setScroll(getSize());
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return scroll;
}