import React from "react";
import { PortfolioProject } from "../types/Types";
import { AiFillGithub } from "react-icons/ai";

const PortfolioCard = (props: { project: PortfolioProject }) => {
  const redirect = () => {
    window.open(props.project.projectGithub, "_blank");
  };

  return props.project.imageName ? (
    <div className="w-full h-full rounded-3xl overflow-hidden shadow-lg hover:shadow-xl shadow-primary hover:shadow-primary ease-in-out relative group cursor-default duration-500 hover:scale-105">
      <div
        className={"w-full h-full absolute top-0 left-0 bg-cover bg-right"}
        style={{
          backgroundImage:
            "url(" +
            require(`../assets/Projects/${
              props.project.imageName
                ? props.project.imageName
                : "Placeholder.png"
            }`) +
            ")",
        }}
      />
      <div className="bg-black/60 w-full h-full bg-cover opacity-0 backdrop-blur-sm hover:opacity-100 duration-500">
        <div className="w-full h-full pt-4 pb-2 px-4 flex items-center justify-center flex-col ">
          <div className="relative w-full flex justify-center items-center pb-2">
            <h1 className="text-xl md:text-2xl">{props.project.projectName}</h1>
            {props.project.projectGithub && (
              <AiFillGithub
                className="text-2xl absolute h-full left-0 cursor-pointer"
                onClick={redirect}
              />
            )}
          </div>
          <p className="w-full h-full text-sm md:text-base overflow-hidden">
            {props.project.projectDescription}
          </p>
        </div>
      </div>
    </div>
  ) : (
    <div className="w-full h-full" />
  );
};

export default PortfolioCard;
