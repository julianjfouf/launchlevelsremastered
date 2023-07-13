import Image from "next/image";
import React, { useState } from "react";
import { useMotionValueEvent, useScroll, motion } from "framer-motion";

const Projects = ({ images }) => {
  const [progress, setProgress] = useState(0);
  let { scrollYProgress } = useScroll();
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setProgress(latest);
  });
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{delay: 0.25}}
      style={{
        overflowX: "hidden",
      }}
      className={`absolute bottom-48 left-0 flex items-center gap-12`}
    >
      {images.map((image) => (
        <Image
          style={{
            transform: `translateX(-${scrollYProgress.current * 500}%)`,
          }}
          className="h-96 object-contain hover:scale-150"
          src={image}
        />
      ))}
    </motion.div>
  );
};

export default Projects;
