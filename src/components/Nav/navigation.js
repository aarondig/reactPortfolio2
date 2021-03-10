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
      link: "#about",
    },
    {
      title: "Contact",
      link: "#about",
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

export const Navigation = ({toggleOpen}) => (

<Router>
  <motion.ul variants={variants} id="navList">
    {items.map(i => (
    <HashLink to={`${i.link}`}>
      <NavItem i={i} key={i} toggleOpen={toggleOpen}/>
      </HashLink>
    ))}
  </motion.ul>
</Router>
);


