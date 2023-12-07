import ProjectCard from "../ProjectCard/ProjectCard";
import styles from "./ProjectList.module.scss";
import { useScroll, useTransform, motion, useSpring } from "framer-motion";

function ProjectList() {
  const projects = [
    {
      id: 1,
      title: "full stack app",
      image: "/assets/EmployeeCreatorApp.png",
      desc: "a full stack spring boot+ mysql + react + typescript for crud operations",
      // techStack: "frontend: react + typescript. backend: spring boot + mysql",
      ghLink: "https://github.com/Mariya-ghafoor/employee-creator-frontend",
      liveLink: "https://github.com/Mariya-ghafoor/employee-creator-frontend",
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
      title: "books search engine",
      image: "/assets/books-search-engine.png",
      desc: "a search engine on react js that queries google books api",
      //techStack: "react js",
      ghLink: "https://github.com/Mariya-ghafoor/books-search-engine",
      liveLink: "https://mariya-ghafoor.github.io/books-search-engine/",
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

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className={styles.projectList__container}>
      {projects &&
        projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      {/* <motion.div className={styles.progress} style={{ scaleX }} /> */}
    </div>
  );
}

export default ProjectList;
