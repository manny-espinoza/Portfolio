import Head from "next/head";
import Welcome from "../components/Welcome";
import Nav from "../components/Nav";
import About from "../components/About";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <>
      <Head>
        <title>Manny's Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="text-white">
        <Welcome />
        <Nav />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </>
  );
}
