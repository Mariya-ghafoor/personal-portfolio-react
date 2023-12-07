import { motion } from "framer-motion";
import AnimatedText from "./AnimatedText";
import styles from "./Intro.module.scss";

export default function Intro() {
  // Placeholder text data, as if from API
  const placeholderText = [
    {
      type: "heading2",
      text: "Mariya Abdul Ghafoor",
    },
  ];

  const container = {
    visible: {
      transition: {
        staggerChildren: 0.025,
      },
    },
  };

  return (
    <div className={styles.main}>
      <motion.div
        className={styles.h3}
        initial="hidden"
        // animate="visible"
        animate="visible"
        variants={container}
      >
        <div className="container">
          {placeholderText.map((item, index) => {
            return <AnimatedText {...item} key={index} />;
          })}
        </div>
      </motion.div>

      <motion.div
      // initial={{ opacity: 0 }}
      // animate={{ opacity: 1 }}
      // transition={{
      //   duration: 2,
      //   delay: 1.5,
      // }}
      >
        <span>
          full time software developer{" "}
          <i className={`${styles.iconone} fa fa-solid fa-laptop`}> </i>
        </span>
        <span>
          , part time nerd{" "}
          <i className={`${styles.icontwo} fa-solid fa-glasses`}></i>
        </span>
        <span>
          ... in my free time I like to read jane austen{" "}
          <i className={`${styles.iconone} fa-solid fa-book-open`}></i>{" "}
        </span>
        <span>
          , listen to taylor swift{" "}
          <i className={`${styles.icontwo} fa-solid fa-headphones`}></i>
        </span>
        <span>
          {" "}
          and wonder about the marvels of life{" "}
          <i className={`${styles.iconone} fa-solid fa-earth-americas`}></i>
        </span>
      </motion.div>
    </div>
  );
}
