import { useEffect, useLayoutEffect, useState } from "react";

export default function useScrollLock() {

function status() {
  function unlocked() {
    document.body.style.overflowY = "scroll";
    // document.documentElement.style.overflowY = "scroll";
  }
  function locked() {
    document.body.style.overflowY = "hidden";
    // document.documentElement.style.overflowY = "hidden";
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