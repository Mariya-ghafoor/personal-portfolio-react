import styles from "./TechstackPage.module.scss";
function TechstackPage() {
  return (
    <div>
      <h2 className={styles.heading}>my tech stack</h2>
      <div className={styles.container}>
        <div className={styles.techstack}>
          <h3>frontend</h3>
          <div className={styles.techstack__list}>
            <div>
              <i className="fa-brands fa-html5 icon" /> html
            </div>

            <div>
              <i className="fa fa-brands fa-css3-alt" /> css
            </div>

            <div>
              <i className="fa fa-brands fa-sass" /> scss
            </div>

            <div>
              <i className="fa-brands fa-square-js" /> javascript
            </div>

            <div>
              <i className="fa-brands fa-square-js" /> typescript
            </div>

            <div>
              <i className="fa-brands fa-react" /> react js
            </div>

            <div>
              <i className="fa-brands fa-react" /> next js
            </div>
          </div>
        </div>
        <img className={styles.techstack__image} src="/assets/frontend.png" />
      </div>

      <div className={styles.container}>
        <div className={styles.techstack}>
          <h3>backend</h3>
          <div className={styles.techstack__list}>
            <div>
              <i className="fa-brands fa-python" /> python
            </div>

            <div>
              <i className="fa-brands fa-java" /> java
            </div>

            <div>
              <i className="fa-solid fa-power-off"></i> spring boot
            </div>

            <div>
              <i className="fa-solid fa-database" /> mysql
            </div>

            <div>
              <i className="fa-brands fa-node-js" /> nest js
            </div>
          </div>
        </div>
        <img className={styles.techstack__image} src="/assets/backend.png" />
      </div>
    </div>
  );
}

export default TechstackPage;
