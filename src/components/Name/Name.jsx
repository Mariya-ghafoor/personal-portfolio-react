import { AnimatePresence, motion } from "framer-motion";
import styles from "./Name.module.scss";

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
      {/* .................. */}

      {/* .................. */}

      {/* ################# */}
      {/* <motion.div
        
        animate="hover"
        initial="default"
       
        className={styles.svgPath}
      >
        <motion.p variants={textVariants} className={styles.text}>
          Mariya
        </motion.p>
        <motion.svg viewBox="0 0 100 20" xmlns="http://www.w3.org/2000/svg">
          <motion.path
            variants={outlineVariants}
            strokeWidth="1"
            fill="none"
            stroke="grey"
            d="M 0, 0 H 100 V 20 H 0 Z"
          />
        </motion.svg>
      </motion.div>{" "} */}
    </>
  );
}

export default Name;
