import React from "react";
import Card from "./Card";

const Cards = () => {
  return (
    <div className="w-full">
      <div className="max-w-screen-lg mx-auto py-20 flex gap-3">
        <Card
          para={true}
          bgColor="#27272a"
          hover="#3f3f46"
          start={false}
          width="basis-1/3"
        />
        <Card
          para={false}
          hover="#6d28d9"
          bgColor="#27272a"
          start={true}
          width="basis-2/3"
        />
      </div>
    </div>
  );
};

export default Cards;
