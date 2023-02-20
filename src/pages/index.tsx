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
                  src="https://scontent.fbkk22-8.fna.fbcdn.net/v/t1.6435-1/204450176_540190783775963_8359539376295728159_n.jpg?stp=dst-jpg_p200x200&_nc_cat=108&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeEsNJq5ORsM0D8jmpAWes6Rg3OzU1BQocuDc7NTUFChy0qhwrCa93cqy6v1xFXmLLMgXR91CN9SQ11k9XeYy-xb&_nc_ohc=mR5gxoUL0M4AX9KBGXG&tn=ET5GTkiCYZdXcqNj&_nc_ht=scontent.fbkk22-8.fna&oh=00_AfAZ1ruX7nchbQmrDSLK0hAwYokVmDGLm6ViPMaBZ_hlUw&oe=63FB220F"
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
