import React from "react";
import { motion } from "framer-motion";

const Marquee = ({ imagesUrls, direction }) => {
  return (
    <div className="w-full flex overflow-hidden">
      <motion.div
        initial={{ x: direction === "left" ? "0%" : "-100%" }}
        animate={{ x: direction === "left" ? "-100%" : "0%" }}
        transition={{ ease: "linear", duration: 15, repeat: Infinity }}
        className="flex flex-shrink-0 gap-40 pr-40 py-10"
      >
        {imagesUrls.map((elem, index) => (
          <img key={index} src={elem} className="w-28"></img>
        ))}
      </motion.div>
      <motion.div
        initial={{ x: direction === "left" ? "0%" : "-100%" }}
        animate={{ x: direction === "left" ? "-100%" : "0%" }}
        transition={{ ease: "linear", duration: 15, repeat: Infinity }}
        className="flex flex-shrink-0 gap-40 pr-40 py-10"
      >
        {imagesUrls.map((elem, index) => (
          <img key={index} src={elem} className="w-28"></img>
        ))}
      </motion.div>
    </div>
  );
};

export default Marquee;
