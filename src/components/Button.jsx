import React from "react";
import { IoIosReturnRight } from "react-icons/io";

const Button = ({ title = "Get Started" }) => {
  return (
    <div className="px-4 py-2 bg-zinc-100 rounded-full flex cursor-pointer gap-2 items-center justify-between text-black">
      <span className="text-sm font-medium">{title}</span>
      <IoIosReturnRight />
    </div>
  );
};

export default Button;
