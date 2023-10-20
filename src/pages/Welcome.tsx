import React, { useEffect } from "react";

const Welcome = () => {
  useEffect(() => {
    const name = document.getElementById("name");
    const title = document.getElementById("title");
    const studies = document.getElementById("studies");
    if (name && title && studies) {
      setTimeout(() => {
        name.classList.remove("-translate-x-full");
        name.classList.remove("opacity-0");
        title.classList.remove("-translate-x-full");
        title.classList.remove("opacity-0");
        studies.classList.remove("-translate-x-full");
        studies.classList.remove("opacity-0");
      }, 100);
    }
  }, []);

  return (
    <div
      id="portfolioContainer"
      className="flex h-full w-full items-center justify-center overflow-hidden"
    >
      <div className="flex h-2/3 w-full flex-col justify-center overflow-hidden px-4 md:w-4/5">
        <h1
          id="name"
          className="-translate-x-full text-3xl font-bold opacity-0 duration-500 lg:text-6xl"
        >
          Jonas Westh Nielsen
        </h1>
        <h2
          id="title"
          className="-translate-x-full text-xl font-semibold italic opacity-0 duration-700 lg:text-2xl"
        >
          Software Development Student
        </h2>
        <h3
          id="studies"
          className="-translate-x-full text-lg italic text-accent opacity-0 duration-1000 lg:text-xl"
        >
          <a
            href="https://en.itu.dk/Programmes/BSc-Programmes/Software-Development"
            target="_blank"
            className="cursor-pointer"
          >
            @IT-University of Copenhagen
          </a>
        </h3>
      </div>
    </div>
  );
};

export default Welcome;
