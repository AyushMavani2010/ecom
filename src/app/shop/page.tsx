import React from "react";
import Hero from "../../pages/shop/Hero";
import Slider from "../../pages/shop/Slider";
import Product from "../../pages/shop/Product";
import ProductListing from "../../pages/shop/ProductListing";
import Header from "@/src/componets/Header";
import Footer from "@/src/componets/Footer";

const page = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Slider />
      <Product />
      <Footer />
      {/* <ProductListing /> */}
    </div>
  );
};

export default page;
