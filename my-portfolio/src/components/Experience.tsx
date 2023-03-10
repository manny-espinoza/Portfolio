import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function Project({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="h-screen relative flex flex-col overflow-hidden items-center justify-evenly text-left max-w-full mx-auto z-0 md:flex-row"
    >
      <h1 className="absolute top-24 text-2xl font-light uppercase tracking-[15px] pt-[39px] pl-[15px] md:pl-[20px] lg:pl-[24px] xl:pl-[30px] md:text-3xl md:tracking-[20px] lg:text-4xl lg:tracking-[25px] 2xl:text-5xl 2xl:tracking-[30px]">
        Experience
      </h1>
      <div className="w-full flex space-x-5 overflow-x-scroll snap-x snap-mandatory p-10 scrollbar-thin scrollbar-track-stone-600 scrollbar-thumb-stone-800">
        <div className="flex flex-col rounded-lg items-center p-5 mt-32 space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center text-black bg-[#804f3b]/40 hover:opacity-100 opacity-70 transition-opacity duration-200 overflow-hidden">
          {/*START*/}
          <motion.img
            initial={{
              y: -300,
              opacity: 0,
            }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            src="/LEARN-Academy.png" // Image
            className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
          />
          <div className="px-0 md:px-10">
            <h3 className="text-4xl font-light">{/* Position */}Apprentice</h3>
            <p className="font-bold text-2xl mt-1">
              {/* Company */}
              LEARN Academy
            </p>
            <p className="uppercase py-5">October 2022 - March 2023</p>
            <ul className="list-disc space-y-4 ml-5 text-lg">
              <li>
                Completed 480+ hours of direct, practical coding experience in a
                full-stack web development bootcamp.
              </li>
              <li>
                Achieved proficiency in building JavaScript, React, and Ruby
                applications while constructing code in pair programming and mob
                programming to promote clear communication.
              </li>
              <li>
                Optimized codes by utilizing test-driven development to
                efficiently produce applications and properly diagnose errors in
                the program.
              </li>
            </ul>
          </div>
        </div>
        {/*END*/}
      </div>
    </motion.div>
  );
}
