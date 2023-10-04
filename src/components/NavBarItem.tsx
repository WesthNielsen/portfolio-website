import React from "react";

const NavBarItem = (props: { input: string }) => {
  return (
    <div className="w-1/3">
      <div className="flex items-center justify-center flex-col">
        <p className="text-lg cursor-pointer hover:text-xl hover:text-shadow-lg shadow-text duration-150">
          {props.input}
        </p>
      </div>
    </div>
  );
};

export default NavBarItem;
