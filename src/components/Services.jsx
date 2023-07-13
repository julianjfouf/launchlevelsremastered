import React from "react";
import ServiceLeft from "./subcomponents/ServiceLeft";
import ServiceRight from "./subcomponents/ServiceRight";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <div id="services" className="bg-[url('/images/texture2.png')] bg-cover h-full overflow-hidden relative">
      <div className="lg:px-24 px-12 py-24 pb-48 h-full">
        <motion.h1
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25, ease: "easeOut" }}
          className="xl:text-8xl text-5xl text-[#e2e2e2] mb-12"
        >
          Services
        </motion.h1>
        <div className="w-full flex flex-col items-start h-full py-12">
          <ServiceLeft
            number="1"
            title="Website Development"
            points={[
              "Brand New Website",
              "Unlimited Revisions",
              "Single or Multi Page",
              "Increased Web Traffic",
              "Higher Search Rankings",
            ]}
          />
        </div>
        <div className="w-full flex flex-col items-end h-full py-12">
          <ServiceRight
            number="2"
            title="Content Creation"
            points={[
              "Brand New Website",
              "Unlimited Revisions",
              "Single or Multi Page",
              "Increased Web Traffic",
              "Higher Search Rankings",
            ]}
          />
        </div>
        <div className="w-full flex flex-col items-start h-full">
          <ServiceLeft
            number="3"
            title="Social Media Outreach"
            points={[
              "Brand New Website",
              "Unlimited Revisions",
              "Single or Multi Page",
              "Increased Web Traffic",
              "Higher Search Rankings",
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
