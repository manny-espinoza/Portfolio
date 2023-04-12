import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

export default function About() {
  return (
    <div className="h-screen mx-auto p-8 text-center relative" id="projects">
      <motion.h1
        variants={fadeIn("down", 0.5)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true }}
        className="text-[46px] uppercase font-light tracking-[2px]"
      >
        Projects
      </motion.h1>
      <motion.div
        variants={fadeIn("up", 0.75)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true }}
        className="max-w-[600px] flex flex-row overflow-x-scroll snap-x snap-mandatory mx-auto space-x-40 scrollbar scrollbar-track-slate-500 scrollbar-thumb-slate-800"
      >
        <div className="w-full flex flex-col space-y-8 flex-shrink-0 snap-center mb-8 mt-[66px] md:mt-[40px] lg:mt-[28px]">
          <img
            src="/FlavianFairway.png"
            alt="Flavian Fairway"
            className="max-h-[200px] md:max-h-[300px] shadow-lg mx-auto"
          />
          <h3 className="text-4xl font-semibold">Flavian Fairway</h3>
          <p className="text-justify max-w-[600px] mx-auto">
            The final, capstone project from my time with the LEARN Academy Web
            Development Bootcamp. In this snowboard metrics tracking app, my
            team members and I created a full stack web application from
            scratch, utilizing React, Ruby on Rails, and Devise User
            Authentication technologies with full CRUD actions.
          </p>
          <div className="space-x-6">
            <button className="btn w-[150px] py-1 rounded-full">
              <a
                href="https://github.com/Under-Par-Gladiators/Flavian-Fairway"
                target="_blank"
              >
                GitHub
              </a>
            </button>
          </div>
        </div>
        <div className="w-full flex flex-col space-y-8 flex-shrink-0 snap-center mb-8 mt-[66px] md:mt-[40px] lg:mt-[28px]">
          <img
            src="/Cats.png"
            alt="Cat Tinder"
            className="max-h-[200px] md:max-h-[300px] shadow-lg mx-auto"
          />
          <h3 className="text-4xl font-semibold">Cat Tinder</h3>
          <p className="text-justify max-w-[600px] mx-auto">
            My first project with the LEARN Academy Web Development Bootcamp
            where we built a decoupled, full stack application. Handled with a
            React frontend and a Ruby on Rails backend, this project put the
            culmination of everything we had learned into practice for the first
            time and I had a lot of fun building it!
          </p>
          <div className="space-x-6">
            <button className="btn w-[150px] py-1 rounded-full">
              <a
                href="https://github.com/learn-academy-2022-golf/cat-tinder-frontend-siamese-me-gg"
                target="_blank"
              >
                GitHub
              </a>
            </button>
          </div>
        </div>
        <div className="w-full flex flex-col space-y-8 flex-shrink-0 snap-center mb-8 mt-[66px] md:mt-[40px] lg:mt-[28px]">
          <img
            src="/TicTacToe.png"
            alt="Tic Tac Toe"
            className="max-h-[200px] md:max-h-[300px] shadow-lg mx-auto"
          />
          <h3 className="text-4xl font-semibold">Tic Tac Toe</h3>
          <p className="text-justify max-w-[600px] mx-auto">
            Classic Tic Tac Toe. Take turns playing with a friend on a single
            device! Built using ReactJS.
          </p>
          <div className="space-x-6">
            <button className="btn w-[150px] py-1 rounded-full">
              <a
                href="https://tic-tac-toe-manny-espinoza.vercel.app/"
                target="_blank"
              >
                Check it out!
              </a>
            </button>
            <button className="btn w-[150px] py-1 rounded-full">
              <a
                href="https://github.com/manny-espinoza/TicTacToe"
                target="_blank"
              >
                GitHub
              </a>
            </button>
          </div>
        </div>
      </motion.div>
      <div className="w-full absolute top-[27%] bg-slate-500/20 left-0 h-[400px] -skew-y-12 -z-10" />
    </div>
  );
}
