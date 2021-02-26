import * as React from "react";
import { useEffect, useRef } from "react";
import { motion, useCycle } from "framer-motion";
import { Navigation } from "./navigation";
import useScrollLock from "../../hooks/scrollLock";
import "./style.css";

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 110% -10%)`,
    transition: {
      type: "spring",
      stiffness: 25,
      restDelta: 1,
    },
  }),
  closed: {
    clipPath: "circle(30px at 110vw -10%)",
    transition: {
      delay: 0.2,
      type: "spring",
      stiffness: 300,
      damping: 40,
    },
  },
};

const dropDown = {
  open: { height: `100vh`, zIndex: 11 },
  transition: {
    delay: 1,
    type: "spring",
    stiffness: 300,
    damping: 40,
  },
  closed: { marginTop: `-100vh`, zIndex: -1 },
  transition: {
    delay: 5,
    type: "spring",
    stiffness: 300,
    damping: 40,
  },
};

const Path = (props) => (
  <motion.path
    id="path"
    fill="white"
    strokeWidth="1"
    stroke="#0018a1"
    {...props}
  />
);

function Nav({ size }) {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const scrollLock = useScrollLock();
  useEffect(() => {
    isOpen && scrollLock.lock();
    !isOpen && scrollLock.unlock();
  }, [isOpen]);
  return (
    <div id="nav">
      <motion.nav
        initial={false}
        animate={isOpen ? "open" : "closed"}
        ref={containerRef}
      >
        <div className="leftNav">
          <button
            className="navButton"
            onClick={() => toggleOpen()}
            style={{ top: size.height * 0.05 + "px" }}
          >
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
        </div>
      </motion.nav>

      <motion.nav
        initial={false}
        animate={isOpen ? "open" : "closed"}
        ref={containerRef}
      >
        <motion.div
          className="navListCol"
          animate={isOpen ? "open" : "closed"}
          variants={dropDown}
          transition={{ duration: 0.5 }}
        >
          <Navigation toggleOpen={toggleOpen}/>
        </motion.div>
        <motion.div
          id="navBackground"
          style={{ height: size.height }}
          variants={sidebar}
        />
      </motion.nav>
    </div>
  );
}
export default Nav;
