import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { useForm, SubmitHandler } from "react-hook-form";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function About() {
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:mannyespinoza123@yahoo.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message}`;
  };

  return (
    <div
      className="h-screen mx-auto p-8 space-y-4 text-center lg:text-left flex flex-col lg:flex-row lg:justify-around xl:justify-evenly bg-black/20"
      id="contact"
    >
      <div className="space-y-4 lg:space-y-16">
        <motion.h1
          variants={fadeIn("right", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true }}
          className="text-[46px] lg:text-[60px] uppercase font-light tracking-[2px]"
        >
          Contact Me
        </motion.h1>
        <motion.h3
          variants={fadeIn("right", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true }}
          className="text-2xl lg:text-[40px] font-semibold lg:pt-[50px]"
        >
          Let's get in touch.
        </motion.h3>
        <motion.div
          variants={fadeIn("right", 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true }}
          className="flex flex-row items-center justify-center lg:justify-start space-x-4"
        >
          <a href="https://github.com/manny-espinoza" target="_blank">
            <FaGithub className="animate-pulse w-8 h-8 lg:w-12 lg:h-12" />
          </a>
          <p className="lg:text-2xl lg:font-light">github.com/manny-espinoza</p>
        </motion.div>
        <motion.div
          variants={fadeIn("right", 0.6)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true }}
          className="flex flex-row items-center justify-center lg:justify-start space-x-4"
        >
          <a
            href="https://www.linkedin.com/in/manny-espinoza-dev/"
            target="_blank"
          >
            <FaLinkedin className="animate-pulse w-8 h-8 lg:w-12 lg:h-12" />
          </a>
          <p className="lg:text-2xl lg:font-light">
            linkedin.com/in/manny-espinoza-dev/
          </p>
        </motion.div>
        <motion.div
          variants={fadeIn("right", 0.7)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true }}
          className="flex flex-row items-center justify-center lg:justify-start space-x-4"
        >
          <FaEnvelope className="animate-pulse w-8 h-8 lg:w-12 lg:h-12" />
          <p className="lg:text-2xl lg:font-light">
            mannyespinoza123@yahoo.com
          </p>
        </motion.div>
      </div>
      <motion.form
        variants={fadeIn("left", 0.8)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true }}
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col text-black pt-4 lg:pt-[85px]"
      >
        <div>
          <input
            {...register("name")}
            type="text"
            placeholder="Name"
            className="text-left text-[14px] lg:text-[16px] p-2 w-[200px] h-[40px] lg:w-[225px] lg:h-[50px] border-l-2 border-t-2 border-b-[1px] border-black rounded-tl-lg hover:border-sky-600"
          />
          <input
            {...register("email")}
            type="email"
            placeholder="Email"
            className="text-left text-[14px] lg:text-[16px] p-2 w-[200px] h-[40px] lg:w-[225px] lg:h-[50px] border-t-2 border-r-2 border-b-[1px] border-black rounded-tr-lg hover:border-sky-600"
          />
        </div>
        <input
          {...register("subject")}
          type="text"
          placeholder="Subject"
          className="w-[400px] h-[40px] lg:w-[450px] lg:h-[50px] text-left text-[14px] lg:text-[16px] p-2 mx-auto border-l-2 border-r-2 border-b-[1px] border-black hover:border-sky-600"
        />
        <textarea
          {...register("message")}
          placeholder="Message"
          className="w-[400px] h-[300px] lg:w-[450px] lg:h-[400px] text-left text-[14px] lg:text-[16px] p-2 mx-auto resize-none border-l-2 border-r-2 border-b-2 border-black rounded-b-lg hover:border-sky-600"
        ></textarea>
        <button
          type="submit"
          className="bg-sky-950 text-white opacity-80 hover:opacity-100 text-[24px] uppercase font-semibold mx-auto px-4 py-1 rounded-full mt-4 lg:mt-12"
        >
          Submit
        </button>
      </motion.form>
    </div>
  );
}
