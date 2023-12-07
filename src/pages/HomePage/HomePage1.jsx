import Intro from "../../components/Intro/Intro";
import ProjectList from "../../components/ProjectList/ProjectList";
import ProjectCarousel from "../../components/ProjectCarousel/ProjectCarousel";
import Skills from "../../components/Skills/Skills";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import styles from "./HomePage.module.scss";

function HomePage() {
  const [show, setShow] = useState(true);
  useEffect(() => {
    console.log(show);
  }, [show]);

  const variants = {
    // enterLeft: { opacity: 1, x: 200 },
    // enterRight: { opacity: 1, x: 200 },
    enterLeft: { opacity: 1, x: -200 },
    enterRight: { opacity: 1, x: 200 },
    animate: {
      opacity: 1,
      x: 0,
      y: 0,
      // type: "spring",
      transition: {
        duration: 1,
      },
    },
    exitLeft: { opacity: 0, x: -200 },
    exitRight: { opacity: 0, x: 200 },
    transition: {
      //ease: "easeOut",
      //duration: 0.2,
    },
  };
  return (
    <div className={styles.main}>
      <AnimatePresence mode="popLayout">
        <motion.div
          style={{ opacity: 0 }}
          key={show}
          // viewport={{ once: true }}
          //initial={{ opacity: 0, x: -200 }}
          //animate={{ opacity: 1, x: 0, type: "spring" }}
          initial={show ? "enterLeft" : "enterRight"}
          animate="animate"
          variants={variants}
          transition="transition"
          exit={show ? "exitLeft" : "exitRight"}
        >
          {show ? <Intro /> : <ProjectCarousel />}
        </motion.div>
      </AnimatePresence>

      <motion.div
        // animate={{ x: 10 }}
        // transition={{ type: "spring", damping: 10 }}
        className={styles.pageTransitionButtons}
      >
        {show ? (
          <button className={styles.nextButton} onClick={() => setShow(false)}>
            <i
              className="fa-solid fa-chevron-right"
              style={{ fontSize: "2rem" }}
            ></i>
          </button>
        ) : (
          <button className={styles.PrevButton} onClick={() => setShow(true)}>
            <i
              className="fa-solid fa-chevron-left"
              style={{ fontSize: "2rem" }}
            ></i>
          </button>
        )}
      </motion.div>
    </div>
  );
}

export default HomePage;
