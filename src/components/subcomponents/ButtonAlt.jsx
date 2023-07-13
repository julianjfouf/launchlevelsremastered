import React from "react";

const ButtonAlt = ({
  text,
  size = "xl:text-5xl md:text-3xl text-xl",
  height = "md:py-10 py-5",
  width = "xl:px-48 md:px-24 px-12",
}) => {
  return (
    <a className={`${height} ${width} z-20 cursor-pointer border duration-300 before:z-[-1] before:absolute hover:text-[#2e2e2e] relative before:w-full before:h-full before:bg-[#e2e2e2] before:rounded-full before:scale-x-0 before:origin-right hover:before:origin-left before:transition-transform hover:before:scale-x-100 overflow-hidden before:duration-300 border-[#e2e2e2] text-[#e2e2e2] rounded-full flex justify-center items-center ${size}`}>
      {text}
    </a>
  );
};

export default ButtonAlt;
