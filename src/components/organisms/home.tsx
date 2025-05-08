"use client";

import "swiper/css";
import "swiper/css/pagination";
import React from "react";
import { HeroSection } from "./sections/HeroSection";
import { ProductSection } from "./sections/ProductSections";
import { products } from "@/data/dummyData";

const Home = () => {
  return (
    <div className="mt-7 flex min-h-screen flex-col items-center md:mt-[70px]">
      <HeroSection products={products} />
      <ProductSection products={products} />
    </div>
  );
};

export default Home;
