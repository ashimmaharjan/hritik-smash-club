"use client";

import { motion } from "motion/react";

import { Geist } from "next/font/google";

const geist = Geist({
  subsets: ["latin"],
});

const AnimatedParaText = ({ children }) => {
  return (
    <motion.p
      initial={{
        opacity: 0,
        filter: "blur(50px)",
        x: 50,
      }}
      whileInView={{
        opacity: 1,
        filter: "blur(0px)",
        x: 0,
        transition: {
          type: "tween",
          duration: 0.3,
          delay: 0.1,
        },
      }}
      className={`${geist.className} text-neutral-400`}
    >
      {children}
    </motion.p>
  );
};

export default AnimatedParaText;
