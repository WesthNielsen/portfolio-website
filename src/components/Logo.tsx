import React, { useEffect, useState } from "react";

const Logo = (props: {
  selected?: number;
  setSelected?: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const images: Array<string> = ["Off.png", "Mid.png"];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [counter, setCounter] = useState(0);
  const [eligbleToReload, setEligbleToReload] = useState(false);

  useEffect(() => {
    if (props.selected === 0) {
      setEligbleToReload(false);
      setCounter(0);
      setCurrentIndex(0);
    }
  }, [props.selected]);

  const handleClick = () => {
    if (eligbleToReload) {
      if (props.setSelected != null) props.setSelected(0);
    }
  };

  //useEffect to animate on load & animate on hover
  useEffect(() => {
    let interval: NodeJS.Timeout;

    const startCounting = () => {
      if (counter < 21) {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        setCounter((prevCounter) => prevCounter + 1);
      }
      if (counter > 19) {
        const target = document.querySelectorAll("#target");
        const button = document.getElementById("logoButton");
        if (target) {
          target.forEach((t) => {
            t.classList.remove("duration-200");
            t.classList.add("duration-1000");
          });
          setTimeout(() => {
            target.forEach((t) => {
              t.classList.add("duration-200");
              t.classList.remove("duration-1000");
              setEligbleToReload(true);
            });
          }, 1000);
        }
        if (button) {
          button.classList.remove("cursor-default");
        }
      }
    };

    if (counter < 21) {
      const delay = 200 - counter * 20; // Increase the speed with each count
      interval = setInterval(startCounting, delay);
    }

    return () => {
      clearInterval(interval);
    };
  }, [currentIndex]);

  return (
    <button
      id="logoButton"
      onClick={handleClick}
      className={"group relative h-full w-full cursor-default"}
    >
      <div
        id="target"
        className={`h-full w-full bg-contain bg-center bg-no-repeat duration-200 group-hover:opacity-0`}
        style={{
          backgroundImage:
            "url(" + require(`../assets/Logo/${images[currentIndex]}`) + ")",
        }}
      />
      <div
        id="target"
        className={`absolute left-0 top-0 h-full w-full bg-contain bg-center bg-no-repeat blur-xl brightness-150 duration-200 group-hover:opacity-0`}
        style={{
          backgroundImage:
            "url(" + require(`../assets/Logo/${images[currentIndex]}`) + ")",
        }}
      />

      <div
        id="target"
        className={`absolute left-0 top-0 h-full w-full bg-contain bg-center bg-no-repeat opacity-0 duration-200 group-hover:scale-110 group-hover:opacity-100`}
        style={{
          backgroundImage: "url(" + require("../assets/Logo/Full.png") + ")",
        }}
      />
      <div
        id="target"
        className={`absolute left-0 top-0 h-full w-full bg-contain bg-center bg-no-repeat opacity-0 blur-xl brightness-150 duration-200 group-hover:scale-110 group-hover:opacity-100`}
        style={{
          backgroundImage: "url(" + require("../assets/Logo/Full.png") + ")",
        }}
      />
    </button>
  );
};

export default Logo;
