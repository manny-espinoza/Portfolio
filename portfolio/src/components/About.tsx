import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

export default function About() {
  return (
    <div
      className="h-screen mx-auto p-8 text-center space-y-12 md:space-y-16"
      id="about"
    >
      <motion.h1
        variants={fadeIn("left", 0.8)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true }}
        className="text-[46px] xl:text-[70px] uppercase font-light tracking-[2px] border-b pb-[30px] max-w-[540px] mx-auto"
      >
        About Me
      </motion.h1>
      <div className="flex flex-col items-center space-y-8 md:space-y-12 lg:flex-row lg:justify-around xl:justify-evenly">
        <motion.img
          variants={fadeIn("right", 1.0)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true }}
          src="/Headshot.jpg"
          alt="Profile Picture"
          className="rounded-full mb-4 lg:rounded-[50px] w-[300px] h-[300px] lg:w-[350px] lg:h-[350px] xl:w-[400px] xl:h-[400px] lg:mt-[80px] xl:mt-[46px]"
        />
        <motion.p
          variants={fadeIn("left", 1.0)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true }}
          className="text-justify max-w-[540px] font-light lg:text-[20px]"
        >
          I am a full stack web developer based in San Diego, CA. I have always
          had passions for computers, gaming, and building things from legos to
          cars. Previous work in the food service industry has solidified my
          communication, conflict resolution, and problem-solving skills while
          also placing an emphasis on teamwork. Moving forward, I plan to work
          with a company whose values and goals align with mine, while creating
          amazing pieces of work with my colleagues. Stay tuned to see what my
          latest works look like!
        </motion.p>
      </div>
    </div>
  );
}
