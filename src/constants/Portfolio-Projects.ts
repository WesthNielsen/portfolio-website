import { PortfolioProject } from "../types/Types";

export const portfolioProjects: Array<PortfolioProject> = [
  {
    imageName: "SalesComm.png",
    projectName: "SalesComm",
    projectDescription:
      "SalesComm is a web application that allows users to create and manage sales campaigns. Users can create campaigns, add contacts to campaigns, and send emails to contacts. Users can also view campaign statistics and track email opens and clicks.",
  },
  {
    imageName: "MapOfDenmark.png",
    projectName: "Map of Denmark",
    projectDescription:
      "This was our first-year project, which was prepared in groups. The project was to simulate a Google Maps clone that would display Denmark using different algorithms such as KD-trees, Dijkstra's algorithm, and Tries for visualization, route-finding, and data handling. The program was written in Java with XML for data and JavaFX for graphics.",
    projectGithub: "https://github.com/GoodKidJonesy/BFST22Group27",
  },
  {
    imageName: "ScooterSharing.png",
    projectName: "Scooter Sharing App",
    projectDescription:
      'Scooter Sharing is an app that I have developed through my elective course "App Development" during my education. The app should mimic the typical electric scooter rental app. The project was developed in Kotlin, where Google\'s various APIs and platforms have been used, including Firebase, Google Maps and Authentication',
    projectGithub: "https://github.com/GoodKidJonesy/MOAPD_ScooterSharing",
  },
  {
    imageName: "Portfolio.png",
    projectName: "Portfolio Website",
    projectDescription:
      "This website is my portfolio website, which I have developed to showcase my projects and skills. The website is developed in React.js using TypeScript together with tailwindCSS.",
    projectGithub: "https://github.com/GoodKidJonesy/portfolio-website",
  },
];
