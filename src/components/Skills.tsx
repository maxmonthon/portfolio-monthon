import { motion } from "framer-motion";
import React from "react";
//Logo
import LogoJS from "./LogoSkill/LogoJS";
import LogoReact from "./LogoSkill/LogoReact";
import LogoNode from "./LogoSkill/LogoNode";
import Logoant from "./LogoSkill/Logoant";
import LogoCss from "./LogoSkill/LogoCss";
import LogoHTML from "./LogoSkill/LogoHTML";
import LogoMongoDB from "./LogoSkill/LogomongoDB";
import LogoSQL from "./LogoSkill/LogoSQL";
import LogoNext from "./LogoSkill/LogoNext";
import LogoExpress from "./LogoSkill/LogoExpress";
import LogoTaliwind from "./LogoSkill/LogoTaliwind";
import LogoBootstrap from "./LogoSkill/LogoBootstrap";
import LogoStyled from "./LogoSkill/LogoStyled";
import LogoTS from "./LogoSkill/LogoTS";
import LogoVS from "./LogoSkill/LogoVS";

type Props = {};

function Skills({}: Props) {
  return (
    <motion.div className="h-screen flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl ">
        Skills
      </h3>
      <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm">
        Hover over askill for currency proficeiency
      </h3>
      <div className="grid grid-cols-4 gap-5">
        <LogoHTML />
        <LogoCss />
        <LogoJS />
        <LogoTS />
        <LogoReact />
        <LogoNode />
        <LogoMongoDB />
        <LogoSQL />
        <LogoExpress />
        <LogoNext />
        <LogoBootstrap />
        <Logoant />
        <LogoTaliwind />
        <LogoStyled />
        <LogoVS />
      </div>
    </motion.div>
  );
}

export default Skills;
