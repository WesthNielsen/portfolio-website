import React from "react";
import PortfolioCard from "../components/PortfolioCard";
import { portfolioProjects } from "../constants/Portfolio-Projects";

const Portfolio = () => {
  return (
    <div className="w-full h-full flex items-center justify-center pt-8">
      <div className="w-4/6 h-3/5 grid grid-cols-3 gap-12 auto-rows-fr">
        {portfolioProjects.map((project, index) => {
          return <PortfolioCard key={index} project={project} />;
        })}
      </div>
    </div>
  );
};

export default Portfolio;
