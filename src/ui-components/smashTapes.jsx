"use client";
import AnimatedHeading from "./animatedHeading";

import { TfiYoutube } from "react-icons/tfi";
import { GlowingEffect } from "@/components/magicui/glowing-effect";
import Image from "next/image";
import Link from "next/link";

import { motion } from "motion/react";

const SmashTapes = () => {
  return (
    <section className="px-5 md:px-10 lg:px-16 py-5">
      <AnimatedHeading title="The Smash Tapes" />

      <div className="h-fit">
        <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 h-fit">
          <GridItem
            title="You laugh you Die"
            thumbnail="https://img.youtube.com/vi/9EstIHIbluw/maxresdefault.jpg"
            ytLink="https://www.youtube.com/embed/9EstIHIbluw"
          />

          <GridItem
            title="Types of People On Valentines Day||Hritik||"
            thumbnail="https://img.youtube.com/vi/6PrkcUOkD9U/maxresdefault.jpg"
            ytLink="https://www.youtube.com/embed/6PrkcUOkD9U"
          />

          <GridItem
            title="When Chimeki Changes WIFI PASSWORD||NEPALI FUNNY VIDEO ||Hritik||"
            thumbnail="https://img.youtube.com/vi/gDXdGBJxGgU/maxresdefault.jpg"
            ytLink="https://www.youtube.com/embed/gDXdGBJxGgU"
          />

          <GridItem
            title="STUDENTS BEFORE AND DURING EXAMS|| HRITIK|| √"
            thumbnail="https://img.youtube.com/vi/_fcPJ8Y8YC4/maxresdefault.jpg"
            ytLink="https://www.youtube.com/embed/_fcPJ8Y8YC4"
          />

          <GridItem
            ytLink="https://www.youtube.com/embed/yjJtOW38kVY"
            title="Introducing New friend in indian serial style|Nepali parody|Hritik"
            thumbnail="https://img.youtube.com/vi/yjJtOW38kVY/maxresdefault.jpg"
          />

          <GridItem
            ytLink="https://www.youtube.com/embed/Hksy1hyKNCA"
            title="The Trust Issue"
            thumbnail="https://img.youtube.com/vi/Hksy1hyKNCA/maxresdefault.jpg"
          />

          <GridItem
            ytLink="https://www.youtube.com/embed/JCm0WSajfdk"
            title="Preparing For Parties||Boys Vs. Girls|| Hritik||"
            thumbnail="https://img.youtube.com/vi/JCm0WSajfdk/maxresdefault.jpg"
          />

          <GridItem
            ytLink="https://www.youtube.com/embed/8hBu0ZYhXUU"
            title="Nepali Moms Be Like||Hritik"
            thumbnail="https://img.youtube.com/vi/8hBu0ZYhXUU/maxresdefault.jpg"
          />

          <GridItem
            title="PUBG or Girlfriend??"
            thumbnail="https://img.youtube.com/vi/jIg8WAHB7eQ/maxresdefault.jpg"
            ytLink="https://www.youtube.com/embed/jIg8WAHB7eQ"
          />

          <GridItem
            title="Kasto Nindra Lagyo Yar ||Hritik"
            thumbnail="https://img.youtube.com/vi/bzOEWsz0Vvg/maxresdefault.jpg"
            ytLink="https://www.youtube.com/embed/bzOEWsz0Vvg"
          />

          <GridItem
            title="Worldcup days vs. other days|World cup special|Hritik"
            thumbnail="https://img.youtube.com/vi/LeRh5SHjz-Y/maxresdefault.jpg"
            ytLink="https://www.youtube.com/embed/LeRh5SHjz-Y"
          />

          <GridItem
            title="Suicide? After GF Left"
            thumbnail="https://img.youtube.com/vi/1JUnv4qEZsg/maxresdefault.jpg"
            ytLink="https://www.youtube.com/embed/1JUnv4qEZsg"
          />
        </ul>
      </div>
    </section>
  );
};

const GridItem = ({ title, thumbnail, ytLink }) => {
  return (
    <motion.li
      initial={{
        scale: 0,
        filter: "blur(50px)",
      }}
      whileInView={{
        scale: 1,
        filter: "blur(0px)",
        transition: {
          type: "tween",
          stiffness: 200,
          duration: 0.3,
          delay: 0.1,
        },
      }}
      className={`min-h-[14rem] list-none col-span-1`}
    >
      <div className="relative h-full rounded-2xl border border-neutral-400 md:rounded-3xl p-5">
        <GlowingEffect
          spread={20}
          glow={true}
          disabled={false}
          proximity={44}
          inactiveZone={0.01}
          borderWidth={2}
        />
        <div className="border-0.75 relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-6 md:p-6 shadow-[0px_0px_27px_0px_#2D2D2D]">
          <div className="relative flex flex-1 flex-col justify-between gap-3 group">
            <div className="w-fit rounded-lg border border-gray-600 p-2">
              <TfiYoutube className="size-6 text-neutral-400 group-hover:text-neutral-200 transition-colors duration-300 ease-in-out" />
            </div>
            <Link href={ytLink} target="_blank" className="space-y-3 mt-14">
              <div className="w-full h-44 lg:h-48 rounded-2xl border border-neutral-300 p-1 overflow-hidden">
                <Image
                  width={800}
                  height={800}
                  alt={title}
                  quality={100}
                  loading="lazy"
                  className="w-full h-full border-[1.5px] border-dotted border-neutral-400 object-cover rounded-[12px] grayscale-75 opacity-75 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 ease-in-out"
                  src={thumbnail}
                />
              </div>

              <h3 className="tracking-tight line-clamp-1 pt-0.5 text-xl text-balance text-neutral-400 group-hover:text-neutral-200 transition-colors duration-300 ease-in-out mt-5 ml-1 font-black">
                {title}
              </h3>
            </Link>
          </div>
        </div>
      </div>
    </motion.li>
  );
};

export default SmashTapes;
