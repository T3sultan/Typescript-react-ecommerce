import React from "react";
import DSlider from "../../components/custom/DSlider";
import ProductsArray from "./ProductsArray";

const Home = () => {
  return (
    <main>
      <div className="py-10">
        <DSlider />
      </div>
      <div>
        <ProductsArray />
      </div>
    </main>
  );
};

export default Home;
