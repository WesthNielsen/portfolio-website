import React from "react";

const KeyWord = (props: { word: string; onClick?: () => void }) => {
  return (
    <button
      onClick={props.onClick}
      className="hover:text-accent duration-500 relative group"
    >
      <b>
        <u>{props.word}</u>
      </b>
      <b className="duration-500 text-accent absolute top-0 left-0 blur-sm brightness-200 font-bold -z-10 opacity-0 group-hover:opacity-50 ">
        <u>{props.word}</u>
      </b>
    </button>
  );
};

export default KeyWord;
