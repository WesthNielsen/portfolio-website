import React from "react";

const NavBarItem = (props: {
  input: string;
  selected: number;
  index: number;
  onClick: () => void;
}) => {
  return props.selected === props.index ? (
    <div className="w-1/3 h-full flex justify-center items-center relative" onClick={props.onClick}>
      <div className="flex items-center justify-center flex-col w-5/6 h-full border-2 rounded-xl border-accent shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#972bc5,0_0_15px_#972bc5,0_0_30px_#972bc5] absolute">
        <p className="text-xl cursor-pointer duration-150 text-accent">
          {props.input}
        </p>
      </div>
      <div className="w-5/6 h-full border-2 rounded-xl border-accent shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,inset_0_0_5px_#972bc5,inset_0_0_15px_#972bc5,inset_0_0_30px_#972bc5] absolute">
      </div>
    </div>
  ) : (
    <div className="w-1/3 h-full flex justify-center items-center" onClick={props.onClick}>
      <div className="flex items-center justify-center flex-col w-5/6 h-full border-2 border-text rounded-xl">
        <p className="text-xl cursor-pointer duration-150 text-text flex">
          {props.input}
        </p>
      </div>
    </div>
  );
};

export default NavBarItem;
