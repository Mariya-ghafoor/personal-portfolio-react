/* eslint-disable react/prop-types */
import styles from "./ProjectCard.module.scss";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

function useParallax(value, distance) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

export default function ProjectCard({ project }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);

  return (
    <section className={styles.project__container}>
      <div ref={ref}>
        <img className={styles.project__img} src={project.image} />
      </div>
      <motion.div className={styles.project__details} style={{ y }}>
        <h3>{project.title}</h3>
        <p>{project.desc}</p>
        <span>
          <a href={project.ghLink} target="_blank" rel="noreferrer">
            <i className={`${styles.project__icon} fa-brands fa-github`}></i>
          </a>{" "}
          <a href={project.liveLink} target="_blank" rel="noreferrer">
            <i className={`${styles.project__icon} fa-solid fa-link`}></i>
          </a>
        </span>
      </motion.div>
    </section>
  );
}

// export default function ProjectCard({ project }) {
//   const { scrollYProgress } = useScroll();
//   const scaleX = useSpring(scrollYProgress, {
//     stiffness: 100,
//     damping: 30,
//     restDelta: 0.001,
//   });

//   return (
//     <>
//       {[1, 2, 3, 4, 5].map((image) => (
//         <Image id={image} />
//       ))}
//       <motion.div className="progress" style={{ scaleX }} />
//     </>
//   );
// }
