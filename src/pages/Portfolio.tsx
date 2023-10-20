import React, { useEffect } from "react";
import PortfolioCard from "../components/PortfolioCard";
import { portfolioProjects } from "../constants/Portfolio-Projects";

const Portfolio = () => {
  //useEffect to animate on load
  useEffect(() => {
    const portfolioContainer = document.getElementById("portfolioContainer");
    if (portfolioContainer) {
      setTimeout(() => {
        portfolioContainer.classList.remove("scale-0");
        portfolioContainer.classList.remove("opacity-0");
        portfolioContainer.classList.remove("-translate-y-1/2");
      }, 100);
    }
  }, []);

  return (
    <div
      id="portfolioContainer"
      className="flex h-full w-full -translate-y-1/2 scale-0 items-center justify-center overflow-hidden opacity-0 duration-500"
    >
      <div className="grid h-2/3 w-full grid-cols-1 items-center gap-12 overflow-x-hidden overflow-y-scroll px-8 pb-12 pt-2 md:w-4/5 md:grid-cols-2 md:grid-rows-3 md:overflow-hidden md:pb-0 lg:grid-cols-3 lg:grid-rows-2">
        {portfolioProjects.map((project, index) => {
          return (
            <div
              className="flex aspect-video items-center justify-center"
              key={index}
            >
              <PortfolioCard project={project} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Portfolio;
