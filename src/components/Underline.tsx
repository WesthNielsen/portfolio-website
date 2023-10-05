import React from "react";

const Underline = () => {
  return (
    <div className="relative">
      <div className="h-1 w-full from-text to-accent bg-gradient-to-l absolute" />
      <div className="h-1 w-full from-text to-accent bg-gradient-to-l absolute blur-sm" />
      <div className="h-1 w-full bg-accent absolute opacity-40" />
    </div>
  );
};

export default Underline;
