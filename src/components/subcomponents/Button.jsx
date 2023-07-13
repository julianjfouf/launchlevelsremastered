import React from "react";
import { motion } from "framer-motion";

const Button = ({
  text,
  size = "xl:text-5xl md:text-3xl text-xl",
  height = "md:py-10 py-5",
  width = "xl:px-48 md:px-24 px-12",
  delay = 0.5,
}) => {
  return (
    <motion.a
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: delay, ease: "easeOut", duration: 0.3 }}
      className={`cursor-pointer border border-[#2e2e2e] before:absolute relative before:w-full before:h-full before:scale-x-100 hover:before:scale-x-0 before:left-0 before:top-0 before:duration-300 before:origin-left before:z-[-1] hover:text-[#2e2e2e] before:bg-[#2e2e2e] duration-300 z-10 overflow-hidden hover:before:origin-right before:transition-transform text-[#e2e2e2] ${height} ${width} rounded-full flex justify-center items-center ${size}`}
    >
      {text}
    </motion.a>
  );
};

export default Button;
