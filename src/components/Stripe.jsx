import React from "react";

const Stripe = ({ val }) => {
  return (
    <div
      style={{
        borderTop: "1px solid gray",
        borderBottom: "1px solid gray",
        borderRight: "1px solid gray",
        borderLeft: "none",
      }}
      className="w-1/6 py-4 px-8 flex items-center justify-between"
    >
      <img className="w-20" src={val.image} alt="" />
      <span className="font-semibold">{val.number}</span>
    </div>
  );
};

export default Stripe;
