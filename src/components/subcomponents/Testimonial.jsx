import React from "react";
import quote1 from "../../../public/icons/quote1.png";
import quote2 from "../../../public/icons/quote2.png";
import Image from "next/image";
import Button from "./Button";

const Testimonial = ({ name, service, quote, link, picture }) => {
  return (
    <div className="sm:p-10 p-5 max-w-3xl w-full rounded-[36px] bg-[#e2e2e2] z-50">
      <div className="flex sm:justify-between justify-center z-50">
        <div className="flex gap-5 md:flex-row flex-col md:text-left text-center items-center z-50">
          <div
            className={`h-24 w-24 bg-[#fff] border border-[#2e2e2e] rounded-full ${picture} z-50 bg-center bg-origin-content bg-contain bg-repeat-space `}
          ></div>
          <div>
            <h3 className="text-5xl z-50">{name}</h3>
            <p>{service}</p>
          </div>
        </div>
        <Image className="object-contain sm:flex hidden" src={quote1} />
      </div>
      <div className="my-10 sm:text-left text-center">"{quote}"</div>
      <div className="flex sm:justify-between w-full">
        <Image className="object-contain sm:flex hidden" src={quote2} />
        <div className="flex w-full sm:justify-end justify-center">
          <Button text="See Website" size="text-xl" width="md:px-24 px-12" height="py-5" />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
