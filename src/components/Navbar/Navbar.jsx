/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import styles from "./Navbar.module.scss";

function Navbar({ showSection, setShowSection }) {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const hamburgerMenuExpandedStyle = `${styles.navbar} ${styles.expanded}`;
  const onLinkClick = (e) => {
    setIsNavExpanded(false);
    setShowSection(e.target.id);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsNavExpanded(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      {/* <button
        onClick={() => {
          console.log("button clicked");
          setIsNavExpanded(!isNavExpanded);
        }}
      > */}
      <i
        onClick={() => {
          console.log("button clicked");
          setIsNavExpanded(!isNavExpanded);
        }}
        className={`${styles.hamburger} fa-solid fa-bars`}
      ></i>
      {/* </button> */}
      <ul
        className={isNavExpanded ? hamburgerMenuExpandedStyle : styles.navbar}
      >
        <li>
          <button
            id="aboutMe"
            onClick={onLinkClick}
            className={
              showSection === "aboutMe"
                ? styles.active + " " + styles.navLink
                : styles.navLink
            }
          >
            About me
          </button>
        </li>

        <li>
          <button
            id="projects"
            onClick={onLinkClick}
            className={
              showSection === "projects"
                ? styles.active + " " + styles.navLink
                : styles.navLink
            }
          >
            Projects
          </button>
        </li>

        <li>
          <button
            id="blogs"
            onClick={onLinkClick}
            className={
              showSection === "blogs"
                ? styles.active + " " + styles.navLink
                : styles.navLink
            }
          >
            Blog
          </button>
        </li>

        <li>
          <button
            id="skills"
            onClick={onLinkClick}
            className={
              showSection === "skills"
                ? styles.active + " " + styles.navLink
                : styles.navLink
            }
          >
            Skills
          </button>
        </li>
        <li>
          <button
            id="contact"
            onClick={onLinkClick}
            className={
              showSection === "contact"
                ? styles.active + " " + styles.navLink
                : styles.navLink
            }
          >
            Contact
          </button>
        </li>
      </ul>
    </>
  );
}

export default Navbar;
