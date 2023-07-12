import React from "react";

const Button = ({
  text,
  size = "xl:text-5xl md:text-3xl text-xl",
  height = "md:py-10 py-5",
  width = "xl:px-48 md:px-24 px-12",
}) => {
  return (
    <a
      className={`cursor-pointer bg-[#2e2e2e] text-[#e2e2e2] ${height} ${width} rounded-full flex justify-center items-center ${size}`}
    >
      {text}
    </a>
  );
};

export default Button;
