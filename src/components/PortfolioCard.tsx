import React from "react";
import { PortfolioProject } from "../types/Types";
import { AiFillGithub } from "react-icons/ai";

const PortfolioCard = (props: { project: PortfolioProject }) => {
  const redirect = () => {
    window.open(props.project.projectGithub, "_blank");
  };

  return props.project.imageName ? (
    <div className="group relative h-full w-full cursor-default overflow-hidden rounded-3xl shadow-lg shadow-primary duration-500 ease-in-out hover:scale-105 hover:shadow-xl hover:shadow-primary">
      <div
        className={"absolute left-0 top-0 h-full w-full bg-cover bg-center"}
        style={{
          backgroundImage:
            "url(" +
            require(`../assets/Projects/${props.project.imageName}`) +
            ")",
        }}
      />
      <div className="h-full w-full bg-black/60 bg-cover opacity-0 backdrop-blur-sm duration-500 hover:opacity-100">
        <div className="flex h-full w-full flex-col items-center justify-center px-4 pb-2 pt-2 ">
          <div className="relative flex w-full items-center justify-center pb-2">
            <h1 className="text-xl md:text-2xl">{props.project.projectName}</h1>
            {props.project.projectGithub && (
              <AiFillGithub
                className="absolute left-0 h-full cursor-pointer text-2xl"
                onClick={redirect}
              />
            )}
          </div>
          <p className="h-full w-full overflow-hidden text-sm md:text-base">
            {props.project.projectDescription}
          </p>
        </div>
      </div>
    </div>
  ) : (
    <div className="h-full w-full" />
  );
};

export default PortfolioCard;
