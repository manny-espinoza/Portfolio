import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

export default function Welcome() {
  return (
    <div
      className="h-screen mx-auto p-8 space-y-8 flex flex-col items-center"
      id="welcome"
    >
      <motion.h1
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true }}
        className="text-[30px] md:text-[50px] uppercase font-light tracking-[10px] text-center leading-[1] pt-[60px] lg:pt-[42px]"
      >
        Manuel Espinoza
      </motion.h1>
      <motion.img
        variants={fadeIn("up", 0.4)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true }}
        src="favicon.ico"
        alt="Profile Picture"
      />
      <motion.h3
        variants={fadeIn("up", 0.5)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true }}
        className="text-[40px] uppercase font-semibold tracking-[10px] text-center leading-[1]"
      >
        Software
        <br />
        Engineer
      </motion.h3>
      <motion.div
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true }}
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
          className="text-2xl"
        />
      </motion.div>
      <motion.p
        variants={fadeIn("up", 0.7)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true }}
        className="text-center max-w-sm"
      >
        Welcome to my portfolio! I like building pretty and easy to use websites
        with my keyboard. Always striving for growth and improvement.
      </motion.p>
      <motion.div
        variants={fadeIn("up", 0.8)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true }}
        className="flex items-center justify-center space-x-20"
      >
        <button className="bg-white/20 px-4 py-1 rounded-full hover:opacity-70">
          <a
            href="https://docs.google.com/document/d/1zvDdNeG5s2LpjWiq9mCnsOuhVAMO_rMt/edit?usp=sharing&ouid=108805970889923187124&rtpof=true&sd=true"
            target="_blank"
            rel="noreferrer"
          >
            Resume
          </a>
        </button>
        <button className="text-3xl hover:opacity-70">
          <a
            href="https://github.com/manny-espinoza"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>
        </button>
        <button className="text-3xl hover:opacity-70">
          <a
            href="https://www.linkedin.com/in/manny-espinoza-dev/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>
        </button>
      </motion.div>
    </div>
  );
}
