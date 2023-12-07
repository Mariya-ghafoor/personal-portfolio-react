/* eslint-disable react/prop-types */
import { useState, useRef, useEffect } from "react";
import styles from "./ProjectCard.module.scss";
import { useScroll, useTransform, motion } from "framer-motion";
function ProjectCard({ project }) {
  const image = {
    hidden: { scale: 0, top: 100 },
    show: { scale: 1, top: 30 },
  };

  const details = {
    hidden: { scale: 0, top: 200 },
    show: { scale: 1, top: 80 },
  };

  return (
    <motion.div
      className={styles.project__container}
      initial={{
        opacity: 0,
        x: -300,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        transition: {
          duration: 1,
          staggerChildren: 0.1,
          delayChildren: 0.3,
        },
      }}
      viewport={{ once: true }}
    >
      <motion.div
        className={styles.project__img__container}
        style={{ left: 30 }}
        variants={image}
      >
        <img className={styles.project__img} src={project.image} />
      </motion.div>

      <motion.div style={{ left: 80 }} variants={details}>
        <h3>{project.title}</h3>
        <p className={styles.project__desc}>{project.desc}</p>
        <p>techstack: {project.techStack}</p>
        <span>
          <a href={project.ghLink} target="_blank" rel="noreferrer">
            <i className={`${styles.project__icon} fa-brands fa-github`}></i>
          </a>{" "}
          <a href={project.liveLink} target="_blank" rel="noreferrer">
            <i className={`${styles.project__icon} fa-solid fa-link`}></i>
          </a>
        </span>
      </motion.div>
    </motion.div>
  );
}

export default ProjectCard;
