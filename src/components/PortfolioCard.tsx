import React from "react";

const PortfolioCard = (props: {
  imageName?: string;
  projectName?: string;
  bread?: string;
}) => {
  console.log(`url(./assets/${props.imageName})`);

  return props.bread && props.imageName && props.projectName ? (
    <div className="w-full h-full rounded-3xl overflow-hidden shadow-md hover:shadow-lg shadow-primary hover:shadow-primary ease-in-out relative group cursor-default duration-500">
      <div
        className={
          "w-full h-full absolute top-0 left-0 bg-cover bg-center group-hover:scale-105 duration-1000"
        }
        style={{
          backgroundImage:
            "url(" +
            require(`../assets/${
              props.imageName ? props.imageName : "Placeholder.png"
            }`) +
            ")",
        }}
      />
      <div className="bg-black/60 w-full h-full bg-cover opacity-0 backdrop-blur-sm hover:opacity-100 duration-500">
        <div className="w-full h-full pt-4 pb-2 px-4 flex items-center justify-center flex-col text-text">
          <h1 className="text-2xl">{props.projectName}</h1>
          <p className="w-full h-full text-sm overflow-hidden">{props.bread}</p>
        </div>
      </div>
    </div>
  ) : (
    <div className="w-full h-full" />
  );
};

export default PortfolioCard;
