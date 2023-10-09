import React from "react";
import { AiFillGithub, AiOutlineLinkedin } from "react-icons/ai";

const Socials = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
      <div className="absolute bottom-0 md:top-1/2 left-1/2 md:left-auto md:right-0 -translate-x-1/2 md:-translate-x-0 md:-translate-y-1/2 w-2/3 md:w-20 h-20 md:h-1/4 md:mx-12 flex md:flex-col justify-evenly items-center">
        <div className="w-full md:w-[2px] h-[2px] md:h-full bg-text" />
        <AiFillGithub
          className="pointer-events-auto text text-4xl mx-2 md:mx-0 md:my-2 flex-shrink-0 hover:cursor-pointer hover:text-5xl duration-200 hover:text-[#f05033]"
          onClick={() => {
            window.open("https://github.com/GoodKidJonesy", "_blank");
          }}
        />
        <div className="w-full md:w-[2px] h-[2px] md:h-full bg-text" />
        <AiOutlineLinkedin
          className="pointer-events-auto text text-4xl mx-2 md:mx-0 md:my-2 flex-shrink-0 hover:cursor-pointer hover:text-5xl duration-200 hover:text-[#0a66c2]"
          onClick={() => {
            window.open(
              "https://www.linkedin.com/in/jonas-westh-nielsen/",
              "_blank"
            );
          }}
        />
        <div className="w-full md:w-[2px] h-[2px] md:h-full bg-text" />
      </div>
    </div>
  );
};

export default Socials;
