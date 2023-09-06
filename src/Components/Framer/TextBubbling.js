import React, { useState } from "react";
import { motion, useAnimationControls } from "framer-motion";
function TextBubbling({ children }) {
  const [Start, setStart] = useState(false);
  const Controls = useAnimationControls();
  const MouseAction = () => {
    if (!Start) {
      setStart(true);
      Controls.start({
        transform: [
          "scale3d(1,1,1)",
          "scale3d(1.4,.55,1)",
          "scale3d(.75,1.25,1)",
          "scale3d(1.25,.85,1)",
          "scale3d(.9,1.05,1)",
          "scale3d(1,1,1)",
        ],
        transition: {
          duration: 0.7,
          times: [0, 0.4, 0.6, 0.7, 0.8, 0.9],
        },
      });
    }
  };
  return (
    <motion.div
      animate={Controls}
      onMouseOver={MouseAction}
      style={{ display: "inline-block" }}
      onAnimationComplete={() => setStart(false)}
    >
      {children}
    </motion.div>
  );
}

export default TextBubbling;
