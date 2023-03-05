import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { SocialIcon } from "react-social-icons";
type Props = {};

export default function Project3({}: Props) {
  return (
    <div>
      <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
        <motion.img
          initial={{
            y: -100,
            opacity: 0,
          }}
          transition={{ duration: 1.2 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          src="https://user-images.githubusercontent.com/116298646/212898379-c8eded2b-db24-4611-9c48-873632816615.png"
          className="-mb-0 md:mb-0 flex-shrink-0 w-40 h-40 rounded-full object-cover md:rounded-lg md:w-60 md:-9 xl:w-[400px] xl:h-[400px]"
        />

        <div className="px-0 md:px-10">
          <h4 className="text-4xl font-light">Clone-Netflix</h4>
          <p className=" font-bold text-2xl mt-1">Tool</p>
          <div className="flex space-x-2 my-2">
            <img
              className="h-10 w-10 rounded-full"
              src="https://user-images.githubusercontent.com/116298646/212898379-c8eded2b-db24-4611-9c48-873632816615.png"
              alt=""
            />
            <img
              className="h-10 w-10 rounded-full"
              src="https://logospng.org/download/css-3/logo-css-3-2048.png"
              alt=""
            />
            <img
              className="h-10 w-10 rounded-full"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png"
              alt=""
            />
            <img
              className="h-10 w-10 rounded-full"
              src="https://reactjs.org/logo-og.png"
              alt=""
            />
            <img
              className="h-10 w-10 rounded-full"
              src="https://raw.githubusercontent.com/styled-components/brand/master/styled-components.png"
              alt=""
            />
          </div>
          <p className="uppercase py-5 text-gray-300">
            This project is a simplified front end clone of netflix. It was
            created with React and taliwindcss to learn responsive web
            &nbsp;&nbsp;
            <span className="underline decoration-[#F7AB0A] ">
              Press the icon to view web pages.
            </span>
          </p>

          <ul className="list-disc space-y-5 ml-5 text-lg">
            <li>WORKSHOP</li>
            <SocialIcon
              url="https://clone-nneetflix-devmax.netlify.app/"
              fgColor="gray"
              bgColor="transparent"
            />
            <SocialIcon
              url="https://github.com/monthonkachana/clone-netflix"
              fgColor="gray"
              bgColor="transparent"
            />
          
          </ul>
        </div>
      </article>
    </div>
  );
}
