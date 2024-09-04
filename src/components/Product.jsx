import React from "react";
import Button from "./Button";

const Product = ({ prodata }) => {
  return (
    <div className="w-full py-20 text-white">
      <div className="max-w-screen-lg mx-auto flex items-center justify-between">
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
