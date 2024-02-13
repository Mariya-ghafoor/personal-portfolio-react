/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import styles from "./Skills.module.scss";
import {
  AnimatePresence,
  easeIn,
  easeOut,
  motion,
  useAnimationControls,
} from "framer-motion";
import SkillsList from "../SkillsList/SkillsList";

function Skills() {
  const [showFrontend, setShowFrontend] = useState(false);
  const [showBackend, setShowBackend] = useState(false);
  const controls = useAnimationControls();

  let buttonStyles = "";

  const onFrontEndButtonClick = () => {
    if (showBackend === true) setShowBackend(!showBackend);
    setShowFrontend(!showFrontend);
  };

  const onBackEndButtonClick = () => {
    // if (showFrontend === true) setShowFrontend(!showFrontend);
    setShowBackend(!showBackend);
  };

  const skillsVariants = {
    hidden: { opacity: 1, height: 0 },
    show: { opacity: 1, height: "fit-content", transition: { duration: 1 } },
    exit: {
      opacity: 1,
      height: 0,
      transition: { duration: 1 },
    },
  };

  const swapSkillsVariants = {
    hidden: { opacity: 0, height: "fit-content" },
    show: { opacity: 1, height: "fit-content", transition: { duration: 3 } },
  };

  return (
    <div className={styles.main}>
      <motion.div className={styles.container}>
        {/* ^^^^ Frontend Button */}
        <button
          onClick={() => {
            if (showBackend) setShowBackend(!showBackend);
            setShowFrontend(!showFrontend);
          }}
          className={
            showFrontend
              ? (buttonStyles = `${styles.active} ${styles.button}`)
              : (buttonStyles = `${styles.button}`)
          }
          id="frontend"
        >
          Frontend
        </button>

        {/* ^^^^ Skills section */}

        {/* <motion.div
        key="skills"
        // initial={{ height: 0 }}
        initial={{ height: 0 }}
        animate={
          showFrontend || showBackend
            ? {
                height: "100%",
                width: "100vw",
                overflow: "scroll",
                transition: { duration: 0.5 },
              }
            : { height: 0, transition: { duration: 0.5 } }
        }
        // exit={{ height: 0, backgroundColor: "yellow" }}
      > */}
        <AnimatePresence mode="wait">
          {/* ^^^^^ Frontend skills */}
          {showFrontend && (
            <motion.div
              initial="hidden"
              animate="show"
              exit="exit"
              variants={skillsVariants}
              className={styles.container__skills}
              key="frontend"
            >
              <motion.div
                initial={{ height: 0 }}
                animate={
                  showFrontend || showBackend
                    ? {
                        height: "100%",
                        width: "fit-content",
                        // maxWidth: "90vw",
                        overflow: "scroll",
                        transition: { duration: 0.5 },
                      }
                    : { height: 0, transition: { duration: 0.5 } }
                }
                className={styles.skills}
              >
                {showFrontend && <SkillsList skills="frontend" />}
              </motion.div>
            </motion.div>
          )}

          {/* ^^^^^ Backend skills */}
          {showBackend && (
            <motion.div
              initial="hidden"
              animate="show"
              exit="exit"
              variants={skillsVariants}
              className={styles.container__skills}
              key="backend"
            >
              <motion.div
                initial={{ height: 0 }}
                animate={
                  showFrontend || showBackend
                    ? {
                        height: "100%",
                        width: "fit-content",
                        // maxWidth: "90vw",
                        overflow: "scroll",
                        transition: { duration: 0.5 },
                      }
                    : { height: 0, transition: { duration: 0.5 } }
                }
                className={styles.skills}
              >
                <SkillsList skills="backend" />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
        {/* </motion.div> */}

        {/* ^^^^ Backend Button */}
        <button
          onClick={() => {
            if (showFrontend) setShowFrontend(!showFrontend);
            setShowBackend(!showBackend);
          }}
          className={
            showBackend
              ? (buttonStyles = `${styles.active} ${styles.button}`)
              : (buttonStyles = `${styles.button}`)
          }
          id="backend"
        >
          Backend
        </button>
      </motion.div>
    </div>
  );
}

export default Skills;
