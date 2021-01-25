import * as React from "react";
import { useRef } from "react";
import { motion, useCycle } from "framer-motion";
import "./style.css";

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 110vw -10vh)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(30px at 110vw -10vh)",
    transition: {
      delay: 0.2,
      type: "spring",
      stiffness: 300,
      damping: 40,
    },
  },
};

const Path = (props) => (
  <motion.path fill="transparent" strokeWidth="1" stroke="white" {...props} />
);


const navItems = {
  home: {
    title: "Home",
    link: "",
  },
  Projects: {
    title: "Projects",
    link: "",
  },
  About: {
    title: "About",
    link: "",
  },
  Contact: {
    title: "Contact",
    link: "",
  },
}



function Nav() {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  return (
    <div id="nav">
      <motion.nav
        initial={false}
        animate={isOpen ? "open" : "closed"}
        ref={containerRef}
      >
        <button className="navButton" onClick={() => toggleOpen()}>
          <svg width="70" height="70" viewBox="0 0 50 50">
            <Path
              variants={{
                closed: { d: "M 2 2.5 L 25 2.5" },
                open: { d: "M 3 16.5 L 17 2.5" },
              }}
            />
            <Path
              d="M 2 9.423 L 20 9.423"
              variants={{
                closed: { opacity: 1 },
                open: { opacity: 0 },
              }}
              transition={{ duration: 0.1 }}
            />
            <Path
              variants={{
                closed: { d: "M 2 16.346 L 15 16.346" },
                open: { d: "M 3 2.5 L 17 16.346" },
              }}
            />
          </svg>
        </button>
        {/* {navItems.map(i => (
          <div key={i} />
        ))} */}
      </motion.nav>
      <motion.div
        initial={false}
        animate={isOpen ? "open" : "closed"}
        ref={containerRef}
      >
      <motion.div id="navBackground" variants={sidebar} />
      </motion.div>
    </div>
  );
}
export default Nav;
