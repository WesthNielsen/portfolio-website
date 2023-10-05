import React, { useEffect } from "react";
import Underline from "../components/Underline";
import KeyWord from "../components/KeyWord";
import SkillList from "../components/SkillList";

const About = (props: {
  setSelected: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const handleClick = (num: number) => {
    props.setSelected(num);
  };

  //useEffect to animate on load
  useEffect(() => {
    const aboutContainer = document.getElementById("aboutContainer");
    if (aboutContainer) {
      setTimeout(() => {
        aboutContainer.classList.remove("scale-0");
        aboutContainer.classList.remove("opacity-0");
        aboutContainer.classList.remove("-translate-y-1/2");
        aboutContainer.classList.remove("-translate-x-48");
      }, 100);
    }
  }, []);

  return (
    <div
      id="aboutContainer"
      className="w-full h-full flex items-center justify-center pt-8 scale-0 duration-1000 ease-in-out opacity-0 -translate-y-1/2 -translate-x-48"
    >
      <div className="w-4/6 h-3/5 py-16">
        <div className="mb-16">
          <div className="w-max mb-4">
            <h1 className="text-text text-4xl font-bold mr-16 selection:bg-primary/50">Who Am I?</h1>
            <Underline />
          </div>
          <p className="text-text text-xl selection:bg-primary/50">
            I am a software development student with over 5 years of hands-on
            coding experience. Currently pursuing my Bachelor's degree in
            Software Development at the IT University of Copenhagen with an
            expected graduation date in 2024. I am committed to contributing my
            technical expertise and passion for software development to a
            dynamic team and continue to expand my horizons in the ever-evolving
            world of technology. <br /> <br />I invite you to explore my{" "}
            <KeyWord word="portfolio" onClick={() => handleClick(2)} /> to get a
            deeper insight into my journey as a software development student and
            my passion for coding. Within my portfolio, you will find a
            collection of projects that I have worked on over the years,
            showcasing my skills, creativity, and dedication to the field. if
            you have any questions or would like to discuss potential
            collaboration opportunities, please don't hesitate to reach out. I
            look forward to connecting with you and sharing my passion for
            software development.
          </p>
        </div>
        <SkillList />
      </div>
    </div>
  );
};

export default About;
