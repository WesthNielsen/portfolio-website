import React from "react";
import { FaReact, FaJava } from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiFigma, SiCsharp } from "react-icons/si";
import { IoLogoCss3 } from "react-icons/io";

const SkillList = () => {
  return (
    <div className="w-full h-auto flex justify-evenly text-3xl md:text-6xl">
      <FaReact className="hover:scale-125 duration-200 hover:text-[#61DAFB]" />
      <SiTypescript className="hover:scale-125 duration-200 hover:text-[#007ACC]" />
      <IoLogoCss3 className="hover:scale-125 duration-200 hover:text-[#1572B6]" />
      <SiTailwindcss className="hover:scale-125 duration-200 hover:text-[#38B2AC]" />
      <SiFigma className="hover:scale-125 duration-200 hover:text-[#A259FF]" />
      <FaJava className="hover:scale-125 duration-200 hover:text-[#D00000]" />
      <SiCsharp className="hover:scale-125 duration-200 hover:text-[#239120]" />
    </div>
  );
};

export default SkillList;
