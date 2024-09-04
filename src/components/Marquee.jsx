import React from "react";

const Marquee = ({ imagesUrls }) => {
  return (
    <div className="flex w-full justify-around py-8 gap-20 whitespace-nowrap overflow-hidden">
      {imagesUrls.map((url) => (
        <img
          src={url}
          className="w-28 flex flex-shrink-0 items-center justify-center"
        />
      ))}
      {imagesUrls.map((url) => (
        <img
          src={url}
          className="w-28 flex flex-shrink-0 items-center justify-center"
        />
      ))}
    </div>
  );
};

export default Marquee;
