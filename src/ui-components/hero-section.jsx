"use client";

import Silk from "./silk-bg";
import { PiYoutubeLogoDuotone } from "react-icons/pi";
import { motion } from "motion/react";
import { SpinningText } from "@/components/magicui/spinning-text";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section>
      <div className="w-dvw h-dvh relative">
        <Silk
          speed={8}
          scale={1}
          color="#292524"
          noiseIntensity={1.5}
          rotation={0}
        />

        <div className="absolute top-0 left-0 w-dvw h-dvh flex flex-col justify-center items-center">
          <div className="w-auto h-auto flex flex-col">
            <motion.h2
              initial={{
                scale: 0,
                filter: "blur(50px)",
              }}
              whileInView={{
                scale: 1,
                filter: "blur(0px)",
                transition: {
                  type: "tween",
                  duration: 0.3,
                  delay: 0.1,
                },
              }}
              className="text-center"
            >
              Hritik
            </motion.h2>

            <motion.h2
              initial={{
                scale: 0,
                filter: "blur(50px)",
              }}
              whileInView={{
                scale: 1,
                filter: "blur(0px)",
                transition: {
                  type: "tween",
                  duration: 0.3,
                  delay: 0.3,
                },
              }}
              className="flex items-center text-center"
            >
              Sm
              <Link href="https://www.youtube.com/@Hritiksmash" target="_blank">
                <PiYoutubeLogoDuotone className="size-32 md:size-40 lg:size-48 text-red-400 hover:scale-105 hover:text-red-700 -rotate-12 hover:-rotate-[20deg] transition-all duration-300 ease-in-out" />
              </Link>
              sh
            </motion.h2>

            <motion.h2
              initial={{
                scale: 0,
                filter: "blur(50px)",
              }}
              whileInView={{
                scale: 1,
                filter: "blur(0px)",
                transition: {
                  type: "tween",
                  duration: 0.3,
                  delay: 0.5,
                },
              }}
              className="text-center"
            >
              Club
            </motion.h2>
          </div>

          <motion.span
            initial={{
              scale: 0,
              filter: "blur(50px)",
            }}
            whileInView={{
              scale: 1,
              filter: "blur(0px)",
              transition: {
                type: "tween",
                duration: 0.3,
                delay: 0.8,
              },
            }}
            className="text-[#6ee7b7]/70 text-base md:text-lg mt-5 font-black"
          >
            Smashing Memories Since Day One.
          </motion.span>
        </div>

        <div className="text-white absolute top-24 right-24 lg:right-28">
          <SpinningText
            className="font-sans text-xs lowercase text-red-200 tracking-tight"
            radius={8}
          >
            Rewind. Reconnect. Relive.
          </SpinningText>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
