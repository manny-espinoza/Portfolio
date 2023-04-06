import React from "react";

export default function About() {
  return (
    <div className="h-screen mx-auto p-8 text-center" id="experience">
      <h1 className="text-[46px] xl:text-[70px] uppercase font-light tracking-[2px]">Experience</h1>
      <article className="bg-white/20 text-center h-[625px] rounded-[10px] p-4 mt-[34px] lg:mt-[22px] xl:mt-[0px] space-y-4 overflow-y-scroll w-full lg:w-1/2 xl:w-1/3">
        <img
          src="PA.png"
          alt="Planet Argon Logo"
          className="w-[100px] h-[100px] mx-auto bg-white rounded-2xl"
        />
        <h3 className="text-3xl font-light">Software Developer Intern</h3>
        <h4 className="text-2xl font-semibold">Planet Argon</h4>
        <p className="text-lg my-1 border-b pb-4">February 2023 - March 2023 • 1 mo</p>
        <ul className="list-disc text-justify w-5/6 text-[14px] mx-auto space-y-2">
          <li>
            Helped client companies maintain their existing Ruby on Rails
            applications by programming clean user interactions and experiences,
            improving SEO to boost client sales and web traffic, strengthening
            security and performance based on client requests, and updated
            bugs/outdated code.
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
    </div>
  );
}
