import React from "react";
import { useNavigate } from "react-router-dom";
import ProductCart from "../../components/common/ProductCart";

const ProductsArray = ({ products }: { products: Required<IProduct[]> }) => {
  let navigate = useNavigate();

  const onClick = (id: string | undefined): void => {
    navigate("/product/" + id);
  };
  return (
    <div className="grid-cols-2 grid gap-4 text-gray-800 md:grid-flow-col-4 lg:grid-cols-5">
      {products.map(product => (
        <ProductCart product={product} onclick={() => onClick} />
      ))}
    </div>
  );
};

export default ProductsArray;
