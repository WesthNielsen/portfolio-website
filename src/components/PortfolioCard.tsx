import React from "react";

const PortfolioCard = (props:{imageName: string, projectName: string, bread: string}) => {
  return (
    <div className="w-full h-full rounded-3xl overflow-hidden shadow-md hover:shadow-lg shadow-primary hover:shadow-primary ease-in-out relative group cursor-default duration-500">
      <div className={`w-full h-full bg-${props.imageName} absolute top-0 left-0 bg-cover bg-center group-hover:scale-105 duration-1000`} />
      <div className="bg-black/60 w-full h-full bg-cover opacity-0 backdrop-blur-sm hover:opacity-100 duration-500">
        <div className="w-full h-full px-4 flex items-center justify-center flex-col text-text">
        <h1 className="text-2xl pb-4">{props.projectName}</h1>
        <p>{props.bread}</p>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
