import React, { useState } from "react";
import NavBarItem from "./NavBarItem";
import Logo from "./Logo";

const NavBar = (props: {
  selected: number;
  setSelected: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const handleClick = (num: number) => {
    props.setSelected(num);
  };

  return (
    <header className="absolute w-full h-20 flex justify-center items-center">
      <div className="absolute top-2 left-0 h-full w-36 ml-4 flex items-center justify-left">
        <Logo/>
      </div>
      <div className="h-full w-1/4 flex justify-evenly items-center text-text pt-4">
        <NavBarItem
          input="About"
          selected={props.selected}
          index={1}
          onClick={() => handleClick(1)}
        />
        <NavBarItem
          input="Portfolio"
          selected={props.selected}
          index={2}
          onClick={() => handleClick(2)}
        />
        <NavBarItem
          input="Contact"
          selected={props.selected}
          index={3}
          onClick={() => handleClick(3)}
        />
      </div>
    </header>
  );
};

export default NavBar;
