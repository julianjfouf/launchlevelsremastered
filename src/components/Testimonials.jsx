import React from "react";
import Testimonial from "./subcomponents/Testimonial";
import picture1 from "../../public/pictures/danologo.png";
import { motion } from "framer-motion";

const Testimonials = () => {
  return (
    <div className="py-24 pt-36 lg:px-24 px-12 w-full overflow-hidden">
      <div className="flex flex-col md:mb-24 mb-12 items-center justify-center text-center z-40 text-[#e2e2e2]">
        <h1 className="xl:text-8xl text-5xl z-40">Testimonials</h1>
        <p className="text-xl max-w-lg mt-10 z-40">
          See what others have said about their experience working with us.
        </p>
      </div>
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.25, ease: "easeOut" }}
        className="z-30 flex justify-center before:z-[-1] relative before:bg-[url('/images/texture2.png')] before:absolute before:h-[1200px] before:w-[1200px] before:rounded-full before:top-1/2 before:-translate-y-1/2 before:left-1/2 before:-translate-x-1/2"
      >
        <Testimonial
          name="Dano's Detailing"
          service="Car Detailing Website"
          link="https://danosdetailing.com"
          quote="I enjoyed my experience working with these guys. They are very professional and diligent with their work and I can tell that they know what they are doing when it comes to these kinds of things. Definitely recommend!"
          picture="bg-[url('/pictures/danologo.png')]"
        />
      </motion.div>
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.25, ease: "easeOut" }}
        className="z-30 lg:my-[400px] my-[160px] flex justify-center before:z-[-1] relative lg:before:bg-[url('/images/texture2.png')] before:absolute before:h-[1200px] before:w-[1200px] before:rounded-full before:top-1/2 before:-translate-y-1/2 before:left-1/2 before:-translate-x-1/2"
      >
        <Testimonial
          name="Dano's Detailing"
          service="Car Detailing Website"
          link="https://danosdetailing.com"
          quote="I enjoyed my experience working with these guys. They are very professional and diligent with their work and I can tell that they know what they are doing when it comes to these kinds of things. Definitely recommend!"
          picture="bg-[url('/pictures/danologo.png')]"
        />
      </motion.div>
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.25, ease: "easeOut" }}
        className="z-20 flex justify-center before:z-[-1] relative before:bg-[url('/images/texture2.png')] before:absolute before:h-[1200px] before:w-[1200px] before:rounded-full before:top-1/2 before:-translate-y-1/2 before:left-1/2 before:-translate-x-1/2"
      >
        <Testimonial
          name="Dano's Detailing"
          service="Car Detailing Website"
          link="https://danosdetailing.com"
          quote="I enjoyed my experience working with these guys. They are very professional and diligent with their work and I can tell that they know what they are doing when it comes to these kinds of things. Definitely recommend!"
          picture="bg-[url('/pictures/danologo.png')]"
        />
      </motion.div>
    </div>
  );
};

export default Testimonials;
