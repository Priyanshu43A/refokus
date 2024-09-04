import React from "react";
import Button from "./Button";

const Navbar = () => {
  return (
    <div className="max-w-screen-lg py-6 mx-auto border-b-[1px] border-zinc-700 flex justify-between items-center">
      <div className="nav-left flex items-center">
        <div className="logo w-[12%]">
          <img
            className="invert w-full h-full"
            src="https://cdn.prod.website-files.com/5dbfbe5b9bf13e1ebb54e91f/60524e07591b9057c241c060_refokus-logo-black.svg"
            alt=""
          />
        </div>
        <div className="links flex items-center gap-12 ml-20">
          {["Home", "Work", "Culture", "", "News"].map((elem, index) =>
            elem.length === 0 ? (
              <span className="w-[1px] h-10 bg-zinc-700"></span>
            ) : (
              <a
                href="#"
                className="text-sm font-regular flex items-center gap-1"
              >
                {index === 1 && (
                  <span
                    style={{ boxShadow: "0 0 0.25rem #00FF19" }}
                    className="inline-block w-1 h-1 bg-green-500 rounded-full"
                  ></span>
                )}
                {elem}
              </a>
            )
          )}
        </div>
      </div>
      <div className="nav-right">
        <Button />
      </div>
    </div>
  );
};

export default Navbar;
