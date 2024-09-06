import React, { useRef } from "react";
import Button from "./Button";

const Product = ({ prodata, count, mover, showvdo, hidevdo }) => {
  const cardRef = useRef(null);
  const handleMouse = () => {
    if (cardRef.current) {
      //console.log(cardRef.current); // Access the DOM element
      // Perform actions with the DOM element
      cardRef.current.style.backgroundColor = prodata.hover;
    }
  };

  const handleMouseLeave = () => {
    if (cardRef.current) {
      //console.log(cardRef.current); // Access the DOM element
      // Perform actions with the DOM element
      cardRef.current.style.backgroundColor = "transparent";
    }
  };

  return (
    <div
      style={{ transition: "background 0.3s ease" }}
      ref={cardRef}
      onMouseEnter={() => {
        handleMouse();
        showvdo();
      }}
      onMouseLeave={() => {
        handleMouseLeave();
        hidevdo();
      }}
      className="w-full h-[20rem] hover:border-y-[1px] hover:border-y-zinc-500  py-20 text-white"
    >
      <div
        onMouseEnter={() => {
          mover(count);
        }}
        className="max-w-screen-lg mx-auto flex items-center justify-between"
      >
        <h1 className="font-medium text-5xl capitalize">{prodata.title}</h1>
        <div className="details w-1/3">
          <p className="mb-10">{prodata.description}</p>
          {prodata.live && (
            <div className="w-1/2 pr-10 inline-block">
              <Button title="View Live" />
            </div>
          )}
          {prodata.case && (
            <div className="w-1/2 pr-10 inline-block">
              <Button title="Case Study" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
