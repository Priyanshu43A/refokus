import React from "react";
import Product from "./Product";

const Products = () => {
  const products = [
    {
      title: "Arquitel",
      description:
        "A versatile communication tool for businesses. A versatile communication tool for businesses.",
      case: false,
      live: true,
    },
    {
      title: "TTR",
      description:
        "An AI-driven data analysis platform. An AI-driven data analysis platform.",
      case: true,
      live: true,
    },
    {
      title: "Yahoo",
      description:
        "A popular search engine and web portal. A popular search engine and web portal.",
      case: false,
      live: true,
    },
    {
      title: "Nimbus",
      description:
        "A cloud storage solution with enhanced security. A cloud storage solution with enhanced security.",
      case: true,
      live: true,
    },
    {
      title: "Solix",
      description:
        "A solar energy management system. A solar energy management system.",
      case: true,
      live: true,
    },
    {
      title: "Zenith",
      description:
        "A project management tool for teams. A project management tool for teams.",
      case: false,
      live: true,
    },
  ];

  return (
    <div className="w-full mt-32">
      {products.map((elem, index) => (
        <Product key={index} prodata={elem} />
      ))}
    </div>
  );
};

export default Products;
