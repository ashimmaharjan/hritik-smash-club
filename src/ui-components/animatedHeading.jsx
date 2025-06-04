"use client";
import { AuroraText } from "@/components/magicui/aurora-text";
import { motion } from "motion/react";

const AnimatedHeading = ({ title, subtitle }) => {
  return (
    <div>
      <motion.h2
        initial={{
          scale: 0,
          filter: "blur(50px)",
        }}
        whileInView={{
          scale: 1,
          filter: "blur(0px)",
          transition: {
            type: "spring",
            stiffness: 200,
            damping: 20,
            duration: 0.3,
            delay: 0.1,
          },
        }}
        className="text-center font-extrabold text-6xl md:text-7xl py-10 md:py-16"
      >
        <AuroraText>{title}</AuroraText>
        <motion.div
          initial={{
            width: 0,
          }}
          whileInView={{
            width: "120px",
            transition: {
              type: "spring",
              stiffness: 200,
              damping: 20,
              duration: 0.3,
              delay: 0.4,
            },
          }}
          className="h-[6px] bg-gradient-to-br from-[#6ee7b7] to-[#f0f9ff] rounded-b-2xl mx-auto mt-4"
        ></motion.div>
      </motion.h2>
    </div>
  );
};

export default AnimatedHeading;
