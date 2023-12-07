import styles from "./ProjectCarousel.module.scss";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import ProjectCard from "../ProjectCard/ProjectCard";

const projects = [
  {
    id: 1,
    title: "books search engine",
    image: "/assets/books-search-engine.png",
    desc: "a search engine on react js that queries google books api",
    //techStack: "react js",
    ghLink: "https://github.com/Mariya-ghafoor/books-search-engine",
    liveLink: "https://mariya-ghafoor.github.io/books-search-engine/",
  },
  {
    id: 2,
    title: "e-commerce website",
    image: "/assets/ecommerce-website.png",
    desc: "an online shopping website on react js with products stored on a remote firestore database",
    //techStack: "frontend: react, database: firestore",
    ghLink: "https://github.com/Mariya-ghafoor/e-commerce-website",
    liveLink: "https://e-commerce-website786.netlify.app/",
  },
  {
    id: 3,
    title: "minesweeper",
    image: "/assets/minesweeper.png",
    desc: "the classic game of minesweeper in java with customizable grid and cascading affect",
    //techStack: "java",
    ghLink: "https://github.com/Mariya-ghafoor/minesweeper-game",
    liveLink: "https://replit.com/@mariyaaghafoor/Minesweeper-Game",
  },
  {
    id: 4,
    title: "snake game",
    image: "/assets/snake-game.png",
    desc: "the classic snake game in Python which keeps tab of the score.",
    //techStack: "python",
    ghLink: "https://github.com/Mariya-ghafoor/SnakeGame/tree/master",
    liveLink: "https://replit.com/@mariyaaghafoor/SnakeGame",
  },
  {
    id: 5,
    title: "full stack app",
    image: "/assets/EmployeeCreatorApp.png",
    desc: "a full stack spring boot+ mysql + react + typescript for crud operations",
    // techStack: "frontend: react + typescript. backend: spring boot + mysql",
    ghLink: "https://github.com/Mariya-ghafoor/employee-creator-frontend",
    liveLink: "https://github.com/Mariya-ghafoor/employee-creator-frontend",
  },
  {
    id: 6,
    title: "morse code translator",
    image: "/assets/morse-translator.png",
    desc: "an app that automatically detects the language and translate to either morse code or english",
    //techStack: "html, css, javascript",
    ghLink: "https://github.com/Mariya-ghafoor/morse-translator",
    liveLink: "https://mariya-ghafoor.github.io/morse-translator/",
  },
];

const variants = {
  initial: (direction) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      // scale: 0.5,
    };
  },
  animate: {
    x: 0,
    opacity: 1,
    // scale: 1,
    // transition: 'ease-in',
    transition: {
      x: { type: "spring", stiffness: 300, damping: 30 },
      opacity: { duration: 0.2 },
    },
  },
  exit: (direction) => {
    return {
      x: direction > 0 ? -1000 : 1000,
      opacity: 0,
      // scale: 0.5,
      // transition: 'ease-in',
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
      },
    };
  },
};

function ProjectCarousel() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  function nextStep() {
    setDirection(1);
    if (index === projects.length - 1) {
      setIndex(0);
      return;
    }
    setIndex(index + 1);
  }

  function prevStep() {
    setDirection(-1);
    if (index === 0) {
      setIndex(projects.length - 1);
      return;
    }
    setIndex(index - 1);
  }

  return (
    //<div
    // key={projects[index].id}
    // initial={{ opacity: 0, x: 0 }}
    // animate={{ opacity: 1, x: 200, type: "spring" }}
    // transition={{ duration: 2 }}
    //className={styles.container}
    //>
    <div className={styles.slideshow}>
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          variants={variants}
          animate="animate"
          initial="initial"
          exit="exit"
          alt="slides"
          className={styles.slides}
          key={projects[index].image}
          custom={direction}
        >
          <img className={styles.project__image} src={projects[index].image} />
          <div className={styles.project__details}>
            <h3>{projects[index].title}</h3>
            <p>{projects[index].desc}</p>
            <span>
              <button
                href={projects[index].ghLink}
                target="_blank"
                rel="noreferrer"
              >
                <i
                  className={`${styles.project__icon} fa-brands fa-github`}
                ></i>
              </button>{" "}
              <button
                href={projects[index].liveLink}
                target="_blank"
                rel="noreferrer"
              >
                <i className={`${styles.project__icon} fa-solid fa-link`}></i>
              </button>
            </span>
          </div>
        </motion.div>
      </AnimatePresence>
      <button className={styles.prevButton} onClick={prevStep}>
        ◀
      </button>
      <button className={styles.nextButton} onClick={nextStep}>
        ▶
      </button>
    </div>
    //</div>
  );
}

export default ProjectCarousel;
