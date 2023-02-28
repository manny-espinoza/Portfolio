import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center pt-20"
    >
      <h1 className="absolute top-24 uppercase tracking-[15px] text-2xl pt-[40px] font-light md:text-3xl md:tracking-[20px] lg:text-4xl lg:tracking-[25px] 2xl:text-5xl 2xl:tracking-[30px]">
        About Me
      </h1>
      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.5,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        src="/Headshot.jpg"
        className="-mb-12 mt-8 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-xl md:w-64 md:h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80 2xl:w-96 2xl:h-96"
      />
      <div className="space-y-10 px-0 md:px-10">
        <p className="text-base max-w-xl">
          I am a full stack web developer based in San Diego, CA. I've always
          had passions for computers, gaming, and building things from legos to
          cars. Previous work in the food service industry has solidified my
          communication, conflict resolution, and problem-solving skills while
          also placing an emphasis on teamwork. Moving forward I plan to work
          with a company who's values and goals I support while creating amazing
          pieces of work with my colleagues. Stay tuned to see what my latest
          works look like!
        </p>
      </div>
    </motion.div>
  );
}
