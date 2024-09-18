import React from "react";
import Hero from "./Hero";
import Category from "./Category";
import Product from "./Product";
import Gallery from "./Gallery";
import Faq from "./Faq";
import Header from "@/src/componets/Header";

const Index = () => {
  return (
    <>
      <Hero />
      <Category />
      <Product />
      <Gallery />
      <Faq />
    </>
  );
};

export default Index;