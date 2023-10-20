import React from "react";

const KeyWord = (props: { word: string; onClick?: () => void }) => {
  return (
    <button
      onClick={props.onClick}
      className="group relative duration-500 hover:text-accent"
    >
      <b>
        <u>{props.word}</u>
      </b>
      <b className="absolute left-0 top-0 font-bold text-accent opacity-0 blur-sm brightness-200 duration-500 group-hover:opacity-50 ">
        <u>{props.word}</u>
      </b>
    </button>
  );
};

export default KeyWord;
