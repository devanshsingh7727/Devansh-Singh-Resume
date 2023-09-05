import React, { useRef } from "react";
import { motion } from "framer-motion";
function MainDivAnimation({ children }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            duration: 0.5,
          },
        },
      }}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
}

export default MainDivAnimation;
