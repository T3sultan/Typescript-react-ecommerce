import React from "react";

const ProductCart = ({ product }: { product: any[] }) => {
  return (
    <div>
      <div>
        <img src="" alt="" />
      </div>
      <div>
        <h4>{product}</h4>
        <p>Product Price</p>
      </div>
    </div>
  );
};

export default ProductCart;
