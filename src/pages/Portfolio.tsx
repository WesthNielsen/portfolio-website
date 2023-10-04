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
        <PortfolioCard
          imageName="MapOfDenmark.png"
          projectName="Map of Denmark"
          bread="This was our first-year project, which was prepared in groups. The project was to simulate a Google Maps clone that would display Denmark using different algorithms such as KD-trees, Dijkstra's algorithm, and Tries for visualization, route-finding, and data handling. The program was written in Java with XML for data and JavaFX for graphics"
        />
        <PortfolioCard projectName="Placeholder" />
        <PortfolioCard projectName="Placeholder" />
        <PortfolioCard projectName="Placeholder" />
        <PortfolioCard projectName="Placeholder" />
      </div>
    </div>
  );
};

export default Portfolio;
