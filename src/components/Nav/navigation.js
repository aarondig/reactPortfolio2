import * as React from "react";
import { motion } from "framer-motion";
import { NavItem } from "./navItem";
import { HashRouter as Router } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

const items = [
    {
      title: "Home",
      link: "#landing",
    },
    {
      title: "Projects",
      link: "#projects",
    },
   {
      title: "About",
      link: "#banner",
    },
    {
      title: "Contact",
      link: "",
    },
  ];

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

export const Navigation = () => (

<Router>
  <motion.ul variants={variants} id="navList">
    {items.map(i => (
    <HashLink to={`${i.link}`} onClick={console.log("clicky")}>
      <NavItem i={i} key={i}/>
      </HashLink>
    ))}
  </motion.ul>
</Router>
);


