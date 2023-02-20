import { motion } from "framer-motion";
import React from "react";
//CardProject
import Project1 from "./CardProjects/Project1"
import Project2 from "./CardProjects/Project2";
import Project3 from "./CardProjects/Project3";
import Project4 from "./CardProjects/Project4";
import Project5 from "./CardProjects/Project5";
import Project6 from "./CardProjects/Project6";

type Props = {};

function Projects({}: Props) {
  return (
    <motion.div className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-10 uppercase tracking-[20px] text-gray-500 text-2xl ">
        Projects
      </h3>

      <div className="w-full flex space-x-5 overflow-x-scroll
       p-10 snap-x snap-mandatory
       scrollbar
     scrollbar-track-gray-400/20
     scrollbar-thumb-[#F7AB0A]/80">
        
        <Project1/>
        <Project2/>
        <Project3/>
        <Project4/>
        <Project5/>
        <Project6/>
      
        
      </div>
    </motion.div>
  );
}

export default Projects;
