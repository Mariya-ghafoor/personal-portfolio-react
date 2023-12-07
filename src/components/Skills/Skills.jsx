/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import styles from "./Skills.module.scss";
import { easeIn, easeOut, motion, useAnimationControls } from "framer-motion";
import SkillsList from "../SkillsList/SkillsList";

function Skills() {
  const [showFrontend, setShowFrontend] = useState(false);
  const [showBackend, setShowBackend] = useState(false);
  const controls = useAnimationControls();

  let buttonStyles = "";

  const onFrontEndButtonClick = () => {
    console.log("frontend button clicked");
    console.log("show frontend before toggle " + showFrontend);
    if (showBackend === true) setShowBackend(!showBackend);
    setShowFrontend(!showFrontend);
    console.log("show frontend after toggle " + showFrontend);
  };

  const onBackEndButtonClick = () => {
    console.log("backend button clicked");
    console.log("show backend before toggle " + showBackend);
    // if (showFrontend === true) setShowFrontend(!showFrontend);
    setShowBackend(!showBackend);
    console.log("show backend after toggle " + showBackend);
  };

  return (
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

      <motion.div
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
      >
        {/* ^^^^^ Frontend skills */}
        {showFrontend && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.5 } }}
            className={styles.container__skills}
          >
            {showFrontend && <SkillsList skills="frontend" />}
          </motion.div>
        )}

        {/* ^^^^^ Backend skills */}
        {showBackend && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.5 } }}
            className={styles.container__skills}
          >
            <SkillsList skills="backend" />
          </motion.div>
        )}
      </motion.div>

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
  );
}

export default Skills;
