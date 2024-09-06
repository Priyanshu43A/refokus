import React from "react";
import { FaGithubSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Dtls = () => {
  return (
    <div className="w-full mt-10 py-10">
      <div className="max-w-screen-lg border-t-[1px] border-gray-700 mx-auto pt-5 pb-10 flex justify-between items-center">
        <p className="text-sm text-gray-400">7 - SEP - 2024 | 01:53 AM</p>
        <p className="text-sm font-semibold text-gray-400">
          PRIYANSHU - Addicted to WEB DEVELOPMENT #sheriyans
        </p>

        <div className="px-5 flex items-center gap-4">
          <a className="text-3xl" href="https://github.com/Priyanshu43A">
            {" "}
            <FaGithubSquare />{" "}
          </a>
          <a
            className="text-3xl"
            href="https://www.instagram.com/underrated_programmer/"
          >
            {" "}
            <FaInstagramSquare />{" "}
          </a>
          <a
            className="text-3xl"
            href="https://www.linkedin.com/in/gw-priyanshu-a635a331a/"
          >
            {" "}
            <FaLinkedin />{" "}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Dtls;
