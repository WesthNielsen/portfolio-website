import React from "react";
import { AiFillGithub, AiOutlineLinkedin } from "react-icons/ai";

const Socials = () => {
  return (
    <div className="absolute top-1/2 right-0 transform -translate-y-1/2 w-20 h-1/4 mx-12  flex flex-col justify-evenly items-center">
        <div className="w-[2px] h-full bg-text"/>
        <AiFillGithub className="text text-4xl my-2 flex-shrink-0 hover:cursor-pointer hover:text-5xl duration-200 hover:text-[#f05033]" onClick={() => {window.open("https://github.com/GoodKidJonesy", "_blank");}}/>
        <div className="w-[2px] h-full bg-text"/>
        <AiOutlineLinkedin className="text text-4xl my-2 flex-shrink-0 hover:cursor-pointer hover:text-5xl duration-200 hover:text-[#0a66c2]" onClick={() => {window.open("https://www.linkedin.com/in/jonas-westh-nielsen/", "_blank");}}/>
        <div className="w-[2px] h-full bg-text"/>
    </div>
  );
};

export default Socials;
