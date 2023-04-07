import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

export default function About() {
  return (
    <div className="h-screen mx-auto p-8 text-center" id="experience">
      <motion.h1
        variants={fadeIn("down", 0.5)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true }}
        className="text-[46px] uppercase font-light tracking-[2px]"
      >
        Experience
      </motion.h1>
      <motion.div
        variants={fadeIn("up", 0.75)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true }}
        className="flex flex-row overflow-x-scroll overflow-y-hidden snap-x snap-mandatory w-full space-x-10 scrollbar scrollbar-track-black/40 scrollbar-thumb-black/60 mt-[26px] lg:mt-[14px]"
      >
        <article className="bg-white/20 text-center h-[625px] flex-shrink-0 rounded-[10px] p-4 space-y-4 mx-auto w-full lg:w-[60%] xl:w-[40%] snap-center overflow-y-scroll scrollbar-thin scrollbar-track-slate-500 scrollbar-thumb-slate-800 opacity-80 hover:opacity-100">
          <img
            src="PA.png"
            alt="Planet Argon Logo"
            className="w-[90px] h-[90px] mx-auto bg-white rounded-2xl"
          />
          <h3 className="text-3xl font-light">Software Developer Intern</h3>
          <h4 className="text-2xl font-semibold">Planet Argon</h4>
          <p className="text-lg my-1 border-b pb-4">
            February 2023 - March 2023 • 1 mo
          </p>
          <ul className="list-disc text-justify w-5/6 text-[14px] md:text-[18px] lg:text-[20px] mx-auto space-y-1">
            <li>
              Helped client companies maintain their existing Ruby on Rails
              applications by programming clean user interactions and
              experiences, improving SEO to boost client sales and web traffic,
              strengthening security and performance based on client requests,
              and updated bugs/outdated code.
            </li>
            <li>
              Attended team meetings to discuss how communications and workflow
              should be refined as well as reaching a consensus on commonly used
              technological definitions to minimize perplexity.
            </li>
            <li>
              Provided practical feedback on the onboarding process so as to
              revamp company documentation and aid in preparation of future
              employees.
            </li>
            <li>
              Set up the proper coding environments to locally work on client
              websites, which involved diagnosing terminal errors, installing
              necessary dependencies and packages, and implementing clean GitHub
              practices.
            </li>
            <li>
              Wrote a published blog post summarizing the intern experience with
              the company.
            </li>
          </ul>
        </article>
        <article className="bg-white/20 text-center h-[625px] flex-shrink-0 rounded-[10px] p-4 space-y-4 mx-auto w-full lg:w-[60%] xl:w-[40%] snap-center opacity-80 hover:opacity-100">
          <img
            src="LA.png"
            alt="LEARN Academy Logo"
            className="w-[90px] h-[90px] mx-auto bg-white rounded-2xl"
          />
          <h3 className="text-3xl font-light">Web Developer Apprentice</h3>
          <h4 className="text-2xl font-semibold">LEARN Academy</h4>
          <p className="text-lg my-1 border-b pb-4">
            October 2022 - March 2023 • 5 mos
          </p>
          <ul className="list-disc text-justify w-5/6 text-[14px] md:text-[18px] lg:text-[20px] mx-auto space-y-1">
            <li>
              Completed 480+ hours of direct, practical coding experience in a
              full-stack web development bootcamp.
            </li>
            <li>
              Achieved proficiency in building React and Ruby on Rails
              applications while constructing code in pair programming and mob
              programming to promote clear communication.
            </li>
            <li>
              Optimized code bases by utilizing test-driven development to
              efficiently produce applications and properly diagnose errors in
              the program.
            </li>
          </ul>
        </article>
        <article className="bg-white/20 text-center h-[625px] flex-shrink-0 rounded-[10px] p-4 space-y-4 mx-auto w-full lg:w-[60%] xl:w-[40%] snap-center opacity-80 hover:opacity-100">
          <img
            src="Kogi.jpg"
            alt="Kogi BBQ Logo"
            className="w-[90px] h-[90px] mx-auto bg-white rounded-2xl"
          />
          <h3 className="text-3xl font-light">Server / Waiter</h3>
          <h4 className="text-2xl font-semibold">Kogi BBQ</h4>
          <p className="text-lg my-1 border-b pb-4">
            March 2022 - October 2022 • 7 mos
          </p>
          <ul className="list-disc text-justify w-5/6 text-[14px] md:text-[18px] lg:text-[20px] mx-auto space-y-1">
            <li>
              Ensured optimal guest experiences, provided excellent customer
              service in a timely and professional manner, and built customer
              rapport with guests through friendly service and accommodation.
            </li>
          </ul>
        </article>
        <article className="bg-white/20 text-center h-[625px] flex-shrink-0 rounded-[10px] p-4 space-y-4 mx-auto w-full lg:w-[60%] xl:w-[40%] snap-center opacity-80 hover:opacity-100">
          <img
            src="Gen.png"
            alt="Gen Korean BBQ Logo"
            className="w-[90px] h-[90px] mx-auto bg-white rounded-2xl"
          />
          <h3 className="text-3xl font-light">Dining Room Attendant</h3>
          <h4 className="text-2xl font-semibold">Gen Korean BBQ</h4>
          <p className="text-lg my-1 border-b pb-4">
            October 2021 - March 2022 • 5 mos
          </p>
          <ul className="list-disc text-justify w-5/6 text-[14px] md:text-[18px] lg:text-[20px] mx-auto space-y-1">
            <li>
              Monitored and maintained restaurant cleanliness, collaborated with
              team members to enhance internal communications and ensure
              customer satisfaction, and supported coworkers to achieve maximum
              efficiency during peak dining times.
            </li>
          </ul>
        </article>
        <article className="bg-white/20 text-center h-[625px] flex-shrink-0 rounded-[10px] p-4 space-y-4 mx-auto w-full lg:w-[60%] xl:w-[40%] snap-center opacity-80 hover:opacity-100">
          <img
            src="KFT.png"
            alt="Kung Fu Tea Logo"
            className="w-[90px] h-[90px] mx-auto bg-white rounded-2xl"
          />
          <h3 className="text-3xl font-light">Shift Team Lead / Barista</h3>
          <h4 className="text-2xl font-semibold">Kung Fu Tea</h4>
          <p className="text-lg my-1 border-b pb-4">
            January 2020 - October 2021 • 22 mos
          </p>
          <ul className="list-disc text-justify w-5/6 text-[14px] md:text-[18px] lg:text-[20px] mx-auto space-y-1">
            <li>
              Provided prompt and friendly customer service to around 200+ daily
              customers while maintaining high-level organization and
              cleanliness of the café environment by following regularly
              scheduled cleaning of machinery, equipment, and the dining area.
            </li>
            <li>
              Assisted with scheduling and interviews of applicants, developed
              and implemented training programs for new hires, and supervised
              store inventory.
            </li>
          </ul>
        </article>
      </motion.div>
    </div>
  );
}
