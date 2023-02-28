import Head from "next/head";
import Link from "next/link";
//componens
import About from "@/components/About";
import ContactMe from "@/components/ContactMe";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <>
      <div
        className=" bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory
    overflow-scroll overflow-x-hidden z-0 
    scrollbar
    scrollbar-track-gray-400/20
    scrollbar-thumb-[#F7AB0A]/80"
      >
        <Head>
          <title>Portfolio-Max</title>
        </Head>
        <div>
          <Header />

          <section id="hero" className="snap-center ">
            <Hero />
          </section>

          <section id="about" className="snap-center">
            <About />
          </section>
          <section id="skill" className="snap-center">
            <Skills />
          </section>
          <section id="projects" className="snap-center">
            <Projects />
          </section>

    

          <section id="contact" className="snap-center">
            <ContactMe />
          </section>

          {/* ---------------------------------------------------- */}
          {/* link click icon */}
          <Link href="#hero">
            <footer className="sticky bottom-5 w-full cursor-pointer">
              <div className="flex items-center justify-center">
                <img
                  className="h-10 w-10 rounded-full  filter grayscale hover:grayscale-0
      cursor-pointer"
                  src="https://avatars.githubusercontent.com/u/116298646?s=400&u=58b06723fd47e98fd421fa7e23c035faac69a2c6&v=4"
                  alt=""
                />
              </div>
            </footer>
          </Link>
        </div>
      </div>
    </>
  );
}
