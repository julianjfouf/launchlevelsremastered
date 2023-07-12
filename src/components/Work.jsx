import React from "react";
import Button from "./subcomponents/Button";

const Work = () => {
  return (
    <div className="py-24 lg:px-24 px-12 flex flex-col justify-center items-center relative">
      <div className="absolute top-0 left-0 right-0 -translate-y-[100%]">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#e2e2e2"
            fill-opacity="1"
            d="M0,224L120,234.7C240,245,480,267,720,229.3C960,192,1200,96,1320,48L1440,0L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
          ></path>
        </svg>
      </div>
      <h1 className="xl:text-8xl text-5xl">Recent Work</h1>
      <p className="text-center max-w-lg my-10">
        If you need even more reason to work with us, then please check out our
        previous works.
      </p>
      <div className="flex gap-5">
        <Button text="Websites" />
        <Button text="Videos" />
      </div>
      <div className="absolute bottom-0 left-0 right-0 translate-y-[100%] z-20">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#e2e2e2" fill-opacity="1" d="M0,224L120,229.3C240,235,480,245,720,224C960,203,1200,149,1320,122.7L1440,96L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path></svg>
      </div>
    </div>
  );
};

export default Work;
