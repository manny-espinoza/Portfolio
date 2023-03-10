import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function Experience({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="h-screen relative flex flex-col overflow-hidden items-center justify-evenly text-left max-w-full mx-auto z-0 md:flex-row"
    >
      <h1 className="absolute top-24 text-2xl font-light uppercase tracking-[15px] pt-[40px] pl-[15px] md:pl-[20px] lg:pl-[24px] xl:pl-[30px] md:text-3xl md:tracking-[20px] lg:text-4xl lg:tracking-[25px] 2xl:text-5xl 2xl:tracking-[30px]">
        Experience
      </h1>

      <div></div>
    </motion.div>
  );
}
