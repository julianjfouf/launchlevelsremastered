import React from "react";
import Navbar from "./Navbar";
import Button from "./subcomponents/Button";
import LogoStrip from "./LogoStrip";
import google from "../../public/logos/googleLogo.png";
import project1 from "../../public/projects/display1.png";
import project2 from "../../public/projects/display2.png";
import project3 from "../../public/projects/display3.png";
import project4 from "../../public/projects/display4.png";
import project5 from "../../public/projects/display5.png";
import Projects from "./Projects";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div
      id="home"
      className="bg-[url('/images/texture1.png')] relative z-20 bg-cover bg-center"
    >
      <Navbar />
      <div className="lg:px-24 lg:pt-24 px-12 z-20 pb-24 pt-12 flex flex-col justify-center items-center backdrop-brightness-90">
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25, ease: "easeOut" }}
          className="xl:text-9xl md:text-7xl text-5xl z-20 text-center"
        >
          Launch levels ahead of the competition
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25, ease: "easeOut" }}
          className="text-xl my-10 z-20 text-center max-w-lg"
        >
          We know what we are doing in the digital age where social media
          influence and websites are becoming increasingly important for
          businesses.
        </motion.p>
        <div className=" pb-10">
          <Button text="Get Started" delay={0.25} />
        </div>
        <Projects
          images={[project2, project3, project1, project5, project4, project2]}
        />
      </div>

      <LogoStrip logos={[google, google, google, google, google]} />
    </div>
  );
};

export default Hero;
