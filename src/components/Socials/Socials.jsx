import { motion } from "framer-motion";
import styles from "./Socials.module.scss";

function Socials() {
  const socials = [
    {
      id: "1",
      icon: (
        <i className="fa-brands fa-linkedin" style={{ color: "#005cb0" }}></i>
      ),
      url: "https://www.linkedin.com/in/mariya-abdul-ghafoor/",
    },
    {
      id: "2",
      icon: <i className="fa-brands fa-github"></i>,
      url: "https://github.com/Mariya-ghafoor",
    },
    {
      id: "3",
      icon: <i className="fa-brands fa-medium"></i>,
      url: "https://medium.com/@mariya.aghafoor",
    },
  ];

  const list = {
    visible: {
      opacity: 1,
      transition: {
        // delayChildren: 1.5,
        staggerChildren: 0.1,
      },
    },
    hidden: {
      opacity: 0,
    },
  };

  const item = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -10 },
  };

  return (
    <div className={styles.container}>
      <h4>Connect with me on my socials!</h4>
      <motion.ul
        initial="hidden"
        animate="visible"
        variants={list}
        className={styles.socials__list}
      >
        {socials.map((social) => (
          <motion.li
            key={social.id}
            data-testid={social.id}
            variants={item}
            whileHover={{
              scale: 1.2,
              marginRight: "5px",
              transition: { ease: "easeOut" },
            }}
            className={styles.socials__item}
          >
            <div className={styles.socials__image__container}>
              <span role="img" className={styles.socials__image}>
                <a href={social.url} target="_blank" rel="noreferrer">
                  {social.icon}
                </a>
              </span>
            </div>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
}

export default Socials;
