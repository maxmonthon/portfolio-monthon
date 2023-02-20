import { motion, MotionConfig } from "framer-motion";
import React from "react";

type Props = {
  directionLeft?: boolean;
};

function Logoskill({ directionLeft }: Props) {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{
          x: directionLeft ? -200 : 200,
          opacity: 0,
        }}
        transition={{
          duration: 1,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTySLJ4gKWqyxpa4p9_Hd5bo6ZVzFoZQA_tYA&usqp=CAU"
        className="rounded-full border border-gray-500 object-cover w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out"
      />
      <div
        className="absolute opacity-0 group-hover:opacity-80 transition duration-300 
      ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0 "
      >
        <div className="flex items-center justify-center h-full">
          <p className="text-3xl font-bold text-black opacity-100 ">80%</p>
        </div>
      </div>
    </div>
  );
}

export default Logoskill;
