import React from "react";

const NavBarItem = (props: {
  input: string;
  selected: number;
  index: number;
  onClick: () => void;
}) => {
  return props.selected === props.index ? (
    <button
      className="relative flex h-full w-full select-none items-center justify-center"
      onClick={props.onClick}
    >
      <div className="relative flex h-full w-full cursor-pointer items-center justify-center rounded-lg border-2 border-accent p-2 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#972bc5,0_0_15px_#972bc5,0_0_30px_#972bc5]">
        <p className="text-xl duration-100">{props.input}</p>
      </div>
      <div className="absolute h-full w-full rounded-lg border-2 border-accent shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,inset_0_0_5px_#972bc5,inset_0_0_15px_#972bc5,inset_0_0_30px_#972bc5] duration-500" />
    </button>
  ) : (
    <button
      className="flex h-full w-full select-none items-center justify-center"
      onClick={props.onClick}
    >
      <div className="flex h-full w-full cursor-pointer items-center justify-center rounded-lg border-2 p-2">
        <p className="flex text-xl duration-100">{props.input}</p>
      </div>
    </button>
  );
};

export default NavBarItem;
