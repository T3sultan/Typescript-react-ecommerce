import React from "react";
import ProductCart from "../../components/common/ProductCart";

const ProductsArray = ({ products }: { products: any[] }) => {
  return (
    <div className="grid-cols-2 grid gap-4 text-gray-800 md:grid-flow-col-4 lg:grid-cols-5">
      {products.map(product => (
        <ProductCart product={product} />
      ))}
    </div>
  );
};

export default ProductsArray;
