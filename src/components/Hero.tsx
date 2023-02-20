import Link from "next/link";
import React from "react";
//จัดการข้อความ
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";

export default function Hero() {
  const [text, count] = useTypewriter({
    words: [`Hi My Name's Max `,
     "Monthon Kanchana",
      "<HelloWord/>"
    ],

    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center overflow-hidden text-center">
      <BackgroundCircles />
      <img
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
        src="https://scontent.fbkk22-8.fna.fbcdn.net/v/t1.6435-1/204450176_540190783775963_8359539376295728159_n.jpg?stp=dst-jpg_p200x200&_nc_cat=108&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeEsNJq5ORsM0D8jmpAWes6Rg3OzU1BQocuDc7NTUFChy0qhwrCa93cqy6v1xFXmLLMgXR91CN9SQ11k9XeYy-xb&_nc_ohc=mR5gxoUL0M4AX9KBGXG&tn=ET5GTkiCYZdXcqNj&_nc_ht=scontent.fbkk22-8.fna&oh=00_AfAZ1ruX7nchbQmrDSLK0hAwYokVmDGLm6ViPMaBZ_hlUw&oe=63FB220F"
        alt=""
      />
      <div className="z-20">
        <h2 className=" text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
          Computer Science
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold px-10">
          <span>{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>
        <div className="pt-5">
          <Link href="#about">
            <button className="heroButton">ABOUT</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">PROJECTS</button>
          </Link>
          <Link href="#skill">
            <button className="heroButton">SKILLS</button>
          </Link>
          <Link href="#contact">
            <button className="heroButton">Contack</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
