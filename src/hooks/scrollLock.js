import { useEffect, useState } from "react";

export default function useLockBodyScroll() {

function status() {
  return {
    lock: locked(),
    unlock: unlocked(),
  }
}


function locked() {
  useEffect(()=> {
    document.body.style.overflow = "hidden";
  },[])
}
function unlocked() {
  useEffect(()=> {
    document.body.style.overflowY = "scroll";
  },[])
}
const [scrollLock, setScrollLock] = useState(status)

useEffect(()=> {
  setScrollLock(status())
})

return scrollLock;
}