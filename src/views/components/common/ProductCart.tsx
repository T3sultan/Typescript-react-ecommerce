import React from "react";

const ProductCart = ({
  product,
  onclick,
}: {
  product: IProduct;
  onclick: (id: string | undefined) => void;
}) => {
  if (!product._id) return null;
  return (
    <div
      className="p-3 rounded-sm shadow hover:shadow-xl hover:cursor-pointer"
      onClick={() => onclick(product._id)}
    >
      <div className="relative pb-60">
        <img
          className="absolute object-cover w-full h-full"
          src={process.env.REACT_APP_IMAGE_BASE_URL + product.image}
          alt=""
        />
      </div>
      <div className="pt-3">
        <h4>{product.name}</h4>
        <p className="text-lg font-semibold">{product.price} $</p>
      </div>
    </div>
  );
};

export default ProductCart;
