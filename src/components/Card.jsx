import React, { useRef } from "react";
import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";

const Card = ({ width, para, start, hover = "false", bgColor }) => {
  return (
    <motion.div
      whileHover={{
        backgroundColor: hover === true ? "#7443ff" : "#3f3f3f7c",
      }}
      className={`${width} card flex flex-col justify-between bg-zinc-800 p-5 rounded-xl text-white`}
    >
      <div className="top w-full">
        <div className="flex items-center justify-between">
          <h3 className="font-medium">One heading</h3>
          <BsArrowRight />
        </div>
        <h1 className="text-2xl mt-5 tracking-tight font-medium">
          Whatever heading
        </h1>
      </div>
      <div className="bottom pt-36">
        {para && <p>This is a sample paragraph.</p>}
        {start && (
          <div>
            <h1 className="text-6xl tracking-tight font-medium">
              start a project
            </h1>
            <button className="rounded-full px-6 mt-6 py-2 border-[1px] border-zinc-500">
              Contact us
            </button>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Card;
