import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { FaExternalLinkAlt } from "react-icons/fa";

type Props = {};

export default function Welcome({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Full Stack Web Developer",
      "Video Game Enthusiast",
      "Keyboard Extraordinaire",
      "Avid Snowboarder",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="h-screen flex flex-col space-y-12 px-8 items-center justify-center text-center overflow-hidden">
      <h1 className="text-4xl uppercase font-thin tracking-[7px] pt-14 md:text-5xl md:tracking-[12px] lg:text-6xl lg:tracking-[20px] 2xl:text-7xl 2xl:tracking-[30px]">
        Manuel Espinoza
      </h1>
      <img
        className="relative rounded-full h-36 w-36 mx-auto object-cover md:h-40 md:w-40 lg:h-56 lg:w-56"
        src="/favicon.ico"
        alt="Bitmoji"
      />
      <div>
        <h2 className="text-lg uppercase tracking-[15px] md:text-xl md:tracking-[20px] lg:text-3xl lg:font-thin lg:tracking-[25px] 2xl:text-5xl 2xl:tracking-[30px]">
          Software
          <br />
          Engineer
        </h2>
        <h2 className="text-xl md:text-3xl lg:text-4xl font-semibold px-10 pt-10">
          <span className="mr-1">{text}</span>
          <Cursor cursorColor="#663825" />
        </h2>
      </div>
      <h3 className="max-w-md md:text-xl">
        I like building pretty and easy to use websites with my keyboard. Always
        striving and prospering!
      </h3>
      <a
        href="https://docs.google.com/document/d/1zvDdNeG5s2LpjWiq9mCnsOuhVAMO_rMt/edit?usp=sharing&ouid=108805970889923187124&rtpof=true&sd=true"
        target="_blank"
      >
        <FaExternalLinkAlt title="My Resume" className="hover:opacity-100" />
      </a>
    </div>
  );
}
