import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { useForm, SubmitHandler } from "react-hook-form";

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
    <div className="h-screen mx-auto p-8 space-y-4 text-center" id="contact">
      <h1 className="text-[46px] uppercase font-light tracking-[2px]">
        Contact Me
      </h1>
      <h3 className="text-2xl font-semibold">Let's get in touch.</h3>
      <div className="flex flex-row items-center justify-center space-x-4">
        <a href="https://github.com/manny-espinoza" target="_blank">
          <FaGithub className="animate-pulse w-8 h-8" />
        </a>
        <p>github.com/manny-espinoza</p>
      </div>
      <div className="flex flex-row items-center justify-center space-x-4">
        <a
          href="https://www.linkedin.com/in/manny-espinoza-dev/"
          target="_blank"
        >
          <FaLinkedin className="animate-pulse w-8 h-8" />
        </a>
        <p>linkedin.com/in/manny-espinoza-dev/</p>
      </div>
      <div className="flex flex-row items-center justify-center space-x-4">
        <FaEnvelope className="animate-pulse w-8 h-8" />
        <p>mannyespinoza123@yahoo.com</p>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col text-black pt-4 lg:pt-2"
      >
        <div>
          <input
            {...register("name")}
            type="text"
            placeholder="Name"
            className="text-left text-[14px] p-2 w-[200px] h-[40px] border-l-2 border-t-2 border-b-[1px] border-black rounded-tl-lg"
          />
          <input
            {...register("email")}
            type="email"
            placeholder="Email"
            className="text-left text-[14px] p-2 w-[200px] h-[40px] border-t-2 border-r-2 border-b-[1px] border-black rounded-tr-lg"
          />
        </div>
        <input
          {...register("subject")}
          type="text"
          placeholder="Subject"
          className="w-[400px] h-[40px] text-left text-[14px] p-2 mx-auto border-l-2 border-r-2 border-b-[1px] border-black"
        />
        <textarea
          {...register("message")}
          placeholder="Message"
          className="w-[400px] h-[300px] text-left text-[14px] p-2 mx-auto resize-none border-l-2 border-r-2 border-b-2 border-black rounded-b-lg"
        ></textarea>
        <button
          type="submit"
          className="bg-sky-950 text-white opacity-80 hover:opacity-100 text-[24px] uppercase font-semibold mx-auto px-4 py-1 rounded-full mt-4"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
