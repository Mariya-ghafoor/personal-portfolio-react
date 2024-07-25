import ProjectCard from "../ProjectCard/ProjectCard";
import styles from "./Projects.module.scss";
import { motion } from "framer-motion";

function Projects() {
  const projects = [
    {
      id: 1,
      title: "postcode api",
      image: "/assets/postcodeAPI.png",
      desc: "an api to search, view & add new postcodes to a remote database (CRUD) with Spring Boot security to register and authenticate users using JWTs & cookies. ",
      techStack: "frontend: react + scss. backend: spring boot + mysql",
      ghLink: "https://github.com/Mariya-ghafoor/postcodeAPI-frontend",
      liveLink: "https://github.com/Mariya-ghafoor/postcodeAPI-frontend",
    },
    {
      id: 2,
      title: "text file compressor (zipper)",
      image: "/assets/text-file-zipper.jpeg",
      desc: "a text file compressor built in java that uses huffman encoding/decoding to reduce the file size",
      techStack: "java",
      ghLink: "https://github.com/Mariya-ghafoor/text-file-compressor",
      liveLink: "https://github.com/Mariya-ghafoor/text-file-compressor",
    },
    {
      id: 3,
      title: "full stack app",
      image: "/assets/EmployeeCreatorApp.png",
      desc: "a full stack app that allows the user to perform crud operations on a mysql database",
      techStack: "frontend: react + typescript. backend: spring boot + mysql",
      ghLink: "https://github.com/Mariya-ghafoor/employee-creator-frontend",
      liveLink: "https://github.com/Mariya-ghafoor/employee-creator-frontend",
    },
    {
      id: 4,
      title: "e-commerce website",
      image: "/assets/ecommerce-website.png",
      desc: "an online shopping website where users can not only view products of different variances but also ‘buy’ products stored on a remote database",
      techStack: "frontend: react, database: firestore",
      ghLink: "https://github.com/Mariya-ghafoor/e-commerce-website",
      liveLink: "https://e-commerce-website786.netlify.app/",
    },
    {
      id: 5,
      title: "minesweeper",
      image: "/assets/minesweeper.png",
      desc: "the classic game of minesweeper with the ability to customise the size of the mine and includes cascading affect when no mines around",
      techStack: "java",
      ghLink: "https://github.com/Mariya-ghafoor/minesweeper-game",
      liveLink: "https://replit.com/@mariyaaghafoor/Minesweeper-Game",
    },
    {
      id: 6,
      title: "snake game",
      image: "/assets/snake-game.png",
      desc: "this classic snake game does not only trace the path of the snake but also keeps tab of the score.",
      techStack: "python",
      ghLink: "https://github.com/Mariya-ghafoor/SnakeGame/tree/master",
      liveLink: "https://replit.com/@mariyaaghafoor/SnakeGame",
    },
    {
      id: 7,
      title: "books search engine",
      image: "/assets/books-search-engine.png",
      desc: "a search engine that queries google books api, displays the result and provides further information when user clicks on a book",
      techStack: "react js",
      ghLink: "https://github.com/Mariya-ghafoor/books-search-engine",
      liveLink: "https://mariya-ghafoor.github.io/books-search-engine/",
    },
    {
      id: 8,
      title: "morse code translator",
      image: "/assets/morse-translator.png",
      desc: "an app that automatically detects the language and translate to either morse code or english",
      techStack: "html, css, javascript",
      ghLink: "https://github.com/Mariya-ghafoor/morse-translator",
      liveLink: "https://mariya-ghafoor.github.io/morse-translator/",
    },
    {
      id: 9,
      title: "react music player",
      image: "/assets/react-music-player.png",
      desc: "an app that can perform basic functions of a music player built in react js",
      techStack: "react js",
      ghLink: "https://github.com/Mariya-ghafoor/react-music-player",
      liveLink: "https://taylorswiftradio.netlify.app/",
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { type: "spring", stiffness: 100, mass: 0.3, duration: 1 },
    },
  };

  return (
    <>
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className={styles.projects__container}
      >
        {projects &&
          projects.map((project) => (
            <motion.div
              className={styles.item}
              variants={item}
              key={project.id}
            >
              <ProjectCard key={project.id} project={project} />
            </motion.div>
          ))}
      </motion.div>
    </>
  );
}

export default Projects;
