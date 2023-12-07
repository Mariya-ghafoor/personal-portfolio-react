/* eslint-disable react/prop-types */
import styles from "./ProjectCard.module.scss";
import { motion } from "framer-motion";

function ProjectCard({ project }) {
  return (
    <div>
      <div className={styles.project__container}>
        <div className={styles.img__container}>
          <img className={styles.img__img} src={project.image} />
          <p className={styles.img__techStack}>
            techstack: {project.techStack}
          </p>
        </div>
        <div className={styles.project__details}>
          <h3 className={styles.project__title}>{project.title}</h3>
          <p className={styles.project__desc}>{project.desc}</p>

          <span>
            <a href={project.ghLink} target="_blank" rel="noreferrer">
              <i className={`${styles.project__icon} fa-brands fa-github`}></i>
            </a>{" "}
            <a href={project.liveLink} target="_blank" rel="noreferrer">
              <i className={`${styles.project__icon} fa-solid fa-link`}></i>
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
