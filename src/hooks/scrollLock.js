import { useEffect, useLayoutEffect, useState } from "react";

export default function useScrollLock() {

function status() {
  
  function unlocked() {
    document.body.classList.remove("hidden") ;

  }
  function locked() {
    document.body.classList.add("hidden");

  }
  return {
    lock: () => locked(),
    unlock: () => unlocked(),
  }
}

const [scrollLock, setScrollLock] = useState(status())

useEffect(()=> {
  setScrollLock(status())
},[])

return scrollLock;
}