import { useState } from "react";
import Projects from "../Projects/Projects";
import styles from "./Portfolio.module.scss";
import Navbar from "../Navbar/Navbar";
import { AnimatePresence, motion } from "framer-motion";
import AboutMe from "../AboutMe/AboutMe";
import Skills from "../Skills/Skills";
import Contact from "../Contact/Contact";
function Portfolio() {
  const [showSection, setShowSection] = useState("aboutMe");

  const variants = {
    hidden: { x: 1000 },
    visible: { x: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className={styles.container}>
      <Navbar showSection={showSection} setShowSection={setShowSection} />
      <AnimatePresence mode="wait">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={variants}
          exit="exit"
          key={showSection}
          className={styles.section}
        >
          {/* ^^^^^^^About Me^^^^^^^^^ */}

          {showSection === "aboutMe" && <AboutMe />}

          {/* ^^^^^^^Projects^^^^^^^^^ */}
          {showSection === "projects" && <Projects />}

          {/* ^^^^^^^Skills^^^^^^^^^ */}
          {showSection === "skills" && <Skills />}

          {/* ^^^^^^^Contact^^^^^^^^^ */}
          {showSection === "contact" && <Contact />}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default Portfolio;
