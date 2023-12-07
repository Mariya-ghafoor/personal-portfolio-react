import styles from "./Intro.module.scss";

function Intro() {
  return (
    <div className={styles.main}>
      <h2>Mariya Abdul Ghafoor</h2>
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
    </div>
  );
}

export default Intro;
