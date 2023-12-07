/* eslint-disable react/prop-types */
import styles from "./SkillCard.module.scss";

const SkillCard = ({ skill }) => {
  console.log(skill);
  const iconStyle = `${skill.iconClass}`;
  return (
    <ul className={styles.skills__ul}>
      <li className={styles.skills__ul__li}>
        <div className={styles.skills__ul__li__icon}>
          <span style={{ color: "black" }}>{skill.icon}</span>
        </div>
        <div className={styles.skills__ul__li__title}>{skill.title}</div>
      </li>
    </ul>
  );
};

export default SkillCard;
