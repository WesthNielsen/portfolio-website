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
      className="w-full h-full flex items-center justify-center pt-8 scale-0 duration-1000 ease-in-out opacity-0 -translate-y-1/2"
    >
      <div className="w-4/6 h-3/5 grid grid-cols-3 gap-12 auto-rows-fr">
        {portfolioProjects.map((project, index) => {
          return <PortfolioCard key={index} project={project} />;
        })}
      </div>
    </div>
  );
};

export default Portfolio;
