import React, { useEffect, useState } from "react";

const Logo = (props: { scale?: number }) => {
  const images: Array<string> = ["Off.png", "Mid.png"];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    const startCounting = () => {
      if (counter < 27) {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        setCounter((prevCounter) => prevCounter + 1);
      }
      if (counter > 19) {
        const target = document.querySelectorAll("#target");
        if (target) {
          target.forEach((t) => {
            t.classList.remove("duration-200");
            t.classList.add("duration-1000");
          });
          setTimeout(() => {
            target.forEach((t) => {
              t.classList.add("duration-200");
              t.classList.remove("duration-1000");
            });
          }, 1000);
        }
      }
    };

    if (counter < 27) {
      const delay = 250 - counter * 30; // Increase the speed with each count
      interval = setInterval(startCounting, delay);
    }

    return () => {
      clearInterval(interval);
    };
  }, [currentIndex]);

  return (
    <div className={`relative h-full w-full group scale-${props.scale}`}>
      <div
        id="target"
        className={`h-full w-full bg-contain bg-no-repeat bg-center duration-200 group-hover:opacity-0`}
        style={{
          backgroundImage:
            "url(" + require(`../assets/Logo/${images[currentIndex]}`) + ")",
        }}
      />
      <div
        id="target"
        className={`h-full w-full bg-contain bg-no-repeat bg-center group-hover:scale-110 duration-200 opacity-0 group-hover:opacity-100 absolute top-0 left-0`}
        style={{
          backgroundImage: "url(" + require("../assets/Logo/Full.png") + ")",
        }}
      />
    </div>
  );
};

export default Logo;
