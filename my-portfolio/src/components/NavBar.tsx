import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { IoMdHome } from "react-icons/io";

type Props = {};

export default function NavBar({}: Props) {
  return (
    <div className="bg-[#804f3b] sticky top-0 flex items-center justify-between px-4 md:px-24 lg:px-36 xl:px-48 2xl:px-60 h-20 max-w-full mx-auto z-20">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1,
        }}
        className="flex flex-row"
      >
        <a href="/" className="text-[#ede1d5] hover:text-[#663825]">
          <IoMdHome />
        </a>
      </motion.div>
      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1,
        }}
        className="flex flex-row gap-8"
      >
        <Link href="#about">
          <button className="welcomeButtons">About</button>
        </Link>
        <Link href="#projects">
          <button className="welcomeButtons">Projects</button>
        </Link>
        <Link href="#contact">
          <button className="welcomeButtons">Contact</button>
        </Link>
      </motion.div>
    </div>
  );
}
