import React from "react";

const Underline = () => {
  return (
    <div className="relative">
      <div className="absolute h-1 w-full bg-gradient-to-l from-text to-accent" />
      <div className="absolute h-1 w-full bg-gradient-to-l from-text to-accent blur-sm" />
      <div className="absolute h-1 w-full bg-accent opacity-40" />
    </div>
  );
};

export default Underline;
