import React from "react";
import quote1 from "../../../public/icons/quote1.png";
import quote2 from "../../../public/icons/quote2.png";
import Image from "next/image";
import Button from "./Button";
import { motion } from "framer-motion";

const Testimonial = ({ name, service, quote, link, picture }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.25, ease: "easeOut" }}
      className="sm:p-10 p-5 max-w-3xl w-full rounded-[36px] bg-[#e2e2e2] z-50"
    >
      <div className="flex sm:justify-between justify-center z-50">
        <div className="flex gap-5 md:flex-row flex-col md:text-left text-center items-center z-50">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25, ease: "easeOut" }}
            className={`h-24 w-24 bg-[#fff] border border-[#2e2e2e] rounded-full ${picture} z-50 bg-center bg-origin-content bg-contain bg-repeat-space `}
          ></motion.div>
          <div>
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25, ease: "easeOut" }}
              className="md:text-5xl text-3xl z-50"
            >
              {name}
            </motion.h3>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25, ease: "easeOut" }}
            >
              {service}
            </motion.p>
          </div>
        </div>
        <Image className="object-contain sm:flex hidden" src={quote1} />
      </div>
      <div className="my-10 sm:text-left text-center">"{quote}"</div>
      <div className="flex sm:justify-between w-full">
        <Image className="object-contain sm:flex hidden" src={quote2} />
        <div className="flex w-full sm:justify-end justify-center">
          <Button
            text="See Website"
            size="text-xl"
            width="md:px-24 px-12"
            height="py-5"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Testimonial;
