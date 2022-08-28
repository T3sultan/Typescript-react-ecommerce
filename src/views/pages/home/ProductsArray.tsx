import React from "react";
import ProductCart from "../../components/common/ProductCart";

const ProductsArray = () => {
  return (
    <div className="grid-cols-4">
      {[1, 2, 3, 4].map(item => (
        <ProductCart />
      ))}
    </div>
  );
};

export default ProductsArray;
