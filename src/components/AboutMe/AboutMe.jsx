import styles from "./AboutMe.module.scss";
import { motion } from "framer-motion";

function AboutMe() {
  return (
    <div className={styles.container}>
      <div className={styles.intro}>
        <div>
          <h3 className={styles.heading}>
            Nice to meet you where you've been?
          </h3>
        </div>
        <p className={styles.para}>
          Hi I am Mariya, a Software developer based in Sydney, Australia.
          <br /> I believe in creating software that is meaningful and fun.{" "}
          <br />
          {/* <br />I also believe Taylor Swift is one of the great artists of this
          century, Jane Austen was not a romance author and Pluto is a planet
          because that is what I was told at school. */}
        </p>
      </div>
    </div>
  );
}

export default AboutMe;
