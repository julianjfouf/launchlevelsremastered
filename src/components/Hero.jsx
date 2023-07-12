import React from "react";
import Navbar from "./Navbar";
import Button from "./subcomponents/Button";

const Hero = () => {
  return (
    <div className="bg-[url('/images/texture1.png')] relative z-20 bg-cover bg-center">
      <Navbar />
      <div className="lg:px-24 px-12 z-20 py-24 flex flex-col justify-center items-center backdrop-brightness-90">
        <h1 className="xl:text-9xl md:text-7xl text-5xl z-20 text-center">
          Launch levels ahead of the competition
        </h1>
        <p className="text-xl my-10 z-20 text-center max-w-lg">
          Trust us, we know what we are doing in the digital age where social
          media influence and websites are becoming increasingly important for
          businesses.
        </p>
        <Button text="Get Started" />
      </div>
    </div>
  );
};

export default Hero;
