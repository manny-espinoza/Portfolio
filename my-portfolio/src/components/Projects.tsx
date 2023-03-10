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
        Projects
      </h1>
      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 pt-16 md:pt-36 scrollbar-thin scrollbar-track-stone-600 scrollbar-thumb-stone-800">
        <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
          {/*START*/}
          <motion.img
            initial={{
              y: -300,
              opacity: 0,
            }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            src="/FlavianFairway.png" // Image
            className="max-h-[200px] md:max-h-[300px] shadow-lg"
          />
          <div className="space-y-10 px-0 md:px-10 max-w-6xl">
            <h3 className="text-3xl font-semibold text-center">
              {/* Title */}Flavian Fairway
            </h3>
            <p className="text-justify md:text-left max-w-sm">
              {/* Text */}
              The final, capstone project from my time with the LEARN Academy
              Web Development Bootcamp. In this snowboard metrics tracking app,
              my team members and I created a full stack web application from
              scratch, utilizing React, Ruby on Rails, and Devise User
              Authentication technologies with full CRUD actions.
            </p>
            <div className="text-center justify-center space-x-8">
              <a href="https://flavian-fairway.onrender.com/" target="_blank">
                <button className="bg-[#804f3b] text-[#ede1d5] w-32 font-semibold p-2 rounded-lg hover:opacity-80">
                  Check it out!
                </button>
              </a>
              <a
                href="https://github.com/Under-Par-Gladiators/Flavian-Fairway"
                target="_blank"
              >
                <button className="bg-[#804f3b] text-[#ede1d5] w-32 font-semibold p-2 rounded-lg hover:opacity-80">
                  GitHub
                </button>
              </a>
            </div>
          </div>
        </div>
        {/*END*/}

        <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
          {/*START*/}
          <motion.img
            initial={{
              y: -300,
              opacity: 0,
            }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            src="/Cats.png" // Image
            className="max-h-[200px] md:max-h-[300px] shadow-lg"
          />
          <div className="space-y-10 px-0 md:px-10 max-w-6xl">
            <h3 className="text-3xl font-semibold text-center">
              {/* Title */}Cat Tinder
            </h3>
            <p className="text-justify md:text-left max-w-sm">
              {/* Text */}
              My first project with the LEARN Academy Web Development Bootcamp
              where we built a decoupled, full stack application. Handled with a
              React frontend and a Ruby on Rails backend, this project put the
              culmination of everything we had learned into practice for the
              first time and I had a lot of fun building it!
            </p>
            <div className="text-center justify-center space-x-8">
              <a
                href="https://github.com/learn-academy-2022-golf/cat-tinder-frontend-siamese-me-gg"
                target="_blank"
              >
                <button className="bg-[#804f3b] text-[#ede1d5] w-32 font-semibold p-2 rounded-lg hover:opacity-80">
                  Check it out!
                </button>
              </a>
              <a
                href="https://github.com/learn-academy-2022-golf/cat-tinder-frontend-siamese-me-gg"
                target="_blank"
              >
                <button className="bg-[#804f3b] text-[#ede1d5] w-32 font-semibold p-2 rounded-lg hover:opacity-80">
                  GitHub
                </button>
              </a>
            </div>
          </div>
        </div>
        {/*END*/}
      </div>
      <div className="w-full absolute top-[30%] bg-[#ffffff]/50 left-0 h-[500px] -skew-y-12" />
    </motion.div>
  );
}
