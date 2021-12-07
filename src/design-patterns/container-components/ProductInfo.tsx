import React from "react";
import { Product } from "../../types/product";

type ProductInfoProps = {
  product?: Product;
};

function ProductInfo({ product }: ProductInfoProps) {
  return product ? (
    <>
      <h3>{product.name}</h3>
      <p>{product.price}</p>
      <h3>Description:</h3>
      <p>{product.description}</p>
      <p>Average Rating: {product.rating}</p>
    </>
  ) : (
    <p>Loading...</p>
  );
}

export { ProductInfo };
