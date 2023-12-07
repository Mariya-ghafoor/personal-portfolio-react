import { useState } from "react";
import Name from "../Name/Name";
import styles from "./LandingText.module.scss";
import { motion, AnimatePresence, useAnimationControls } from "framer-motion";
import Portfolio from "../Portfolio/Portfolio";
import ToggleButton from "../ToggleButton/ToggleButton";

function LandingText() {
  // const [enterButton, setEnterButton] = useState(false);
  const [showPortfolio, setShowPortfolio] = useState(false);

  const controls = useAnimationControls();

  const landingTextVariants = {
    initial: { opacity: 1 },
    animate: { opacity: 1, transition: { duration: 2 } },
    exit: {
      y: -1000,
      opacity: 1,
      transition: { duration: 5, staggerChildren: 0.5 },
    },
  };

  const portfolioVariants = {
    initial: { y: 0, opacity: 1 },
    animate: {
      y: -1000,
      opacity: 1,
      transition: { duration: 5, staggerChildren: 0.5 },
    },
  };

  const onClickToggle = () => {
    console.log("i was called");
    controls.start("animate");
    console.log("started");

    setTimeout(() => {
      setShowPortfolio(true);
      //controls.stop();
    }, 1000);
  };
  return (
    <>
      <AnimatePresence mode="popLayout">
        {showPortfolio ? (
          <motion.div
            key="portfolio"
            initial="initial"
            animate={controls}
            variants={portfolioVariants}
          >
            <Portfolio />
          </motion.div>
        ) : (
          <motion.div
            key="landingtext"
            initial="initial"
            animate={controls}
            exit="exit"
            variants={landingTextVariants}
            className={styles.container}
          >
            <Name />

            {/* ######### Oath ############# */}
            <motion.div
              initial={{ x: -1000 }}
              animate={{ x: 0, transition: { duration: 2, delay: 4 } }}
              className={styles.container__oath}
            >
              <p>"I solemnly swear that I am up to no good"</p>
              <div className={styles.checkbox__wrapper}>
                <label className={styles.switch}>
                  <input type="checkbox" onClick={onClickToggle} />
                  <span className={styles.slider}></span>
                </label>
              </div>

              {/* ###################### */}
            </motion.div>
          </motion.div>
        )}

        {/* ------------------------------------------------- */}
      </AnimatePresence>
    </>
  );
}

export default LandingText;
