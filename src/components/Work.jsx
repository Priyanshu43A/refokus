import React, { useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";

const Work = () => {
  const [images, setimages] = useState([
    {
      url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d00aad489e305be67378_ProjectName%20-%2016%209%20(B)-p-500.webp",
      top: "50%",
      left: "50%",
      isVisible: false,
    },
    {
      url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d86ccd1552e692874437_Arqitel%20-%2016%209%20(B)-p-500.webp",
      top: "54%",
      left: "44%",
      isVisible: false,
    },
    {
      url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d8caf827831eb8ff92f7_Layout%20Land%20-%2016%209%20(B)-p-500.webp",
      top: "62%",
      left: "48%",
      isVisible: false,
    },
    {
      url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d7ef6620081c6c647958_Singularity%20-%2016%209%20(B)-p-500.webp",
      top: "65%",
      left: "50%",
      isVisible: false,
    },
    {
      url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d84ab75f918dc8617448_YIR%202022%20-4%204.webp",
      top: "70%",
      left: "48%",
      isVisible: false,
    },
    {
      url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d6cd0762e6678518b000_Summon%20-%204%203.webp",
      top: "65%",
      left: "50%",
      isVisible: false,
    },
  ]);
  const { scrollYProgress } = useScroll();

  scrollYProgress.on("change", (data) => {
    function imagesShow(arr) {
      setimages((prev) =>
        prev.map((item, index) =>
          arr.indexOf(index) === -1
            ? { ...item, isVisible: false }
            : {
                ...item,
                isVisible: true,
              }
        )
      );
    }

    switch (Math.floor(data * 100)) {
      case 1:
        imagesShow([]);
        break;
      case 2:
        imagesShow([0]);

        break;
      case 3:
        imagesShow([0, 1]);

        break;
      case 4:
        imagesShow([0, 1, 2]);

        break;
      case 6:
        imagesShow([0, 1, 2, 3]);

        break;
      case 8:
        imagesShow([0, 1, 2, 3, 4]);

        break;
    }
  });

  return (
    <div className="w-full mt-16">
      <div className="max-w-screen-lg relative mx-auto text-center">
        <h1 className="text-[28vw] leading-none font-medium select-none tracking-tight">
          work
        </h1>
        <div className="w-full h-full top-0 absolute">
          {images.map((elem, index) => {
            return (
              elem.isVisible && (
                <img
                  style={{ top: elem.top, left: elem.left }}
                  className="w-1/5 -translate-y-[50%] -translate-x-[50%] absolute"
                  src={elem.url}
                ></img>
              )
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Work;
