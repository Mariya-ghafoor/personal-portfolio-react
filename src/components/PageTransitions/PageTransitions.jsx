/* eslint-disable react/prop-types */
import { AnimatePresence, motion } from "framer-motion";

const PageTransitions = ({ children }) => {
  const variants = {
    initial: { x: 1000 },
    animate: { x: 0, transition: { duration: 1, delay: 5 } },
    exit: { scale: 0, transition: { duration: 6 } },
  };
  console.log(children.key);

  return (
    <AnimatePresence>
      <motion.div
        initial="initial"
        animate="animate"
        exit={{ opacity: 0 }}
        variants={variants}
        key={children.key}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransitions;
