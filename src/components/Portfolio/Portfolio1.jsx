import { motion } from "framer-motion";
import styles from "./Portfolio.module.scss";

function Portfolio() {
  const variants = {
    hidden: {
      y: 500,
      //scale: 0,
      opacity: 0,
    },
    show: {
      y: 0,
      //scale: 1,
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={variants}
      className={styles.container}
    ></motion.div>
  );
}

export default Portfolio;
