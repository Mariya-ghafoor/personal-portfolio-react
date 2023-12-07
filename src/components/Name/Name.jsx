import styles from "./Name.module.scss";
import { motion } from "framer-motion";

function Name() {
  const name = "Mariya Abdul Ghafoor".split("");

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2,
      },
    },
  };

  const listItem = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
    transition: {
      delay: 0.2,
    },
  };

  //#####
  return (
    <>
      <div className={styles.text}>
        <motion.h1 variants={container} initial="hidden" animate="show">
          {name.map((item, i) => (
            <motion.span key={i} variants={listItem}>
              {item}
            </motion.span>
          ))}
        </motion.h1>
      </div>
    </>
  );
}

export default Name;
