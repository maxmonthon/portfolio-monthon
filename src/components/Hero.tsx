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
        src="https://avatars.githubusercontent.com/u/116298646?s=400&u=58b06723fd47e98fd421fa7e23c035faac69a2c6&v=4"
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
