import Head from "next/head";
import NavBar from "@/components/NavBar";
import Welcome from "@/components/Welcome";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="bg-[#ede1d5] text-[#663825] h-screen snap-y snap-mandatory overflow-x-hidden overflow-y-scroll z-0 scrollbar-thin scrollbar-track-stone-600 scrollbar-thumb-stone-800">
      <Head>
        <title>Manny's Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />

      <section id="welcome" className="snap-center">
        <Welcome />
      </section>

      <section id="about" className="snap-center">
        <About />
      </section>

      <section id="experience" className="snap-center">
        <Experience />
      </section>

      <section id="projects" className="snap-center">
        <Projects />
      </section>

      <section id="contact" className="snap-center">
        <Contact />
      </section>
    </div>
  );
}
