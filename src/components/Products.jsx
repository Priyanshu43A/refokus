import React, { useState, useRef } from "react";
import Product from "./Product";
import { motion } from "framer-motion";

const Products = () => {
  const products = [
    {
      title: "Arquitel",
      description:
        "A versatile communication tool for businesses. A versatile communication tool for businesses.",
      case: false,
      live: true,
      hover: "#4B0082", // Indigo
    },
    {
      title: "TTR",
      description:
        "An AI-driven data analysis platform. An AI-driven data analysis platform.",
      case: true,
      live: true,
      hover: "#6A0DAD", // Dark Purple
    },
    {
      title: "Yahoo",
      description:
        "A popular search engine and web portal. A popular search engine and web portal.",
      case: false,
      live: true,
      hover: "#8B0000", // Dark Red
    },
    {
      title: "Nimbus",
      description:
        "A cloud storage solution with enhanced security. A cloud storage solution with enhanced security.",
      case: true,
      live: true,
      hover: "#2E0854", // Midnight Purple
    },
    {
      title: "Solix",
      description:
        "A solar energy management system. A solar energy management system.",
      case: true,
      live: true,
      hover: "#1B2631", // Dark Blue Gray
    },
    {
      title: "Zenith",
      description:
        "A project management tool for teams. A project management tool for teams.",
      case: false,
      live: true,
      hover: "#4B0082", // Dark Indigo
    },
  ];
  const productRef = useRef(false);

  const [position, setposition] = useState(0);
  const [showVdo, setshowVdo] = useState(false);

  const mover = (val) => {
    setposition(val * 20);
  };

  if (showVdo == false) {
    if (productRef.current) {
      //console.log(cardRef.current); // Access the DOM element
      // Perform actions with the DOM element
      productRef.current.style.display = "none";
    }
  } else {
    if (productRef.current) {
      //console.log(cardRef.current); // Access the DOM element
      // Perform actions with the DOM element
      productRef.current.style.display = "block";
    }
  }

  const showVdoo = () => {
    setshowVdo(true);
    //console.log("showded");
  };

  const hideVdo = () => {
    setshowVdo(false);
    //console.log("hided");
  };

  return (
    <div className="w-full mt-32 relative">
      {products.map((elem, index) => (
        <Product
          key={index}
          showvdo={showVdoo}
          hidevdo={hideVdo}
          count={index}
          mover={mover}
          prodata={elem}
        />
      ))}
      <div
        ref={productRef}
        className="w-full h-full absolute top-0 pointer-events-none"
      >
        <motion.div
          initial={{ y: position, x: "-50%" }}
          animate={{ y: position + "rem" }}
          transition={{ ease: [0.37, 0, 0.63, 1], duration: 0.3 }}
          className="w-96 h-[20rem] absolute left-[45%] rounded-md  overflow-hidden"
        >
          <motion.div
            transition={{ ease: [0.22, 1, 0.36, 1], duration: 0.2 }}
            animate={{ y: -position + "rem" }}
            className="w-full h-full"
          >
            <video
              className="w-full h-full rounded-sm object-contain"
              autoPlay={true}
              muted={true}
              loop={true}
              src="./src/assets/videos/cula-169.mp4"
            ></video>
          </motion.div>
          <motion.div
            transition={{ ease: [0.22, 1, 0.36, 1], duration: 0.2 }}
            animate={{ y: -position + "rem" }}
            className="w-full h-full"
          >
            <video
              className="w-full h-full rounded-sm object-contain"
              autoPlay={true}
              muted={true}
              loop={true}
              src="./src/assets/videos/bcgp-169.webm"
            ></video>
          </motion.div>
          <motion.div
            transition={{ ease: [0.22, 1, 0.36, 1], duration: 0.2 }}
            animate={{ y: -position + "rem" }}
            className="w-full h-full"
          >
            <video
              autoPlay={true}
              muted={true}
              loop={true}
              className="w-full h-full rounded-sm object-contain"
              src="./src/assets/videos/arqitel-169.webm"
            ></video>
          </motion.div>
          <motion.div
            transition={{ ease: [0.22, 1, 0.36, 1], duration: 0.2 }}
            animate={{ y: -position + "rem" }}
            className="w-full h-full"
          >
            <video
              autoPlay={true}
              muted={true}
              loop={true}
              className="w-full h-full rounded-sm object-contain"
              src="https://files.refokus.com/storage/v1/object/public/Portfolio%20Videos/sevdesk-169.webm"
            ></video>
          </motion.div>
          <motion.div
            transition={{ ease: [0.22, 1, 0.36, 1], duration: 0.2 }}
            animate={{ y: -position + "rem" }}
            className="w-full h-full"
          >
            <video
              autoPlay={true}
              muted={true}
              loop={true}
              className="w-full h-full rounded-sm object-contain"
              src="https://files.refokus.com/storage/v1/object/public/Portfolio%20Videos/layoutland-169.webm"
            ></video>
          </motion.div>
          <motion.div
            transition={{ ease: [0.22, 1, 0.36, 1], duration: 0.2 }}
            animate={{ y: -position + "rem" }}
            className="w-full h-full"
          >
            <video
              autoPlay={true}
              muted={true}
              loop={true}
              className="w-full h-full rounded-sm object-contain"
              src="https://files.refokus.com/storage/v1/object/public/Portfolio%20Videos/singularity-169.webm"
            ></video>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Products;
