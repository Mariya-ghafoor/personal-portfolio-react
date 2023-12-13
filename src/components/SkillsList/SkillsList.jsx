/* eslint-disable react/prop-types */
import SkillCard from "../SkillCard/SkillCard";

function SkillsList({ skills }) {
  const frontendSkills = [
    {
      id: 1,
      title: "html",
      icon: <i className="fa-brands fa-html5 icon" aria-hidden="true"></i>,
    },
    {
      id: 2,
      title: "css",
      icon: <i className="fa fa-brands fa-css3-alt" aria-hidden="true"></i>,
    },
    {
      id: 3,
      title: "scss",
      icon: <i className="fa fa-brands fa-sass" aria-hidden="true"></i>,
    },
    {
      id: 4,
      title: "javascript",
      icon: <i className="fa-brands fa-square-js" aria-hidden="true"></i>,
    },
    {
      id: 5,
      title: "typescript",
      icon: <i className="fa-brands fa-square-js" aria-hidden="true"></i>,
    },
    {
      id: 6,
      title: "react js",
      icon: <i className="fa-brands fa-square-js" aria-hidden="true"></i>,
    },
    {
      id: 7,
      title: "next js",
      icon: <i className="fa-brands fa-square-js" aria-hidden="true"></i>,
    },
  ];

  const backendSkills = [
    {
      id: 1,
      title: "python",
      icon: <i className="fa-brands fa-python" aria-hidden="true"></i>,
    },
    {
      id: 2,
      title: "java",
      icon: <i className="fa-brands fa-java" aria-hidden="true"></i>,
    },
    {
      id: 3,
      title: "spring boot",
      icon: <i className="fa-solid fa-power-off" aria-hidden="true"></i>,
    },
    {
      id: 4,
      title: "mysql",
      icon: <i className="fa-solid fa-database" aria-hidden="true"></i>,
    },
    {
      id: 5,
      title: "nest js",
      icon: <i className="fa-brands fa-node-js" aria-hidden="true"></i>,
    },
  ];
  return (
    <>
      {skills === "frontend" &&
        frontendSkills.map((skill) => (
          <SkillCard key={skill.id} skill={skill} />
        ))}
      {skills === "backend" &&
        backendSkills.map((skill) => (
          <SkillCard key={skill.id} skill={skill} />
        ))}
    </>
  );
}

export default SkillsList;
