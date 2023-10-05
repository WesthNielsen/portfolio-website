import { IconType } from "react-icons";

export interface PortfolioProject {
    imageName?: string;
    projectName? : string;
    projectDescription?: string;
    projectGithub?: string;
}

export interface CustomIconProps {
    name: IconType;
    size?: string;
    color?: string;
  }