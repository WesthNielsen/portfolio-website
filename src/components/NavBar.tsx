import React, { useState } from "react";
import NavBarItem from "./NavBarItem";

const NavBar = () => {
  const [selected, setSelected] = useState(0);

  const handleClick = (num: number) => {
    setSelected(num);
  };

  return (
    <header className="absolute w-full h-20 flex justify-center items-center">
      <div className="h-full w-1/4 flex justify-evenly items-center text-text pt-4">
        <NavBarItem
          input="About"
          selected={selected}
          index={1}
          onClick={() => handleClick(1)}
        />
        <NavBarItem
          input="Portfolio"
          selected={selected}
          index={2}
          onClick={() => handleClick(2)}
        />
        <NavBarItem
          input="Contact"
          selected={selected}
          index={3}
          onClick={() => handleClick(3)}
        />
      </div>
    </header>
  );
};

export default NavBar;
