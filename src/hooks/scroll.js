import { useState, useEffect } from "react";


let speed = 0;
let position = 0;
let rounded = 0;

window.addEventListener('wheel', (e) => {
  speed += e.deltaY*.003;
})

export default function useScroll() {




const Scrolling = (() => {
  position += speed;
  speed *= .8;
  rounded = Math.round(position)

  let diff = (rounded - position)
  position += Math.sign(diff)*Math.pow(Math.abs(diff), 0.7)*.015;

})



  requestAnimationFrame(() => Scrolling());
  return position;
}