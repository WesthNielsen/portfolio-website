import React from "react";
import { FaReact, FaJava } from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiFigma, SiCsharp } from "react-icons/si";
import { IoLogoCss3 } from "react-icons/io";

const SkillList = () => {
  return (
    <div className="flex h-min w-full justify-evenly text-3xl md:text-4xl lg:text-6xl">
      <FaReact className="duration-200 hover:scale-125 hover:text-[#61DAFB]" />
      <SiTypescript className="duration-200 hover:scale-125 hover:text-[#007ACC]" />
      <IoLogoCss3 className="duration-200 hover:scale-125 hover:text-[#1572B6]" />
      <SiTailwindcss className="duration-200 hover:scale-125 hover:text-[#38B2AC]" />
      <SiFigma className="duration-200 hover:scale-125 hover:text-[#A259FF]" />
      <FaJava className="duration-200 hover:scale-125 hover:text-[#D00000]" />
      <SiCsharp className="duration-200 hover:scale-125 hover:text-[#239120]" />
    </div>
  );
};

export default SkillList;
