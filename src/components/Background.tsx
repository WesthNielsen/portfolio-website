import React from "react";

const Background = () => {
  return (
    <div className="relative top-0 left-0 -z-[1]">
      <div className="w-screen h-screen bg-background absolute top-0 left-0" />
      <div className="w-screen h-screen bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-primary/20 to-background/20 absolute top-0 left-0" />
    </div>
  );
};

export default Background;
