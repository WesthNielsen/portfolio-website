import React from "react";
import NavBarItem from "./NavBarItem";

const NavBar = () => {
  return (
    <header className="absolute w-full h-10 flex justify-center items-center">
      <div className="h-10 w-1/3 flex justify-evenly items-center text-text pt-4">
        <NavBarItem input="About" />
        <NavBarItem input="Portfolio" />
        <NavBarItem input="Contact" />
      </div>
    </header>
  );
};

export default NavBar;
