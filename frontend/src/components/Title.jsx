import React from "react";

const Title = ({ text1, text2 }) => {
  return (
    <div className="inline-flex gap-2 items-center mb-3">
      <p className="text-teal-900/50">
        {text1} <span className="text-emerald-800 font-medium">{text2}</span>
      </p>
      <p className="w-8 sm:w-12 h-[1px] sm:h-2x bg-teal-900/50"></p>
    </div>
  );
};

export default Title;
