import React from "react";
import { AiFillGithub, AiOutlineLinkedin } from "react-icons/ai";

const Socials = () => {
  return (
    <div className="pointer-events-none absolute left-0 top-0 h-full w-full">
      <div className="absolute bottom-0 left-1/2 flex h-20 w-2/3 -translate-x-1/2 items-center justify-evenly md:left-auto md:right-0 md:top-1/2 md:mx-12 md:h-1/4 md:w-20 md:-translate-x-0 md:-translate-y-1/2 md:flex-col">
        <div className="h-[2px] w-full bg-text md:h-full md:w-[2px]" />
        <AiFillGithub
          className="text pointer-events-auto mx-2 flex-shrink-0 text-4xl duration-200 hover:cursor-pointer hover:text-5xl hover:text-[#f05033] md:mx-0 md:my-2"
          onClick={() => {
            window.open("https://github.com/GoodKidJonesy", "_blank");
          }}
        />
        <div className="h-[2px] w-full bg-text md:h-full md:w-[2px]" />
        <AiOutlineLinkedin
          className="text pointer-events-auto mx-2 flex-shrink-0 text-4xl duration-200 hover:cursor-pointer hover:text-5xl hover:text-[#0a66c2] md:mx-0 md:my-2"
          onClick={() => {
            window.open(
              "https://www.linkedin.com/in/jonas-westh-nielsen/",
              "_blank",
            );
          }}
        />
        <div className="h-[2px] w-full bg-text md:h-full md:w-[2px]" />
      </div>
    </div>
  );
};

export default Socials;
