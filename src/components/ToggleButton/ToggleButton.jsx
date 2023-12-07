/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { useState } from "react";
import styles from "./ToggleButton.module.scss";

const toggleVariants = {
  off: {
    stroke: "grey",
    pathLength: 0.2,
    pathOffset: 0.2,
    transition: {
      duration: 0.23,
      ease: "circOut",
    },
  },

  on: {
    stroke: "#BF4D00",
    pathLength: 0.2,
    pathOffset: 0.6,
    transition: {
      duration: 0.23,
      ease: "circOut",
    },
  },
};

export default function ToggleButton({ onClickToggle }) {
  const [isOn, setIsOn] = useState(false);

  return (
    <div className={styles.toggle} onClick={onClickToggle}>
      <svg viewBox="0 0 50 30" xmlns="http://www.w3.org/2000/svg">
        <motion.path
          strokeLinecap="round"
          stroke="white"
          strokeWidth={17}
          d="M 10, 15 L 40, 15"
        />
        <motion.path
          variants={toggleVariants}
          animate={isOn ? "on" : "off"}
          strokeWidth={15}
          strokeLinecap="round"
          d="M 0, 15 L 50, 15"
        />
      </svg>
    </div>
  );
}
