import React from "react";
import Header from "../../componets/Header";
import Hero from "./Hero";
import ProductListing from "./ProductListing";
import Product from "./Product";
import Slider from "./Slider";

const Shop = () => {
  return (
    <>
      <Hero />
      <Slider />
      <Product />
      <ProductListing />
    </>
  );
};

export default Shop;
