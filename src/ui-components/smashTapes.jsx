"use client";
import AnimatedHeading from "./animatedHeading";

import { Youtube } from "lucide-react";
import { GlowingEffect } from "@/components/magicui/glowing-effect";
import Image from "next/image";
import Link from "next/link";

import { Geist } from "next/font/google";

const geist = Geist({
  subsets: ["latin"],
});

const SmashTapes = () => {
  return (
    <section className="px-5 md:px-10 lg:px-16 py-5">
      <AnimatedHeading title="The Smash Tapes" />

      <div className="h-fit">
        <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 h-fit">
          <GridItem
            icon={<Youtube className="h-4 w-4 text-neutral-400" />}
            title="You laugh you Die"
            thumbnail="https://img.youtube.com/vi/9EstIHIbluw/maxresdefault.jpg"
            ytLink="https://www.youtube.com/embed/9EstIHIbluw"
          />

          <GridItem
            icon={<Youtube className="h-4 w-4 text-neutral-400" />}
            ytLink="https://www.youtube.com/embed/yjJtOW38kVY"
            title="Introducing New friend in indian serial style|Nepali parody|Hritik"
            thumbnail="https://img.youtube.com/vi/yjJtOW38kVY/maxresdefault.jpg"
          />

          <GridItem
            icon={<Youtube className="h-4 w-4 text-neutral-400" />}
            title="Dialogues and Vines Compilation"
            thumbnail="https://img.youtube.com/vi/oMNq_i8Ow9o/hqdefault.jpg"
            ytLink="https://www.youtube.com/embed/oMNq_i8Ow9o"
          />

          <GridItem
            icon={<Youtube className="h-4 w-4 text-neutral-400" />}
            title="PUBG or Girlfriend??"
            thumbnail="https://img.youtube.com/vi/jIg8WAHB7eQ/maxresdefault.jpg"
            ytLink="https://www.youtube.com/embed/jIg8WAHB7eQ"
          />

          <GridItem
            icon={<Youtube className="h-4 w-4 text-neutral-400" />}
            title="Gift from Friends: Expectation vs. Reality"
            thumbnail="https://img.youtube.com/vi/gHoOR7m1Oy8/maxresdefault.jpg"
            ytLink="https://www.youtube.com/embed/gHoOR7m1Oy8"
          />

          <GridItem
            icon={<Youtube className="h-4 w-4 text-neutral-400" />}
            title="Suicide? After GF Left"
            thumbnail="https://img.youtube.com/vi/1JUnv4qEZsg/maxresdefault.jpg"
            ytLink="https://www.youtube.com/embed/1JUnv4qEZsg"
          />
        </ul>
      </div>
    </section>
  );
};

const GridItem = ({ area, icon, title, thumbnail, ytLink }) => {
  return (
    <li className={`min-h-[14rem] list-none col-span-1`}>
      <div className="relative h-full rounded-2xl border border-neutral-400 md:rounded-3xl p-5">
        <GlowingEffect
          blur={0}
          borderWidth={2}
          spread={80}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
        <div className="border-0.75 relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-6 md:p-6 shadow-[0px_0px_27px_0px_#2D2D2D]">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="w-fit rounded-lg border border-gray-600 p-2">
              {icon}
            </div>
            <Link
              href={ytLink}
              target="_blank"
              className="space-y-3 mt-14 group"
            >
              <Image
                width={600}
                height={600}
                alt={title}
                quality={100}
                loading="lazy"
                className="w-full h-44 lg:h-48 object-cover rounded-2xl overflow-hidden grayscale-75 opacity-75 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 ease-in-out border border-neutral-200 shadow-md"
                src={thumbnail}
              />
              <h3
                className={`${geist.className} tracking-tighter line-clamp-1 pt-0.5 text-xl/[1.375rem] font-light text-balance md:text-2xl/[1.875rem] text-neutral-400 mt-10 ml-1`}
              >
                {title}
              </h3>
            </Link>
          </div>
        </div>
      </div>
    </li>
  );
};

export default SmashTapes;
