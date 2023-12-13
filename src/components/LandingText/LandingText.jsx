import { useState } from "react";
import Name from "../Name/Name";
import styles from "./LandingText.module.scss";
import { motion, AnimatePresence } from "framer-motion";
import Portfolio from "../Portfolio/Portfolio";

function LandingText() {
  const [showPortfolio, setShowPortfolio] = useState(false);

  const onClickToggle = () => {
    setTimeout(() => {
      setShowPortfolio(true);
    }, 500);
  };
  return (
    <>
      <AnimatePresence mode="popLayout">
        {showPortfolio ? (
          <motion.div
            key="portfolio"
            initial={{ y: 1000, opacity: 1 }}
            animate={{
              y: 0,
              opacity: 1,
              transition: { duration: 3, delay: 1 },
            }}
            className={styles.portfolio__container}
          >
            <Portfolio />
          </motion.div>
        ) : (
          <motion.div
            key="landingtext"
            initial={{ y: 0, opacity: 1 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{
              y: -1000,
              opacity: 1,
              transition: { duration: 3, delay: 1 },
            }}
            className={styles.container}
          >
            <Name />

            {/* ######### Oath ############# */}
            <motion.div
              initial={{ x: -1000, opacity: 0 }}
              animate={{
                x: 0,
                opacity: 1,
                transition: { duration: 2, delay: 4 },
              }}
              className={styles.container__oath}
            >
              <p>"I solemnly swear that I am up to no good"</p>

              {/* ####### Toggle button */}

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
      </AnimatePresence>
    </>
  );
}

export default LandingText;
