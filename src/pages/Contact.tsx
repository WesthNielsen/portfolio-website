import React, { useEffect } from "react";
import { AiFillGithub, AiOutlineLinkedin } from "react-icons/ai";
import Underline from "../components/Underline";
import ParticlesComponent from "../components/ParticalsComponent";

const Contact = () => {
  useEffect(() => {
    const contactContainer = document.getElementById("contactContainer");
    if (contactContainer) {
      setTimeout(() => {
        contactContainer.classList.remove("scale-0");
        contactContainer.classList.remove("opacity-0");
        contactContainer.classList.remove("-translate-y-1/2");
        contactContainer.classList.remove("translate-x-48");
      }, 100);
    }
  }, []);

  return (
    <div
      id="contactContainer"
      className="w-full h-full flex items-center justify-center scale-0 duration-1000 ease-in-out opacity-0 -translate-y-1/2 translate-x-48"
    >
      <div className="w-4/6 h-3/5 flex items-center justify-center text-text bg-background">
        <div className="flex items-center justify-start flex-col h-full w-full">
          <h1 className="text-4xl font-bold mb-16">
            Did I pique your <i>interest?</i>
          </h1>
          <h2 className="text-2xl font-semibold italic mb-8">Reach out at:</h2>

          <div>
            <h3 className="text-xl underline mb-4">
              <a href="mailto:jo.westh@gmail.com">jo.westh@gmail.com</a>
            </h3>
            <div className="w-full flex justify-evenly text-3xl">
              <AiFillGithub
                className="cursor-pointer"
                onClick={() =>
                  window.open("https://github.com/GoodKidJonesy", "_blank")
                }
              />
              <AiOutlineLinkedin
                className="cursor-pointer"
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/jonas-westh-nielsen/",
                    "_blank"
                  )
                }
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-4/6 h-3/5 border-2 rounded-xl duration-500 border-accent shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#972bc5,0_0_15px_#972bc5,0_0_30px_#972bc5] absolute"></div>
      <div className="w-4/6 h-3/5 border-2 rounded-xl duration-500 border-accent shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,inset_0_0_5px_#972bc5,inset_0_0_15px_#972bc5,inset_0_0_30px_#972bc5] absolute"></div>
    </div>
  );
};

export default Contact;
