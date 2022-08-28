import React, { useEffect, useState } from "react";
import ProductService from "../../../services/Product.service";
import DSlider from "../../components/custom/DSlider";
import ProductsArray from "./ProductsArray";

const Home = () => {
  const [products, setProducts] = useState<[] | any[]>();

  useEffect(() => {
    ProductService.getAllProducts()
      .then(data => setProducts(data))
      .catch(err => console.log(err));
  }, []);

  return (
    <main>
      <div className="py-10">
        <DSlider />
      </div>
      <div>{products && <ProductsArray products={products} />}</div>
    </main>
  );
};

export default Home;
