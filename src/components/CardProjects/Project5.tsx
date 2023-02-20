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
          src="https://scontent.fbkk22-3.fna.fbcdn.net/v/t1.15752-9/328396936_1155549155145764_4330871776702955314_n.png?_nc_cat=110&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeG8udOyDs3c4QELfsv1YJ5gUlb-EdDmC55SVv4R0OYLnr0vpYQYpSFS0YYupyghory_TAF_kcy2ovqJxcuTFXrt&_nc_ohc=Fr6aEgArgNUAX9NdthE&_nc_ht=scontent.fbkk22-3.fna&oh=03_AdRteCPLb1kY5zYOGPxHXBYRKL1OvFzQYw63P7tbhfuJEg&oe=640AF19C"
          className="-mb-0 md:mb-0 flex-shrink-0 w-40 h-40 rounded-full object-cover md:rounded-lg md:w-60 md:-9 xl:w-[400px] xl:h-[400px]"
        />

        <div className="px-0 md:px-10">
          <h4 className="text-4xl font-light">Portfolio-Web</h4>
          <p className=" font-bold text-2xl mt-1">Tool</p>
          <div className="flex space-x-2 my-2">
            <img className="h-10 w-10 rounded-full" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png" alt="" />
            <img className="h-10 w-10 rounded-full" src="https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_1080,q_100,w_1080/v1/gcs/platform-data-dsc/events/nextjs-boilerplate-logo.png" alt="" />
            <img className="h-10 w-10 rounded-full" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png" alt="" />
          </div>
          <p className="uppercase py-5 text-gray-300">
            A front-end developer portfolio should showcase your skills, work
            samples, and contact information. It should be easy to navigate and
            well organized &nbsp;&nbsp;
            <span className="underline decoration-[#F7AB0A] ">
              Press the icon to view web pages.
            </span>
          </p>

          <ul className="list-disc space-y-5 ml-5 text-lg">
            <li>WORKSHOP</li>
            <SocialIcon
              url="https://portfolio-monthon-maxmonthon.vercel.app/"
              fgColor="gray"
              bgColor="transparent"
            />
            <SocialIcon
              url="https://github.com/monthonkachana/portfolio-max"
              fgColor="gray"
              bgColor="transparent"
            />
         
          </ul>
        </div>
      </article>
    </div>
  );
}
