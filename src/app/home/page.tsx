import React from "react";
import Hero from "./Hero";
import Category from "./Category";
import Product from "./Product";
import Gallery from "./Gallery";
import Faq from "./Faq";
import Header from "@/src/componets/Header";
import Footer from "@/src/componets/Footer";

const Index = () => {
  return (
    <>
      <Header />
      <Hero />
      <Category />
      <Product />
      <Gallery />
      <Faq />
      <Footer />
    </>
  );
};

export default Index;
