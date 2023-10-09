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
      className="w-full h-full flex items-center justify-center overflow-hidden scale-0 opacity-0 -translate-y-1/2 duration-500"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:grid-rows-3 lg:grid-rows-2 gap-12 pt-2 pb-12 md:pb-0 h-2/3 w-full md:w-4/5 px-8 overflow-x-hidden overflow-y-scroll md:overflow-hidden items-center">
        {portfolioProjects.map((project, index) => {
          return (
            <div className="aspect-video flex items-center justify-center" key={index}>
              <PortfolioCard project={project} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Portfolio;
