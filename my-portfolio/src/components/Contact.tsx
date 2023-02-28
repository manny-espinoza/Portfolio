import React from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Props = {};

export default function Contact({}: Props) {
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:mannyespinoza123@yahoo.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message}`;
  };

  return (
    <div className="h-screen relative flex flex-col text-center md:text-left max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h1 className="absolute top-24 uppercase tracking-[15px] text-2xl pt-[39px] font-light md:text-3xl md:tracking-[20px] lg:text-4xl lg:tracking-[25px] 2xl:text-5xl 2xl:tracking-[30px]">
        Contact Me
      </h1>
      <div className="flex flex-col space-y-8 md:space-y-10">
        <h3 className="text-3xl pt-32 font-medium text-center">
          Looking forward to
          <br />
          working with everybody!
        </h3>
        <div className="space-y-6">
          <div className="flex items-center space-x-5 justify-center">
            <a href="https://github.com/manny-espinoza">
              <FaGithub className="h-7 w-7 animate-pulse" />
            </a>
            <p className="text-lg md:text-xl">github.com/manny-espinoza</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <a href="https://www.linkedin.com/in/manny-espinoza-dev/">
              <FaLinkedin className="h-7 w-7 animate-pulse" />
            </a>
            <p className="text-lg md:text-xl">
              linkedin.com/in/manny-espinoza-dev/
            </p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <FaEnvelope className="h-7 w-7 animate-pulse" />
            <p className="text-lg md:text-xl">mannyespinoza123@yahoo.com</p>
          </div>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-fit mx-auto"
        >
          <div className="flex space-x-2">
            <input
              {...register("name")}
              placeholder="Name"
              className="contactInput"
              type="text"
            />
            <input
              {...register("email")}
              placeholder="Email"
              className="contactInput"
              type="email"
            />
          </div>
          <input
            {...register("subject")}
            placeholder="Subject"
            className="contactInput"
            type="text"
          />
          <textarea
            {...register("message")}
            placeholder="Message"
            className="contactInput resize-none h-32"
          />
          <button
            type="submit"
            className="bg-[#804f3b] text-white py-5 px-10 rounded-md font-bold text-lg"
          >
            Submit
          </button>
        </form>
      </div>
      <footer className="-mb-16 md:-mb-10 font-semibold w-screen">
        <div className="flex space-x-2 items-center justify-center">
          <Link href="#welcome">
            <p className="hover:underline">Back to Top</p>
          </Link>
          <p className="text-lg">|</p>
          <p>© 2023 Manuel Espinoza. All rights reserved</p>
        </div>
      </footer>
    </div>
  );
}
