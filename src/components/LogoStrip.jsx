import Image from "next/image";
import React from "react";

const LogoStrip = ({ logos }) => {
  return (
    <div className="absolute bottom-0 left-0 w-full py-5 bg-[#000000] flex gap-24 overflow-hidden items-center">
      {logos.map((logo) => (
        <Image className="h-14 object-contain" src={logo} />
      ))}
    </div>
  );
};

export default LogoStrip;
