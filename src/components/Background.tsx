import React from "react";

const Background = () => {
  return (
    <div className="relative left-0 top-0 -z-[1]">
      <div className="absolute left-0 top-0 h-screen w-screen bg-background" />
      <div className="absolute left-0 top-0 h-screen w-screen bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-primary/20 to-background/20" />
    </div>
  );
};

export default Background;
