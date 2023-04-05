import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

export default function About() {
  return (
    <div
      className="h-screen mx-auto p-8 flex flex-col lg:flex-row lg:justify-evenly"
      id="welcome"
    >
      <div className="text-center lg:text-left space-y-16 xl:space-y-12 mt-[91px] lg:mt-[80px] xl:mt-[38px] flex flex-col">
        {/*Contains everything but image*/}
        <motion.h1
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true }}
          className="text-[46px] xl:text-[70px] uppercase font-light tracking-[2px]"
        >
          Manuel Espinoza
        </motion.h1>
        <motion.h3
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true }}
          className="text-[46px] xl:text-[70px] uppercase font-semibold tracking-[2px] leading-[0.8]"
        >
          Software
          <br />
          Engineer
        </motion.h3>
        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true }}
          className="text-[30px] xl:text-[50px] font-light"
        >
          <TypeAnimation
            sequence={[
              "Full Stack Web Developer",
              1500,
              "Video Game Lover",
              1500,
              "Keyboard Enthusiast",
              1500,
              "Passionate Snowboarder",
              1500,
            ]}
            speed={50}
            repeat={Infinity}
          />
        </motion.div>
        <motion.p
          variants={fadeIn("up", 0.6)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true }}
          className="max-w-[350px] mx-auto font-light lg:mx-0 xl:text-[20px] xl:max-w-[425px]"
        >
          Welcome to my portfolio! I like building pretty and easy to use
          websites with my keyboard. Always striving for growth and improvement.
        </motion.p>
        <motion.div
          variants={fadeIn("up", 0.7)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true }}
          className="flex flex-row items-center justify-center lg:justify-start space-x-16"
        >
          {/*Button container*/}
          <button>
            <a
              href="https://docs.google.com/document/d/1zvDdNeG5s2LpjWiq9mCnsOuhVAMO_rMt/edit?usp=sharing&ouid=108805970889923187124&rtpof=true&sd=true"
              target="_blank"
              className="bg-blue-950 text-white px-4 py-1 rounded-full xl:text-[26px] opacity-70 hover:opacity-90"
            >
              Resume
            </a>
          </button>
          <a
            href="https://github.com/manny-espinoza"
            target="_blank"
            className="text-[29px] xl:text-[45px] opacity-70 hover:opacity-90"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/manny-espinoza-dev/"
            target="_blank"
            className="text-[29px] xl:text-[45px] opacity-70 hover:opacity-90"
          >
            <FaLinkedin />
          </a>
        </motion.div>
      </div>
      <div className="hidden lg:flex w-[400px] h-[400px] lg:mt-[162px]">
        {/*Image container*/}
        <img src="/favicon.ico" alt="Bitmoji" className="rounded-[50px]" />
      </div>
    </div>
  );
}
