import styles from "./ContactPage.module.scss";

function ContactPage() {
  return (
    <div className={styles.contact__main}>
      <div className={styles.container}>
        <h2 className={styles.heading}>get in touch</h2>

        <div className={styles.contact__container}>
          <a
            className={styles.contact__link}
            style={{ "margin-top": "30px" }}
            href="mailto:mariya.aghafoor@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            mariya.aghafoor@gmail.com
          </a>

          <div className={styles.contact__icons__container}>
            <a
              href="https://www.linkedin.com/in/mariya-abdul-ghafoor/"
              target="_blank"
              rel="noreferrer"
            >
              <i
                className={`fa-brands fa-linkedin ${styles.contact__link}`}
                title="LinkedIn"
              ></i>
            </a>

            <a
              href="https://github.com/Mariya-ghafoor"
              target="_blank"
              rel="noreferrer"
            >
              <i
                className={`fa-brands fa-github ${styles.contact__link}`}
                title="Github"
              ></i>
            </a>

            <a
              href="https://medium.com/@mariya.aghafoor"
              target="_blank"
              rel="noreferrer"
            >
              <i
                className={`fa-brands fa-medium ${styles.contact__link}`}
                title="Medium"
              ></i>
            </a>
          </div>
        </div>
      </div>
      <img
        className={styles.contact__image}
        src="/assets/contact.png"
        alt="contact"
      />
    </div>
  );
}

export default ContactPage;
