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
      className="w-full h-full flex items-center justify-center cursor-default"
    >
      <div className="w-11/12 md:w-4/6 h-3/5 py-16 flex justify-evenly items-center relative">
        <div className="w-full h-full flex justify-center flex-col">
          <h1 id="name" className="text-3xl md:text-7xl font-bold duration-500 -translate-x-full opacity-0">Jonas Westh Nielsen</h1>
          <h2 id="title" className="text-2xl md:text-4xl italic font-semibold duration-700 -translate-x-full opacity-0">Software Developer</h2>
          <h3 id="studies" className="text-lg md:text-xl italic text-accent duration-1000 -translate-x-full opacity-0">
            @
            <a
              href="https://itu.dk/Uddannelser/Bacheloruddannelser/Softwareudvikling"
              target="_blank"
              className="cursor-pointer"
            >
              <u>IT-University of Copenhagen</u>
            </a>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
