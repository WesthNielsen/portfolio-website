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
      className="w-full h-full flex items-center justify-center overflow-hidden"
    >
      <div className="flex flex-col justify-center h-2/3 w-full md:w-4/5 px-4 overflow-hidden">
          <h1 id="name" className="text-3xl lg:text-6xl font-bold -translate-x-full opacity-0 duration-500">
            Jonas Westh Nielsen
          </h1>
          <h2 id="title" className="text-xl lg:text-2xl italic font-semibold -translate-x-full opacity-0 duration-700">
            Software Development Student
          </h2>
          <h3 id="studies" className="text-lg lg:text-xl text-accent italic -translate-x-full opacity-0 duration-1000">
            <a href="https://en.itu.dk/Programmes/BSc-Programmes/Software-Development" target="_blank" className="cursor-pointer">
              @IT-University of Copenhagen
            </a>
          </h3>
      </div>
    </div>
  );
};

export default Welcome;
