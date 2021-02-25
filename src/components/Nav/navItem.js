import * as React from "react";
import { motion } from "framer-motion";
import { HashLink } from 'react-router-hash-link';

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

export const NavItem = ({ i }) => {
  const style = { border: `2px solid #0018a1` };
  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      id="navItem"
    >
      <div className="icon-placeholder" style={style} />
      <h1 className="navItemName">{i.title}</h1>
      {/* <div className="text-placeholder" style={style} ></div> */}
    
    </motion.li>
  );
};
