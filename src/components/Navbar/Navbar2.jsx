import { motion } from "framer-motion";

const Navbar = () => {
  const menu = [
    {
      id: "1",
      title: "Home",
      icon: "🏠",
    },
    {
      id: "2",
      title: "Projects",
      icon: "💻",
    },
    {
      id: "3",
      title: "Skills",
      icon: "⚙️",
    },
    {
      id: "4",
      title: "Contact",
      icon: "📞",
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
    <>
      <motion.ul
        style={{
          display: "flex",
          flexWrap: "wrap",
          marginLeft: "0px",
          marginBottom: "8px",
          marginTop: "15px",
          paddingLeft: "0px",
        }}
        initial="hidden"
        animate="visible"
        variants={list}
      >
        {menu.map((menu) => (
          <motion.li
            style={{
              listStyle: "none",
              marginRight: "-10px",
            }}
            key={menu.id}
            data-testid={menu.id}
            variants={item}
            whileHover={{
              scale: 1.2,
              marginRight: "5px",
              transition: { ease: "easeOut" },
            }}
          >
            <div
              style={{
                background: "linear-gradient(90deg,#ffa0ae 0%,#aacaef 75%)",
                height: "50px",
                width: "50px",
                borderRadius: "50%",
                border: "3px solid #4C79DF",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                fontSize: "38px",
              }}
            >
              <span role="img" style={{ paddingRight: 0 }}>
                {menu.icon}
                {/* {skills.photo} */}
                {/* <i className={`fa-brands fa-${skills.icon}`} title="html" /> */}
              </span>
            </div>
          </motion.li>
        ))}
      </motion.ul>
    </>
  );
};

export default Navbar;
