import React from "react";

const Footer = () => {
  return (
    <div className="w-full">
      <div className="max-w-screen-lg mx-auto flex gap-36 py-10">
        <div className="basis-1/2">
          <h1 className="text-[10vw] font-semibold tracking-tight leading-none">
            refokus.
          </h1>
        </div>
        <div className="basis-1/2 flex gap-8">
          <div className="flex flex-col">
            <h4 className="mb-8 text-sm">Socials</h4>
            {["Instagram", "Twitter", "LinkedIn"].map((elem, index) => {
              return (
                <a
                  key={index}
                  className="mb-1 text-sm hover:text-zinc-100 text-zinc-500"
                  href="#"
                >
                  {elem}
                </a>
              );
            })}
          </div>
          <div className="flex flex-col">
            <h4 className="mb-8 text-sm text-zinc-500">Links</h4>
            {["Home", "Work", "Careers", "Contact"].map((elem, index) => {
              return (
                <a
                  key={index}
                  className="mb-1 text-sm hover:text-zinc-500 text-zinc-100"
                  href="#"
                >
                  {elem}
                </a>
              );
            })}
          </div>
          <div className="flex flex-col items-end">
            <p className="w-2/3 text-sm text-end">
              Made with love, Creativity and sleepless nightsss by{" "}
              <span className="text-green-500">PRIYANSHU.</span> <br /> Inpired
              by{" "}
              <span className="text-green-800">
                <a href="https://refokus.com">refokus</a>
              </span>{" "}
              <br /> Majorly built in{" "}
              <span className="text-green-500">REACT</span>
            </p>
            <button className="py-2 px-8 mt-4 bg-blue-700 font-semibold">
              <a href="tel:+918057607415">Hire me.</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
