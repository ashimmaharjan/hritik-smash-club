import Image from "next/image";
import AnimatedHeading from "./animatedHeading";

import { Geist } from "next/font/google";

import { motion } from "motion/react";
import AnimatedParaText from "./animatedParagrphText";

const geist = Geist({
  subsets: ["latin"],
});

const Beginning = () => {
  return (
    <section className="px-5 md:px-10 lg:px-16 py-5">
      <AnimatedHeading title="Origins" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <motion.div
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
          className="col-span-1 relative"
        >
          <Image
            src="/images/retro-origin.jpeg"
            alt="clubhouse image"
            width={700}
            height={700}
            quality={100}
            loading="lazy"
            className="rounded-3xl border-[4px] overflow-hidden border-lime-600 shadow-lg w-full max-h-[500px] lg:max-h-[530px] object-cover inverted-radius"
          />
          <div className="absolute top-1 right-3 size-24 flex justify-center items-center bg-lime-600 text-neutral-800 text-[16px] font-extrabold rounded-4xl shadow-2xl shadow-amber-200 border-2 border-white">
            Est. 2018
          </div>
        </motion.div>

        <div className="col-span-1 flex flex-col justify-center items-center text-justify px-3">
          <AnimatedParaText>
            In the aftermath of the great quake that shook the valley in April,
            when Kathmandu was still brushing off the dust of ruins and silence
            echoed through the alleys,{" "}
            <span className="text-neutral-100 font-semibold italic underline">
              something unexpected stirred
            </span>
            .
          </AnimatedParaText>
          <br />
          <AnimatedParaText>
            From the rubble of cracked walls and long days of recovery, a small
            band of friends — bored, restless, and full of mischief — discovered
            a strange new magic:{" "}
            <span className="text-neutral-100 font-semibold italic underline">
              Dubsmash
            </span>
            . It began as laughter in disguise, mimicry in motion, but it was
            more than just an app.{" "}
            <span className="text-neutral-100 font-semibold italic underline">
              It was a spark.
            </span>
          </AnimatedParaText>
          <br />
          <AnimatedParaText>
            What started as simple reenactments in front of flickering phone
            cameras quickly morphed into something wilder, richer. Scripted
            stories, inside jokes turned into short films, and suddenly, every
            friend became an actor, every rooftop a stage.{" "}
            <span className="text-neutral-100 font-semibold italic underline">
              We weren&apos;t just killing time — we were creating a world
            </span>
            , one punchline at a time.
          </AnimatedParaText>
          <br />
          <AnimatedParaText>
            From those humble days bloomed the{" "}
            <span className="text-neutral-100 font-semibold italic underline">
              Hritik Smash Club
            </span>{" "}
            — not just a name, but{" "}
            <span className="text-neutral-100 font-semibold italic underline">
              a realm of chaos, comedy, and brotherhood
            </span>
            . We played games that felt like rituals, held night-outs that felt
            like quests, and built memories that would someday feel like
            legends.
          </AnimatedParaText>
          <br />
          <AnimatedParaText>
            We didn&apos;t know it back then, but{" "}
            <span className=" font-semibold italic underline text-neutral-100">
              in the cracks of a broken city, we had built our own sanctuary
            </span>
            .
          </AnimatedParaText>
        </div>
      </div>
    </section>
  );
};

export default Beginning;
