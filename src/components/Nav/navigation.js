import * as React from "react";
import { motion } from "framer-motion";
import { NavItem } from "./navItem";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

export const Navigation = () => (
  <motion.ul variants={variants} id="navList">
    {items.map(i => (
      <NavItem i={i} key={i} />
    ))}
  </motion.ul>
);

const items = [
    {
      title: "Home",
      link: "#landing",
    },
    {
      title: "Projects",
      link: "",
    },
   {
      title: "About",
      link: "",
    },
    {
      title: "Contact",
      link: "",
    },
  ];
