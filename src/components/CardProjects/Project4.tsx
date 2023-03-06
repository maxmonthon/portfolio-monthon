import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { SocialIcon } from "react-social-icons";
type Props = {};

export default function Project4({}: Props) {
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
          src="https://user-images.githubusercontent.com/116298646/223089114-1419ae5d-0b79-44c3-9a2f-90e8c6e4497e.png"
          className="-mb-0 md:mb-0 flex-shrink-0 w-40 h-40 rounded-full object-cover md:rounded-lg md:w-60 md:-9 xl:w-[400px] xl:h-[400px]"
        />

        <div className="px-0 md:px-10">
          <h4 className="text-4xl font-light">React-CROUD</h4>
          <p className=" font-bold text-2xl mt-1">Tool</p>
          <div className="flex space-x-2 my-2">
            <img
              className="h-10 w-10 rounded-full"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
            />
            <img
              className="h-10 w-10 rounded-full"
              src="https://www.payoda.com/wp-content/uploads/2021/05/1_mbP4Bjrs8Hshx7IgjsUNSg.jpeg"
              alt=""
            />
            <img
              className="h-10 w-10 rounded-full"
              src="https://mui.com/static/logo.png"
              alt=""
            
        
            />
          </div>
          <p className="uppercase py-5 text-gray-300">
            Practice basic thinking used in programming or web applications
            (add, read, edit, delete) DATABASE data. &nbsp;&nbsp;
            <span className="underline decoration-[#F7AB0A] ">
              Press the icon to view web pages.
            </span>
          </p>

          <ul className="list-disc space-y-5 ml-5 text-lg">
            <li>WORKSHOP</li>
            <SocialIcon
              url="https://github.com/monthonkachana/React-Crud-Api"
              fgColor="gray"
              bgColor="transparent"
            />
          
          </ul>
        </div>
      </article>
    </div>
  );
}
