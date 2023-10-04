import React from "react";
import PortfolioCard from "../components/PortfolioCard";

const Portfolio = () => {
  return (
    <div className="w-full h-full flex items-center justify-center pt-8">
      <div className="w-4/6 h-3/5 grid grid-cols-3 gap-12 auto-rows-fr">
        <PortfolioCard
          imageName="SalesComm.png"
          projectName="SalesComm"
          bread="SalesComm was a company that we worked with in our second year project, where we developed an app that functioned as a B2B marketplace and product regulation. The project focused on working with SCRUM and agile development, where the app itself was developed in React Native."
        />
        <PortfolioCard projectName="Placeholder" />
        <PortfolioCard projectName="Placeholder" />
        <PortfolioCard projectName="Placeholder" />
        <PortfolioCard projectName="Placeholder" />
        <PortfolioCard projectName="Placeholder" />
      </div>
    </div>
  );
};

export default Portfolio;
