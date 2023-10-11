import React from "react";

const NavBarItem = (props: {
  input: string;
  selected: number;
  index: number;
  onClick: () => void;
}) => {
  return props.selected === props.index ? (
    <button
      className="w-full h-full flex justify-center items-center relative select-none"
      onClick={props.onClick}
    >
      <div className="cursor-pointer border-2 p-2 rounded-lg w-full h-full flex items-center justify-center relative border-accent shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#972bc5,0_0_15px_#972bc5,0_0_30px_#972bc5]">
        <p className="text-xl duration-100">{props.input}</p>
      </div>
      <div className="w-full h-full border-2 rounded-lg duration-500 border-accent shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,inset_0_0_5px_#972bc5,inset_0_0_15px_#972bc5,inset_0_0_30px_#972bc5] absolute" />
    </button>
  ) : (
    <button
      className="w-full h-full flex justify-center items-center select-none"
      onClick={props.onClick}
    >
      <div className="cursor-pointer border-2 p-2 rounded-lg w-full h-full flex items-center justify-center">
        <p className="text-xl duration-100 flex">{props.input}</p>
      </div>
    </button>
  );
};

export default NavBarItem;
