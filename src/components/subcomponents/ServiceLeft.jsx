import React from "react";
import ButtonAlt from "./ButtonAlt";

const ServiceLeft = ({ number, title, points }) => {
  return (
    <div className="text-[#e2e2e2] flex flex-col items-start before:z-0 relative before:bg-[#e2e2e2]/10 before:absolute lg:before:h-[1200px] lg:before:w-[1200px] before:w-[600px] before:h-[600px] before:rounded-full before:top-1/2 before:-translate-y-1/2 before:left-1/2 before:-translate-x-1/2">
      <div className="mb-10 lg:h-24 lg:w-24 w-16 h-16 rounded-full bg-[#e2e2e2] text-[#2e2e2e] lg:text-5xl text-xl flex justify-center items-center">
        <p className="z-20">{number}</p>
      </div>
      <h1 className="lg:text-5xl text-3xl z-20">{title}</h1>
      <div className="mt-5 pl-10 mb-10 z-20 text-xl">
        {points.map((point) => (
          <div className="flex items-center gap-5 z-20">
            <div className="h-2 w-2 outline outline-[#e2e2e2] rounded-full z-20" />
            {point}
          </div>
        ))}
      </div>
      <ButtonAlt text="I'm Interested" />
    </div>
  );
};

export default ServiceLeft;
